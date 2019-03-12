import {
    Configurations,
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpecs,
} from '@musical-patterns/pattern'

const initial: StandardSpecs = {
    ...standardInitialSpecs,
}

const configurations: Configurations<StandardSpecs> = {
    ...standardConfigurations,
}

const spec: Spec<StandardSpecs> = {
    configurations,
    initial,
}

export {
    spec,
}
