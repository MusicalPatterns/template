import { Entity, Material, Scale } from '@musical-patterns/compiler'
import { Id, Metadata, Pattern, Patterns, StandardSpecs } from '@musical-patterns/pattern'
import { post } from './metadata'
import { spec } from './spec'

const material: Material = {
    materializeEntities: (): Entity[] => [],
    materializeScales: (): Scale[] => [],
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Template',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '2018-10-31T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

const pattern: Pattern<StandardSpecs> = {
    id: Id.TEMPLATE,
    material,
    metadata,
    spec,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
