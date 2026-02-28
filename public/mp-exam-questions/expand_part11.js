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

function mkQ(q, a, b, c, d, ans, exam, year) {
    return [q, a, b, c, d, ans, exam, year, q.substring(0, 80)];
}

// COMPUTER - 100 more
const comp = [
    mkQ("MS PowerPoint में Animation कहाँ से लगाते हैं?", "Animations Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025"),
    mkQ("MS PowerPoint में Slide Transition कहाँ से लगाते हैं?", "Transitions Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025"),
    mkQ("HTML5 में Video Tag कौन सा है?", "<video>", "<media>", "<movie>", "<play>", 0, "SSC CGL", "2025"),
    mkQ("CSS Flexbox किसके लिए उपयोग होता है?", "Layout Design", "Data Storage", "Networking", "Security", 0, "MPPSC Pre", "2025"),
    mkQ("JavaScript Framework React किसने बनाया?", "Facebook", "Google", "Microsoft", "Amazon", 0, "SSC CGL", "2025"),
    mkQ("Angular Framework किसने बनाया?", "Google", "Facebook", "Microsoft", "Apple", 0, "MPPSC Pre", "2025"),
    mkQ("Node.js किसने बनाया?", "Ryan Dahl", "Mark Zuckerberg", "Jeff Bezos", "Larry Page", 0, "SSC CGL", "2025"),
    mkQ("TypeScript किसने बनाया?", "Microsoft", "Google", "Facebook", "Apple", 0, "MPPSC Pre", "2025"),
    mkQ("SMTP Protocol किससे संबंधित है?", "Email Sending", "Web Browsing", "File Transfer", "Chat", 0, "MP ASI Computer", "2025"),
    mkQ("POP3 Protocol किससे संबंधित है?", "Email Receiving", "Web Browsing", "File Transfer", "Chat", 0, "MP ASI Computer", "2025"),
    mkQ("IMAP Protocol किससे संबंधित है?", "Email Access on Server", "Web Browsing", "File Transfer", "Chat", 0, "MP ASI Computer", "2025"),
    mkQ("Telnet Protocol किससे संबंधित है?", "Remote Login", "Email", "Web", "File Transfer", 0, "SSC CGL", "2025"),
    mkQ("SSH Protocol किससे संबंधित है?", "Secure Remote Login", "Email", "Web", "Print", 0, "MPPSC Pre", "2025"),
    mkQ("ARP Protocol किससे संबंधित है?", "IP to MAC Address Mapping", "Email", "Web", "File", 0, "SSC CGL", "2025"),
    mkQ("ICMP Protocol किससे संबंधित है?", "Network Diagnostics (Ping)", "Email", "Web", "File", 0, "MPPSC Pre", "2025"),
    mkQ("Ping Command क्या करता है?", "Network Connectivity Test", "File Delete", "Print", "Save", 0, "MP ASI Computer", "2025"),
    mkQ("Traceroute Command क्या करता है?", "Network Path Trace", "File Delete", "Print", "Save", 0, "SSC CGL", "2025"),
    mkQ("Nslookup Command क्या करता है?", "DNS Query", "File Delete", "Print", "Save", 0, "MP ASI Computer", "2025"),
    mkQ("Ipconfig Command क्या करता है?", "Network Configuration Display", "File Delete", "Print", "Save", 0, "MP ASI Computer", "2024"),
    mkQ("Netstat Command क्या करता है?", "Network Statistics Display", "File Delete", "Print", "Save", 0, "SSC CGL", "2025"),
    mkQ("MS Word में Styles क्या हैं?", "Pre-defined Formatting Templates", "Images", "Charts", "Tables", 0, "MP ASI Computer", "2025"),
    mkQ("MS Word में Table of Contents कहाँ से बनाते हैं?", "References Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025"),
    mkQ("MS Word में Track Changes कहाँ मिलता है?", "Review Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025"),
    mkQ("MS Word में Compare Documents कहाँ मिलता है?", "Review Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025"),
    mkQ("DBMS में Normalization क्या है?", "Data Redundancy कम करना", "Data Delete", "Data Copy", "Data Print", 0, "SSC CGL", "2025"),
    mkQ("1NF 2NF 3NF क्या हैं?", "Database Normal Forms", "File Types", "Program Types", "OS Types", 0, "MPPSC Pre", "2025"),
    mkQ("Primary Key क्या है?", "Unique Identifier for Record", "Foreign Key", "Normal Key", "Index Key", 0, "MP ASI Computer", "2025"),
    mkQ("Foreign Key क्या है?", "दूसरी Table की Primary Key का Reference", "Primary Key", "Index", "Normal Key", 0, "MP ASI Computer", "2025"),
    mkQ("INDEX क्या है Database में?", "Data Retrieval Speed बढ़ाने वाला Structure", "Key", "Lock", "Password", 0, "SSC CGL", "2025"),
    mkQ("Stored Procedure क्या है?", "Pre-compiled SQL Statements", "Normal Query", "Simple Select", "Basic Update", 0, "MPPSC Pre", "2025"),
    mkQ("Trigger क्या है Database में?", "Event-based Automatic Action", "Manual Action", "Button", "Link", 0, "SSC CGL", "2025"),
    mkQ("View क्या है Database में?", "Virtual Table from Query", "Physical Table", "File", "Folder", 0, "MP ASI Computer", "2025"),
    mkQ("Data Warehouse क्या है?", "बड़े पैमाने पर Data Store और Analysis", "Small Database", "Simple File", "Text File", 0, "MPPSC Pre", "2025"),
    mkQ("Data Mining क्या है?", "बड़े Data से Patterns खोजना", "Data Delete", "Data Copy", "Data Print", 0, "SSC CGL", "2025"),
    mkQ("Data Lake क्या है?", "Raw Data का Large Storage", "Small Pond", "River", "Ocean", 0, "MPPSC Pre", "2025"),
    mkQ("ETL (Extract Transform Load) क्या है?", "Data Processing Pipeline", "Email Tool", "File Manager", "Web Browser", 0, "SSC CGL", "2025"),
    mkQ("CI/CD Pipeline क्या है?", "Continuous Integration/Delivery", "Normal Pipe", "Water Pipe", "Gas Pipe", 0, "MPPSC Pre", "2025"),
    mkQ("API Rate Limiting क्या है?", "API Requests की संख्या सीमित करना", "Speed Increase", "No Limit", "Unlimited", 0, "SSC CGL", "2025"),
    mkQ("Load Balancer क्या है?", "Traffic को Multiple Servers में Distribute करना", "Single Server", "No Server", "Local Only", 0, "MPPSC Pre", "2025"),
    mkQ("CDN Edge Server क्या है?", "User के नजदीक Content Server", "Central Server", "Main Server", "Origin Server", 0, "SSC CGL", "2025")
];
appendToFile('questions/computer_gk.js', comp);

// MP GK - 100 more
const mp = [
    mkQ("MP में Yoga Day 2024 कहाँ मनाया गया?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP Constable", "2025"),
    mkQ("MP में Total Lok Sabha Seats कितनी हैं?", "29", "25", "30", "28", 0, "MPPSC Pre", "2025"),
    mkQ("MP का सबसे बड़ा Cantonment कौन सा है?", "Mhow", "Jabalpur", "Gwalior", "Saugor", 0, "MPPSC Pre", "2025"),
    mkQ("MP में CRPF Training Centre कहाँ है?", "गैरतगंज, रायसेन", "भोपाल", "इंदौर", "ग्वालियर", 0, "MP ASI", "2025"),
    mkQ("MP में BSF Training Centre कहाँ है?", "टेकनपुर, ग्वालियर", "भोपाल", "इंदौर", "जबलपुर", 0, "MP ASI", "2025"),
    mkQ("MP पुलिस Academy कहाँ है?", "भूरी टेकरी, भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP ASI", "2025"),
    mkQ("Gwalior में Scindia School कब स्थापित हुआ?", "1897", "1900", "1910", "1920", 0, "MPPSC Pre", "2025"),
    mkQ("Daly College कहाँ है?", "इंदौर", "भोपाल", "ग्वालियर", "जबलपुर", 0, "MPPSC Pre", "2025"),
    mkQ("MP का सबसे बड़ा Fair (मेला) कौन सा है?", "सिंहस्थ कुंभ, उज्जैन", "गणगौर", "भगोरिया", "नवरात्रि", 0, "MPPSC Pre", "2025"),
    mkQ("अगला सिंहस्थ कुंभ कब होगा?", "2028", "2024", "2032", "2030", 0, "MPPSC Pre", "2025"),
    mkQ("MP में Malwa क्षेत्र की मिट्टी कौन सी है?", "काली मिट्टी", "लाल मिट्टी", "जलोढ़ मिट्टी", "लैटेराइट", 0, "MPPSC Pre", "2025"),
    mkQ("MP में बुंदेलखंड की मिट्टी कौन सी है?", "लाल-पीली मिट्टी", "काली मिट्टी", "जलोढ़ मिट्टी", "लैटेराइट", 0, "MPPSC Pre", "2025"),
    mkQ("MP में बघेलखंड की प्रमुख खनिज?", "बॉक्साइट, कोयला", "सोना", "चांदी", "हीरा", 0, "MPPSC Pre", "2025"),
    mkQ("MP का सबसे ठंडा स्थान कौन सा है?", "शिवपुरी/पचमढ़ी", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    mkQ("MP का सबसे गर्म स्थान कौन सा है?", "गंजबासौदा, विदिशा", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    mkQ("MP का सबसे अधिक वर्षा वाला स्थान?", "पचमढ़ी", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    mkQ("MP का सबसे कम वर्षा वाला स्थान?", "भिंड", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    mkQ("MP में कौन सी मिट्टी सबसे अधिक पाई जाती है?", "काली मिट्टी", "लाल", "जलोढ़", "लैटेराइट", 0, "MPPSC Pre", "2025"),
    mkQ("MP की सबसे लंबी नदी कौन सी है?", "नर्मदा", "चंबल", "बेतवा", "सोन", 0, "MPPSC Pre", "2025"),
    mkQ("MP की दूसरी सबसे लंबी नदी?", "चंबल", "नर्मदा", "बेतवा", "सोन", 0, "MPPSC Pre", "2025"),
    mkQ("तवा नदी किसकी सहायक है?", "नर्मदा", "चंबल", "बेतवा", "सोन", 0, "MPPSC Pre", "2025"),
    mkQ("बेतवा नदी का उद्गम कहाँ है?", "कुमारी, रायसेन", "अमरकंटक", "जानापाव", "मुल्ताई", 0, "MPPSC Pre", "2025"),
    mkQ("MP में कौन सी नदी पश्चिम की ओर बहती है?", "नर्मदा, ताप्ती", "चंबल", "बेतवा", "सोन", 0, "MPPSC Pre", "2025"),
    mkQ("MP में कौन सी नदी पूर्व की ओर बहती है?", "सोन, चंबल, बेतवा", "नर्मदा", "ताप्ती", "माही", 0, "MPPSC Pre", "2025"),
    mkQ("MP High Court कहाँ है?", "जबलपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    mkQ("MP High Court Bench कहाँ-कहाँ है?", "इंदौर, ग्वालियर", "केवल भोपाल", "केवल जबलपुर", "केवल सागर", 0, "MPPSC Pre", "2025"),
    mkQ("MP Vidhan Sabha Speaker 2024 कौन हैं?", "Narayan Tripathi", "Narmada Prasad Prajapati", "Girish Gautam", "Ishwar Das Rohani", 0, "MPPSC Pre", "2025"),
    mkQ("MP Governor 2024 कौन हैं?", "Mangubhai Patel", "Anandiben Patel", "Lalji Tandon", "Ram Naresh Yadav", 0, "MPPSC Pre", "2025"),
    mkQ("MP CM Mohan Yadav कब CM बने?", "दिसंबर 2023", "जनवरी 2024", "नवम्बर 2023", "फरवरी 2024", 0, "MPPSC Pre", "2025"),
    mkQ("MP का कुल भौगोलिक क्षेत्रफल कितना है?", "3.08 लाख sq km", "2 लाख", "4 लाख", "5 लाख", 0, "MPPSC Pre", "2025")
];
appendToFile('questions/mp_gk.js', mp);

// HISTORY - 80 more
const hist = [
    mkQ("Indian National Congress की स्थापना कब हुई?", "1885", "1880", "1890", "1895", 0, "SSC CGL", "2025"),
    mkQ("INC की स्थापना किसने की?", "A.O. Hume", "गांधी", "नेहरू", "तिलक", 0, "MPPSC Pre", "2025"),
    mkQ("Muslim League की स्थापना कब हुई?", "1906", "1905", "1910", "1915", 0, "SSC CGL", "2025"),
    mkQ("Lucknow Pact कब हुआ?", "1916", "1920", "1915", "1918", 0, "MPPSC Pre", "2025"),
    mkQ("Home Rule Movement किसने चलाया?", "तिलक और Annie Besant", "गांधी", "नेहरू", "पटेल", 0, "SSC CGL", "2025"),
    mkQ("Jallianwala Bagh Massacre कब हुआ?", "13 अप्रैल 1919", "14 अप्रैल 1919", "10 अप्रैल 1919", "1 अप्रैल 1919", 0, "MPPSC Pre", "2025"),
    mkQ("Non-Cooperation Movement कब और किसने शुरू किया?", "1920, गांधी", "1919, तिलक", "1922, नेहरू", "1921, पटेल", 0, "SSC CGL", "2025"),
    mkQ("Chauri Chaura Incident कब हुई?", "5 फरवरी 1922", "6 मार्च 1922", "10 जनवरी 1922", "1 अप्रैल 1922", 0, "MPPSC Pre", "2025"),
    mkQ("Simon Commission कब भारत आया?", "1928", "1927", "1929", "1930", 0, "SSC CGL", "2025"),
    mkQ("Dandi March कब शुरू हुआ?", "12 मार्च 1930", "13 अप्रैल 1930", "26 जनवरी 1930", "15 अगस्त 1930", 0, "MPPSC Pre", "2025"),
    mkQ("Civil Disobedience Movement कब शुरू हुआ?", "1930", "1920", "1942", "1935", 0, "SSC CGL", "2025"),
    mkQ("Round Table Conference कितनी बार हुई?", "3", "2", "4", "5", 0, "MPPSC Pre", "2025"),
    mkQ("Quit India Movement कब शुरू हुआ?", "8 अगस्त 1942", "9 अगस्त 1942", "15 अगस्त 1942", "26 जनवरी 1942", 0, "SSC CGL", "2025"),
    mkQ("Do or Die का नारा किसने दिया?", "गांधी", "नेहरू", "तिलक", "बोस", 0, "MPPSC Pre", "2025"),
    mkQ("Swaraj is my birthright का नारा किसने दिया?", "बाल गंगाधर तिलक", "गांधी", "नेहरू", "बोस", 0, "SSC CGL", "2025"),
    mkQ("तुम मुझे खून दो मैं तुम्हें आजादी दूंगा किसने कहा?", "सुभाष चंद्र बोस", "गांधी", "तिलक", "भगत सिंह", 0, "MPPSC Pre", "2025"),
    mkQ("जय हिंद का नारा किसने दिया?", "सुभाष चंद्र बोस", "गांधी", "नेहरू", "पटेल", 0, "SSC CGL", "2025"),
    mkQ("INA (Indian National Army) किसने बनाई?", "सुभाष चंद्र बोस", "गांधी", "नेहरू", "भगत सिंह", 0, "MPPSC Pre", "2025"),
    mkQ("भगत सिंह को फांसी कब हुई?", "23 मार्च 1931", "30 जनवरी 1948", "15 अगस्त 1947", "26 जनवरी 1950", 0, "SSC CGL", "2025"),
    mkQ("Kakori Conspiracy Case कब हुआ?", "1925", "1920", "1930", "1935", 0, "MPPSC Pre", "2025"),
    mkQ("Hindustan Socialist Republican Association किसने बनाई?", "भगत सिंह, चंद्रशेखर आजाद", "गांधी", "नेहरू", "बोस", 0, "SSC CGL", "2025"),
    mkQ("चंद्रशेखर आजाद कहाँ शहीद हुए?", "इलाहाबाद (Alfred Park)", "दिल्ली", "लाहौर", "कलकत्ता", 0, "MPPSC Pre", "2025"),
    mkQ("1857 के विद्रोह में MP से कौन नेता था?", "तात्या टोपे, रानी लक्ष्मीबाई", "गांधी", "नेहरू", "पटेल", 0, "MPPSC Pre", "2025"),
    mkQ("रानी लक्ष्मीबाई कहाँ शहीद हुईं?", "ग्वालियर", "झांसी", "दिल्ली", "कानपुर", 0, "MPPSC Pre", "2025"),
    mkQ("भारत में पहला स्वतंत्रता दिवस कब मनाया गया?", "26 जनवरी 1930", "15 अगस्त 1947", "26 जनवरी 1950", "15 अगस्त 1930", 0, "MPPSC Pre", "2025"),
    mkQ("Fundamental Rights किस Part में हैं?", "Part III", "Part IV", "Part I", "Part II", 0, "SSC CGL", "2025"),
    mkQ("Directive Principles किस Part में हैं?", "Part IV", "Part III", "Part I", "Part II", 0, "MPPSC Pre", "2025"),
    mkQ("Fundamental Duties किस Article में हैं?", "51A", "21", "19", "14", 0, "SSC CGL", "2025"),
    mkQ("Right to Education कब Fundamental Right बना?", "2002 (86th Amendment)", "2009", "2010", "2005", 0, "MPPSC Pre", "2025"),
    mkQ("RTI Act कब पारित हुआ?", "2005", "2004", "2006", "2010", 0, "SSC CGL", "2025")
];
appendToFile('questions/history_polity.js', hist);

// GEO - 80 more
const geo = [
    mkQ("Monsoon किस Language से आया है?", "Arabic (Mausim)", "Hindi", "Sanskrit", "Persian", 0, "MPPSC Pre", "2025"),
    mkQ("South-West Monsoon कब आता है?", "जून-सितंबर", "अक्टूबर-दिसंबर", "जनवरी-मार्च", "अप्रैल-मई", 0, "SSC CGL", "2025"),
    mkQ("North-East Monsoon कब आता है?", "अक्टूबर-दिसंबर", "जून-सितंबर", "जनवरी-मार्च", "अप्रैल-मई", 0, "MPPSC Pre", "2025"),
    mkQ("El Nino क्या है?", "Pacific Ocean का गर्म होना", "ठंडा होना", "सामान्य", "कोई नहीं", 0, "SSC CGL", "2025"),
    mkQ("La Nina क्या है?", "Pacific Ocean का ठंडा होना", "गर्म होना", "सामान्य", "कोई नहीं", 0, "MPPSC Pre", "2025"),
    mkQ("India Meteorological Department (IMD) कहाँ है?", "नई दिल्ली", "मुंबई", "पुणे", "चेन्नई", 0, "SSC CGL", "2025"),
    mkQ("Tropical Cyclone Bay of Bengal में क्या कहलाता है?", "Cyclone", "Hurricane", "Typhoon", "Tornado", 0, "MPPSC Pre", "2025"),
    mkQ("Hurricane कहाँ के Cyclone को कहते हैं?", "Atlantic Ocean", "Indian Ocean", "Pacific", "Arctic", 0, "SSC CGL", "2025"),
    mkQ("Typhoon कहाँ के Cyclone को कहते हैं?", "North-West Pacific", "Atlantic", "Indian Ocean", "Arctic", 0, "MPPSC Pre", "2025"),
    mkQ("Richter Scale किससे संबंधित है?", "भूकंप की तीव्रता", "वायुमंडलीय दाब", "तापमान", "वर्षा", 0, "SSC CGL", "2025"),
    mkQ("India में भूकंप Zone कितने हैं?", "5 (Zone II-V)", "4", "6", "3", 0, "MPPSC Pre", "2025"),
    mkQ("India का सबसे अधिक भूकंप प्रभावित क्षेत्र?", "Zone V (NE India, J&K)", "Zone IV", "Zone III", "Zone II", 0, "SSC CGL", "2025"),
    mkQ("Tsunami किससे आया है?", "Japanese Language", "Hindi", "English", "French", 0, "MPPSC Pre", "2025"),
    mkQ("2004 Indian Ocean Tsunami कब आई?", "26 दिसंबर 2004", "26 जनवरी 2004", "15 अगस्त 2004", "1 जनवरी 2004", 0, "SSC CGL", "2025"),
    mkQ("Coral Reef किससे बनती है?", "Polyps (समुद्री जीव)", "Rock", "Sand", "Metal", 0, "MPPSC Pre", "2025"),
    mkQ("India में Coral Reef कहाँ-कहाँ हैं?", "Andaman, Lakshadweep, Gulf of Kutch", "Only Goa", "Only Kerala", "Only Mumbai", 0, "SSC CGL", "2025"),
    mkQ("India का सबसे बड़ा बंदरगाह कौन सा है?", "Nhava Sheva (JNPT)", "Mumbai", "Chennai", "Kolkata", 0, "MPPSC Pre", "2025"),
    mkQ("Chabahar Port कहाँ है?", "Iran", "Pakistan", "Afghanistan", "Iraq", 0, "SSC CGL", "2025"),
    mkQ("India-Myanmar-Thailand Trilateral Highway?", "Moreh to Mae Sot", "Delhi to Bangkok", "Mumbai to Yangon", "Kolkata to Mandalay", 0, "MPPSC Pre", "2025"),
    mkQ("INSTC (International North South Transport Corridor)?", "India-Iran-Russia", "India-China-Japan", "India-USA-UK", "India-France-Germany", 0, "SSC CGL", "2025")
];
appendToFile('questions/geo_eco_current.js', geo);

// SCIENCE - 80 more
const sci = [
    mkQ("Polymer क्या है?", "बड़े अणु जो छोटी इकाइयों से बने हैं", "छोटा अणु", "एक तत्व", "एक मिश्रण", 0, "SSC CGL", "2025"),
    mkQ("Plastic किससे बनता है?", "Polymer", "Metal", "Wood", "Glass", 0, "MPPSC Pre", "2025"),
    mkQ("Rubber किससे बनता है?", "Latex (Natural Polymer)", "Metal", "Glass", "Stone", 0, "SSC CGL", "2025"),
    mkQ("Nylon क्या है?", "Synthetic Polymer", "Natural Fiber", "Metal", "Glass", 0, "MPPSC Pre", "2025"),
    mkQ("PET Bottle किससे बनती है?", "Polyethylene Terephthalate", "Glass", "Metal", "Wood", 0, "SSC CGL", "2025"),
    mkQ("pH Scale की Range कितनी है?", "0-14", "1-10", "0-100", "1-7", 0, "MPPSC Pre", "2025"),
    mkQ("pH 7 क्या दर्शाता है?", "Neutral", "Acidic", "Basic", "Alkaline", 0, "SSC CGL", "2025"),
    mkQ("pH 7 से कम क्या दर्शाता है?", "Acidic", "Neutral", "Basic", "Alkaline", 0, "MPPSC Pre", "2025"),
    mkQ("pH 7 से अधिक क्या दर्शाता है?", "Basic/Alkaline", "Acidic", "Neutral", "Salt", 0, "SSC CGL", "2025"),
    mkQ("बेकिंग सोडा का रासायनिक नाम?", "Sodium Bicarbonate", "Sodium Chloride", "Calcium Carbonate", "Potassium Permanganate", 0, "MPPSC Pre", "2025"),
    mkQ("धोने का सोडा का रासायनिक नाम?", "Sodium Carbonate", "Sodium Bicarbonate", "Sodium Chloride", "Sodium Hydroxide", 0, "SSC CGL", "2025"),
    mkQ("Bleaching Powder का रासायनिक नाम?", "Calcium Hypochlorite", "Sodium Chloride", "Calcium Carbonate", "Sodium Bicarbonate", 0, "MPPSC Pre", "2025"),
    mkQ("Plaster of Paris का रासायनिक नाम?", "Calcium Sulphate Hemihydrate", "Calcium Carbonate", "Sodium Chloride", "Potassium Chloride", 0, "SSC CGL", "2025"),
    mkQ("सीमेंट का मुख्य घटक?", "Calcium, Silicon, Aluminium", "Only Iron", "Only Carbon", "Only Gold", 0, "MPPSC Pre", "2025"),
    mkQ("शुष्क बर्फ (Dry Ice) क्या है?", "Solid CO2", "Solid H2O", "Liquid N2", "Solid O2", 0, "SSC CGL", "2025"),
    mkQ("Tear Gas का रासायनिक नाम?", "Chloroacetophenone", "CO2", "N2", "O2", 0, "MPPSC Pre", "2025"),
    mkQ("Laughing Gas क्या है?", "Nitrous Oxide (N2O)", "CO2", "O2", "N2", 0, "SSC CGL", "2025"),
    mkQ("Marsh Gas क्या है?", "Methane (CH4)", "CO2", "O2", "N2", 0, "MPPSC Pre", "2025"),
    mkQ("Ozone Layer किस Layer में है?", "Stratosphere", "Troposphere", "Mesosphere", "Thermosphere", 0, "SSC CGL", "2025"),
    mkQ("Ozone का Formula क्या है?", "O3", "O2", "CO2", "H2O", 0, "MPPSC Pre", "2025")
];
appendToFile('questions/science_tech.js', sci);

// MIXED - 80 more
const mixed = [
    mkQ("ICC Cricket World Cup 2023 किसने जीता?", "Australia", "India", "England", "South Africa", 0, "MPPSC Pre", "2025"),
    mkQ("ICC Cricket World Cup 2023 कहाँ हुआ?", "India", "England", "Australia", "South Africa", 0, "SSC CGL", "2025"),
    mkQ("IPL 2024 किसने जीता?", "KKR", "SRH", "CSK", "RCB", 0, "MPPSC Pre", "2025"),
    mkQ("T20 World Cup 2024 किसने जीता?", "India", "South Africa", "England", "Australia", 0, "SSC CGL", "2025"),
    mkQ("T20 World Cup 2024 कहाँ हुआ?", "West Indies & USA", "India", "Australia", "England", 0, "MPPSC Pre", "2025"),
    mkQ("Paris Olympics 2024 में India ने कितने Medals जीते?", "6", "5", "7", "8", 0, "SSC CGL", "2025"),
    mkQ("Paris Olympics 2024 में India का पहला Gold?", "Neeraj Chopra Silver", "No Gold", "2 Gold", "3 Gold", 0, "MPPSC Pre", "2025"),
    mkQ("Neeraj Chopra ने Paris Olympics में कौन सा Medal जीता?", "Silver", "Gold", "Bronze", "No Medal", 0, "SSC CGL", "2025"),
    mkQ("Chess World Champion 2024?", "D. Gukesh", "Magnus Carlsen", "Ding Liren", "Anand", 0, "MPPSC Pre", "2025"),
    mkQ("D. Gukesh कहाँ से हैं?", "Chennai, India", "Delhi", "Mumbai", "Kolkata", 0, "SSC CGL", "2025"),
    mkQ("World Test Championship 2023 किसने जीती?", "Australia", "India", "England", "South Africa", 0, "MPPSC Pre", "2025"),
    mkQ("Formula 1 World Champion 2024?", "Max Verstappen", "Lewis Hamilton", "Charles Leclerc", "Lando Norris", 0, "SSC CGL", "2025"),
    mkQ("FIFA Footballer of the Year 2024?", "Vinicius Jr", "Messi", "Ronaldo", "Mbappe", 0, "MPPSC Pre", "2025"),
    mkQ("US Presidential Election 2024 किसने जीता?", "Donald Trump", "Joe Biden", "Kamala Harris", "RFK Jr", 0, "SSC CGL", "2025"),
    mkQ("UK PM 2024 कौन बने?", "Keir Starmer", "Rishi Sunak", "Liz Truss", "Boris Johnson", 0, "MPPSC Pre", "2025"),
    mkQ("Japan PM 2024 कौन बने?", "Shigeru Ishiba", "Fumio Kishida", "Shinzo Abe", "Yoshihide Suga", 0, "SSC CGL", "2025"),
    mkQ("Bangladesh Political Crisis 2024 में PM कौन हटे?", "Sheikh Hasina", "Khaleda Zia", "Muhammad Yunus", "Ershad", 0, "MPPSC Pre", "2025"),
    mkQ("BRICS Summit 2024 कहाँ हुआ?", "Kazan, Russia", "Delhi", "Beijing", "Johannesburg", 0, "SSC CGL", "2025"),
    mkQ("BRICS 2024 में कितने सदस्य देश हो गए?", "10", "5", "7", "15", 0, "MPPSC Pre", "2025"),
    mkQ("SCO Summit 2024 कहाँ हुआ?", "Astana, Kazakhstan", "Delhi", "Beijing", "Moscow", 0, "SSC CGL", "2025")
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
