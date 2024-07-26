import Grid from 'gridfs-stream';
import { connectToDatabase } from './mongodb';

let gfs;

export async function getGFS() {
  if (gfs) return gfs;

  const db = await connectToDatabase();
  gfs = Grid(db, require('mongodb').MongoClient);
  gfs.collection('uploads'); // Tạo collection cho GridFS
  return gfs;
}