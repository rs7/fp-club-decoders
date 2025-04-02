import {Entity} from '@/entity-with-decoder/component/Entity'
import {useEntity} from '@/entity/hook'

import styles from './RemoteWithDecoder.module.scss'

export const RemoteWithDecoder = () => {
	const {result, update} = useEntity()

	const onUpdateClick = () => {
		update()
	}

	return (
		<div className={styles.container}>
			<span>Подход с декодером</span>

			<button onClick={onUpdateClick}>Обновить</button>

			{result && <Entity entity={result} />}
		</div>
	)
}
