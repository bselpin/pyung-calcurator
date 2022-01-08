import { useEffect } from "react"

// const adUnitProps: Record<AdType, any> = {
// 	[AdType.DEFAULT]: {
// 		"data-ad-slot": "7181773959",
// 		"data-ad-format": "auto",
// 		"data-full-width-responsive": "true",
// 	},
// 	[AdType.ARTICLE]: {
// 		"data-ad-slot": "3197857275",
// 		"data-ad-format": "fluid",
// 		"data-ad-layout": "in-article",
// 	},
// 	[AdType.VERTICAL]: {
// 		"data-ad-slot": "8863578035",
// 		"data-ad-format": "auto",
// 		"data-full-width-responsive": "true",
// 	},
// }

// export enum AdType {
// 	DEFAULT,
// 	ARTICLE,
// 	VERTICAL,
// }

export function GoogleAd() {
	useEffect(() => {
		try {
			// @ts-ignore
			;(window.adsbygoogle = window.adsbygoogle || []).push({})
		} catch (error) {
			console.error(error)
		}
	}, [])
}
