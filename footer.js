// footer.js
fetch('AnalysisCafe/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('خطا در بارگذاری فوتر');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => {
    console.error('مشکل در بارگذاری فوتر:', error);
  });
