const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const multer = require('multer');

// Config multer as a middleware
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, next) {
        const ext = file.mimetype.split("/");
        next(null, `${file.fieldname}-${Date.now()}.${ext[1]}`);
    }
})
const upload = multer({storage}); // setup uploaded dir

// Setup view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

/**
 * `image` corresponds with input html input field name  
 */
app.post('/photos/upload', upload.single('image'), (req, res) => {
    res.sendFile(`${__dirname}/uploads/${req.file.filename}`);
});



app.listen(port, () => console.log(`Server is running on port ${port}`));