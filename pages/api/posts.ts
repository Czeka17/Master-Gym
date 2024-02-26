import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const postId = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
    const client = await connectToDatabase();

    const db = client.db();

    try {
        const posts = await db.collection('posts').find({}).toArray();
        res.status(200).json({ posts });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } finally {
      client.close();
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
