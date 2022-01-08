import Script from "next/script"

export function Initialize() {
	return (
		<Script
			strategy="afterInteractive"
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
		/>
	)
}
