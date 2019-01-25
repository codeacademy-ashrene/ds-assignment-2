const circularSort = (x) => {
  let i;
  let j;
  let k;
  const length = x.length;
  const y = [];

  for (i = 0; i < length; i += 1) {
    y[i] = -1;
  }

  y[0] = x[0];

  let smallestInArray = 0; let
    largestInArray = 0;
  console.log(y);
  for (i = 1; i < x.length; i += 1) {
    let countSmallerThanKey = 0; let
      countLargerThanKey = 0;
    const key = x[i];
    let largeKey = -1; let
      smallKey = -1;

    for (j = 0; j < y.length; j += 1) {
      if ((y[j] < key) && (y[j] !== -1)) {
        countSmallerThanKey += 1;

        if (smallKey < y[j]) {
          smallKey = y[j];

          smallestInArray = j;
        }
      }
      if ((y[j] > key) && (y[j] !== -1)) {
        countLargerThanKey += 1;

        if (y[j] > largeKey) {
          largeKey = y[j];
          largestInArray = j;
        }
      }
    }

    if (countSmallerThanKey >= countLargerThanKey) {
      if (countLargerThanKey > 0) {
        for (k = countLargerThanKey; k >= 1; k -= 1) {
          y[(largestInArray + k) % length] = y[(largestInArray + k - 1) % length];
        }
        y[largestInArray] = key;
      }
      if (countLargerThanKey === 0) {
        y[(smallestInArray + 1) % length] = key;
      }
    } else {
      if (countSmallerThanKey > 0) {
        for (k = countSmallerThanKey; k >= 1; k -= 1) {
          y[((length + (smallestInArray - k)) % length)] = y[((length + (smallestInArray - k + 1)) % length)];
        }
        y[smallestInArray] = key;
      }
      if (countSmallerThanKey === 0) {
        y[(length - (countLargerThanKey - largestInArray))] = key;
      }
    }
    console.log(y);
  }

  return y;
};

module.exports = circularSort;
