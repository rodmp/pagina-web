
export default pledge => ({
	image: pledge.image,
	title: pledge.title,
	id: pledge.pk,
	myPledge: pledge.pledgeAmount,
})
