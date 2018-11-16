import { SampleName, VoiceType } from '@musical-patterns/performer'
import { Entity } from '../../../../src'
import { BuildEntitiesFunction, PatternSpec } from '../../../types'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (patternSpec: PatternSpec): Entity[] => {
        const {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        } = buildParts(patternSpec.patternDurationScalar)

        const exampleOneTemplateEntity: Entity = {
            part: exampleOneTemplatePart,
            voiceSpec: { voiceType: VoiceType.SAMPLE, timbre: SampleName.VIOLIN },
        }
        const exampleTwoTemplateEntity: Entity = {
            part: exampleTwoTemplatePart,
            voiceSpec: { voiceType: VoiceType.SAMPLE, timbre: SampleName.PIANO },
        }

        return [
            exampleOneTemplateEntity,
            exampleTwoTemplateEntity,
        ]
    }

export {
    buildEntities,
}
