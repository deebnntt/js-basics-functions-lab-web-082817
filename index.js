// Code your solution in this file!

function calculateVertical(block1, block2) {
  return ((block2 - block1) * 264);
}

function distanceFromHqInBlocks(pickupBlock) {
  return Math.abs(42 - pickupBlock);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(((block2 - block1) * 264));
}

function calculatesFarePrice(start, destination) {
  feet = distanceTravelledInFeet(start,destination);
  if (feet <= 400 ) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return feet * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
