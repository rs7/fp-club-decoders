import {useMemo} from 'react'

import {decode, Decoder} from '@/common/decode'

export const useSearchParamsWithDecoder = <T>(
	decoder: Decoder<T>,
	params: URLSearchParams,
) => {
	return useMemo(() => {
		return decode(decoder, Object.fromEntries(params))
	}, [params, decoder])
}
