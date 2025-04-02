import {Entity as EntityObject} from '@/entity/type'

import styles from './Entity.module.scss'

interface EntityProps {
	entity: EntityObject
}

export const Entity = (props: EntityProps) => {
	const {entity} = props

	const statusLabel = (() => {
		switch (entity.status) {
			case 'FAIL':
				return 'Что-то не так'

			case 'SUCCESS':
				return 'Всё хорошо'
		}
	})()

	return (
		<div className={styles.container}>
			<span>Подход без декодера</span>

			<pre>{JSON.stringify(entity, null, 2)}</pre>

			<span>Статус: {statusLabel}</span>
		</div>
	)
}
