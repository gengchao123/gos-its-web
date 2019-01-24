function setStorage (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

function getStorageByKey (key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function removeStorageByKey (key) {
  window.localStorage.removeItem(key)
}

function clearStorage () {
  window.localStorage.clear()
}

function setSession (key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

function getSessionByKey (key) {
  return JSON.parse(window.sessionStorage.getItem(key))
}

function removeSessionByKey (key) {
  window.sessionStorage.removeItem(key)
}

function clearSession () {
  window.sessionStorage.clear()
}

export {
  setStorage,
  getStorageByKey,
  removeStorageByKey,
  clearStorage,
  setSession,
  getSessionByKey,
  removeSessionByKey,
  clearSession
}
