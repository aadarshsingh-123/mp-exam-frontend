const fs = require('fs');
function appendToFile(filepath, questions) {
    let content = fs.readFileSync(filepath, 'utf8');
    content = content.replace(/\];\s*$/, '');
    content = content.trimEnd();
    if (!content.endsWith(',')) content += ',';
    content += '\n';
    for (const q of questions) { content += JSON.stringify(q) + ',\n'; }
    content += '];\n';
    fs.writeFileSync(filepath, content, 'utf8');
}
function Q(q, a, b, c, d, i, e, y) { return [q, a, b, c, d, i, e, y, q.substring(0, 80)]; }

// SCIENCE - 40
appendToFile('questions/science_tech.js', [
    Q("Supernova क्या है?", "तारे का विस्फोट", "ग्रह का जन्म", "चंद्रमा", "उपग्रह", 0, "SSC CGL", "2025"),
    Q("Red Giant Star क्या है?", "तारे का विस्तारित अवस्था", "छोटा तारा", "ग्रह", "उपग्रह", 0, "MPPSC Pre", "2025"),
    Q("White Dwarf Star क्या है?", "मृत तारे का अवशेष", "जीवित तारा", "ग्रह", "उपग्रह", 0, "SSC CGL", "2025"),
    Q("Pulsar क्या है?", "तेजी से घूमता Neutron Star", "ग्रह", "उपग्रह", "धूमकेतु", 0, "MPPSC Pre", "2025"),
    Q("Quasar क्या है?", "अत्यंत दूर का चमकीला Galaxy Core", "ग्रह", "तारा", "उपग्रह", 0, "SSC CGL", "2025"),
    Q("Dark Matter क्या है?", "अदृश्य पदार्थ जो Gravity से प्रभावित करता है", "Normal Matter", "Light", "Energy", 0, "MPPSC Pre", "2025"),
    Q("Dark Energy क्या है?", "ब्रह्मांड के विस्तार को तेज करने वाली ऊर्जा", "Normal Energy", "Light", "Sound", 0, "SSC CGL", "2025"),
    Q("Exoplanet क्या है?", "Other Star System का Planet", "Solar System का Planet", "Moon", "Star", 0, "MPPSC Pre", "2025"),
    Q("James Webb Space Telescope कब Launch हुआ?", "25 दिसंबर 2021", "1 जनवरी 2022", "25 दिसंबर 2020", "1 जनवरी 2021", 0, "SSC CGL", "2025"),
    Q("JWST किसकी Replacement है?", "Hubble Space Telescope", "Chandra", "Spitzer", "Kepler", 0, "MPPSC Pre", "2025"),
    Q("SpaceX Starship क्या है?", "दुनिया का सबसे बड़ा Rocket", "छोटा Rocket", "Satellite", "Drone", 0, "SSC CGL", "2025"),
    Q("Artemis Program किसका है?", "NASA (Moon Mission)", "ISRO", "ESA", "CNSA", 0, "MPPSC Pre", "2025"),
    Q("Artemis Program का उद्देश्य?", "चंद्रमा पर मानव वापसी", "Mars", "Jupiter", "Venus", 0, "SSC CGL", "2025"),
    Q("Mars Perseverance Rover किसका है?", "NASA", "ISRO", "ESA", "CNSA", 0, "MPPSC Pre", "2025"),
    Q("Ingenuity Helicopter कहाँ उड़ा?", "Mars", "Moon", "Venus", "Jupiter", 0, "SSC CGL", "2025"),
    Q("Parker Solar Probe किसका है?", "NASA", "ISRO", "ESA", "CNSA", 0, "MPPSC Pre", "2025"),
    Q("CRISPR-Cas9 क्या है?", "Gene Editing Technology", "Normal Medicine", "Surgery", "Therapy", 0, "SSC CGL", "2025"),
    Q("mRNA Vaccine Technology क्या है?", "Genetic Instruction Based Vaccine", "Normal Vaccine", "Dead Virus", "Weak Virus", 0, "MPPSC Pre", "2025"),
    Q("Brain-Computer Interface (BCI) क्या है?", "Brain Signal से Computer Control", "Normal Mouse", "Keyboard", "Touch Screen", 0, "SSC CGL", "2025"),
    Q("Neuralink किसकी Company है?", "Elon Musk", "Bill Gates", "Jeff Bezos", "Mark Zuckerberg", 0, "MPPSC Pre", "2025")
]);

// MIXED - 40
appendToFile('questions/mixed_gk.js', [
    Q("Stand Up India Scheme किसके लिए है?", "SC/ST और Women Entrepreneurs", "All Citizens", "Only Men", "Only Farmers", 0, "MPPSC Pre", "2025"),
    Q("Mudra Yojana कब शुरू हुई?", "8 अप्रैल 2015", "15 अगस्त 2015", "26 जनवरी 2015", "1 जुलाई 2015", 0, "SSC CGL", "2025"),
    Q("Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)?", "Free Ration Scheme", "Education", "Health", "Transport", 0, "MPPSC Pre", "2025"),
    Q("One Nation One Fertilizer कब शुरू हुआ?", "2022", "2021", "2023", "2020", 0, "SSC CGL", "2025"),
    Q("Namami Gange Programme किससे संबंधित है?", "Ganga River Cleaning", "Yamuna", "Narmada", "Godavari", 0, "MPPSC Pre", "2025"),
    Q("Jal Jeevan Mission का Target?", "हर घर नल से जल 2024 तक", "Free Water", "Water Tax", "Water Export", 0, "SSC CGL", "2025"),
    Q("Amrit Sarovar Mission क्या है?", "75 Amrit Sarovar प्रत्येक जिले में", "Pool Building", "Dam Construction", "Bridge Building", 0, "MPPSC Pre", "2025"),
    Q("PM Gatishakti Master Plan किससे संबंधित है?", "Infrastructure Planning", "Education", "Health", "Agriculture", 0, "SSC CGL", "2025"),
    Q("National Education Policy 2020 में Mother Tongue शिक्षा?", "Class 5 तक", "Class 8", "Class 10", "Class 12", 0, "MPPSC Pre", "2025"),
    Q("Academic Bank of Credits (ABC) क्या है?", "Students के Credits का Digital Bank", "Normal Bank", "Real Bank", "Insurance", 0, "SSC CGL", "2025"),
    Q("DIKSHA Platform क्या है?", "National Digital Education Platform", "Social Media", "Gaming", "Shopping", 0, "MPPSC Pre", "2025"),
    Q("SWAYAM Portal क्या है?", "Free Online Courses Platform", "Shopping", "Gaming", "Banking", 0, "SSC CGL", "2025"),
    Q("UPI में कितने Transaction Daily होते हैं (2024)?", "50 Crore+", "10 Crore", "20 Crore", "1 Crore", 0, "MPPSC Pre", "2025"),
    Q("India Digital Payment Market 2024?", "$3 Trillion+", "$1 Trillion", "$2 Trillion", "$5 Trillion", 0, "SSC CGL", "2025"),
    Q("PM eVIDYA क्या है?", "Online Education Initiative", "E-commerce", "Banking", "Insurance", 0, "MPPSC Pre", "2025"),
    Q("Aarogya Setu App किससे संबंधित है?", "COVID-19 Contact Tracing", "Gaming", "Shopping", "Banking", 0, "SSC CGL", "2025"),
    Q("CoWIN Portal किससे संबंधित है?", "COVID-19 Vaccination Registration", "Education", "Banking", "Insurance", 0, "MPPSC Pre", "2025"),
    Q("Digital Health ID (ABHA) क्या है?", "Ayushman Bharat Health Account", "Bank ID", "PAN", "Aadhaar", 0, "SSC CGL", "2025"),
    Q("National Digital Health Mission कब शुरू हुआ?", "15 अगस्त 2020", "26 जनवरी 2020", "1 जनवरी 2021", "2 अक्टूबर 2020", 0, "MPPSC Pre", "2025"),
    Q("Gati Shakti University कहाँ है?", "Vadodara", "Delhi", "Mumbai", "Kolkata", 0, "SSC CGL", "2025")
]);

// COMPUTER - 20
appendToFile('questions/computer_gk.js', [
    Q("MS Word में Spelling Check कैसे करते हैं?", "F7 Key", "F5", "F1", "F2", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में Cell Reference कितने प्रकार के होते हैं?", "3 (Relative, Absolute, Mixed)", "2", "4", "1", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में Relative Reference क्या है?", "Copy करने पर Change होता है", "Fixed रहता है", "Delete होता है", "Print होता है", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में Absolute Reference Symbol?", "$ (Dollar Sign)", "# Hash", "@ At", "% Percent", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में Freeze Panes कहाँ मिलता है?", "View Tab", "Home Tab", "Insert Tab", "Data Tab", 0, "MP ASI Computer", "2025"),
    Q("LibreOffice Calc क्या है?", "Free Spreadsheet Software", "Paid Software", "Game", "Browser", 0, "SSC CGL", "2025"),
    Q("LibreOffice Writer क्या है?", "Free Word Processor", "Paid Software", "Game", "Browser", 0, "MPPSC Pre", "2025"),
    Q("LibreOffice Impress क्या है?", "Free Presentation Software", "Paid Software", "Game", "Browser", 0, "SSC CGL", "2025"),
    Q("Open Source Software License कौन सी है?", "GPL (GNU General Public License)", "Windows License", "Apple License", "Adobe License", 0, "MPPSC Pre", "2025"),
    Q("Creative Commons License क्या है?", "Free Content Sharing License", "Paid License", "Software License", "Hardware License", 0, "SSC CGL", "2025"),
    Q("IT Act 2000 India में कब लागू हुआ?", "17 अक्टूबर 2000", "1 जनवरी 2000", "15 अगस्त 2000", "26 जनवरी 2001", 0, "MPPSC Pre", "2025"),
    Q("Section 66A IT Act क्या था?", "Online Offensive Message की सजा (बाद में रद्द)", "Normal Law", "Tax Law", "Labour Law", 0, "SSC CGL", "2025"),
    Q("DigiLocker क्या है?", "Digital Document Storage to store Certificates", "Gaming Platform", "Social Media", "Shopping", 0, "MPPSC Pre", "2025"),
    Q("UMANG App क्या है?", "Government Services Mobile App", "Game", "Shopping", "Social Media", 0, "SSC CGL", "2025"),
    Q("MyGov Platform क्या है?", "Citizen Engagement Platform", "E-commerce", "Gaming", "Banking", 0, "MPPSC Pre", "2025"),
    Q("GeM Portal क्या है?", "Government E-Marketplace", "Private Shopping", "Social Media", "Gaming", 0, "SSC CGL", "2025"),
    Q("E-Sign क्या है?", "Aadhaar Based Electronic Signature", "Normal Signature", "Stamp", "Seal", 0, "MPPSC Pre", "2025"),
    Q("India Stack क्या है?", "Digital Infrastructure (Aadhaar, UPI, DigiLocker)", "Physical Stack", "Building", "Tower", 0, "SSC CGL", "2025"),
    Q("Open API क्या है?", "Publicly Available API", "Private API", "Internal API", "Secret API", 0, "MPPSC Pre", "2025"),
    Q("Webhook क्या है?", "Event-triggered HTTP Callback", "Normal Call", "Email", "Message", 0, "SSC CGL", "2025")
]);

// MP GK - 20
appendToFile('questions/mp_gk.js', [
    Q("MP में कौन सी जनजाति PVTG (विशेष रूप से कमजोर) है?", "भारिया, सहरिया, बैगा", "भील", "गोंड", "कोर्कू", 0, "MPPSC Pre", "2025"),
    Q("MP में PVTG जनजातियां कितनी हैं?", "3", "2", "4", "5", 0, "MPPSC Pre", "2025"),
    Q("MP में जनजातीय कार्य विभाग कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP ASI", "2025"),
    Q("MP Tribal Research and Development Institute कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("MP में Eklavya Model Residential Schools कितने हैं?", "40+", "20", "30", "50", 0, "MPPSC Pre", "2025"),
    Q("MP FM Radio Station सबसे पहले कहाँ शुरू हुआ?", "इंदौर", "भोपाल", "जबलपुर", "ग्वालियर", 0, "MP Constable", "2025"),
    Q("MP में Doordarshan Kendra कहाँ-कहाँ है?", "भोपाल, इंदौर", "केवल भोपाल", "केवल इंदौर", "केवल जबलपुर", 0, "MPPSC Pre", "2025"),
    Q("MP Press Academy कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP ASI", "2025"),
    Q("MP Film Development Corporation कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("MP Tourism Development Corporation कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("MP Rajya Shaheed Smarak कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP Constable", "2025"),
    Q("MP Habitat Centre कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("Bharat Bhavan कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("Bharat Bhavan किसने Design किया?", "Charles Correa", "Le Corbusier", "B.V. Doshi", "Raj Rewal", 0, "MPPSC Pre", "2025"),
    Q("MP में Kanha Tiger Reserve में कौन से Animals मिलते हैं?", "Tiger, Barasingha, Leopard", "Only Tiger", "Only Elephant", "Only Lion", 0, "MPPSC Pre", "2025"),
    Q("Barasingha (Hard Ground) कहाँ पाया जाता है?", "Kanha (MP)", "Kaziranga", "Sundarbans", "Gir", 0, "MPPSC Pre", "2025"),
    Q("MP State Animal क्या है?", "Barasingha", "Tiger", "Lion", "Elephant", 0, "MPPSC Pre", "2025"),
    Q("MP State Bird क्या है?", "Dudhraj (Paradise Flycatcher)", "Peacock", "Sparrow", "Pigeon", 0, "MPPSC Pre", "2025"),
    Q("MP State Tree क्या है?", "Bargad (Banyan)", "Neem", "Ashoka", "Peepal", 0, "MPPSC Pre", "2025"),
    Q("MP State Flower क्या है?", "White Lily (Safed Lily)", "Rose", "Lotus", "Marigold", 0, "MPPSC Pre", "2025")
]);

// FINAL COUNT
const files = ['mp_gk.js', 'history_polity.js', 'geo_eco_current.js', 'science_tech.js', 'mixed_gk.js', 'computer_gk.js'];
let total = 0;
for (const f of files) {
    const c = fs.readFileSync('questions/' + f, 'utf8');
    const lines = c.split('\n').filter(l => l.trim().startsWith('['));
    console.log(f + ': ' + lines.length);
    total += lines.length;
}
console.log('============================');
console.log('*** GRAND TOTAL: ' + total + ' ***');
console.log('============================');
