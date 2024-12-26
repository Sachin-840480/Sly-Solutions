import Navbar from './Components/Navbar/Navbar';
import WordToPdf from './Components/WordToPdf/WordToPdf';
import Processed from './Components/Processed/Processed';
import Footer from './Components/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [processedFiles, setProcessedFiles] = useState([]);

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<WordToPdf setProcessedFiles={setProcessedFiles} />} />
        <Route path="/Processed" element={<Processed processedFiles={processedFiles} />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App