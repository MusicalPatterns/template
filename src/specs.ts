import {
    PatternSpecAttributesFor,
    PatternSpecDataFor,
    standardInitialPatternSpec,
    StandardPatternSpec,
    standardPatternSpecAttributes,
} from '@musical-patterns/pattern'

const initial: StandardPatternSpec = {
    ...standardInitialPatternSpec,
}

const attributes: PatternSpecAttributesFor<StandardPatternSpec> = {
    ...standardPatternSpecAttributes,
}

const specData: PatternSpecDataFor<StandardPatternSpec> = {
    attributes,
    initial,
}

export {
    specData,
}
