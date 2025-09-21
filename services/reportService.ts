
import { StockItem, ReportData, ReportItem, HistoryEntry } from '../types';
import { filterDataFromFile, dataToleransi, dataSatuan } from '../constants';

const formatStok = (stok: number, productName: string): string => {
    const satuanInfo = dataSatuan.find(d => d.product === productName);
    if (!satuanInfo || isNaN(stok) || isNaN(satuanInfo.acuan_satuan) || satuanInfo.acuan_satuan === 0) {
        return `${Math.round(stok)}`;
    }

    const stokValue = parseFloat(stok.toString());
    const acuan = parseFloat(satuanInfo.acuan_satuan.toString());

    if (stokValue < acuan) {
        return `${Math.round(stokValue)}`;
    }

    const jumlahUtuh = Math.floor(stokValue / acuan);
    const sisa = Math.round(stokValue % acuan);

    return sisa === 0 ? `${jumlahUtuh}` : `${jumlahUtuh}/${sisa}`;
};

export const processReportData = (stok: StockItem[]): ReportData => {
    const urgentList: ReportItem[] = [];
    const limitList: ReportItem[] = [];
    const mendekatiList: ReportItem[] = [];

    stok.forEach(item => {
        const filterInfo = filterDataFromFile.find(d => d.product === item.product);
        const toleransiInfo = dataToleransi.find(d => d.product === item.product);

        if (!filterInfo) return;

        const toleransi = toleransiInfo ? toleransiInfo.toleransi : 0;
        const stokValue = item.stock - toleransi;
        const { batas_kritis, batas_limit, batas_mendekati } = filterInfo;

        const itemInfo: ReportItem = {
            nama: item.product,
            sisa: formatStok(stokValue, item.product),
            stok: stokValue
        };

        if (stokValue <= batas_kritis) {
            urgentList.push(itemInfo);
        } else if (stokValue > batas_kritis && stokValue <= batas_limit) {
            limitList.push(itemInfo);
        } else if (stokValue > batas_limit && stokValue <= batas_mendekati) {
            mendekatiList.push(itemInfo);
        }
    });
    
    const sortByStock = (a: ReportItem, b: ReportItem) => a.stok - b.stok;
    urgentList.sort(sortByStock);
    limitList.sort(sortByStock);
    mendekatiList.sort(sortByStock);

    return { urgent: urgentList, limit: limitList, mendekati: mendekatiList };
};

export const generateWhatsAppLink = (reportData: ReportData, manualItems: { nama: string, sisa: string }[]) => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    let waText = `Update Laporan Stok Bahan Baku\n`;
    waText += `(Tanggal: ${formattedDate})\n\n`;

    const combinedLimitList = [...reportData.limit, ...manualItems];

    const addSectionToText = (title: string, items: { nama: string, sisa: string }[]) => {
        if (items.length > 0) {
            waText += `${title}\n`;
            items.forEach(item => { waText += `${item.nama}, sisa ${item.sisa}\n`; });
            waText += "\n";
        }
    };

    addSectionToText("URGENT ‼️", reportData.urgent);
    addSectionToText("LIMIT ⚠️", combinedLimitList);
    addSectionToText("MENDEKATI LIMIT 📈", reportData.mendekati);

    return `https://api.whatsapp.com/send?phone=628977916516&text=${encodeURIComponent(waText)}`;
};

export const generateHistoryWhatsAppLink = (history: HistoryEntry[]) => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    let historyText = `*Laporan Histori Stok Opname*\n`;
    historyText += `(Tanggal: ${formattedDate})\n\n`;

    // Reverse to show oldest first
    [...history].reverse().forEach(entry => {
        const data = entry.data !== 'N/A' ? `${Math.round(entry.data)} ${entry.uom}` : '---';
        const real = `${Math.round(entry.real)} ${entry.uom}`;
        let selisihText = '---';
        if (entry.selisih !== 'N/A') {
            const selisihValue = Math.round(entry.selisih);
            const sign = selisihValue > 0 ? '+' : '';
            selisihText = `${sign}${selisihValue}`;
        }
        
        historyText += `Bahan: *${entry.nama}*\n`;
        historyText += ` - Data Sistem: ${data}\n`;
        historyText += ` - Hitungan Real: ${real}\n`;
        historyText += ` - Selisih: ${selisihText}\n\n`;
    });

    return `https://wa.me/6282140859868?text=${encodeURIComponent(historyText)}`;
};
