<template>
    <div class="pdf-container">
        <iframe
        :src="pdfSrc"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </template>
  
  <script setup>
  const pdfSrc = "/pdfs/CV_Simone_Letizi.pdf" // metti il tuo PDF nella cartella 'public/pdfs'
  </script>
  
  <style scoped>
  .pdf-container {
    width: 100%;
    height: 100vh;
  }
  </style>
  