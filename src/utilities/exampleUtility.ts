import { from, Power, Scalar, to } from '@musical-patterns/utilities'
import { applyPower } from '../../../../src'
import { EXAMPLE_CONSTANT } from './constants'

const exampleUtility: (power: Power) => Scalar =
    (power: Power): Scalar =>
        to.Scalar(applyPower(from.Base(EXAMPLE_CONSTANT), power))

export {
    exampleUtility,
}
