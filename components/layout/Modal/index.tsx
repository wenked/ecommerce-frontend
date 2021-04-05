import React from 'react';
import { CloseButton, ModalContainer, ModalContent } from './styles';

interface ModalProps {
	text: string;
	toggle: boolean;
	setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ text, toggle, setToggle }) => {
	return (
		<ModalContainer display={toggle ? 'block' : 'none'}>
			<ModalContent>
				<CloseButton onClick={() => setToggle(false)} />
				<span>{text}</span>
			</ModalContent>
		</ModalContainer>
	);
};

export default Modal;
