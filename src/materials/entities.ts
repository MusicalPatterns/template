import { BuildEntitiesFunction, Entity, SampleName, TimeType, VoiceType } from '../../../../src'
import { PatternSpec } from '../../../types'
import { buildTemplateParts } from './parts'

const buildTemplateEntities: BuildEntitiesFunction =
    (patternSpec: PatternSpec): Entity[] => {
        const {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        } = buildTemplateParts(patternSpec.patternDurationScalar)

        const exampleOneTemplateEntity: Entity = {
            part: exampleOneTemplatePart,
            timeType: TimeType.ATOMIC,
        }
        const exampleTwoTemplateEntity: Entity = {
            part: exampleTwoTemplatePart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { voiceType: VoiceType.SAMPLE, timbre: SampleName.PIANO },
        }

        return [
            exampleOneTemplateEntity,
            exampleTwoTemplateEntity,
        ]
    }

export {
    buildTemplateEntities,
}
