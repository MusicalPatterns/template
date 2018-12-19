import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            firstPart,
            secondPart,
        } = buildParts()

        const exampleOneEntity: Entity = {
            noteSpecs: firstPart,
            timbreName: TimbreNameEnum.SAWTOOTH,
        }
        const exampleTwoEntity: Entity = {
            noteSpecs: secondPart,
            timbreName: TimbreNameEnum.PIANO,
        }

        return [
            exampleOneEntity,
            exampleTwoEntity,
        ]
    }

export {
    buildEntities,
}
