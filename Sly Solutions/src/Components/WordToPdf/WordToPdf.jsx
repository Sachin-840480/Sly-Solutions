// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import wordicon from '../Image/word.png';

// const WordToPdf = ({ setProcessedFiles }) => {
//   const [conversionInProgress, setConversionInProgress] = useState(false);
//   const [isFileValid, setIsFileValid] = useState(true);  // Start as true to avoid error messages before upload
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const navigate = useNavigate();

//   const uploadAndConvertFile = async (file) => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       setConversionInProgress(true);

//       const response = await fetch('http://localhost:5000/api/convert-to-pdf', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const blob = await response.blob();
//         const pdfURL = URL.createObjectURL(blob);
//         const processedFile = { name: file.name, downloadLink: pdfURL };

//         setProcessedFiles((prevFiles) => [...prevFiles, processedFile]);
//         toast.success(`"${file.name}" converted to PDF successfully!`);
//       } else {
//         const errorData = await response.json();
//         toast.error(errorData.error || 'Failed to convert the file.');
//       }
//     } catch (error) {
//       toast.error('An error occurred during file conversion.');
//       console.log(error);
      
//     } finally {
//       setConversionInProgress(false);
//     }
//   };

//   const handleFileValidation = (file) => {
//     const validFileTypes = [
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
//       'application/msword', // .doc
//     ];

//     if (validFileTypes.includes(file.type)) {
//       setIsFileValid(true);
//       setUploadedFiles((prevFiles) => [...prevFiles, file]);
//       toast.info(`"${file.name}" is ready for conversion.`);
//       setErrorMessage(null);
//     } else {
//       setIsFileValid(false);
//       setUploadedFiles([]);
//       setErrorMessage('Invalid file type. Please upload only .docx or .doc files.');
//       toast.error('Invalid file type. Please upload only .docx or .doc files.');
//       setTimeout(() => setErrorMessage(null), 4000);  // Error message disappears after 4 seconds
//     }
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const files = Array.from(event.dataTransfer.files);
//     files.forEach((file) => handleFileValidation(file));
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   const handleFileSelect = (event) => {
//     const files = Array.from(event.target.files);
//     files.forEach((file) => handleFileValidation(file));
//   };

//   const handleConfirmation = () => {
//     uploadedFiles.forEach(uploadAndConvertFile);
//     navigate('/Processed');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4">
//       <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl p-8">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Word to PDF Converter</h1>
//         </div>
//         <p className="text-center text-gray-700 mb-6">
//           Drag and drop Microsoft Word documents (DOCX or DOC) to convert them to PDF.
//         </p>

//         <div
//           className="border-dashed border-4 border-blue-400 rounded-lg p-10 text-center mb-6 bg-blue-50"
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//         >
//           {uploadedFiles.length > 0 ? (
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               {uploadedFiles.map((file, index) => (
//                 <div key={index} className="flex flex-col items-center bg-blue-100 border border-blue-300 rounded-lg p-4">
//                   <img
//                     src={wordicon}
//                     alt="word doc icon"
//                     className="h-12 w-12 mb-2"
//                   />
//                   <p className="text-gray-600 font-medium">{file.name}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <><svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-20 w-20 mx-auto text-blue-500 mb-4 animate-bounce"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 4v16m8-8H4"
//             />
//           </svg>
//               <p className="text-gray-600 font-medium">Drag and drop your files here</p>
//             </>
          
//           )}
//         </div>

//         <input
//           type="file"
//           accept=".doc,.docx"
//           className="hidden"
//           id="fileInput"
//           onChange={handleFileSelect}
//           multiple // Allow multiple files selection
//         />
//         <label
//           htmlFor="fileInput"
//           className="bg-blue-600 flex justify-center text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full text-center cursor-pointer"
//         >
//           Select files
//         </label>

//         {errorMessage && <p className="text-center text-red-600 mt-4">{errorMessage}</p>}

//         {uploadedFiles.length > 0 && isFileValid && (
//           <div className="mt-6">
//             <div className="flex justify-between gap-4 w-full">
//               <button
//                 onClick={handleConfirmation}
//                 className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 w-full"
//               >
//                 Convert to PDF
//               </button>
//             </div>
//           </div>
//         )}

//         {conversionInProgress && <p className="text-center text-gray-700 mt-4">Converting your files...</p>}

//         <p className="text-xs text-gray-500 mt-6 text-center">
//           Your files will be securely handled by our servers and deleted unless saved.
//           <br />
//           By using this service, you agree to our Terms of Use and Privacy Policy.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default WordToPdf;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import wordicon from '../Image/word.png';

const WordToPdf = ({ setProcessedFiles }) => {
  const [loading, setLoading] = useState(false); // Spinner state
  const [isFileValid, setIsFileValid] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const uploadAndConvertFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/convert-to-pdf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const pdfURL = URL.createObjectURL(blob);
        const processedFile = { name: file.name, downloadLink: pdfURL };

        setProcessedFiles((prevFiles) => [...prevFiles, processedFile]);
        toast.success(`"${file.name}" converted to PDF successfully!`);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to convert the file.');
      }
    } catch (error) {
      toast.error('An error occurred during file conversion.');
      console.log(error);
    }
  };

  const handleConfirmation = async () => {
    setLoading(true); // Show spinner

    // Wait for both 30 seconds AND the file processing to finish
    const minimumSpinnerTime = new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
    const fileProcessing = Promise.all(uploadedFiles.map(uploadAndConvertFile));

    await Promise.all([minimumSpinnerTime, fileProcessing]); // Ensure both are done
    setLoading(false); // Stop spinner
    navigate('/Processed'); // Navigate after processing
  };

  const handleFileValidation = (file) => {
    const validFileTypes = [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
      'application/msword', // .doc
    ];

    if (validFileTypes.includes(file.type)) {
      setIsFileValid(true);
      setUploadedFiles((prevFiles) => [...prevFiles, file]);
      toast.info(`"${file.name}" is ready for conversion.`);
      setErrorMessage(null);
    } else {
      setIsFileValid(false);
      setUploadedFiles([]);
      setErrorMessage('Invalid file type. Please upload only .docx or .doc files.');
      toast.error('Invalid file type. Please upload only .docx or .doc files.');
      setTimeout(() => setErrorMessage(null), 4000);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    files.forEach((file) => handleFileValidation(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => handleFileValidation(file));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {loading ? (
        // Spinner displayed while loading
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 mb-4"></div>
          <p className="text-gray-600 font-medium">Processing your files... Please wait.</p>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Word to PDF Converter</h1>
          </div>
          <p className="text-center text-gray-700 mb-6">
            Drag and drop Microsoft Word documents (DOCX or DOC) to convert them to PDF.
          </p>

          <div
            className="border-dashed border-4 border-blue-400 rounded-lg p-10 text-center mb-6 bg-blue-50"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {uploadedFiles.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 mb-4">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-blue-100 border border-blue-300 rounded-lg p-4"
                  >
                    <img src={wordicon} alt="word doc icon" className="h-12 w-12 mb-2" />
                    <p className="text-gray-600 font-medium">{file.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 mx-auto text-blue-500 mb-4 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <p className="text-gray-600 font-medium">Drag and drop your files here</p>
              </>
            )}
          </div>

          <input
            type="file"
            accept=".doc,.docx"
            className="hidden"
            id="fileInput"
            onChange={handleFileSelect}
            multiple
          />
          <label
            htmlFor="fileInput"
            className="bg-blue-600 flex justify-center text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full text-center cursor-pointer"
          >
            Select files
          </label>

          {errorMessage && <p className="text-center text-red-600 mt-4">{errorMessage}</p>}

          {uploadedFiles.length > 0 && isFileValid && (
            <div className="mt-6">
              <div className="flex justify-between gap-4 w-full">
                <button
                  onClick={handleConfirmation}
                  className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 w-full"
                >
                  Convert to PDF
                </button>
              </div>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-6 text-center">
            Your files will be securely handled by our servers and deleted unless saved.
            <br />
            By using this service, you agree to our Terms of Use and Privacy Policy.
          </p>
        </div>
      )}
    </div>
  );
};

export default WordToPdf;
