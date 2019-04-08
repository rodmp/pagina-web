export default (expMonth, expYear) => {
	let month
	if (expMonth < 10) {
		month = `0${expMonth}`
	} else {
		month = expMonth
	}
	return `${month}/${expYear}`
}
