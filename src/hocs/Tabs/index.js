import React, {useState} from 'react';
import TabHeader from './TabHeader';
import '../../styles/Tabs.scss';
import {snakeCase} from '../../shared/util';

let Tabs = (ComponentsToTab) => {
	let initialTab = snakeCase(ComponentsToTab[0].label);
	let [activeItem, setActiveItem] = useState(initialTab);
	let tabContents = [];
	let tabHeaders = [];

	let createTabHeaderItem = function(componentLabel, isActive) {
		return <TabHeader 
			key={componentLabel} 
			label={componentLabel}
			isActive={isActive}
			setActiveItem={setActiveItem} 
		/>
	}

	let createTabs = function() {
		for (let c of ComponentsToTab) {
			let isActive = snakeCase(c.label) === activeItem;

			tabHeaders.push(createTabHeaderItem(c.label, isActive));
			if (isActive) {
				tabContents = (<c.component {...c.props} />);
			}
		}
	}

	createTabs();

	return (
		<div className="tab-container">
			<div className="tab-header">
				{tabHeaders}
			</div>
			<div className="tab-contents">
				{tabContents}
			</div>
		</div>
	)
}

export default Tabs;