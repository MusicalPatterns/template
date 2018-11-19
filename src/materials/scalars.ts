import { from, Scalar, to } from '@musical-patterns/utilities'
import { buildStandardScales, DictionaryOf } from '../../../../src'
import { exampleUtility } from '../utilities'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const { subharmonicSeriesScale } = buildStandardScales()

        const exampleOneTemplateScalars: Scalar[] = subharmonicSeriesScale.scalars
            .map(from.Scalar)
            .map(to.Power)
            .map(exampleUtility)

        return {
            exampleOneTemplateScalars,
        }
    }

export {
    buildScalars,
}
