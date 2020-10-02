exports.min = function min (array) {
  if((array != null) && (array.length != 0))
  {
    let min = array[0];
    for(var i = 1; i < array.length; i++)
    {
      if (array[i] < min)
        min = array[i];
    }
    return min;
  }
  else
    return 0;
}

exports.max = function max (array) {
  if((array != null) && (array.length != 0))
  {
    let max = array[0];
    for (var i = 1; i < array.length; i++)
    {
      if (array[i] > max)
      max = array[i];
   }
  return max;
  }
  else
    return 0;
}

exports.avg = function avg (array) {
  if((array != null) && (array.length != 0))
  {
    let avg = 0;
    for (var i = 0; i < array.length; i++)
    {
      avg += array[i];
    }
    return avg / array.length;
  }
  else
    return 0;
}
