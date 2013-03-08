
module.exports = function (args) {

  if (arguments.length === 1) {
    args.remove = remove;
    return;
  }

  var arr = Array.prototype.shift.call(arguments);
  return remove.apply(arr, arguments);
}

function remove (from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
}

