self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      return cache.add('index.html');
    })
  );
});

self.addEventListener('push', function(e) {
  const payload = e.data ? e.data.text() : '';
  var options = {
    body: payload,
    badge: '/badge.png',
    icon: '/kisi.webp',
  };
  e.waitUntil(self.registration.showNotification('kisi', options));
});

self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
      })
      .then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if ('focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow('/');
      })
  );
});
