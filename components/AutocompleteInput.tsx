
import React, { useState, useEffect, useRef } from 'react';
import { AutocompleteOption } from '../types';

interface AutocompleteInputProps {
    label: string;
    placeholder: string;
    options: AutocompleteOption[];
    value: string;
    onValueChange: (value: string) => void;
    onOptionSelect: (displayValue: string, option: AutocompleteOption) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ label, placeholder, options, value, onValueChange, onOptionSelect }) => {
    const [suggestions, setSuggestions] = useState<AutocompleteOption[]>([]);
    const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsSuggestionsVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.currentTarget.value;
        onValueChange(userInput);
        
        if (userInput) {
            const filtered = options.filter(option =>
                option.matchText.toLowerCase().includes(userInput.toLowerCase())
            );
            setSuggestions(filtered);
            setIsSuggestionsVisible(true);
        } else {
            setSuggestions([]);
            setIsSuggestionsVisible(false);
        }
    };

    const handleSelect = (option: AutocompleteOption) => {
        onOptionSelect(option.displayText, option);
        setSuggestions([]);
        setIsSuggestionsVisible(false);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <label className="block mb-1 font-semibold text-slate-600">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onFocus={() => { if(value) setIsSuggestionsVisible(true) }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {isSuggestionsVisible && suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {suggestions.map((option, index) => (
                        <li
                            key={`${option.matchText}-${index}`}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                        >
                            {option.displayText}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutocompleteInput;
