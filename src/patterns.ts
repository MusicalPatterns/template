import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { PatternId } from '../../patternId'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '../../types'
import { TEMPLATE_PITCH_SCALAR } from './constants'
import { buildEntities, buildScales } from './materials'

const templatePatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const templatePatternMetadata: PatternMetadata = {
    description: 'follow this template structure for your patterns',
    formattedName: 'Template Pattern',
}

const patternSpec: PatternSpec = {
    patternDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    patternPitchScalar: TEMPLATE_PITCH_SCALAR,
}

const pattern: Pattern = {
    material: templatePatternMaterial,
    metadata: templatePatternMetadata,
    patternId: PatternId.TEMPLATE,
    spec: patternSpec,
}

export {
    pattern,
    patternSpec,
}
