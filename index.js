addEventListener('fetch', event => {
  const key = new URL(event.request.url).pathname.replace(/^\//, '')
  event.respondWith(handleRedirect(key))
})

/**
 * @param {string} key
 */
async function handleRedirect(key) {
  if (key === '') {
    return redirect()
  }

  const location = await STORAGE.get(key)
  return redirect(location)
}

/**
 * @param {string} location
 * @returns {Response}
 */
function redirect (location) {
  return new Response(null, {
    status: 302,
    headers: {
      'Location': location ? location : 'https://younggeon.kim' // default redirect
    }
  })
}
