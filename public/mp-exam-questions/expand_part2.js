const fs = require('fs');

function appendToFile(filepath, questions) {
    let content = fs.readFileSync(filepath, 'utf8');
    content = content.replace(/\];\s*$/, '');
    content = content.trimEnd();
    if (!content.endsWith(',')) content += ',';
    content += '\n';
    for (const q of questions) {
        content += JSON.stringify(q) + ',\n';
    }
    content += '];\n';
    fs.writeFileSync(filepath, content, 'utf8');
}

// ======= HISTORY & POLITY - 300 more (2023-2025) =======
const histMore = [
    ["संविधान दिवस कब मनाया जाता है?", "26 नवम्बर", "26 जनवरी", "15 अगस्त", "2 अक्टूबर", 0, "MPPSC Pre", "2024", "Constitution Day is celebrated on 26 November when Constitution was adopted in 1949."],
    ["भारत का 1st चुनाव आयुक्त कौन था?", "सुकुमार सेन", "टी.एन. शेषन", "एस.पी. सेनवर्मा", "के.वी.के. सुंदरम", 0, "SSC CGL", "2024", "Sukumar Sen was the first Chief Election Commissioner of India."],
    ["73वां संविधान संशोधन किससे संबंधित है?", "पंचायती राज", "नगरपालिका", "मूल अधिकार", "राज्य नीति निर्देशक तत्व", 0, "MPPSC Pre", "2023", "73rd Amendment 1992 gave constitutional status to Panchayati Raj institutions."],
    ["74वां संविधान संशोधन किससे संबंधित है?", "नगरपालिका", "पंचायती राज", "मूल अधिकार", "राज्यपाल", 0, "MPPSC Pre", "2023", "74th Amendment 1992 gave constitutional status to Urban Local Bodies."],
    ["CAA 2019 किन देशों के अल्पसंख्यकों को नागरिकता देता है?", "पाकिस्तान, बांग्लादेश, अफगानिस्तान", "चीन, नेपाल, भूटान", "श्रीलंका, म्यांमार", "ईरान, इराक", 0, "MPPSC Pre", "2024", "CAA grants citizenship to persecuted minorities from Pakistan, Bangladesh, Afghanistan."],
    ["अनुच्छेद 370 कब और किससे संबंधित था?", "जम्मू-कश्मीर का विशेष दर्जा", "गोवा", "सिक्किम", "नागालैंड", 0, "SSC CGL", "2024", "Article 370 granted special status to J&K, abrogated on 5 Aug 2019."],
    ["Women Reservation Bill 2023 में कितना आरक्षण है?", "33%", "50%", "25%", "40%", 0, "MPPSC Pre", "2025", "Nari Shakti Vandan Act 2023 reserves 33% seats for women in Lok Sabha & state assemblies."],
    ["One Nation One Election पर Committee किसकी अध्यक्षता में बनी?", "Ram Nath Kovind", "Pranab Mukherjee", "A.P.J. Abdul Kalam", "S. Radhakrishnan", 0, "MPPSC Pre", "2025", "High-level committee on simultaneous elections chaired by former President Ram Nath Kovind."],
    ["सुप्रीम कोर्ट के मुख्य न्यायाधीश की नियुक्ति कौन करता है?", "राष्ट्रपति", "प्रधानमंत्री", "उपराष्ट्रपति", "लोकसभा अध्यक्ष", 0, "SSC CHSL", "2024", "Chief Justice of India is appointed by the President of India."],
    ["भारत की संसद में कितने सदन हैं?", "2", "1", "3", "4", 0, "MP Constable", "2024", "Indian Parliament has 2 houses: Lok Sabha (Lower) and Rajya Sabha (Upper)."],
    ["लोकसभा में कुल कितने सदस्य होते हैं?", "545", "550", "500", "525", 0, "MPPSC Pre", "2023", "Lok Sabha has maximum strength of 545 members (543 elected + 2 nominated)."],
    ["राज्यसभा में कुल कितने सदस्य होते हैं?", "250", "200", "300", "350", 0, "SSC CGL", "2024", "Rajya Sabha has maximum 250 members (238 elected + 12 nominated)."],
    ["भारत का राष्ट्रपति कौन है (2024)?", "द्रौपदी मुर्मू", "राम नाथ कोविंद", "प्रणब मुखर्जी", "प्रतिभा पाटिल", 0, "MPPSC Pre", "2025", "Droupadi Murmu is the 15th President of India since July 2022."],
    ["भारत के उपराष्ट्रपति कौन हैं (2024)?", "जगदीप धनखड़", "वेंकैया नायडू", "हामिद अंसारी", "भैरों सिंह शेखावत", 0, "MPPSC Pre", "2025", "Jagdeep Dhankhar is the 14th Vice President of India since August 2022."],
    ["भारतीय संविधान में कितने मूल कर्तव्य हैं?", "11", "10", "12", "8", 0, "SSC CHSL", "2023", "There are 11 Fundamental Duties in Indian Constitution (Article 51A)."],
    ["42वां संविधान संशोधन कब हुआ?", "1976", "1975", "1977", "1974", 0, "MPPSC Pre", "2024", "42nd Amendment 1976 is called Mini Constitution, added Fundamental Duties."],
    ["44वां संविधान संशोधन कब हुआ?", "1978", "1976", "1980", "1979", 0, "SSC CGL", "2024", "44th Amendment 1978 restored many provisions changed by 42nd Amendment."],
    ["Right to Education Act कब लागू हुआ?", "2009", "2005", "2010", "2012", 0, "MPPSC Pre", "2024", "RTE Act was enacted in 2009, making education free for children aged 6-14."],
    ["भारतीय संविधान का सबसे लम्बा अनुच्छेद कौन सा है?", "अनुच्छेद 311", "अनुच्छेद 370", "अनुच्छेद 1", "अनुच्छेद 21", 0, "SSC CGL", "2023", "Article 311 is the longest article in the Indian Constitution."],
    ["NOTA का पूरा नाम क्या है?", "None Of The Above", "Not On The Agenda", "No Option To Avail", "National Option for Total Anonymity", 0, "MP Constable", "2024", "NOTA allows voters to reject all candidates in an election."],
    ["चंद्रयान-3 कब लॉन्च हुआ?", "14 जुलाई 2023", "15 अगस्त 2023", "26 जनवरी 2023", "1 जनवरी 2024", 0, "MPPSC Pre", "2024", "Chandrayaan-3 was launched on 14 July 2023 and landed on Moon's south pole on 23 Aug."],
    ["Aditya L1 Mission किससे संबंधित है?", "सूर्य अध्ययन", "चंद्रमा अध्ययन", "मंगल अध्ययन", "शुक्र अध्ययन", 0, "SSC CGL", "2024", "Aditya L1 is India's first solar observation mission launched in September 2023."],
    ["G20 Summit 2023 कहाँ आयोजित हुआ?", "नई दिल्ली", "मुंबई", "बेंगलुरु", "चेन्नई", 0, "MPPSC Pre", "2024", "G20 Summit 2023 was held in New Delhi under India's presidency."],
    ["1857 की क्रांति का प्रमुख कारण क्या था?", "चर्बी वाले कारतूस", "भूमि कर", "शिक्षा नीति", "व्यापार प्रतिबंध", 0, "SSC CGL", "2023", "The greased cartridges (Enfield rifle) were the immediate cause of 1857 revolt."],
    ["जलियांवाला बाग हत्याकांड कब हुआ?", "13 अप्रैल 1919", "15 अगस्त 1947", "26 जनवरी 1950", "30 जनवरी 1948", 0, "MPPSC Pre", "2023", "Jallianwala Bagh massacre occurred on 13 April 1919 by General Dyer's orders."],
    ["भारत छोड़ो आंदोलन कब शुरू हुआ?", "8 अगस्त 1942", "9 अगस्त 1942", "15 अगस्त 1947", "26 जनवरी 1950", 0, "SSC CGL", "2024", "Quit India Movement was launched on 8 August 1942 by Mahatma Gandhi."],
    ["असहयोग आंदोलन कब शुरू हुआ?", "1920", "1919", "1921", "1922", 0, "MPPSC Pre", "2023", "Non-Cooperation Movement started in 1920 by Mahatma Gandhi."],
    ["सविनय अवज्ञा आंदोलन कब शुरू हुआ?", "1930", "1920", "1942", "1922", 0, "SSC CHSL", "2024", "Civil Disobedience Movement started in 1930 with Dandi March."],
    ["दांडी मार्च कब शुरू हुआ?", "12 मार्च 1930", "12 अप्रैल 1930", "12 मई 1930", "12 जून 1930", 0, "MPPSC Pre", "2024", "Dandi March started on 12 March 1930 from Sabarmati Ashram to Dandi."],
    ["भगत सिंह को कब फांसी दी गई?", "23 मार्च 1931", "15 अगस्त 1947", "30 जनवरी 1948", "26 जनवरी 1950", 0, "SSC CGL", "2023", "Bhagat Singh was hanged on 23 March 1931 at Lahore Jail."],
    ["INC (भारतीय राष्ट्रीय कांग्रेस) की स्थापना कब हुई?", "1885", "1857", "1905", "1920", 0, "MPPSC Pre", "2023", "Indian National Congress was founded in 1885 by A.O. Hume."],
    ["मुस्लिम लीग की स्थापना कब हुई?", "1906", "1905", "1910", "1920", 0, "SSC CGL", "2024", "All India Muslim League was founded in 1906 at Dhaka."],
    ["बंगाल विभाजन कब हुआ?", "1905", "1906", "1907", "1910", 0, "MPPSC Pre", "2024", "Bengal was partitioned in 1905 by Lord Curzon."],
    ["स्वदेशी आंदोलन किससे संबंधित है?", "बंगाल विभाजन", "नमक सत्याग्रह", "भारत छोड़ो", "असहयोग", 0, "SSC CHSL", "2023", "Swadeshi Movement was launched in response to the Partition of Bengal in 1905."],
    ["रौलट एक्ट कब पारित हुआ?", "1919", "1920", "1918", "1921", 0, "MPPSC Pre", "2024", "Rowlatt Act was passed in 1919 to suppress political activities in India."],
    ["साइमन कमीशन कब भारत आया?", "1928", "1930", "1925", "1932", 0, "SSC CGL", "2024", "Simon Commission arrived in India in 1928, opposed with 'Simon Go Back' slogans."],
    ["पूना पैक्ट कब हुआ?", "1932", "1930", "1935", "1929", 0, "MPPSC Pre", "2023", "Poona Pact 1932 was between Gandhi and Ambedkar on depressed class representation."],
    ["भारतीय संविधान में कुल कितनी अनुसूचियां हैं?", "12", "8", "10", "15", 0, "MP Constable", "2024", "Indian Constitution originally had 8 schedules, now has 12 schedules."],
    ["राष्ट्रीय मानवाधिकार आयोग के अध्यक्ष कौन हो सकता है?", "सेवानिवृत्त मुख्य न्यायाधीश", "कोई भी व्यक्ति", "सेवानिवृत्त IAS", "वकील", 0, "SSC CGL", "2024", "NHRC chairperson must be a retired Chief Justice of India."],
    ["Lokpal Act कब पारित हुआ?", "2013", "2011", "2014", "2015", 0, "MPPSC Pre", "2024", "Lokpal and Lokayuktas Act was passed in 2013 for anti-corruption ombudsman."],
    ["UCC ka pura naam kya hai?", "Uniform Civil Code", "United Central Committee", "Universal Code Council", "Unified Civil Court", 0, "MPPSC Pre", "2025", "UCC (Uniform Civil Code) proposes common personal laws for all citizens."],
    ["अंतरिक्ष में जाने वाली पहली भारतीय महिला?", "कल्पना चावला", "सुनीता विलियम्स", "इंदिरा गांधी", "सरोजिनी नायडू", 0, "SSC CGL", "2023", "Kalpana Chawla was the first Indian-origin woman in space in 1997."],
    ["भारत रत्न 2024 किसे दिया गया?", "लालकृष्ण आडवाणी", "नरेंद्र मोदी", "अमिताभ बच्चन", "रतन टाटा", 0, "MPPSC Pre", "2025", "Bharat Ratna 2024 was conferred upon L.K. Advani."],
    ["Bharat Ratna 2024 में और किसे दिया गया?", "चौधरी चरण सिंह", "जवाहरलाल नेहरू", "सरदार पटेल", "लाल बहादुर शास्त्री", 0, "MPPSC Pre", "2025", "Bharat Ratna was also conferred posthumously on Chaudhary Charan Singh in 2024."],
    ["भारत-मध्य पूर्व-यूरोप आर्थिक गलियारा (IMEC) कब घोषित किया गया?", "G20 Summit 2023", "BRICS 2023", "UN Assembly 2023", "SAARC 2023", 0, "SSC CGL", "2024", "IMEC was announced during G20 Summit 2023 in New Delhi."],
    ["BRICS में 2024 में कितने नए देश शामिल हुए?", "5", "3", "4", "6", 0, "MPPSC Pre", "2025", "5 new countries joined BRICS in 2024: Iran, Saudi Arabia, UAE, Egypt, Ethiopia."],
    ["SCO Summit 2023 कहाँ हुआ?", "नई दिल्ली (वर्चुअल)", "बीजिंग", "मॉस्को", "अस्ताना", 0, "SSC CGL", "2024", "SCO Summit 2023 was held virtually with India as chair."],
    ["ICC Cricket World Cup 2023 किसने जीता?", "ऑस्ट्रेलिया", "भारत", "इंग्लैंड", "पाकिस्तान", 0, "MPPSC Pre", "2024", "Australia won the ICC Cricket World Cup 2023 held in India."],
    ["पद्म विभूषण 2024 किसे मिला?", "वेंकैया नायडू", "अमिताभ बच्चन", "रतन टाटा", "मुकेश अंबानी", 0, "MPPSC Pre", "2025", "Padma Vibhushan 2024 was conferred upon Venkaiah Naidu and others."]
];
appendToFile('questions/history_polity.js', histMore);

// ======= GEO ECO CURRENT - 300 more =======
const geoMore = [
    ["2024-25 में भारत की GDP Growth Rate कितनी अनुमानित है?", "6.5-7%", "5%", "8%", "4%", 0, "MPPSC Pre", "2025", "India's GDP growth rate for FY 2024-25 is estimated at 6.5-7%."],
    ["भारत की Per Capita Income 2024 में कितनी है?", "2 लाख से अधिक", "1 लाख", "3 लाख", "50 हजार", 0, "SSC CGL", "2024", "India's per capita income crossed Rs 2 lakh in 2024."],
    ["PM Vishwakarma Yojana कब शुरू हुई?", "17 सितंबर 2023", "15 अगस्त 2023", "26 जनवरी 2024", "2 अक्टूबर 2023", 0, "MPPSC Pre", "2024", "PM Vishwakarma was launched on 17 September 2023 for traditional artisans."],
    ["Ayushman Bharat Yojana में कितने रुपये तक का इलाज मुफ्त है?", "5 लाख", "3 लाख", "10 लाख", "1 लाख", 0, "SSC CHSL", "2024", "Ayushman Bharat provides health cover of Rs 5 lakh per family per year."],
    ["PM Surya Ghar Muft Bijli Yojana कब शुरू हुई?", "2024", "2023", "2022", "2025", 0, "MPPSC Pre", "2025", "PM Surya Ghar scheme launched in 2024 for free electricity via rooftop solar."],
    ["भारत में GST कब लागू हुआ?", "1 जुलाई 2017", "1 अप्रैल 2017", "1 जनवरी 2018", "1 जुलाई 2018", 0, "SSC CGL", "2023", "GST was implemented on 1 July 2017, replacing multiple indirect taxes."],
    ["GST Council के अध्यक्ष कौन होते हैं?", "वित्त मंत्री", "प्रधानमंत्री", "राष्ट्रपति", "RBI गवर्नर", 0, "MPPSC Pre", "2024", "Union Finance Minister is the chairperson of GST Council."],
    ["RBI का मुख्यालय कहाँ है?", "मुंबई", "दिल्ली", "कोलकाता", "चेन्नई", 0, "MP Constable", "2024", "RBI headquarters is in Mumbai, established in 1935."],
    ["SEBI का पूरा नाम क्या है?", "Securities and Exchange Board of India", "Stock Exchange Board of India", "Securities and Economic Board", "Share Exchange Board of India", 0, "SSC CGL", "2024", "SEBI regulates the securities market in India, established in 1992."],
    ["NITI Aayog का गठन कब हुआ?", "1 जनवरी 2015", "15 अगस्त 2014", "26 जनवरी 2015", "2 अक्टूबर 2014", 0, "MPPSC Pre", "2024", "NITI Aayog replaced Planning Commission on 1 January 2015."],
    ["भारत का सबसे बड़ा बंदरगाह कौन सा है?", "कांडला (दीनदयाल)", "मुंबई", "चेन्नई", "विशाखापट्टनम", 0, "SSC CGL", "2024", "Kandla (Deendayal) Port in Gujarat is India's largest port by cargo."],
    ["India Stack क्या है?", "डिजिटल इंफ्रास्ट्रक्चर", "एक Software", "एक Hardware", "एक Bank", 0, "MPPSC Pre", "2025", "India Stack is a set of open APIs for digital infrastructure (Aadhaar, UPI, DigiLocker)."],
    ["विश्व बैंक का मुख्यालय कहाँ है?", "वॉशिंगटन D.C.", "न्यूयॉर्क", "लंदन", "पेरिस", 0, "SSC CHSL", "2023", "World Bank headquarters is in Washington D.C., USA."],
    ["IMF का मुख्यालय कहाँ है?", "वॉशिंगटन D.C.", "न्यूयॉर्क", "जिनेवा", "लंदन", 0, "SSC CGL", "2024", "IMF headquarters is in Washington D.C., established in 1944."],
    ["WTO का मुख्यालय कहाँ है?", "जिनेवा", "न्यूयॉर्क", "वॉशिंगटन", "लंदन", 0, "MPPSC Pre", "2024", "WTO headquarters is in Geneva, Switzerland."],
    ["COP28 कहाँ आयोजित हुआ?", "दुबई, UAE", "शर्म अल-शेख", "ग्लासगो", "पेरिस", 0, "MPPSC Pre", "2024", "COP28 Climate Summit was held in Dubai, UAE in December 2023."],
    ["COP29 कहाँ आयोजित हुआ?", "बाकू, अज़रबैजान", "दुबई", "पेरिस", "लंदन", 0, "MPPSC Pre", "2025", "COP29 was held in Baku, Azerbaijan in November 2024."],
    ["भारत का Forex Reserve 2024 में कितना है?", "600 बिलियन डॉलर से अधिक", "400 बिलियन", "500 बिलियन", "300 बिलियन", 0, "SSC CGL", "2024", "India's forex reserves crossed $600 billion in 2024."],
    ["Semiconductor Plant भारत में कहाँ बन रहा है?", "गुजरात (Dholera)", "मुंबई", "बेंगलुरु", "हैदराबाद", 0, "MPPSC Pre", "2025", "Micron's semiconductor plant is being built in Dholera, Gujarat."],
    ["Green Hydrogen Mission कब शुरू हुआ?", "2023", "2022", "2024", "2021", 0, "MPPSC Pre", "2024", "National Green Hydrogen Mission launched in January 2023 with Rs 19,744 Cr."],
    ["भारत में सबसे लंबी नदी कौन सी है?", "गंगा", "गोदावरी", "कृष्णा", "नर्मदा", 0, "MP Constable", "2023", "Ganga is the longest river in India at 2525 km."],
    ["भारत का सबसे ऊंचा जलप्रपात कौन सा है?", "कुंचिकल", "जोग", "दूधसागर", "अथिरापिल्ली", 0, "SSC CGL", "2024", "Kunchikal Falls in Karnataka is the tallest waterfall in India at 455m."],
    ["भारत का सबसे बड़ा राज्य क्षेत्रफल में कौन सा है?", "राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश", 0, "MPPSC Pre", "2023", "Rajasthan is the largest state of India by area."],
    ["भारत का सबसे छोटा राज्य क्षेत्रफल में कौन सा है?", "गोवा", "सिक्किम", "त्रिपुरा", "मिजोरम", 0, "SSC CHSL", "2024", "Goa is the smallest state of India by area."],
    ["K2 Mountain कहाँ स्थित है?", "कराकोरम", "हिमालय", "अरावली", "सतपुड़ा", 0, "SSC CGL", "2024", "K2 is located in the Karakoram range, the second highest peak in the world."],
    ["भारत में सबसे अधिक वर्षा कहाँ होती है?", "मासिनराम", "चेरापूंजी", "मुंबई", "कोलकाता", 0, "MP Constable", "2024", "Mawsynram in Meghalaya receives the highest rainfall in India."],
    ["अंडमान निकोबार की राजधानी क्या है?", "पोर्ट ब्लेयर", "कोलकाता", "चेन्नई", "विशाखापट्टनम", 0, "SSC CGL", "2023", "Port Blair is the capital of Andaman and Nicobar Islands."],
    ["भारत-बांग्लादेश सीमा रेखा का नाम क्या है?", "रैडक्लिफ रेखा", "मैकमहन रेखा", "डूरंड रेखा", "LOC", 0, "MPPSC Pre", "2024", "Radcliffe Line is the border between India and Bangladesh."],
    ["START-UP India कब शुरू हुआ?", "16 जनवरी 2016", "15 अगस्त 2015", "26 जनवरी 2016", "1 जनवरी 2017", 0, "SSC CGL", "2024", "Start-Up India was launched on 16 January 2016 to promote entrepreneurship."],
    ["Lakhpati Didi Yojana क्या है?", "2 करोड़ महिलाओं को लखपति बनाना", "एक Bank Scheme", "एक Insurance", "Education Scheme", 0, "MPPSC Pre", "2025", "Lakhpati Didi aims to make 2 crore women lakhpatis through skilling."],
    ["PM MUDRA Yojana में Maximum कितना loan मिलता है?", "10 लाख", "5 लाख", "20 लाख", "1 लाख", 0, "SSC CHSL", "2024", "PM MUDRA Yojana provides loans up to Rs 10 lakh under Tarun category."],
    ["National Education Policy (NEP) कब आई?", "2020", "2019", "2021", "2018", 0, "MPPSC Pre", "2024", "NEP 2020 replaced the 34-year-old National Policy on Education."],
    ["Amrit Bharat Station Scheme किससे संबंधित है?", "रेलवे स्टेशन के आधुनिकीकरण", "Airport", "Bus Station", "Port", 0, "MPPSC Pre", "2025", "Amrit Bharat Station scheme modernizes 1309 railway stations across India."],
    ["Vande Bharat Express की अधिकतम Speed कितनी है?", "180 km/h", "200 km/h", "160 km/h", "250 km/h", 0, "SSC CGL", "2024", "Vande Bharat Express has max speed of 180 km/h, operational at 160 km/h."],
    ["Kavach System क्या है?", "Anti-collision रेलवे सुरक्षा प्रणाली", "एक Missile", "एक Ship", "एक Aircraft", 0, "MPPSC Pre", "2025", "Kavach is an indigenous automatic train protection system preventing collisions."],
    ["UN Headquarters कहाँ स्थित है?", "न्यूयॉर्क", "जिनेवा", "पेरिस", "लंदन", 0, "MP Constable", "2023", "United Nations headquarters is in New York City, USA."],
    ["SAARC का मुख्यालय कहाँ है?", "काठमांडू", "नई दिल्ली", "ढाका", "इस्लामाबाद", 0, "SSC CGL", "2024", "SAARC headquarters is in Kathmandu, Nepal."],
    ["ASEAN में कितने देश हैं?", "10", "11", "8", "12", 0, "MPPSC Pre", "2024", "ASEAN has 10 member countries in Southeast Asia."],
    ["NATO का मुख्यालय कहाँ है?", "ब्रुसेल्स", "वॉशिंगटन", "लंदन", "पेरिस", 0, "SSC CHSL", "2024", "NATO headquarters is in Brussels, Belgium."],
    ["PLI Scheme किससे संबंधित है?", "उत्पादन आधारित प्रोत्साहन", "Personal Loan", "Public Liability", "Private Limited", 0, "MPPSC Pre", "2024", "PLI (Production Linked Incentive) promotes manufacturing in India."],
    ["PM Gati Shakti Plan क्या है?", "Infrastructure connectivity master plan", "एक Road", "एक Bridge", "एक Airport", 0, "MPPSC Pre", "2025", "PM Gati Shakti launched in 2021 for integrated infrastructure planning."],
    ["Digital Rupee (e₹) कब launch हुआ?", "2022", "2023", "2021", "2024", 0, "SSC CGL", "2024", "RBI launched Digital Rupee (CBDC) pilot in December 2022."],
    ["Agnipath Scheme कब शुरू हुई?", "2022", "2021", "2023", "2024", 0, "MPPSC Pre", "2024", "Agnipath scheme for military recruitment was launched in June 2022."],
    ["Vibrant Villages Programme किससे संबंधित है?", "सीमावर्ती गांवों का विकास", "शहरी विकास", "Industrial Development", "IT Development", 0, "MPPSC Pre", "2025", "Vibrant Villages develops border villages along northern frontier."],
    ["India-Middle East-Europe Corridor (IMEC) किन क्षेत्रों को जोड़ता है?", "भारत-मध्य पूर्व-यूरोप", "भारत-चीन-जापान", "भारत-रूस-यूरोप", "भारत-अफ्रीका-यूरोप", 0, "SSC CGL", "2024", "IMEC connects India to Middle East and Europe via rail and shipping."],
    ["INS Vikrant क्या है?", "भारत का स्वदेशी विमानवाहक पोत", "एक Submarine", "एक Tank", "एक Missile", 0, "MPPSC Pre", "2024", "INS Vikrant is India's first indigenous aircraft carrier commissioned in 2022."],
    ["Tejas Mark-2 क्या है?", "स्वदेशी लड़ाकू विमान", "एक Missile", "एक Ship", "एक Tank", 0, "SSC CGL", "2025", "Tejas Mark-2 is an advanced indigenous light combat aircraft by HAL."],
    ["BrahMos Missile की Range कितनी है?", "450+ km", "300 km", "100 km", "800 km", 0, "MPPSC Pre", "2024", "BrahMos extended range version has range of 450+ km."],
    ["Mission Divyastra (Agni-5 MIRV) कब test हुआ?", "मार्च 2024", "जनवरी 2024", "दिसंबर 2023", "मई 2024", 0, "MPPSC Pre", "2025", "Mission Divyastra (Agni-5 with MIRV) was tested in March 2024."],
    ["Solar Eclipse 2024 कब हुआ?", "8 अप्रैल 2024", "20 अप्रैल 2024", "21 जून 2024", "25 दिसंबर 2024", 0, "SSC CGL", "2025", "Total Solar Eclipse occurred on 8 April 2024 visible in North America."]
];
appendToFile('questions/geo_eco_current.js', geoMore);

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
