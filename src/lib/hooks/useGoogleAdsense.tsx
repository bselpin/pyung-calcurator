import { useCallback, useEffect } from "react"

export const useGoogleAdsense = () => {
	const loadAd = useCallback(() => {
		try {
			const ads = (window.adsbygoogle = window.adsbygoogle || [])
			ads.push({
				google_ad_client: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE,
				enable_page_level_ads: true,
			})
		} catch (error) {
			console.error(error)
		}
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
