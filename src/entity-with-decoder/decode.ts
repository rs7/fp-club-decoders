import * as D from 'io-ts/Decoder'

export const entityDecoder = D.struct({
	status: D.literal('FAIL', 'SUCCESS'),
})
