import { DictionaryOf, Part, Scalar } from '../../../../src'
import { buildExemplars } from '../custom'
import { buildNoteSpec } from './notes'

const buildParts: (patternDurationScalar: Scalar) => DictionaryOf<Part> =
    (patternDurationScalar: Scalar): DictionaryOf<Part> => {
        const {
            exampleOneTemplateExemplars,
            exampleTwoTemplateExemplars,
        } = buildExemplars(patternDurationScalar)

        const exampleOneTemplatePart: Part = exampleOneTemplateExemplars.map(buildNoteSpec)
        const exampleTwoTemplatePart: Part = exampleTwoTemplateExemplars.map(buildNoteSpec)

        return {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        }
    }

export {
    buildParts,
}
