import { useRouter } from "next/router"
import "@styles/globals.scss"
import { Initialize } from "@components/Initialize"

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	return (
		<>
			<Initialize />
			<Component {...pageProps} router={router} />
		</>
	)
}

export default MyApp
