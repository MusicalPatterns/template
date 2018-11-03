import { BuildScalesFunction, buildStandardScales, Scale, scaleFromScalarsAndScalar } from '../../../../src'
import { PatternSpec } from '../../../types'
import { buildTemplateScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (patternSpec: PatternSpec): Scale[] => {
        const { flatDurationsScale } = buildStandardScales()
        const {
            exampleOneTemplateScalars,
        } = buildTemplateScalars()

        return [
            flatDurationsScale,
            scaleFromScalarsAndScalar(flatDurationsScale.scalars, patternSpec.patternDurationScalar),
            scaleFromScalarsAndScalar(exampleOneTemplateScalars, patternSpec.patternPitchScalar),
        ]
    }

export {
    buildScales,
}
