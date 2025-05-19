'use client'

import {useScrollFromSearchParam} from "@/hooks/useScrollFromSearchParam"

export function ScrollHandler() {
	useScrollFromSearchParam("scroll", -100)
	return null
}
