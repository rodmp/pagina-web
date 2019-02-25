import subObj from 'root/src/shared/util/subObj'

describe('subObj', () => {
	test('substitutes values in result object from substitute obj', () => {
		const mapArray = [
			['substituteKey', { $sub: 'substituteThis' }],
			['leaveAloneKey', 'leaveAlone'],
		]
		const substituteObj = {
			substituteThis: ':D',
		}
		const res = subObj(substituteObj, mapArray)
		expect(res).toEqual({
			substituteKey: ':D',
			leaveAloneKey: 'leaveAlone',
		})
	})
	test('substitutes values from substitute obj with array path', () => {
		const mapArray = [
			['substituteKey', { $sub: ['substituteThis', 'child'] }],
			['leaveAloneKey', 'leaveAlone'],
		]
		const substituteObj = {
			substituteThis: {
				child: ':D',
			},
		}
		const res = subObj(substituteObj, mapArray)
		expect(res).toEqual({
			substituteKey: ':D',
			leaveAloneKey: 'leaveAlone',
		})
	})
})
