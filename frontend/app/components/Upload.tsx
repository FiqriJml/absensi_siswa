'use client'
import Isiswa from "@/types/Siswa";
import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const onFormSubmit = (event: any) => {
    event.preventDefault();

    if (file === null) {
        console.error("Pilih berkas terlebih dahulu.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("berhasil di unggah")
        console.log(data);
        // Handle the data from the Excel file as needed, e.g., save it to state.
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} encType="multipart/form-data">
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
