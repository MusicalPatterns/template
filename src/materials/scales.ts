import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, PatternSpec } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (patternSpec: PatternSpec): Scale[] => {
        const { nonScale, flatDurationsScale } = buildStandardScales()
        const {
            exampleScalars,
        } = buildScalars()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            offset: patternSpec.patternDurationOffset || to.Offset(0),
            scalar: patternSpec.patternDurationScalar || to.Scalar(1),
            scalars: flatDurationsScale.scalars,
        }
        const pitchesScale: Scale = {
            offset: patternSpec.patternPitchOffset || to.Offset(0),
            scalar: patternSpec.patternPitchScalar || to.Scalar(1),
            scalars: exampleScalars,
        }

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
