import { Entity, PatternMaterial, Scale } from '@musical-patterns/compiler'
import { PatternMetadata, StandardPatternSpec } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { post } from './metadata'
import { specData } from './specs'

const material: PatternMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Template',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '2018-10-31T07:00:00.000Z',
}

const pattern: Pattern<StandardPatternSpec> = {
    material,
    metadata,
    patternId: PatternId.TEMPLATE,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
}
