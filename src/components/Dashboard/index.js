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
			'target': nutrition.targets.cals,
			'logged': nutrition.logged ? nutrition.logged.cals : 0
		},
		{
			'label': 'carbs',
			'target': nutrition.targets.macros.carbs.total,
			'logged': nutrition.logged ? nutrition.logged.macros.carbs.total : 0
		},
		{	'label': 'fats',
			'target': nutrition.targets.macros.fats.total,
			'logged': nutrition.logged ? nutrition.logged.macros.fats.total : 0
		},
		{
			'label': 'protein',
			'target': nutrition.targets.macros.protein,
			'logged': nutrition.logged ? nutrition.logged.macros.protein : 0			
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