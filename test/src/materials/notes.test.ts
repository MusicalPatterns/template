import { NotePropertySpec, NoteSpec, to } from '../../../../../src/indexForTest'
import { buildTemplateNoteSpec, Exemplar, to as templateTo } from '../../../src/indexForTest'

describe('template notes', () => {
    let noteSpec: NoteSpec
    beforeEach(() => {
        const testExemplar: Exemplar = templateTo.Exemplar(7)
        noteSpec = buildTemplateNoteSpec(testExemplar)
    })

    describe('duration', () => {
        let durationSpec: NotePropertySpec
        beforeEach(() => {
            durationSpec = noteSpec.durationSpec || {}
        })

        it('sets the scalar to the examplar', () => {
            expect(durationSpec.scalar)
                .toBe(to.Scalar(7))
        })
    })

    describe('pitch', () => {
        let pitchSpec: NotePropertySpec
        beforeEach(() => {
            pitchSpec = noteSpec.pitchSpec || {}
        })

        it('sets the index to the exemplar', () => {
            expect(pitchSpec.index)
                .toBe(to.Index(7))
        })
    })

    describe('sustain', () => {
        let sustainSpec: NotePropertySpec
        beforeEach(() => {
            sustainSpec = noteSpec.sustainSpec || {}
        })

        it('sets the scalar to the examplar', () => {
            expect(sustainSpec.scalar)
                .toBe(to.Scalar(7))
        })
    })
})