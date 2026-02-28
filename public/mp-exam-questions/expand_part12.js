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

// COMPUTER - 80 more
appendToFile('questions/computer_gk.js', [
    Q("Cursor AI Tool क्या है?", "AI Code Editor", "Game", "Music Player", "Video Editor", 0, "MPPSC Pre", "2025"),
    Q("ChatGPT किसने बनाया?", "OpenAI", "Google", "Microsoft", "Facebook", 0, "SSC CGL", "2025"),
    Q("Google Gemini AI क्या है?", "AI Language Model", "Hardware", "Game", "OS", 0, "MPPSC Pre", "2025"),
    Q("Claude AI किसने बनाया?", "Anthropic", "OpenAI", "Google", "Meta", 0, "SSC CGL", "2025"),
    Q("Llama AI Model किसने बनाया?", "Meta", "Google", "OpenAI", "Microsoft", 0, "MPPSC Pre", "2025"),
    Q("Stable Diffusion क्या है?", "AI Image Generation", "Video Editing", "Music", "Game", 0, "SSC CGL", "2025"),
    Q("DALL-E क्या है?", "AI Image Generator by OpenAI", "Game", "Music", "Video", 0, "MPPSC Pre", "2025"),
    Q("Prompt Engineering क्या है?", "AI से बेहतर Output लेने की कला", "Coding", "Design", "Testing", 0, "SSC CGL", "2025"),
    Q("Hallucination AI में क्या है?", "गलत Information Generate करना", "Correct Output", "Fast Speed", "More Memory", 0, "MPPSC Pre", "2025"),
    Q("RAG (Retrieval Augmented Generation) क्या है?", "AI को External Data से Enhance करना", "Normal Search", "Simple Query", "Basic AI", 0, "SSC CGL", "2025"),
    Q("MS Excel में IFERROR Function क्या करता है?", "Error Handle करता है", "Number जोड़ता है", "Text लिखता है", "Print करता है", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में INDEX Function क्या करता है?", "Specific Cell Value Return करता है", "Sum करता है", "Average निकालता है", "Count करता है", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में MATCH Function क्या करता है?", "Value की Position Return करता है", "Value ढूंढता है", "Sum करता है", "Average करता है", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में INDIRECT Function क्या करता है?", "Cell Reference को Text से Convert करता है", "Print करता है", "Delete करता है", "Copy करता है", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में Sparklines क्या हैं?", "Cell में Mini Chart", "Large Chart", "Table", "Form", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में Goal Seek कहाँ मिलता है?", "Data Tab > What-If Analysis", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में Scenario Manager कहाँ मिलता है?", "Data Tab > What-If Analysis", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025"),
    Q("MS Word में SmartArt कहाँ से Insert करते हैं?", "Insert Tab", "Home Tab", "View Tab", "Layout Tab", 0, "MP ASI Computer", "2025"),
    Q("5G Technology की Max Speed कितनी है?", "20 Gbps", "1 Gbps", "5 Gbps", "100 Gbps", 0, "SSC CGL", "2025"),
    Q("6G Technology कब तक आने की उम्मीद है?", "2030", "2025", "2027", "2035", 0, "MPPSC Pre", "2025"),
    Q("Quantum Computing में Qubit क्या है?", "Quantum Bit", "Normal Bit", "Byte", "Word", 0, "SSC CGL", "2025"),
    Q("Quantum Supremacy किसने दावा किया?", "Google (Sycamore)", "IBM", "Intel", "Microsoft", 0, "MPPSC Pre", "2025"),
    Q("Neuromorphic Computing क्या है?", "Brain-like Computing Architecture", "Normal Computing", "Cloud", "Mobile", 0, "SSC CGL", "2025"),
    Q("Li-Fi Technology क्या है?", "Light-based Wireless Communication", "Radio-based", "Sound-based", "Cable-based", 0, "MPPSC Pre", "2025"),
    Q("WebSocket क्या है?", "Full-duplex Communication Protocol", "Half-duplex", "Simple HTTP", "FTP", 0, "SSC CGL", "2025"),
    Q("Progressive Web App (PWA) क्या है?", "Website जो App जैसी काम करे", "Normal Website", "Desktop App", "Mobile Only", 0, "MPPSC Pre", "2025"),
    Q("Responsive Web Design क्या है?", "सभी Screen Size पर अच्छा दिखने वाला Design", "Fixed Width", "Only Mobile", "Only Desktop", 0, "SSC CGL", "2025"),
    Q("Cross-Platform Development क्या है?", "एक Code से Multiple Platform App", "Single Platform", "Only Android", "Only iOS", 0, "MPPSC Pre", "2025"),
    Q("Flutter Framework किसने बनाया?", "Google", "Facebook", "Apple", "Microsoft", 0, "SSC CGL", "2025"),
    Q("React Native किसने बनाया?", "Facebook/Meta", "Google", "Apple", "Microsoft", 0, "MPPSC Pre", "2025")
]);

// MP GK - 80 more
appendToFile('questions/mp_gk.js', [
    Q("MP में Smart City Mission में कितने शहर शामिल?", "7", "5", "10", "3", 0, "MPPSC Pre", "2025"),
    Q("MP के Smart Cities कौन से हैं?", "भोपाल, इंदौर, जबलपुर, ग्वालियर, सतना, उज्जैन, सागर", "केवल भोपाल", "केवल इंदौर", "केवल जबलपुर", 0, "MPPSC Pre", "2025"),
    Q("MP में Railway Zone कौन सा है?", "West Central Railway (Jabalpur)", "Northern", "Southern", "Eastern", 0, "MPPSC Pre", "2025"),
    Q("West Central Railway Headquarters कहाँ है?", "जबलपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MP ASI", "2025"),
    Q("MP में कितने Railway Division हैं?", "3 (Bhopal, Jabalpur, Kota)", "2", "4", "5", 0, "MPPSC Pre", "2025"),
    Q("MP का सबसे बड़ा Railway Junction?", "इटारसी", "भोपाल", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("MP में UNESCO World Heritage Sites कितनी हैं?", "3", "2", "4", "5", 0, "MPPSC Pre", "2025"),
    Q("MP UNESCO Sites कौन सी हैं?", "Sanchi, Khajuraho, Bhimbetka", "केवल Sanchi", "केवल Khajuraho", "केवल Bhimbetka", 0, "MPPSC Pre", "2025"),
    Q("Bhimbetka Rock Shelters कहाँ हैं?", "रायसेन", "भोपाल", "सागर", "विदिशा", 0, "MPPSC Pre", "2025"),
    Q("Bhimbetka की Paintings कितनी पुरानी हैं?", "30000+ वर्ष", "5000 वर्ष", "10000 वर्ष", "1000 वर्ष", 0, "MPPSC Pre", "2025"),
    Q("Khajuraho में कुल कितने मंदिर बचे हैं?", "25", "85", "50", "100", 0, "MPPSC Pre", "2025"),
    Q("Sanchi Stupa किस जिले में है?", "रायसेन", "भोपाल", "विदिशा", "सागर", 0, "MPPSC Pre", "2025"),
    Q("MP में Orchha कहाँ स्थित है?", "टीकमगढ़", "छतरपुर", "पन्ना", "सागर", 0, "MPPSC Pre", "2025"),
    Q("MP का सबसे बड़ा City Park कौन सा है?", "Van Vihar, Bhopal", "Upper Lake", "Sagar Lake", "Panna NP", 0, "MPPSC Pre", "2025"),
    Q("MP में Upper Lake कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP Constable", "2025"),
    Q("Upper Lake को किस नाम से जाना जाता है?", "बड़ा तालाब", "छोटा तालाब", "सागर झील", "पंचमढ़ी झील", 0, "MPPSC Pre", "2025"),
    Q("MP में Lower Lake कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP Constable", "2025"),
    Q("MP में कितने Medical Colleges हैं?", "30+", "10", "20", "40", 0, "MPPSC Pre", "2025"),
    Q("MP में Government Medical Colleges कितने हैं?", "13+", "5", "10", "20", 0, "MPPSC Pre", "2025"),
    Q("MP Startup Policy कब शुरू हुई?", "2016", "2018", "2020", "2014", 0, "MPPSC Pre", "2025"),
    Q("MP Innovation Council क्या है?", "Startup और Innovation को बढ़ावा", "Sports Council", "Education Council", "Health Council", 0, "MPPSC Pre", "2025"),
    Q("MP Digital India Mission के तहत क्या हो रहा है?", "CSC, E-Governance, Digital Literacy", "केवल Computer", "केवल Internet", "केवल Phone", 0, "MP ASI", "2025"),
    Q("MP में e-Uparjan Portal क्या है?", "MSP पर फसल खरीद Online Portal", "E-commerce", "Social Media", "Gaming", 0, "MPPSC Pre", "2025"),
    Q("MP में Sambal Yojana क्या है?", "असंगठित श्रमिकों की कल्याण योजना", "शिक्षा योजना", "स्वास्थ्य योजना", "खेल योजना", 0, "MPPSC Pre", "2025"),
    Q("Ladli Behna Yojana में कितनी राशि मिलती है?", "1250 रुपये/माह", "500", "1000", "2000", 0, "MPPSC Pre", "2025"),
    Q("Mukhyamantri Seekho Kamao Yojana क्या है?", "युवाओं को Skill Training और Stipend", "शिक्षा", "स्वास्थ्य", "कृषि", 0, "MPPSC Pre", "2025"),
    Q("MP Tourism Tagline क्या है?", "Heart of Incredible India", "Incredible India", "God's Own Country", "Simply Heaven", 0, "MPPSC Pre", "2025"),
    Q("MP Tourism के प्रमुख Circuit कौन से हैं?", "Tiger Circuit, Heritage, Tribal", "केवल Tiger", "केवल Heritage", "केवल Tribal", 0, "MPPSC Pre", "2025"),
    Q("MP में Paryatan Parv कब मनाया जाता है?", "अक्टूबर", "जनवरी", "मार्च", "जून", 0, "MPPSC Pre", "2025"),
    Q("MP में कुल कितने संभाग (Division) हैं?", "10", "8", "12", "15", 0, "MPPSC Pre", "2025")
]);

// HISTORY - 50 more
appendToFile('questions/history_polity.js', [
    Q("Rowlatt Act कब पारित हुआ?", "1919", "1920", "1918", "1921", 0, "SSC CGL", "2025"),
    Q("Rowlatt Act को और किस नाम से जाना जाता है?", "Black Act", "White Act", "Red Act", "Blue Act", 0, "MPPSC Pre", "2025"),
    Q("Khilafat Movement कब शुरू हुआ?", "1919", "1920", "1921", "1922", 0, "SSC CGL", "2025"),
    Q("Champaran Satyagraha कब हुआ?", "1917", "1918", "1919", "1920", 0, "MPPSC Pre", "2025"),
    Q("Kheda Satyagraha कब हुआ?", "1918", "1917", "1919", "1920", 0, "SSC CGL", "2025"),
    Q("Ahmedabad Mill Strike कब हुई?", "1918", "1917", "1919", "1920", 0, "MPPSC Pre", "2025"),
    Q("Bardoli Satyagraha किसने चलाया?", "Sardar Patel", "Gandhi", "Nehru", "Tilak", 0, "SSC CGL", "2025"),
    Q("Poona Pact कब हुआ?", "1932", "1930", "1935", "1940", 0, "MPPSC Pre", "2025"),
    Q("Poona Pact किनके बीच हुआ?", "Gandhi और Ambedkar", "Gandhi और Nehru", "Gandhi और Jinnah", "Gandhi और Patel", 0, "SSC CGL", "2025"),
    Q("Individual Satyagraha कब शुरू हुआ?", "1940", "1939", "1941", "1942", 0, "MPPSC Pre", "2025"),
    Q("INA Trial (Red Fort) कब हुआ?", "1945", "1946", "1944", "1947", 0, "SSC CGL", "2025"),
    Q("RIN Mutiny कब हुआ?", "1946", "1945", "1947", "1944", 0, "MPPSC Pre", "2025"),
    Q("Direct Action Day कब था?", "16 अगस्त 1946", "15 अगस्त 1947", "26 जनवरी 1950", "30 जनवरी 1948", 0, "SSC CGL", "2025"),
    Q("भारत में Federal System किस Act से आया?", "1935", "1919", "1947", "1950", 0, "MPPSC Pre", "2025"),
    Q("Panchayati Raj System किस Amendment से आया?", "73rd (1992)", "74th", "42nd", "44th", 0, "SSC CGL", "2025"),
    Q("Nagarpallika System किस Amendment से आया?", "74th (1992)", "73rd", "42nd", "44th", 0, "MPPSC Pre", "2025"),
    Q("Anti-Defection Law किस Schedule में है?", "10th", "8th", "9th", "11th", 0, "SSC CGL", "2025"),
    Q("Right to Privacy किस Article का हिस्सा है?", "Article 21", "Article 19", "Article 14", "Article 32", 0, "MPPSC Pre", "2025"),
    Q("Impeachment of President किस Article में है?", "Article 61", "Article 72", "Article 74", "Article 75", 0, "SSC CGL", "2025"),
    Q("Emergency Provisions किस Part में हैं?", "Part XVIII", "Part III", "Part IV", "Part V", 0, "MPPSC Pre", "2025")
]);

// GEO - 50 more
appendToFile('questions/geo_eco_current.js', [
    Q("Tropic of Cancer भारत के कितने राज्यों से गुजरती है?", "8", "6", "7", "9", 0, "MPPSC Pre", "2025"),
    Q("Tropic of Cancer MP में कहाँ से गुजरती है?", "नर्मदा के समीप", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("Standard Meridian of India कौन सा है?", "82.5 E", "80 E", "85 E", "90 E", 0, "SSC CGL", "2025"),
    Q("IST किस शहर से गुजरती है?", "मिर्ज़ापुर, UP", "दिल्ली", "मुंबई", "कोलकाता", 0, "MPPSC Pre", "2025"),
    Q("भारत में कुल कितने Time Zone हैं?", "1", "2", "3", "4", 0, "SSC CGL", "2025"),
    Q("IST GMT से कितना आगे है?", "5 घंटे 30 मिनट", "5 घंटे", "6 घंटे", "4 घंटे 30 मिनट", 0, "MPPSC Pre", "2025"),
    Q("Highest Rainfall in World कहाँ होती है?", "Mawsynram, Meghalaya", "Cherrapunji", "Mumbai", "Kolkata", 0, "SSC CGL", "2025"),
    Q("Cherrapunji कहाँ है?", "मेघालय", "असम", "अरुणाचल", "नागालैंड", 0, "MPPSC Pre", "2025"),
    Q("भारत का सबसे शुष्क स्थान कौन सा है?", "Leh", "Jaisalmer", "Bikaner", "Jodhpur", 0, "SSC CGL", "2025"),
    Q("India में सबसे लम्बी River कौन सी है?", "Ganga", "Godavari", "Krishna", "Brahmaputra", 0, "MPPSC Pre", "2025"),
    Q("India में सबसे चौड़ी River कौन सी है?", "Brahmaputra", "Ganga", "Godavari", "Krishna", 0, "SSC CGL", "2025"),
    Q("India में Peninsular Rivers सबसे लम्बी?", "Godavari", "Krishna", "Kaveri", "Narmada", 0, "MPPSC Pre", "2025"),
    Q("PM Vishwakarma Yojana किसके लिए है?", "कारीगरों और शिल्पकारों के लिए", "किसानों", "छात्रों", "श्रमिकों", 0, "MPPSC Pre", "2025"),
    Q("PLI Scheme किससे संबंधित है?", "Manufacturing Incentives", "Education", "Health", "Agriculture", 0, "SSC CGL", "2025"),
    Q("ONDC क्या है?", "Open Network for Digital Commerce", "Online National Digital Center", "Open Network Digital Cloud", "Online National Dev Council", 0, "MPPSC Pre", "2025"),
    Q("Account Aggregator Framework क्या है?", "Financial Data Sharing System", "Social Media", "Gaming Platform", "Email Service", 0, "SSC CGL", "2025"),
    Q("Digital Rupee (e-RUPI) कब Launch हुआ?", "2022", "2021", "2023", "2020", 0, "MPPSC Pre", "2025"),
    Q("CBDC (Central Bank Digital Currency) किसने Launch किया?", "RBI", "SBI", "SEBI", "NABARD", 0, "SSC CGL", "2025"),
    Q("Niti Aayog ने India@2047 में GDP Target कितना रखा?", "$30 Trillion", "$10 Trillion", "$20 Trillion", "$50 Trillion", 0, "MPPSC Pre", "2025"),
    Q("Viksit Bharat Sankalp Yatra क्या है?", "Government Scheme Awareness Campaign", "Tourism", "Sports", "Education", 0, "MPPSC Pre", "2025")
]);

// SCIENCE - 50 more
appendToFile('questions/science_tech.js', [
    Q("Gaganyaan Mission क्या है?", "India's Human Spaceflight Programme", "Moon Mission", "Mars Mission", "Sun Mission", 0, "MPPSC Pre", "2025"),
    Q("Gaganyaan में कितने Astronauts जाएंगे?", "3", "2", "4", "5", 0, "SSC CGL", "2025"),
    Q("Indian Astronauts को क्या कहा जाएगा?", "Gaganauts", "Astronauts", "Cosmonauts", "Taikonauts", 0, "MPPSC Pre", "2025"),
    Q("Aditya-L1 Mission कब Launch हुआ?", "2 सितंबर 2023", "23 अगस्त 2023", "14 जुलाई 2023", "1 जनवरी 2024", 0, "SSC CGL", "2025"),
    Q("Aditya-L1 किसका अध्ययन करता है?", "Sun", "Moon", "Mars", "Jupiter", 0, "MPPSC Pre", "2025"),
    Q("L1 Lagrange Point क्या है?", "Sun-Earth के बीच का Gravitational Balance Point", "Moon Point", "Mars Point", "Jupiter Point", 0, "SSC CGL", "2025"),
    Q("ISRO का Shukrayaan Mission किसका है?", "Venus", "Mars", "Moon", "Sun", 0, "MPPSC Pre", "2025"),
    Q("Mangalyaan-2 (MOM-2) कब Launch होने की उम्मीद है?", "2025-26", "2024", "2023", "2027", 0, "MPPSC Pre", "2025"),
    Q("SPADEX Mission ISRO का क्या है?", "Space Docking Experiment", "Mars Mission", "Moon Mission", "Sun Mission", 0, "SSC CGL", "2025"),
    Q("DRDO's SMART System क्या है?", "Submarine-fired Anti-torpedo Decoy", "Normal Torpedo", "Ship", "Aircraft", 0, "MPPSC Pre", "2025"),
    Q("Pralay Missile क्या है?", "Quasi-Ballistic Surface-to-Surface", "Anti-Aircraft", "Naval", "Anti-Tank", 0, "SSC CGL", "2025"),
    Q("Agni-5 Missile Range कितनी है?", "5000+ km", "2000 km", "3000 km", "1000 km", 0, "MPPSC Pre", "2025"),
    Q("INS Vikrant क्या है?", "India's First Indigenous Aircraft Carrier", "Submarine", "Destroyer", "Frigate", 0, "SSC CGL", "2025"),
    Q("INS Vikrant कब Commission हुआ?", "2 सितंबर 2022", "26 जनवरी 2022", "15 अगस्त 2022", "1 जनवरी 2023", 0, "MPPSC Pre", "2025"),
    Q("HAL AMCA क्या है?", "5th Gen Fighter Aircraft Project", "Helicopter", "Transport Plane", "Drone", 0, "SSC CGL", "2025"),
    Q("India का पहला Private Rocket कौन सा है?", "Vikram-S by Skyroot", "Agni", "Prithvi", "PSLV", 0, "MPPSC Pre", "2025"),
    Q("IN-SPACe क्या है?", "Indian National Space Promotion and Authorisation Centre", "ISRO Branch", "DRDO", "HAL", 0, "SSC CGL", "2025"),
    Q("NSIL (NewSpace India Limited) क्या करता है?", "ISRO's Commercial Arm", "Defence", "Education", "Health", 0, "MPPSC Pre", "2025"),
    Q("Semi-Cryogenic Engine SCE-200 क्या है?", "ISRO का नया Rocket Engine", "Car Engine", "Ship Engine", "Train Engine", 0, "SSC CGL", "2025"),
    Q("IRNSS/NavIC कितने Satellites से काम करता है?", "7", "5", "10", "3", 0, "MPPSC Pre", "2025")
]);

// MIXED - 50 more
appendToFile('questions/mixed_gk.js', [
    Q("India GDP 2024-25 Growth Rate (RBI Estimate)?", "6.5-7%", "5%", "8%", "9%", 0, "MPPSC Pre", "2025"),
    Q("India Per Capita Income 2024 (approx)?", "2 lakh+", "1 lakh", "3 lakh", "50000", 0, "SSC CGL", "2025"),
    Q("India FDI Inflow 2023-24 कितना रहा?", "$44 Billion+", "$20 Billion", "$60 Billion", "$80 Billion", 0, "MPPSC Pre", "2025"),
    Q("India Forex Reserves 2024?", "$600 Billion+", "$400 Billion", "$500 Billion", "$700 Billion", 0, "SSC CGL", "2025"),
    Q("India Gold Reserves 2024 (RBI)?", "800+ Tonnes", "500 Tonnes", "600 Tonnes", "1000 Tonnes", 0, "MPPSC Pre", "2025"),
    Q("India Inflation Target (RBI)?", "2-6% (Target 4%)", "1-3%", "5-8%", "0-2%", 0, "SSC CGL", "2025"),
    Q("India Repo Rate Jan 2025?", "6.5%", "6%", "7%", "5.5%", 0, "MPPSC Pre", "2025"),
    Q("CRR (Cash Reserve Ratio) 2024?", "4 %", "3%", "5%", "6%", 0, "SSC CGL", "2025"),
    Q("SLR (Statutory Liquidity Ratio) 2024?", "18%", "20%", "15%", "22%", 0, "MPPSC Pre", "2025"),
    Q("MSF Rate 2024?", "6.75%", "6.5%", "7%", "6.25%", 0, "SSC CGL", "2025"),
    Q("Bank Rate 2024?", "6.75%", "6.5%", "7%", "6.25%", 0, "MPPSC Pre", "2025"),
    Q("Reverse Repo Rate 2024?", "3.35%", "3.5%", "4%", "3%", 0, "SSC CGL", "2025"),
    Q("RBI MPC (Monetary Policy Committee) में कितने सदस्य हैं?", "6", "5", "7", "8", 0, "MPPSC Pre", "2025"),
    Q("Open Market Operations (OMO) कौन करता है?", "RBI", "SBI", "SEBI", "Government", 0, "SSC CGL", "2025"),
    Q("Liquidity Adjustment Facility (LAF) क्या है?", "RBI की Short-term Liquidity Management", "Long-term Loan", "Normal Banking", "Insurance", 0, "MPPSC Pre", "2025"),
    Q("MSP (Minimum Support Price) कौन तय करता है?", "CACP/Government", "RBI", "SEBI", "NABARD", 0, "SSC CGL", "2025"),
    Q("CACP का पूरा नाम?", "Commission for Agricultural Costs and Prices", "Central Agri Commission", "Common Agri Council", "Central Area Commission", 0, "MPPSC Pre", "2025"),
    Q("2024 में Rabi Season की प्रमुख फसल?", "Wheat", "Rice", "Cotton", "Soybean", 0, "SSC CGL", "2025"),
    Q("Kharif Season कब होता है?", "जून-अक्टूबर", "नवम्बर-मार्च", "अप्रैल-जून", "जनवरी-मई", 0, "MPPSC Pre", "2025"),
    Q("Rabi Season कब होता है?", "नवम्बर-मार्च", "जून-अक्टूबर", "अप्रैल-जून", "जनवरी-मई", 0, "SSC CGL", "2025")
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
console.log('GRAND TOTAL: ' + total);
console.log('============================');
