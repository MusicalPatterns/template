import { BuildScalesFunction, buildStandardScales, Scale, scaleFromScalarsAndScalar } from '../../../../src'
import { PatternSpec } from '../../../types'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (patternSpec: PatternSpec): Scale[] => {
        const { flatDurationsScale } = buildStandardScales()
        const {
            exampleOneTemplateScalars,
        } = buildScalars()

        return [
            flatDurationsScale,
            scaleFromScalarsAndScalar(flatDurationsScale.scalars, patternSpec.patternDurationScalar),
            scaleFromScalarsAndScalar(exampleOneTemplateScalars, patternSpec.patternPitchScalar),
        ]
    }

export {
    buildScales,
}
