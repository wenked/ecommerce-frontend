import React from 'react';
import { DropdownContainer, LabelContainer, SelectContainer } from './styles';

interface DropdownProps {
	options: string[];
	setOption: React.Dispatch<React.SetStateAction<string>>;
	placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
	options,
	setOption,
	placeholder,
}) => {
	return (
		<DropdownContainer>
			<LabelContainer>
				<label>{placeholder}</label>
			</LabelContainer>
			<SelectContainer>
				<select
					required
					placeholder={placeholder}
					onChange={(e) => {
						e.preventDefault();
						setOption(e.target.value);
					}}>
					{options.map((option) => {
						return (
							<option key={option} value={option}>
								{option}
							</option>
						);
					})}
				</select>
			</SelectContainer>
		</DropdownContainer>
	);
};

export default Dropdown;
