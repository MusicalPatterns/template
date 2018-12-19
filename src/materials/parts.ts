import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf, Scalar } from '@musical-patterns/utilities'
import { buildExemplars } from '../custom'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const {
            firstExemplars,
            secondExemplars,
        } = buildExemplars()

        const firstPart: NoteSpec[] = firstExemplars.map(buildNoteSpec)
        const secondPart: NoteSpec[] = secondExemplars.map(buildNoteSpec)

        return {
            firstPart,
            secondPart,
        }
    }

export {
    buildParts,
}
