import { Power, to } from '../../../../../src/indexForTest'
import { exampleUtility } from '../../../src/indexForTest'

describe('example utility', () => {
    it('raises five to the passed power', () => {
        const testPower: Power = to.Power(4)

        expect(exampleUtility(testPower))
            .toBe(to.Scalar(625))
    })
})
