export default (time) => {
	if (time >= 86400) {
		return `${Math.ceil(time / 86400)} days`
	}
	return `${Math.ceil(time / 3600)} hours`
}
