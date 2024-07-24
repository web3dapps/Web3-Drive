

import fs from 'fs';
import path from 'path';

const handler = (req, res) => {
  if (req.method === 'DELETE') {
    const { filename } = req.query;
    const filePath = path.join(process.cwd(), 'uploads', filename);

    fs.unlink(filePath, (err) => {
      if (err) {
        res.status(500).json({ error: 'Delete failed' });
        return;
      }
      res.status(200).json({ message: 'File deleted' });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
