import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_PITCH_SCALE_INDEX,
    NoteSpec,
    to,
} from '../../../../src'
import { Exemplar, from as templateFrom } from '../nominal'

const buildTemplateNoteSpec: (exemplar: Exemplar) => NoteSpec =
    (exemplar: Exemplar): NoteSpec =>
        ({
            durationSpec: {
                scalar: to.Scalar(templateFrom.Exemplar(exemplar)),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index: to.Index(templateFrom.Exemplar(exemplar)),
                scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
            },
            sustainSpec: {
                offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                scalar: to.Scalar(templateFrom.Exemplar(exemplar)),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        })

export {
    buildTemplateNoteSpec,
}
