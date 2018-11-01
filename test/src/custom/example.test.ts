import { Scalar, to } from '../../../../../src/indexForTest'
import { buildTemplateExemplars, Exemplar, to as templateTo } from '../../../src/indexForTest'

describe('build template examples', () => {
    describe('example one', () => {
        it('moduluses the first block against three', () => {
            const { exampleOneTemplateExemplars } = buildTemplateExemplars(to.Scalar(1))

            exampleOneTemplateExemplars.forEach((exemplar: Exemplar): void => {
                expect(exemplar)
                    .toBeLessThan(3)
            })
        })
    })

    describe('example two', () => {
        it('multiplies the second block by the pattern duration scalar', () => {
            const patternDurationScalar: Scalar = to.Scalar(2)
            const { exampleTwoTemplateExemplars } = buildTemplateExemplars(patternDurationScalar)

            expect(exampleTwoTemplateExemplars)
                .toEqual([ 14, 0, 12, 16, 0, 14, 6, 8, 4, 2 ].map(templateTo.Exemplar))
        })
    })
})
