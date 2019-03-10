import { Attributes, Data, standardAttributes, standardInitialSpec, StandardSpec } from '@musical-patterns/pattern'

const initial: StandardSpec = {
    ...standardInitialSpec,
}

const attributes: Attributes<StandardSpec> = {
    ...standardAttributes,
}

const data: Data<StandardSpec> = {
    attributes,
    initial,
}

export {
    data,
}
