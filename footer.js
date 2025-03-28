// footer.js
fetch('/SoftwareAnalysis/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => {
    console.error('خطا در بارگذاری فوتر:', error);
  });
