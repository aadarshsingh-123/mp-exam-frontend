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

// ======= SCIENCE & TECH - 300 more =======
const sciMore = [
    ["ISRO का मुख्यालय कहाँ है?", "बेंगलुरु", "नई दिल्ली", "चेन्नई", "हैदराबाद", 0, "SSC CGL", "2024", "ISRO headquarters is in Bengaluru, Karnataka."],
    ["Chandrayaan-3 का Landing Site कहाँ था?", "चंद्रमा का दक्षिणी ध्रुव", "उत्तरी ध्रुव", "भूमध्य", "पश्चिमी", 0, "MPPSC Pre", "2024", "Chandrayaan-3 landed near Moon's south pole on 23 August 2023."],
    ["Gaganyaan Mission क्या है?", "भारत का मानव अंतरिक्ष मिशन", "चंद्र मिशन", "मंगल मिशन", "सूर्य मिशन", 0, "MPPSC Pre", "2025", "Gaganyaan is India's first manned space mission by ISRO."],
    ["DRDO का पूरा नाम क्या है?", "Defence Research and Development Organisation", "Digital Research Development Org", "Defence Resource Development Org", "Digital Resource Defence Org", 0, "SSC CGL", "2024", "DRDO develops military hardware and technologies for India."],
    ["Agni-5 Missile की Range कितनी है?", "5000+ km", "3000 km", "1000 km", "8000 km", 0, "MPPSC Pre", "2024", "Agni-5 is an ICBM with range of over 5000 km."],
    ["PSLV का पूरा नाम क्या है?", "Polar Satellite Launch Vehicle", "Polar Space Launch Vehicle", "Primary Satellite Launch Vehicle", "Polar System Launch Vehicle", 0, "SSC CGL", "2023", "PSLV is ISRO's workhorse launch vehicle for polar orbit missions."],
    ["GSLV का पूरा नाम क्या है?", "Geosynchronous Satellite Launch Vehicle", "Global Satellite Launch Vehicle", "General Space Launch Vehicle", "Geostationary System Launch Vehicle", 0, "MPPSC Pre", "2024", "GSLV launches heavier satellites into geosynchronous orbit."],
    ["DNA का पूरा नाम क्या है?", "Deoxyribonucleic Acid", "Dinucleic Acid", "Deoxyribomine Acid", "Diribonucleic Acid", 0, "SSC CHSL", "2024", "DNA carries genetic information in all living organisms."],
    ["RNA का पूरा नाम क्या है?", "Ribonucleic Acid", "Ribosomine Acid", "Random Nucleic Acid", "Reactive Nucleic Acid", 0, "MP Constable", "2024", "RNA plays key role in protein synthesis from DNA instructions."],
    ["pH Scale का Range क्या है?", "0 से 14", "0 से 7", "1 से 10", "0 से 100", 0, "SSC CGL", "2023", "pH scale ranges from 0 (acidic) to 14 (basic), 7 is neutral."],
    ["मानव शरीर में कुल कितनी हड्डियां होती हैं?", "206", "300", "108", "250", 0, "MPPSC Pre", "2024", "Adult human body has 206 bones."],
    ["मानव शरीर का सबसे बड़ा अंग कौन सा है?", "त्वचा", "लीवर", "हृदय", "फेफड़ा", 0, "MP Constable", "2024", "Skin is the largest organ of the human body."],
    ["मानव शरीर का सबसे छोटा अस्थि कौन सी है?", "स्टेपीज", "हैमर", "एन्विल", "फीमर", 0, "SSC CGL", "2024", "Stapes in the middle ear is the smallest bone in the human body."],
    ["प्रकाश का वेग कितना है?", "3 लाख km/s", "1 लाख km/s", "5 लाख km/s", "2 लाख km/s", 0, "MPPSC Pre", "2023", "Speed of light is approximately 3 lakh km per second (3x10^8 m/s)."],
    ["ध्वनि की गति हवा में कितनी है?", "343 m/s", "300 m/s", "400 m/s", "500 m/s", 0, "SSC CHSL", "2024", "Speed of sound in air at 20°C is approximately 343 m/s."],
    ["Newton का गति का प्रथम नियम क्या कहलाता है?", "जड़त्व का नियम", "संवेग का नियम", "क्रिया-प्रतिक्रिया", "गुरुत्वाकर्षण", 0, "MP Constable", "2024", "Newton's First Law is called Law of Inertia."],
    ["विटामिन C का रासायनिक नाम क्या है?", "एस्कॉर्बिक एसिड", "रेटिनॉल", "थायमिन", "टोकोफेरॉल", 0, "MPPSC Pre", "2024", "Vitamin C is chemically known as Ascorbic Acid, prevents scurvy."],
    ["विटामिन D की कमी से कौन सा रोग होता है?", "रिकेट्स", "स्कर्वी", "बेरी-बेरी", "पेलाग्रा", 0, "SSC CGL", "2023", "Vitamin D deficiency causes Rickets (bone weakness) in children."],
    ["विटामिन A की कमी से कौन सा रोग होता है?", "रतौंधी", "रिकेट्स", "स्कर्वी", "बेरी-बेरी", 0, "MP Constable", "2024", "Vitamin A deficiency causes Night Blindness (Nyctalopia)."],
    ["लोहे पर जंग लगना किस प्रकार की क्रिया है?", "ऑक्सीकरण", "अपचयन", "उदासीनीकरण", "विस्थापन", 0, "MPPSC Pre", "2024", "Rusting of iron is an oxidation reaction (Fe + O2 + H2O → Fe2O3)."],
    ["ओजोन परत कहाँ पाई जाती है?", "समताप मंडल", "क्षोभ मंडल", "मध्य मंडल", "बाह्य मंडल", 0, "SSC CGL", "2024", "Ozone layer is found in the Stratosphere, 15-35 km above Earth."],
    ["CFC Gas से कौन सी परत प्रभावित होती है?", "ओजोन परत", "क्षोभ मंडल", "वायुमंडल", "जलमंडल", 0, "MPPSC Pre", "2023", "CFC (Chlorofluorocarbon) gases deplete the ozone layer."],
    ["ग्रीन हाउस प्रभाव का मुख्य गैस कौन सी है?", "CO2", "O2", "N2", "H2", 0, "SSC CHSL", "2024", "Carbon Dioxide is the primary greenhouse gas causing global warming."],
    ["LED का पूरा नाम क्या है?", "Light Emitting Diode", "Light Electronic Device", "Low Energy Diode", "Laser Emitting Device", 0, "MP ASI", "2024", "LED stands for Light Emitting Diode, energy-efficient lighting."],
    ["Solar Cell किस सिद्धांत पर काम करता है?", "Photovoltaic Effect", "Photoelectric Effect", "Electromagnetic Effect", "Thermoelectric Effect", 0, "MPPSC Pre", "2024", "Solar cells work on the Photovoltaic Effect to convert sunlight to electricity."],
    ["भारत का पहला परमाणु रिएक्टर कौन सा है?", "अप्सरा", "ध्रुव", "कामिनी", "सायरस", 0, "SSC CGL", "2023", "Apsara was India's first nuclear reactor, operational in 1956."],
    ["भारत का पहला परमाणु परीक्षण कब हुआ?", "1974", "1998", "1964", "1980", 0, "MPPSC Pre", "2024", "India's first nuclear test (Smiling Buddha) was conducted in May 1974 at Pokhran."],
    ["CRISPR Technology किससे संबंधित है?", "Gene Editing", "Rocket Science", "Artificial Intelligence", "Blockchain", 0, "MPPSC Pre", "2025", "CRISPR is a revolutionary gene-editing technology for modifying DNA."],
    ["mRNA Vaccine Technology किस vaccine में उपयोग हुई?", "COVID-19 (Pfizer/Moderna)", "Polio", "BCG", "MMR", 0, "SSC CGL", "2024", "mRNA technology was used in Pfizer and Moderna COVID-19 vaccines."],
    ["Nano Technology में 1 Nanometer कितना होता है?", "10^-9 meter", "10^-6 meter", "10^-3 meter", "10^-12 meter", 0, "MPPSC Pre", "2024", "1 Nanometer equals 10^-9 meter (one billionth of a meter)."],
    ["3D Printing Technology को और क्या कहते हैं?", "Additive Manufacturing", "Subtractive Manufacturing", "Digital Manufacturing", "Virtual Manufacturing", 0, "SSC CHSL", "2025", "3D Printing is also called Additive Manufacturing."],
    ["LiDAR Technology किसके लिए उपयोग होती है?", "3D Mapping और Surveying", "Cooking", "Teaching", "Painting", 0, "MPPSC Pre", "2025", "LiDAR uses laser to measure distances for 3D mapping and surveying."],
    ["Green Ammonia क्या है?", "Renewable Energy से बना अमोनिया", "एक रंग", "एक फल", "एक दवा", 0, "MPPSC Pre", "2025", "Green Ammonia is produced using renewable energy, a clean fuel alternative."],
    ["Small Modular Reactor (SMR) क्या है?", "छोटा परमाणु रिएक्टर", "एक Solar Panel", "एक Wind Mill", "एक Dam", 0, "MPPSC Pre", "2025", "SMRs are advanced nuclear reactors with power up to 300 MWe."],
    ["Carbon Capture Technology क्या करती है?", "CO2 को वायुमंडल से पकड़कर स्टोर करती है", "O2 बनाती है", "N2 बनाती है", "H2 बनाती है", 0, "SSC CGL", "2025", "Carbon Capture sequesters CO2 to reduce greenhouse emissions."],
    ["भारत का पहला स्वदेशी Semiconductor कहाँ बनेगा?", "गुजरात", "कर्नाटक", "तमिलनाडु", "महाराष्ट्र", 0, "MPPSC Pre", "2025", "India's first semiconductor fab is being built in Gujarat Dholera SIR."],
    ["Thorium Reactor Technology में भारत क्यों अग्रणी है?", "भारत में Thorium प्रचुर मात्रा में है", "Uranium प्रचुर है", "Coal प्रचुर है", "Gas प्रचुर है", 0, "MPPSC Pre", "2024", "India has world's largest thorium reserves, making it leader in thorium technology."],
    ["Hyperloop Technology क्या है?", "वैक्यूम ट्यूब में Ultra-fast Transport", "एक Rocket", "एक Airplane", "एक Ship", 0, "SSC CGL", "2025", "Hyperloop is a high-speed transport system using vacuum tubes at 1000+ km/h."],
    ["Lab-Grown Diamond क्या है?", "प्रयोगशाला में बनाया गया हीरा", "प्राकृतिक हीरा", "कांच", "प्लास्टिक", 0, "MPPSC Pre", "2025", "Lab-grown diamonds are created in labs with same properties as natural diamonds."],
    ["Perovskite Solar Cell क्या है?", "नई पीढ़ी का Solar Cell", "एक Battery", "एक Motor", "एक Generator", 0, "SSC CGL", "2025", "Perovskite solar cells use perovskite material for higher efficiency solar energy."],
    ["Solid State Battery क्या है?", "ठोस इलेक्ट्रोलाइट वाली बैटरी", "तरल बैटरी", "गैस बैटरी", "परमाणु बैटरी", 0, "MPPSC Pre", "2025", "Solid-state batteries use solid electrolytes, safer and more energy-dense than Li-ion."],
    ["Vertical Farming क्या है?", "ऊर्ध्वाधर परतों में खेती", "समतल खेती", "पानी में खेती", "हवा में खेती", 0, "SSC CHSL", "2025", "Vertical farming grows crops in stacked layers indoors using controlled environment."],
    ["Precision Agriculture क्या है?", "Technology-based सटीक खेती", "Traditional Farming", "Organic Farming", "Mixed Farming", 0, "MPPSC Pre", "2024", "Precision agriculture uses GPS, drones, sensors for efficient farming."],
    ["Drone Technology का कृषि में क्या उपयोग है?", "कीटनाशक छिड़काव और निगरानी", "मनोरंजन", "Photography", "Racing", 0, "MP ASI", "2024", "Drones are used for spraying pesticides and crop monitoring in agriculture."],
    ["India AI Mission कब शुरू हुआ?", "2024", "2023", "2022", "2025", 0, "MPPSC Pre", "2025", "India AI Mission was launched in 2024 with Rs 10,372 Cr budget."],
    ["Dark Matter क्या है?", "अदृश्य पदार्थ जो गुरुत्वाकर्षण प्रभावित करता है", "साधारण पदार्थ", "प्रकाश", "ऊर्जा", 0, "SSC CGL", "2024", "Dark Matter is invisible matter making up about 27% of the universe."],
    ["Gravitational Waves किसने खोजी?", "LIGO", "NASA", "ISRO", "ESA", 0, "MPPSC Pre", "2024", "Gravitational waves were first detected by LIGO in 2015."],
    ["James Webb Space Telescope कब launch हुआ?", "दिसंबर 2021", "जनवरी 2022", "जुलाई 2020", "मार्च 2023", 0, "SSC CGL", "2024", "James Webb Space Telescope launched on 25 December 2021."],
    ["Artemis Program किस संस्था का है?", "NASA", "ISRO", "ESA", "CNSA", 0, "MPPSC Pre", "2025", "Artemis is NASA's program to return humans to the Moon and go to Mars."],
    ["भारत का Mars Orbiter Mission कब launch हुआ?", "2013", "2014", "2012", "2015", 0, "SSC CGL", "2023", "Mars Orbiter Mission (Mangalyaan) launched on 5 November 2013."]
];
appendToFile('questions/science_tech.js', sciMore);

// ======= MIXED GK - 400 more =======
const mixedMore = [
    ["2024 Paris Olympics में भारत ने कितने पदक जीते?", "6", "5", "7", "4", 0, "MPPSC Pre", "2025", "India won 6 medals at 2024 Paris Olympics."],
    ["Neeraj Chopra ने Paris Olympics 2024 में कौन सा पदक जीता?", "Silver", "Gold", "Bronze", "कोई नहीं", 0, "SSC CGL", "2025", "Neeraj Chopra won Silver medal in Javelin Throw at Paris Olympics 2024."],
    ["Manu Bhaker ने Paris Olympics 2024 में कितने पदक जीते?", "2 Bronze", "1 Gold", "1 Silver", "3 Bronze", 0, "MPPSC Pre", "2025", "Manu Bhaker won 2 Bronze medals in Shooting at Paris Olympics 2024."],
    ["T20 World Cup 2024 किसने जीता?", "भारत", "ऑस्ट्रेलिया", "इंग्लैंड", "दक्षिण अफ्रीका", 0, "SSC CGL", "2024", "India won ICC T20 World Cup 2024 defeating South Africa in final."],
    ["IPL 2024 किसने जीता?", "KKR", "CSK", "MI", "RCB", 0, "MPPSC Pre", "2025", "Kolkata Knight Riders won IPL 2024."],
    ["FIFA World Cup 2022 किसने जीता?", "अर्जेंटीना", "फ्रांस", "ब्राज़ील", "जर्मनी", 0, "SSC CGL", "2023", "Argentina won FIFA World Cup 2022 in Qatar defeating France."],
    ["Asia Cup 2023 Cricket किसने जीता?", "भारत", "पाकिस्तान", "श्रीलंका", "बांग्लादेश", 0, "MPPSC Pre", "2024", "India won Asia Cup 2023 defeating Sri Lanka in the final."],
    ["Dronacharya Award 2024 किसे मिला?", "जसपाल राणा", "पुलेला गोपीचंद", "महावीर सिंह", "रामकृष्ण", "", 0, "MPPSC Pre", "2025", "Jaspal Rana received Dronacharya Award 2024 for coaching in shooting."],
    ["Khel Ratna Award का नया नाम क्या है?", "Major Dhyan Chand Khel Ratna", "Rajiv Gandhi Khel Ratna", "Arjuna Award", "Dronacharya Award", 0, "SSC CGL", "2024", "Rajiv Gandhi Khel Ratna was renamed to Major Dhyan Chand Khel Ratna in 2021."],
    ["भारत की पहली महिला ओलम्पिक पदक विजेता कौन हैं?", "कर्णम मल्लेश्वरी", "साइना नेहवाल", "पी.वी. सिंधु", "मैरी कॉम", 0, "MPPSC Pre", "2024", "Karnam Malleswari won Bronze in weightlifting at 2000 Sydney Olympics."],
    ["Nobel Peace Prize 2024 किसे मिला?", "Nihon Hidankyo", "UN", "WHO", "ICRC", 0, "MPPSC Pre", "2025", "Nihon Hidankyo (Japan) won Nobel Peace Prize 2024 for nuclear disarmament efforts."],
    ["Nobel Physics Prize 2024 किसे मिला?", "John Hopfield and Geoffrey Hinton", "Albert Einstein", "Stephen Hawking", "Niels Bohr", 0, "SSC CGL", "2025", "Hopfield and Hinton won 2024 Nobel Physics for AI neural network foundations."],
    ["Abel Prize 2024 किसे मिला?", "Michel Talagrand", "Terence Tao", "Andrew Wiles", "Pierre Deligne", 0, "SSC CGL", "2025", "Michel Talagrand won Abel Prize 2024 for probability and analysis."],
    ["Booker Prize 2024 किसने जीता?", "Samantha Harvey", "Salman Rushdie", "Arundhati Roy", "Hilary Mantel", 0, "MPPSC Pre", "2025", "Samantha Harvey won Booker Prize 2024 for 'Orbital'."],
    ["Oscar for Best Film 2024 किसे मिला?", "Oppenheimer", "Barbie", "Killers", "Poor Things", 0, "SSC CGL", "2024", "Oppenheimer won Best Picture at 96th Academy Awards 2024."],
    ["Jnanpith Award 2024 किसे मिला?", "गुलज़ार", "अमिताभ बच्चन", "लता मंगेशकर", "ए.आर. रहमान", 0, "MPPSC Pre", "2025", "Gulzar received Jnanpith Award for his contribution to literature."],
    ["International Day of Yoga कब मनाया जाता है?", "21 जून", "5 जून", "22 मार्च", "1 मई", 0, "MP Constable", "2024", "International Day of Yoga is celebrated on 21 June since 2015."],
    ["विश्व पर्यावरण दिवस कब मनाया जाता है?", "5 जून", "22 अप्रैल", "21 मार्च", "16 सितंबर", 0, "SSC CGL", "2024", "World Environment Day is celebrated on 5 June every year."],
    ["विश्व जल दिवस कब मनाया जाता है?", "22 मार्च", "5 जून", "21 जून", "16 सितंबर", 0, "MPPSC Pre", "2024", "World Water Day is observed on 22 March."],
    ["अंतर्राष्ट्रीय महिला दिवस कब मनाया जाता है?", "8 मार्च", "1 मई", "14 नवम्बर", "5 सितंबर", 0, "MP Constable", "2024", "International Women's Day is celebrated on 8 March."],
    ["भारत का सबसे बड़ा बैंक कौन सा है?", "SBI", "PNB", "BOB", "HDFC", 0, "SSC CGL", "2024", "State Bank of India is the largest bank in India."],
    ["भारत का सबसे पुराना बैंक कौन सा है?", "SBI (Bank of Calcutta)", "PNB", "BOB", "Allahabad Bank", 0, "MPPSC Pre", "2024", "SBI (originally Bank of Calcutta 1806) is the oldest bank in India."],
    ["RBI के वर्तमान Governor कौन हैं (2024)?", "शक्तिकांत दास", "रघुराम राजन", "उर्जित पटेल", "सी. रंगराजन", 0, "SSC CGL", "2024", "Shaktikanta Das served as RBI Governor (term extended till Dec 2024)."],
    ["UIDAI का पूरा नाम क्या है?", "Unique Identification Authority of India", "United ID Authority", "Universal ID Authority", "Union ID Auth", 0, "SSC CHSL", "2024", "UIDAI manages Aadhaar, India's 12-digit unique identity number."],
    ["Aadhaar Number कितने अंकों का होता है?", "12", "16", "10", "8", 0, "MP Constable", "2024", "Aadhaar is a 12-digit unique identification number issued by UIDAI."],
    ["PAN Card कौन जारी करता है?", "Income Tax Department", "RBI", "SEBI", "UIDAI", 0, "SSC CGL", "2024", "PAN Card is issued by Income Tax Department of India."],
    ["EPFO का पूरा नाम क्या है?", "Employees Provident Fund Organisation", "Employment Protection Fund", "Employee Payment Fund", "Economic Provident Fund", 0, "MPPSC Pre", "2024", "EPFO manages provident fund and pension for employees in India."],
    ["NPS क्या है?", "National Pension System", "National Payment System", "New Pension Scheme", "National Provider System", 0, "SSC CGL", "2024", "NPS is a voluntary retirement savings scheme for all citizens."],
    ["Swachh Bharat Mission कब शुरू हुआ?", "2 अक्टूबर 2014", "15 अगस्त 2014", "26 जनवरी 2015", "1 जनवरी 2015", 0, "MPPSC Pre", "2024", "Swachh Bharat Abhiyan launched on 2 October 2014 by PM Modi."],
    ["Jan Dhan Yojana कब शुरू हुई?", "28 अगस्त 2014", "15 अगस्त 2014", "26 जनवरी 2015", "2 अक्टूबर 2014", 0, "SSC CGL", "2024", "PM Jan Dhan Yojana launched on 28 August 2014 for financial inclusion."],
    ["Ujjwala Yojana किससे संबंधित है?", "LPG Gas Connection", "Electricity", "Water", "Internet", 0, "MP Constable", "2024", "PM Ujjwala provides free LPG connections to BPL households."],
    ["Kisan Credit Card (KCC) क्या है?", "किसानों को ऋण सुविधा", "ATM Card", "Credit Card", "Debit Card", 0, "MPPSC Pre", "2024", "KCC provides institutional credit to farmers for agriculture needs."],
    ["PMAY का पूरा नाम क्या है?", "Pradhan Mantri Awas Yojana", "PM Arogya Yojana", "PM Ayushman Yojana", "PM Agricultural Yojana", 0, "SSC CHSL", "2024", "PMAY provides affordable housing for all by 2022 (extended)."],
    ["Jal Jeevan Mission का लक्ष्य क्या है?", "हर घर नल से जल", "बिजली", "सड़क", "इंटरनेट", 0, "MPPSC Pre", "2025", "Jal Jeevan Mission aims to provide tap water to every rural household."],
    ["Poshan Abhiyan किससे संबंधित है?", "पोषण-कुपोषण", "शिक्षा", "सड़क", "बिजली", 0, "MP Constable", "2024", "POSHAN Abhiyan addresses malnutrition in women and children."],
    ["Aspirational Districts Programme किसने शुरू किया?", "NITI Aayog", "RBI", "SEBI", "UGC", 0, "MPPSC Pre", "2025", "NITI Aayog launched Aspirational Districts Programme for backward districts."],
    ["Stand Up India Scheme किसके लिए है?", "SC/ST/Women Entrepreneurs", "सभी नागरिक", "किसान", "छात्र", 0, "SSC CGL", "2024", "Stand Up India provides loans for SC/ST/Women entrepreneurs."],
    ["MSME का पूरा नाम क्या है?", "Micro Small and Medium Enterprises", "Major Small Medium Enterprises", "Minor Small Medium Enterprises", "Main Small Medium Ent", 0, "MPPSC Pre", "2024", "MSMEs are vital for India's economy contributing to employment."],
    ["Make in India Initiative कब शुरू हुई?", "25 सितंबर 2014", "15 अगस्त 2014", "26 जनवरी 2015", "1 जनवरी 2015", 0, "SSC CGL", "2024", "Make in India launched on 25 September 2014 to boost manufacturing."],
    ["Vocal for Local कब शुरू हुआ?", "2020", "2019", "2021", "2018", 0, "MPPSC Pre", "2024", "PM Modi promoted Vocal for Local in 2020 to support local businesses."],
    ["Bharat Jodo Yatra किसने की?", "राहुल गांधी", "नरेंद्र मोदी", "अमित शाह", "राजनाथ सिंह", 0, "MPPSC Pre", "2024", "Rahul Gandhi led Bharat Jodo Yatra from Kanyakumari to Kashmir in 2022-23."],
    ["Ram Mandir Inauguration कब हुआ?", "22 जनवरी 2024", "26 जनवरी 2024", "15 अगस्त 2024", "1 जनवरी 2024", 0, "MPPSC Pre", "2025", "Ram Mandir was inaugurated on 22 January 2024 in Ayodhya."],
    ["Article 25 किससे संबंधित है?", "धार्मिक स्वतंत्रता", "शिक्षा का अधिकार", "समानता", "जीवन का अधिकार", 0, "SSC CGL", "2024", "Article 25 guarantees freedom of religion to all persons."],
    ["FIFA U-17 Women's World Cup 2022 कहाँ हुआ?", "भारत", "ब्राज़ील", "फ्रांस", "जर्मनी", 0, "SSC CGL", "2024", "FIFA U-17 Women's World Cup 2022 was held in India."],
    ["WPL (Women's Premier League) 2023 किसने जीती?", "Mumbai Indians", "Delhi Capitals", "RCB", "Gujarat Giants", 0, "MPPSC Pre", "2024", "Mumbai Indians won the inaugural WPL in 2023."],
    ["प्रधानमंत्री संग्रहालय कहाँ स्थित है?", "नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई", 0, "SSC CHSL", "2024", "Pradhanmantri Sangrahalaya is in New Delhi showcasing all PMs' contributions."],
    ["National War Memorial कहाँ स्थित है?", "नई दिल्ली", "मुंबई", "पुणे", "जयपुर", 0, "MP Constable", "2024", "National War Memorial near India Gate honours soldiers who died since Independence."],
    ["Statue of Unity कहाँ स्थित है?", "गुजरात", "महाराष्ट्र", "दिल्ली", "राजस्थान", 0, "SSC CGL", "2023", "Statue of Unity is in Gujarat, world's tallest statue at 182m."],
    ["Statue of Unity किसकी प्रतिमा है?", "सरदार पटेल", "महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. अम्बेडकर", 0, "MPPSC Pre", "2024", "Statue of Unity is a statue of Sardar Vallabhbhai Patel."],
    ["विश्व की सबसे लंबी नदी कौन सी है?", "नील", "अमेज़न", "गंगा", "यांग्त्सी", 0, "SSC CGL", "2023", "Nile River is the longest river in the world at 6650 km."]
];
appendToFile('questions/mixed_gk.js', mixedMore);

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
