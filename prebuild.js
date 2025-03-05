const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const path = require('path');

async function downloadData() {
  // Configure your GCS client; credentials can be provided via environment variables
  const storage = new Storage({
    projectId: import.meta.env.VITE_GCLOUD_PROJECT,
    keyFilename: import.meta.env.VITE_GCLOUD_KEYFILE,
  });
  const bucketName = import.meta.env.VITE_GCLOUD_BUCKET;
  const srcFilename = 'article_data.json';
  const destPath = path.join(__dirname, 'data', 'content.json');

  await storage.bucket(bucketName).file(srcFilename).download({ destination: destPath });
  console.log(`Downloaded ${srcFilename} to ${destPath}.`);
}

downloadData().catch(err => {
  console.error('Error downloading data:', err);
  process.exit(1);
});