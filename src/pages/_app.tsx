import { useEffect } from "react"
import { useRouter } from "next/router"
import "@styles/globals.scss"

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		try {
			// @ts-ignore
			;(window.adsbygoogle = window.adsbygoogle || []).push({})
		} catch (error) {
			console.error(error)
		}
	}, [])

	return (
		<>
			<Component {...pageProps} router={router} />
		</>
	)
}

export default MyApp
