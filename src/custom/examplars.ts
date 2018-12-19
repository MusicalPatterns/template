import { DictionaryOf, from, Index, Scalar } from '@musical-patterns/utilities'
// tslint:disable-next-line:no-reaching-imports
import { buildBlocks } from '../materials/blocks'
import { Exemplar, to as templateTo } from '../nominal'
import { EXAMPLE_CUSTOM_CONSTANT } from './constants'

const buildExemplars: () => DictionaryOf<Exemplar[]> =
    (): DictionaryOf<Exemplar[]> => {
        const {
            firstBlock,
            secondBlock,
        } = buildBlocks()

        const firstExemplars: Exemplar[] = firstBlock.map(
            (blockElement: Index): Exemplar =>
                templateTo.Exemplar(from.Index(blockElement) % EXAMPLE_CUSTOM_CONSTANT),
        )

        const secondExemplars: Exemplar[] = secondBlock.map(
            (blockElement: Index): Exemplar =>
                templateTo.Exemplar(from.Index(blockElement)),
        )

        return {
            firstExemplars,
            secondExemplars,
        }
    }

export {
    buildExemplars,
}
