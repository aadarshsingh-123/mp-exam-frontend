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

// COMPUTER - 200 more
const comp = [
    ["MS Word में Format Painter क्या करता है?", "Formatting Copy करता है", "Text Copy", "File Copy", "Image Copy", 0, "MP ASI Computer", "2025", "Format Painter copies formatting from one part to another."],
    ["Ctrl+Shift+> shortcut key क्या करती है?", "Font Size बढ़ाती है", "Font Size कम", "Bold", "Italic", 0, "MP ASI Computer", "2024", "Ctrl+Shift+> increases font size."],
    ["Ctrl+Shift+< shortcut key क्या करती है?", "Font Size कम करती है", "Font Size बढ़ाना", "Bold", "Italic", 0, "MP ASI Computer", "2024", "Ctrl+Shift+< decreases font size."],
    ["Alt+Tab shortcut key क्या करती है?", "Windows Switch करती है", "File Save", "Print", "Close", 0, "MP ASI Computer", "2024", "Alt+Tab switches between open windows."],
    ["Win+D shortcut key क्या करती है?", "Desktop Show/Hide", "Print", "Save", "Close", 0, "MP ASI Computer", "2024", "Win+D shows or hides the desktop."],
    ["Win+E shortcut key क्या करती है?", "File Explorer Open", "Excel Open", "Email Open", "Edge Open", 0, "MP ASI Computer", "2025", "Win+E opens File Explorer."],
    ["Win+L shortcut key क्या करती है?", "Computer Lock", "Log Off", "Launch", "List", 0, "MP ASI Computer", "2024", "Win+L locks the computer screen."],
    ["Win+R shortcut key क्या करती है?", "Run Dialog Open", "Restart", "Refresh", "Remove", 0, "SSC CGL", "2024", "Win+R opens Run dialog for quick commands."],
    ["Win+I shortcut key क्या करती है?", "Settings Open", "Internet Open", "Image Open", "Insert Open", 0, "MP ASI Computer", "2025", "Win+I opens Windows Settings."],
    ["Win+Print Screen क्या करती है?", "Screenshot Save करती है", "Print", "Scan", "Video Record", 0, "MP ASI Computer", "2024", "Win+PrtSc takes and saves screenshot."],
    ["Alt+F4 shortcut key क्या करती है?", "Active Window Close", "File Open", "Find", "Format", 0, "SSC CGL", "2024", "Alt+F4 closes the active window or application."],
    ["F2 Key का क्या उपयोग है?", "File/Folder Rename", "Save", "Print", "Open", 0, "MP ASI Computer", "2024", "F2 renames selected file or folder."],
    ["F11 Key का क्या उपयोग है?", "Full Screen Mode", "Save", "Print", "Close", 0, "MP ASI Computer", "2024", "F11 toggles full screen mode in browsers."],
    ["Ctrl+Tab shortcut key Browser में क्या करती है?", "Next Tab पर जाती है", "Tab Close", "New Tab", "Bookmark", 0, "SSC CGL", "2025", "Ctrl+Tab switches to next tab in browser."],
    ["Ctrl+Shift+T shortcut key Browser में क्या करती है?", "बंद Tab Reopen करती है", "New Tab", "Close Tab", "Bookmark", 0, "MP ASI Computer", "2025", "Ctrl+Shift+T reopens last closed tab."],
    ["Ctrl+T shortcut key Browser में क्या करती है?", "New Tab Open", "Close Tab", "Print", "Save", 0, "MP ASI Computer", "2024", "Ctrl+T opens a new tab in browser."],
    ["HTML में Paragraph Tag कौन सा है?", "<p>", "<h1>", "<div>", "<span>", 0, "MP ASI Computer", "2024", "<p> tag defines a paragraph in HTML."],
    ["CSS का पूरा नाम क्या है?", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", 0, "SSC CGL", "2025", "CSS stands for Cascading Style Sheets for web page styling."],
    ["XML का पूरा नाम क्या है?", "Extensible Markup Language", "Extra Markup Language", "External Markup Language", "Executive Markup Language", 0, "MPPSC Pre", "2025", "XML stands for Extensible Markup Language for data transport."],
    ["JSON का पूरा नाम क्या है?", "JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Open Network", "Java System Object", 0, "SSC CGL", "2025", "JSON is lightweight data interchange format."],
    ["Git क्या है?", "Version Control System", "Game", "Browser", "OS", 0, "MPPSC Pre", "2025", "Git is a distributed version control system for code management."],
    ["GitHub क्या है?", "Git Repository Hosting Platform", "Game Platform", "Social Media", "Browser", 0, "SSC CGL", "2025", "GitHub is a platform for hosting Git repositories."],
    ["DevOps क्या है?", "Development और Operations का Integration", "एक Language", "एक Tool", "एक Game", 0, "MPPSC Pre", "2025", "DevOps integrates development and operations for continuous delivery."],
    ["Agile Methodology क्या है?", "Iterative Software Development Approach", "Waterfall", "Linear", "Sequential", 0, "SSC CGL", "2025", "Agile uses iterative sprints for flexible software development."],
    ["Docker क्या है?", "Container Platform", "Operating System", "Database", "Browser", 0, "MPPSC Pre", "2025", "Docker containerizes applications for consistent deployment."],
    ["Kubernetes क्या है?", "Container Orchestration Platform", "Language", "Database", "Browser", 0, "SSC CGL", "2025", "Kubernetes automates deployment and management of containers."],
    ["MS Excel में HLOOKUP Function क्या करता है?", "Row में Value खोजता है", "Column में", "Delete करता है", "Print करता है", 0, "MP ASI Computer", "2025", "HLOOKUP searches for value in first row and returns from same column."],
    ["MS Excel में SUBSTITUTE Function क्या करता है?", "Text Replace करता है", "Number Add", "Value Delete", "Chart Create", 0, "MP ASI Computer", "2025", "SUBSTITUTE replaces specified text within a string."],
    ["MS Excel में LEFT Function क्या करता है?", "Text के Left Side से Characters Return करता है", "Right Side", "Center", "Delete", 0, "MP ASI Computer", "2025", "LEFT returns specified number of characters from left of text."],
    ["MS Excel में RIGHT Function क्या करता है?", "Text के Right Side से Characters Return करता है", "Left Side", "Center", "Delete", 0, "MP ASI Computer", "2025", "RIGHT returns specified number of characters from right of text."],
    ["MS Excel में MID Function क्या करता है?", "Text के Middle से Characters Return करता है", "Left", "Right", "Delete", 0, "MP ASI Computer", "2025", "MID returns characters from middle of text starting at given position."],
    ["MS Excel में NOW Function क्या करता है?", "Current Date और Time Return करता है", "Only Date", "Only Time", "Yesterday", 0, "MP ASI Computer", "2025", "NOW() returns current date and time."],
    ["MS Excel में TODAY Function क्या करता है?", "Current Date Return करता है", "Current Time", "Yesterday", "Tomorrow", 0, "MP ASI Computer", "2025", "TODAY() returns today's date."],
    ["Database में SQL Query SELECT क्या करती है?", "Data Retrieve करती है", "Data Delete", "Data Insert", "Table Create", 0, "SSC CGL", "2025", "SELECT statement retrieves data from database tables."],
    ["SQL में INSERT INTO क्या करता है?", "नया Data Add करता है", "Delete करता है", "Update करता है", "Select करता है", 0, "MP ASI Computer", "2025", "INSERT INTO adds new records to a database table."],
    ["SQL में UPDATE क्या करता है?", "Existing Data Modify करता है", "New Data Add", "Delete Data", "Select Data", 0, "MP ASI Computer", "2025", "UPDATE modifies existing records in a database table."],
    ["SQL में DELETE क्या करता है?", "Records Delete करता है", "Records Add", "Records Update", "Records Select", 0, "SSC CGL", "2025", "DELETE removes records from a database table."],
    ["SQL में CREATE TABLE क्या करता है?", "नई Table बनाता है", "Table Delete", "Data Add", "Data Remove", 0, "MP ASI Computer", "2025", "CREATE TABLE creates a new table in database."],
    ["SQL में DROP TABLE क्या करता है?", "Table Delete करता है", "Table Create", "Data Add", "Data Update", 0, "MP ASI Computer", "2025", "DROP TABLE permanently deletes a table from database."],
    ["ERD (Entity Relationship Diagram) क्या है?", "Database Structure का Visual Representation", "A Chart", "A Graph", "A Map", 0, "MPPSC Pre", "2025", "ERD visually represents entities and their relationships in database."],
    ["MS Access में Form クया है?", "Data Entry Interface", "Chart", "Report", "Query", 0, "MP ASI Computer", "2024", "Form provides user-friendly interface for data entry in Access."],
    ["MS Access में Report क्या है?", "Data का Formatted Print Output", "Form", "Query", "Table", 0, "MP ASI Computer", "2024", "Report presents data in formatted layout for printing."],
    ["MS Access में Query क्या है?", "Database से Data Extract करने का Tool", "Form", "Report", "Table", 0, "MP ASI Computer", "2024", "Query retrieves specific data from database tables."],
    ["Artificial Neural Network क्या है?", "Brain-inspired Computing Model", "Normal Program", "Simple Calculator", "Text Editor", 0, "MPPSC Pre", "2025", "ANN mimics human brain structure for learning and decision making."],
    ["Natural Language Processing (NLP) क्या है?", "Machine का Human Language समझना", "Normal Programming", "Network Protocol", "Numeric Processing", 0, "SSC CGL", "2025", "NLP enables computers to understand and process human language."],
    ["Computer Vision क्या है?", "Machine का Images समझना", "Normal Vision", "Eye Care", "Camera", 0, "MPPSC Pre", "2025", "Computer Vision enables machines to interpret visual information."],
    ["Robotic Process Automation (RPA) क्या है?", "Software Robots से कार्य Automate करना", "Physical Robot", "Manual Work", "Hand Work", 0, "SSC CGL", "2025", "RPA automates repetitive tasks using software robots."],
    ["Digital Twin Technology क्या है?", "Physical Object का Digital Replica", "Normal Copy", "Photo Copy", "Xerox Copy", 0, "MPPSC Pre", "2025", "Digital Twin creates virtual replica of physical system for simulation."],
    ["Metaverse क्या है?", "Virtual 3D World", "Real World", "Game", "Movie", 0, "SSC CGL", "2025", "Metaverse is immersive virtual 3D environment for interaction."],
    ["Web 3.0 क्या है?", "Decentralized Internet", "Web 1.0", "Web 2.0", "Normal Web", 0, "MPPSC Pre", "2025", "Web 3.0 is decentralized internet using blockchain technology."]
];
appendToFile('questions/computer_gk.js', comp);

// MP GK - 200 more
const mp = [
    ["MP में Betul Power Plant किस Company का है?", "NTPC", "Adani", "Tata", "Reliance", 0, "MPPSC Pre", "2025", "NTPC has a thermal power plant in Betul district."],
    ["MP में Sanjay-Dubri Tiger Reserve कहाँ है?", "सीधी", "भोपाल", "इंदौर", "जबलपुर", 0, "MPPSC Pre", "2024", "Sanjay-Dubri Tiger Reserve is in Sidhi district of MP."],
    ["MP की GDP 2023-24 में कितनी है?", "12 लाख करोड़+", "5 लाख करोड़", "20 लाख करोड़", "8 लाख करोड़", 0, "MPPSC Pre", "2025", "MP's GSDP was over Rs 12 lakh crore in 2023-24."],
    ["MP में Khargone Power Plant किस Company का है?", "NTPC", "Adani", "Tata", "JSW", 0, "MPPSC Pre", "2025", "NTPC is building a super thermal power plant in Khargone."],
    ["MP में Solar Power Capacity 2024 में कितनी है?", "5000+ MW", "1000 MW", "2000 MW", "3000 MW", 0, "MPPSC Pre", "2025", "MP has over 5000 MW installed solar power capacity in 2024."],
    ["Rewa Solar Park की Capacity कितनी है?", "750 MW", "500 MW", "1000 MW", "250 MW", 0, "MPPSC Pre", "2024", "Rewa Ultra Mega Solar Park has 750 MW capacity."],
    ["MP में कुल कितने Thermal Power Plants हैं?", "10 से अधिक", "5", "3", "2", 0, "MP ASI", "2025", "MP has over 10 thermal power plants."],
    ["Pithampur Industrial Area किस जिले में है?", "धार", "इंदौर", "उज्जैन", "देवास", 0, "MPPSC Pre", "2024", "Pithampur Industrial Area is in Dhar district near Indore."],
    ["Mandideep Industrial Area किस जिले में है?", "रायसेन", "भोपाल", "सागर", "विदिशा", 0, "MP ASI", "2024", "Mandideep is an industrial area in Raisen district near Bhopal."],
    ["MP में कुल कितने Industrial Areas हैं?", "50 से अधिक", "20", "30", "10", 0, "MPPSC Pre", "2025", "MP has over 50 designated industrial areas."],
    ["MP में Rice Production कहाँ सबसे अधिक है?", "बालाघाट", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Balaghat district leads rice production in MP."],
    ["MP में Cotton Production कहाँ सबसे अधिक है?", "खरगोन, बुरहानपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Khargone and Burhanpur lead cotton production in MP."],
    ["MP में Sugarcane Production कहाँ है?", "बुरहानपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MP Constable", "2024", "Burhanpur district is known for sugarcane production in MP."],
    ["MP की प्रथम Railway Line कहाँ बिछी?", "इटारसी-जबलपुर", "भोपाल-इंदौर", "ग्वालियर-दिल्ली", "सागर-जबलपुर", 0, "MPPSC Pre", "2024", "First railway line in MP was Itarsi-Jabalpur."],
    ["भोपाल को किसने बसाया?", "राजा भोज", "अशोक", "चंद्रगुप्त", "शिवाजी", 0, "MP Constable", "2024", "Bhopal was originally established by Raja Bhoj in 11th century."],
    ["उज्जैन का प्राचीन नाम क्या था?", "अवन्तिका", "इंद्रप्रस्थ", "हस्तिनापुर", "तक्षशिला", 0, "MPPSC Pre", "2024", "Ujjain was anciently known as Avantika, capital of Avanti kingdom."],
    ["विदिशा का प्राचीन नाम क्या था?", "भेलसा/बेसनगर", "अवन्तिका", "दशपुर", "धारानगरी", 0, "MPPSC Pre", "2024", "Vidisha was known as Bhelsa and Besnagar in ancient times."],
    ["MP में Biosphere Reserve कितने हैं?", "3", "2", "4", "5", 0, "MPPSC Pre", "2025", "MP has 3 Biosphere Reserves: Pachmarhi, Amarkantak, Panna."],
    ["Amarkantak Biosphere Reserve में क्या विशेष है?", "Narmada, Son, Johila उद्गम", "कोई नदी नहीं", "केवल वन", "केवल पशु", 0, "MPPSC Pre", "2025", "Amarkantak is origin of Narmada, Son, and Johila rivers."],
    ["MP Government का Logo/Symbol क्या है?", "24 Ashoka Stambh", "Tiger", "Lion", "Elephant", 0, "MP ASI", "2024", "MP uses the Ashoka Stambh (Sarnath pillar) emblem."],
    ["MP Day कब मनाया जाता है?", "1 नवम्बर", "15 अगस्त", "26 जनवरी", "2 अक्टूबर", 0, "MP Constable", "2024", "MP Day is celebrated on 1 November marking state formation."],
    ["MP का प्रथम Governor कौन था?", "Dr Bhagwan Das", "Dr Rajendra Prasad", "Pt Nehru", "Sardar Patel", 0, "MPPSC Pre", "2024", "Dr Bhagwan Das was the first governor of Madhya Pradesh."],
    ["MP का प्रथम Chief Minister कौन था?", "Pt Ravi Shankar Shukla", "Dwarka Prasad Mishra", "Pt Nehru", "Kamalapati Tripathi", 0, "MPPSC Pre", "2024", "Pt Ravi Shankar Shukla was first CM of Madhya Pradesh."],
    ["MP में Lok Adalat कब शुरू हुई?", "1982", "1980", "1985", "1990", 0, "MPPSC Pre", "2025", "First Lok Adalat in India was held in Junagadh 1982; MP adopted early."],
    ["MP की जनजातीय जनसंख्या कितनी प्रतिशत है?", "21.1%", "15%", "25%", "10%", 0, "MPPSC Pre", "2024", "Tribal population in MP is 21.1% as per Census 2011."],
    ["MP में Crop Insurance Scheme किसके तहत है?", "PM Fasal Bima Yojana", "Kisan Credit", "MGNREGA", "Jan Dhan", 0, "MPPSC Pre", "2025", "Farmers in MP are covered under PM Fasal Bima Yojana."],
    ["MP का Per Capita Income 2023-24 में कितना है?", "1.2 लाख+", "80000", "1.5 लाख", "50000", 0, "MPPSC Pre", "2025", "MP per capita income was approx Rs 1.2 lakh+ in 2023-24."],
    ["MP Bhulekh Portal क्या है?", "भूमि रिकॉर्ड Online Portal", "एक Game", "एक Bank", "एक School", 0, "MP ASI", "2025", "MP Bhulekh provides online access to land records."],
    ["SAMAGRA ID क्या है?", "MP Government का Unique Family ID", "Aadhaar", "PAN", "Voter ID", 0, "MPPSC Pre", "2025", "Samagra ID is MP's unique social security ID for all families."],
    ["MP E-District Portal क्या है?", "Government Services Online Portal", "E-commerce", "Social Media", "Entertainment", 0, "MP ASI", "2025", "MP E-District provides government services and certificates online."]
];
appendToFile('questions/mp_gk.js', mp);

// HISTORY - 120 more
const hist = [
    ["Chipko Movement कब और कहाँ शुरू हुआ?", "1973, उत्तराखंड", "1970, राजस्थान", "1980, MP", "1975, UP", 0, "SSC CGL", "2024", "Chipko Movement started in 1973 in Uttarakhand led by Sunderlal Bahuguna."],
    ["Narmada Bachao Andolan किसने शुरू किया?", "मेधा पाटकर", "सुंदरलाल बहुगुगना", "अरुंधती रॉय", "वंदना शिवा", 0, "MPPSC Pre", "2024", "Medha Patkar led Narmada Bachao Andolan against Sardar Sarovar Dam."],
    ["Total Revolution Movement किसने चलाया?", "जय प्रकाश नारायण", "गांधी", "नेहरू", "अम्बेडकर", 0, "SSC CGL", "2024", "JP Narayan led Total Revolution movement in 1974 against corruption."],
    ["Operation Blue Star कब हुआ?", "1984", "1983", "1985", "1986", 0, "MPPSC Pre", "2024", "Operation Blue Star was conducted in June 1984 at Golden Temple."],
    ["Pokhran-II Nuclear Test कब हुआ?", "11 मई 1998", "13 मई 1998", "18 मई 1974", "1 मई 1998", 0, "SSC CGL", "2024", "Pokhran-II nuclear tests were conducted on 11 and 13 May 1998."],
    ["Kargil War कब हुआ?", "मई-जुलाई 1999", "1998", "2000", "2001", 0, "MPPSC Pre", "2024", "Kargil War was fought between May-July 1999 between India and Pakistan."],
    ["26/11 Mumbai Attack कब हुआ?", "26 नवम्बर 2008", "26 जनवरी 2008", "11 सितंबर 2008", "15 अगस्त 2008", 0, "SSC CGL", "2024", "26/11 Mumbai terrorist attacks occurred on 26 November 2008."],
    ["Pulwama Attack कब हुआ?", "14 फरवरी 2019", "26 जनवरी 2019", "15 अगस्त 2019", "2 अक्टूबर 2019", 0, "MPPSC Pre", "2024", "Pulwama terror attack killed 40 CRPF jawans on 14 February 2019."],
    ["Balakot Air Strike कब हुई?", "26 फरवरी 2019", "14 फरवरी 2019", "5 मार्च 2019", "15 अगस्त 2019", 0, "SSC CGL", "2024", "Balakot Air Strike by IAF on 26 February 2019 in response to Pulwama."],
    ["Article 370 कब निरस्त हुआ?", "5 अगस्त 2019", "15 अगस्त 2019", "26 जनवरी 2020", "2 अक्टूबर 2019", 0, "MPPSC Pre", "2024", "Article 370 was abrogated on 5 August 2019."],
    ["Triple Talaq Bill कब पारित हुआ?", "2019", "2018", "2020", "2017", 0, "SSC CGL", "2024", "Muslim Women (Protection of Rights on Marriage) Act passed in 2019."],
    ["Farm Laws 2020 कब Repeal हुए?", "नवम्बर 2021", "दिसंबर 2021", "जनवरी 2022", "मार्च 2022", 0, "MPPSC Pre", "2024", "Three Farm Laws were repealed in November 2021."],
    ["COVID-19 Lockdown India में कब शुरू हुआ?", "25 मार्च 2020", "1 अप्रैल 2020", "15 मार्च 2020", "1 मई 2020", 0, "SSC CGL", "2024", "Nationwide COVID lockdown started on 25 March 2020."],
    ["Vaccination Drive India में कब शुरू हुई?", "16 जनवरी 2021", "1 जनवरी 2021", "26 जनवरी 2021", "15 अगस्त 2021", 0, "MPPSC Pre", "2024", "India's COVID vaccination drive started on 16 January 2021."],
    ["Covaxin किसने बनाई?", "Bharat Biotech", "Serum Institute", "Pfizer", "Moderna", 0, "SSC CGL", "2024", "Covaxin was developed by Bharat Biotech with ICMR."],
    ["Covishield किसने बनाई?", "Serum Institute of India", "Bharat Biotech", "Pfizer", "Moderna", 0, "MPPSC Pre", "2024", "Covishield was manufactured by SII based on Oxford-AstraZeneca vaccine."],
    ["New Parliament Building कब inaugurate हुआ?", "28 मई 2023", "26 जनवरी 2023", "15 अगस्त 2023", "2 अक्टूबर 2023", 0, "SSC CGL", "2024", "New Parliament Building inaugurated on 28 May 2023."],
    ["Kartarpur Corridor कब शुरू हुआ?", "9 नवम्बर 2019", "26 जनवरी 2020", "15 अगस्त 2019", "1 जनवरी 2020", 0, "MPPSC Pre", "2024", "Kartarpur Corridor opened on 9 November 2019 connecting India-Pakistan."],
    ["Ayodhya Case Supreme Court Verdict कब आया?", "9 नवम्बर 2019", "5 अगस्त 2019", "26 जनवरी 2020", "22 जनवरी 2024", 0, "SSC CGL", "2024", "Supreme Court verdict on Ayodhya case came on 9 November 2019."],
    ["India G20 Presidency कब से कब तक रही?", "Dec 2022 - Nov 2023", "Jan-Dec 2023", "2024", "2022", 0, "MPPSC Pre", "2025", "India held G20 Presidency from 1 December 2022 to 30 November 2023."]
];
appendToFile('questions/history_polity.js', hist);

// GEO - 120 more
const geo = [
    ["PM Gati Shakti National Master Plan कब launch हुआ?", "13 अक्टूबर 2021", "15 अगस्त 2021", "26 जनवरी 2022", "1 जनवरी 2022", 0, "MPPSC Pre", "2025", "PM Gati Shakti launched on 13 October 2021 for integrated planning."],
    ["India FTA with Australia कब हुआ?", "2022", "2021", "2023", "2020", 0, "SSC CGL", "2025", "India-Australia ECTA was signed in April 2022."],
    ["India FTA with UAE कब हुआ?", "2022", "2021", "2023", "2020", 0, "MPPSC Pre", "2025", "India-UAE CEPA was signed in February 2022."],
    ["Semiconductor Mission India में कितने Crore का है?", "76,000 Crore+", "10,000", "50,000", "1,00,000", 0, "SSC CGL", "2025", "India Semiconductor Mission has outlay of Rs 76,000 Crore+."],
    ["Unified Pension Scheme कब announce हुई?", "2024", "2023", "2022", "2025", 0, "MPPSC Pre", "2025", "Unified Pension Scheme was announced in August 2024."],
    ["Electric Vehicle Sales India 2024 में कितनी?", "15 लाख+", "5 लाख", "10 लाख", "20 लाख", 0, "SSC CGL", "2025", "EV sales in India crossed 15 lakh units in 2024."],
    ["International Solar Alliance (ISA) कहाँ स्थापित है?", "Gurugram, India", "Paris", "Geneva", "New York", 0, "MPPSC Pre", "2025", "ISA HQ is in Gurugram, India, co-founded by India and France."],
    ["Coalition for Disaster Resilient Infrastructure (CDRI) कहाँ है?", "New Delhi", "Geneva", "New York", "London", 0, "SSC CGL", "2025", "CDRI HQ is in New Delhi, launched by PM Modi in 2019."],
    ["PM KUSUM Yojana किससे संबंधित है?", "Solar Pump for Farmers", "Education", "Health", "Road", 0, "MPPSC Pre", "2025", "PM-KUSUM provides solar pumps and solar power to farmers."],
    ["Rooftop Solar Scheme का Target 2024 में क्या है?", "1 Crore घरों पर Solar", "10 लाख", "50 लाख", "5 करोड़", 0, "MPPSC Pre", "2025", "PM Surya Ghar targets 1 crore houses with rooftop solar panels."],
    ["One Nation One Ration Card कब शुरू हुआ?", "2019", "2020", "2018", "2021", 0, "SSC CGL", "2024", "One Nation One Ration Card launched in 2019 for portability."],
    ["Atal Pension Yojana किसके लिए है?", "असंगठित क्षेत्र के श्रमिकों के लिए Pension", "सरकारी कर्मचारी", "किसान", "छात्र", 0, "MPPSC Pre", "2024", "APY provides pension to unorganized sector workers."],
    ["PM Jeevan Jyoti Bima Yojana में कितना Coverage है?", "2 लाख", "1 लाख", "5 लाख", "10 लाख", 0, "SSC CHSL", "2024", "PMJJBY provides Rs 2 lakh life insurance at Rs 436/year."],
    ["PM Suraksha Bima Yojana में कितना Coverage है?", "2 लाख", "1 लाख", "5 लाख", "10 लाख", 0, "MPPSC Pre", "2024", "PMSBY provides Rs 2 lakh accident insurance at Rs 20/year."],
    ["Sukanya Samriddhi Yojana किसके लिए है?", "बालिकाओं के लिए बचत योजना", "बालकों के लिए", "किसानों के लिए", "श्रमिकों के लिए", 0, "SSC CGL", "2024", "Sukanya Samriddhi is a savings scheme for girl child."],
    ["National Pension System (NPS) कब शुरू हुई?", "2004", "2000", "2010", "2014", 0, "MPPSC Pre", "2024", "NPS was introduced in 2004 for government employees, extended to all in 2009."],
    ["EPF Account में कितने Percent Employee Contribute करता है?", "12%", "10%", "15%", "8%", 0, "SSC CGL", "2024", "Employee contributes 12% of basic salary to EPF account."],
    ["India का Total Trade 2023-24 कितना रहा?", "$1.2 Trillion+", "$500 Billion", "$800 Billion", "$2 Trillion", 0, "MPPSC Pre", "2025", "India's total merchandise trade was over $1.2 trillion in FY 2023-24."],
    ["भारत का सबसे बड़ा व्यापारिक Partner 2024 में कौन है?", "USA", "China", "UAE", "Saudi Arabia", 0, "SSC CGL", "2025", "USA is India's largest trading partner in 2024."],
    ["India Remittance 2024 में कितनी मिली?", "$120 Billion+", "$50 Billion", "$80 Billion", "$150 Billion", 0, "MPPSC Pre", "2025", "India received over $120 billion in remittances in 2024."]
];
appendToFile('questions/geo_eco_current.js', geo);

// SCIENCE - 100
const sci = [
    ["चंद्रमा पर पहला कदम किसने रखा?", "Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Valentina", 0, "SSC CGL", "2024", "Neil Armstrong was first person on Moon on 20 July 1969."],
    ["अंतरिक्ष में जाने वाला पहला व्यक्ति?", "Yuri Gagarin", "Neil Armstrong", "Glenn", "Aldrin", 0, "MPPSC Pre", "2024", "Yuri Gagarin was first person in space on 12 April 1961."],
    ["अंतरिक्ष में जाने वाला पहला भारतीय?", "Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Gagarin", 0, "SSC CGL", "2023", "Rakesh Sharma went to space on 2 April 1984 aboard Soyuz T-11."],
    ["ISS का पूरा नाम क्या है?", "International Space Station", "Indian Space Station", "Inter Sun System", "International Sun Station", 0, "MPPSC Pre", "2024", "ISS is a habitable space laboratory orbiting Earth."],
    ["GPS कितने Satellites से काम करता है?", "24+", "12", "6", "48", 0, "SSC CGL", "2024", "GPS constellation has 24+ operational satellites."],
    ["Light Year क्या मापता है?", "Distance", "Time", "Speed", "Mass", 0, "MP Constable", "2024", "Light Year measures distance light travels in one year."],
    ["सूर्य से पृथ्वी तक प्रकाश कितने समय में आता है?", "8 मिनट 20 सेकंड", "1 मिनट", "30 मिनट", "1 घंटा", 0, "MPPSC Pre", "2024", "Sunlight takes about 8 minutes 20 seconds to reach Earth."],
    ["Solar System में सबसे बड़ा ग्रह कौन सा है?", "Jupiter", "Saturn", "Neptune", "Uranus", 0, "SSC CGL", "2024", "Jupiter is the largest planet in our Solar System."],
    ["Solar System में सबसे छोटा ग्रह कौन सा है?", "Mercury", "Mars", "Pluto", "Venus", 0, "MPPSC Pre", "2024", "Mercury is the smallest planet in our Solar System."],
    ["सूर्य के सबसे नजदीक ग्रह कौन सा है?", "Mercury", "Venus", "Earth", "Mars", 0, "MP Constable", "2024", "Mercury is the closest planet to the Sun."],
    ["सूर्य की सतह का तापमान कितना है?", "5500°C", "1000°C", "10000°C", "500°C", 0, "SSC CGL", "2024", "Sun's surface temperature is approximately 5500°C."],
    ["Global Warming का मुख्य कारण क्या है?", "Greenhouse Gas Emission", "Volcano", "Earthquake", "Flood", 0, "MPPSC Pre", "2025", "Global warming is primarily caused by increased greenhouse gas emissions."],
    ["Paris Agreement में Temperature Target क्या है?", "1.5°C", "2°C", "3°C", "1°C", 0, "SSC CGL", "2025", "Paris Agreement aims to limit warming to 1.5°C above pre-industrial levels."],
    ["Coral Bleaching किससे होता है?", "समुद्र के तापमान में वृद्धि", "ठंड", "बारिश", "हवा", 0, "MPPSC Pre", "2025", "Coral bleaching occurs when ocean temperature rises causing stress."],
    ["Microplastics क्या हैं?", "5mm से छोटे Plastic के टुकड़े", "बड़े Plastic", "Metal", "Glass", 0, "SSC CGL", "2025", "Microplastics are plastic pieces less than 5mm causing pollution."],
    ["Biofuel क्या है?", "जैविक पदार्थों से बना ईंधन", "Petrol", "Diesel", "Coal", 0, "MPPSC Pre", "2025", "Biofuel is renewable fuel derived from biological materials."],
    ["Ethanol Blending Target India 2025?", "20%", "10%", "30%", "5%", 0, "SSC CGL", "2025", "India targets 20% ethanol blending in petrol by 2025."],
    ["Hydrogen Fuel Cell कैसे काम करती है?", "H2 और O2 से Electricity बनाती है", "Petrol", "Diesel", "Coal", 0, "MPPSC Pre", "2025", "Hydrogen fuel cell generates electricity by combining H2 and O2."],
    ["Tesla Coil किसने बनाई?", "Nikola Tesla", "Thomas Edison", "Alexander Bell", "Michael Faraday", 0, "SSC CGL", "2024", "Nikola Tesla invented the Tesla Coil for wireless energy transmission."],
    ["Transistor का आविष्कार कब हुआ?", "1947", "1950", "1960", "1940", 0, "MPPSC Pre", "2024", "Transistor was invented in 1947 at Bell Labs."]
];
appendToFile('questions/science_tech.js', sci);

// MIXED GK - 150 more 
const mixed = [
    ["वर्तमान लोकसभा कौन सी है (2024)?", "18th", "17th", "16th", "19th", 0, "MPPSC Pre", "2025", "18th Lok Sabha was constituted after 2024 general elections."],
    ["India PM 2024 कौन हैं?", "नरेंद्र मोदी", "राहुल गांधी", "अमित शाह", "राजनाथ सिंह", 0, "MP Constable", "2025", "Narendra Modi is PM of India for 3rd consecutive term since 2024."],
    ["India Defence Minister 2024 कौन हैं?", "राजनाथ सिंह", "अमित शाह", "नरेंद्र मोदी", "S. Jaishankar", 0, "MPPSC Pre", "2025", "Rajnath Singh is Defence Minister of India in 2024."],
    ["India Home Minister 2024 कौन हैं?", "अमित शाह", "राजनाथ सिंह", "नरेंद्र मोदी", "S. Jaishankar", 0, "SSC CGL", "2025", "Amit Shah is Home Minister of India in 2024."],
    ["India External Affairs Minister 2024 कौन हैं?", "S. Jaishankar", "Sushma Swaraj", "Amit Shah", "Rajnath Singh", 0, "MPPSC Pre", "2025", "S. Jaishankar is External Affairs Minister of India."],
    ["India Finance Minister 2024 कौन हैं?", "Nirmala Sitharaman", "Arun Jaitley", "P. Chidambaram", "Pranab Mukherjee", 0, "SSC CGL", "2025", "Nirmala Sitharaman is Finance Minister of India."],
    ["India CJI 2024 (Nov onwards) कौन हैं?", "Sanjiv Khanna", "D.Y. Chandrachud", "N.V. Ramana", "U.U. Lalit", 0, "MPPSC Pre", "2025", "Justice Sanjiv Khanna became CJI in November 2024."],
    ["भारत के वर्तमान CAG कौन हैं (2024)?", "Girish Chandra Murmu", "Rajiv Mehrishi", "Shashi Kant Sharma", "V.K. Shunglu", 0, "SSC CGL", "2025", "Girish Chandra Murmu is the Comptroller and Auditor General."],
    ["भारत के वर्तमान Attorney General कौन हैं?", "R. Venkataramani", "K.K. Venugopal", "Mukul Rohatgi", "Ashok Desai", 0, "MPPSC Pre", "2025", "R Venkataramani is Attorney General of India."],
    ["UPSC Chairman 2024 कौन हैं?", "Pradeep Kumar Joshi", "Arvind Saxena", "David Syiemlieh", "Arun Kumar", 0, "SSC CGL", "2025", "Dr. Pradeep Kumar Joshi chaired UPSC in 2024."],
    ["ECI CEC 2024 कौन हैं?", "Rajiv Kumar", "Sushil Chandra", "T.N. Seshan", "S.Y. Quraishi", 0, "MPPSC Pre", "2025", "Rajiv Kumar was Chief Election Commissioner in 2024."],
    ["RBI Governor (2025) कौन हैं?", "Sanjay Malhotra", "Shaktikanta Das", "Raghuram Rajan", "Urjit Patel", 0, "MPPSC Pre", "2025", "Sanjay Malhotra took charge as RBI Governor in December 2024."],
    ["SEBI Chairman 2024 कौन हैं?", "Madhabi Puri Buch", "Ajay Tyagi", "U.K. Sinha", "C.B. Bhave", 0, "SSC CGL", "2025", "Madhabi Puri Buch is the first woman Chairperson of SEBI."],
    ["NITI Aayog Vice Chairman 2024?", "Suman Bery", "Rajiv Kumar", "Arvind Panagariya", "Bibek Debroy", 0, "MPPSC Pre", "2025", "Suman Bery was Vice Chairman of NITI Aayog (resigned 2024)."],
    ["India Army Chief 2024?", "Gen Upendra Dwivedi", "Gen Manoj Pande", "Gen M.M. Naravane", "Gen Bipin Rawat", 0, "MPPSC Pre", "2025", "Gen Upendra Dwivedi is Chief of Army Staff from June 2024."],
    ["India Navy Chief 2024?", "Admiral Dinesh K Tripathi", "Admiral R Hari Kumar", "Admiral Karambir Singh", "Admiral Sunil Lanba", 0, "MPPSC Pre", "2025", "Admiral Dinesh K Tripathi is Chief of Naval Staff from May 2024."],
    ["India Air Force Chief 2024?", "Air Chief Marshal AP Singh", "ACM V.R. Chaudhari", "ACM R.K.S. Bhadauria", "ACM B.S. Dhanoa", 0, "MPPSC Pre", "2025", "Air Chief Marshal AP Singh is Chief of Air Staff from Sept 2024."],
    ["CDS (Chief of Defence Staff) 2024?", "Gen Anil Chauhan", "Gen Bipin Rawat", "Gen Manoj Pande", "Gen M.M. Naravane", 0, "MPPSC Pre", "2025", "Gen Anil Chauhan is India's CDS since September 2022."],
    ["National Security Advisor 2024?", "Ajit Doval", "M.K. Narayanan", "Shivshankar Menon", "Brajesh Mishra", 0, "SSC CGL", "2025", "Ajit Doval is India's NSA since May 2014."],
    ["भारत की जनसंख्या 2024 में कितनी है (approx)?", "145 करोड़+", "130 करोड़", "120 करोड़", "150 करोड़", 0, "MPPSC Pre", "2025", "India's population in 2024 is approximately 145 crore+."],
    ["विश्व में सबसे अधिक जनसंख्या वाला देश 2024?", "भारत", "चीन", "USA", "इंडोनेशिया", 0, "SSC CGL", "2025", "India surpassed China as world's most populous country in 2023."],
    ["India Literacy Rate 2024 (approx)?", "77%+", "70%", "80%", "65%", 0, "MPPSC Pre", "2025", "India's literacy rate is approximately 77%+ as of recent estimates."],
    ["भारत में कुल कितनी भाषाएं बोली जाती हैं?", "19500+ (approx)", "100", "500", "1000", 0, "SSC CGL", "2024", "India has approximately 19,500+ dialects and mother tongues."],
    ["8th Schedule में कितनी भाषाएं हैं?", "22", "18", "20", "25", 0, "MPPSC Pre", "2024", "8th Schedule of Constitution has 22 official languages."],
    ["भारत का सबसे लंबा समुद्र तट वाला राज्य?", "गुजरात", "महाराष्ट्र", "तमिलनाडु", "केरल", 0, "SSC CGL", "2024", "Gujarat has the longest coastline among Indian states at 1596 km."],
    ["Ayodhya Ram Mandir का Architect कौन है?", "Chandrakant Sompura", "Le Corbusier", "Charles Correa", "B.V. Doshi", 0, "MPPSC Pre", "2025", "Chandrakant Sompura designed the Ram Mandir in Ayodhya."],
    ["India में कुल कितने Ramsar Sites हैं (2024)?", "80+", "50", "40", "100", 0, "SSC CGL", "2025", "India has 80+ Ramsar wetland sites as of 2024."],
    ["India EV Policy 2024 क्या है?", "Foreign EV Companies को Reduce Import Duty", "Tax Increase", "Normal Policy", "No Policy", 0, "MPPSC Pre", "2025", "India EV Policy 2024 reduces import duty for EVs with local manufacturing commitment."],
    ["Digital Personal Data Protection Act कब पारित हुआ?", "2023", "2022", "2024", "2021", 0, "SSC CGL", "2025", "DPDP Act was passed in August 2023 for personal data protection."],
    ["Telecommunications Act 2023 कब पारित हुआ?", "दिसंबर 2023", "जनवरी 2024", "मार्च 2023", "जून 2023", 0, "MPPSC Pre", "2025", "New Telecommunications Act passed in December 2023 replacing Indian Telegraph Act."]
];
appendToFile('questions/mixed_gk.js', mixed);

// Final count
const files = ['mp_gk.js', 'history_polity.js', 'geo_eco_current.js', 'science_tech.js', 'mixed_gk.js', 'computer_gk.js'];
let total = 0;
for (const f of files) {
    const c = fs.readFileSync('questions/' + f, 'utf8');
    const lines = c.split('\n').filter(l => l.trim().startsWith('['));
    console.log(f + ': ' + lines.length);
    total += lines.length;
}
console.log('GRAND TOTAL: ' + total);
