import { Entity, Material, Scale } from '@musical-patterns/compiler'
import { Metadata, StandardSpec } from '@musical-patterns/pattern'
import { buildPatterns, Id, PatternFor, Patterns } from '@musical-patterns/registry'
import { post } from './metadata'
import { specData } from './specs'

const material: Material = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Template',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '2018-10-31T07:00:00.000Z',
}

const pattern: PatternFor<StandardSpec> = {
    id: Id.TEMPLATE,
    material,
    metadata,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.id ]: pattern,
})

export {
    pattern,
    patterns,
}
