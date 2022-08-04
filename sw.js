// install app
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/styles.css", "./img/game-big.png", "./img/table.png"])
        })
    )
})

// cache resources

// retrieve resources

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})


