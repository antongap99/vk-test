import cn from "classnames";
import {ChangeEvent, FC} from "react";
import style from './Select.module.css'


export interface DefaultSelectProps {
	label: string,
	value: string
}
export interface  SelectFilterProps {
    className?: string;
	options: DefaultSelectProps[],
	onChange: (value: string) => void;
	selectLabel: string,
	value: string
}


const SelectFilter: FC<SelectFilterProps> = ({value, selectLabel,  options, onChange }) => {
    const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <div className={cn(style.Select)}>
            <label>{selectLabel}:</label>
            <select value={value} onChange={handleInputChange}>
                {options.map(option => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectFilter;

