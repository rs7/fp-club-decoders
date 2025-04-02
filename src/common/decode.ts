import * as E from 'fp-ts/lib/Either'
import * as D from 'io-ts/Decoder'

export type Decoder<T> = D.Decoder<unknown, T>

export const decode = <T>(decoder: Decoder<T>, source: unknown) => {
	const either = decoder.decode(source)

	if (E.isLeft(either)) {
		throw new Error(D.draw(either.left))
	}

	return either.right
}
