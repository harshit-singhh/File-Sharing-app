import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './services/api';
import './App.css';



function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  useEffect(() => {
    const  getImage = async() => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        // uploadFile function is an async function, therefore we'll have to use await in front of it.

        // and because we used await.. we'll have to make getImage function also async
        let response = await uploadFile(data);
        setResult(response.path);
      }
    }

    getImage();
  }, [file]);

  console.log(file);

 
  return (
    <div className="App">
      <img
        src="https://play-lh.googleusercontent.com/gxtp7ofr1koCgwjb-Dsyu-e_gxz_dZBIAbg5AMaqjwDf7NM17lWMI0zUnwlz03DMhx-u"
        alt="banner"
        // style={{ width: "30%", height: "auto" }}
      />
      <div className="wrapper">
        <h1>SWIFT SHARE</h1>
        <h4>Upload and share the download link</h4>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        ></input>

        <a href={result} target="_blank"> {result} </a>
      
      </div>
    </div>
  );
}

export default App;
