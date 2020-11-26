var isNetConnected = false;
function loadScript(src, cb) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', src);
  if (cb) {
    script.onload = script.onreadystatechange = cb;
  }
  document.getElementsByTagName('head')[0].appendChild(script);
}
loadScript('js/bundle.js');
