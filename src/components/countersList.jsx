import React from "react";
import Counter from "./counter";

const CountersList = () => {
	const counters = [
		{id: 0, value: 0},
		{id: 1, value: 0},
		{id: 2, value: 3},
		{id: 3, value: 0},
		{id: 4, value: 0}];
	return (
		<>
			{counters.map(count => <Counter key={count.id} value={count.value} />)}
		</>
	);
};

export default CountersList