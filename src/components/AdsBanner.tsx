import {} from "react"
import { useEffect, CSSProperties } from "react"

export interface IGoogleAdSense {
	className?: string
	style?: CSSProperties
	client: string
	slot: string
	layout?: string
	layoutKey?: string
	format?: string
	responsive?: string
}

export const AdsBanner = ({
	className = "",
	style = { display: "block" },
	client,
	slot,
	layout = "",
	layoutKey = "",
	format = "auto",
	responsive = "true",
}: IGoogleAdSense) => (
	<ins
		className={`${className} adsbygoogle`}
		style={style}
		data-ad-client={client}
		data-ad-slot={slot}
		data-ad-layout={layout}
		data-ad-layout-key={layoutKey}
		data-ad-format={format}
		data-full-width-responsive={responsive}></ins>
)
