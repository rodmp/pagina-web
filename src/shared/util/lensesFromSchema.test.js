import lensesFromSchema from 'sls-aws/src/shared/util/lensesFromSchema'
import { variableSchemaKey } from 'sls-aws/src/shared/util/commonLenses'

const testObj = {
	str: 'str',
	nestedObj: {
		nestedStr: 'nestedStr',
		doubleNestedObj: {
			doubleNestedStr: 'doubleNestedStr'
		}
	},
	arr: [
		{ arrStr: 'arrStr' },
		{ arrStr: 'arrStr2' },
	],
	varPathParent: {
		testVarKey: {
			varPathStr: 'varPathStr',
		},
	},
}

const testSchema = {
	type: 'object',
	properties: {
		str: { type: 'string' },
		nestedObj: {
			type: 'object',
			properties: {
				nestedStr: { type: 'string' },
				doubleNestedObj: {
					type: 'object',
					properties: {
						doubleNestedStr: { type: 'string' },
					}
				}
			},
		},
		arr: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					arrStr: { type: 'string' }
				}
			}
		},
		varPathParent: {
			type: 'object',
			patternProperties: {
				[variableSchemaKey]: {
					type: 'object',
					properties: {
						varPathStr: { type: 'varPathStr' }
					}
				}
			},
		},
	}
}

const {
	viewTestStr,
	viewTestNestedStr,
	viewTestNestedObj,
	viewTestDoubleNestedObj,
	viewTestDoubleNestedStr,
	viewTestArr,
	viewTestArrItem,
	viewTestArrStr,
	viewTestVarPathParent,
	viewTestVarPathParentChild,
	viewTestVarPathStr,
} = lensesFromSchema(
	testSchema,
	{ renames: { somePath: 'test' }, prefix: 'test' }
)

describe('lensesFromSchema', () => {
	test('view top level functions', () => {
		expect(viewTestStr(testObj)).toEqual('str')
	})
	test('nested', () => {
		expect(viewTestNestedStr(testObj)).toEqual('nestedStr')
		expect(viewTestNestedObj(testObj)).toEqual({
			nestedStr: 'nestedStr',
			doubleNestedObj: { doubleNestedStr: 'doubleNestedStr' },
		})
	})
	test('double nested', () => {
		expect(viewTestDoubleNestedStr(testObj)).toEqual('doubleNestedStr')
		expect(viewTestDoubleNestedObj(testObj)).toEqual(
			{ doubleNestedStr: 'doubleNestedStr' }
		)
	})
	test('arrays', () => {
		expect(viewTestArr(testObj)).toEqual([
			{ arrStr: 'arrStr' },
			{ arrStr: 'arrStr2' },
		])
		expect(viewTestArrItem(1, testObj)).toEqual({ arrStr: 'arrStr2' })
		expect(viewTestArrStr(0, testObj)).toEqual('arrStr')
	})
	test('var paths', () => {
		expect(viewTestVarPathParent(testObj)).toEqual({
			testVarKey: {
				varPathStr: 'varPathStr'
			},
		})
		expect(viewTestVarPathParentChild('testVarKey', testObj)).toEqual({
			varPathStr: 'varPathStr'
		})
		expect(viewTestVarPathStr('testVarKey', testObj)).toEqual('varPathStr')
	})
})
