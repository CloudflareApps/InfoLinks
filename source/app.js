(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS

  if (options.site_status !== 'approved' || !options.pid || !options.wsid) return

  window.infolink_pid = options.pid
  window.infolink_wsid = options.wsid
  // window.infolinks_resources = 'https://resources.infolinks.com/js'
  // window.infolinks_async = true

  var vendorScript = document.createElement('script')
  vendorScript.src = 'https://resources.infolinks.com/js/infolinks_main.js'
  document.head.appendChild(vendorScript)
}())
