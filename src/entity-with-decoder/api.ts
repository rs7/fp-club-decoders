import {loadAndDecode} from '@/common/api'
import {entityDecoder} from '@/entity-with-decoder/decode'

export const loadEntity = async () => {
	const result = await loadAndDecode('./entity.json', entityDecoder)

	return result
}
