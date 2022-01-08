import { useRouter } from "next/router"
import "@styles/globals.scss"

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	return (
		<>
			<Component {...pageProps} router={router} />
		</>
	)
}

export default MyApp
