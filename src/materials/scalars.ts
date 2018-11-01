import { buildStandardScales, DictionaryOf, from, Scalar, to } from '../../../../src'
import { exampleUtility } from '../utilities'

const buildTemplateScalars: () => DictionaryOf<Scalar[]> =
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
    buildTemplateScalars,
}
