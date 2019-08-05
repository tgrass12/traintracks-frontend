import dateFns from 'date-fns';

export const snakeCase = function(str) {
	return str.toLowerCase().replace(' ', '-');
}

export const formatDateStandard = function(date) {
	return dateFns.format(date, 'YYYY-MM-DD');
}

export const formatDateNamedMonth = function(date) {
	return dateFns.format(date, 'MMMM YYYY')
}

export const formatDateFullNamed = function(date) {
	return dateFns.format(date, 'dddd, MMMM DD, YYYY')
}

export const setToNextMonth = function(date) {
	return dateFns.addMonths(date, 1);
}

export const setToPrevMonth = function(date) {
	return dateFns.subMonths(date, 1);
}

export const setToNextDay = function(date) {
	return dateFns.addDays(date, 1);
}

export const setToPrevDay = function(date) {
	return dateFns.subDays(date, 1);
}
