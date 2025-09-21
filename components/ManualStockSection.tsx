
import React from 'react';
import { manualStockItems } from '../constants';
import { ManualStockValues } from '../types';

interface ManualStockSectionProps {
    manualStockValues: ManualStockValues;
    onManualStockChange: (itemName: string, value: string) => void;
}

const ManualStockSection: React.FC<ManualStockSectionProps> = ({ manualStockValues, onManualStockChange }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 print:hidden">
            <h2 className="text-xl font-bold text-slate-700 mb-4">Stok Manual</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {manualStockItems.map(item => (
                    <div key={item} className="flex items-center justify-between">
                        <label htmlFor={`manual-${item}`} className="flex-grow text-slate-600">
                            {item}
                        </label>
                        <input
                            type="number"
                            id={`manual-${item}`}
                            value={manualStockValues[item] || ''}
                            onChange={(e) => onManualStockChange(item, e.target.value)}
                            placeholder="Qty"
                            className="w-24 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManualStockSection;
