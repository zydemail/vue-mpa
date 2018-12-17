export function query (query, url) {
  // query = query.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
  const _query = query.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  var expr = '[\\?&]' + _query + '=([^&#]*)'
  var regex = new RegExp(expr)
  const _url = (url || window.location.href)
  var results = regex.exec(_url)
  if (results !== null) {
    return decodeURIComponent(results[1].replace(/\+/g, ' '))
  } else {
    return ''
  }
}

export function formatTimestamp (e) {
  var t = new Date(1e3 * e)
  var i = t.getFullYear()
  var n = t.getMonth() + 1 < 10 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1
  var o = t.getDate() < 10 ? '0' + t.getDate() : t.getDate()
  return i + '-' + n + '-' + o
}
