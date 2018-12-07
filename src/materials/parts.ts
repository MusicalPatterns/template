import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf, Scalar } from '@musical-patterns/utilities'
import { buildExemplars } from '../custom'
import { buildNoteSpec } from './notes'

const buildParts: (patternDurationScalar: Scalar) => DictionaryOf<NoteSpec[]> =
    (patternDurationScalar: Scalar): DictionaryOf<NoteSpec[]> => {
        const {
            exampleOneTemplateExemplars,
            exampleTwoTemplateExemplars,
        } = buildExemplars(patternDurationScalar)

        const exampleOneTemplatePart: NoteSpec[] = exampleOneTemplateExemplars.map(buildNoteSpec)
        const exampleTwoTemplatePart: NoteSpec[] = exampleTwoTemplateExemplars.map(buildNoteSpec)

        return {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        }
    }

export {
    buildParts,
}
