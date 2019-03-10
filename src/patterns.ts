import { Entity, Material, Scale } from '@musical-patterns/compiler'
import { Id, Metadata, Pattern, Patterns, StandardSpec } from '@musical-patterns/pattern'
import { post } from './metadata'
import { data } from './spec'

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
    version: process.env.PATTERN_VERSION || 'unknown',
}

const pattern: Pattern<StandardSpec> = {
    data,
    id: Id.TEMPLATE,
    material,
    metadata,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
