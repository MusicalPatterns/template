import {
    PatternSpecAttributes,
    PatternSpecData,
    standardInitialPatternSpec,
    StandardPatternSpec,
    standardPatternSpecAttributes,
} from '@musical-patterns/pattern'

const initial: StandardPatternSpec = {
    ...standardInitialPatternSpec,
}

const attributes: PatternSpecAttributes<StandardPatternSpec> = {
    ...standardPatternSpecAttributes,
}

const specData: PatternSpecData<StandardPatternSpec> = {
    attributes,
    initial,
}

export {
    specData,
}
