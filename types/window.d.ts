interface Window {
	prerenderReady: boolean
	adsbygoogle: { [Key: string]: unknown }[]
}

declare global {
	var window: Window
}
