import { useState, useEffect } from "react"
import { NextSeo } from "next-seo"
import { AdsBanner } from "@components/AdsBanner"
import RangePyung from "@components/Range"
import style from "@styles/Home.module.scss"

const TITLE = "우리집 몇평? - 간단 평수 계산기"
const DESC = "면적에서 평수, 평수에서 면적으로 빠르게 알아보세요. 평수 계산기"

const pyungData = {
	max: 240,
	unit: "제곱 미터(m²)",
	target: "평수",
}
const meterData = {
	max: 80,
	unit: "평수",
	target: "제곱 미터(m²)",
}

const Home = () => {
	const [curNum, setCurNum] = useState<number[]>([120])
	const [targetNum, setTargetNum] = useState<number | string>(0)
	const [data, setData] = useState(pyungData)
	const [rangeType, setRangeType] = useState("pyung")

	useEffect(() => {
		if (rangeType === "pyung") {
			const [unit] = curNum
			setTargetNum((unit * 0.3075).toFixed(1))
		}

		if (rangeType === "meter") {
			const [unit] = curNum
			setTargetNum((unit * 3.3057).toFixed(1))
		}
	}, [curNum, rangeType])

	useEffect(() => {
		if (rangeType === "pyung") {
			setCurNum([120])
			setData(pyungData)
		}

		if (rangeType === "meter") {
			setCurNum([40])
			setData(meterData)
		}
	}, [rangeType])

	return (
		<>
			<NextSeo title={TITLE} description={DESC} />
			<AdsBanner client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} slot="3284023363" />

			<div className={style.calc_wrap}>
				<div className="wrap">
					<div className={style.headers}>
						<p className={style.sub_title}>
							그래서{" "}
							<strong>
								130m<sup>2</sup>
							</strong>
							가 몇평이야?
						</p>
						<p className={style.title}>우리집, 몇평?</p>
					</div>

					<div className={style.button_box}>
						<button
							className={rangeType === "pyung" ? style.active : ""}
							onClick={() => setRangeType("pyung")}
						>
							미터에서 평으로
						</button>
						<button
							className={rangeType === "meter" ? style.active : ""}
							onClick={() => setRangeType("meter")}
						>
							평에서 미터로
						</button>
					</div>

					<div className={style.indicator}>
						<div className="wrap flex jcc">
							<div className={style.box}>
								<div className={`${style.unit} ${style.current}`}>{data.unit}</div>
								<p className={style.number}>{curNum}</p>
							</div>
							<div className={style.box}>
								<div className={`${style.unit} ${style.target}`}>{data.target}</div>
								<p className={style.number}>{targetNum}</p>
							</div>
						</div>
					</div>

					<div className={style.range_box}>
						<div className="wrap jcc">
							<RangePyung values={curNum} onChange={setCurNum} data={data} />
						</div>
					</div>

					<div className={style.scrum}>
						<div className="wrap">
							<div className={style.scrum_box}>
								<p>
									「계량에 관한 법률」2조 제1항에 따라 공식적으로는 ‘평’단위를 사용하지는
									않아요
								</p>
							</div>
						</div>
					</div>

					<p className={style.email}>bselpin@naver.com</p>
				</div>
			</div>
		</>
	)
}

export default Home
