import {
    Configurations,
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpecs,
} from '@musical-patterns/pattern'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
}

const configurations: Configurations<StandardSpecs> = {
    ...standardConfigurations,
}

const spec: Spec<StandardSpecs> = {
    configurations,
    initialSpecs,
}

export {
    spec,
}
