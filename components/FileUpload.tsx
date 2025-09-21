
import React, { useRef } from 'react';
import { StockItem } from '../types';

interface FileUploadProps {
    onProcess: (data: StockItem[]) => void;
    setIsLoading: (loading: boolean) => void;
    setIsReportGenerated: (isGenerated: boolean) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onProcess, setIsLoading, setIsReportGenerated }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const parseExcel = (data: ArrayBuffer): StockItem[] => {
        try {
            const workbook = (window as any).XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = (window as any).XLSX.utils.sheet_to_json(worksheet);
            return jsonData.map((item: any) => ({
                product: item.product,
                stock: parseFloat(item.stock) || 0,
                uom: item.uom || 'gr'
            }));
        } catch (e) {
            console.error("Error parsing Excel file:", e);
            return [];
        }
    };

    const parseCSV = (text: string): StockItem[] => {
        try {
            const lines = text.replace(/\r/g, "").split('\n').filter(line => line.trim() !== '');
            if (lines.length < 2) return [];
            const headers = lines[0].split(',').map(h => h.trim());
            return lines.slice(1).map(line => {
                const values = line.split(',');
                let obj: any = {};
                headers.forEach((header, index) => obj[header] = values[index] ? values[index].trim() : '');
                return {
                    product: obj.product,
                    stock: parseFloat(obj.stock) || 0,
                    uom: obj.uom || 'gr'
                };
            });
        } catch (e) {
            console.error("Error parsing CSV file:", e);
            return [];
        }
    };

    const readFile = (file: File): Promise<StockItem[]> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = () => reject(`Gagal membaca file ${file.name}`);

            if (file.name.endsWith('.csv')) {
                reader.readAsText(file);
                reader.onload = (e) => resolve(parseCSV(e.target?.result as string));
            } else if (file.name.endsWith('.xlsx')) {
                reader.readAsArrayBuffer(file);
                reader.onload = (e) => resolve(parseExcel(e.target?.result as ArrayBuffer));
            } else {
                reject("Format file tidak didukung. Harap unggah file .csv atau .xlsx");
            }
        });
    };

    const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const stokFileInput = fileInputRef.current;

        if (!stokFileInput || stokFileInput.files?.length === 0) {
            onProcess([]);
            return;
        }
        
        setIsLoading(true);
        setIsReportGenerated(false);
        const file = stokFileInput.files[0];

        try {
            const stokData = await readFile(file);
            onProcess(stokData);
        } catch (error) {
            alert(`Gagal memproses file: ${error}`);
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold text-slate-700 mb-4">Unggah File Stok Saat Ini</h2>
            <form onSubmit={handleFileUpload}>
                <div className="mb-4">
                    <label htmlFor="stokFile" className="block mb-2 font-semibold text-slate-600">Pilih File Stok Anda (.xlsx/.csv)</label>
                    <input 
                        type="file" 
                        id="stokFile" 
                        ref={fileInputRef}
                        accept=".csv, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                    Buat Laporan
                </button>
            </form>
        </div>
    );
};

export default FileUpload;
