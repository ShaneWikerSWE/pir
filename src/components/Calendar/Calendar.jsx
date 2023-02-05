import React, { useState } from "react";
import './calendar.css'


const Calendar = () => {
	const [date, setDate] = useState(new Date());

	const updateMonth = (amount) => {
		setDate((prev) => {
			const newMonth = (prev.getMonth() + amount) % 12;
			const newYear = prev.getFullYear() + Math.floor((prev.getMonth() + amount) / 12);
			const newDate = new Date(newYear, newMonth, prev.getDate());
			return newDate;
		});
	};

	const getDaysInMonth = (month, year) => {
		return new Date(year, month + 1, 0).getDate();
	};

	const getFirstDayOfMonth = (month, year) => {
		return new Date(year, month, 1).getDay();
	};

	const renderDays = (month, year) => {
		const days = [];
		const daysInMonth = getDaysInMonth(month, year);
		const firstDay = getFirstDayOfMonth(month, year);
		let currentDay = 1;

		for (let i = 0; i < 6; i++) {
			const week = [];

			for (let j = 0; j < 7; j++) {
				if (i === 0 && j < firstDay) {
					week.push(<td key={j}></td>);
				} else if (currentDay > daysInMonth) {
					week.push(<td key={j}></td>);
				} else {
					week.push(
						<td key={j}>
							{currentDay}
						</td>
					);
					currentDay++;
				}
			}

			days.push(<tr key={i}>{week}</tr>);
		}

		return days;
	};

	return (
		<div className="calendar">
			<div className="calendar__header">
				<button onClick={() => updateMonth(-1)}>寧</button>
				<h2>{date.toLocaleString("default", { month: "long" })} {date.getFullYear()}</h2>
				<button onClick={() => updateMonth(1)}>嶺</button>
			</div>
			<table className="calendar__table">
				<thead>
					<tr>
						<th>Sun</th>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
					</tr>
				</thead>
				<tbody>{renderDays(date.getMonth(), date.getFullYear())}</tbody>
			</table>
		</div>
	);
};
export default Calendar;
