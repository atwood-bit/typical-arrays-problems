exports.min = function min (array) {
  if (array === undefined || array.length === 0)
  return 0;
  let min = array[0];
  array.forEach(function(item, i, array){
    if (item < min) min = item;
  });
  return min;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0)
  return 0;
  let max = array[0];
  array.forEach(function(item, i, array){
    if (item > max) max = item;
  });
  return max;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0)
  return 0;
  let avg = 0;
  array.forEach(function(item, i, array){
    avg += item;
  });
  avg = avg / array.length;
  return avg;
}
