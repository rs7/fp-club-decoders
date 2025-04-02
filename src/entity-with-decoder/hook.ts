import {useLoad} from '@/common/hook'
import {loadEntity} from '@/entity-with-decoder/api'

export const useEntity = () => {
	const entity = useLoad(loadEntity)

	return entity
}
