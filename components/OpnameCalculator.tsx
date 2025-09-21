
import React, { useState, useMemo } from 'react';
import { StockItem, HistoryEntry, AutocompleteOption } from '../types';
import { allProductNames, dataWadah } from '../constants';
import AutocompleteInput from './AutocompleteInput';

interface OpnameCalculatorProps {
    stokData: StockItem[];
    onAddHistory: (entry: HistoryEntry) => void;
}

const OpnameCalculator: React.FC<OpnameCalculatorProps> = ({ stokData, onAddHistory }) => {
    const [product, setProduct] = useState('');
    const [containerDisplay, setContainerDisplay] = useState('');
    const [containerWeight, setContainerWeight] = useState(0);
    const [manualStock, setManualStock] = useState('');

    const productOptions = useMemo(() => allProductNames.map(name => ({
        displayText: name,
        value: name,
        matchText: name
    })), []);
    
    const containerOptions = useMemo(() => dataWadah.map(item => ({
        displayText: item.berat > 0 ? `${item.nama} (${item.berat} gr)` : item.nama,
        value: item.berat,
        matchText: item.nama
    })), []);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!product) {
            alert("Silakan pilih bahan baku terlebih dahulu.");
            return;
        }
        
        const manualStockValue = parseFloat(manualStock);
        if (isNaN(manualStockValue)) {
            alert("Silakan masukkan berat/jumlah terkini yang valid.");
            return;
        }

        const itemData = stokData.find(item => item.product === product);
        const hitunganReal = manualStockValue - containerWeight;

        const historyEntry: HistoryEntry = {
            nama: product,
            data: itemData ? itemData.stock : 'N/A',
            real: hitunganReal,
            selisih: itemData ? (hitunganReal - itemData.stock) : 'N/A',
            uom: itemData ? itemData.uom : 'gr'
        };

        onAddHistory(historyEntry);
        // Reset form
        setProduct('');
        setContainerDisplay('');
        setContainerWeight(0);
        setManualStock('');
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 print:hidden">
            <h2 className="text-xl font-bold text-slate-700 mb-4">Kalkulator Stok Opname Manual</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="space-y-4">
                    <AutocompleteInput
                        label="Pilih Bahan Baku"
                        placeholder="Ketik nama bahan..."
                        options={productOptions}
                        value={product}
                        onValueChange={setProduct}
                        onOptionSelect={(_, option) => setProduct(option.value as string)}
                    />
                    <AutocompleteInput
                        label="Pilih Wadah Kosong (Opsional)"
                        placeholder="Ketik nama wadah..."
                        options={containerOptions}
                        value={containerDisplay}
                        onValueChange={setContainerDisplay}
                        onOptionSelect={(display, option) => {
                            setContainerDisplay(display);
                            setContainerWeight(option.value as number);
                        }}
                    />
                    <div>
                        <label htmlFor="manualStock" className="block mb-1 font-semibold text-slate-600">Berat/Jumlah Terkini (Manual)</label>
                        <input
                            id="manualStock"
                            type="number"
                            step="any"
                            value={manualStock}
                            onChange={(e) => setManualStock(e.target.value)}
                            required
                            placeholder="Contoh: 500"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <button type="submit" className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                    Hitung & Tambah ke Histori
                </button>
            </form>
        </div>
    );
};

export default OpnameCalculator;
