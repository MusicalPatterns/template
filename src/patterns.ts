import { PatternMaterial } from '@musical-patterns/compiler'
import { Pattern, PatternId, PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
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
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: TEMPLATE_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
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
