import { useCallback, useEffect } from "react"

export const useGoogleAdsense = () => {
	const loadAd = useCallback(() => {
		const ads = (window.adsbygoogle = window.adsbygoogle || [])
		ads.push({})
	}, [])

	useEffect(() => {
		if (typeof window !== "undefined") {
			const component = window.document
				.getElementById("__next")
				.querySelector(`.adsbygoogle`)
			if (component) {
				component.addEventListener("load", loadAd)
			}
		}
		return () => {
			if (typeof window !== "undefined") {
				const component = window.document
					.getElementById("__next")
					.querySelector(`.adsbygoogle`)
				if (component) {
					component.removeEventListener("load", loadAd)
				}
			}
		}
	}, [])
}