import express from 'express'
import cors from 'cors'
import fs from 'fs'
import puppeteer from 'puppeteer'
import process from 'process'

(async () => {
    const port = 3000;

    const stdinData = fs.readFileSync(0, 'utf-8');
    const resumeData = JSON.parse(stdinData);

    const app = express();
    app.use(cors());
    app.use("/", express.static('./frontend'))

    const server = app.listen(port, () => { });

    app.get('/print', async (req, res) => {
        res.send(resumeData);
        return;
    })

    const printPageUrl = 'http://localhost:3000';

    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    const printPage = await browser.newPage();
    try {
        await printPage.goto(printPageUrl, {waitUntil: 'networkidle2'});
        const pdfBuffer = await printPage.pdf();
        process.stdout.write(pdfBuffer);
    }
    catch {

    }
    server.close((err) => {
        console.log(err);
    });
    browser.close();
})();