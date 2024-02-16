const downloadItem = async (filename) => {
  const response = await fetch(`/api/download/${filename}`);
  const data = await response.json();

  if (data.downloadUrl) {
    window.open(data.downloadUrl, '_blank');
  }
};

export default downloadItem;
