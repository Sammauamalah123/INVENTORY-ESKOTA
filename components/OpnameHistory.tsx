
import React from 'react';
import { HistoryEntry } from '../types';

interface OpnameHistoryProps {
    history: HistoryEntry[];
    onSendHistory: () => void;
}

const OpnameHistory: React.FC<OpnameHistoryProps> = ({ history, onSendHistory }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 print:hidden">
            <h2 className="text-xl font-bold text-slate-700 mb-4">Histori Stok Opname</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nama Bahan</th>
                            <th scope="col" className="px-6 py-3">Hitungan Data</th>
                            <th scope="col" className="px-6 py-3">Hitungan Real</th>
                            <th scope="col" className="px-6 py-3">Selisih</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.length === 0 ? (
                            <tr className="bg-white border-b">
                                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                                    Belum ada histori.
                                </td>
                            </tr>
                        ) : (
                            history.map((item, index) => {
                                const selisihValue = typeof item.selisih === 'number' ? Math.round(item.selisih) : NaN;
                                const selisihClass = selisihValue > 0 ? 'text-green-600 font-bold' : selisihValue < 0 ? 'text-red-600 font-bold' : '';
                                const selisihSign = selisihValue > 0 ? '+' : '';

                                return (
                                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {item.nama}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.data !== 'N/A' ? `${Math.round(item.data)} ${item.uom}` : '---'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {`${Math.round(item.real)} ${item.uom}`}
                                        </td>
                                        <td className={`px-6 py-4 ${selisihClass}`}>
                                            {item.selisih !== 'N/A' ? `${selisihSign}${selisihValue}` : '---'}
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
            {history.length > 0 && (
                <div className="text-center mt-6">
                    <button onClick={onSendHistory} className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
                        Kirim Seluruh Histori via WA
                    </button>
                </div>
            )}
        </div>
    );
};

export default OpnameHistory;
