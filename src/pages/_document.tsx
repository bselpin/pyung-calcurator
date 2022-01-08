import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from "next/document"

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="ko">
				<Head>
					<script
						data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
						async
						src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
						crossOrigin="anonymous"
					/>
					<ins
						className="adsbygoogle"
						style={{ display: "block" }}
						data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
						data-ad-slot="3284023363"
						data-ad-format="auto"
						data-full-width-responsive="true"></ins>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
