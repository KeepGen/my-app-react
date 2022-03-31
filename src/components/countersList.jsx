import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
	const initialState = [
		{id: 0, value: 0, name: 'Нож'},
		{id: 1, value: 0, name: 'Ложка'},
		{id: 2, value: 3, name: 'Вилка'},
		{id: 3, value: 0, name: 'Тарелка'},
		{id: 4, value: 0, name: 'Чашка'}
	];
	const [counters, setCounters] = useState(initialState);
	const handleDelete = (id) => {
		const newCounters = counters.filter(counter => counter.id !== id);
		setCounters(newCounters);
	};
	const handleReset = () => {
		setCounters(initialState);
	}
	const handleUpdate = () => {
		const updatedState = [
			{id: 0, value: 4, name: 'Нож'},
			{id: 1, value: 4, name: 'Ложка'},
			{id: 2, value: 4, name: 'Вилка'},
			{id: 3, value: 4, name: 'Тарелка'},
			{id: 4, value: 0, name: 'Чашка'}
		];
		setCounters(updatedState);
	}
	return (
		<>
			{counters.map((count) => (
				<Counter
					key={count.id}
					onDelete={handleDelete}
					{...count}
				/>))}
			<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
			<button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>Show Origin</button>
		</>
	);
};

export default CountersList