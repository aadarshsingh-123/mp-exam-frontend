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

// GEO ECO - 250 more
const geo = [
    ["PM Surya Ghar Muft Bijli Yojana में कितनी यूनिट मुफ्त बिजली मिलती है?", "300 यूनिट/माह", "100 यूनिट", "200 यूनिट", "500 यूनिट", 0, "MPPSC Pre", "2025", "300 units of free electricity per month under PM Surya Ghar scheme."],
    ["National Logistics Policy कब शुरू हुई?", "17 सितंबर 2022", "15 अगस्त 2022", "26 जनवरी 2023", "1 जनवरी 2023", 0, "SSC CGL", "2024", "National Logistics Policy launched on 17 September 2022."],
    ["India का सबसे बड़ा Solar Park कहाँ है?", "Bhadla, राजस्थान", "Kurnool, आंध्र", "Pavagada, कर्नाटक", "Charanka, गुजरात", 0, "MPPSC Pre", "2024", "Bhadla Solar Park in Rajasthan is India's largest at 2245 MW."],
    ["UPI Transaction 2024 में कितनी हुई?", "15 लाख करोड़+ monthly", "5 लाख करोड़", "10 लाख करोड़", "20 लाख करोड़", 0, "SSC CGL", "2025", "UPI transactions crossed Rs 15 lakh crore monthly in 2024."],
    ["India's first underwater Metro कहाँ है?", "कोलकाता", "मुंबई", "दिल्ली", "चेन्नई", 0, "MPPSC Pre", "2024", "India's first underwater metro tunnel is under Hooghly River in Kolkata."],
    ["Chenab Bridge कहाँ बना है?", "J&K", "HP", "Punjab", "उत्तराखंड", 0, "SSC CGL", "2024", "Chenab Bridge in J&K is world's highest railway bridge at 359m."],
    ["Atal Tunnel कहाँ स्थित है?", "रोहतांग, HP", "J&K", "उत्तराखंड", "सिक्किम", 0, "MPPSC Pre", "2024", "Atal Tunnel at Rohtang is world's longest highway tunnel above 10000 ft."],
    ["भारत का सबसे स्वच्छ शहर 2024 कौन है?", "इंदौर/सूरत", "दिल्ली", "मुंबई", "बेंगलुरु", 0, "MPPSC Pre", "2025", "Indore and Surat have been top cleanest cities."],
    ["FAME Scheme किससे संबंधित है?", "Electric Vehicles", "Solar Energy", "Wind Energy", "Nuclear Energy", 0, "SSC CGL", "2024", "FAME promotes Faster Adoption of Electric Vehicles."],
    ["PM e-Bus Sewa Scheme का उद्देश्य क्या है?", "शहरों में Electric Bus चलाना", "Diesel Bus", "CNG Bus", "Petrol Bus", 0, "MPPSC Pre", "2025", "PM e-Bus Sewa deploys electric buses in cities for green transport."],
    ["Sagarmala Project किससे संबंधित है?", "Port-led Development", "Airport", "Railway", "Highway", 0, "SSC CHSL", "2024", "Sagarmala promotes port-led industrialization and coastal development."],
    ["Bharatmala Project किससे संबंधित है?", "Highway Development", "Port Development", "Railway", "Airport", 0, "MPPSC Pre", "2024", "Bharatmala is highway development program for economic corridors."],
    ["UDAN Scheme किससे संबंधित है?", "Regional Air Connectivity", "Railway", "Road", "Waterway", 0, "SSC CGL", "2024", "UDAN provides affordable air connectivity to underserved regions."],
    ["National Monetization Pipeline क्या है?", "सरकारी Assets का monetization", "Tax Policy", "Budget", "Census", 0, "MPPSC Pre", "2025", "NMP raises funds by leasing government assets like roads, airports."],
    ["Carbon Credit Trading का भारत में कार्बन बाजार कब शुरू हुआ?", "2023", "2022", "2024", "2021", 0, "SSC CGL", "2025", "India's carbon credit trading scheme was notified in 2023."],
    ["Green GDP क्या है?", "पर्यावरण लागत घटाकर GDP", "Normal GDP", "Per Capita GDP", "Nominal GDP", 0, "MPPSC Pre", "2024", "Green GDP accounts for environmental degradation in economic output."],
    ["SDG का पूरा नाम क्या है?", "Sustainable Development Goals", "Social Development Goals", "Strategic Development Goals", "Standard Development Goals", 0, "SSC CGL", "2024", "SDGs are 17 goals adopted by UN for sustainable development by 2030."],
    ["SDGs में कुल कितने Goals हैं?", "17", "15", "20", "10", 0, "MP Constable", "2024", "There are 17 Sustainable Development Goals set by UN."],
    ["Paris Agreement किस साल हुआ?", "2015", "2016", "2014", "2017", 0, "MPPSC Pre", "2024", "Paris Climate Agreement was adopted in 2015 at COP21."],
    ["भारत का Net Zero Target कब तक है?", "2070", "2050", "2060", "2080", 0, "SSC CGL", "2024", "India aims to achieve Net Zero carbon emissions by 2070."],
    ["Panchamrit Climate Goals किसने announce किए?", "PM Modi at COP26", "COP27", "COP28", "UN Assembly", 0, "MPPSC Pre", "2025", "PM Modi announced Panchamrit climate targets at COP26 Glasgow."],
    ["National Hydrogen Mission का लक्ष्य क्या है?", "Green Hydrogen Hub बनाना", "Oil Production", "Coal Mining", "Gas Extraction", 0, "MPPSC Pre", "2025", "National Hydrogen Mission aims to make India a Global Green Hydrogen Hub."],
    ["Suez Canal किन समुद्रों को जोड़ती है?", "Mediterranean और Red Sea", "Atlantic और Pacific", "Indian और Pacific", "Arctic और Atlantic", 0, "SSC CGL", "2023", "Suez Canal connects Mediterranean Sea and Red Sea."],
    ["Panama Canal किन महासागरों को जोड़ती है?", "Atlantic और Pacific", "Indian और Pacific", "Arctic और Atlantic", "Mediterranean और Red", 0, "MPPSC Pre", "2024", "Panama Canal connects Atlantic and Pacific Oceans."],
    ["Strait of Malacca कहाँ स्थित है?", "मलेशिया और इंडोनेशिया के बीच", "भारत और श्रीलंका", "UK और फ्रांस", "तुर्की", 0, "SSC CHSL", "2024", "Strait of Malacca is between Malaysia and Indonesia."],
    ["Strait of Hormuz क्यों महत्वपूर्ण है?", "Oil Transport Route", "Fishing", "Tourism", "Mining", 0, "MPPSC Pre", "2024", "Strait of Hormuz is crucial for global oil transportation."],
    ["Dead Sea कहाँ स्थित है?", "Israel-Jordan", "India-Pakistan", "US-Canada", "Russia-China", 0, "SSC CGL", "2023", "Dead Sea is between Israel and Jordan, lowest point on earth."],
    ["Mariana Trench कहाँ स्थित है?", "Pacific Ocean", "Atlantic", "Indian Ocean", "Arctic", 0, "MPPSC Pre", "2024", "Mariana Trench in Pacific Ocean is deepest point at 11034m."],
    ["Mount Everest की ऊंचाई कितनी है?", "8848.86 m", "8800 m", "8900 m", "9000 m", 0, "MP Constable", "2024", "Mount Everest height is 8848.86 meters as per 2020 survey."],
    ["Amazon Rainforest कहाँ स्थित है?", "दक्षिण अमेरिका", "अफ्रीका", "एशिया", "यूरोप", 0, "SSC CGL", "2024", "Amazon Rainforest is in South America, the largest tropical forest."],
    ["Great Barrier Reef कहाँ स्थित है?", "ऑस्ट्रेलिया", "अफ्रीका", "एशिया", "यूरोप", 0, "MPPSC Pre", "2024", "Great Barrier Reef is off Australia's coast, world's largest coral reef."],
    ["Sahara Desert किस महाद्वीप में है?", "अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया", 0, "MP Constable", "2024", "Sahara Desert is in Africa, the largest hot desert in the world."],
    ["Ring of Fire किस Ocean में है?", "Pacific", "Atlantic", "Indian", "Arctic", 0, "SSC CGL", "2024", "Ring of Fire is a zone of volcanic activity around the Pacific Ocean."],
    ["भारत का सबसे पूर्वी राज्य कौन सा है?", "अरुणाचल प्रदेश", "नागालैंड", "मेघालय", "मणिपुर", 0, "MPPSC Pre", "2024", "Arunachal Pradesh is the easternmost state of India."],
    ["भारत का सबसे पश्चिमी बिंदु कौन सा है?", "गुहार मोती, गुजरात", "द्वारका", "कच्छ", "राजकोट", 0, "SSC CHSL", "2024", "Guhar Moti in Gujarat is the westernmost point of India."],
    ["भारत का सबसे दक्षिणी बिंदु कौन सा है?", "इंदिरा पॉइंट", "कन्याकुमारी", "रामेश्वरम", "तूतीकोरिन", 0, "MPPSC Pre", "2024", "Indira Point (Great Nicobar) is India's southernmost point."],
    ["भारत का सबसे उत्तरी बिंदु कौन सा है?", "इंदिरा कॉल", "K2", "कंचनजंगा", "नंदा देवी", 0, "SSC CGL", "2024", "Indira Col in J&K is India's northernmost point."],
    ["Indian Ocean Rim Association (IORA) में कितने देश हैं?", "23", "20", "25", "30", 0, "MPPSC Pre", "2025", "IORA has 23 member states bordering the Indian Ocean."],
    ["QUAD में कौन से देश हैं?", "India, US, Japan, Australia", "India, US, China, Japan", "India, UK, France, Germany", "India, Russia, China, Brazil", 0, "SSC CGL", "2024", "QUAD includes India, USA, Japan, and Australia."],
    ["I2U2 Group में कौन से देश हैं?", "India, Israel, UAE, US", "India, Iran, UK, US", "India, Iraq, UAE, US", "India, Indonesia, UK, US", 0, "MPPSC Pre", "2025", "I2U2 includes India, Israel, UAE, and United States."],
    ["OPEC+ का मुख्यालय कहाँ है?", "वियना, ऑस्ट्रिया", "वॉशिंगटन", "न्यूयॉर्क", "लंदन", 0, "SSC CGL", "2024", "OPEC headquarters is in Vienna, Austria."],
    ["Asian Development Bank का मुख्यालय कहाँ है?", "मनीला, फिलीपींस", "टोक्यो", "बीजिंग", "नई दिल्ली", 0, "MPPSC Pre", "2024", "ADB headquarters is in Manila, Philippines."],
    ["New Development Bank (BRICS Bank) का मुख्यालय कहाँ है?", "शंघाई, चीन", "बीजिंग", "मॉस्को", "नई दिल्ली", 0, "SSC CGL", "2025", "NDB headquarters is in Shanghai, China."],
    ["AIIB का मुख्यालय कहाँ है?", "बीजिंग, चीन", "शंघाई", "टोक्यो", "मनीला", 0, "MPPSC Pre", "2025", "Asian Infrastructure Investment Bank HQ is in Beijing."],
    ["International Court of Justice कहाँ है?", "हेग, नीदरलैंड्स", "न्यूयॉर्क", "जिनेवा", "लंदन", 0, "SSC CHSL", "2024", "ICJ is located at The Hague, Netherlands."],
    ["Interpol का मुख्यालय कहाँ है?", "ल्यों, फ्रांस", "पेरिस", "वॉशिंगटन", "लंदन", 0, "MPPSC Pre", "2024", "Interpol headquarters is in Lyon, France."],
    ["UNESCO का मुख्यालय कहाँ है?", "पेरिस, फ्रांस", "न्यूयॉर्क", "जिनेवा", "लंदन", 0, "SSC CGL", "2024", "UNESCO headquarters is in Paris, France."],
    ["WHO का मुख्यालय कहाँ है?", "जिनेवा, स्विट्ज़रलैंड", "न्यूयॉर्क", "वॉशिंगटन", "लंदन", 0, "MP Constable", "2024", "WHO headquarters is in Geneva, Switzerland."],
    ["ILO का मुख्यालय कहाँ है?", "जिनेवा", "पेरिस", "न्यूयॉर्क", "लंदन", 0, "SSC CGL", "2024", "International Labour Organization HQ is in Geneva."],
    ["FAO का मुख्यालय कहाँ है?", "रोम, इटली", "पेरिस", "जिनेवा", "न्यूयॉर्क", 0, "MPPSC Pre", "2024", "Food and Agriculture Organization HQ is in Rome, Italy."]
];
appendToFile('questions/geo_eco_current.js', geo);

// SCIENCE - 250 more
const sci = [
    ["XPoSat Mission ISRO का कब launch हुआ?", "1 जनवरी 2024", "1 फरवरी 2024", "1 मार्च 2024", "1 अप्रैल 2024", 0, "MPPSC Pre", "2025", "XPoSat launched on 1 January 2024 for X-ray Polarimetry."],
    ["NISAR Satellite किन देशों का joint mission है?", "India और USA", "India और Russia", "India और France", "India और Japan", 0, "SSC CGL", "2025", "NISAR is joint NASA-ISRO SAR mission for Earth observation."],
    ["SSLV Rocket ISRO का क्या है?", "Small Satellite Launch Vehicle", "Super Satellite Launch Vehicle", "Standard Space Launch Vehicle", "Special System Launch Vehicle", 0, "MPPSC Pre", "2024", "SSLV is ISRO's small satellite launch vehicle for on-demand missions."],
    ["Prithvi Missile की Range कितनी है?", "150-350 km", "500 km", "1000 km", "2000 km", 0, "SSC CGL", "2024", "Prithvi missile variants have range of 150-350 km."],
    ["BrahMos Missile किन देशों का संयुक्त उत्पाद है?", "India और Russia", "India और USA", "India और France", "India और Israel", 0, "MPPSC Pre", "2024", "BrahMos is a joint India-Russia supersonic cruise missile."],
    ["Akash Missile किस प्रकार की Missile है?", "Surface-to-Air", "Surface-to-Surface", "Air-to-Air", "Anti-Ship", 0, "SSC CGL", "2024", "Akash is a medium-range surface-to-air missile developed by DRDO."],
    ["LCA Tejas किस कंपनी ने बनाया?", "HAL", "DRDO", "BEL", "ISRO", 0, "MPPSC Pre", "2024", "Tejas Light Combat Aircraft was developed by HAL (Hindustan Aeronautics Limited)."],
    ["INS Arihant क्या है?", "Nuclear Submarine", "Aircraft Carrier", "Destroyer", "Frigate", 0, "SSC CHSL", "2024", "INS Arihant is India's first nuclear-powered submarine."],
    ["Pinaka Rocket System किसने बनाया?", "DRDO", "HAL", "BEL", "ISRO", 0, "MPPSC Pre", "2025", "Pinaka is a multi-barrel rocket launcher developed by DRDO."],
    ["S-400 Air Defence System कहाँ से खरीदा गया?", "रूस", "USA", "France", "Israel", 0, "SSC CGL", "2024", "India purchased S-400 Triumf air defence system from Russia."],
    ["मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?", "यकृत (Liver)", "अग्न्याशय", "थायरॉइड", "पिट्यूटरी", 0, "MPPSC Pre", "2024", "Liver (Yakrit) is the largest gland in the human body."],
    ["मानव शरीर में सबसे बड़ी हड्डी कौन सी है?", "फीमर (जांघ)", "ह्यूमरस", "टिबिया", "रेडियस", 0, "MP Constable", "2024", "Femur (thigh bone) is the longest and strongest bone in the body."],
    ["रक्त समूह की खोज किसने की?", "Karl Landsteiner", "Louis Pasteur", "Robert Koch", "Alexander Fleming", 0, "SSC CGL", "2023", "Karl Landsteiner discovered blood groups (ABO system) in 1901."],
    ["पेनिसिलिन की खोज किसने की?", "Alexander Fleming", "Louis Pasteur", "Robert Koch", "Edward Jenner", 0, "MPPSC Pre", "2024", "Alexander Fleming discovered Penicillin in 1928."],
    ["X-Ray की खोज किसने की?", "Wilhelm Roentgen", "Marie Curie", "Albert Einstein", "Nikola Tesla", 0, "SSC CHSL", "2024", "Wilhelm Roentgen discovered X-Rays in 1895."],
    ["रेडियम की खोज किसने की?", "Marie Curie", "Pierre Curie", "Albert Einstein", "Max Planck", 0, "MPPSC Pre", "2024", "Marie Curie and Pierre Curie discovered Radium in 1898."],
    ["Periodic Table में कुल कितने तत्व हैं?", "118", "108", "120", "100", 0, "SSC CGL", "2024", "Periodic Table has 118 confirmed elements."],
    ["सबसे हल्की गैस कौन सी है?", "Hydrogen", "Helium", "Oxygen", "Nitrogen", 0, "MP Constable", "2024", "Hydrogen is the lightest element and gas."],
    ["सबसे भारी प्राकृतिक तत्व कौन सा है?", "Uranium", "Plutonium", "Lead", "Gold", 0, "MPPSC Pre", "2024", "Uranium is the heaviest naturally occurring element."],
    ["Diamond किस तत्व का Allotrope है?", "Carbon", "Silicon", "Boron", "Nitrogen", 0, "SSC CGL", "2023", "Diamond is an allotrope of Carbon with tetrahedral structure."],
    ["Graphene क्या है?", "Carbon का Single Layer Sheet", "एक Metal", "एक Gas", "एक Liquid", 0, "MPPSC Pre", "2025", "Graphene is a single layer of carbon atoms arranged in hexagonal lattice."],
    ["Superconductor क्या है?", "Zero Resistance वाला Material", "High Resistance", "Semi-conductor", "Insulator", 0, "SSC CGL", "2025", "Superconductor has zero electrical resistance below critical temperature."],
    ["Hubble Space Telescope कब Launch हुआ?", "1990", "1995", "2000", "1985", 0, "MPPSC Pre", "2024", "Hubble Space Telescope was launched in April 1990."],
    ["Black Hole क्या है?", "अत्यधिक गुरुत्वाकर्षण वाला अंतरिक्ष क्षेत्र", "एक तारा", "एक ग्रह", "एक उपग्रह", 0, "SSC CGL", "2024", "Black hole has gravity so strong that nothing can escape, not even light."],
    ["Neutron Star क्या है?", "तारे का अत्यंत घना अवशेष", "एक ग्रह", "एक उपग्रह", "एक धूमकेतु", 0, "MPPSC Pre", "2025", "Neutron star is incredibly dense remnant of a massive star after supernova."],
    ["Photosynthesis में कौन सी गैस निकलती है?", "Oxygen", "CO2", "Nitrogen", "Hydrogen", 0, "MP Constable", "2024", "Photosynthesis releases Oxygen and absorbs CO2."],
    ["Chlorophyll का रंग क्यों हरा होता है?", "Green Light Reflect करता है", "Red Absorb", "Blue Reflect", "All Absorb", 0, "SSC CGL", "2024", "Chlorophyll reflects green light and absorbs red and blue."],
    ["Mitochondria को क्या कहते हैं?", "Powerhouse of Cell", "Brain of Cell", "Stomach of Cell", "Kitchen of Cell", 0, "MPPSC Pre", "2024", "Mitochondria is called Powerhouse of Cell for producing energy (ATP)."],
    ["Nucleus क्या है?", "Cell का Control Center", "Energy Producer", "Food Maker", "Waste Manager", 0, "SSC CHSL", "2024", "Nucleus controls cell activities and contains DNA."],
    ["Stem Cell Research किससे संबंधित है?", "Undifferentiated Cells से इलाज", "Normal Medicine", "Surgery", "Physiotherapy", 0, "MPPSC Pre", "2025", "Stem cells can develop into any cell type for medical treatments."],
    ["CAR-T Cell Therapy क्या है?", "Cancer Treatment using modified T-cells", "Normal Surgery", "Chemotherapy", "Radiation", 0, "MPPSC Pre", "2025", "CAR-T therapy modifies patient's T-cells to fight cancer."],
    ["Gene Therapy क्या है?", "बीमारी ठीक करने के लिए Gene में बदलाव", "Normal Medicine", "Surgery", "Exercise", 0, "SSC CGL", "2025", "Gene therapy treats diseases by modifying or replacing faulty genes."],
    ["Insulin किस ग्रंथि से स्रावित होता है?", "अग्न्याशय (Pancreas)", "Liver", "Thyroid", "Adrenal", 0, "MPPSC Pre", "2024", "Insulin is secreted by beta cells of Pancreas."],
    ["Diabetes किस Hormone की कमी से होता है?", "Insulin", "Thyroxine", "Adrenaline", "Growth Hormone", 0, "SSC CGL", "2024", "Diabetes is caused by insufficient insulin or insulin resistance."],
    ["Dengue Mosquito का Scientific Name क्या है?", "Aedes aegypti", "Anopheles", "Culex", "Mansonia", 0, "MPPSC Pre", "2024", "Aedes aegypti mosquito transmits Dengue virus."],
    ["Malaria किस Mosquito से फैलता है?", "Anopheles", "Aedes", "Culex", "Mansonia", 0, "MP Constable", "2024", "Female Anopheles mosquito transmits Plasmodium causing Malaria."],
    ["COVID-19 का Scientific Name क्या है?", "SARS-CoV-2", "H1N1", "MERS", "SARS-CoV-1", 0, "SSC CGL", "2023", "COVID-19 is caused by SARS-CoV-2 (Severe Acute Respiratory Syndrome Coronavirus 2)."],
    ["E=mc² किसका सूत्र है?", "Einstein", "Newton", "Bohr", "Planck", 0, "MPPSC Pre", "2024", "E=mc² is Einstein's mass-energy equivalence formula."],
    ["Raman Effect किसने खोजा?", "C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "S.N. Bose", 0, "SSC CGL", "2023", "C.V. Raman discovered the Raman Effect in 1928, won Nobel Prize 1930."],
    ["Bose-Einstein Condensate क्या है?", "Matter का 5th State", "Solid", "Liquid", "Gas", 0, "MPPSC Pre", "2025", "BEC is fifth state of matter at near absolute zero temperature."],
    ["Artificial Sun (Fusion Reactor) किस देश ने बनाया?", "China", "USA", "Russia", "India", 0, "SSC CGL", "2025", "China's EAST tokamak achieved record fusion temperature in 2024."],
    ["Nuclear Fusion क्या है?", "दो हल्के Nuclei जुड़कर भारी बनाना", "Nucleus का टूटना", "Chemical Reaction", "Normal Reaction", 0, "MPPSC Pre", "2025", "Nuclear Fusion combines light nuclei to form heavier one, releasing energy."],
    ["Nuclear Fission क्या है?", "भारी Nucleus का हल्के में टूटना", "Nuclei का जुड़ना", "Chemical Reaction", "Normal Reaction", 0, "SSC CGL", "2024", "Nuclear Fission splits heavy nucleus into lighter ones releasing energy."],
    ["Space Debris क्या है?", "अंतरिक्ष में कचरा/टुकड़े", "एक ग्रह", "एक तारा", "एक उपग्रह", 0, "MPPSC Pre", "2025", "Space debris is non-functional human-made objects orbiting Earth."],
    ["OneWeb Satellite Constellation क्या है?", "Global Internet Coverage", "TV Broadcast", "Radio", "GPS Only", 0, "SSC CGL", "2025", "OneWeb provides global internet coverage using satellite constellation."],
    ["Starlink किसकी Company है?", "SpaceX (Elon Musk)", "Google", "Amazon", "Microsoft", 0, "MPPSC Pre", "2025", "Starlink is SpaceX's satellite internet constellation project."],
    ["Reusable Launch Vehicle ISRO का क्या है?", "RLV-TD", "PSLV", "GSLV", "SSLV", 0, "MPPSC Pre", "2025", "RLV-TD is ISRO's technology demonstrator for reusable launch vehicle."],
    ["NAVIC क्या है?", "India's Navigation System", "एक Missile", "एक Satellite", "एक Rocket", 0, "SSC CGL", "2024", "NAVIC is India's regional navigation satellite system by ISRO."],
    ["AstroSat क्या है?", "India's Space Observatory", "एक Rocket", "एक Missile", "एक Submarine", 0, "MPPSC Pre", "2024", "AstroSat is India's first multi-wavelength space observatory launched 2015."],
    ["Geothermal Energy क्या है?", "पृथ्वी की आंतरिक ऊष्मा से ऊर्जा", "Solar Energy", "Wind Energy", "Nuclear Energy", 0, "SSC CHSL", "2025", "Geothermal energy harnesses Earth's internal heat for power generation."]
];
appendToFile('questions/science_tech.js', sci);

// MIXED GK - 250 more
const mixed = [
    ["Asian Games 2023 कहाँ हुए?", "हांगझोऊ, चीन", "टोक्यो", "जकार्ता", "दोहा", 0, "SSC CGL", "2024", "Asian Games 2023 were held in Hangzhou, China."],
    ["Asian Games 2023 में India ने कितने Gold जीते?", "28", "20", "30", "25", 0, "MPPSC Pre", "2024", "India won 28 Gold medals at Asian Games 2023 Hangzhou."],
    ["Commonwealth Games 2022 कहाँ हुए?", "Birmingham, UK", "Gold Coast", "Delhi", "Glasgow", 0, "SSC CGL", "2024", "Commonwealth Games 2022 were held in Birmingham, UK."],
    ["Hockey World Cup 2023 कहाँ हुआ?", "भुवनेश्वर-राउरकेला", "दिल्ली", "मुंबई", "कोलकाता", 0, "MPPSC Pre", "2024", "Hockey World Cup 2023 was held in Bhubaneswar and Rourkela."],
    ["Virat Kohli ने ODI में कितने शतक बनाए हैं?", "50", "45", "49", "40", 0, "SSC CGL", "2024", "Virat Kohli has scored 50 ODI centuries (as of 2024)."],
    ["Sachin Tendulkar के कुल International Centuries कितने हैं?", "100", "99", "101", "90", 0, "MP Constable", "2024", "Sachin Tendulkar scored 100 international centuries in his career."],
    ["भारत का National Sport कौन सा है?", "कोई Official नहीं (Hockey unofficial)", "Cricket", "hockey", "Kabaddi", 0, "MPPSC Pre", "2024", "India has no officially declared national sport, Hockey is widely considered."],
    ["Wimbledon 2023 Men's Singles किसने जीता?", "Carlos Alcaraz", "Novak Djokovic", "Rafael Nadal", "Roger Federer", 0, "SSC CGL", "2024", "Carlos Alcaraz won Wimbledon 2023 Men's Singles."],
    ["US Open 2023 Men's Singles किसने जीता?", "Novak Djokovic", "Carlos Alcaraz", "Rafael Nadal", "Daniil Medvedev", 0, "MPPSC Pre", "2024", "Novak Djokovic won US Open 2023 Men's Singles."],
    ["भारत का सबसे ऊँचा बांध कौन सा है?", "Tehri Dam", "Bhakra", "Hirakud", "Sardar Sarovar", 0, "SSC CGL", "2024", "Tehri Dam in Uttarakhand is India's tallest dam at 260.5 m."],
    ["भारत का सबसे लंबा बांध कौन सा है?", "Hirakud Dam", "Tehri", "Bhakra", "Nagarjuna Sagar", 0, "MPPSC Pre", "2024", "Hirakud Dam in Odisha is India's longest dam at 25.8 km."],
    ["शिक्षक दिवस कब मनाया जाता है?", "5 सितंबर", "14 नवम्बर", "1 मई", "15 अगस्त", 0, "MP Constable", "2024", "Teachers' Day is celebrated on 5 September (Dr. Radhakrishnan's birthday)."],
    ["बाल दिवस कब मनाया जाता है?", "14 नवम्बर", "5 सितंबर", "26 जनवरी", "15 अगस्त", 0, "SSC CGL", "2024", "Children's Day is on 14 November (Nehru's birthday)."],
    ["गणतंत्र दिवस कब मनाया जाता है?", "26 जनवरी", "15 अगस्त", "2 अक्टूबर", "30 जनवरी", 0, "MP Constable", "2024", "Republic Day on 26 January marks adoption of Constitution in 1950."],
    ["राष्ट्रीय एकता दिवस कब मनाया जाता है?", "31 अक्टूबर", "2 अक्टूबर", "15 अगस्त", "26 जनवरी", 0, "MPPSC Pre", "2024", "National Unity Day on 31 October (Sardar Patel's birthday)."],
    ["विश्व AIDS दिवस कब मनाया जाता है?", "1 दिसंबर", "1 जनवरी", "1 मई", "1 जून", 0, "SSC CHSL", "2024", "World AIDS Day is observed on 1 December."],
    ["अंतर्राष्ट्रीय मजदूर दिवस कब मनाया जाता है?", "1 मई", "1 जून", "8 मार्च", "14 नवम्बर", 0, "MP Constable", "2024", "International Labour Day is celebrated on 1 May."],
    ["Earth Day कब मनाया जाता है?", "22 अप्रैल", "5 जून", "21 मार्च", "16 सितंबर", 0, "SSC CGL", "2024", "Earth Day is celebrated on 22 April."],
    ["World Ozone Day कब मनाया जाता है?", "16 सितंबर", "5 जून", "22 अप्रैल", "21 जून", 0, "MPPSC Pre", "2024", "World Ozone Day on 16 September commemorates Montreal Protocol."],
    ["विश्व मानवाधिकार दिवस कब मनाया जाता है?", "10 दिसंबर", "1 दिसंबर", "25 दिसंबर", "31 दिसंबर", 0, "SSC CGL", "2024", "Human Rights Day is on 10 December."],
    ["भारत का सबसे बड़ा Museum कौन सा है?", "Indian Museum, Kolkata", "National Museum, Delhi", "Salar Jung, Hyderabad", "Prince of Wales, Mumbai", 0, "MPPSC Pre", "2024", "Indian Museum in Kolkata is the oldest and largest museum in India."],
    ["भारत का सबसे बड़ा Zoo कौन सा है?", "Arignar Anna Zoo, Chennai", "Delhi Zoo", "Mysore Zoo", "Kolkata Zoo", 0, "SSC CHSL", "2024", "Arignar Anna Zoological Park in Chennai is India's largest zoo."],
    ["भारत का सबसे बड़ा Cricket Stadium कौन सा है?", "Narendra Modi Stadium, Ahmedabad", "Eden Gardens", "Wankhede", "MA Chidambaram", 0, "MPPSC Pre", "2024", "Narendra Modi Stadium in Ahmedabad is the world's largest cricket stadium."],
    ["Chandrayaan-3 का Lander का नाम क्या है?", "Vikram", "Pragyan", "Aditya", "Mangal", 0, "SSC CGL", "2024", "Chandrayaan-3's lander is named Vikram after Vikram Sarabhai."],
    ["Chandrayaan-3 का Rover का नाम क्या है?", "Pragyan", "Vikram", "Aditya", "Mangal", 0, "MPPSC Pre", "2024", "Chandrayaan-3's rover is named Pragyan meaning wisdom."],
    ["Rashtriya Khel Diwas कब मनाया जाता है?", "29 अगस्त", "15 अगस्त", "26 जनवरी", "5 सितंबर", 0, "MP Constable", "2024", "National Sports Day on 29 August (Dhyan Chand's birthday)."],
    ["Swadeshi Movement किस आंदोलन का हिस्सा था?", "बंगाल विभाजन विरोध", "असहयोग", "भारत छोड़ो", "सविनय अवज्ञा", 0, "SSC CGL", "2023", "Swadeshi Movement was part of anti-Bengal Partition movement."],
    ["ISRO Chairman 2024 कौन हैं?", "S. Somanath", "K. Sivan", "A.S. Kiran Kumar", "Madhavan Nair", 0, "MPPSC Pre", "2025", "S. Somanath is the Chairman of ISRO as of 2024."],
    ["DRDO Chairman 2024 कौन हैं?", "Samir V. Kamat", "G. Satheesh Reddy", "Avinash Chander", "V.K. Saraswat", 0, "MPPSC Pre", "2025", "Dr. Samir V. Kamat is the Chairman of DRDO as of 2024."],
    ["विश्व का सबसे बड़ा महासागर कौन सा है?", "प्रशांत महासागर", "अटलांटिक", "हिंद महासागर", "आर्कटिक", 0, "MP Constable", "2024", "Pacific Ocean is the largest and deepest ocean covering 30% of Earth."],
    ["विश्व का सबसे छोटा महाद्वीप कौन सा है?", "ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "अफ्रीका", 0, "SSC CGL", "2024", "Australia is the smallest continent in the world."],
    ["विश्व का सबसे ऊंचा पठार कौन सा है?", "तिब्बत/पामीर", "दक्कन", "छोटा नागपुर", "मालवा", 0, "MPPSC Pre", "2024", "Pamir/Tibet Plateau is the highest in the world at 4500+ meters."],
    ["विश्व का सबसे बड़ा द्वीप कौन सा है?", "ग्रीनलैंड", "मेडागास्कर", "बोर्नियो", "ऑस्ट्रेलिया", 0, "SSC CGL", "2024", "Greenland is the world's largest island."],
    ["विश्व की सबसे ऊंची इमारत कौन सी है?", "बुर्ज खलीफा", "Shanghai Tower", "Makkah Tower", "One World Trade", 0, "MP Constable", "2024", "Burj Khalifa in Dubai is world's tallest building at 828 meters."],
    ["भारत का सबसे लंबा National Highway कौन सा है?", "NH 44", "NH 48", "NH 1", "NH 7", 0, "MPPSC Pre", "2024", "NH 44 from Srinagar to Kanyakumari is India's longest NH at 3745 km."],
    ["2024 Loksabha Speaker कौन हैं?", "Om Birla", "Sumitra Mahajan", "Meira Kumar", "Somnath Chatterjee", 0, "MPPSC Pre", "2025", "Om Birla was re-elected as Speaker of 18th Lok Sabha in 2024."],
    ["India's 1st Woman IPS Officer कौन थीं?", "Kiran Bedi", "Indira Gandhi", "Sarojini Naidu", "Annie Besant", 0, "SSC CGL", "2024", "Kiran Bedi was India's first woman IPS officer in 1972."],
    ["India's 1st Woman IAS Officer कौन थीं?", "Anna Rajam Malhotra", "Kiran Bedi", "Sarojini Naidu", "Vijaya Lakshmi", 0, "MPPSC Pre", "2024", "Anna Rajam Malhotra was India's first woman IAS officer in 1951."],
    ["Bharat Ka Sabse Purana University कौन सा है?", "Nalanda", "Taxila", "Calcutta University", "Bombay University", 0, "SSC CGL", "2023", "Nalanda University (ancient) is one of the oldest; modern Calcutta Univ (1857)."],
    ["2024 में Nobel Chemistry Prize किसे मिला?", "David Baker, AI Protein", "Marie Curie", "Linus Pauling", "Ahmed Zewail", 0, "MPPSC Pre", "2025", "David Baker won Nobel Chemistry 2024 for AI-powered protein design."],
    ["2024 Nobel Literature Prize किसे मिला?", "Han Kang", "Bob Dylan", "Kazuo Ishiguro", "Olga Tokarczuk", 0, "SSC CGL", "2025", "Han Kang (South Korea) won Nobel Literature 2024."],
    ["2024 Nobel Economics Prize किसे मिला?", "Daron Acemoglu, Simon Johnson, James Robinson", "Paul Krugman", "Amartya Sen", "Robert Shiller", 0, "MPPSC Pre", "2025", "Acemoglu, Johnson, Robinson won Nobel Economics 2024 for institutions research."],
    ["Jnanpith Award 2023 किसे मिला?", "गुलज़ार और जगद्गुरु रामभद्राचार्य", "अमिताभ", "लता मंगेशकर", "A.R. Rahman", 0, "MPPSC Pre", "2025", "Gulzar (Urdu) and Rambhadracharya (Sanskrit) received Jnanpith Award 2023."],
    ["Miss Universe 2024 कौन बनी?", "Victoria Kjær Theilvig", "Sheynnis Palacios", "Harnaaz Sandhu", "R'Bonney Gabriel", 0, "SSC CHSL", "2025", "Victoria Kjær Theilvig from Denmark won Miss Universe 2024."],
    ["विश्व जनसंख्या दिवस कब मनाया जाता है?", "11 जुलाई", "1 जनवरी", "22 अप्रैल", "5 जून", 0, "MPPSC Pre", "2024", "World Population Day is observed on 11 July."],
    ["International Peace Day कब मनाया जाता है?", "21 सितंबर", "2 अक्टूबर", "24 अक्टूबर", "10 दिसंबर", 0, "SSC CGL", "2024", "International Day of Peace is observed on 21 September."],
    ["National Science Day कब मनाया जाता है?", "28 फरवरी", "14 नवम्बर", "5 जून", "11 जुलाई", 0, "MPPSC Pre", "2024", "National Science Day on 28 February marks Raman Effect discovery."],
    ["National Technology Day कब मनाया जाता है?", "11 मई", "28 फरवरी", "15 जनवरी", "5 सितंबर", 0, "SSC CGL", "2024", "National Technology Day on 11 May marks Pokhran nuclear tests 1998."],
    ["Kargil Vijay Diwas कब मनाया जाता है?", "26 जुलाई", "15 अगस्त", "26 जनवरी", "30 जनवरी", 0, "MP Constable", "2024", "Kargil Vijay Diwas on 26 July marks victory in 1999 Kargil War."]
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
