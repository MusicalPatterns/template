import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            firstPart,
            secondPart,
        } = buildParts()

        const firstEntity: Entity = {
            noteSpecs: firstPart,
            timbreName: TimbreNameEnum.SAWTOOTH,
        }
        const secondEntity: Entity = {
            noteSpecs: secondPart,
            timbreName: TimbreNameEnum.PIANO,
        }

        return [
            firstEntity,
            secondEntity,
        ]
    }

export {
    buildEntities,
}
