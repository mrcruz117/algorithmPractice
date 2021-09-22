def selectionSort(array):
    currentIndex = 0

	while currentIndex < len(array) - 1:
		smallestIndex = currentIndex
		for i in range(currentIndex + 1, len(array)):
			if array[smallestIndex] > array[i]:
				smallestIndex = i
		swap(currentIndex, smallestIndex, array)
		currentIndex += 1
	return array

def swap(i, j, array):
	array[i], array[j] = array[j], array[i]