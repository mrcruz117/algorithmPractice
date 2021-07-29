function hasSingleCycle(array) {
  let elementsVisited = 0;
  let currentIdx = 0;

  while (elementsVisited < array.length) {
    if (elementsVisited > 0 && currentIdx === 0) return false;
    elementsVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
