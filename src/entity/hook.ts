import {useLoad} from '@/common/hook'
import {loadEntity} from '@/entity/api'

export const useEntity = () => {
	const entity = useLoad(loadEntity)

	return entity
}
