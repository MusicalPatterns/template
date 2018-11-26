import { DictionaryOf, from, Index, Scalar } from '@musical-patterns/shared'
import { buildBlocks } from '../materials'
import { Exemplar, to as templateTo } from '../nominal'
import { EXAMPLE_CUSTOM_CONSTANT } from './constants'

const buildExemplars: (patternDurationScalar: Scalar) => DictionaryOf<Exemplar[]> =
    (patternDurationScalar: Scalar): DictionaryOf<Exemplar[]> => {
        const {
            exampleOneTemplateBlock,
            exampleTwoTemplateBlock,
        } = buildBlocks()

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
    buildExemplars,
}
