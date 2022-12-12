const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) throw err

  const db = client.db('animals')

    db.collection('mammals').insertOne({
        name: "HORSE"
    }, (err, result) => {
        if (err) {
            return err;
        }

        console.log("INSERTED");
    });
})





// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/animals');
// mongoose
//     .connection
//     .once('open', () => console.log('CONNECTED'))
//     .on('error', (err) => {
//         console.log('could not connect', err);
//     });
