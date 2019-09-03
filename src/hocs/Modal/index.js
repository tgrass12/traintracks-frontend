import React from 'react';
import ReactModal from 'react-modal';
import '../../styles/Modal.scss';

let Modal = (Component, isOpen = false, hideModal, props) => {
	if (process.env.NODE_ENV !== 'test') {
		ReactModal.setAppElement('#root');
	}
	else {
		ReactModal.setAppElement(document.createElement('div'));
	}

	const shouldClose = () => {
		if (hideModal) hideModal();
		else {
			isOpen = false;
		}
	}

	return (
		<ReactModal 
			overlayClassName={'modal-overlay'}
			className={'modal-content'} 
			isOpen={isOpen}
			onRequestClose={shouldClose}
		>
		{!!Component &&
			<Component hideModal={hideModal} {...props}/>
		}
		</ReactModal>
	);
}

export default Modal;