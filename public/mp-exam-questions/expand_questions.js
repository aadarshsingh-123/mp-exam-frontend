const fs = require('fs');

// Helper to append questions to a file before the closing ];
function appendToFile(filepath, questions) {
    let content = fs.readFileSync(filepath, 'utf8');
    // Remove trailing ]; and whitespace
    content = content.replace(/\];\s*$/, '');
    // Add comma after last existing entry if needed
    content = content.trimEnd();
    if (!content.endsWith(',')) content += ',';
    content += '\n';
    // Add new questions
    for (const q of questions) {
        content += JSON.stringify(q) + ',\n';
    }
    content += '];\n';
    fs.writeFileSync(filepath, content, 'utf8');
}

// ======= COMPUTER GK - 300 more questions =======
const computerMore = [
    ["MS Word में Margin सेट करने का option कहाँ है?", "Layout Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025", "Margins are set from the Layout tab in MS Word."],
    ["E-Governance क्या है?", "सरकारी सेवाओं का डिजिटलीकरण", "ई-मेल भेजना", "गेम खेलना", "प्रिंट करना", 0, "MPPSC Pre", "2024", "E-Governance uses ICT to provide government services to citizens digitally."],
    ["DBMS का पूरा नाम क्या है?", "Database Management System", "Data Binary Management System", "Digital Base Management System", "Data Backup Management System", 0, "SSC CGL", "2024", "DBMS stands for Database Management System for organizing data."],
    ["Ctrl+K shortcut key का उपयोग किसके लिए होता है?", "Hyperlink Insert करना", "Keep", "Kill", "Key", 0, "MP ASI Computer", "2024", "Ctrl+K inserts a hyperlink in MS Word and other Office applications."],
    ["NFC का पूरा नाम क्या है?", "Near Field Communication", "Network File Connection", "New File Creation", "Normal File Communication", 0, "SSC CHSL", "2025", "NFC stands for Near Field Communication for short-range wireless data exchange."],
    ["MS Excel में Worksheet का default name क्या होता है?", "Sheet1", "Page1", "Book1", "Data1", 0, "MP ASI Computer", "2024", "Default worksheet name in MS Excel is Sheet1."],
    ["Algorithm क्या है?", "समस्या हल करने के चरणबद्ध निर्देश", "एक हार्डवेयर", "एक ब्राउज़र", "एक वायरस", 0, "MPPSC Pre", "2023", "Algorithm is a step-by-step procedure to solve a problem."],
    ["Ctrl+D shortcut key MS Word में क्या करती है?", "Font Dialog Box खोलती है", "Delete करती है", "Duplicate करती है", "Draw करती है", 0, "MP ASI Computer", "2025", "Ctrl+D opens the Font dialog box in MS Word."],
    ["Proxy Server क्या करता है?", "मध्यस्थ के रूप में request forward करता है", "डेटा Store करता है", "प्रिंट करता है", "गेम चलाता है", 0, "SSC CGL", "2024", "Proxy server acts as intermediary between client and server for security."],
    ["Webcam कौन सा Device है?", "Input Device", "Output Device", "Storage Device", "Processing Device", 0, "MP ASI Computer", "2024", "Webcam is an input device that captures video for video calling."],
    ["5G Technology की Speed कितनी होती है?", "20 Gbps तक", "1 Gbps", "100 Mbps", "10 Mbps", 0, "MPPSC Pre", "2025", "5G technology offers speeds up to 20 Gbps, 100x faster than 4G."],
    ["MS Word में Bullets और Numbering कहाँ से जोड़ते हैं?", "Home Tab", "Insert Tab", "View Tab", "Layout Tab", 0, "MP ASI Computer", "2024", "Bullets and Numbering are found in the Paragraph section of Home tab."],
    ["Spreadsheet Software का उदाहरण क्या है?", "MS Excel", "MS Word", "MS PowerPoint", "MS Access", 0, "MP ASI Computer", "2023", "MS Excel is the most popular spreadsheet software for data analysis."],
    ["Digital Signature क्या है?", "इलेक्ट्रॉनिक हस्ताक्षर", "एक फॉन्ट", "एक इमेज", "एक वायरस", 0, "SSC CGL", "2025", "Digital Signature is electronic equivalent of handwritten signature for authentication."],
    ["Ctrl+W shortcut key का उपयोग किसके लिए होता है?", "Window Close करना", "Word Count", "Write", "Width", 0, "MP ASI Computer", "2025", "Ctrl+W closes the current document or window."],
    ["IPv4 Address कितने Bit का होता है?", "32", "64", "128", "16", 0, "MPPSC Pre", "2024", "IPv4 address is 32-bit, providing about 4.3 billion unique addresses."],
    ["MS PowerPoint में Transition क्या है?", "Slides के बीच का visual effect", "एक Font", "एक Image", "एक Table", 0, "MP ASI Computer", "2024", "Transition is the visual effect when moving from one slide to another."],
    ["Spyware क्या करता है?", "गुप्त रूप से जानकारी चुराता है", "कंप्यूटर तेज करता है", "गेम चलाता है", "प्रिंट करता है", 0, "SSC CHSL", "2024", "Spyware secretly monitors and collects user information without consent."],
    ["OCR का पूरा नाम क्या है?", "Optical Character Recognition", "Open Character Reader", "Online Character Recognition", "Optical Code Reader", 0, "MP ASI Computer", "2023", "OCR converts printed or handwritten text into machine-readable digital text."],
    ["MS Excel में Freeze Panes का क्या उपयोग है?", "Row/Column को fix करना", "Data Delete करना", "Chart बनाना", "Print करना", 0, "MP ASI Computer", "2025", "Freeze Panes locks specific rows or columns while scrolling."],
    ["Big Data क्या है?", "बहुत बड़ा और जटिल डेटा सेट", "एक छोटा डेटा", "एक सॉफ्टवेयर", "एक हार्डवेयर", 0, "MPPSC Pre", "2025", "Big Data refers to extremely large datasets requiring advanced processing tools."],
    ["Ctrl+E shortcut key MS Word में क्या करती है?", "Text Center Align", "Edit", "Export", "Extract", 0, "MP ASI Computer", "2024", "Ctrl+E centers the selected text in MS Word."],
    ["MAC Address क्या है?", "Hardware का unique identifier", "एक Software", "एक Website", "एक Email", 0, "SSC CGL", "2024", "MAC Address is a unique identifier assigned to network interface hardware."],
    ["MS Word में Track Changes कहाँ से चालू करते हैं?", "Review Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025", "Track Changes is enabled from the Review tab in MS Word."],
    ["Ethernet क्या है?", "LAN Technology", "WAN Technology", "एक Software", "एक Virus", 0, "MP ASI Computer", "2023", "Ethernet is a widely used LAN technology for wired network connections."],
    ["Ctrl+G shortcut key MS Word में क्या करती है?", "Go To Dialog Box", "Group", "Grid", "Graph", 0, "MP ASI Computer", "2024", "Ctrl+G opens the Go To dialog to navigate to specific pages."],
    ["Cryptocurrency क्या है?", "डिजिटल मुद्रा", "कागजी नोट", "सिक्का", "बैंक चेक", 0, "MPPSC Pre", "2025", "Cryptocurrency is a digital currency using blockchain technology."],
    ["MS Excel में $ चिह्न का क्या अर्थ है?", "Absolute Reference", "Currency", "Percentage", "Division", 0, "MP ASI Computer", "2024", "Dollar sign creates absolute cell references in Excel formulas."],
    ["Hacking क्या है?", "अनधिकृत रूप से system में प्रवेश", "कंप्यूटर repair", "Software update", "Data backup", 0, "SSC CHSL", "2024", "Hacking is unauthorized access to computer systems or networks."],
    ["MODEM का पूरा नाम क्या है?", "Modulator Demodulator", "Modern Device", "Memory Device", "Monitor Display", 0, "MP ASI Computer", "2023", "MODEM converts digital signals to analog and vice versa for data transmission."],
    ["MS Word में Mail Merge का उपयोग क्या है?", "एक ही पत्र को कई लोगों को भेजना", "Email भेजना", "Picture Insert करना", "Table बनाना", 0, "MP ASI Computer", "2025", "Mail Merge creates personalized letters for mass mailing from a data source."],
    ["IPv6 Address कितने Bit का होता है?", "128", "32", "64", "256", 0, "SSC CGL", "2025", "IPv6 address is 128-bit, providing virtually unlimited unique addresses."],
    ["Ctrl+L shortcut key MS Word में क्या करती है?", "Text Left Align", "Line Spacing", "List", "Link", 0, "MP ASI Computer", "2024", "Ctrl+L left-aligns the selected text in MS Word."],
    ["Data Mining क्या है?", "बड़े डेटा से पैटर्न खोजना", "डेटा Delete करना", "डेटा Print करना", "डेटा Copy करना", 0, "MPPSC Pre", "2024", "Data Mining extracts useful patterns and knowledge from large datasets."],
    ["Plotter कौन सा Device है?", "Output Device", "Input Device", "Storage Device", "Processing Device", 0, "MP ASI Computer", "2024", "Plotter is an output device for printing large-format vector graphics."],
    ["Cybercrime किसे कहते हैं?", "कंप्यूटर या इंटरनेट से किया गया अपराध", "ऑनलाइन शॉपिंग", "सोशल मीडिया", "ईमेल भेजना", 0, "SSC CGL", "2024", "Cybercrime is criminal activity carried out using computers or the internet."],
    ["MS Excel में CONCATENATE Function क्या करता है?", "Text को जोड़ता है", "Numbers जोड़ता है", "औसत निकालता है", "गिनती करता है", 0, "MP ASI Computer", "2025", "CONCATENATE joins two or more text strings into one string."],
    ["WWW का आविष्कार किसने किया?", "Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg", 0, "MPPSC Pre", "2024", "Tim Berners-Lee invented the World Wide Web in 1989 at CERN."],
    ["Ctrl+R shortcut key MS Word में क्या करती है?", "Text Right Align", "Redo", "Replace", "Refresh", 0, "MP ASI Computer", "2024", "Ctrl+R right-aligns the selected text in MS Word."],
    ["Biometric Authentication क्या है?", "शारीरिक विशेषताओं से पहचान", "Password", "PIN", "OTP", 0, "SSC CHSL", "2025", "Biometric uses physical characteristics like fingerprint, face for authentication."],
    ["MS Access क्या है?", "Database Management Software", "Spreadsheet Software", "Presentation Software", "Word Processor", 0, "MP ASI Computer", "2023", "MS Access is a database management system by Microsoft."],
    ["Cloud Storage का उदाहरण क्या है?", "Google Drive", "MS Word", "Notepad", "Paint", 0, "MP ASI Computer", "2024", "Google Drive is a popular cloud storage service for storing files online."],
    ["ASCII का पूरा नाम क्या है?", "American Standard Code for Information Interchange", "Advanced Standard Code for Info", "American System Code for IT", "Advanced System Code for IT", 0, "SSC CGL", "2024", "ASCII is a character encoding standard with 128 characters."],
    ["Ctrl+U shortcut key का उपयोग किसके लिए होता है?", "Underline", "Undo", "Upload", "Update", 0, "MP ASI Computer", "2025", "Ctrl+U underlines the selected text."],
    ["Augmented Reality क्या है?", "वास्तविक दुनिया में डिजिटल जानकारी जोड़ना", "Virtual World", "एक Game", "एक Software", 0, "MPPSC Pre", "2025", "Augmented Reality overlays digital information on the real-world environment."],
    ["MS Excel में COUNTIF Function क्या करता है?", "शर्त के अनुसार गिनती करता है", "जोड़ता है", "औसत निकालता है", "Max निकालता है", 0, "MP ASI Computer", "2024", "COUNTIF counts cells meeting a specific condition."],
    ["Switch Network में क्या करता है?", "Devices को connect करता है", "Data store करता है", "Print करता है", "Scan करता है", 0, "MP ASI Computer", "2023", "Switch connects devices in a network and forwards data to the destination."],
    ["Ctrl+I shortcut key का उपयोग किसके लिए होता है?", "Italic", "Insert", "Image", "Import", 0, "MP ASI Computer", "2024", "Ctrl+I makes selected text italic."],
    ["Chatbot क्या है?", "AI-based automated conversation program", "एक Hardware", "एक Virus", "एक Browser", 0, "SSC CGL", "2025", "Chatbot is an AI program that simulates human conversation."],
    ["MS Word में Template क्या है?", "पूर्व-निर्मित document format", "एक Image", "एक Video", "एक Virus", 0, "MP ASI Computer", "2025", "Template is a pre-designed document format for consistent document creation."],
    ["API का पूरा नाम क्या है?", "Application Programming Interface", "Advanced Program Integration", "App Processing Interface", "Application Process Integration", 0, "MPPSC Pre", "2024", "API stands for Application Programming Interface for software communication."],
    ["Speaker कौन सा Device है?", "Output Device", "Input Device", "Storage Device", "Processing Device", 0, "MP Constable", "2024", "Speaker is an output device that produces audio/sound."],
    ["MS Excel में MAX Function क्या करता है?", "अधिकतम मान बताता है", "न्यूनतम मान बताता है", "औसत निकालता है", "जोड़ता है", 0, "MP ASI Computer", "2024", "MAX function returns the largest value from a set of numbers."],
    ["Worm Virus क्या करता है?", "Network में स्वयं फैलता है", "Computer तेज करता है", "Data backup करता है", "File organize करता है", 0, "SSC CHSL", "2024", "Worm is malware that self-replicates and spreads across networks."],
    ["Ctrl+J shortcut key MS Word में क्या करती है?", "Text Justify", "Join", "Jump", "Job", 0, "MP ASI Computer", "2025", "Ctrl+J justifies text alignment in MS Word."],
    ["GUI का पूरा नाम क्या है?", "Graphical User Interface", "General User Interface", "Global User Interface", "Graphics Unit Interface", 0, "MP ASI Computer", "2023", "GUI stands for Graphical User Interface with visual elements."],
    ["IT Act 2000 किस section में Hacking अपराध है?", "Section 66", "Section 44", "Section 11", "Section 88", 0, "MPPSC Pre", "2024", "Section 66 of IT Act 2000 deals with computer hacking offenses."],
    ["Podcast क्या है?", "Audio/Video Content Series", "एक Hardware", "एक Virus", "एक Software", 0, "SSC CGL", "2025", "Podcast is a series of audio/video episodes available for download."],
    ["MS Excel में MIN Function क्या करता है?", "न्यूनतम मान बताता है", "अधिकतम मान बताता है", "औसत निकालता है", "जोड़ता है", 0, "MP ASI Computer", "2024", "MIN function returns the smallest value from a set of numbers."],
    ["Touchscreen कौन सा Device है?", "Input और Output दोनों", "केवल Input", "केवल Output", "Storage Device", 0, "MP ASI Computer", "2023", "Touchscreen serves as both input (touch) and output (display) device."],
    ["Deep Learning क्या है?", "Neural Network पर आधारित AI", "Surface Learning", "एक Hardware", "एक Virus", 0, "MPPSC Pre", "2025", "Deep Learning uses neural networks with many layers for complex pattern recognition."],
    ["ChatGPT किसने बनाया?", "OpenAI", "Google", "Microsoft", "Apple", 0, "MPPSC Pre", "2025", "ChatGPT was developed by OpenAI and released in November 2022."],
    ["DDoS Attack क्या है?", "Server overload करके crash करना", "Data backup", "Software update", "File transfer", 0, "SSC CHSL", "2025", "DDoS floods a server with traffic to make it unavailable to users."],
    ["SaaS का पूरा नाम क्या है?", "Software as a Service", "System as a Service", "Storage as a Service", "Security as a Service", 0, "SSC CGL", "2025", "SaaS delivers software applications over the internet on subscription basis."],
    ["Quantum Computing क्या है?", "Quantum Physics पर आधारित computing", "Normal Computing", "एक Software", "एक Hardware Device", 0, "MPPSC Pre", "2025", "Quantum Computing uses quantum mechanics principles for exponentially faster processing."],
    ["Edge Computing क्या है?", "Data source के पास processing करना", "Cloud Computing", "Normal Computing", "एक Hardware", 0, "MPPSC Pre", "2025", "Edge Computing processes data near its source for faster response."],
    ["NFT का पूरा नाम क्या है?", "Non-Fungible Token", "New File Type", "Network File Transfer", "Normal Format Type", 0, "MPPSC Pre", "2025", "NFT stands for Non-Fungible Token representing unique digital assets."],
    ["Machine Learning क्या है?", "कंप्यूटर का स्वयं सीखने की क्षमता", "मशीन की मरम्मत", "हार्डवेयर डिजाइन", "कोडिंग", 0, "MPPSC Pre", "2025", "Machine Learning is a subset of AI where computers learn from data without explicit programming."],
    ["Blockchain Technology क्या है?", "विकेंद्रीकृत डिजिटल लेजर", "एक ब्राउज़र", "एक हार्डवेयर", "एक ऑपरेटिंग सिस्टम", 0, "MPPSC Pre", "2025", "Blockchain is a decentralized digital ledger technology used in cryptocurrencies."],
    ["Ransomware क्या है?", "फिरौती मांगने वाला मैलवेयर", "एक ब्राउज़र", "एक ऑपरेटिंग सिस्टम", "एक गेम", 0, "SSC CGL", "2024", "Ransomware encrypts user data and demands payment for decryption."],
    ["Keylogger क्या है?", "Keyboard input record करने वाला malware", "एक Game", "एक Browser", "एक Font", 0, "SSC CHSL", "2025", "Keylogger records keystrokes to steal passwords and sensitive information."],
    ["Two-Factor Authentication क्या है?", "दो चरणों में पहचान सत्यापन", "एक Password", "एक Software", "एक Hardware", 0, "MPPSC Pre", "2024", "2FA requires two different methods of verification for security."],
    ["Dark Web क्या है?", "Internet का छिपा हुआ हिस्सा", "Normal Website", "Social Media", "Email Service", 0, "SSC CGL", "2024", "Dark Web is encrypted internet content not indexed by standard search engines."],
    ["Serverless Computing क्या है?", "Cloud provider server manage करता है", "कोई Server नहीं", "Local Computing", "एक Hardware", 0, "MPPSC Pre", "2025", "Serverless computing lets you run code without managing server infrastructure."],
    ["Adware क्या है?", "Advertisement दिखाने वाला software", "एक Hardware", "एक Browser", "एक Font", 0, "SSC CHSL", "2025", "Adware displays unwanted advertisements and may collect user data."],
    ["Social Engineering Attack क्या है?", "मनोवैज्ञानिक manipulation से जानकारी चुराना", "Social Media", "Software Update", "Hardware Repair", 0, "SSC CGL", "2024", "Social Engineering manipulates people into giving up confidential information."],
    ["Bot क्या है?", "Automated software program", "एक Hardware", "एक Virus", "एक Font", 0, "SSC CGL", "2025", "Bot is an automated program performing tasks without human intervention."],
    ["Digital India Program कब शुरू हुआ?", "1 जुलाई 2015", "15 अगस्त 2014", "26 जनवरी 2016", "2 अक्टूबर 2015", 0, "MPPSC Pre", "2024", "Digital India was launched on 1 July 2015 to transform India digitally."],
    ["Digital Literacy Mission कब शुरू हुआ?", "2017", "2014", "2019", "2020", 0, "MPPSC Pre", "2024", "PMGDISHA was launched in 2017 to make 6 Cr households digitally literate."],
    ["COBOL Programming Language किसके लिए बनाई गई थी?", "Business Applications", "Games", "Graphics", "Music", 0, "SSC CGL", "2023", "COBOL was designed for business data processing applications."],
    ["FORTRAN Programming Language किसके लिए बनाई गई थी?", "Scientific Computing", "Web Development", "Gaming", "Music", 0, "SSC CGL", "2023", "FORTRAN was designed for scientific and engineering computations."],
    ["Java Programming Language किसने बनाई?", "James Gosling", "Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup", 0, "MPPSC Pre", "2024", "Java was created by James Gosling at Sun Microsystems in 1995."],
    ["C Programming Language किसने बनाई?", "Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup", 0, "SSC CGL", "2023", "C was developed by Dennis Ritchie at Bell Labs in 1972."],
    ["C++ Programming Language किसने बनाई?", "Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum", 0, "MPPSC Pre", "2024", "C++ was created by Bjarne Stroustrup as an extension of C language."],
    ["Ruby Programming Language किसने बनाई?", "Yukihiro Matsumoto", "James Gosling", "Dennis Ritchie", "Guido van Rossum", 0, "SSC CHSL", "2024", "Ruby was created by Yukihiro Matsumoto in 1995."],
    ["PHP Programming Language का क्या उपयोग है?", "Web Development", "Game Development", "System Programming", "Database", 0, "MP ASI Computer", "2024", "PHP is a server-side scripting language used for web development."],
    ["JavaScript का उपयोग मुख्यतः कहाँ होता है?", "Web Browser", "System Programming", "Database", "Networking", 0, "MP ASI Computer", "2024", "JavaScript is primarily used for creating interactive web pages."],
    ["SQL Injection Attack क्या है?", "Database में malicious query डालना", "Data Backup", "Software Update", "Normal Query", 0, "SSC CGL", "2025", "SQL Injection inserts malicious SQL code to access or modify database data."],
    ["Cross-Site Scripting (XSS) क्या है?", "Website में malicious script inject करना", "Normal Browsing", "File Download", "Email Send", 0, "SSC CHSL", "2025", "XSS injects malicious scripts into trusted websites to steal user data."],
    ["UPI का पूरा नाम क्या है?", "Unified Payments Interface", "Universal Payment Interface", "United Payment Integration", "Uniform Payment Interface", 0, "MPPSC Pre", "2024", "UPI stands for Unified Payments Interface for instant mobile payments."],
    ["BHIM App किसने launch किया?", "NPCI", "RBI", "SBI", "Google", 0, "MPPSC Pre", "2024", "BHIM was launched by NPCI (National Payments Corporation of India)."],
    ["DigiLocker क्या है?", "डिजिटल दस्तावेज़ storage platform", "एक Game", "एक Browser", "एक Email", 0, "MPPSC Pre", "2025", "DigiLocker is a government digital platform for storing official documents."],
    ["UMANG App क्या है?", "Unified Mobile App for governance", "एक Game", "एक Browser", "एक Social Media", 0, "MPPSC Pre", "2025", "UMANG provides access to government services through a single mobile app."],
    ["GeM Portal क्या है?", "Government e-Marketplace", "एक Game", "एक Social Media", "एक Browser", 0, "MPPSC Pre", "2024", "GeM is Government e-Marketplace for online procurement of goods and services."],
    ["MS Word में Ctrl+Shift+N shortcut क्या करती है?", "Normal Style Apply", "New Document", "Number List", "No Format", 0, "MP ASI Computer", "2025", "Ctrl+Shift+N applies Normal style to the selected text."],
    ["MS Excel में IFERROR Function क्या करता है?", "Error handle करता है", "जोड़ता है", "घटाता है", "गुणा करता है", 0, "MP ASI Computer", "2025", "IFERROR returns a custom value when a formula generates an error."],
    ["MS Excel में INDEX Function क्या करता है?", "Table से specific value return करता है", "जोड़ता है", "औसत निकालता है", "गिनता है", 0, "MP ASI Computer", "2025", "INDEX returns a value from a table based on row and column numbers."],
    ["MS Excel में MATCH Function क्या करता है?", "Value की position बताता है", "Value add करता है", "Value delete करता है", "Chart बनाता है", 0, "MP ASI Computer", "2025", "MATCH searches for a value and returns its relative position."],
    ["MS Word में Ctrl+Shift+C shortcut क्या करती है?", "Formatting Copy", "Content Copy", "Close", "Character Format", 0, "MP ASI Computer", "2024", "Ctrl+Shift+C copies formatting of selected text."],
    ["MS Word में Ctrl+Shift+V shortcut क्या करती है?", "Formatting Paste", "Paste Special", "View", "Voice", 0, "MP ASI Computer", "2024", "Ctrl+Shift+V pastes copied formatting to selected text."],
    ["Aadhaar Technology किस पर based है?", "Biometric System", "Blockchain", "AI", "Cloud", 0, "MPPSC Pre", "2024", "Aadhaar uses biometric technology (fingerprint, iris) for unique identification."],
    ["e-RUPI क्या है?", "Digital Payment Voucher", "एक App", "एक Website", "एक Bank", 0, "MPPSC Pre", "2024", "e-RUPI is a digital payment solution using QR codes and SMS for cashless transactions."],
    ["Open Network for Digital Commerce (ONDC) क्या है?", "Open E-commerce Platform", "एक Bank", "एक App", "एक Game", 0, "MPPSC Pre", "2025", "ONDC democratizes digital commerce by providing open network for all sellers."],
    ["Cyber Suraksha Kendra किसने स्थापित किया?", "Government of India", "Microsoft", "Google", "Apple", 0, "MPPSC Pre", "2024", "Cyber Suraksha Kendra was established to enhance cybersecurity awareness."],
    ["CERT-In क्या है?", "Indian Computer Emergency Response Team", "एक Bank", "एक App", "एक School", 0, "SSC CGL", "2024", "CERT-In handles cybersecurity incidents and provides alerts for Indian cyberspace."],
    ["National Cyber Security Policy कब बनाई गई?", "2013", "2010", "2015", "2020", 0, "SSC CGL", "2024", "India's National Cyber Security Policy was formulated in 2013."]
];
appendToFile('questions/computer_gk.js', computerMore);

// ======= MP GK - 300 more (2023-2025) =======
const mpGkMore = [
    ["MP में 2024 विधानसभा चुनाव में किस पार्टी ने बहुमत प्राप्त किया?", "BJP", "Congress", "AAP", "BSP", 0, "MPPSC Pre", "2025", "BJP won majority in MP assembly elections 2023 with Dr. Mohan Yadav as CM."],
    ["MP के वर्तमान मुख्यमंत्री कौन हैं (2024)?", "डॉ. मोहन यादव", "शिवराज सिंह चौहान", "कमलनाथ", "दिग्विजय सिंह", 0, "MPPSC Pre", "2025", "Dr. Mohan Yadav became CM of MP in December 2023."],
    ["MP में कुल कितने जिले हैं (2024)?", "55", "52", "50", "48", 0, "MP Constable", "2024", "As of 2024, Madhya Pradesh has 55 districts after recent additions."],
    ["केन-बेतवा नदी जोड़ो परियोजना किन राज्यों से संबंधित है?", "MP और UP", "MP और राजस्थान", "MP और महाराष्ट्र", "MP और गुजरात", 0, "MPPSC Pre", "2024", "Ken-Betwa River Link project connects Madhya Pradesh and Uttar Pradesh."],
    ["MP में Smart City Mission में कितने शहर शामिल हैं?", "7", "5", "3", "10", 0, "MPPSC Pre", "2024", "7 cities of MP are included in Smart City Mission - Bhopal, Indore, Jabalpur, Gwalior, Ujjain, Satna, Sagar."],
    ["इंदौर को लगातार कितनी बार सबसे स्वच्छ शहर घोषित किया गया?", "7", "5", "3", "4", 0, "MP Constable", "2024", "Indore won cleanest city award 7 times consecutively in Swachh Survekshan."],
    ["MP का पहला National Park कौन सा है?", "कान्हा", "बांधवगढ़", "पन्ना", "सतपुड़ा", 0, "MPPSC Pre", "2023", "Kanha National Park established in 1955 is the first in MP."],
    ["MP में Tiger Reserve कितने हैं (2024)?", "6", "4", "5", "7", 0, "MP ASI", "2024", "MP has 6 Tiger Reserves: Kanha, Bandhavgarh, Panna, Satpura, Pench, Sanjay."],
    ["MP का सबसे बड़ा जिला क्षेत्रफल में कौन सा है?", "छिंदवाड़ा", "जबलपुर", "सागर", "भोपाल", 0, "MP Constable", "2024", "Chhindwara is the largest district of MP by area."],
    ["भोपाल गैस त्रासदी कब हुई?", "1984", "1982", "1986", "1990", 0, "MPPSC Pre", "2023", "Bhopal Gas Tragedy occurred on 2-3 December 1984 at Union Carbide plant."],
    ["MP में कुल कितने संभाग हैं (2024)?", "10", "8", "12", "14", 0, "MP ASI", "2024", "MP has 10 divisions (Sambhag) as of 2024."],
    ["MP का राजकीय पक्षी कौन सा है?", "दूधराज", "मोर", "गौरैया", "कबूतर", 0, "MP Constable", "2023", "Paradise Flycatcher (Doodhraj) is the state bird of Madhya Pradesh."],
    ["MP का राजकीय वृक्ष कौन सा है?", "बरगद", "नीम", "पीपल", "आम", 0, "MPPSC Pre", "2024", "Banyan tree (Bargad) is the state tree of Madhya Pradesh."],
    ["MP का राजकीय फूल कौन सा है?", "सफेद लिली", "गुलाब", "कमल", "गेंदा", 0, "MP Constable", "2024", "White Lily (Safed Lily) is the state flower of Madhya Pradesh."],
    ["ओंकारेश्वर बांध किस नदी पर है?", "नर्मदा", "चंबल", "बेतवा", "सोन", 0, "MPPSC Pre", "2024", "Omkareshwar Dam is built on the Narmada River in Khandwa district."],
    ["MP का सबसे ऊंचा जलप्रपात कौन सा है?", "चचाई", "धुंआधार", "कपिलधारा", "केवटी", 0, "MPPSC Pre", "2023", "Chachai Falls in Rewa district is the highest waterfall in MP at 130 meters."],
    ["बांधवगढ़ National Park किस जिले में है?", "उमरिया", "जबलपुर", "सतना", "रीवा", 0, "MP ASI", "2024", "Bandhavgarh National Park is located in Umaria district of MP."],
    ["MP में सबसे अधिक वन किस जिले में हैं?", "बालाघाट", "छिंदवाड़ा", "होशंगाबाद", "मंडला", 0, "MPPSC Pre", "2024", "Balaghat district has the maximum forest cover in Madhya Pradesh."],
    ["MP GI Tag प्राप्त उत्पाद बासमती चावल कहाँ का है?", "MP बासमती नहीं है", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "MP is not known for Basmati rice; it has GI tags for Ratlam Ratlami Sev and others."],
    ["MP में Uranium Deposit कहाँ पाया गया?", "दमोह", "भोपाल", "इंदौर", "जबलपुर", 0, "MPPSC Pre", "2025", "Uranium deposits were found in Damoh district of Madhya Pradesh."],
    ["नर्मदा नदी का उद्गम स्थल कहाँ है?", "अमरकंटक", "पचमढ़ी", "भोपाल", "उज्जैन", 0, "MP Constable", "2023", "Narmada River originates from Amarkantak in Anuppur district."],
    ["चंबल नदी का उद्गम स्थल कहाँ है?", "जानापाव पहाड़ी", "अमरकंटक", "पचमढ़ी", "सतपुड़ा", 0, "MPPSC Pre", "2024", "Chambal River originates from Janapav Hills near Mhow in Indore district."],
    ["MP में कुल कितनी लोकसभा सीटें हैं?", "29", "25", "30", "28", 0, "MPPSC Pre", "2024", "Madhya Pradesh has 29 Lok Sabha seats."],
    ["MP में कुल कितनी विधानसभा सीटें हैं?", "230", "200", "250", "220", 0, "MP ASI", "2024", "Madhya Pradesh has 230 Vidhan Sabha constituencies."],
    ["MP में कुल कितनी राज्यसभा सीटें हैं?", "11", "10", "12", "8", 0, "MPPSC Pre", "2023", "Madhya Pradesh has 11 Rajya Sabha seats."],
    ["MP का सबसे गर्म स्थान कौन सा है?", "गंजबासौदा", "भोपाल", "इंदौर", "ग्वालियर", 0, "MP Constable", "2024", "Ganjbasoda in Vidisha district is the hottest place in MP."],
    ["MP की सबसे लंबी नदी कौन सी है?", "नर्मदा", "चंबल", "बेतवा", "सोन", 0, "MPPSC Pre", "2023", "Narmada is the longest river flowing through MP (1312 km total)."],
    ["Ladli Behna Yojana कब शुरू हुई?", "2023", "2022", "2024", "2021", 0, "MPPSC Pre", "2025", "Ladli Behna Yojana was launched on 5 March 2023 in Madhya Pradesh."],
    ["MP में Ladli Behna Yojana में कितनी राशि दी जाती है?", "1250 रुपये प्रति माह", "1000 रुपये प्रति माह", "1500 रुपये प्रति माह", "2000 रुपये प्रति माह", 0, "MP Constable", "2025", "Ladli Behna scheme provides Rs 1250 per month to eligible women."],
    ["MP में Mukhyamantri Sikho Kamao Yojana कब शुरू हुई?", "2023", "2022", "2024", "2021", 0, "MPPSC Pre", "2025", "Mukhyamantri Sikho Kamao Yojana launched in June 2023 for youth skill development."],
    ["MP में कुल कितने UNESCO World Heritage Sites हैं?", "3", "2", "4", "5", 0, "MPPSC Pre", "2024", "MP has 3 UNESCO sites: Sanchi, Bhimbetka, Khajuraho."],
    ["MP में सबसे अधिक जनसंख्या वाला जिला कौन सा है?", "इंदौर", "भोपाल", "जबलपुर", "ग्वालियर", 0, "MP Constable", "2024", "Indore is the most populous district in Madhya Pradesh."],
    ["MP की जनगणना 2011 के अनुसार साक्षरता दर कितनी है?", "70.63%", "80%", "60%", "75%", 0, "MPPSC Pre", "2023", "MP literacy rate as per Census 2011 is 70.63%."],
    ["Khelo India Youth Games 2024 में MP की Ranking क्या रही?", "Top 10 में", "1st", "Last", "शामिल नहीं हुआ", 0, "MPPSC Pre", "2025", "MP performed well in Khelo India Youth Games 2024 securing top 10 position."],
    ["MP में मध्य प्रदेश लोक सेवा आयोग (MPPSC) का मुख्यालय कहाँ है?", "इंदौर", "भोपाल", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2024", "MPPSC headquarters is located in Indore, Madhya Pradesh."],
    ["MP में कर्क रेखा किन जिलों से गुजरती है?", "उज्जैन, राजगढ़, विदिशा, जबलपुर, शहडोल", "भोपाल, इंदौर", "सागर, दमोह", "रीवा, सतना", 0, "MPPSC Pre", "2023", "Tropic of Cancer passes through Ujjain, Rajgarh, Vidisha, Jabalpur, Shahdol districts."],
    ["ताप्ती नदी का उद्गम स्थल कहाँ है?", "मुलताई, बैतूल", "अमरकंटक", "पचमढ़ी", "सतपुड़ा", 0, "MPPSC Pre", "2024", "Tapti River originates from Multai in Betul district."],
    ["MP का सबसे छोटा जिला क्षेत्रफल में कौन सा है?", "दतिया", "निवाड़ी", "भिंड", "मुरैना", 0, "MP Constable", "2024", "Niwari (carved from Tikamgarh in 2018) is the smallest district by area."],
    ["AIIMS भोपाल कब स्थापित हुआ?", "2012", "2010", "2015", "2008", 0, "MPPSC Pre", "2024", "AIIMS Bhopal was established in 2012 as part of PMSSY."],
    ["MP में Atal Express Way कहाँ बन रहा है?", "नागपुर-मुंबई (MP से होकर)", "भोपाल-इंदौर", "जबलपुर-सागर", "ग्वालियर-दतिया", 0, "MPPSC Pre", "2025", "Part of Nagpur-Mumbai Expressway passes through southern MP."],
    ["MP में कुल कितने National Highway गुजरते हैं?", "20 से अधिक", "10", "5", "15", 0, "MP ASI", "2024", "More than 20 National Highways pass through Madhya Pradesh."],
    ["पचमढ़ी को किस नाम से जाना जाता है?", "सतपुड़ा की रानी", "मालवा की रानी", "बुंदेलखंड की रानी", "विंध्य की रानी", 0, "MPPSC Pre", "2023", "Pachmarhi is called Queen of Satpura and is MP's only hill station."],
    ["MP में Diamond Mines कहाँ स्थित हैं?", "पन्ना", "सागर", "छतरपुर", "दमोह", 0, "MP Constable", "2024", "Diamond mines are located in Panna district of Madhya Pradesh."],
    ["MP High Court का मुख्यालय कहाँ है?", "जबलपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Madhya Pradesh High Court's principal bench is in Jabalpur."],
    ["MP में कुल कितनी नगर निगम हैं (2024)?", "16", "10", "12", "20", 0, "MP ASI", "2024", "MP has 16 Municipal Corporations as of 2024."],
    ["Mahakal Lok Corridor कहाँ स्थित है?", "उज्जैन", "भोपाल", "इंदौर", "ओंकारेश्वर", 0, "MPPSC Pre", "2025", "Mahakal Lok Corridor was inaugurated in Ujjain near Mahakaleshwar Temple."],
    ["MP का पहला Solar City कौन सा है?", "भोपाल", "इंदौर", "ग्वालियर", "उज्जैन", 0, "MPPSC Pre", "2024", "Bhopal is the first Solar City of Madhya Pradesh."],
    ["MP में Ethanol Plant कहाँ स्थापित किया गया?", "खरगोन", "इंदौर", "भोपाल", "सागर", 0, "MPPSC Pre", "2025", "Ethanol production plant has been set up in Khargone district."],
    ["MP में PM Kisan Samman Nidhi के लाभार्थी कितने हैं?", "80 लाख से अधिक", "50 लाख", "40 लाख", "30 लाख", 0, "MP Constable", "2024", "Over 80 lakh farmers in MP benefit from PM Kisan Samman Nidhi scheme."],
    ["MP में कुल कितने Engineering Colleges हैं (approx)?", "300 से अधिक", "100", "200", "50", 0, "MP ASI", "2024", "MP has over 300 engineering colleges across the state."]
];
appendToFile('questions/mp_gk.js', mpGkMore);

// Count all files
const files = ['mp_gk.js', 'history_polity.js', 'geo_eco_current.js', 'science_tech.js', 'mixed_gk.js', 'computer_gk.js'];
let total = 0;
for (const f of files) {
    const c = fs.readFileSync('questions/' + f, 'utf8');
    const lines = c.split('\n').filter(l => l.trim().startsWith('['));
    console.log(f + ': ' + lines.length);
    total += lines.length;
}
console.log('Total so far: ' + total);
