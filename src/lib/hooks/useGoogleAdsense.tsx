import { useCallback, useEffect } from "react"

export const useGoogleAdsense = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const component = window.document
				.getElementById("__next")
				.querySelectorAll(`.adsbygoogle`)
			if (component) {
				for (let index = 0; index < component.length; index++) {
					try {
						;(window.adsbygoogle = window.adsbygoogle || []).push({})
					} catch (error) {
						console.error(error)
					}
				}
			}
		}
	}, [])
}
