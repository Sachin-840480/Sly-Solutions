// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');
// const cors = require('cors');
// const { exec } = require('child_process');

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
//     const outputFilePath = path.join('uploads', `${file.filename}.pdf`);

//     // Command to convert .docx to .pdf using MS Word (replace with the correct path if needed)
//     const command = `start /wait winword "${file.path}" /mFileSaveAs /q /n /tPDF /exit "${outputFilePath}"`;

//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         console.error('Error converting DOCX to PDF:', error);
//         fs.unlinkSync(file.path); // Clean up uploaded file
//         return res.status(500).json({ error: 'Error converting DOCX to PDF' });
//       }

//       // Send the generated PDF file as response
//       res.setHeader('Content-Type', 'application/pdf');
//       res.setHeader('Content-Disposition', `attachment; filename="${file.originalname.split('.')[0]}.pdf"`);

//       const fileStream = fs.createReadStream(outputFilePath);
//       fileStream.pipe(res);

//       // Clean up the uploaded DOCX file and generated PDF after the response is sent
//       fileStream.on('end', () => {
//         fs.unlinkSync(file.path); // Remove the uploaded DOCX file
//         fs.unlinkSync(outputFilePath); // Remove the generated PDF file
//       });
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
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

// Endpoint to convert Word to PDF
app.post('/api/convert-to-pdf', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) {
    console.log('No file uploaded.');
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const fileExtension = path.extname(file.originalname).toLowerCase();
  if (fileExtension !== '.docx') {
    console.log(`Invalid file type: ${fileExtension}`);
    fs.unlinkSync(file.path); // Clean up uploaded file
    return res.status(400).json({ error: 'Invalid file type. Please upload a .docx file.' });
  }

  try {
    const outputFilePath = path.join('uploads', `${file.filename}.pdf`);

    // Replace this with the correct path to MS Word if needed
    const command = `"C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE" "${file.path}" /mFileSaveAsPDF /q`;

    console.log('Executing command:', command);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing MS Word command:', error.message);
        console.error('stderr output:', stderr);
        fs.unlinkSync(file.path); // Clean up uploaded file
        return res.status(500).json({ error: 'Error converting DOCX to PDF' });
      }

      console.log('Command executed successfully. Checking for output file...');
      console.log('stdout output:', stdout);

      // Check if the PDF file exists
      if (!fs.existsSync(outputFilePath)) {
        console.error('Generated PDF file not found at:', outputFilePath);
        fs.unlinkSync(file.path);
        return res.status(500).json({ error: 'PDF file not generated' });
      }

      console.log('PDF file generated successfully at:', outputFilePath);

      // Send the generated PDF file as response
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${file.originalname.split('.')[0]}.pdf"`
      );

      const fileStream = fs.createReadStream(outputFilePath);
      fileStream.pipe(res);

      // Clean up files after response is sent
      fileStream.on('end', () => {
        console.log('Cleaning up files...');
        fs.unlinkSync(file.path); // Remove uploaded DOCX
        fs.unlinkSync(outputFilePath); // Remove generated PDF
        console.log('Cleanup complete.');
      });

      fileStream.on('error', (streamError) => {
        console.error('Error sending file:', streamError);
        res.status(500).json({ error: 'Error sending the PDF file' });
      });
    });
  } catch (error) {
    console.error('Unexpected error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
    fs.unlinkSync(file.path); // Ensure cleanup
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
