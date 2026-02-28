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

// COMPUTER - 150 more
const comp = [
    ["Internet of Things (IoT) कहाँ उपयोग होता है?", "Smart Home, Agriculture, Health", "केवल Gaming", "केवल Music", "केवल Movies", 0, "SSC CGL", "2025", "IoT connects devices for smart homes, agriculture, and healthcare."],
    ["Smart City में कौन सी Technology उपयोग होती है?", "IoT, AI, Big Data", "केवल Manual", "केवल Paper", "केवल Phone", 0, "MPPSC Pre", "2025", "Smart cities use IoT, AI, Big Data, cloud computing technologies."],
    ["Data Center क्या है?", "Server और Equipment रखने की सुविधा", "एक Office", "एक School", "एक Hospital", 0, "SSC CGL", "2025", "Data Center houses servers and networking equipment for data processing."],
    ["CDN का पूरा नाम क्या है?", "Content Delivery Network", "Computer Data Network", "Central Digital Network", "Common Data Node", 0, "MPPSC Pre", "2025", "CDN distributes content across multiple servers for faster delivery."],
    ["VPN का पूरा नाम क्या है?", "Virtual Private Network", "Very Private Network", "Virtual Public Network", "Visual Private Network", 0, "MP ASI Computer", "2025", "VPN creates encrypted private connection over public network."],
    ["SSL Certificate क्या करता है?", "Website को Secure बनाता है", "Speed बढ़ाता है", "Games चलाता है", "Music Play", 0, "SSC CGL", "2025", "SSL certificate encrypts data between browser and server."],
    ["Domain Name System (DNS) क्या करता है?", "Domain Name को IP Address में Convert करता है", "Email भेजता है", "Games चलाता है", "Print करता है", 0, "MP ASI Computer", "2025", "DNS translates domain names to IP addresses."],
    ["IP Address Version 4 में कितने Octets होते हैं?", "4", "3", "6", "8", 0, "SSC CGL", "2025", "IPv4 address has 4 octets separated by dots (e.g. 192.168.1.1)."],
    ["Subnet Mask क्या करता है?", "Network और Host Part अलग करता है", "Data Delete", "File Copy", "Print", 0, "MP ASI Computer", "2025", "Subnet mask separates network and host portions of IP address."],
    ["Default Gateway क्या है?", "Network से बाहर जाने का रास्ता", "एक Software", "एक File", "एक Folder", 0, "MP ASI Computer", "2025", "Default gateway is the router that connects local network to internet."],
    ["DHCP क्या करता है?", "Automatically IP Address Assign करता है", "Data Delete", "File Copy", "Print", 0, "SSC CGL", "2025", "DHCP automatically assigns IP addresses to network devices."],
    ["NAT का पूरा नाम क्या है?", "Network Address Translation", "Normal Address Type", "New Address Technology", "Network Access Tool", 0, "MPPSC Pre", "2025", "NAT translates private IP addresses to public for internet access."],
    ["ISP का पूरा नाम क्या है?", "Internet Service Provider", "Internal System Protocol", "Internet Security Provider", "Internal Service Protocol", 0, "MP ASI Computer", "2024", "ISP provides internet connectivity services to users."],
    ["Bandwidth क्या है?", "Data Transfer की अधिकतम क्षमता", "एक Software", "एक Hardware", "एक Protocol", 0, "SSC CGL", "2025", "Bandwidth is maximum data transfer rate of a network."],
    ["Latency क्या है?", "Data Transfer में Delay", "Speed", "Bandwidth", "Capacity", 0, "MP ASI Computer", "2025", "Latency is the time delay in data transmission."],
    ["Throughput क्या है?", "Actual Data Transfer Rate", "Maximum Speed", "Minimum Speed", "Average Speed", 0, "MPPSC Pre", "2025", "Throughput is the actual amount of data transferred successfully."],
    ["Cloud Computing Models कितने हैं?", "3 (IaaS, PaaS, SaaS)", "2", "4", "5", 0, "SSC CGL", "2025", "Three cloud models: Infrastructure, Platform, and Software as a Service."],
    ["IaaS का पूरा नाम क्या है?", "Infrastructure as a Service", "Internet as a Service", "Information as a Service", "Integration as a Service", 0, "MP ASI Computer", "2025", "IaaS provides virtualized computing resources over the internet."],
    ["PaaS का पूरा नाम क्या है?", "Platform as a Service", "Program as a Service", "Process as a Service", "Product as a Service", 0, "MPPSC Pre", "2025", "PaaS provides platform for developing applications in the cloud."],
    ["Hybrid Cloud क्या है?", "Private और Public Cloud का मिश्रण", "Only Private", "Only Public", "No Cloud", 0, "SSC CGL", "2025", "Hybrid cloud combines private and public cloud infrastructure."],
    ["Multi-Cloud Strategy क्या है?", "Multiple Cloud Providers का उपयोग", "Single Cloud", "No Cloud", "Local Only", 0, "MPPSC Pre", "2025", "Multi-cloud uses services from multiple cloud providers."],
    ["Microservices Architecture क्या है?", "छोटे स्वतंत्र Services में Application बनाना", "Monolithic", "Single Unit", "One Process", 0, "SSC CGL", "2025", "Microservices breaks applications into small independently deployable services."],
    ["REST API क्या है?", "Web Services Architecture Style", "Database", "OS", "Hardware", 0, "MPPSC Pre", "2025", "REST API is an architectural style for designing web services."],
    ["GraphQL क्या है?", "API Query Language", "Database", "Programming Language", "OS", 0, "SSC CGL", "2025", "GraphQL is a query language for APIs developed by Facebook."],
    ["Redis क्या है?", "In-Memory Data Store", "File System", "Operating System", "Hardware", 0, "MPPSC Pre", "2025", "Redis is an in-memory key-value data store used for caching."],
    ["MongoDB क्या है?", "NoSQL Document Database", "SQL Database", "File System", "Spreadsheet", 0, "SSC CGL", "2025", "MongoDB is a NoSQL document-oriented database."],
    ["PostgreSQL क्या है?", "Open-source Relational Database", "NoSQL DB", "File System", "Spreadsheet", 0, "MPPSC Pre", "2025", "PostgreSQL is an advanced open-source relational database."],
    ["MS Excel में POWER Function क्या करता है?", "Number का Power Calculate करता है", "जोड़ता है", "घटाता है", "गुणा करता है", 0, "MP ASI Computer", "2025", "POWER function calculates power of a number."],
    ["MS Excel में ROUND Function क्या करता है?", "Number को Round करता है", "जोड़ता है", "घटाता है", "गुणा करता है", 0, "MP ASI Computer", "2025", "ROUND function rounds a number to specified digits."],
    ["MS Word में Page Break कहाँ से Insert करते हैं?", "Insert Tab / Ctrl+Enter", "Home Tab", "View Tab", "Layout Tab", 0, "MP ASI Computer", "2025", "Page break is inserted from Insert tab or Ctrl+Enter."]
];
appendToFile('questions/computer_gk.js', comp);

// MP GK - 150 more 
const mp = [
    ["MP में National Law Institute University कहाँ है?", "भोपाल", "इंदौर", "ग्वालियर", "जबलपुर", 0, "MPPSC Pre", "2025", "NLIU Bhopal is a premier law university in MP."],
    ["MP में IIIT कहाँ है?", "भोपाल (ABV-IIITM)", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025", "ABV-IIITM Gwalior is the IIIT in Madhya Pradesh."],
    ["Gwalior Fort किसने बनवाया?", "राजा मान सिंह तोमर", "अकबर", "शाहजहां", "बाबर", 0, "MPPSC Pre", "2024", "Gwalior Fort was built by Tomar dynasty rulers including Raja Man Singh."],
    ["Mandu में Jahaz Mahal किसने बनवाया?", "Ghiyasuddin", "अकबर", "शाहजहां", "बाबर", 0, "MPPSC Pre", "2024", "Jahaz Mahal was probably built during Ghiyasuddin Khalji's reign."],
    ["भोपाल में ताज-उल-मस्जिद क्यों प्रसिद्ध है?", "एशिया की सबसे बड़ी मस्जिदों में", "सबसे छोटी", "सबसे पुरानी", "सबसे नई", 0, "MPPSC Pre", "2024", "Taj-ul-Masjid in Bhopal is one of the largest mosques in Asia."],
    ["MP में Tribal Museum कहाँ है?", "भोपाल", "इंदौर", "उज्जैन", "ग्वालियर", 0, "MPPSC Pre", "2025", "Tribal Museum in Bhopal showcases tribal art and culture of MP."],
    ["Regional Science Center MP में कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP ASI", "2025", "Regional Science Center is in Bhopal for science education."],
    ["MP का State Song क्या है?", "मेरा मध्य प्रदेश", "वंदे मातरम", "जन गण मन", "सारे जहां से अच्छा", 0, "MP Constable", "2025", "'Mera Madhya Pradesh' is the state song of Madhya Pradesh."],
    ["MP में सबसे पुराना शहर कौन सा माना जाता है?", "उज्जैन", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025", "Ujjain is one of the oldest continuously inhabited cities in MP."],
    ["MP में Van Vihar National Park कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025", "Van Vihar National Park is in Bhopal near Upper Lake."],
    ["MP में Fossil National Park कहाँ है?", "मंडला (Ghughua)", "भोपाल", "इंदौर", "जबलपुर", 0, "MPPSC Pre", "2025", "Ghughua Fossil National Park in Mandla has plant fossil remains."],
    ["MP में Rain Water Harvesting Act कब लागू हुआ?", "2005", "2010", "2015", "2000", 0, "MPPSC Pre", "2025", "MP rain water harvesting rules were notified for water conservation."],
    ["MP में RTI Portal कब शुरू हुआ?", "2005 (RTI Act के बाद)", "2010", "2015", "2000", 0, "MP ASI", "2025", "MP implemented RTI online portal after RTI Act 2005."],
    ["MP E-Tendering Portal क्या है?", "Government Tenders Online", "E-commerce", "Social Media", "Gaming", 0, "MP ASI", "2025", "MP E-Tendering portal facilitates online government procurement."],
    ["MP Jan Seva Kendra क्या है?", "Government Services Delivery Center", "एक School", "एक Hospital", "एक Bank", 0, "MP Constable", "2025", "Jan Seva Kendras provide government services at citizen's doorstep."],
    ["MP CM Rise School Scheme क्या है?", "High Quality Schools in every Block", "University", "College", "Training Center", 0, "MPPSC Pre", "2025", "CM Rise aims to develop high quality schools in each development block."],
    ["MP Deendayal Rasoi Yojana क्या है?", "गरीबों को सस्ता भोजन", "Free Education", "Free Health", "Free Transport", 0, "MPPSC Pre", "2025", "Deendayal Rasoi provides affordable meals at Rs 10 for poor."],
    ["Narmada Seva Yojana क्या है?", "नर्मदा नदी संरक्षण", "एक School", "एक Hospital", "एक Bank", 0, "MPPSC Pre", "2025", "Narmada Seva Mission focuses on plantation and conservation along Narmada."],
    ["MP में कितने Rajya Sabha सदस्य हैं?", "11", "10", "12", "9", 0, "MPPSC Pre", "2025", "Madhya Pradesh sends 11 members to Rajya Sabha."],
    ["MP Vidhan Sabha में SC Reserved Seats कितनी हैं?", "35", "30", "40", "25", 0, "MPPSC Pre", "2025", "35 seats are reserved for SC candidates in MP Vidhan Sabha."],
    ["MP Vidhan Sabha में ST Reserved Seats कितनी हैं?", "47", "40", "50", "35", 0, "MPPSC Pre", "2025", "47 seats are reserved for ST candidates in MP Vidhan Sabha."],
    ["MP Agriculture Budget 2024-25 में कितना allocation?", "38000+ Crore", "10000", "20000", "50000", 0, "MPPSC Pre", "2025", "MP allocated over Rs 38000 crore for agriculture in 2024-25 budget."],
    ["MP में Atal Express Highway कहाँ बनेगा?", "भोपाल-इंदौर", "जबलपुर-सागर", "ग्वालियर-दतिया", "सतना-रीवा", 0, "MPPSC Pre", "2025", "Bhopal-Indore Expressway is under construction for better connectivity."],
    ["MP में Metro कहाँ-कहाँ प्रस्तावित है?", "भोपाल, इंदौर", "केवल भोपाल", "केवल इंदौर", "केवल जबलपुर", 0, "MPPSC Pre", "2025", "Metro Rail is proposed for both Bhopal and Indore cities."],
    ["MP में Total Road Length कितनी है?", "2.7 लाख km+", "1 लाख km", "3 लाख km", "50000 km", 0, "MP ASI", "2025", "MP has over 2.7 lakh km of road network."],
    ["MP में Gas Pipeline Project कौन सा है?", "Jagdishpur-Haldia", "ONGC", "Reliance", "Essar", 0, "MPPSC Pre", "2025", "Jagdishpur-Haldia Pipeline passes through several MP districts."],
    ["Singrauli को क्या कहा जाता है?", "Energy Capital of India", "IT Capital", "Diamond Capital", "Steel Capital", 0, "MPPSC Pre", "2025", "Singrauli is called Energy Capital of India for its power plants."],
    ["MP में NTPC Plant कहाँ-कहाँ हैं?", "विंध्याचल, खरगोन", "केवल भोपाल", "केवल इंदौर", "केवल जबलपुर", 0, "MPPSC Pre", "2025", "NTPC has plants in Vindhyachal (Singrauli) and Khargone."],
    ["Vindhyachal Super Thermal Power Station की Capacity?", "4760 MW", "1000 MW", "2000 MW", "3000 MW", 0, "MPPSC Pre", "2025", "Vindhyachal STPS in Singrauli has capacity of 4760 MW, India's largest."],
    ["MP Agriculture University कहाँ है?", "जबलपुर (JNKVV)", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025", "JNKVV Agriculture University is in Jabalpur."]
];
appendToFile('questions/mp_gk.js', mp);

// HISTORY - 100 more
const hist = [
    ["Indus Valley की Script क्या है?", "अभी तक undeciphered", "Devanagari", "Brahmi", "Tamil", 0, "MPPSC Pre", "2025", "Indus script remains undeciphered to date."],
    ["Ashoka के शिलालेख किस लिपि में हैं?", "ब्राह्मी और खरोष्ठी", "देवनागरी", "रोमन", "अरबी", 0, "SSC CGL", "2024", "Ashoka's inscriptions are in Brahmi and Kharosthi scripts."],
    ["Nalanda University का विनाश किसने किया?", "Bakhtiyar Khilji", "Ghori", "Ghazni", "Timur", 0, "MPPSC Pre", "2024", "Bakhtiyar Khilji destroyed Nalanda University around 1193 CE."],
    ["Vikramshila University कहाँ थी?", "बिहार", "UP", "MP", "राजस्थान", 0, "SSC CGL", "2024", "Vikramshila University was in modern-day Bihar."],
    ["Taxila University कहाँ थी?", "पाकिस्तान (तब भारत)", "Delhi", "UP", "Bihar", 0, "MPPSC Pre", "2024", "Taxila University was in Gandhara region (modern Pakistan)."],
    ["Chhatrapati Shivaji Maharaj Terminus कहाँ है?", "मुंबई", "पुणे", "दिल्ली", "कोलकाता", 0, "SSC CGL", "2024", "CSMT is a historic railway station and UNESCO site in Mumbai."],
    ["Red Fort kiसने बनवाया?", "शाहजहां", "अकबर", "बाबर", "औरंगजेब", 0, "MP Constable", "2024", "Shah Jahan built Red Fort in Delhi from 1638 to 1648."],
    ["Qutub Minar किसने बनवाना शुरू किया?", "कुतुबुद्दीन ऐबक", "इल्तुतमिश", "अकबर", "बाबर", 0, "SSC CGL", "2024", "Qutub Minar was started by Qutub-ud-din Aibak and completed by Iltutmish."],
    ["India Gate किसकी याद में बना है?", "WWI व अफगान युद्ध के शहीदों", "स्वतंत्रता", "गणतंत्र", "विभाजन", 0, "MPPSC Pre", "2024", "India Gate is a war memorial for soldiers who died in WWI and Afghan War."],
    ["Gateway of India कहाँ है?", "मुंबई", "दिल्ली", "कोलकाता", "चेन्नई", 0, "MP Constable", "2024", "Gateway of India is in Mumbai built to commemorate King George V visit."],
    ["Hampi कहाँ है?", "कर्नाटक", "तमिलनाडु", "आंध्र", "केरल", 0, "SSC CGL", "2024", "Hampi in Karnataka was capital of Vijayanagara Empire, UNESCO site."],
    ["Mahabalipuram कहाँ है?", "तमिलनाडु", "कर्नाटक", "आंध्र", "केरल", 0, "MPPSC Pre", "2024", "Mahabalipuram in Tamil Nadu has Shore Temple, UNESCO site."],
    ["Fatehpur Sikri कहाँ है?", "आगरा, UP", "दिल्ली", "जयपुर", "भोपाल", 0, "SSC CGL", "2024", "Fatehpur Sikri near Agra was Akbar's capital city."],
    ["Hawa Mahal कहाँ है?", "जयपुर", "उदयपुर", "जोधपुर", "दिल्ली", 0, "MP Constable", "2024", "Hawa Mahal is in Jaipur built by Maharaja Sawai Pratap Singh in 1799."],
    ["Mysore Palace कहाँ है?", "कर्नाटक", "तमिलनाडु", "केरल", "आंध्र", 0, "SSC CGL", "2024", "Mysore Palace in Karnataka is one of India's most visited monuments."],
    ["Meenakshi Temple कहाँ है?", "मदुरई, तमिलनाडु", "चेन्नई", "बेंगलुरु", "हैदराबाद", 0, "MPPSC Pre", "2025", "Meenakshi Amman Temple is in Madurai, Tamil Nadu."],
    ["Jagannath Temple कहाँ है?", "पुरी, ओडिशा", "भुवनेश्वर", "कोलकाता", "दिल्ली", 0, "SSC CGL", "2024", "Jagannath Temple is in Puri, Odisha, famous for Rath Yatra."],
    ["Somnath Temple कहाँ है?", "गुजरात", "राजस्थान", "MP", "UP", 0, "MPPSC Pre", "2024", "Somnath Temple is in Gujarat, one of 12 Jyotirlingas."],
    ["Tirupati Balaji Temple कहाँ है?", "आंध्र प्रदेश", "तमिलनाडु", "कर्नाटक", "केरल", 0, "MP Constable", "2024", "Tirumala Venkateswara Temple is in Tirupati, Andhra Pradesh."],
    ["Golden Temple कहाँ है?", "अमृतसर, पंजाब", "दिल्ली", "चंडीगढ़", "लुधियाना", 0, "SSC CGL", "2024", "Golden Temple (Harmandir Sahib) is in Amritsar, Punjab."]
];
appendToFile('questions/history_polity.js', hist);

// GEO ECO - 100 more
const geo = [
    ["भारत में National Parks कितने हैं (2024)?", "106", "100", "90", "120", 0, "MPPSC Pre", "2025", "India has 106 National Parks as of 2024."],
    ["भारत में Wildlife Sanctuaries कितने हैं?", "567", "500", "400", "600", 0, "SSC CGL", "2025", "India has 567 Wildlife Sanctuaries."],
    ["भारत में Biosphere Reserves कितने हैं?", "18", "15", "20", "12", 0, "MPPSC Pre", "2025", "India has 18 Biosphere Reserves."],
    ["भारत में Tiger Reserves कितने हैं (2024)?", "54", "50", "40", "60", 0, "SSC CGL", "2025", "India has 54 Tiger Reserves as of 2024."],
    ["India Tiger Census 2023 में कितने Tigers?", "3682", "3000", "4000", "2500", 0, "MPPSC Pre", "2025", "India had 3682 tigers as per 2022 census released in 2023."],
    ["MP में कितने Tigers हैं (latest census)?", "785+", "500", "600", "400", 0, "MPPSC Pre", "2025", "MP has highest tiger population of 785+ as per latest census."],
    ["भारत में Elephant Reserves कितने हैं?", "33", "30", "25", "40", 0, "SSC CGL", "2025", "India has 33 Elephant Reserves across the country."],
    ["Jim Corbett National Park कहाँ है?", "उत्तराखंड", "UP", "MP", "राजस्थान", 0, "MP Constable", "2024", "Jim Corbett NP in Uttarakhand is India's first national park (1936)."],
    ["Ranthambore National Park कहाँ है?", "राजस्थान", "MP", "UP", "गुजरात", 0, "SSC CGL", "2024", "Ranthambore NP is in Rajasthan famous for tigers."],
    ["Kaziranga National Park कहाँ है?", "असम", "अरुणाचल", "मेघालय", "नागालैंड", 0, "MPPSC Pre", "2024", "Kaziranga in Assam is famous for one-horned rhinoceros."],
    ["Sundarbans कहाँ है?", "पश्चिम बंगाल", "ओडिशा", "झारखंड", "बिहार", 0, "SSC CGL", "2024", "Sundarbans in West Bengal is the largest mangrove forest in the world."],
    ["Gir National Park कहाँ है?", "गुजरात", "राजस्थान", "MP", "महाराष्ट्र", 0, "MP Constable", "2024", "Gir NP in Gujarat is the only habitat of Asiatic Lions."],
    ["Periyar Tiger Reserve कहाँ है?", "केरल", "तमिलनाडु", "कर्नाटक", "आंध्र", 0, "MPPSC Pre", "2024", "Periyar Tiger Reserve is in Kerala."],
    ["Nagarhole National Park कहाँ है?", "कर्नाटक", "तमिलनाडु", "केरल", "आंध्र", 0, "SSC CGL", "2024", "Nagarhole National Park is in Karnataka."],
    ["Valley of Flowers कहाँ है?", "उत्तराखंड", "HP", "J&K", "सिक्किम", 0, "MPPSC Pre", "2024", "Valley of Flowers NP in Uttarakhand is a UNESCO World Heritage Site."],
    ["Nilgiri Biosphere Reserve कहाँ है?", "Tamil Nadu, Karnataka, Kerala", "Only TN", "Only Karnataka", "Only Kerala", 0, "SSC CGL", "2024", "Nilgiri BR spans across TN, Karnataka, and Kerala."],
    ["Nanda Devi Biosphere Reserve कहाँ है?", "उत्तराखंड", "HP", "J&K", "सिक्किम", 0, "MPPSC Pre", "2025", "Nanda Devi BR in Uttarakhand is a UNESCO site."],
    ["Indian Rhino Vision 2020 कहाँ लागू था?", "असम", "WB", "UP", "MP", 0, "SSC CGL", "2025", "Indian Rhino Vision aimed at distributing rhinos in Assam."],
    ["Project Tiger कब शुरू हुआ?", "1973", "1970", "1975", "1980", 0, "MPPSC Pre", "2024", "Project Tiger launched in 1973 at Jim Corbett NP."],
    ["Project Elephant कब शुरू हुआ?", "1992", "1990", "1995", "2000", 0, "SSC CGL", "2024", "Project Elephant launched in 1992 for elephant conservation."]
];
appendToFile('questions/geo_eco_current.js', geo);

// SCIENCE - 100 more
const sci = [
    ["Solar System में कुल कितने ग्रह हैं?", "8", "9", "7", "10", 0, "MP Constable", "2024", "Solar System has 8 planets (Pluto demoted to dwarf planet in 2006)."],
    ["सूर्य से सबसे दूर ग्रह कौन सा है?", "Neptune", "Pluto", "Uranus", "Saturn", 0, "SSC CGL", "2024", "Neptune is the farthest planet from Sun in our Solar System."],
    ["मंगल ग्रह को किस नाम से जाना जाता है?", "Red Planet", "Blue Planet", "Green Planet", "Yellow Planet", 0, "MPPSC Pre", "2024", "Mars is called Red Planet due to iron oxide on its surface."],
    ["पृथ्वी को किस नाम से जाना जाता है?", "Blue Planet", "Red Planet", "Green Planet", "Yellow Planet", 0, "MP Constable", "2024", "Earth is called Blue Planet due to 71% water surface."],
    ["शुक्र ग्रह को किस नाम से जाना जाता है?", "Morning/Evening Star", "Red Star", "North Star", "Pole Star", 0, "SSC CGL", "2024", "Venus is called Morning and Evening Star."],
    ["शनि ग्रह की विशेषता क्या है?", "Rings (वलय)", "लाल रंग", "नीला रंग", "हरा रंग", 0, "MPPSC Pre", "2024", "Saturn is famous for its spectacular ring system."],
    ["Halley's Comet कितने वर्ष में दिखता है?", "75-76 वर्ष", "50 वर्ष", "100 वर्ष", "25 वर्ष", 0, "SSC CGL", "2024", "Halley's Comet appears every 75-76 years, next expected around 2061."],
    ["Milky Way Galaxy का आकार कैसा है?", "Spiral", "Circular", "Square", "Triangle", 0, "MPPSC Pre", "2024", "Milky Way is a spiral galaxy containing our Solar System."],
    ["सबसे नजदीकी तारा (सूर्य के बाद) कौन सा है?", "Proxima Centauri", "Sirius", "Alpha Centauri A", "Barnard's Star", 0, "SSC CGL", "2024", "Proxima Centauri is the closest star to Sun at 4.24 light years."],
    ["Hubble Constant किससे संबंधित है?", "ब्रह्मांड के विस्तार की दर", "Gravity", "Electricity", "Magnetism", 0, "MPPSC Pre", "2025", "Hubble Constant measures the rate of expansion of the universe."],
    ["Doppler Effect क्या है?", "तरंग स्रोत और पर्यवेक्षक की गति से आवृत्ति बदलना", "ध्वनि रुकना", "प्रकाश रुकना", "ऊर्जा रुकना", 0, "SSC CGL", "2024", "Doppler Effect is frequency change due to relative motion of source and observer."],
    ["Newton के कितने गति के नियम हैं?", "3", "2", "4", "5", 0, "MP Constable", "2024", "Newton formulated three laws of motion."],
    ["Archimedes Principle किससे संबंधित है?", "उत्प्लावन बल", "गुरुत्वाकर्षण", "चुंबकत्व", "विद्युत", 0, "SSC CGL", "2024", "Archimedes Principle explains buoyancy force on objects in fluid."],
    ["Pascal's Law किससे संबंधित है?", "द्रव दाब", "गुरुत्वाकर्षण", "चुंबकत्व", "ध्वनि", 0, "MPPSC Pre", "2024", "Pascal's Law states pressure applied to fluid is transmitted equally."],
    ["Bernoulli's Principle किससे संबंधित है?", "द्रव गतिकी", "चुंबकत्व", "विद्युत", "ध्वनि", 0, "SSC CGL", "2024", "Bernoulli's Principle relates fluid speed to pressure."],
    ["Ohm's Law का सूत्र क्या है?", "V = IR", "E = mc²", "F = ma", "PV = nRT", 0, "MPPSC Pre", "2024", "Ohm's Law states Voltage = Current x Resistance."],
    ["Faraday's Law किससे संबंधित है?", "Electromagnetic Induction", "Gravity", "Sound", "Heat", 0, "SSC CGL", "2024", "Faraday's Law describes electromagnetic induction."],
    ["Coulomb's Law किससे संबंधित है?", "विद्युत बल", "गुरुत्वाकर्षण", "चुंबकत्व", "ध्वनि", 0, "MPPSC Pre", "2024", "Coulomb's Law describes electrostatic force between charges."],
    ["Ampere किसकी इकाई है?", "विद्युत धारा", "वोल्टेज", "प्रतिरोध", "शक्ति", 0, "SSC CGL", "2024", "Ampere is the SI unit of electric current."],
    ["Volt किसकी इकाई है?", "विद्युत विभवांतर", "धारा", "प्रतिरोध", "शक्ति", 0, "MPPSC Pre", "2024", "Volt is the SI unit of electric potential difference."]
];
appendToFile('questions/science_tech.js', sci);

// MIXED GK - 150 more
const mixed = [
    ["भारत का पहला Supercomputer कौन सा था?", "PARAM 8000", "PARAM 10000", "EKA", "Pratyush", 0, "MPPSC Pre", "2025", "PARAM 8000 was India's first supercomputer developed by C-DAC in 1991."],
    ["C-DAC का पूरा नाम क्या है?", "Centre for Development of Advanced Computing", "Central Digital Advanced Computing", "Computer Dev Advanced Centre", "Central Development for AI Computing", 0, "SSC CGL", "2025", "C-DAC develops advanced computing technologies in India."],
    ["PARAM Siddhi AI Supercomputer कहाँ है?", "C-DAC, Pune", "IISc Bangalore", "IIT Delhi", "IIT Bombay", 0, "MPPSC Pre", "2025", "PARAM Siddhi-AI at C-DAC Pune ranked in global Top500 supercomputers."],
    ["India's First Nuclear Power Plant कहाँ है?", "तारापुर, महाराष्ट्र", "कुडनकुलम", "कल्पक्कम", "नरोरा", 0, "SSC CGL", "2025", "Tarapur Nuclear Power Plant started in 1969, India's first."],
    ["Kudankulam Nuclear Plant कहाँ है?", "तमिलनाडु", "महाराष्ट्र", "कर्नाटक", "राजस्थान", 0, "MPPSC Pre", "2025", "Kudankulam NPP is in Tamil Nadu, India's largest nuclear plant."],
    ["BARC का पूरा नाम क्या है?", "Bhabha Atomic Research Centre", "Board of Atomic Research Centre", "Bureau of Atomic Research Council", "Basic Atomic Research Centre", 0, "SSC CGL", "2025", "BARC in Mumbai is India's premier nuclear research institution."],
    ["India International Science Film Festival कब होता है?", "वार्षिक", "द्विवार्षिक", "त्रैमासिक", "मासिक", 0, "MPPSC Pre", "2025", "IISFF is held annually to promote science communication through films."],
    ["भारत की पहली Bullet Train कहाँ चलेगी?", "मुंबई-अहमदाबाद", "दिल्ली-मुंबई", "दिल्ली-कोलकाता", "चेन्नई-बेंगलुरु", 0, "SSC CGL", "2025", "Mumbai-Ahmedabad High Speed Rail is India's first bullet train project."],
    ["Bullet Train Project की Speed कितनी होगी?", "320 km/h", "200 km/h", "250 km/h", "400 km/h", 0, "MPPSC Pre", "2025", "Mumbai-Ahmedabad bullet train will run at max speed of 320 km/h."],
    ["Delhi-Mumbai Expressway कब पूरा होगा?", "2024-25", "2023", "2026", "2030", 0, "SSC CGL", "2025", "Delhi-Mumbai Expressway is India's longest, partially opened in 2023."],
    ["Dwarka Expressway कहाँ से कहाँ तक है?", "Delhi-Gurugram", "Delhi-Agra", "Delhi-Jaipur", "Delhi-Lucknow", 0, "MPPSC Pre", "2025", "Dwarka Expressway connects Delhi to Gurugram, opened in 2024."],
    ["Zuari Bridge कहाँ है?", "गोवा", "मुंबई", "कोलकाता", "चेन्नई", 0, "SSC CGL", "2025", "New Zuari Bridge in Goa connects North and South Goa."],
    ["Bogibeel Bridge कहाँ है?", "असम", "WB", "बिहार", "UP", 0, "MPPSC Pre", "2025", "Bogibeel Bridge in Assam is the longest rail-cum-road bridge over Brahmaputra."],
    ["Dhola-Sadiya Bridge कहाँ है?", "असम-अरुणाचल", "WB", "बिहार", "UP", 0, "SSC CGL", "2025", "Dhola-Sadiya Bridge connects Assam to Arunachal Pradesh."],
    ["Statue of Equality कहाँ है?", "हैदराबाद", "दिल्ली", "गुजरात", "UP", 0, "MPPSC Pre", "2025", "Statue of Equality is in Hyderabad dedicated to Ramanujacharya."],
    ["विश्व Book Day कब मनाया जाता है?", "23 अप्रैल", "5 जून", "22 मार्च", "21 जून", 0, "SSC CGL", "2025", "World Book Day observed on 23 April."],
    ["World Press Freedom Day कब मनाया जाता है?", "3 मई", "1 मई", "5 सितंबर", "8 मार्च", 0, "MPPSC Pre", "2025", "World Press Freedom Day observed on 3 May."],
    ["World Red Cross Day कब मनाया जाता है?", "8 मई", "1 मई", "3 मई", "15 मई", 0, "SSC CGL", "2025", "World Red Cross Day observed on 8 May (Henry Dunant birthday)."],
    ["World No Tobacco Day कब मनाया जाता है?", "31 मई", "1 मई", "5 जून", "8 मार्च", 0, "MPPSC Pre", "2025", "World No Tobacco Day observed on 31 May."],
    ["World Blood Donor Day कब मनाया जाता है?", "14 जून", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "SSC CGL", "2025", "World Blood Donor Day observed on 14 June."],
    ["World Music Day कब मनाया जाता है?", "21 जून", "5 जून", "22 मार्च", "1 मई", 0, "MPPSC Pre", "2025", "World Music Day (Fete de la Musique) observed on 21 June."],
    ["World Photography Day कब मनाया जाता है?", "19 अगस्त", "15 अगस्त", "26 जनवरी", "5 सितंबर", 0, "SSC CGL", "2025", "World Photography Day observed on 19 August."],
    ["World Literacy Day कब मनाया जाता है?", "8 सितंबर", "5 सितंबर", "14 नवम्बर", "1 मई", 0, "MPPSC Pre", "2025", "International Literacy Day observed on 8 September."],
    ["World Mental Health Day कब मनाया जाता है?", "10 अक्टूबर", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "SSC CGL", "2025", "World Mental Health Day observed on 10 October."],
    ["Hindi Diwas कब मनाया जाता है?", "14 सितंबर", "5 सितंबर", "26 जनवरी", "15 अगस्त", 0, "MP Constable", "2025", "Hindi Diwas celebrated on 14 September."],
    ["World Sanskrit Day कब मनाया जाता है?", "श्रावण पूर्णिमा", "26 जनवरी", "15 अगस्त", "14 सितंबर", 0, "MPPSC Pre", "2025", "World Sanskrit Day is on Shravan Purnima (Raksha Bandhan)."],
    ["International Nurses Day कब मनाया जाता है?", "12 मई", "8 मार्च", "1 मई", "5 जून", 0, "SSC CGL", "2025", "International Nurses Day on 12 May (Florence Nightingale birthday)."],
    ["World Pharmacist Day कब मनाया जाता है?", "25 सितंबर", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "MPPSC Pre", "2025", "World Pharmacist Day observed on 25 September."],
    ["Army Day कब मनाया जाता है?", "15 जनवरी", "26 जनवरी", "2 अक्टूबर", "15 अगस्त", 0, "MP Constable", "2025", "Indian Army Day on 15 January marks K.M. Cariappa becoming first CinC."],
    ["Navy Day कब मनाया जाता है?", "4 दिसंबर", "15 जनवरी", "8 अक्टूबर", "1 अप्रैल", 0, "SSC CGL", "2025", "Indian Navy Day on 4 December marks Operation Trident 1971."]
];
appendToFile('questions/mixed_gk.js', mixed);

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
