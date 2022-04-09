import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
	const initialState = [
		{id: 0, value: 0, name: 'Нож'},
		{id: 1, value: 0, name: 'Ложка'},
		{id: 2, value: 0, name: 'Вилка'},
		{id: 3, value: 0, name: 'Тарелка'},
		{id: 4, value: 0, name: 'Чашка'}
	];
	const [counters, setCounters] = useState(initialState);
	const newCountersArray = [...counters];
	const handleDelete = (id) => {
		const newCounters = counters.filter(counter => counter.id !== id);
		setCounters(newCounters);
	};
	const handleReset = () => {
		setCounters(initialState);
	}
	const handleIncrement = (id) => {
		newCountersArray[id].value++
		setCounters(newCountersArray);
	}
	const handleDecrement = (id) => {
		if (newCountersArray[id].value > 0) {
			newCountersArray[id].value--
			setCounters(newCountersArray);
		}
	}

	return (
		<>
			{counters.map((count) => (
				<Counter
					key={count.id}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					{...count}
				/>))}
			<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
		</>
	);
};

export default CountersList