import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            exampleOneTemplatePart,
            exampleTwoTemplatePart,
        } = buildParts()

        const exampleOneTemplateEntity: Entity = {
            noteSpecs: exampleOneTemplatePart,
            timbreName: TimbreNameEnum.SAWTOOTH,
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
