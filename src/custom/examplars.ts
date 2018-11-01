import { DictionaryOf, from, Index, Scalar } from '../../../../src'
import { buildTemplateBlocks } from '../materials'
import { Exemplar, to as templateTo } from '../nominal'
import { EXAMPLE_CUSTOM_CONSTANT } from './constants'

const buildTemplateExemplars: (patternDurationScalar: Scalar) => DictionaryOf<Exemplar[]> =
    (patternDurationScalar: Scalar): DictionaryOf<Exemplar[]> => {
        const {
            exampleOneTemplateBlock,
            exampleTwoTemplateBlock,
        } = buildTemplateBlocks()

        const exampleOneTemplateExemplars: Exemplar[] = exampleOneTemplateBlock.map(
            (blockElement: Index): Exemplar =>
                templateTo.Exemplar(from.Index(blockElement) % EXAMPLE_CUSTOM_CONSTANT),
        )

        const exampleTwoTemplateExemplars: Exemplar[] = exampleTwoTemplateBlock.map(
            (blockElement: Index): Exemplar =>
                templateTo.Exemplar(from.Index(blockElement) * from.Scalar(patternDurationScalar)),
        )

        return {
            exampleOneTemplateExemplars,
            exampleTwoTemplateExemplars,
        }
    }

export {
    buildTemplateExemplars,
}
