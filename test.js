const b = require('benny')
const {
  euclideanDistance,
  manhattanDistance,
  fractionalDistance,
  minkowskiDistance,
  hellingerDistance,
  chebyshevDistance,
  matchDistance,
  manhattanDistanceNative
} = require('distance-metrics');


const numDimensions = 10000
const manhattanArray1 = Array.from({length: numDimensions}, () => Math.floor(Math.random() * numDimensions));
const manhattanArray2 = Array.from({length: numDimensions}, () => Math.floor(Math.random() * numDimensions));


const jsResult = manhattanDistance(manhattanArray1, manhattanArray2);
const nativeResult = manhattanDistanceNative(manhattanArray1, manhattanArray2);

console.log(`JS:
    \n\tResult: ${jsResult}
`);
console.log(`Native:
    \n\tResult: ${nativeResult}
`);


console.log(`Results Same?: ${jsResult == nativeResult}`);
