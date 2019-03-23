export default (dateInNumberFormat) => {
	const date = new Date(dateInNumberFormat)
	let month = (date.getUTCMonth() + 1).toString()
	if (month.length === 1) {
		month = `0${month}`
	}
	const year = date.getFullYear().toLocaleString().slice(3, 5)
	return `${month}/${year}`
}
