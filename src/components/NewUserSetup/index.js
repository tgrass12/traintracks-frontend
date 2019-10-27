import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import MultistepForm from '../../hocs/MultistepForm';
import UserDetails from '../UserDetails';
import NutrientGoals from '../NutrientGoals';
import {
	initNewUser
} from '../../store/actions/user';

const NewUserSetup = () => {
	const username = useSelector(state => state.user.data.username);
	const dispatch = useDispatch();
	const history = useHistory();

	const confirmNewUser = async (userData) => {
		await dispatch(initNewUser(username, userData));
		history.push('/');
	}

	const setupFormComponents = [
		UserDetails,
		NutrientGoals,
	]

	const SetupForm = MultistepForm(
		setupFormComponents,
		confirmNewUser,
		'Get Started'
	);

	return (<SetupForm />);
}

export default NewUserSetup;
