import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://meetupUser:ZnocMwIbS6Q2IL6E@cluster0.shsop.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = meetupsCollection.insertOne(data);
    console.log(result);
  }
};

export default handler;
