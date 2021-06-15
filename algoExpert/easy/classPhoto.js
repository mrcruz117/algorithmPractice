function classPhotos(redShirtHeights, blueShirtHeights) {
  let redInFront = true;
  let blueInFront = true;
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  console.log(blueShirtHeights, redShirtHeights);
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redShirtHeights[i] >= blueShirtHeights[i]) {
      redInFront = false;
    }
  }
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redShirtHeights[i] <= blueShirtHeights[i]) {
      blueInFront = false;
    }
  }
  if (redInFront || blueInFront) {
    return true;
  } else {
    return false;
  }
}
