import { DictionaryOf, Part, Scalar } from '../../../../src'
import { buildTemplateExemplars } from '../custom'
import { buildTemplateNoteSpec } from './notes'

const buildTemplateParts: (patternDurationScalar: Scalar) => DictionaryOf<Part> =
    (patternDurationScalar: Scalar): DictionaryOf<Part> => {
        const {
            exampleOneTemplateExemplars,
            exampleTwoTemplateExemplars,
        } = buildTemplateExemplars(patternDurationScalar)

        const exampleOneTemplatePart: Part = exampleOneTemplateExemplars.map(buildTemplateNoteSpec)
        const exampleTwoTemplatePart: Part = exampleTwoTemplateExemplars.map(buildTemplateNoteSpec)

        return {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        }
    }

export {
    buildTemplateParts,
}
