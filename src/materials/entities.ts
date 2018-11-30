import { BuildEntitiesFunction, Entity } from '@musical-patterns/compiler'
import { PatternSpec } from '@musical-patterns/pattern'
import { SampleName, VoiceType } from '@musical-patterns/performer'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (patternSpec: PatternSpec): Entity[] => {
        const {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        } = buildParts(patternSpec.patternDurationScalar)

        const exampleOneTemplateEntity: Entity = {
            partSpec: exampleOneTemplatePart,
            voiceSpec: { voiceType: VoiceType.SAMPLE, timbre: SampleName.VIOLIN },
        }
        const exampleTwoTemplateEntity: Entity = {
            partSpec: exampleTwoTemplatePart,
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
