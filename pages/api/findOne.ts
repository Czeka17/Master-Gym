import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/db';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id } = req.body;
      const client = await connectToDatabase();
      const db = client.db();

      const postid = new ObjectId(id);
      const post = await db.collection('posts').findOne({ _id: postid });

      if (post) {
        return res.status(200).json({ post });
      } else {
        return res.status(404).json({ message: `Post not found for ID: ${id}` });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
