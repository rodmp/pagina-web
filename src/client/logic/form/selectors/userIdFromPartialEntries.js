export default (partialFormEntries) => {
	const partialKeys = Object.keys(partialFormEntries)
	return partialFormEntries[partialKeys[0]].pk
}
