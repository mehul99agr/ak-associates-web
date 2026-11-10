"""Tell IndexNow search engines (Bing, Yandex, Seznam, Naver; Bing feeds ChatGPT search)
about new or changed URLs. Run AFTER the deploy is live.

  python scripts/indexnow.py                 # every URL in the live sitemap
  python scripts/indexnow.py /blog/a /consult  # only these paths
"""
import json, re, sys, urllib.request

HOST = 'agrawalkhandelwal.com'
KEY = '4bb375fd3e44d4e404a86a200473c38f'  # public by design; file lives at /<KEY>.txt

def main():
    if len(sys.argv) > 1:
        urls = [f'https://{HOST}{p if p.startswith("/") else "/" + p}' for p in sys.argv[1:]]
    else:
        sm = urllib.request.urlopen(f'https://{HOST}/sitemap.xml', timeout=30).read().decode()
        urls = re.findall(r'<loc>(.*?)</loc>', sm)
    body = json.dumps({'host': HOST, 'key': KEY, 'keyLocation': f'https://{HOST}/{KEY}.txt', 'urlList': urls}).encode()
    req = urllib.request.Request('https://api.indexnow.org/indexnow', data=body,
                                 headers={'Content-Type': 'application/json; charset=utf-8'})
    try:
        r = urllib.request.urlopen(req, timeout=30)
        print(r.status, f'submitted {len(urls)} URLs')
    except urllib.error.HTTPError as e:
        print(e.code, e.read().decode()[:300])

if __name__ == '__main__':
    main()
