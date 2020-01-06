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


const numDimensions = 100000000
const manhattanArray1 = Array.from({length: numDimensions}, () => Math.floor(Math.random() * numDimensions));
const manhattanArray2 = Array.from({length: numDimensions}, () => Math.floor(Math.random() * numDimensions));

b.suite(
  'Manhattan JS vs. Manhattan Native',

  b.add('Manhattan Distance -- JS', () => {
    manhattanDistance(manhattanArray1, manhattanArray2);
  }),
  b.add('Manhattan Distance -- Native', () => {
    manhattanDistanceNative(manhattanArray1, manhattanArray2);
  }),
  b.cycle(),
  b.complete(),
  b.save({ file: 'manhattan-js-vs-native', version: '1.0.0' }),
  b.save({ file: 'manhattan-js-vs-native', version: 'chart.html' })
);
