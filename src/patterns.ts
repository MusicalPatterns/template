import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { PatternId } from '../../patternId'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '../../types'
import { TEMPLATE_PITCH_SCALAR } from './constants'
import { buildTemplateEntities, buildTemplateScales } from './materials'

const templatePatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildTemplateEntities,
    buildScalesFunction: buildTemplateScales,
}

const templatePatternMetadata: PatternMetadata = {
    description: 'follow this template structure for your patterns',
    formattedName: 'Template Pattern',
}

const templatePatternSpec: PatternSpec = {
    patternDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    patternPitchScalar: TEMPLATE_PITCH_SCALAR,
}

const templatePattern: Pattern = {
    material: templatePatternMaterial,
    metadata: templatePatternMetadata,
    patternId: PatternId.TEMPLATE,
    spec: templatePatternSpec,
}

export {
    templatePattern,
}
