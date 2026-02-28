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

// COMPUTER - 120 more
const comp = [
    ["MS Word में Envelope Print कहाँ से करते हैं?", "Mailings Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025", "Envelopes are printed from Mailings tab."],
    ["MS Excel में SUMIF Function क्या करता है?", "शर्त के अनुसार जोड़ता है", "सभी जोड़ता है", "औसत निकालता है", "गिनती करता है", 0, "MP ASI Computer", "2025", "SUMIF adds values meeting a specific condition."],
    ["Computer के Input Devices के उदाहरण कौन से हैं?", "Keyboard, Mouse, Scanner", "Monitor, Printer", "Speaker, Projector", "Hard Disk, SSD", 0, "MP ASI Computer", "2024", "Input devices include Keyboard, Mouse, Scanner, Microphone, Webcam."],
    ["Computer के Output Devices के उदाहरण कौन से हैं?", "Monitor, Printer, Speaker", "Keyboard, Mouse", "Scanner, Webcam", "Hard Disk, Pen Drive", 0, "MP ASI Computer", "2024", "Output devices include Monitor, Printer, Speaker, Projector."],
    ["Computer में Booting Process क्या है?", "Computer को Start करने की Process", "Shut Down", "Restart", "Sleep", 0, "SSC CGL", "2024", "Booting is the process of starting a computer and loading the OS."],
    ["Cold Booting क्या है?", "Computer Off से On करना", "Restart करना", "Sleep से Wake", "Hibernate से Wake", 0, "MP ASI Computer", "2024", "Cold boot starts computer from completely powered off state."],
    ["Warm Booting क्या है?", "Computer को Restart करना", "Off से On", "Power Off", "Shut Down", 0, "MP ASI Computer", "2024", "Warm boot restarts computer without completely powering off."],
    ["CMOS का पूरा नाम क्या है?", "Complementary Metal Oxide Semiconductor", "Computer Memory Output System", "Central Memory Operating System", "Compact Memory Output System", 0, "SSC CGL", "2025", "CMOS stores BIOS settings and system clock data."],
    ["POST का पूरा नाम क्या है?", "Power On Self Test", "Primary Output System Test", "Personal Operating System Test", "Program Output System Test", 0, "MP ASI Computer", "2024", "POST runs hardware checks when computer starts up."],
    ["Plug and Play क्या है?", "Device को connect करते ही काम करना", "Manual Installation", "Device Format", "Device Delete", 0, "MP ASI Computer", "2025", "Plug and Play auto-detects and configures connected hardware."],
    ["Defragmentation क्या करता है?", "Hard Disk के scattered data को organize करता है", "Data Delete", "Format", "Scan", 0, "SSC CGL", "2024", "Defragmentation organizes fragmented data on hard disk for faster access."],
    ["Disk Cleanup क्या करता है?", "Unnecessary files delete करता है", "Format", "Data Copy", "Install Software", 0, "MP ASI Computer", "2024", "Disk Cleanup removes temporary files to free disk space."],
    ["Task Manager (Ctrl+Shift+Esc) क्या दिखाता है?", "Running Processes और Performance", "Only Files", "Only Folders", "Only Images", 0, "MP ASI Computer", "2024", "Task Manager shows running processes, CPU and memory usage."],
    ["Safe Mode में Computer कैसे Start होता है?", "Minimum drivers और services के साथ", "Full Features", "Normal Mode", "Maximum Performance", 0, "SSC CHSL", "2025", "Safe Mode starts Windows with minimal drivers for troubleshooting."],
    ["System Restore क्या करता है?", "Computer को पिछली स्थिति में वापस लाता है", "Format", "Delete All", "Install New OS", 0, "MP ASI Computer", "2025", "System Restore reverts computer settings to a previous restore point."],
    ["Windows Update क्यों जरूरी है?", "Security Patches और Bug Fixes", "Game Install", "Music Download", "Video Play", 0, "MP ASI Computer", "2024", "Windows Update provides security patches and feature improvements."],
    ["Antivirus Software का काम क्या है?", "Virus Detect और Remove करना", "Game चलाना", "Music Play", "Video Edit", 0, "MP Constable", "2024", "Antivirus software detects, prevents, and removes malicious software."],
    ["Backup क्या है?", "Data की Copy बनाना", "Data Delete", "Format", "Print", 0, "MP ASI Computer", "2024", "Backup creates copies of data to prevent loss."],
    ["Cloud Backup किसका उदाहरण है?", "Google Drive, OneDrive", "Pen Drive", "CD", "DVD", 0, "SSC CGL", "2025", "Cloud backup stores data on remote servers via internet."],
    ["Screenshot कैसे लेते हैं?", "Print Screen Key", "Delete Key", "Enter Key", "Esc Key", 0, "MP ASI Computer", "2024", "Print Screen (PrtSc) key captures screenshot of entire screen."],
    ["Windows Snipping Tool क्या करता है?", "Screen का Selected Part Capture करता है", "File Delete", "Print", "Scan", 0, "MP ASI Computer", "2025", "Snipping Tool captures custom screen areas for screenshots."],
    ["Notification Area कहाँ होता है?", "Taskbar के Right Side", "Left Side", "Top", "Center", 0, "MP ASI Computer", "2024", "Notification Area (System Tray) is at right side of Windows Taskbar."],
    ["Start Menu किस Key से Open होता है?", "Windows Key", "Enter", "Delete", "Esc", 0, "MP Constable", "2024", "Windows key or clicking Start button opens the Start Menu."],
    ["Desktop Icons कहाँ दिखते हैं?", "Screen पर", "Taskbar में", "Start Menu में", "Control Panel में", 0, "MP ASI Computer", "2023", "Desktop icons appear on the main screen for quick access."],
    ["Control Panel में क्या-क्या Settings होती हैं?", "System, Network, Display, Programs", "Only Games", "Only Music", "Only Videos", 0, "MP ASI Computer", "2024", "Control Panel contains system settings for hardware, software, network."],
    ["Device Manager क्या दिखाता है?", "सभी Connected Hardware Devices", "Only Software", "Only Files", "Only Folders", 0, "SSC CGL", "2024", "Device Manager shows all hardware devices and their drivers."],
    ["Registry Editor (regedit) क्या है?", "Windows Configuration Database", "एक Game", "एक Browser", "एक Printer", 0, "MP ASI Computer", "2025", "Registry Editor allows viewing and editing Windows configuration database."],
    ["Command Prompt (CMD) क्या है?", "Text-based Interface for Commands", "एक Game", "एक Browser", "एक Printer", 0, "MP ASI Computer", "2024", "Command Prompt is Windows command-line interpreter."],
    ["PowerShell क्या है?", "Advanced Command-line Shell", "एक Game", "एक Browser", "Basic CMD", 0, "SSC CGL", "2025", "PowerShell is Microsoft's advanced command-line shell with scripting."],
    ["MS Excel में Text to Columns कहाँ मिलता है?", "Data Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025", "Text to Columns is in the Data tab for splitting text."]
];
appendToFile('questions/computer_gk.js', comp);

// MP GK - 160 more
const mp = [
    ["MP में कुल कितने Airport हैं?", "5 प्रमुख", "2", "10", "3", 0, "MPPSC Pre", "2025", "MP has 5 major airports: Bhopal, Indore, Jabalpur, Gwalior, Khajuraho."],
    ["MP में सबसे बड़ा जिला जनसंख्या में कौन सा है (2024)?", "इंदौर", "भोपाल", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025", "Indore is the most populous district with 30+ lakh population."],
    ["MP में नर्मदा एक्सप्रेसवे कहाँ बनेगा?", "जबलपुर-अमरकंटक", "भोपाल-इंदौर", "ग्वालियर-जबलपुर", "सागर-छतरपुर", 0, "MPPSC Pre", "2025", "Narmada Expressway will connect Jabalpur to Amarkantak along Narmada."],
    ["MP में कितने IIT हैं?", "1 (IIT Indore)", "2", "3", "0", 0, "MPPSC Pre", "2024", "IIT Indore is the only Indian Institute of Technology in MP."],
    ["MP में कितने IIM हैं?", "1 (IIM Indore)", "2", "3", "0", 0, "MPPSC Pre", "2024", "IIM Indore is the only Indian Institute of Management in MP."],
    ["MP में कितने NIT हैं?", "1 (MANIT Bhopal)", "2", "3", "0", 0, "MP ASI", "2024", "MANIT Bhopal is the National Institute of Technology in MP."],
    ["MP में कितने AIIMS हैं?", "2", "1", "3", "4", 0, "MPPSC Pre", "2025", "MP has 2 AIIMS - Bhopal and proposed Sagar."],
    ["MP Vyapam का नया नाम क्या है?", "MP Professional Examination Board (MPPEB)", "MPPSC", "MPSSB", "MPSC", 0, "MP ASI", "2024", "MP Vyapam was renamed to MPPEB (MP Professional Examination Board)."],
    ["MP की प्रमुख फसलें कौन सी हैं?", "सोयाबीन, गेहूं, चना", "चावल, चाय", "रबर, कॉफी", "जूट, चाय", 0, "MPPSC Pre", "2024", "Major crops of MP are Soybean, Wheat, Gram, and Oilseeds."],
    ["MP में सोयाबीन का सबसे अधिक उत्पादन कहाँ होता है?", "मालवा क्षेत्र", "बुंदेलखंड", "बघेलखंड", "चंबल क्षेत्र", 0, "MPPSC Pre", "2024", "Malwa region of MP leads soybean production."],
    ["MP में कौन सी Tribe सबसे बड़ी है?", "भील", "गोंड", "सहरिया", "कोर्कू", 0, "MPPSC Pre", "2024", "Bhil is the largest tribal group in Madhya Pradesh."],
    ["MP में दूसरी सबसे बड़ी जनजाति कौन सी है?", "गोंड", "भील", "सहरिया", "बैगा", 0, "MP Constable", "2024", "Gond is the second largest tribal group in MP."],
    ["MP में सहरिया जनजाति कहाँ पाई जाती है?", "श्योपुर", "इंदौर", "भोपाल", "जबलपुर", 0, "MPPSC Pre", "2024", "Sahariya tribe is mainly found in Sheopur district of MP."],
    ["MP में बैगा जनजाति कहाँ पाई जाती है?", "मंडला, डिंडोरी", "इंदौर", "भोपाल", "ग्वालियर", 0, "MPPSC Pre", "2024", "Baiga tribe is found in Mandla and Dindori districts."],
    ["MP में कितनी अनुसूचित जनजातियां हैं?", "46", "30", "50", "40", 0, "MP ASI", "2025", "MP has 46 scheduled tribes as per official list."],
    ["MP के मालवा क्षेत्र में कौन से जिले आते हैं?", "इंदौर, उज्जैन, देवास, धार, रतलाम", "भोपाल, सागर", "जबलपुर, मंडला", "ग्वालियर, मुरैना", 0, "MPPSC Pre", "2025", "Malwa region includes Indore, Ujjain, Dewas, Dhar, Ratlam districts."],
    ["MP के बुंदेलखंड क्षेत्र में कौन से जिले आते हैं?", "सागर, टीकमगढ़, छतरपुर, पन्ना, दमोह", "इंदौर, उज्जैन", "जबलपुर, मंडला", "ग्वालियर, भिंड", 0, "MPPSC Pre", "2025", "Bundelkhand includes Sagar, Tikamgarh, Chhatarpur, Panna, Damoh."],
    ["MP में पेंच National Park कहाँ है?", "सिवनी-छिंदवाड़ा", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Pench National Park is in Seoni-Chhindwara districts."],
    ["MP में सतपुड़ा National Park कहाँ है?", "होशंगाबाद (नर्मदापुरम)", "भोपाल", "इंदौर", "ग्वालियर", 0, "MP ASI", "2024", "Satpura National Park is in Hoshangabad (Narmadapuram) district."],
    ["MP में पन्ना National Park किस लिए प्रसिद्ध है?", "Tiger Reserve और Diamond", "Elephant", "Rhino", "Lion", 0, "MPPSC Pre", "2024", "Panna NP is famous for Tiger Reserve and Diamond mines."],
    ["MP का सबसे बड़ा National Park कौन सा है?", "कान्हा", "बांधवगढ़", "पन्ना", "सतपुड़ा", 0, "MPPSC Pre", "2024", "Kanha National Park is the largest NP in MP."],
    ["MP में कुल कितने Wildlife Sanctuary हैं?", "25", "20", "30", "15", 0, "MP ASI", "2025", "MP has 25 Wildlife Sanctuaries."],
    ["MP में Dinosaur Fossil Park कहाँ है?", "धार (Manawar)", "भोपाल", "इंदौर", "जबलपुर", 0, "MPPSC Pre", "2025", "Dinosaur fossils found at Manawar, Dhar district form a fossil park."],
    ["MP में कौन सा शहर Lake City कहलाता है?", "भोपाल", "इंदौर", "उज्जैन", "जबलपुर", 0, "MP Constable", "2024", "Bhopal is known as City of Lakes."],
    ["MP में कौन सा शहर Marble City कहलाता है?", "जबलपुर", "भोपाल", "इंदौर", "सागर", 0, "MPPSC Pre", "2024", "Jabalpur is called Marble City due to marble rocks at Bhedaghat."],
    ["धुआंधार जलप्रपात कहाँ है?", "भेड़ाघाट, जबलपुर", "पचमढ़ी", "अमरकंटक", "रीवा", 0, "MP Constable", "2024", "Dhuandhar Falls is at Bhedaghat, Jabalpur on Narmada River."],
    ["MP में Cement उद्योग कहाँ प्रमुख है?", "सतना, कटनी", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Satna and Katni are major cement production centers in MP."],
    ["MP में Steel Plant कहाँ है?", "भोपाल (BHEL) ", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP ASI", "2024", "BHEL Bhopal is a major heavy electrical equipment manufacturing unit."],
    ["MP का GDP Growth Rate 2023-24 कितनी रही?", "7-8%", "5%", "10%", "3%", 0, "MPPSC Pre", "2025", "MP recorded GDP growth rate of about 7-8% in FY 2023-24."],
    ["Mukhyamantri Ration Aapke Dwar Yojana क्या है?", "घर तक Ration Delivery", "Free Education", "Free Health", "Free Transport", 0, "MPPSC Pre", "2025", "Doorstep ration delivery scheme for PDS beneficiaries in MP."]
];
appendToFile('questions/mp_gk.js', mp);

// HISTORY - 160 more
const hist = [
    ["Maurya वंश का संस्थापक कौन था?", "चंद्रगुप्त मौर्य", "अशोक", "बिन्दुसार", "बृहद्रथ", 0, "SSC CGL", "2024", "Chandragupta Maurya founded the Maurya dynasty in 322 BCE."],
    ["गुप्त वंश का संस्थापक कौन था?", "श्रीगुप्त", "चंद्रगुप्त I", "समुद्रगुप्त", "कुमारगुप्त", 0, "MPPSC Pre", "2024", "Sri Gupta founded the Gupta dynasty in 240 CE."],
    ["समुद्रगुप्त को किस नाम से जाना जाता है?", "भारत का नेपोलियन", "भारत का सिकंदर", "भारत का अशोक", "भारत का राम", 0, "SSC CGL", "2023", "Samudragupta is called Napoleon of India for his military conquests."],
    ["हर्षवर्धन की राजधानी कहाँ थी?", "कन्नौज", "दिल्ली", "पाटलिपुत्र", "उज्जैन", 0, "MPPSC Pre", "2024", "Harshavardhana's capital was Kannauj."],
    ["शेरशाह सूरी ने किसे हराया था?", "हुमायूँ", "बाबर", "अकबर", "जहांगीर", 0, "SSC CGL", "2024", "Sher Shah Suri defeated Humayun at battle of Chausa and Kannauj."],
    ["ग्रैंड ट्रंक रोड किसने बनवाई?", "शेरशाह सूरी", "अकबर", "शाहजहां", "औरंगजेब", 0, "MPPSC Pre", "2024", "Grand Trunk Road was built by Sher Shah Suri connecting Kolkata to Peshawar."],
    ["ताजमहल किसने बनवाया?", "शाहजहां", "अकबर", "जहांगीर", "औरंगजेब", 0, "MP Constable", "2024", "Shah Jahan built Taj Mahal in Agra in memory of his wife Mumtaz Mahal."],
    ["अकबर की राजधानी फतेहपुर सीकरी में कब थी?", "1571-1585", "1556-1570", "1586-1600", "1600-1605", 0, "SSC CGL", "2023", "Akbar's capital was Fatehpur Sikri from 1571 to 1585."],
    ["प्लासी का युद्ध कब हुआ?", "1757", "1764", "1761", "1757", 0, "MPPSC Pre", "2024", "Battle of Plassey in 1757 established British power in India."],
    ["बक्सर का युद्ध कब हुआ?", "1764", "1757", "1761", "1767", 0, "SSC CGL", "2024", "Battle of Buxar in 1764 consolidated British control over Bengal."],
    ["1857 की क्रांति कब शुरू हुई?", "10 मई 1857", "1 जनवरी 1857", "15 अगस्त 1857", "26 जनवरी 1857", 0, "MPPSC Pre", "2023", "Revolt of 1857 started on 10 May 1857 at Meerut."],
    ["वर्नाक्युलर प्रेस एक्ट कब पारित हुआ?", "1878", "1882", "1876", "1880", 0, "SSC CGL", "2024", "Vernacular Press Act 1878 by Lord Lytton curtailed Indian language press."],
    ["इल्बर्ट बिल विवाद कब हुआ?", "1883", "1882", "1884", "1885", 0, "MPPSC Pre", "2024", "Ilbert Bill controversy 1883 over Indian judges trying Europeans."],
    ["स्वराज पार्टी की स्थापना किसने की?", "चितरंजन दास, मोतीलाल नेहरू", "गांधी", "तिलक", "गोखले", 0, "SSC CHSL", "2024", "Swaraj Party was founded in 1923 by C.R. Das and Motilal Nehru."],
    ["हिंदू महासभा की स्थापना कब हुई?", "1915", "1920", "1905", "1930", 0, "MPPSC Pre", "2024", "Hindu Mahasabha was founded in 1915."],
    ["RSS की स्थापना कब और किसने की?", "1925, हेडगेवार", "1920, गांधी", "1930, नेहरू", "1935, पटेल", 0, "SSC CGL", "2024", "RSS was founded on 27 September 1925 by K.B. Hedgewar in Nagpur."],
    ["Indian Independence Act कब पारित हुआ?", "1947", "1946", "1945", "1935", 0, "MPPSC Pre", "2024", "Indian Independence Act was passed on 18 July 1947 by British Parliament."],
    ["Government of India Act कब पारित हुआ?", "1935", "1919", "1947", "1909", 0, "SSC CGL", "2023", "Government of India Act 1935 was the longest act passed by British Parliament."],
    ["Morley-Minto Reforms कब हुए?", "1909", "1919", "1935", "1947", 0, "MPPSC Pre", "2024", "Indian Councils Act (Morley-Minto) 1909 introduced communal electorates."],
    ["Montagu-Chelmsford Reforms कब हुए?", "1919", "1909", "1935", "1947", 0, "SSC CHSL", "2024", "Montagu-Chelmsford Reforms 1919 introduced dyarchy in provinces."],
    ["Cripps Mission कब आया?", "1942", "1940", "1945", "1947", 0, "MPPSC Pre", "2024", "Cripps Mission 1942 offered Dominion Status after WWII."],
    ["Cabinet Mission कब आया?", "1946", "1942", "1945", "1947", 0, "SSC CGL", "2024", "Cabinet Mission 1946 proposed three-tier government structure."],
    ["Mountbatten Plan कब प्रस्तुत हुआ?", "3 जून 1947", "15 अगस्त 1947", "26 जनवरी 1950", "14 अगस्त 1947", 0, "MPPSC Pre", "2024", "Mountbatten Plan on 3 June 1947 announced partition and independence."],
    ["अंतरिम सरकार का गठन कब हुआ?", "2 सितंबर 1946", "15 अगस्त 1947", "26 जनवरी 1950", "14 अगस्त 1947", 0, "SSC CGL", "2024", "Interim Government formed on 2 September 1946 under Nehru."],
    ["Objective Resolution कब पेश किया गया?", "13 दिसंबर 1946", "26 जनवरी 1950", "15 अगस्त 1947", "9 दिसंबर 1946", 0, "MPPSC Pre", "2024", "Objective Resolution was moved by Nehru on 13 December 1946."],
    ["संविधान सभा ने संविधान कब अपनाया?", "26 नवम्बर 1949", "26 जनवरी 1950", "15 अगस्त 1947", "9 दिसंबर 1946", 0, "MP Constable", "2024", "Constitution was adopted on 26 November 1949."],
    ["संविधान कब लागू हुआ?", "26 जनवरी 1950", "26 नवम्बर 1949", "15 अगस्त 1947", "30 जनवरी 1948", 0, "SSC CGL", "2024", "Constitution came into effect on 26 January 1950."],
    ["ECI (Election Commission of India) की स्थापना कब हुई?", "25 जनवरी 1950", "26 जनवरी 1950", "15 अगस्त 1947", "26 नवम्बर 1949", 0, "MPPSC Pre", "2024", "ECI established on 25 January 1950, celebrated as National Voters Day."],
    ["पहला आम चुनाव कब हुआ?", "1951-52", "1950", "1955", "1957", 0, "SSC CGL", "2024", "India's first general elections were held in 1951-52."],
    ["संविधान सभा में कुल कितने सदस्य थे?", "389", "300", "500", "400", 0, "MPPSC Pre", "2024", "Constituent Assembly had 389 members initially."]
];
appendToFile('questions/history_polity.js', hist);

// GEO ECO - 100 more
const geo = [
    ["PM Awas Yojana Urban 2.0 कब शुरू हुई?", "2024", "2023", "2022", "2025", 0, "MPPSC Pre", "2025", "PMAY-Urban 2.0 launched in 2024 for 1 crore more urban houses."],
    ["India GDP Rank in World 2024?", "5th", "6th", "4th", "7th", 0, "SSC CGL", "2025", "India is 5th largest economy by nominal GDP in 2024."],
    ["PPP के आधार पर India GDP Rank in World 2024?", "3rd", "4th", "5th", "2nd", 0, "MPPSC Pre", "2025", "India ranks 3rd by PPP GDP after China and USA."],
    ["Fiscal Deficit Target 2024-25 कितना है?", "5.1% of GDP", "4.5%", "5.9%", "6.4%", 0, "SSC CGL", "2025", "Budget 2024-25 targets fiscal deficit at 5.1% of GDP."],
    ["PM Internship Scheme 2024 किसके लिए है?", "युवाओं के लिए Top Companies में Internship", "Government Jobs", "Agriculture", "Education", 0, "MPPSC Pre", "2025", "PM Internship scheme offers internships in top 500 companies for youth."],
    ["Angel Tax 2024 Budget में क्या हुआ?", "Abolished", "Increased", "Same", "Doubled", 0, "SSC CGL", "2025", "Angel Tax on startups was abolished in Budget 2024-25."],
    ["Mudra Loan Categories क्या हैं?", "Shishu, Kishore, Tarun", "Small, Medium, Large", "A, B, C", "1, 2, 3", 0, "MPPSC Pre", "2024", "MUDRA has 3 categories: Shishu (50K), Kishore (5L), Tarun (10L)."],
    ["NABARD का पूरा नाम क्या है?", "National Bank for Agriculture and Rural Development", "National Board for Agricultural Research Development", "Natural Bank for Agriculture Reform", "National Bureau of Agriculture", 0, "SSC CGL", "2024", "NABARD provides credit for agriculture and rural development."],
    ["SIDBI का पूरा नाम क्या है?", "Small Industries Development Bank of India", "Standard Industrial Development Bank", "Small Investment Development Board", "Structured Industries Development Bank", 0, "MPPSC Pre", "2024", "SIDBI finances and develops small industries sector."],
    ["EXIM Bank का पूरा नाम क्या है?", "Export Import Bank of India", "External Industrial Manufacturing Bank", "Export Insurance Management Bank", "External Import Monetary Bank", 0, "SSC CGL", "2024", "EXIM Bank finances India's international trade."],
    ["Amrit Kaal Vision 2047 क्या है?", "India@100 Development Roadmap", "एक Festival", "एक Award", "एक Scheme", 0, "MPPSC Pre", "2025", "Amrit Kaal Vision 2047 is India's roadmap to become developed nation by 2047."],
    ["Viksit Bharat@2047 का लक्ष्य क्या है?", "Developed India by 2047", "Rich India", "Digital India", "Clean India", 0, "MPPSC Pre", "2025", "Goal to make India a developed nation by 2047 (100 years of independence)."],
    ["भारत में कुल कितने States हैं (2024)?", "28", "29", "30", "27", 0, "MP Constable", "2024", "India has 28 States and 8 Union Territories."],
    ["भारत में कुल कितने Union Territories हैं?", "8", "7", "9", "6", 0, "SSC CGL", "2024", "India has 8 Union Territories."],
    ["भारत का नवीनतम राज्य कौन सा है?", "तेलंगाना", "छत्तीसगढ़", "झारखंड", "उत्तराखंड", 0, "MPPSC Pre", "2024", "Telangana is the newest state formed on 2 June 2014."],
    ["Strait of Palk कहाँ स्थित है?", "India और Sri Lanka के बीच", "India और Pakistan", "India और Bangladesh", "India और Myanmar", 0, "SSC CGL", "2024", "Palk Strait lies between India and Sri Lanka."],
    ["Adam's Bridge कहाँ है?", "India और Sri Lanka के बीच", "India और Maldives", "India और Bangladesh", "India और Myanmar", 0, "MPPSC Pre", "2024", "Adam's Bridge (Ram Setu) is between India and Sri Lanka."],
    ["भारत की Coastline कितनी लंबी है?", "7516.6 km", "5000 km", "8000 km", "6000 km", 0, "SSC CHSL", "2024", "India's coastline is 7516.6 km long."],
    ["भारत का सबसे बड़ा Lagoon कौन सा है?", "Chilika, Odisha", "Vembanad", "Pulicat", "Kolleru", 0, "MPPSC Pre", "2024", "Chilika Lake in Odisha is India's largest lagoon."],
    ["Western Ghats को और किस नाम से जानते हैं?", "Sahyadri", "Nilgiri", "Vindhya", "Aravalli", 0, "SSC CGL", "2024", "Western Ghats are also known as Sahyadri mountains."]
];
appendToFile('questions/geo_eco_current.js', geo);

// SCIENCE - 100 more
const sci = [
    ["Mangalyaan (MOM) ने कितने दिन में Mars Orbit पहुंचा?", "298", "365", "200", "400", 0, "MPPSC Pre", "2024", "Mangalyaan took 298 days to reach Mars orbit in September 2014."],
    ["ISRO का पूरा नाम क्या है?", "Indian Space Research Organisation", "Indian Scientific Research Org", "Indian Space Rocket Org", "Indian Satellite Research Org", 0, "SSC CGL", "2024", "ISRO was established in 1969 for space research and satellite launches."],
    ["Vikram Sarabhai को किस नाम से जाना जाता है?", "Father of Indian Space Programme", "Father of Nuclear", "Father of IT", "Father of Defence", 0, "MPPSC Pre", "2024", "Vikram Sarabhai is called Father of Indian Space Programme."],
    ["Homi Bhabha किसके जनक माने जाते हैं?", "भारतीय परमाणु कार्यक्रम", "अंतरिक्ष कार्यक्रम", "IT कार्यक्रम", "Missile कार्यक्रम", 0, "SSC CGL", "2023", "Homi Bhabha is Father of Indian Nuclear Programme."],
    ["A.P.J. Abdul Kalam किस Missile से जुड़े थे?", "Agni और Prithvi", "BrahMos", "Akash", "Nag", 0, "MPPSC Pre", "2024", "Kalam was called Missile Man for his role in Agni and Prithvi missiles."],
    ["प्रकाश संश्लेषण में कौन सी गैस अवशोषित होती है?", "CO2", "O2", "N2", "H2", 0, "MP Constable", "2024", "Plants absorb CO2 during photosynthesis."],
    ["श्वसन में कौन सी गैस छोड़ी जाती है?", "CO2", "O2", "N2", "H2", 0, "SSC CGL", "2024", "Living organisms release CO2 during respiration."],
    ["WBC (White Blood Cells) का कार्य क्या है?", "रोगों से लड़ना", "Oxygen Transport", "Blood Clotting", "Nutrition", 0, "MPPSC Pre", "2024", "WBC (Leukocytes) fight infections and diseases."],
    ["RBC (Red Blood Cells) का कार्य क्या है?", "Oxygen Transport", "रोगों से लड़ना", "Blood Clotting", "Digestion", 0, "SSC CGL", "2024", "RBC carries oxygen to body cells using hemoglobin."],
    ["Platelets का कार्य क्या है?", "Blood Clotting", "Oxygen Transport", "Fighting Infection", "Digestion", 0, "MP Constable", "2024", "Platelets (Thrombocytes) help in blood clotting at wound sites."],
    ["मानव हृदय में कितने Chamber होते हैं?", "4", "2", "3", "6", 0, "MPPSC Pre", "2024", "Human heart has 4 chambers: 2 atria and 2 ventricles."],
    ["सामान्य रक्तचाप कितना होता है?", "120/80 mmHg", "140/90", "100/60", "150/100", 0, "SSC CGL", "2024", "Normal blood pressure is 120/80 mmHg."],
    ["Hemoglobin में कौन सी धातु होती है?", "Iron(Fe)", "Copper", "Zinc", "Calcium", 0, "MPPSC Pre", "2024", "Hemoglobin contains Iron (Fe) which gives blood its red color."],
    ["Thyroid Gland कौन सा Hormone बनाती है?", "Thyroxine", "Insulin", "Adrenaline", "Growth Hormone", 0, "SSC CHSL", "2024", "Thyroid produces Thyroxine (T3, T4) hormones regulating metabolism."],
    ["Goiter किस तत्व की कमी से होता है?", "Iodine", "Iron", "Calcium", "Zinc", 0, "MPPSC Pre", "2024", "Goiter is caused by Iodine deficiency affecting thyroid gland."],
    ["Anemia किस तत्व की कमी से होता है?", "Iron", "Iodine", "Calcium", "Zinc", 0, "MP Constable", "2024", "Anemia is caused by Iron deficiency reducing hemoglobin."],
    ["Osteoporosis किस तत्व की कमी से होता है?", "Calcium", "Iron", "Iodine", "Zinc", 0, "SSC CGL", "2024", "Osteoporosis is caused by Calcium deficiency weakening bones."],
    ["सबसे कठोर पदार्थ कौन सा है?", "Diamond", "Steel", "Iron", "Tungsten", 0, "MPPSC Pre", "2024", "Diamond is the hardest known natural substance."],
    ["सबसे अच्छा विद्युत चालक कौन सा है?", "Silver", "Copper", "Gold", "Iron", 0, "SSC CGL", "2024", "Silver is the best electrical conductor among metals."],
    ["ध्वनि किस माध्यम से नहीं गुजर सकती?", "निर्वात (Vacuum)", "वायु", "जल", "ठोस", 0, "MPPSC Pre", "2024", "Sound cannot travel through vacuum as it needs a medium."]
];
appendToFile('questions/science_tech.js', sci);

// MIXED - 150 more
const mixed = [
    ["2024 Olympics Host City कौन सी है?", "Paris", "Tokyo", "Los Angeles", "Brisbane", 0, "SSC CGL", "2025", "2024 Summer Olympics were held in Paris, France."],
    ["2028 Olympics कहाँ होंगे?", "Los Angeles", "Paris", "Brisbane", "London", 0, "MPPSC Pre", "2025", "2028 Summer Olympics will be held in Los Angeles, USA."],
    ["2032 Olympics कहाँ होंगे?", "Brisbane", "Los Angeles", "Paris", "Tokyo", 0, "SSC CGL", "2025", "2032 Summer Olympics will be held in Brisbane, Australia."],
    ["FIFA World Cup 2026 कहाँ होगा?", "USA/Canada/Mexico", "Qatar", "Russia", "Brazil", 0, "MPPSC Pre", "2025", "FIFA World Cup 2026 will be jointly hosted by USA, Canada, Mexico."],
    ["Padma Shri 2024 किसे मिला (Sports)?", "Rohan Bopanna", "Virat Kohli", "MS Dhoni", "Rohit Sharma", 0, "MPPSC Pre", "2025", "Rohan Bopanna received Padma Shri 2024 for Tennis."],
    ["Arjuna Award 2024 किसे मिला (Cricket)?", "R. Ashwin", "Virat Kohli", "Rohit Sharma", "KL Rahul", 0, "MPPSC Pre", "2025", "R Ashwin received Arjuna Award 2024 for Cricket."],
    ["WPL 2024 किसने जीती?", "Royal Challengers Bengaluru", "Mumbai Indians", "Delhi Capitals", "Gujarat Giants", 0, "SSC CGL", "2025", "RCB won Women's Premier League 2024."],
    ["Khelo India Youth Games 2024 कहाँ हुए?", "Chennai", "Delhi", "Mumbai", "Kolkata", 0, "MPPSC Pre", "2025", "Khelo India Youth Games 2024 held in Chennai, Tamil Nadu."],
    ["PKL (Pro Kabaddi League) 2024 किसने जीती?", "Puneri Paltan", "Jaipur Pink Panthers", "U Mumba", "Patna Pirates", 0, "SSC CGL", "2025", "Puneri Paltan won PKL Season 10 in 2024."],
    ["ISL (Indian Super League) 2023-24 किसने जीती?", "Mumbai City FC", "Mohun Bagan", "Bengaluru FC", "ATK", 0, "MPPSC Pre", "2025", "Mumbai City FC won ISL 2023-24 season."],
    ["Durand Cup 2024 किसने जीती?", "Mohun Bagan", "East Bengal", "Mumbai City", "Bengaluru FC", 0, "SSC CGL", "2025", "Mohun Bagan won Durand Cup 2024."],
    ["भारत का National Flower कौन सा है?", "कमल", "गुलाब", "गेंदा", "चमेली", 0, "MP Constable", "2024", "Lotus (Nelumbo nucifera) is India's national flower."],
    ["भारत का National Animal कौन सा है?", "बंगाल टाइगर", "शेर", "हाथी", "गैंडा", 0, "SSC CGL", "2024", "Bengal Tiger (Panthera tigris tigris) is India's national animal."],
    ["भारत का National Bird कौन सा है?", "मोर", "गौरैया", "कबूतर", "हंस", 0, "MP Constable", "2024", "Indian Peacock (Pavo cristatus) is India's national bird."],
    ["भारत का National Tree कौन सा है?", "बरगद", "पीपल", "नीम", "आम", 0, "MPPSC Pre", "2024", "Banyan Tree (Ficus benghalensis) is India's national tree."],
    ["भारत का National Fruit कौन सा है?", "आम", "सेब", "केला", "अंगूर", 0, "SSC CGL", "2024", "Mango (Mangifera indica) is India's national fruit."],
    ["भारत का National River कौन सी है?", "गंगा", "यमुना", "नर्मदा", "ब्रह्मपुत्र", 0, "MPPSC Pre", "2024", "Ganga is India's national river."],
    ["भारत का National Anthem किसने लिखा?", "रवींद्रनाथ टैगोर", "बंकिमचंद्र चट्टोपाध्याय", "सुभाष चंद्र बोस", "महात्मा गांधी", 0, "MP Constable", "2024", "Rabindranath Tagore composed Jana Gana Mana."],
    ["भारत का National Song किसने लिखा?", "बंकिमचंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सुभाष चंद्र बोस", "महात्मा गांधी", 0, "SSC CGL", "2024", "Bankim Chandra Chattopadhyay wrote Vande Mataram."],
    ["INS Vikramaditya क्या है?", "Aircraft Carrier", "Submarine", "Destroyer", "Frigate", 0, "MPPSC Pre", "2024", "INS Vikramaditya is India's aircraft carrier acquired from Russia."],
    ["HAL Headquarters कहाँ है?", "Bengaluru", "Delhi", "Mumbai", "Chennai", 0, "SSC CGL", "2024", "HAL (Hindustan Aeronautics Limited) HQ is in Bengaluru."],
    ["BHEL Headquarters कहाँ है?", "Delhi", "Bhopal", "Mumbai", "Chennai", 0, "MPPSC Pre", "2024", "BHEL (Bharat Heavy Electricals Limited) HQ is in New Delhi."],
    ["NTPC क्या करती है?", "Thermal Power Generation", "Nuclear Power", "Solar Power", "Wind Power", 0, "SSC CGL", "2024", "NTPC is India's largest thermal power generating company."],
    ["ONGC क्या करती है?", "Oil & Natural Gas Exploration", "Road Construction", "Airport Management", "Railway Operation", 0, "MPPSC Pre", "2024", "ONGC explores and produces oil and natural gas."],
    ["SAIL क्या करती है?", "Steel Manufacturing", "Ship Building", "Aircraft Making", "Software Development", 0, "SSC CHSL", "2024", "SAIL (Steel Authority of India Limited) manufactures steel products."],
    ["RBI कब स्थापित हुई?", "1 अप्रैल 1935", "15 अगस्त 1947", "26 जनवरी 1950", "1 जनवरी 1949", 0, "MPPSC Pre", "2024", "RBI was established on 1 April 1935 in Kolkata."],
    ["भारत का सबसे पहला Bank कौन सा था?", "Bank of Hindustan", "SBI", "PNB", "BOB", 0, "SSC CGL", "2023", "Bank of Hindustan (1770) was the first bank in India."],
    ["SBI का Nationalization कब हुआ?", "1955", "1969", "1947", "1950", 0, "MPPSC Pre", "2024", "SBI was nationalized under SBI Act 1955."],
    ["14 Banks का Nationalization कब हुआ?", "1969", "1955", "1980", "1947", 0, "SSC CGL", "2024", "14 major banks were nationalized on 19 July 1969."],
    ["6 और Banks का Nationalization कब हुआ?", "1980", "1969", "1955", "1990", 0, "MPPSC Pre", "2024", "6 more banks were nationalized in 1980."]
];
appendToFile('questions/mixed_gk.js', mixed);

// Count
const files = ['mp_gk.js', 'history_polity.js', 'geo_eco_current.js', 'science_tech.js', 'mixed_gk.js', 'computer_gk.js'];
let total = 0;
for (const f of files) {
    const c = fs.readFileSync('questions/' + f, 'utf8');
    const lines = c.split('\n').filter(l => l.trim().startsWith('['));
    console.log(f + ': ' + lines.length);
    total += lines.length;
}
console.log('Total: ' + total);
