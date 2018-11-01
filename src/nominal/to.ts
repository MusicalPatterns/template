// tslint:disable:variable-name no-any

import { Exemplar } from './types'

const Exemplar: (exemplar: number) => Exemplar =
    (exemplar: number): Exemplar => exemplar as any

export {
    Exemplar,
}
