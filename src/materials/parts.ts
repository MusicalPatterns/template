import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf, Scalar } from '@musical-patterns/utilities'
import { buildExemplars } from '../custom'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const {
            exampleOneTemplateExemplars,
            exampleTwoTemplateExemplars,
        } = buildExemplars()

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
