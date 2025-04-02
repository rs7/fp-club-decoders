import * as D from 'io-ts/Decoder'

export const paramsDecoder = D.struct({
	type: D.literal('a', 'b'),
})
