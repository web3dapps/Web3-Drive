
"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Fastcoin = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);

    try {
      const response = await axios.post('https://ipfs.infura.io:5001/api/v0/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const hash = response.data.Hash;
      const fileUrl = `https://ipfs.infura.io/ipfs/${hash}`;
      setFiles([...files, fileUrl]);
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = (fileUrl) => {
    setFiles(files.filter((file) => file !== fileUrl));
  };

  return (
    <div className="container">
      <header>
        <h1>Fastcoin</h1>
      </header>
      <main>
        <div className="upload-section">
          <input type="file" id="fileInput" onChange={handleUpload} disabled={uploading} />
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <a href={file} target="_blank" rel="noopener noreferrer">{file}</a>
              <button onClick={() => handleDelete(file)}>Delete</button>
            </div>
          ))}
        </div>
      </main>
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background: #f0f2f5;
          height: 100vh;
        }
        header {
          margin-bottom: 20px;
        }
        .upload-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .file-list {
          margin-top: 20px;
          width: 100%;
          max-width: 600px;
        }
        .file-item {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          border: 1px solid #ccc;
          background: #fff;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
        button:disabled {
          background-color: #ccc;
        }
        input[type="file"] {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Fastcoin;
