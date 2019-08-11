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

export const getCurrentDate = function() {
	return dateFns.format(dateFns.startOfToday(), 'YYYY-MM-DD');
}

export const setToNextMonth = function(date) {
	return formatDateStandard(dateFns.addMonths(date, 1));
}

export const setToPrevMonth = function(date) {
	return formatDateStandard(dateFns.subMonths(date, 1));
}

export const setToNextDay = function(date) {
	return formatDateStandard(dateFns.addDays(date, 1));
}

export const setToPrevDay = function(date) {
	return formatDateStandard(dateFns.subDays(date, 1));
}

export const isValidDateString = function(dateStr) {
 	const format = 'YYYY-MM-DD';
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    
    if (!pattern.test(dateStr)) return false;
    if (dateFns.format(dateStr, format) !== dateStr) return false;

    return true;
}