Array.prototype.uniq = function(){
  let uniqArr=[];
  this.forEach((ele) => 
  {
      if(!uniqArr.includes(ele))
      {
        uniqArr.push(ele);
      } 
  } );
  return uniqArr;
};

Array.prototype.twoSum = function(){
    let pairs = [];
    for (let i=0; i<this.length; i++){
      // debugger
      if(this[i]+this[i+1]===0){
        // debugger
        pairs.push([i,i+1]);
      }
    }
    return pairs;
};

Array.prototype.transpose = function(){
  let transposed = [];
  for(let i=0; i<this.length; i++){
    let newSubarr = [];
    for (let j=0; j<this.length; j++){
      newSubarr.push(this[j][i]);
    }
    transposed.push(newSubarr);
  }
  return transposed;
};