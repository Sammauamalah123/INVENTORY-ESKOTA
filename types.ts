
export interface StockItem {
    product: string;
    stock: number;
    uom: string;
}

export interface ReportItem {
    nama: string;
    sisa: string;
    stok: number;
}

export interface ReportData {
    urgent: ReportItem[];
    limit: ReportItem[];
    mendekati: ReportItem[];
}

export interface HistoryEntry {
    nama: string;
    data: number | 'N/A';
    real: number;
    selisih: number | 'N/A';
    uom: string;
}

export interface FilterRule {
    product: string;
    batas_kritis: number;
    batas_limit: number;
    batas_mendekati: number;
}

export interface ToleranceRule {
    product: string;
    toleransi: number;
}

export interface UnitRule {
    product: string;
    acuan_satuan: number;
}

export interface Container {
    nama: string;
    berat: number;
}

export interface ManualStockValues {
    [key: string]: string;
}

export interface AutocompleteOption {
    displayText: string;
    value: string | number;
    matchText: string;
}
