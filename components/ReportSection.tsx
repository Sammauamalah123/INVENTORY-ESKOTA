
import React from 'react';
import { ReportData, ReportItem } from '../types';

interface ReportSectionProps {
    reportData: ReportData;
}

const Category: React.FC<{ title: string, items: ReportItem[], colorClass: string, emoji: string }> = ({ title, items, colorClass, emoji }) => {
    if (items.length === 0) return null;

    return (
        <div className={`p-5 mb-6 border-l-4 rounded-r-lg ${colorClass}`}>
            <h3 className="text-xl font-bold mb-3">{title} {emoji}</h3>
            <ul className="space-y-2">
                {items.map(item => (
                    <li key={item.nama} className="bg-slate-100 p-3 rounded flex justify-between items-center text-md">
                        <span>{item.nama}</span>
                        <strong className="text-slate-800">Sisa: {item.sisa}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ReportSection: React.FC<ReportSectionProps> = ({ reportData }) => {
    const { urgent, limit, mendekati } = reportData;
    const hasData = urgent.length > 0 || limit.length > 0 || mendekati.length > 0;
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 print:block">
            <h2 className="text-xl font-bold text-slate-700 mb-4 text-center print:text-left">Laporan Stok Otomatis</h2>
            {hasData ? (
                <>
                    <Category title="URGENT" items={urgent} colorClass="border-red-500 bg-red-50" emoji="‼️" />
                    <Category title="LIMIT" items={limit} colorClass="border-orange-500 bg-orange-50" emoji="⚠️" />
                    <Category title="MENDEKATI LIMIT" items={mendekati} colorClass="border-yellow-400 bg-yellow-50" emoji="📈" />
                </>
            ) : (
                <p className="text-center text-gray-500 py-4">Tidak ada data laporan untuk ditampilkan. Unggah file untuk memulai.</p>
            )}
        </div>
    );
};

export default ReportSection;
