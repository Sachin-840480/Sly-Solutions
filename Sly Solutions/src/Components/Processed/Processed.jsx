const Processed = ({ processedFiles }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Converted Files</h1>
        </div>
        
        {/* Grid Layout for Icons */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {processedFiles.map((file, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-blue-50 border border-blue-300 rounded-lg p-4"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF icon"
                className="h-16 w-16 mb-4"
              />
              <span className="text-gray-800 font-medium mb-4">{file.name}</span>
              <a
                href={file.downloadLink}
                download={`${file.name.split('.')[0]}.pdf`}
                className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
              >
                Download
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Thank you for using our service. Your files will be securely handled and deleted unless saved.
        </p>
      </div>
    </div>
  );
};

export default Processed;


