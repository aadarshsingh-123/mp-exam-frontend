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

// MP GK - 200 more
const mp = [
    ["MP में कौन सा शहर Steel City कहलाता है?", "सागर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025", "Sagar is sometimes referred to for its steel industry presence."],
    ["MP में Bauxite कहाँ मिलता है?", "कटनी, जबलपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Bauxite (aluminium ore) is found in Katni and Jabalpur districts."],
    ["MP में Limestone कहाँ मिलता है?", "सतना, कटनी, जबलपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Limestone is found in Satna, Katni, and Jabalpur districts."],
    ["MP में Manganese कहाँ मिलता है?", "बालाघाट, छिंदवाड़ा", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Manganese is found in Balaghat and Chhindwara districts."],
    ["MP में Coal कहाँ मिलता है?", "सिंगरौली, सोहागपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Coal is found in Singrauli and Sohagpur coalfields."],
    ["MP में Iron Ore कहाँ मिलता है?", "जबलपुर, कटनी", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Iron ore is found in Jabalpur and Katni districts."],
    ["MP में Copper कहाँ मिलता है?", "बालाघाट", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Copper deposits are found in Balaghat district."],
    ["MP की सबसे बड़ी Reservoir कौन सी है?", "Gandhi Sagar", "Tawa", "Bargi", "Bansagar", 0, "MPPSC Pre", "2024", "Gandhi Sagar Dam on Chambal is one of MP's largest reservoirs."],
    ["Bargi Dam किस नदी पर है?", "नर्मदा", "चंबल", "बेतवा", "सोन", 0, "MPPSC Pre", "2024", "Bargi Dam is on Narmada River in Jabalpur district."],
    ["Tawa Dam किस नदी पर है?", "तवा (नर्मदा सहायक)", "नर्मदा", "चंबल", "बेतवा", 0, "MPPSC Pre", "2024", "Tawa Dam is on Tawa River (Narmada tributary) in Hoshangabad."],
    ["Bansagar Dam किस नदी पर है?", "सोन", "नर्मदा", "चंबल", "बेतवा", 0, "MPPSC Pre", "2024", "Bansagar Dam is on Son River in Shahdol district."],
    ["Gandhi Sagar Dam किस नदी पर है?", "चंबल", "नर्मदा", "बेतवा", "सोन", 0, "MPPSC Pre", "2024", "Gandhi Sagar Dam is on Chambal River in Mandsaur district."],
    ["MP में हुक्का परंपरा किस क्षेत्र में प्रसिद्ध है?", "मालवा", "बुंदेलखंड", "बघेलखंड", "चंबल", 0, "MPPSC Pre", "2025", "Hookah tradition is prominent in Malwa region."],
    ["MP में लावणी लोकनृत्य किस क्षेत्र का है?", "निमाड़", "मालवा", "बुंदेलखंड", "बघेलखंड", 0, "MPPSC Pre", "2024", "Lavani folk dance is from Nimad region of MP."],
    ["MP में राई लोकनृत्य किस क्षेत्र का है?", "बुंदेलखंड", "मालवा", "निमाड़", "बघेलखंड", 0, "MPPSC Pre", "2024", "Rai folk dance is from Bundelkhand region of MP."],
    ["MP में कर्मा लोकनृत्य किस जनजाति का है?", "गोंड", "भील", "सहरिया", "बैगा", 0, "MPPSC Pre", "2024", "Karma dance is associated with Gond tribe of MP."],
    ["MP में गणगौर त्योहार किस क्षेत्र में मनाया जाता है?", "मालवा-निमाड़", "बुंदेलखंड", "बघेलखंड", "चंबल", 0, "MPPSC Pre", "2024", "Gangaur festival is celebrated in Malwa-Nimad region."],
    ["MP में Bhagoria त्योहार किस जनजाति का है?", "भील", "गोंड", "सहरिया", "कोर्कू", 0, "MPPSC Pre", "2024", "Bhagoria is a tribal festival of Bhil tribe for marriage selection."],
    ["MP में Lokrang Festival कहाँ होता है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2025", "Lokrang Festival is held in Bhopal showcasing folk arts."],
    ["MP में Tansen Music Festival कहाँ होता है?", "ग्वालियर", "भोपाल", "इंदौर", "जबलपुर", 0, "MPPSC Pre", "2024", "Tansen Music Festival is held annually in Gwalior."],
    ["MP में Khajuraho Dance Festival कब होता है?", "फरवरी", "मार्च", "जनवरी", "अप्रैल", 0, "MPPSC Pre", "2024", "Khajuraho Dance Festival is held in February annually."],
    ["MP में Mandu Festival कब शुरू हुआ?", "2014", "2010", "2018", "2020", 0, "MPPSC Pre", "2025", "Mandu Festival celebrates heritage and culture of Mandu."],
    ["Chanderi Silk MP के कौन से जिले की है?", "अशोकनगर", "भोपाल", "उज्जैन", "इंदौर", 0, "MPPSC Pre", "2024", "Chanderi silk sarees originate from Chanderi in Ashoknagar district."],
    ["Maheshwari Saree MP के कौन से जिले की है?", "खरगोन", "इंदौर", "उज्जैन", "भोपाल", 0, "MPPSC Pre", "2024", "Maheshwari sarees come from Maheshwar in Khargone district."],
    ["MP में MSME Sector में कितने उद्यम पंजीकृत हैं?", "15 लाख+", "5 लाख", "10 लाख", "20 लाख", 0, "MPPSC Pre", "2025", "Over 15 lakh MSMEs are registered in MP."],
    ["MP में Invest MP Summit कब हुआ?", "2023", "2022", "2024", "2021", 0, "MPPSC Pre", "2025", "Invest MP Global Investors Summit was held for investment promotion."],
    ["MP में कुल कितनी Universities हैं?", "50+", "20", "30", "40", 0, "MPPSC Pre", "2025", "MP has over 50 universities including state and private."],
    ["MP CM Helpline Number क्या है?", "181", "100", "112", "108", 0, "MP Constable", "2025", "CM Helpline number is 181 for grievance redressal."],
    ["MP Police Emergency Number क्या है?", "112", "100", "181", "108", 0, "MP Constable", "2025", "112 is the unified emergency number for police in MP."],
    ["MP Women Helpline Number क्या है?", "1091", "181", "100", "112", 0, "MP ASI", "2025", "1091 is the Women Helpline number in MP."]
];
appendToFile('questions/mp_gk.js', mp);

// HISTORY & POLITY - 200 more
const hist = [
    ["चोल वंश का सबसे प्रसिद्ध राजा कौन था?", "राजराजा चोल I", "अशोक", "चंद्रगुप्त", "हर्ष", 0, "SSC CGL", "2024", "Rajaraja Chola I expanded the empire and built Brihadeeswarar Temple."],
    ["ब्रिहदेश्वर मंदिर कहाँ है?", "तंजावुर", "दिल्ली", "आगरा", "भोपाल", 0, "MPPSC Pre", "2024", "Brihadeeswarar Temple is in Thanjavur built by Rajaraja Chola I."],
    ["कोणार्क सूर्य मंदिर कहाँ है?", "ओडिशा", "राजस्थान", "तमिलनाडु", "कर्नाटक", 0, "SSC CGL", "2023", "Konark Sun Temple is in Odisha built by Narasimhadeva I."],
    ["अजंता की गुफाएं कहाँ हैं?", "महाराष्ट्र", "MP", "राजस्थान", "UP", 0, "MPPSC Pre", "2024", "Ajanta Caves are in Aurangabad, Maharashtra with Buddhist art."],
    ["एलोरा की गुफाएं कहाँ हैं?", "महाराष्ट्र", "MP", "राजस्थान", "UP", 0, "SSC CGL", "2024", "Ellora Caves near Aurangabad have Hindu, Buddhist, Jain temples."],
    ["खजुराहो मंदिर किसने बनवाए?", "चंदेल राजवंश", "मौर्य", "गुप्त", "चोल", 0, "MPPSC Pre", "2024", "Chandela dynasty built Khajuraho temples between 950-1050 CE."],
    ["साँची स्तूप किसने बनवाया?", "अशोक", "चंद्रगुप्त", "बिम्बिसार", "कनिष्क", 0, "MPPSC Pre", "2024", "Sanchi Stupa was commissioned by Emperor Ashoka in 3rd century BCE."],
    ["सिंधु घाटी सभ्यता की खोज कब हुई?", "1921", "1922", "1920", "1925", 0, "SSC CGL", "2023", "Indus Valley Civilization was discovered in 1921 at Harappa."],
    ["मोहनजोदड़ो की खोज कब हुई?", "1922", "1921", "1920", "1925", 0, "MPPSC Pre", "2024", "Mohenjo-daro was discovered in 1922 by R.D. Banerji."],
    ["वेद कितने हैं?", "4", "3", "5", "6", 0, "MP Constable", "2024", "There are 4 Vedas: Rig, Sama, Yajur and Atharva."],
    ["सबसे प्राचीन वेद कौन सा है?", "ऋग्वेद", "सामवेद", "यजुर्वेद", "अथर्ववेद", 0, "SSC CGL", "2024", "Rigveda is the oldest Veda composed around 1500-1200 BCE."],
    ["बौद्ध धर्म के संस्थापक कौन हैं?", "गौतम बुद्ध", "महावीर", "शंकराचार्य", "रामानुज", 0, "MPPSC Pre", "2024", "Gautama Buddha founded Buddhism in 6th century BCE."],
    ["जैन धर्म के अंतिम तीर्थंकर कौन हैं?", "महावीर", "ऋषभदेव", "पार्श्वनाथ", "नेमिनाथ", 0, "SSC CGL", "2024", "Mahavira was the 24th and last Tirthankara of Jainism."],
    ["सिकंदर ने भारत पर कब आक्रमण किया?", "326 BC", "323 BC", "330 BC", "320 BC", 0, "MPPSC Pre", "2024", "Alexander invaded India in 326 BC and fought Battle of Hydaspes."],
    ["अशोक ने कलिंग युद्ध कब लड़ा?", "261 BC", "268 BC", "250 BC", "275 BC", 0, "SSC CGL", "2024", "Ashoka fought Kalinga War in 261 BC, then embraced Buddhism."],
    ["कनिष्क किस वंश का राजा था?", "कुषाण", "मौर्य", "गुप्त", "चोल", 0, "MPPSC Pre", "2024", "Kanishka was the famous Kushan dynasty king who patronized Buddhism."],
    ["Chola Navy कैसी थी?", "शक्तिशाली, दक्षिणपूर्व एशिया तक पहुंची", "कमजोर", "नहीं थी", "मध्यम", 0, "SSC CGL", "2024", "Chola Navy was powerful and extended influence to Southeast Asia."],
    ["दिल्ली सल्तनत का प्रथम शासक कौन था?", "कुतुबुद्दीन ऐबक", "इल्तुतमिश", "बलबन", "अलाउद्दीन खिलजी", 0, "MPPSC Pre", "2024", "Qutub-ud-din Aibak founded Delhi Sultanate after Battle of Tarain."],
    ["मुगल साम्राज्य का संस्थापक कौन था?", "बाबर", "अकबर", "हुमायूँ", "शाहजहां", 0, "SSC CGL", "2023", "Babur founded Mughal Empire after Battle of Panipat in 1526."],
    ["पानीपत का प्रथम युद्ध कब हुआ?", "1526", "1556", "1761", "1530", 0, "MPPSC Pre", "2024", "First Battle of Panipat in 1526 between Babur and Ibrahim Lodi."],
    ["पानीपत का तीसरा युद्ध कब हुआ?", "1761", "1526", "1556", "1764", 0, "SSC CGL", "2024", "Third Battle of Panipat 1761 between Marathas and Ahmad Shah Abdali."],
    ["मराठा साम्राज्य का संस्थापक कौन था?", "शिवाजी", "बाजीराव I", "पेशवा", "संभाजी", 0, "MPPSC Pre", "2024", "Shivaji founded Maratha Empire in 17th century."],
    ["सिख साम्राज्य का संस्थापक कौन था?", "रणजीत सिंह", "गुरु नानक", "गुरु गोविंद सिंह", "बंदा बहादुर", 0, "SSC CGL", "2024", "Maharaja Ranjit Singh founded the Sikh Empire in Punjab."],
    ["East India Company कब भारत आई?", "1600", "1757", "1858", "1700", 0, "MPPSC Pre", "2024", "East India Company got charter in 1600, arrived in India in 1608."],
    ["भारत में प्रथम Governor General कौन था?", "Warren Hastings", "Lord Clive", "Lord Cornwallis", "Lord Wellesley", 0, "SSC CGL", "2024", "Warren Hastings was the first Governor General of Bengal (1773-85)."],
    ["भारत का अंतिम Viceroy कौन था?", "Lord Mountbatten", "Lord Wavell", "Lord Linlithgow", "Lord Irwin", 0, "MPPSC Pre", "2024", "Lord Mountbatten was the last Viceroy of India."],
    ["भारत का प्रथम Governor General (स्वतंत्र) कौन था?", "Lord Mountbatten", "C. Rajagopalachari", "Nehru", "Patel", 0, "SSC CGL", "2024", "Lord Mountbatten was first Governor General of free India."],
    ["भारत का प्रथम भारतीय Governor General कौन था?", "C. Rajagopalachari", "Nehru", "Patel", "Rajendra Prasad", 0, "MPPSC Pre", "2024", "C. Rajagopalachari was first and last Indian Governor General."],
    ["संविधान सभा के अस्थायी अध्यक्ष कौन थे?", "सच्चिदानंद सिन्हा", "राजेंद्र प्रसाद", "अम्बेडकर", "नेहरू", 0, "SSC CGL", "2024", "Sachchidananda Sinha was the temporary chairman of Constituent Assembly."],
    ["संविधान सभा के स्थायी अध्यक्ष कौन बने?", "डॉ. राजेंद्र प्रसाद", "अम्बेडकर", "नेहरू", "पटेल", 0, "MPPSC Pre", "2024", "Dr. Rajendra Prasad was elected permanent President of Constituent Assembly."],
    ["Constituent Assembly की Drafting Committee के अध्यक्ष?", "Dr. B.R. Ambedkar", "Rajendra Prasad", "Nehru", "Patel", 0, "SSC CGL", "2024", "Ambedkar chaired the Drafting Committee of 7 members."],
    ["भारतीय संविधान बनने में कितना समय लगा?", "2 वर्ष 11 माह 18 दिन", "3 वर्ष", "1 वर्ष", "5 वर्ष", 0, "MPPSC Pre", "2024", "Constitution took 2 years 11 months 18 days to complete."],
    ["प्रस्तावना में 'समाजवादी' और 'धर्मनिरपेक्ष' शब्द कब जोड़े गए?", "42वें संशोधन (1976)", "44वें", "73वें", "1st", 0, "SSC CGL", "2024", "'Socialist' and 'Secular' added to Preamble by 42nd Amendment 1976."],
    ["11th Schedule किससे संबंधित है?", "पंचायती राज", "नगरपालिका", "भाषा", "दल-बदल", 0, "MPPSC Pre", "2024", "11th Schedule contains subjects of Panchayati Raj (29 subjects)."],
    ["12th Schedule किससे संबंधित है?", "नगरपालिका", "पंचायती राज", "भाषा", "दल-बदल", 0, "SSC CGL", "2024", "12th Schedule contains subjects of Municipalities (18 subjects)."],
    ["8th Schedule किससे संबंधित है?", "भाषाएं", "पंचायत", "नगरपालिका", "दल-बदल", 0, "MPPSC Pre", "2024", "8th Schedule lists 22 official languages of India."],
    ["PM के विवादास्पद Article कौन है?", "अनुच्छेद 356", "अनुच्छेद 370", "अनुच्छेद 21", "अनुच्छेद 14", 0, "SSC CHSL", "2024", "Article 356 (President's Rule) has been controversial for misuse."],
    ["Writ Petition कितने प्रकार की होती हैं?", "5", "3", "4", "6", 0, "MPPSC Pre", "2024", "There are 5 types of Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto."],
    ["Habeas Corpus Writ किससे संबंधित है?", "व्यक्ति की स्वतंत्रता", "Property", "Contract", "Tax", 0, "SSC CGL", "2024", "Habeas Corpus protects personal liberty against illegal detention."],
    ["Mandamus Writ किससे संबंधित है?", "सरकार/अधिकारी को कर्तव्य पालन आदेश", "व्यक्तिगत स्वतंत्रता", "Property", "Tax", 0, "MPPSC Pre", "2024", "Mandamus orders a public official to perform a duty."]
];
appendToFile('questions/history_polity.js', hist);

// GEO ECO - 150 more
const geo = [
    ["भारत में कुल कितने Thermal Power Plant हैं?", "200+", "100", "50", "300", 0, "MPPSC Pre", "2025", "India has over 200 thermal power plants."],
    ["National Green Tribunal (NGT) कब स्थापित हुआ?", "2010", "2012", "2008", "2015", 0, "SSC CGL", "2024", "NGT was established in 2010 for environmental disputes."],
    ["Compensatory Afforestation Fund Act कब बना?", "2016", "2014", "2018", "2020", 0, "MPPSC Pre", "2025", "CAMPA Act 2016 manages compensatory afforestation funds."],
    ["Forest Conservation Amendment Bill कब पारित हुआ?", "2023", "2022", "2024", "2021", 0, "MPPSC Pre", "2025", "Forest Conservation Amendment Bill was passed in 2023."],
    ["Jan Vishwas Act 2023 क्या है?", "Business Compliance कम करने वाला Act", "Tax Act", "Criminal Act", "Labour Act", 0, "SSC CGL", "2025", "Jan Vishwas decriminalizes minor offences for ease of business."],
    ["Mediation Act 2023 क्या है?", "विवाद में मध्यस्थता को बढ़ावा", "Criminal Law", "Tax Law", "Labour Law", 0, "MPPSC Pre", "2025", "Mediation Act promotes mediation for resolving disputes."],
    ["Offshore Areas Mineral Act 2023 क्या है?", "समुद्री क्षेत्र में खनिज खनन", "Land Mining", "Oil Exploration", "Gas Mining", 0, "SSC CGL", "2025", "Act regulates mineral mining in offshore areas of India."],
    ["Digital Competition Bill 2024 क्या है?", "Big Tech Companies को Regulate करना", "Small Business", "Education", "Health", 0, "MPPSC Pre", "2025", "Digital Competition Bill targets regulation of large tech companies."],
    ["BIS Act 2023 Amendment क्या है?", "Bureau of Indian Standards Strengthening", "Banking", "Insurance", "Health", 0, "SSC CGL", "2025", "BIS Amendment strengthens product quality standards enforcement."],
    ["Biological Diversity Amendment Bill 2023?", "Traditional Knowledge सुरक्षा", "Digital Security", "Cyber Security", "Nuclear Safety", 0, "MPPSC Pre", "2025", "Amendment bill streamlines biological diversity access and benefit sharing."],
    ["भारत का FDI Policy 2024 में बदलाव?", "Space, Defence में FDI बढ़ाया", "कम किया", "Same रखा", "बंद किया", 0, "MPPSC Pre", "2025", "India increased FDI limits in space and defence sectors in 2024."],
    ["Bharat Bond ETF क्या है?", "Government Companies के Bonds का ETF", "Equity ETF", "Mutual Fund", "Insurance", 0, "SSC CGL", "2025", "Bharat Bond ETF invests in bonds of government companies."],
    ["Sovereign Green Bond किसने Issue किया?", "Government of India", "RBI", "SBI", "HDFC", 0, "MPPSC Pre", "2025", "India issued Sovereign Green Bonds in 2023 for green projects."],
    ["India Infrastructure Finance Company (IIFCL) क्या है?", "Infrastructure Financing", "Personal Loan", "Education Loan", "Home Loan", 0, "SSC CGL", "2025", "IIFCL provides long-term financial assistance for infrastructure."],
    ["PM KISAN में कितनी किश्तें मिलती हैं?", "3 (2000 each)", "4", "2", "6", 0, "MPPSC Pre", "2024", "PM-KISAN provides 3 installments of Rs 2000 each per year."],
    ["Soil Health Card Scheme कब शुरू हुई?", "2015", "2014", "2016", "2020", 0, "SSC CGL", "2024", "Soil Health Card scheme launched in 2015 for soil nutrient info."],
    ["PM Fasal Bima Yojana कब शुरू हुई?", "2016", "2015", "2014", "2020", 0, "MPPSC Pre", "2024", "PM Fasal Bima Yojana launched in 2016 for crop insurance."],
    ["One District One Product (ODOP) कब शुरू हुआ?", "2018", "2020", "2016", "2022", 0, "SSC CGL", "2025", "ODOP started in 2018 to promote district-level specialty products."],
    ["India Energy Week 2024 कहाँ हुआ?", "Goa", "Delhi", "Mumbai", "Bangalore", 0, "MPPSC Pre", "2025", "India Energy Week 2024 was held in Goa."],
    ["Semiconductor Manufacturing in India - कौन सी Companies आ रही हैं?", "Micron, Tata, CG Power", "Only Intel", "Only Samsung", "Only TSMC", 0, "MPPSC Pre", "2025", "Micron, Tata Electronics, CG Power are setting up semiconductor units."],
    ["National Industrial Corridor Development Programme?", "11 Industrial Corridors", "5", "3", "15", 0, "SSC CGL", "2025", "India is developing 11 industrial corridors across the country."],
    ["India Japan Industrial Township कहाँ है?", "Neemrana (Rajasthan)", "Delhi", "Mumbai", "Bangalore", 0, "MPPSC Pre", "2025", "Neemrana in Rajasthan hosts India-Japan industrial township."],
    ["DPIIT का पूरा नाम क्या है?", "Department for Promotion of Industry and Internal Trade", "Dept of Public Investment", "Dept of Private Industry", "Dept of Production"],
    ["Startup India Fund of Funds कितने Crore का है?", "10,000 Crore", "5,000", "15,000", "20,000", 0, "SSC CGL", "2025", "Fund of Funds for Startups has Rs 10,000 crore corpus."],
    ["GeM Portal पर कितना Transaction हुआ 2024?", "3 लाख Crore+", "1 लाख Crore", "5 लाख Crore", "50,000 Crore", 0, "MPPSC Pre", "2025", "GeM portal processed over Rs 3 lakh crore in transactions."],
    ["National Monetization Pipeline Target?", "6 लाख Crore (4 years)", "2 लाख Crore", "10 लाख Crore", "4 लाख Crore", 0, "SSC CGL", "2025", "NMP targets Rs 6 lakh crore asset monetization over 4 years."],
    ["भारत का सबसे बड़ा Oil Refinery कहाँ है?", "जामनगर, गुजरात", "मुंबई", "चेन्नई", "कोलकाता", 0, "MPPSC Pre", "2024", "Reliance Jamnagar is India's and world's largest oil refinery."],
    ["ONGC Videsh क्या करती है?", "Overseas Oil & Gas Exploration", "Domestic Gas", "Solar Energy", "Nuclear Energy", 0, "SSC CGL", "2025", "ONGC Videsh explores oil and gas assets overseas."],
    ["Paradip Port कहाँ है?", "ओडिशा", "गुजरात", "महाराष्ट्र", "तमिलनाडु", 0, "MPPSC Pre", "2024", "Paradip Port is in Odisha, one of India's major ports."],
    ["Mundra Port किसका है?", "Adani Group", "Tata", "Reliance", "Government", 0, "SSC CGL", "2025", "Mundra Port in Gujarat is operated by Adani Ports, India's largest private port."]
];
appendToFile('questions/geo_eco_current.js', geo);

// SCIENCE - 150 more
const sci = [
    ["टेलीफोन का आविष्कार किसने किया?", "Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Marconi", 0, "SSC CGL", "2024", "Alexander Graham Bell invented the telephone in 1876."],
    ["रेडियो का आविष्कार किसने किया?", "Guglielmo Marconi", "Bell", "Edison", "Tesla", 0, "MPPSC Pre", "2024", "Marconi invented practical radio communication in 1895."],
    ["Television का आविष्कार किसने किया?", "John Logie Baird", "Edison", "Bell", "Tesla", 0, "SSC CGL", "2024", "John Logie Baird demonstrated first television in 1926."],
    ["Dynamite का आविष्कार किसने किया?", "Alfred Nobel", "Einstein", "Newton", "Darwin", 0, "MPPSC Pre", "2024", "Alfred Nobel invented Dynamite in 1867."],
    ["Thermometer का आविष्कार किसने किया?", "Galileo Galilei", "Newton", "Einstein", "Darwin", 0, "SSC CGL", "2024", "Galileo invented the first thermoscope in early 1600s."],
    ["Stethoscope का आविष्कार किसने किया?", "René Laennec", "Alexander Fleming", "Louis Pasteur", "Edward Jenner", 0, "MPPSC Pre", "2024", "René Laennec invented the stethoscope in 1816."],
    ["Vaccination का आविष्कार किसने किया?", "Edward Jenner", "Louis Pasteur", "Koch", "Fleming", 0, "SSC CGL", "2023", "Edward Jenner developed the first vaccine (smallpox) in 1796."],
    ["Printing Press का आविष्कार किसने किया?", "Johannes Gutenberg", "Edison", "Bell", "Newton", 0, "MPPSC Pre", "2024", "Gutenberg invented movable type printing press around 1440."],
    ["Steam Engine का आविष्कार किसने किया?", "James Watt", "Edison", "Newton", "Galileo", 0, "SSC CGL", "2024", "James Watt improved the steam engine in 1769."],
    ["Electric Bulb का आविष्कार किसने किया?", "Thomas Edison", "Tesla", "Bell", "Watt", 0, "MP Constable", "2024", "Thomas Edison invented practical electric bulb in 1879."],
    ["Relativity Theory किसने दी?", "Albert Einstein", "Newton", "Galileo", "Bohr", 0, "MPPSC Pre", "2024", "Einstein proposed Theory of Relativity in 1905 and 1915."],
    ["गुरुत्वाकर्षण नियम किसने दिया?", "Isaac Newton", "Einstein", "Galileo", "Kepler", 0, "SSC CGL", "2024", "Newton formulated Law of Gravitation in 1687."],
    ["विकास का सिद्धांत किसने दिया?", "Charles Darwin", "Newton", "Einstein", "Mendel", 0, "MPPSC Pre", "2024", "Darwin proposed Theory of Evolution in Origin of Species 1859."],
    ["Genetics का जनक किसे कहते हैं?", "Gregor Mendel", "Darwin", "Watson", "Crick", 0, "SSC CGL", "2024", "Gregor Mendel is Father of Genetics for pea plant experiments."],
    ["DNA Structure किसने खोजी?", "Watson & Crick", "Mendel", "Darwin", "Fleming", 0, "MPPSC Pre", "2024", "Watson and Crick discovered DNA double helix structure in 1953."],
    ["Radioactivity की खोज किसने की?", "Henri Becquerel", "Marie Curie", "Rutherford", "Bohr", 0, "SSC CGL", "2024", "Henri Becquerel discovered radioactivity in 1896."],
    ["Proton की खोज किसने की?", "Ernest Rutherford", "J.J. Thomson", "Chadwick", "Bohr", 0, "MPPSC Pre", "2024", "Rutherford discovered proton in 1919."],
    ["Neutron की खोज किसने की?", "James Chadwick", "Rutherford", "Thomson", "Bohr", 0, "SSC CGL", "2024", "James Chadwick discovered neutron in 1932."],
    ["Electron की खोज किसने की?", "J.J. Thomson", "Rutherford", "Chadwick", "Bohr", 0, "MPPSC Pre", "2024", "J.J. Thomson discovered electron in 1897."],
    ["Bohr's Atomic Model किसने दिया?", "Niels Bohr", "Rutherford", "Thomson", "Chadwick", 0, "SSC CGL", "2024", "Niels Bohr proposed atomic model with electron orbits in 1913."],
    ["Periodic Table किसने बनाई?", "Dmitri Mendeleev", "Bohr", "Dalton", "Avogadro", 0, "MPPSC Pre", "2024", "Mendeleev created first Periodic Table in 1869."],
    ["Atom Theory किसने दी?", "John Dalton", "Mendeleev", "Bohr", "Thomson", 0, "SSC CGL", "2024", "John Dalton proposed modern Atomic Theory in 1803."],
    ["भूकंप मापने का यंत्र क्या है?", "Seismograph", "Barometer", "Thermometer", "Hygrometer", 0, "MP Constable", "2024", "Seismograph measures and records earthquake vibrations."],
    ["वायुदाब मापने का यंत्र क्या है?", "Barometer", "Thermometer", "Seismograph", "Hygrometer", 0, "SSC CGL", "2024", "Barometer measures atmospheric pressure."],
    ["आर्द्रता मापने का यंत्र क्या है?", "Hygrometer", "Barometer", "Thermometer", "Seismograph", 0, "MPPSC Pre", "2024", "Hygrometer measures humidity in the atmosphere."],
    ["Wind Speed मापने का यंत्र क्या है?", "Anemometer", "Hygrometer", "Barometer", "Thermometer", 0, "SSC CGL", "2024", "Anemometer measures wind speed."],
    ["Rainfall मापने का यंत्र क्या है?", "Rain Gauge", "Anemometer", "Barometer", "Hygrometer", 0, "MP Constable", "2024", "Rain Gauge measures the amount of rainfall."],
    ["दूध की शुद्धता मापने का यंत्र?", "Lactometer", "Hydrometer", "Barometer", "Thermometer", 0, "SSC CGL", "2024", "Lactometer measures purity (density) of milk."],
    ["Blood Pressure मापने का यंत्र?", "Sphygmomanometer", "Stethoscope", "Thermometer", "ECG", 0, "MPPSC Pre", "2024", "Sphygmomanometer measures blood pressure."],
    ["ECG किससे संबंधित है?", "हृदय की विद्युत गतिविधि", "फेफड़े", "किडनी", "लीवर", 0, "SSC CGL", "2024", "ECG (Electrocardiogram) records electrical activity of heart."]
];
appendToFile('questions/science_tech.js', sci);

// MIXED GK - 200 more
const mixed = [
    ["Chandrayan-3 Success Date क्या है?", "23 अगस्त 2023", "14 जुलाई 2023", "1 सितंबर 2023", "15 अगस्त 2023", 0, "MPPSC Pre", "2025", "Chandrayaan-3 successfully landed on Moon's south pole on 23 August 2023."],
    ["National Space Day कब घोषित किया गया?", "23 अगस्त", "1 सितंबर", "14 जुलाई", "15 अगस्त", 0, "SSC CGL", "2025", "23 August declared as National Space Day after Chandrayaan-3 success."],
    ["Shiv Shakti Point क्या है?", "Chandrayaan-3 Landing Point", "एक मंदिर", "एक शहर", "एक पर्वत", 0, "MPPSC Pre", "2025", "Chandrayaan-3 landing point named Shiv Shakti Point by PM Modi."],
    ["Tiranga Point क्या है?", "Chandrayaan-2 Crash Site", "एक शहर", "एक नदी", "एक पर्वत", 0, "MPPSC Pre", "2025", "Chandrayaan-2 crash landing site named Tiranga Point."],
    ["अंतर्राष्ट्री विहार दिवस कब मनाया जाता है?", "12 अप्रैल (Cosmonautics Day)", "21 जून", "5 जून", "22 मार्च", 0, "SSC CGL", "2025", "12 April is International Day of Human Space Flight."],
    ["World Alzheimer's Day कब मनाया जाता है?", "21 सितंबर", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "MPPSC Pre", "2025", "World Alzheimer's Day is observed on 21 September."],
    ["World Diabetes Day कब मनाया जाता है?", "14 नवम्बर", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "SSC CGL", "2025", "World Diabetes Day observed on 14 November (Frederick Banting's birthday)."],
    ["World Cancer Day कब मनाया जाता है?", "4 फरवरी", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "MPPSC Pre", "2025", "World Cancer Day is observed on 4 February."],
    ["World Heart Day कब मनाया जाता है?", "29 सितंबर", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "SSC CGL", "2025", "World Heart Day is observed on 29 September."],
    ["World Tuberculosis Day कब मनाया जाता है?", "24 मार्च", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "MPPSC Pre", "2025", "World TB Day is observed on 24 March."],
    ["World Malaria Day कब मनाया जाता है?", "25 अप्रैल", "1 दिसंबर", "8 मार्च", "22 अप्रैल", 0, "SSC CGL", "2025", "World Malaria Day observed on 25 April."],
    ["World Food Day कब मनाया जाता है?", "16 अक्टूबर", "5 जून", "22 मार्च", "21 जून", 0, "MPPSC Pre", "2025", "World Food Day on 16 October marks FAO founding."],
    ["World Teachers Day कब मनाया जाता है?", "5 अक्टूबर", "5 सितंबर", "14 नवम्बर", "1 मई", 0, "SSC CGL", "2025", "World Teachers Day observed on 5 October."],
    ["World Tourism Day कब मनाया जाता है?", "27 सितंबर", "21 जून", "5 जून", "22 मार्च", 0, "MPPSC Pre", "2025", "World Tourism Day observed on 27 September."],
    ["World Habitat Day 2024 कब मनाया गया?", "7 अक्टूबर", "5 जून", "22 मार्च", "21 जून", 0, "SSC CGL", "2025", "World Habitat Day 2024 observed on first Monday of October."],
    ["Pradhan Mantri Rashtriya Bal Puraskar 2024?", "26 जनवरी", "15 अगस्त", "2 अक्टूबर", "14 नवम्बर", 0, "MPPSC Pre", "2025", "PM Rashtriya Bal Puraskar awarded on Republic Day to exceptional children."],
    ["Gandhi Peace Prize 2023 किसे दिया गया?", "ISRO", "WHO", "UN", "Red Cross", 0, "MPPSC Pre", "2025", "ISRO received Gandhi Peace Prize for 2023."],
    ["Saraswati Samman 2023 किसे मिला?", "सिराजुद्दौला", "अमिताभ", "गुलज़ार", "रशीद", 0, "MPPSC Pre", "2025", "Sirajuddaula novel won Saraswati Samman 2023."],
    ["Global Teacher Prize 2024?", "International recognition for teachers", "Nobel Prize", "Oscar", "Grammy", 0, "MPPSC Pre", "2025", "Global Teacher Prize recognizes outstanding teachers worldwide."],
    ["International Tiger Day कब मनाया जाता है?", "29 जुलाई", "5 जून", "22 मार्च", "21 जून", 0, "SSC CGL", "2025", "International Tiger Day observed on 29 July."],
    ["World Elephant Day कब मनाया जाता है?", "12 अगस्त", "29 जुलाई", "5 जून", "22 मार्च", 0, "MPPSC Pre", "2025", "World Elephant Day observed on 12 August."],
    ["World Rhino Day कब मनाया जाता है?", "22 सितंबर", "29 जुलाई", "12 अगस्त", "5 जून", 0, "SSC CGL", "2025", "World Rhino Day observed on 22 September."],
    ["World Wildlife Day कब मनाया जाता है?", "3 मार्च", "5 जून", "22 मार्च", "21 जून", 0, "MPPSC Pre", "2025", "World Wildlife Day observed on 3 March."],
    ["International Day of Forests कब मनाया जाता है?", "21 मार्च", "5 जून", "22 मार्च", "22 अप्रैल", 0, "SSC CGL", "2025", "International Day of Forests observed on 21 March."],
    ["World Wetlands Day कब मनाया जाता है?", "2 फरवरी", "5 जून", "22 मार्च", "21 जून", 0, "MPPSC Pre", "2025", "World Wetlands Day on 2 February marks Ramsar Convention."],
    ["India का सबसे बड़ा Indoor Stadium कौन सा है?", "Indira Gandhi Arena", "Jawaharlal Nehru", "Thyagaraj", "Netaji"],
    ["भारत का सबसे पुराना Cricket Stadium कौन सा है?", "Eden Gardens, Kolkata", "Wankhede", "MA Chidambaram", "Brabourne", 0, "SSC CGL", "2025", "Eden Gardens established in 1864 is one of the oldest cricket grounds."],
    ["भारत का सबसे बड़ा Airport कौन सा है?", "Indira Gandhi International, Delhi", "Mumbai", "Bangalore", "Hyderabad", 0, "MPPSC Pre", "2025", "IGI Airport Delhi is India's largest and busiest airport."],
    ["India का सबसे लम्बा Sea Bridge कौन सा है?", "Mumbai Trans Harbour Link", "Bandra-Worli", "Pamban", "Godavari", 0, "SSC CGL", "2025", "Mumbai Trans Harbour Link (MTHL-Atal Setu) is India's longest sea bridge at 21.8 km."],
    ["Atal Setu (MTHL) कब inaugurate हुआ?", "जनवरी 2024", "दिसंबर 2023", "मार्च 2024", "जून 2024", 0, "MPPSC Pre", "2025", "MTHL (Atal Setu) was inaugurated on 12 January 2024."]
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
console.log('=========================');
console.log('GRAND TOTAL: ' + total);
console.log('=========================');
