import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { PatternSpec } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (patternSpec: PatternSpec): Entity[] => {
        const {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        } = buildParts(patternSpec.patternDurationScalar || to.Scalar(1))

        const exampleOneTemplateEntity: Entity = {
            noteSpecs: exampleOneTemplatePart,
            timbreName: TimbreNameEnum.VIOLIN,
        }
        const exampleTwoTemplateEntity: Entity = {
            noteSpecs: exampleTwoTemplatePart,
            timbreName: TimbreNameEnum.PIANO,
        }

        return [
            exampleOneTemplateEntity,
            exampleTwoTemplateEntity,
        ]
    }

export {
    buildEntities,
}
