Array.prototype.bubbleSort = function(){
  let sorted = false;
  while (!sorted){
    sorted = true;
    for (let i=0; i<this.length; i++){
      if(this[i] > this[i+1] ){
        sorted = false;
        [this[i], this[i + 1]] = [this[i+1], this[i]];
      }
    }
  }
  return this;
};

String.prototype.substring = function(){
  let subs = [];
  for (let i=0; i<this.length;i++){
    for (let j=0; j<this.length; j++){
      if (j>=i){
        subs.push(this.slice(i, j+1));
      } 
    }
  }
  return subs;
};