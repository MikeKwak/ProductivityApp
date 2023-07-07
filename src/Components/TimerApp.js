import { useRef, useState } from "react"

function TimerApp() {
	const [timeLeft, setTimeLeft] = useState(0)
	const formRef = useRef(null)

	const decreament = () => {
		if (timeLeft > 0) {
			setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
			return (
				<h1>
					{Math.floor(timeLeft / 60)} : {timeLeft % 60}
				</h1>
			)
		} else {
			return <h1>Done</h1>
		}
	}

	const startTimer = (e) => {
		e.preventDefault()
		const formData = new FormData(formRef.current)
		const selectedHours = parseInt(formData.get("hours"))
		const selectedMinutes = parseInt(formData.get("minutes"))

		setTimeLeft(selectedHours * 60 + selectedMinutes)
		formRef.current.reset()
	}

	return (
		<>
			<form onSubmit={startTimer} ref={formRef}>
				<label htmlFor="hours">Hours:</label>
				<select name="hours" id="hours">
					<option value="00">00</option>
					<option value="01">01</option>
					<option value="02">02</option>
					<option value="03">03</option>
					<option value="04">04</option>
					<option value="05">05</option>
					<option value="06">06</option>
					<option value="07">07</option>
					<option value="08">08</option>
					<option value="09">09</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
				</select>

				<label htmlFor="minutes"> Minutes:</label>
				<select name="minutes" id="minutes">
					<option value="00">00</option>
					<option value="05">05</option>
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="20">20</option>
					<option value="25">25</option>
					<option value="30">30</option>
					<option value="35">35</option>
					<option value="40">40</option>
					<option value="45">45</option>
					<option value="50">50</option>
					<option value="55">55</option>
				</select>
				<button type="submit">Start</button>
			</form>
			<div>{decreament()}</div>
		</>
	)
}

export default TimerApp
