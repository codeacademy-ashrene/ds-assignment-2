// const printArray = (array) => {
//   array.forEach(element => {
//     console.log(element);
//   });
// }
const circularSort = (x) => {
  let i;
  let length = x.length;
  let y = [];

  for(i = 0; i< length ; i++){
    y[i] = -1;
  }
  y[0] = x[0];
  var immediateSmall = 0, immediateLarge = 0;
 //printArray(y);
 console.log(y);
  for(i = 1; i < x.length; i++){
    let S = 0, L= 0;
    let key = x[i];
    var largeKey = -1, smallKey = -1;
    console.log(key);
    for(j=0; j<y.length;j++){
      if((y[j]<key)&&(y[j] != -1)){
        S++;
        console.log(S);
        if(smallKey < y[j]){
          smallKey = y[j];
          immediateSmall = j;
        }
          
        console.log(immediateSmall);
      }
      if((y[j] > key)&&(y[j] != -1)){
        L++;
        console.log(L);
        if(y[j] > largeKey){
          largeKey = y[j];
          immediateLarge = j;
        }
        
        console.log(immediateLarge);
      }
    }

    if(S>=L){
      // shift L right
      if(L>0){
        for(k = L; k>=1; k--){
            // if(y[immediateLarge+L] == -1){
            //   y[immediateLarge+k] = y[immediateLarge+k-1];
            // }
            // else{
              y[(immediateLarge+k) % length] = y[(immediateLarge+k-1) % length];
              console.log(y);
            //}
        }
        y[immediateLarge] = key;
      }
      if(L === 0){
        y[(immediateSmall+1) % length] = key;
        console.log(y[(immediateSmall+1) % length])
        console.log((immediateSmall+1) % length)
      }
      
      console.log(y);

    }
    else{
      if(S>0){
        for(k = S; k>=1; k--){
          // if(y[immediateSmall-S] == -1){
          //   y[immediateLarge+k] = y[immediateLarge+k-1];
          // }
          // else{
            y[((length + (immediateSmall-k))%length)] = y[((length + (immediateSmall-k+1))%length)];
            console.log(y);
          // }
        }
        y[immediateSmall] = key;
      }
      if (S === 0){
        y[(length - (immediateLarge+1))] = key;
        console.log(y[(length - (immediateLarge+1))])
        console.log((length - (immediateLarge+1)));
      }
    
    console.log(y);
    }
    //printArray(y);
    console.log(y);
  }
  return y;
}

module.exports = circularSort