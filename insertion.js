const circularSort = (x) => {
  let i;
  let length = x.length;
  let y = [];

  for(i = 0; i< length ; i++){
    y[i] = -1;
  }
  y[0] = x[0];
  var smallestInArray = 0, largestInArray = 0;
  console.log(y);
  for(i = 1; i < x.length; i++){
    let countSmallerThanKey = 0, countLargerThanKey= 0;
    let key = x[i];
    var largeKey = -1, smallKey = -1;

    for(j=0; j<y.length;j++){
      if((y[j]<key)&&(y[j] != -1)){
        countSmallerThanKey++;

        if(smallKey < y[j]){
          smallKey = y[j];

          smallestInArray = j;
        }

      }
      if((y[j] > key)&&(y[j] != -1)){
        countLargerThanKey++;

        if(y[j] > largeKey){
          largeKey = y[j];
          largestInArray = j;
        }

      }
    }

    if(countSmallerThanKey>=countLargerThanKey){

      if(countLargerThanKey>0){
        for(k = countLargerThanKey; k>=1; k--){

              y[(largestInArray+k) % length] = y[(largestInArray+k-1) % length];

        }
        y[largestInArray] = key;
      }
      if(countLargerThanKey === 0){
        y[(smallestInArray+1) % length] = key;

      }

    }
    else{
      if(countSmallerThanKey>0){
        for(k = countSmallerThanKey; k>=1; k--){

            y[((length + (smallestInArray-k))%length)] = y[((length + (smallestInArray-k+1))%length)];

        }
        y[smallestInArray] = key;
      }
      if (countSmallerThanKey === 0){
        y[(length - (countLargerThanKey - largestInArray))] = key;

      }

    }
    console.log(y);
  }
  
  return y;
}

module.exports = circularSort