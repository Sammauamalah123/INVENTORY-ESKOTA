
import React, { useState, useCallback } from 'react';
import { StockItem, ReportData, HistoryEntry, ManualStockValues } from './types';
import { manualStockItems } from './constants';
import FileUpload from './components/FileUpload';
import OpnameCalculator from './components/OpnameCalculator';
import OpnameHistory from './components/OpnameHistory';
import ReportSection from './components/ReportSection';
import ManualStockSection from './components/ManualStockSection';
import ActionButtons from './components/ActionButtons';
import Modal from './components/Modal';
import Loader from './components/Loader';
import { processReportData, generateWhatsAppLink, generateHistoryWhatsAppLink } from './services/reportService';

const App: React.FC = () => {
    const [stokDataFromFile, setStokDataFromFile] = useState<StockItem[]>([]);
    const [reportData, setReportData] = useState<ReportData>({ urgent: [], limit: [], mendekati: [] });
    const [opnameHistory, setOpnameHistory] = useState<HistoryEntry[]>([]);
    const [manualStockValues, setManualStockValues] = useState<ManualStockValues>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isReportGenerated, setIsReportGenerated] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const mainProcess = useCallback((stokData: StockItem[]) => {
        setIsLoading(false);
        if (!stokData || stokData.length === 0) {
            setStokDataFromFile([]);
            setReportData({ urgent: [], limit: [], mendekati: [] });
        } else {
            setStokDataFromFile(stokData);
            const newReportData = processReportData(stokData);
            setReportData(newReportData);
        }
        setIsReportGenerated(true);
    }, []);

    const handleAddHistory = useCallback((entry: HistoryEntry) => {
        setOpnameHistory(prev => [entry, ...prev]);
    }, []);

    const handleManualStockChange = useCallback((itemName: string, value: string) => {
        setManualStockValues(prev => ({ ...prev, [itemName]: value }));
    }, []);

    const handleWhatsAppSend = () => {
        const filledManualItems = manualStockItems
            .map(item => ({
                nama: item,
                sisa: manualStockValues[item] || ''
            }))
            .filter(item => item.sisa.trim() !== '');

        if (filledManualItems.length === 0) {
            setIsModalOpen(true);
        } else {
            const link = generateWhatsAppLink(reportData, filledManualItems);
            window.open(link, '_blank');
        }
    };

    const handleConfirmSendWA = () => {
        const link = generateWhatsAppLink(reportData, []);
        window.open(link, '_blank');
        setIsModalOpen(false);
    };

    const handleSendHistory = () => {
        if (opnameHistory.length === 0) {
            alert("Tidak ada data histori untuk dikirim.");
            return;
        }
        const link = generateHistoryWhatsAppLink(opnameHistory);
        window.open(link, '_blank');
    }

    return (
        <div className="bg-slate-100 min-h-screen font-sans text-gray-800">
            <main className="max-w-4xl mx-auto p-4 md:p-6">
                <header className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800">📊 INVENTORY REPORT ESKOTA</h1>
                </header>

                <FileUpload onProcess={mainProcess} setIsLoading={setIsLoading} setIsReportGenerated={setIsReportGenerated} />

                {isLoading && <Loader />}
                
                <OpnameCalculator stokData={stokDataFromFile} onAddHistory={handleAddHistory} />
                <OpnameHistory history={opnameHistory} onSendHistory={handleSendHistory} />
                
                {isReportGenerated && (
                    <>
                        <ReportSection reportData={reportData} />
                        <ManualStockSection 
                            manualStockValues={manualStockValues} 
                            onManualStockChange={handleManualStockChange} 
                        />
                        <ActionButtons onWhatsAppSend={handleWhatsAppSend} onPrint={() => window.print()} />
                    </>
                )}

                <Modal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleConfirmSendWA}
                    message="kamu yakin stok manualmu aman? tiwas diclatu mas adit lo"
                />
            </main>
        </div>
    );
};

export default App;
