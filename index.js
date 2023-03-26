// Code your solution in this file!
function distanceFromHqInBlocks(pickup_location) {
  const headquarters = 42;
  const distance = Math.abs(headquarters - pickup_location);
  return distance;
}

function distanceFromHqInFeet(pickup_location) {
  const feet_per_block = 264;
  const distance_in_blocks = distanceFromHqInBlocks(pickup_location);
  const distance_in_feet = distance_in_blocks * feet_per_block;
  return distance_in_feet;
}

function distanceTravelledInFeet(start_block, end_block) {
  const feet_per_block = 264;
  const distance_in_blocks = Math.abs(end_block - start_block);
  const distance_in_feet = distance_in_blocks * feet_per_block;
  return distance_in_feet;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
