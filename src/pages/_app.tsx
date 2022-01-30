import { useEffect } from "react"
import { useRouter } from "next/router"
import "@styles/globals.scss"
import { useGoogleAdsense } from "@utils/hooks/useGoogleAdsense"

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	useGoogleAdsense()

	return <Component {...pageProps} router={router} />
}

export default MyApp
