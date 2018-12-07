import { BuildEntitiesFunction, Entity, TimbreName } from '@musical-patterns/compiler'
import { PatternSpec } from '@musical-patterns/pattern'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (patternSpec: PatternSpec): Entity[] => {
        const {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        } = buildParts(patternSpec.patternDurationScalar)

        const exampleOneTemplateEntity: Entity = {
            noteSpecs: exampleOneTemplatePart,
            timbreName: TimbreName.VIOLIN,
        }
        const exampleTwoTemplateEntity: Entity = {
            noteSpecs: exampleTwoTemplatePart,
            timbreName: TimbreName.PIANO,
        }

        return [
            exampleOneTemplateEntity,
            exampleTwoTemplateEntity,
        ]
    }

export {
    buildEntities,
}
