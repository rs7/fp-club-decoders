import {Entity} from '@/entity/component/Entity'
import {useEntity} from '@/entity/hook'

import styles from './Remote.module.scss'

export const Remote = () => {
	const {result, update} = useEntity()

	const onUpdateClick = () => {
		update()
	}

	return (
		<div className={styles.container}>
			<button onClick={onUpdateClick}>Обновить</button>

			{result && <Entity entity={result} />}
		</div>
	)
}
