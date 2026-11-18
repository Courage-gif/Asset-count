const C='rth-asset-count-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.add('./')).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put('./',k));return r}).catch(()=>caches.match('./')))});
