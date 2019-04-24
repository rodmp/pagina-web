export default (body, option) => ({
	id: `${body.id}-${body.userId}-${new Date().getTime()}`,
	name: body.title,
	sku: body.id,
	price: body.myPledge || body.pledgeAmount,
	category: option,
	quantity: '1',
})
