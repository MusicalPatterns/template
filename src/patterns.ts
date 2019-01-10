import { Entity, PatternMaterial, Scale } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { post } from './metadata'

const material: PatternMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Template',
    musicalIdeaIllustrated: '',
}

const spec: PatternSpec = {}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.TEMPLATE,
    spec,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
    spec,
}
