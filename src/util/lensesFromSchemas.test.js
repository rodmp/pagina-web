import lensesFromSchema from 'sls-aws/src/util/lensesFromSchemas'

const testSchema = {
	type: 'object',
	properties: {
		testString: { type: 'string' },
		testBoolean: { type: 'boolean' },
		testNestedObject: {
			type: 'object',
			properties: {
				testNestedString: { type: 'string' },
				testNestedBoolean: { type: 'boolean' },
				testDoubleNestedObject: {
					type: 'object',
					properties: {
						testDoubleNestedString: { type: 'string' },
					}
				}
			}
		},
		testArray: { type: 'array' }
	}
}

describe('lensesFromSchema', () => {
	test('works', () => {
		const lenses = lensesFromSchema(
			'testNamespace',
			testSchema
		)
		expect(
			lenses.testNamespaceTestString.view(
				{ testString: 'foo' }
			)
		).toEqual('foo')
		expect(
			lenses.testNamespaceTestBoolean.view(
				{ testBoolean: true }
			)
		).toEqual(true)
		expect(
			lenses.testNamespaceTestArray.view(
				{ testArray: [1, 2, 3] }
			)
		).toEqual([1, 2, 3])
		expect(
			lenses.testNamespaceTestNestedString.view(
				{ testNestedObject: { testNestedString: 'buz' } }
			)
		).toEqual('buz')
		expect(
			lenses.testNamespaceTestDoubleNestedString.view(
				{ testNestedObject: {
					testDoubleNestedObject: { testDoubleNestedString: 'fec' } }
				}
			)
		).toEqual('fec')
	})
})

