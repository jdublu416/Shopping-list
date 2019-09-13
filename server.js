const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//db congfiguration
const db = require('./config/keys').mongoURI;
+//connect to db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//use routes
app.use('/api/items', items);

//serve static assest in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  //set the path
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
