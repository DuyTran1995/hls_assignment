/**
 *
 * @param array = array
 * @param min = number
 * @returns number
 */
export function min(array, min = array[0]) {
	for (let i = 0; i < array.length; i++) {
		if (min > array[i]) min = array[i]
	}
	
	return min
}

/**
 *
 * @param array = array
 * @param max = number
 * @returns string
 */
export function max(array, max = array[0]) {
	for (let i = 0 ; i < array.length ; i++) {
		if (max < array[i]) max = array[i]
	}
	
	return max
}
