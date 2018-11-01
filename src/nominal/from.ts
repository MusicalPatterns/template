// tslint:disable:variable-name no-any

import { Exemplar } from './types'

const Exemplar: (exemplar: Exemplar) => number =
    (exemplar: Exemplar): number => exemplar as any

export {
    Exemplar,
}
