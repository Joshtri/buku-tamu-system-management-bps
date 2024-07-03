import excel from 'exceljs';

export const createExcel = (data, res) => {
    // Create workbook and worksheet
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Guests');

    // Define headers
    worksheet.columns = [
        { header: 'Nama Lengkap', key: 'nama_lengkap', width: 30 },
        { header: 'Asal', key: 'asal', width: 20 },
        { header: 'Keperluan', key: 'keperluan', width: 40 },
        { header: 'Orang Dituju', key: 'orang_dituju', width: 30 },
        { header: 'No Hp', key: 'no_hp', width: 20 }
    ];

    // Add rows from data
    data.forEach(guest => {
        worksheet.addRow({
            nama_lengkap: guest.nama_lengkap,
            asal: guest.asal,
            keperluan: guest.keperluan,
            orang_dituju: guest.orang_dituju,
            no_hp: guest.no_hp
        });
    });

    // Set response headers for Excel download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=guests.xlsx');

    // Write workbook to response
    workbook.xlsx.write(res)
        .then(() => {
            res.end();
        })
        .catch(err => {
            console.error('Error writing Excel:', err);
            res.status(500).send('Internal Server Error');
        });
};


