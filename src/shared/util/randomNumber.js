export default (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const randomArrayElements = (array, n) => array.sort(
	() => 0.5 - Math.random(),
).slice(0, n)
