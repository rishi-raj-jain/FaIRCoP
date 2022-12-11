import { Router } from '@edgio/core/router'

module.exports = new Router().static('dist', {
  handler:
    () =>
    ({ cache }) => {
      cache({
        browser: false,
      })
    },
})
