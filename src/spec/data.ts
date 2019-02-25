import {
    SpecAttributes,
    SpecData,
    standardInitialSpec,
    StandardSpec,
    standardSpecAttributes,
} from '@musical-patterns/pattern'

const initial: StandardSpec = {
    ...standardInitialSpec,
}

const attributes: SpecAttributes<StandardSpec> = {
    ...standardSpecAttributes,
}

const specData: SpecData<StandardSpec> = {
    attributes,
    initial,
}

export {
    specData,
}
