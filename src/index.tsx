import {createRoot} from 'react-dom/client'

import {Application} from '@/application/component/Application'

const container = document.querySelector('#root')

if (container) {
	createRoot(container).render(<Application />)
} else {
	document.body.append(document.createTextNode('Не найден корневой контейнер'))
}
