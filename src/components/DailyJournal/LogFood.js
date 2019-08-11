import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FoodOverview from './FoodOverview';
import { fetchJournal } from '../../store/actions/journal';
import { formatDateStandard } from '../../shared/util';

let LogFood = ({meals}) => {
	let dispatch = useDispatch();
	let journalDate = useSelector(state => state.journal.selectedDate);
	let [servings, setServings] = useState(1);
	let [selectedMeal, setSelectedMeal] = useState();
	let [foodToFind, setFoodToFind] = useState();
	let [foundFoods, setFoundFoods] = useState([]);
	let [foodToLog, setFoodToLog] = useState();

	let handleSelectedMeal = (e) => {
		setSelectedMeal(e.target.value);
	}

	let handleFoodToFind = (e) => {
		setFoodToFind(e.target.value);
	}

	let handleServingsChange = (e) => {
		setServings(Number(e.target.value));
	}

	let findFoods = async (e) => {
		e.preventDefault();
		let relevantFoods = await fetch('/api/foods').then(res => res.json());
		let foods = relevantFoods.map(f => {
			return {
				'id': f._id,
				'name': f.name,
				'cals': f.cals
			}
		});
		setFoundFoods(foods);
	}

	let logFood = async (e) => {
		e.preventDefault();
		let date = formatDateStandard(journalDate);
		let apiUrl = `/api/users/tyler/journal/${date}?meal=${selectedMeal}`;
		if (foodToLog && servings > 0) {
			let payload = {
				'food': foodToLog,
				'servings': servings
			}
			await fetch(apiUrl, {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => res.json());

			//TODO: this is dirty, only replace relevant components
			dispatch(fetchJournal(date));
		}
	}

	let mealOptions = meals.map(m => 
		<option key={m} value={m}>{m}</option> 
	);

	let foundFoodsComponents = foundFoods.map(f => {
		return (
			<FoodOverview 
				key={f.id} 
				food={f} 
				setFoodToLog={setFoodToLog} 
			/>
		)
	});

	return (
		<div className='log-food'>
			<h4> Log Food </h4>
			<div>
				<form>
					<label>Find a food</label>
					<input onChange={handleFoodToFind}/>
					<button onClick={findFoods}> Find </button>
				</form>
				<div>
					{foundFoodsComponents}
				</div>
			</div>
			<form>
				<div>
					<label> Add to... </label>
					<select value={selectedMeal} onChange={handleSelectedMeal}>
						{mealOptions}
					</select>
					<label>Servings </label>
					<input 
						type='number' 
						value={servings} 
						onChange={handleServingsChange}
					/>
				</div>
				<button onClick={logFood}>Log</button>
			</form>
		</div>
	)
}

export default LogFood;