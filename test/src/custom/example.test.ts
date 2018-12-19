import { buildExemplars, Exemplar, to as templateTo } from '../../../src/indexForTest'

describe('build template examples', () => {
    describe('example one', () => {
        it('moduluses the first block against three', () => {
            const { firstExemplars } = buildExemplars()

            firstExemplars.forEach((exemplar: Exemplar): void => {
                expect(exemplar)
                    .toBeLessThan(3)
            })
        })
    })

    describe('example two', () => {
        it('multiplies the second block by the pattern duration scalar', () => {
            const { secondExemplars } = buildExemplars()

            expect(secondExemplars)
                .toEqual([ 7, 0, 6, 8, 0, 7, 3, 4, 2, 1 ].map(templateTo.Exemplar))
        })
    })
})
