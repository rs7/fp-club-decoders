import {useEffect, useState} from 'react'

export const useLoad = <Result>(load: () => Promise<Result>) => {
	const [result, setResult] = useState<Result>()

	const [updateCounter, setUpdateCounter] = useState(0)

	const update = () => {
		setUpdateCounter(counter => counter + 1)
	}

	useEffect(() => {
		;(async () => {
			setResult(undefined)

			const entity = await load()

			setResult(entity)
		})()
	}, [updateCounter])

	return {result, update}
}
