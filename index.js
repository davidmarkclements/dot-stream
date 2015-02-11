var PassThrough = require('stream').PassThrough;
function dot(d, t) {
  d = d || '.';
  t = t || 1000;
  var pt = new PassThrough;
  var ivl;
  pt._read = function () {
    if (ivl) {return;}
    ivl = setInterval(pt.push.bind(pt, d), t);
  }
  pt.end = (function (end) { 
    return function () {
      clearInterval(ivl);
      return end();
    }
  }(pt.end.bind(pt)));
  return pt;
}

module.exports = dot;
