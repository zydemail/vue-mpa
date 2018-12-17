let cookie = {
  getCookie (name) {
    // 读取COOKIE
    var reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)')
    var val = document.cookie.match(reg)
    if (!val || !val[2]) { return '' }
    var res = val[2]
    try {
      if (/(%[0-9A-F]{2}){2,}/.test(res)) { // utf8编码
        return decodeURIComponent(res)
      } else { // unicode编码
        return unescape(res)
      }
    } catch (e) {
      return unescape(res)
    }
  },
  setCookie (name, value, expires, path, domain, secure) {
    // 写入COOKIES
    /* eslint-disable */
    var exp = new Date()
    expires = expires || null
    path = path || '/'
    domain = domain || null
    secure = secure || false
    if (expires) exp.setMinutes(exp.getMinutes() + parseInt(expires))
    document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '')
  },
  delCookie (name, path, domain, secure) {
    // 删除cookie
    var value = this.getCookie(name)
    if (value != null) {
      var exp = new Date()
      exp.setMinutes(exp.getMinutes() - 1000)
      path = path || '/'
      document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '')
    }
  }
}

export default cookie
