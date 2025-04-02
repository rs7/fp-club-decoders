import {useSearchParams} from 'react-router'

import {useSearchParamsWithDecoder} from '@/common/params'
import {paramsDecoder} from '@/params/decode'

export const Params = () => {
	const searchParams = useSearchParamsWithDecoder(
		paramsDecoder,
		useSearchParams()[0],
	)

	return <pre>{JSON.stringify(searchParams, null, 2)}</pre>
}
