import {BrowserRouter, Route, Routes} from 'react-router'

import {Params} from '@/params/component'
import {Remote, RemoteWithDecoder} from '@/remote/component'

import styles from './Application.module.scss'

export const Application = () => {
	return (
		<BrowserRouter>
			<section className={styles.container}>
				<Routes>
					<Route
						element={<Remote />}
						path='/remote'
					/>

					<Route
						element={<RemoteWithDecoder />}
						path='/remote-with-decoder'
					/>

					<Route
						element={<Params />}
						path='/params'
					/>
				</Routes>
			</section>
		</BrowserRouter>
	)
}
