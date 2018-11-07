export default (start, end) => Math.floor(Math.random() * end - 1) + start

export const randomArrayElements = (array, n) => array.sort(
	() => 0.5 - Math.random(),
).slice(0, n)
