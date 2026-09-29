"""Generate the machine-readable files AI agents look for.

1. public/llms-full.txt - full plain-text (Markdown) content of every page in the
   sitemap, extracted from the production build output in .next/server/app.
2. public/.well-known/agent-skills/index.json - discovery index for the SKILL.md
   files in that folder, with the sha256 digest of each one.

Run after a production build, whenever pages or skills change:
    node ".\\node_modules\\next\\dist\\bin\\next" build
    python scripts/generate-agent-files.py
then build once more so the new public/ files are included, and commit them.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup
from markdownify import markdownify

ROOT = Path(__file__).resolve().parent.parent
BASE_URL = 'https://agrawalkhandelwal.com'
BUILD_DIR = ROOT / '.next' / 'server' / 'app'
SKILLS_DIR = ROOT / 'public' / '.well-known' / 'agent-skills'

# Legal boilerplate adds noise without answering anything.
SKIP_PATHS = {'/privacy-policy', '/terms-of-use', '/disclaimer'}


def sitemap_paths():
    source = (ROOT / 'src' / 'app' / 'sitemap.ts').read_text(encoding='utf-8')
    paths = ['/']
    paths += re.findall(r'\$\{BASE_URL\}(/[^`]*)`', source)
    seen, ordered = set(), []
    for p in paths:
        if p not in seen and p not in SKIP_PATHS:
            seen.add(p)
            ordered.append(p)
    return ordered


def page_markdown(path):
    html_file = BUILD_DIR / ('index.html' if path == '/' else path.lstrip('/') + '.html')
    if not html_file.exists():
        return None, None
    soup = BeautifulSoup(html_file.read_text(encoding='utf-8'), 'html.parser')
    main = soup.find('main') or soup.body
    for tag in main.find_all(['script', 'style', 'noscript', 'nav', 'svg', 'form', 'button', 'iframe']):
        tag.decompose()
    for tag in main.find_all(attrs={'aria-hidden': 'true'}):
        tag.decompose()
    h1 = main.find('h1')
    title = h1.get_text(' ', strip=True) if h1 else (soup.title.get_text(strip=True) if soup.title else path)
    md = markdownify(str(main), heading_style='ATX', bullets='-', strip=['img'])
    md = re.sub(r'[ \t]+\n', '\n', md)
    md = re.sub(r'\n{3,}', '\n\n', md).strip()
    # Pages link internally with relative URLs; make them absolute for off-site readers.
    md = re.sub(r'\]\(/', f']({BASE_URL}/', md)
    return title, md


def build_llms_full():
    llms = (ROOT / 'public' / 'llms.txt').read_text(encoding='utf-8')
    summary = next((line for line in llms.splitlines() if line.startswith('> ')), '')
    parts = [
        '# Agrawal Khandelwal & Associates LLP - full site content',
        '',
        summary,
        '',
        f'> Curated index: {BASE_URL}/llms.txt. Guides are general information, not advice for a '
        'specific situation. Each page shows its own Published / Updated date.',
    ]
    missing = []
    for path in sitemap_paths():
        title, md = page_markdown(path)
        if md is None:
            missing.append(path)
            continue
        url = BASE_URL + ('' if path == '/' else path)
        parts += ['', '---', '', f'Source: {url}', '', md]
    out = ROOT / 'public' / 'llms-full.txt'
    out.write_text('\n'.join(parts) + '\n', encoding='utf-8', newline='\n')
    print(f'llms-full.txt: {len(sitemap_paths()) - len(missing)} pages, {out.stat().st_size // 1024} KB')
    if missing:
        print('  not found in build output (run the build first?):', ', '.join(missing))
    return not missing


def frontmatter(text):
    match = re.match(r'---\n(.*?)\n---\n', text, re.S)
    fields = {}
    for line in (match.group(1) if match else '').splitlines():
        key, _, value = line.partition(':')
        fields[key.strip()] = value.strip()
    return fields


def build_skills_index():
    skills = []
    for skill_file in sorted(SKILLS_DIR.glob('*/SKILL.md')):
        raw = skill_file.read_bytes().replace(b'\r\n', b'\n')
        # git stores these files with LF line endings, so hash exactly what is served.
        skill_file.write_bytes(raw)
        meta = frontmatter(raw.decode('utf-8'))
        if meta.get('name') != skill_file.parent.name:
            sys.exit(f'{skill_file}: frontmatter name must match its folder name')
        skills.append({
            'name': meta['name'],
            'type': 'skill-md',
            'description': meta['description'],
            'url': f'{BASE_URL}/.well-known/agent-skills/{meta["name"]}/SKILL.md',
            'digest': 'sha256:' + hashlib.sha256(raw).hexdigest(),
        })
    index = {'$schema': 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', 'skills': skills}
    (SKILLS_DIR / 'index.json').write_text(json.dumps(index, indent=2, ensure_ascii=False) + '\n', encoding='utf-8', newline='\n')
    print(f'agent-skills/index.json: {len(skills)} skills')


if __name__ == '__main__':
    build_skills_index()
    ok = build_llms_full()
    sys.exit(0 if ok else 1)
