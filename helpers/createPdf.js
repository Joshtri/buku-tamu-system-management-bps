import PDFDocument from 'pdfkit';

// Fungsi untuk membuat file PDF dari data tamu
export const createPDF = (data, res) => {
    // Create a PDF document
    const doc = new PDFDocument();
    let filename = 'guests.pdf';

    // Set response headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Pipe PDF to response
    doc.pipe(res);

    // Write content to PDF
    doc.fontSize(12);
    doc.text('Guest List\n\n');

    data.forEach((guest, index) => {
        doc.text(`Guest ${index + 1}:`);
        doc.text(`Nama Lengkap: ${guest.nama_lengkap}`);
        doc.text(`Asal: ${guest.asal}`);
        doc.text(`Keperluan: ${guest.keperluan}`);
        doc.text(`Orang Dituju: ${guest.orang_dituju}`);
        doc.text(`No Hp: ${guest.no_hp}`);
        doc.text('\n');
    });

    // Finalize PDF and send response
    doc.end();
};

