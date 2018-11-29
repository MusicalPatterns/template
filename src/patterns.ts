import { PatternId } from '@musical-patterns/registry'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '@musical-patterns/shared'
import { TEMPLATE_DURATION_SCALAR, TEMPLATE_PITCH_SCALAR } from './constants'
import { buildEntities, buildScales } from './materials'

const templatePatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const templatePatternMetadata: PatternMetadata = {
    description: 'follow this template structure for your patterns',
    formattedName: 'Template Pattern',
    musicalIdeaIllustrated: 'nothing',
}

const patternSpec: PatternSpec = {
    patternDurationScalar: TEMPLATE_DURATION_SCALAR,
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
}
