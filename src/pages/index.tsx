import { NextSeo } from "next-seo"
import styles from "@styles/Home.module.scss"

const TITLE = "평수 계산기, 주거면적 공용면적 계산기"
const DESC = "계산계산"

const Home = ({ router }) => {
	return (
		<>
			<NextSeo title={TITLE} description={DESC} />
			<div className={styles.container}>계산기기기</div>
		</>
	)
}

export default Home
