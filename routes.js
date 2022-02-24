const ONE_MINUTE = 60
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR
const ONE_YEAR = 365 * ONE_DAY

const { Router } = require('@layer0/core/router')

const pageCache = {
  edge: {
    maxAgeSeconds: ONE_HOUR,
    forcePrivateCaching: true,
  },
  browser: {
    serviceWorkerSeconds: ONE_HOUR,
  },
}

const assetCache = {
  edge: {
    maxAgeSeconds: ONE_YEAR,
    forcePrivateCaching: true,
  },
  browser: {
    serviceWorkerSeconds: ONE_YEAR,
  },
}

module.exports = new Router()
  .match('/', ({ cache }) => {
    cache(assetCache)
  })
  .match('/why', ({ cache }) => {
    cache(assetCache)
  })
  .match('/example', ({ cache }) => {
    cache(assetCache)
  })
  .match('/styles/:file', ({ cache, serveStatic }) => {
    cache(assetCache)
    serveStatic('public/styles/:file')
  })
  .match('/static/:file', ({ cache, serveStatic }) => {
    cache(assetCache)
    serveStatic('public/static/:file')
  })
  .match('/fonts/:file', ({ cache, serveStatic }) => {
    cache(assetCache)
    serveStatic('public/fonts/:file')
  })
  .match('/build/:path*', ({ cache }) => {
    cache(assetCache)
  })
  .match('/l0-storyblok/:path*', ({ cache, proxy }) => {
    cache(assetCache)
    proxy('storyblok', { path: ':path*' })
  })
  .match('/l0-image/:path*', ({ cache, proxy }) => {
    cache(assetCache)
    proxy('image', { path: ':path*' })
  })
  .fallback(({ renderWithApp }) => renderWithApp())
