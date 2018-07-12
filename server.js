const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path');
app.set('view engine', 'pug');
app.use(express.static('static'));

app.get('/', (req, res) => {
  let aatroxFolder = path.join(__dirname, 'static/sounds/aatrox');
  let karmaFolder = path.join(__dirname, 'static/sounds/karma');
  let aatroxFiles, karmaFiles;

  aatroxFiles = fs.readdirSync(aatroxFolder).filter(file => {
    if (file[0] != '.') {
      return file;
    }
  })

  karmaFiles = fs.readdirSync(karmaFolder).filter(file => {
    if (file[0] != '.') {
      return file;
    }
  })

  res.render('index', { title: 'Hey', aatroxFiles, karmaFiles });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
