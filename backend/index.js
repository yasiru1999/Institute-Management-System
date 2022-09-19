const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
app.use('/noticeSessions', require('./routes/noticeSessionRoutes'));
app.use('/timetable', require('./routes/timetable'));
app.use('/pay', require('./routes/payment'));
app.use('/inquiry', require('./routes/inquiry'));
app.use('/module', require('./routes/moduleRoutes'));

// app.use('/api/timetables', require('./routes/timetables'));
// app.use('/api/product', require('./routes/product'));
// app.use('/api/delivery', require('./routes/delivery'));
// app.use('/api/payment', require('./routes/payment'));

// app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});
