import { Range } from "react-range"
import style from "src/styles/range.module.scss"

interface IRange {
	values: number[]
	onChange: (value: number[]) => void
	data: any
}

const RangePyung = ({ values, onChange, data }: IRange) => {
	return (
		<Range
			step={0.1}
			min={0}
			max={data.max}
			values={values}
			onChange={onChange}
			renderTrack={({ props, children }) => {
				return (
					<div
						{...props}
						style={{
							...props.style,
						}}
						className={style.range_bar}
					>
						{children}
					</div>
				)
			}}
			renderThumb={({ props }) => {
				console.log(props)
				return (
					<button
						{...props}
						style={{
							...props.style,
						}}
						className={style.range_grab}
					/>
				)
			}}
		/>
	)
}

export default RangePyung
