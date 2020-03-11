function range(start, end) {
  const arr = [start];
  if (start === end) {
    return arr;
  }
  return arr.concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    
  }
}