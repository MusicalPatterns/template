import { apply, from, Power, Scalar, to } from '@musical-patterns/utilities'
import { EXAMPLE_CONSTANT } from './constants'

const exampleUtility: (power: Power) => Scalar =
    (power: Power): Scalar =>
        to.Scalar(apply.Power(from.Base(EXAMPLE_CONSTANT), power))

export {
    exampleUtility,
}
