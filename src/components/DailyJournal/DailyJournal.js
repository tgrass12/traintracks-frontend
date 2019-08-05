import React, {useState} from 'react';
import Header from './Header';
import {setToNextDay} from '../../shared/util';
import '../../styles/DailyJournal.scss';

let DailyJournal = () => {
	let [date, setDate] = useState(new Date());
	return (
		<div className="daily-journal">
			<Header date={date} setDate={setDate}/>
		</div>
	)
}

export default DailyJournal;