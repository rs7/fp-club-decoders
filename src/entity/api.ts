import {load} from '@/common/api'
import {Entity} from '@/entity/type'

export const loadEntity = async () => {
	const result = await load<Entity>('./entity.json')

	return result
}
