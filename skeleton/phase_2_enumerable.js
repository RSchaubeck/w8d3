const arr = [1,3,5,7];

function callBack(ele) {
  return ele + 1;
}

Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function(cb) {
  const arr = [];
  this.myEach(ele => { 
    arr.push(cb(ele));
  });
  return arr;
};

Array.prototype.myReduce = function(cb, initialValue) {
  let startVal = initialValue ? initialValue : 0;
  this.myEach(ele => {
    startVal += ele;
  });
  return startVal;
};

console.log(arr.myMap(callBack));