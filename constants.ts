
import { FilterRule, ToleranceRule, UnitRule, Container } from './types';

export const filterDataFromFile: FilterRule[] = [
    { product: 'Ayam Marinasi', batas_kritis: 4, batas_limit: 5, batas_mendekati: 6 },
    { product: 'beras', batas_kritis: 1200, batas_limit: 1600, batas_mendekati: 1800 },
    { product: 'biscoff jam', batas_kritis: 200, batas_limit: 300, batas_mendekati: 350 },
    { product: 'bowl', batas_kritis: 30, batas_limit: 50, batas_mendekati: 55 },
    { product: 'box toast L', batas_kritis: 20, batas_limit: 30, batas_mendekati: 35 },
    { product: 'box toast M', batas_kritis: 50, batas_limit: 55, batas_mendekati: 100 },
    { product: 'box toast S', batas_kritis: 50, batas_limit: 75, batas_mendekati: 100 },
    { product: 'Brown sugar', batas_kritis: 200, batas_limit: 500, batas_mendekati: 600 },
    { product: 'butter', batas_kritis: 200, batas_limit: 500, batas_mendekati: 600 },
    { product: 'caramel crumb', batas_kritis: 150, batas_limit: 200, batas_mendekati: 250 },
    { product: 'caramel saos', batas_kritis: 300, batas_limit: 350, batas_mendekati: 400 },
    { product: 'chili besar', batas_kritis: 300, batas_limit: 325, batas_mendekati: 400 },
    { product: 'chili sachet', batas_kritis: 18, batas_limit: 24, batas_mendekati: 26 },
    { product: 'choco crunchy', batas_kritis: 500, batas_limit: 600, batas_mendekati: 750 },
    { product: 'Cup L', batas_kritis: 50, batas_limit: 60, batas_mendekati: 65 },
    { product: 'Cup M', batas_kritis: 70, batas_limit: 100, batas_mendekati: 110 },
    { product: 'Cup R', batas_kritis: 70, batas_limit: 110, batas_mendekati: 120 },
    { product: 'espresso', batas_kritis: 600, batas_limit: 900, batas_mendekati: 950 },
    { product: 'gula pasir', batas_kritis: 55, batas_limit: 100, batas_mendekati: 200 },
    { product: 'Ham', batas_kritis: 20, batas_limit: 24, batas_mendekati: 28 },
    { product: 'keju blok', batas_kritis: 150, batas_limit: 160, batas_mendekati: 200 },
    { product: 'keju slice', batas_kritis: 10, batas_limit: 12, batas_mendekati: 15 },
    { product: 'mango jam', batas_kritis: 200, batas_limit: 300, batas_mendekati: 360 },
    { product: 'mayones', batas_kritis: 250, batas_limit: 300, batas_mendekati: 350 },
    { product: 'minyak', batas_kritis: 2, batas_limit: 3, batas_mendekati: 4 },
    { product: 'nastar', batas_kritis: 300, batas_limit: 350, batas_mendekati: 400 },
    { product: 'nori', batas_kritis: 1, batas_limit: 2, batas_mendekati: 2 },
    { product: 'oreo crumb', batas_kritis: 150, batas_limit: 300, batas_mendekati: 350 },
    { product: 'powder chocolate', batas_kritis: 4, batas_limit: 6, batas_mendekati: 8 },
    { product: 'powder greentea', batas_kritis: 4, batas_limit: 6, batas_mendekati: 8 },
    { product: 'powder ori', batas_kritis: 6, batas_limit: 8, batas_mendekati: 12 },
    { product: 'powder red velvet', batas_kritis: 3, batas_limit: 4, batas_mendekati: 5 },
    { product: 'powder strawberry', batas_kritis: 3, batas_limit: 4, batas_mendekati: 5 },
    { product: 'powder taro', batas_kritis: 3, batas_limit: 4, batas_mendekati: 5 },
    { product: 'powder white latte', batas_kritis: 4, batas_limit: 6, batas_mendekati: 8 },
    { product: 'Roti', batas_kritis: 32, batas_limit: 35, batas_mendekati: 48 },
    { product: 'salt cream/bubuk cream', batas_kritis: 300, batas_limit: 400, batas_mendekati: 500 },
    { product: 'saos cheese', batas_kritis: 250, batas_limit: 300, batas_mendekati: 400 },
    { product: 'saos mentai', batas_kritis: 350, batas_limit: 350, batas_mendekati: 550 },
    { product: 'saos nanban', batas_kritis: 300, batas_limit: 350, batas_mendekati: 400 },
    { product: 'saos spicy bbq', batas_kritis: 350, batas_limit: 600, batas_mendekati: 650 },
    { product: 'sirup butterscotch', batas_kritis: 250, batas_limit: 300, batas_mendekati: 350 },
    { product: 'sirup caramel', batas_kritis: 300, batas_limit: 350, batas_mendekati: 400 },
    { product: 'sirup hazelnut', batas_kritis: 100, batas_limit: 150, batas_mendekati: 200 },
    { product: 'sirup mangga', batas_kritis: 200, batas_limit: 250, batas_mendekati: 300 },
    { product: 'sirup pandan', batas_kritis: 200, batas_limit: 250, batas_mendekati: 300 },
    { product: 'sirup strawberry', batas_kritis: 300, batas_limit: 350, batas_mendekati: 400 },
    { product: 'SKM', batas_kritis: 1200, batas_limit: 1500, batas_mendekati: 2000 },
    { product: 'strawberry crumb', batas_kritis: 15, batas_limit: 20, batas_mendekati: 21 },
    { product: 'strawberry jam', batas_kritis: 500, batas_limit: 550, batas_mendekati: 600 },
    { product: 'strawberry oles', batas_kritis: 200, batas_limit: 250, batas_mendekati: 300 },
    { product: 'sweet cheese', batas_kritis: 300, batas_limit: 350, batas_mendekati: 400 },
    { product: 'teh', batas_kritis: 500, batas_limit: 600, batas_mendekati: 700 },
    { product: 'tepung', batas_kritis: 1200, batas_limit: 1500, batas_mendekati: 1800 },
    { product: 'tomat besar', batas_kritis: 200, batas_limit: 250, batas_mendekati: 300 },
    { product: 'tomat sachet', batas_kritis: 15, batas_limit: 16, batas_mendekati: 20 },
    { product: 'UHT', batas_kritis: 2850, batas_limit: 3800, batas_mendekati: 3900 },
    { product: 'UHT coconut', batas_kritis: 300, batas_limit: 500, batas_mendekati: 550 }
];

export const dataToleransi: ToleranceRule[] = [
    { product: 'Ayam Marinasi', toleransi: 2 }, { product: 'beras', toleransi: 600 }, { product: 'biscoff jam', toleransi: 100 },
    { product: 'bowl', toleransi: 25 }, { product: 'box toast L', toleransi: 5 }, { product: 'box toast M', toleransi: 10 },
    { product: 'box toast S', toleransi: 10 }, { product: 'Brown sugar', toleransi: 200 }, { product: 'butter', toleransi: 0 },
    { product: 'caramel crumb', toleransi: 150 }, { product: 'caramel saos', toleransi: 200 }, { product: 'chili besar', toleransi: 200 },
    { product: 'chili sachet', toleransi: 12 }, { product: 'choco crunchy', toleransi: 300 }, { product: 'Cup L', toleransi: 20 },
    { product: 'Cup M', toleransi: 25 }, { product: 'Cup R', toleransi: 30 }, { product: 'espresso', toleransi: 350 },
    { product: 'gula pasir', toleransi: 50 }, { product: 'Ham', toleransi: 4 }, { product: 'keju blok', toleransi: 100 },
    { product: 'keju slice', toleransi: 6 }, { product: 'mango jam', toleransi: 100 }, { product: 'mayones', toleransi: 200 },
    { product: 'minyak', toleransi: 2 }, { product: 'nastar', toleransi: 150 }, { product: 'nori', toleransi: 0 },
    { product: 'oreo crumb', toleransi: 100 }, { product: 'powder chocolate', toleransi: 2 }, { product: 'powder greentea', toleransi: 2 },
    { product: 'powder ori', toleransi: 2 }, { product: 'powder red velvet', toleransi: 1 }, { product: 'powder strawberry', toleransi: 1 },
    { product: 'powder taro', toleransi: 1 }, { product: 'powder white latte', toleransi: 2 }, { product: 'Roti', toleransi: 16 },
    { product: 'salt cream/bubuk cream', toleransi: 200 }, { product: 'saos cheese', toleransi: 200 }, { product: 'saos mentai', toleransi: 200 },
    { product: 'saos nanban', toleransi: 200 }, { product: 'saos spicy bbq', toleransi: 200 }, { product: 'sirup butterscotch', toleransi: 100 },
    { product: 'sirup caramel', toleransi: 100 }, { product: 'sirup hazelnut', toleransi: 100 }, { product: 'sirup mangga', toleransi: 100 },
    { product: 'sirup pandan', toleransi: 100 }, { product: 'sirup strawberry', toleransi: 100 }, { product: 'SKM', toleransi: 500 },
    { product: 'strawberry crumb', toleransi: 50 }, { product: 'strawberry jam', toleransi: 100 }, { product: 'strawberry oles', toleransi: 150 },
    { product: 'sweet cheese', toleransi: 200 }, { product: 'teh', toleransi: 500 }, { product: 'tepung', toleransi: 300 },
    { product: 'tomat besar', toleransi: 100 }, { product: 'tomat sachet', toleransi: 0 }
];

export const dataSatuan: UnitRule[] = [
    { product: 'Ayam Marinasi', acuan_satuan: 1 }, { product: 'beras', acuan_satuan: 5000 }, { product: 'biscoff jam', acuan_satuan: 400 }, { product: 'bowl', acuan_satuan: 25 }, { product: 'box toast L', acuan_satuan: 100 }, { product: 'box toast M', acuan_satuan: 100 }, { product: 'box toast S', acuan_satuan: 100 }, { product: 'Brown sugar', acuan_satuan: 650 }, { product: 'butter', acuan_satuan: 400 }, { product: 'caramel crumb', acuan_satuan: 400 }, { product: 'caramel saos', acuan_satuan: 800 }, { product: 'chili besar', acuan_satuan: 1000 }, { product: 'chili sachet', acuan_satuan: 1000 }, { product: 'choco crunchy', acuan_satuan: 800 }, { product: 'Cup L', acuan_satuan: 50 }, { product: 'Cup M', acuan_satuan: 50 }, { product: 'Cup R', acuan_satuan: 50 }, { product: 'espresso', acuan_satuan: 950 }, { product: 'gula pasir', acuan_satuan: 1000 }, { product: 'Ham', acuan_satuan: 20 }, { product: 'keju blok', acuan_satuan: 1000 }, { product: 'keju slice', acuan_satuan: 12 }, { product: 'mango jam', acuan_satuan: 1000 }, { product: 'mayones', acuan_satuan: 1000 }, { product: 'minyak', acuan_satuan: 1000 }, { product: 'nastar', acuan_satuan: 400 }, { product: 'nori', acuan_satuan: 50 }, { product: 'oreo crumb', acuan_satuan: 400 }, { product: 'powder chocolate', acuan_satuan: 1000 }, { product: 'powder greentea', acuan_satuan: 1000 }, { product: 'powder ori', acuan_satuan: 1000 }, { product: 'powder red velvet', acuan_satuan: 1000 }, { product: 'powder strawberry', acuan_satuan: 1000 }, { product: 'powder taro', acuan_satuan: 1000 }, { product: 'powder white latte', acuan_satuan: 1000 }, { product: 'Roti', acuan_satuan: 48 }, { product: 'salt cream/bubuk cream', acuan_satuan: 1000 }, { product: 'saos cheese', acuan_satuan: 1000 }, { product: 'saos mentai', acuan_satuan: 1000 }, { product: 'saos nanban', acuan_satuan: 1000 }, { product: 'saos spicy bbq', acuan_satuan: 1000 }, { product: 'sirup butterscotch', acuan_satuan: 800 }, { product: 'sirup caramel', acuan_satuan: 800 }, { product: 'sirup hazelnut', acuan_satuan: 800 }, { product: 'sirup mangga', acuan_satuan: 800 }, { product: 'sirup pandan', acuan_satuan: 800 }, { product: 'sirup strawberry', acuan_satuan: 800 }, { product: 'SKM', acuan_satuan: 950 }, { product: 'strawberry crumb', acuan_satuan: 100 }, { product: 'strawberry jam', acuan_satuan: 800 }, { product: 'strawberry oles', acuan_satuan: 400 }, { product: 'sweet cheese', acuan_satuan: 1000 }, { product: 'teh', acuan_satuan: 800 }, { product: 'tepung', acuan_satuan: 5000 }, { product: 'tomat besar', acuan_satuan: 1000 }, { product: 'tomat sachet', acuan_satuan: 25 }, { product: 'UHT', acuan_satuan: 950 }, { product: 'UHT coconut', acuan_satuan: 1000 }
];

export const dataWadah: Container[] = [
    { nama: 'Tanpa Wadah', berat: 0 }, { nama: 'Botol Sirup', berat: 35 }, { nama: 'Wadah Selai Toast', berat: 56.1 }, { nama: 'Bucket', berat: 211 }, { nama: 'Biscoff', berat: 35.3 }, { nama: 'Gastronom', berat: 114 }, { nama: 'Panci Besar', berat: 518 }, { nama: 'Panci Kecil', berat: 198 }, { nama: 'Jurigen Besar', berat: 147.2 }, { nama: 'Jurigen Kecil', berat: 70 }, { nama: 'Wadah Jam', berat: 78.3 }, { nama: 'Wadah Ayam', berat: 98 }, { nama: 'Botol Sirup Besar', berat: 50.7 }
];

export const manualStockItems: string[] = [
    'Kresek T', 'Kresek panjang', 'Kresek L', 'Kresek M', 'Kresek S', 'Sedotan', 'Sendok',
    'Nori', 'Selada', 'Timun', 'Tutup cup Sealer', 'Kertas penggaris grab', 'Kresek sampah',
    'Soklin lantai', 'Rinso', 'Sunlight', 'Cling', 'Baterai', 'Kertas thermal'
];

export const allProductNames: string[] = [...new Set([...filterDataFromFile.map(item => item.product), ...manualStockItems])].sort((a,b) => a.localeCompare(b));
