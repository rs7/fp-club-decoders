import * as D from 'io-ts/Decoder'

import {entityDecoder} from '@/entity-with-decoder/decode'

export type Entity = D.TypeOf<typeof entityDecoder>
