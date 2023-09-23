const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

////////cors()

app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));
////////port open
app.listen(port, () => {
  console.log(`Server Works !!! At port ${port}`);
});

/////get request handel here get url for one video
app.get("/download", (req, res) => {
  var URL = req.query.URL;

  ytdl
    .getInfo(URL)
    .then((info) => {
      const format = ytdl.filterFormats(info.formats, "audioonly");
      res.json(format[1].url);
    })
    .catch((err) => console.log(err));
});


app.get('/',async (req,res)=>{
  console.log(path.join(__dirname, '../build/', 'index.html'));
  res.sendFile(path.join(__dirname, '../build/', 'index.html'))
});