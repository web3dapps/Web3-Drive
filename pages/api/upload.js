import axios from 'axios';
import FormData from 'form-data';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = new FormData();
    formData.append('file', req.files.file);

    try {
      const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: 'your_pinata_api_key',
          pinata_secret_api_key: 'your_pinata_secret_api_key',
        },
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
