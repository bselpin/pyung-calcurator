import { NextSeo } from "next-seo"
import styles from "@styles/Home.module.scss"

const TITLE = ""
const DESC = ""

const Home = ({ router }) => {
	return (
		<>
			<NextSeo />
			<div className={styles.container}></div>
		</>
	)
}

export default Home
