import React from "react";
import Counter from "./counter";

const CountersList = () => {
	const counters = [
		{id: 0, value: 0, name: 'Нож'},
		{id: 1, value: 0, name: 'Ложка'},
		{id: 2, value: 3, name: 'Вилка'},
		{id: 3, value: 0, name: 'Тарелка'},
		{id: 4, value: 0, name: 'Чашка'}
	];
	return (
		<>
			{counters.map(count => <Counter key={count.id} value={count.value} name={count.name} />)}
		</>
	);
};

export default CountersList