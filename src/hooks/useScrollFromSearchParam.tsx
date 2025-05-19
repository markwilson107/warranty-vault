'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function useScrollFromSearchParam(param: string = 'scroll', offset: number = 0) {
	const searchParams = useSearchParams()

	useEffect(() => {
		if (typeof window === 'undefined') return

		const id = searchParams.get(param)
		if (id) {
			const el = document.getElementById(id)
			if (el) {
				const y = el.getBoundingClientRect().top + window.pageYOffset + offset
				window.scrollTo({ top: y, behavior: 'smooth' })
			}
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}, [searchParams, param, offset])
}
