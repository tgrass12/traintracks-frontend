import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import NutritionDash from './NutritionDash';
import { formatDateStandard } from '../../shared/util';
import {
	fetchJournal
} from '../../store/actions/journal';
import '../../styles/Dashboard.scss';

let Dashboard = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const today = formatDateStandard(new Date());
	const todaysJournal = useSelector(state => state.journal[today]);
	const nutrition = todaysJournal.nutrition;
	useEffect(() => {
		dispatch(fetchJournal(today));
	}, [dispatch, today]);

	const handleNavigation = (location) => {
		history.push(location);
	};

	//TODO: write a map/reduce
	const nutritionDashItems = [
		{
			'label': 'cals',
			'target': nutrition.targets.energy,
			'logged': nutrition.logged ? nutrition.logged.energy : 0
		},
		{
			'label': 'carbs',
			'target': nutrition.targets.totalCarbs,
			'logged': nutrition.logged ? nutrition.logged.totalCarbs : 0
		},
		{	'label': 'fats',
			'target': nutrition.targets.totalFats,
			'logged': nutrition.logged ? nutrition.logged.totalFats : 0
		},
		{
			'label': 'protein',
			'target': nutrition.targets.protein,
			'logged': nutrition.logged ? nutrition.logged.protein : 0
		}
	]

	return (
		<div>
			<NutritionDash
				items={nutritionDashItems}
				handleNav={handleNavigation}
			/>
		</div>
	)
}

export default Dashboard;
