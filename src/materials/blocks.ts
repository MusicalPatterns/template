// tslint:disable:no-magic-numbers

import { DictionaryOf } from '@musical-patterns/utilities'
import { Block, to } from '../../../../src'

const buildBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const exampleOneTemplateBlock: Block = to.Block([ 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4 ])
        const exampleTwoTemplateBlock: Block = to.Block([ 7, 0, 6, 8, 0, 7, 3, 4, 2, 1 ])

        return {
            exampleOneTemplateBlock,
            exampleTwoTemplateBlock,
        }
    }

export {
    buildBlocks,
}
