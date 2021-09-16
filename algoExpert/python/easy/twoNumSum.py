def twoNumberSum(array, targetSum):

	for index1, num1 in enumerate(array):
		for index2, num2 in enumerate(array):
			if index1 == index2:
				continue
			if num1 + num2 == targetSum:
				return [num1, num2]

	return []
