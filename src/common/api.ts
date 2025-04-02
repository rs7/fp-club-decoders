import {decode, Decoder} from '@/common/decode'
import {delay} from '@/common/delay'

export const load = async <Result = unknown>(path: string) => {
	const response = await fetch(path)

	const result = (await response.json()) as Result

	await delay(1000)

	return result
}

export const loadAndDecode = async <Result>(
	path: string,
	decoder: Decoder<Result>,
) => {
	const result = await load<unknown>(path)

	const decoded = decode(decoder, result)

	return decoded
}
