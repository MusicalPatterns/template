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
            partSpec: exampleOneTemplatePart,
            timbreName: TimbreName.VIOLIN,
        }
        const exampleTwoTemplateEntity: Entity = {
            partSpec: exampleTwoTemplatePart,
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
