import { buildStandardScales } from '@musical-patterns/pattern'
import { DictionaryOf, from, Scalar, to } from '@musical-patterns/utilities'
import { exampleUtility } from '../utilities'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const { subharmonicSeriesScale } = buildStandardScales()

        const subharmonicSeriesScalars: Scalar[] = subharmonicSeriesScale.scalars || []
        const exampleScalars: Scalar[] = subharmonicSeriesScalars
            .map(from.Scalar)
            .map(to.Power)
            .map(exampleUtility)

        return {
            exampleScalars,
        }
    }

export {
    buildScalars,
}
