"""Rewrite the visible "Published ..." / "Updated ..." dates in each blog post from the
datePublished / dateModified passed to buildArticleLd, so the page and its schema can't drift.
Run from the project root:  python scripts/sync-blog-dates.py [--check]
--check only reports mismatches and exits 1 if any exist."""
import re, glob, sys, datetime

MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
def fmt(iso):
    d = datetime.date.fromisoformat(iso)
    return f"{MONTHS[d.month-1]} {d.day}, {d.year}"

DATE = r"(?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}"
check = '--check' in sys.argv
changed = []
for f in sorted(glob.glob('src/app/blog/*/page.tsx')):
    raw = open(f, encoding='utf-8', newline='').read()
    pub = re.search(r"datePublished:\s*'(\d{4}-\d{2}-\d{2})'", raw)
    mod = re.search(r"dateModified:\s*'(\d{4}-\d{2}-\d{2})'", raw)
    if not pub:
        continue
    s = raw
    s = re.sub(rf"<span>Published {DATE}</span>", f"<span>Published {fmt(pub.group(1))}</span>", s)
    s = re.sub(rf"<span>{DATE}</span>", f"<span>{fmt(pub.group(1))}</span>", s, count=1) if not re.search(r"<span>Published ", s) else s
    if mod:
        s = re.sub(rf"<span>Updated {DATE}</span>", f"<span>Updated {fmt(mod.group(1))}</span>", s)
    if s != raw:
        changed.append(f)
        if not check:
            open(f, 'w', encoding='utf-8', newline='').write(s)
print(('Would change' if check else 'Changed'), len(changed), 'file(s)')
for f in changed: print(' ', f)
sys.exit(1 if (check and changed) else 0)
