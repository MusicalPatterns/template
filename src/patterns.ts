import { Entity, Material, Scale } from '@musical-patterns/compiler'
import { Id, Metadata, Pattern, Patterns, StandardSpec } from '@musical-patterns/pattern'
import { post } from './metadata'
import { specData } from './spec'

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

const pattern: Pattern<StandardSpec> = {
    id: Id.TEMPLATE,
    material,
    metadata,
    specData,
}

const patterns: Patterns = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
