document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById("downloadButton");

  downloadButton.addEventListener("click", function() {
      const cvPath = "SURAT_JADWAL_PENERIMAAN_CALON_ANGGOTA_POLRI_T.A._2023.pdf";

      const link = document.createElement("a");
      link.href = cvPath;
      link.download = "SURAT_JADWAL_PENERIMAAN_CALON_ANGGOTA_POLRI_T.A._2023.pdf";
      

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});