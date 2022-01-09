import { useCallback, useEffect } from "react"

export const useGoogleAdsense = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const component = window.document
				.getElementById("__next")
				.querySelector(`.adsbygoogle`)
			if (component) {
				try {
					;(window.adsbygoogle = window.adsbygoogle || []).push({})
				} catch (error) {
					console.error(error)
				}
			}
		}
	}, [])
}
