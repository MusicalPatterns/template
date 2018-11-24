import { DictionaryOf, Scalar } from '@musical-patterns/utilities'
import { PartSpec } from '../../../../src'
import { buildExemplars } from '../custom'
import { buildNoteSpec } from './notes'

const buildParts: (patternDurationScalar: Scalar) => DictionaryOf<PartSpec> =
    (patternDurationScalar: Scalar): DictionaryOf<PartSpec> => {
        const {
            exampleOneTemplateExemplars,
            exampleTwoTemplateExemplars,
        } = buildExemplars(patternDurationScalar)

        const exampleOneTemplatePart: PartSpec = exampleOneTemplateExemplars.map(buildNoteSpec)
        const exampleTwoTemplatePart: PartSpec = exampleTwoTemplateExemplars.map(buildNoteSpec)

        return {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        }
    }

export {
    buildParts,
}
