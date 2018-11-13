import { buildStandardScales, Scale, scaleFromScalarsAndScalar } from '../../../../src'
import { BuildScalesFunction, PatternSpec } from '../../../types'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (patternSpec: PatternSpec): Scale[] => {
        const { nonScale, flatDurationsScale } = buildStandardScales()
        const {
            exampleOneTemplateScalars,
        } = buildScalars()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = scaleFromScalarsAndScalar(
            flatDurationsScale.scalars,
            patternSpec.patternDurationScalar,
        )
        const pitchesScale: Scale = scaleFromScalarsAndScalar(
            exampleOneTemplateScalars,
            patternSpec.patternPitchScalar,
        )

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
