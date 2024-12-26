// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');
// const PDFDocument = require('pdfkit');
// const cors = require('cors');
// const mammoth = require('mammoth'); // Library for extracting text from .docx files

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(cors());
// app.use(express.json());

// // Endpoint to convert Word to PDF
// app.post('/api/convert-to-pdf', upload.single('file'), async (req, res) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).json({ error: 'No file uploaded' });
//   }

//   const fileExtension = path.extname(file.originalname).toLowerCase();
//   if (fileExtension !== '.docx') {
//     fs.unlinkSync(file.path); // Clean up uploaded file
//     return res.status(400).json({ error: 'Invalid file type. Please upload a .docx file.' });
//   }

//   try {
//     // Read the uploaded .docx file
//     const wordFile = fs.readFileSync(file.path);

//     // Extract text from .docx using Mammoth
//     const { value: extractedText } = await mammoth.extractRawText({ buffer: wordFile });

//     // Create a PDF using PDFKit
//     const pdfDoc = new PDFDocument();
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader(
//       'Content-Disposition',
//       `attachment; filename="${file.originalname.split('.')[0]}.pdf"`
//     );

//     pdfDoc.pipe(res);
//     pdfDoc.fontSize(12).text(extractedText);
//     pdfDoc.end();

//     // Clean up the uploaded file after the response is sent
//     pdfDoc.on('finish', () => {
//       fs.unlinkSync(file.path);
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//     fs.unlinkSync(file.path); // Ensure the uploaded file is cleaned up in case of an error
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  


const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const cors = require('cors');
const mammoth = require('mammoth'); // For extracting text from .docx files

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

// Endpoint to convert Word to PDF
app.post('/api/convert-to-pdf', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const fileExtension = path.extname(file.originalname).toLowerCase();
  if (fileExtension !== '.docx') {
    fs.unlinkSync(file.path); // Clean up uploaded file
    return res.status(400).json({ error: 'Invalid file type. Please upload a .docx file.' });
  }

  try {
    // Read the uploaded .docx file
    const wordBuffer = fs.readFileSync(file.path);

    // Extract text using Mammoth
    const { value: extractedText } = await mammoth.extractRawText({ buffer: wordBuffer });

    // Create a PDF using PDFKit
    const pdfDoc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${file.originalname.split('.')[0]}.pdf"`
    );

    pdfDoc.pipe(res);
    pdfDoc.fontSize(12).text(extractedText);
    pdfDoc.end();

    // Clean up the uploaded file after the response is sent
    pdfDoc.on('finish', () => {
      fs.unlinkSync(file.path);
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    fs.unlinkSync(file.path); // Ensure the uploaded file is cleaned up in case of an error
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
