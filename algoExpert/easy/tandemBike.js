function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if (fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
  }
  // console.log(redShirtSpeeds,blueShirtSpeeds)
  let totalSpeed = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    if (redShirtSpeeds[i] >= blueShirtSpeeds[i]) {
      totalSpeed += redShirtSpeeds[i];
    } else {
      totalSpeed += blueShirtSpeeds[i];
    }
  }
  return totalSpeed;
}
