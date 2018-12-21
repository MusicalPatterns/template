import { Entity, PatternMaterial, Scale } from '@musical-patterns/compiler'
import { Pattern, PatternId, PatternMetadata, PatternSpec } from '@musical-patterns/pattern'

const material: PatternMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: '',
    formattedName: 'Template',
    musicalIdeaIllustrated: '',
}

const spec: PatternSpec = {
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.TEMPLATE,
    spec,
}

export {
    pattern,
}
