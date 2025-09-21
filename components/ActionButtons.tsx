
import React from 'react';

interface ActionButtonsProps {
    onWhatsAppSend: () => void;
    onPrint: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onWhatsAppSend, onPrint }) => {
    return (
        <div className="text-center my-8 space-y-4 md:space-y-0 md:space-x-4 print:hidden">
            <button
                onClick={onWhatsAppSend}
                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
                Kirim Laporan via WhatsApp
            </button>
            <button
                onClick={onPrint}
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
                Cetak Laporan ke PDF
            </button>
        </div>
    );
};

export default ActionButtons;
