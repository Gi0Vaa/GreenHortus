import { useEffect, useState } from "react";

const DarkGreenSelect = ({title, optionsFunction = null, setSelectedItem, fieldShowed, fieldValue, defaultValue}) => {
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        if(!optionsFunction) return;
        optionsFunction()
        .then(o => {
            setOptions(o);
        });
    }, [optionsFunction]);
    

    return (
        <div>
            <label className="text-green-dark font-semibold">{title}</label>
            <select className={`
                dark-green-select p-1 focus:outline-none
                ${optionsFunction ? 'cursor-pointer bg-green-50 border-green-dark text-green-dark' : 
                'cursor-not-allowed bg-gray-200 border-gray-300 text-white'}
                transition-colors  border-2 rounded-md flex flex-col gap-2 w-full
                `}
                onChange={(e) => setSelectedItem(
                    {   
                        value: e.target.value,
                        label: e.target.options[e.target.selectedIndex].text
                    }
                )}
            >
                {defaultValue ?
                    <option value={defaultValue[fieldValue]}>{defaultValue[fieldShowed]}</option>
                    : <option value=''>Select an option</option>
                }
                {options.map((option, index) => {
                    if(defaultValue && (option[fieldShowed] === defaultValue[fieldShowed])) return null;  
                    return <option key={index} value={option[fieldValue]}>{option[fieldShowed]}</option>
                })}
            </select>
        </div>
    );
}

export default DarkGreenSelect;