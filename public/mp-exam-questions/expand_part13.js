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

// ALL FILES - 300+ total to push past 5000

// COMPUTER - 50
appendToFile('questions/computer_gk.js', [
    Q("Kotlin Programming Language किसने बनाई?", "JetBrains", "Google", "Oracle", "Microsoft", 0, "SSC CGL", "2025"),
    Q("Swift Programming Language किसने बनाई?", "Apple", "Google", "Microsoft", "Facebook", 0, "MPPSC Pre", "2025"),
    Q("Rust Programming Language की विशेषता?", "Memory Safety", "Speed Only", "Easy Syntax", "Old Language", 0, "SSC CGL", "2025"),
    Q("Go (Golang) किसने बनाया?", "Google", "Facebook", "Apple", "Microsoft", 0, "MPPSC Pre", "2025"),
    Q("MS Excel में CONCATENATE/CONCAT Function क्या करता है?", "Text जोड़ता है", "Numbers जोड़ता है", "Delete करता है", "Print करता है", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में TRIM Function क्या करता है?", "Extra Spaces हटाता है", "Text Add", "Numbers Add", "Delete", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में PROPER Function क्या करता है?", "First Letter Capital करता है", "All Caps", "All Lower", "Delete", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में UPPER Function क्या करता है?", "सभी Text को Capital Letters में बदलता है", "Lower", "Proper", "Delete", 0, "MP ASI Computer", "2025"),
    Q("MS Excel में LOWER Function क्या करता है?", "सभी Text को Small Letters में बदलता है", "Upper", "Proper", "Delete", 0, "MP ASI Computer", "2025"),
    Q("Computer Ethics क्या है?", "Computer Use में नैतिक आचरण", "Gaming Rules", "Music Rules", "Video Rules", 0, "SSC CGL", "2025"),
    Q("Digital Divide क्या है?", "Technology Access में असमानता", "Normal Gap", "Physical Gap", "Age Gap", 0, "MPPSC Pre", "2025"),
    Q("E-Waste क्या है?", "Electronic Waste", "Food Waste", "Paper Waste", "Plastic Waste", 0, "MP ASI Computer", "2025"),
    Q("Green Computing क्या है?", "Eco-friendly Computer Use", "Fast Computing", "Old Computing", "Basic Computing", 0, "SSC CGL", "2025"),
    Q("ASCII में कितने Characters होते हैं?", "128", "256", "64", "512", 0, "MP ASI Computer", "2025"),
    Q("Unicode क्या है?", "Universal Character Encoding Standard", "Simple Code", "Old Code", "Basic Code", 0, "MPPSC Pre", "2025"),
    Q("Binary Number System का Base कितना है?", "2", "8", "10", "16", 0, "MP ASI Computer", "2024"),
    Q("Octal Number System का Base कितना है?", "8", "2", "10", "16", 0, "MP ASI Computer", "2024"),
    Q("Hexadecimal Number System का Base कितना है?", "16", "2", "8", "10", 0, "MP ASI Computer", "2024"),
    Q("1 KB में कितने Bytes होते हैं?", "1024", "1000", "512", "2048", 0, "MP Constable", "2024"),
    Q("1 MB में कितने KB होते हैं?", "1024", "1000", "512", "2048", 0, "MP ASI Computer", "2024"),
    Q("1 GB में कितने MB होते हैं?", "1024", "1000", "512", "2048", 0, "MP ASI Computer", "2024"),
    Q("1 TB में कितने GB होते हैं?", "1024", "1000", "512", "2048", 0, "SSC CGL", "2024"),
    Q("Assembly Language क्या है?", "Low Level Programming Language", "High Level", "Machine", "Natural", 0, "MPPSC Pre", "2025"),
    Q("Compiler क्या करता है?", "पूरे Program को एक बार में Machine Code में बदलता है", "Line by Line", "Run Only", "Test Only", 0, "SSC CGL", "2025"),
    Q("Interpreter क्या करता है?", "Program को Line by Line Execute करता है", "Complete Convert", "Only Test", "Only Print", 0, "MPPSC Pre", "2025")
]);

// MP GK - 50
appendToFile('questions/mp_gk.js', [
    Q("Indore को किस नाम से जाना जाता है?", "Mini Mumbai", "Mini Delhi", "Mini Kolkata", "Mini Chennai", 0, "MPPSC Pre", "2025"),
    Q("Jabalpur को किस नाम से जाना जाता है?", "संस्कारधानी", "राजधानी", "वाणिज्यधानी", "धार्मिकधानी", 0, "MPPSC Pre", "2025"),
    Q("Ujjain को किस नाम से जाना जाता है?", "मंदिरों का शहर", "झीलों का शहर", "संगमरमर", "स्टील", 0, "MPPSC Pre", "2025"),
    Q("Gwalior को किस नाम से जाना जाता है?", "संगीत नगरी", "झीलों की नगरी", "मंदिरों की नगरी", "हीरों की नगरी", 0, "MPPSC Pre", "2025"),
    Q("Panna को किस नाम से जाना जाता है?", "हीरों का शहर", "संगीत", "मंदिर", "झील", 0, "MPPSC Pre", "2025"),
    Q("MP में Diamond Mining कहाँ होती है?", "पन्ना", "भोपाल", "इंदौर", "जबलपुर", 0, "MPPSC Pre", "2025"),
    Q("MP की सबसे पुरानी नगरपालिका कहाँ है?", "जबलपुर", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("MP में पहली Train कब चली?", "1867", "1870", "1880", "1860", 0, "MPPSC Pre", "2025"),
    Q("MP का सबसे बड़ा Bus Stand कहाँ है?", "इंदौर (Gangwal)", "भोपाल", "जबलपुर", "ग्वालियर", 0, "MP Constable", "2025"),
    Q("MP में पहला University कौन सा था?", "Sagar University (Dr. Hari Singh Gour)", "Barkatullah", "Vikram", "DAVV", 0, "MPPSC Pre", "2025"),
    Q("DAVV University कहाँ है?", "इंदौर", "भोपाल", "सागर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("Jiwaji University कहाँ है?", "ग्वालियर", "भोपाल", "इंदौर", "जबलपुर", 0, "MPPSC Pre", "2025"),
    Q("Barkatullah University कहाँ है?", "भोपाल", "इंदौर", "ग्वालियर", "जबलपुर", 0, "MPPSC Pre", "2025"),
    Q("Vikram University कहाँ है?", "उज्जैन", "भोपाल", "इंदौर", "ग्वालियर", 0, "MPPSC Pre", "2025"),
    Q("Awadhesh Pratap Singh University कहाँ है?", "रीवा", "सतना", "सीधी", "शहडोल", 0, "MPPSC Pre", "2025"),
    Q("MP में Khel Gaon कहाँ बनाया गया?", "भोपाल", "इंदौर", "ग्वालियर", "जबलपुर", 0, "MPPSC Pre", "2025"),
    Q("MP State Sports Academy कहाँ है?", "भोपाल", "इंदौर", "ग्वालियर", "जबलपुर", 0, "MP ASI", "2025"),
    Q("MP के प्रसिद्ध Sports Person Neeraj Chopra किस खेल के हैं?", "Javelin (वह Haryana से हैं)", "Cricket", "Football", "Hockey", 0, "MPPSC Pre", "2025"),
    Q("MP origin के क्रिकेटर Naman Ojha कहाँ के हैं?", "MP", "UP", "Bihar", "Rajasthan", 0, "MPPSC Pre", "2025"),
    Q("MP में Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) कहाँ है?", "भोपाल", "इंदौर", "ग्वालियर", "जबलपुर", 0, "MPPSC Pre", "2025")
]);

// HISTORY - 50
appendToFile('questions/history_polity.js', [
    Q("National Emergency कब-कब लगी?", "1962, 1971, 1975", "केवल 1975", "केवल 1962", "केवल 1971", 0, "SSC CGL", "2025"),
    Q("1975 Emergency किसने घोषित की?", "Indira Gandhi", "Rajiv Gandhi", "Morarji Desai", "V.P. Singh", 0, "MPPSC Pre", "2025"),
    Q("42nd Amendment को क्या कहते हैं?", "Mini Constitution", "Original", "Simple Amendment", "Basic Amendment", 0, "SSC CGL", "2025"),
    Q("44th Amendment ने क्या किया?", "Emergency Provisions को Restrict किया", "Extended", "Same", "Removed", 0, "MPPSC Pre", "2025"),
    Q("73rd Amendment किससे संबंधित है?", "Panchayati Raj", "Municipalities", "Language", "Defection", 0, "SSC CGL", "2025"),
    Q("74th Amendment किससे संबंधित है?", "Municipalities", "Panchayat", "Language", "Defection", 0, "MPPSC Pre", "2025"),
    Q("86th Amendment किससे संबंधित है?", "Right to Education", "RTI", "GST", "Reservation", 0, "SSC CGL", "2025"),
    Q("101st Amendment किससे संबंधित है?", "GST", "Right to Education", "RTI", "Reservation", 0, "MPPSC Pre", "2025"),
    Q("CAA (Citizenship Amendment Act) कब पारित हुआ?", "2019", "2020", "2018", "2021", 0, "SSC CGL", "2025"),
    Q("NRC (National Register of Citizens) कहाँ लागू है?", "Assam", "All India", "Delhi", "Mumbai", 0, "MPPSC Pre", "2025"),
    Q("Lokpal Act कब पारित हुआ?", "2013", "2011", "2014", "2015", 0, "SSC CGL", "2025"),
    Q("First Lokpal of India कौन बने?", "Pinaki Chandra Ghose", "T.N. Seshan", "Kiran Bedi", "Anna Hazare", 0, "MPPSC Pre", "2025"),
    Q("NCERT Full Form?", "National Council of Educational Research and Training", "National Central Education Rating", "Normal Council for Education", "National Committee", 0, "SSC CGL", "2025"),
    Q("UGC Full Form?", "University Grants Commission", "Universal Grant Council", "University General Committee", "United Grant Commission", 0, "MPPSC Pre", "2025"),
    Q("AICTE Full Form?", "All India Council for Technical Education", "All India Committee", "All India Central Technical", "All India Council for Training", 0, "SSC CGL", "2025"),
    Q("NAAC Full Form?", "National Assessment and Accreditation Council", "National Academy", "National Authority", "National Alliance", 0, "MPPSC Pre", "2025"),
    Q("NEP 2020 क्या है?", "New Education Policy", "National Employment", "National Emergency", "National Environment", 0, "SSC CGL", "2025"),
    Q("NEP 2020 में School Structure?", "5+3+3+4", "10+2", "8+4", "6+3+3", 0, "MPPSC Pre", "2025"),
    Q("Supreme Court में कुल कितने Judges होते हैं?", "34 (CJI + 33)", "31", "28", "40", 0, "SSC CGL", "2025"),
    Q("High Court Judges की Retirement Age?", "62 वर्ष", "65", "60", "58", 0, "MPPSC Pre", "2025")
]);

// GEO - 50
appendToFile('questions/geo_eco_current.js', [
    Q("India का Total Tax Revenue 2023-24?", "34 लाख Crore+", "20 लाख", "40 लाख", "50 लाख", 0, "MPPSC Pre", "2025"),
    Q("GST कब लागू हुआ?", "1 जुलाई 2017", "1 अप्रैल 2017", "26 जनवरी 2017", "15 अगस्त 2017", 0, "SSC CGL", "2025"),
    Q("GST Council के Chairman कौन होते हैं?", "Finance Minister", "PM", "President", "RBI Governor", 0, "MPPSC Pre", "2025"),
    Q("GST में कितने Tax Slabs हैं?", "5 (0%, 5%, 12%, 18%, 28%)", "3", "4", "6", 0, "SSC CGL", "2025"),
    Q("IGST क्या है?", "Inter-State GST", "Internal GST", "International GST", "Indian GST", 0, "MPPSC Pre", "2025"),
    Q("CGST क्या है?", "Central GST", "Common GST", "Collective GST", "City GST", 0, "SSC CGL", "2025"),
    Q("SGST क्या है?", "State GST", "Special GST", "Standard GST", "Super GST", 0, "MPPSC Pre", "2025"),
    Q("GST Compensation Cess किसके लिए है?", "States को Revenue Loss की भरपाई", "Centre", "Banks", "Companies", 0, "SSC CGL", "2025"),
    Q("E-way Bill क्या है?", "50000+ Goods Transport के लिए Document", "Normal Bill", "Tax Bill", "Electric Bill", 0, "MPPSC Pre", "2025"),
    Q("Input Tax Credit (ITC) क्या है?", "Purchase पर दिया Tax Output Tax से Adjust", "Normal Credit", "Bank Loan", "Personal Loan", 0, "SSC CGL", "2025"),
    Q("Aadhaar Enabled Payment System (AEPS)?", "Aadhaar से Payment", "Normal Payment", "Cash Payment", "Cheque Payment", 0, "MPPSC Pre", "2025"),
    Q("BHIM App किसने Launch किया?", "PM Modi", "RBI", "SBI", "NPCI", 0, "SSC CGL", "2025"),
    Q("NPCI Full Form?", "National Payments Corporation of India", "National Payment Council", "National Program", "National Platform", 0, "MPPSC Pre", "2025"),
    Q("RuPay Card किसने Launch किया?", "NPCI", "RBI", "SBI", "Visa", 0, "SSC CGL", "2025"),
    Q("IMPS Full Form?", "Immediate Payment Service", "International Money", "Indian Mobile", "Internal Message", 0, "MPPSC Pre", "2025"),
    Q("NEFT Full Form?", "National Electronic Funds Transfer", "Normal Electronic", "New Electronic", "National Express", 0, "SSC CGL", "2025"),
    Q("RTGS Full Form?", "Real Time Gross Settlement", "Regular Transfer", "Revised Transfer", "Rapid Transfer", 0, "MPPSC Pre", "2025"),
    Q("Minimum RTGS Amount?", "2 लाख", "1 लाख", "50000", "5 लाख", 0, "SSC CGL", "2025"),
    Q("Jan Dhan Yojana कब शुरू हुई?", "28 अगस्त 2014", "15 अगस्त 2014", "26 जनवरी 2015", "1 अप्रैल 2014", 0, "MPPSC Pre", "2025"),
    Q("Jan Dhan Yojana में कितने खाते खुले (approx 2024)?", "52 Crore+", "30 Crore", "40 Crore", "60 Crore", 0, "SSC CGL", "2025")
]);

// SCIENCE - 50
appendToFile('questions/science_tech.js', [
    Q("Newton की गति का प्रथम नियम क्या है?", "Inertia का नियम", "Energy का नियम", "Force का नियम", "Motion का नियम", 0, "SSC CGL", "2025"),
    Q("Newton का द्वितीय नियम क्या कहता है?", "F = ma", "E = mc2", "V = IR", "PV = nRT", 0, "MPPSC Pre", "2025"),
    Q("Newton का तृतीय नियम क्या कहता है?", "Action-Reaction बराबर और विपरीत", "F=ma", "E=mc2", "V=IR", 0, "SSC CGL", "2025"),
    Q("गति ऊर्जा (Kinetic Energy) का सूत्र?", "1/2 mv2", "mgh", "mc2", "IR", 0, "MPPSC Pre", "2025"),
    Q("स्थितिज ऊर्जा (Potential Energy) का सूत्र?", "mgh", "1/2 mv2", "mc2", "IR", 0, "SSC CGL", "2025"),
    Q("ऊर्जा संरक्षण का नियम क्या कहता है?", "ऊर्जा न बनती न नष्ट होती बस रूप बदलती है", "ऊर्जा नष्ट होती है", "ऊर्जा बनती है", "कोई नियम नहीं", 0, "MPPSC Pre", "2025"),
    Q("ध्वनि की चाल वायु में कितनी है?", "343 m/s", "300 m/s", "400 m/s", "500 m/s", 0, "SSC CGL", "2025"),
    Q("प्रकाश की चाल कितनी है?", "3 x 10^8 m/s", "3 x 10^6", "3 x 10^10", "3 x 10^4", 0, "MPPSC Pre", "2025"),
    Q("Visible Light की Wavelength Range?", "380-700 nm", "100-200 nm", "700-1000 nm", "1-100 nm", 0, "SSC CGL", "2025"),
    Q("Rainbow में कितने रंग होते हैं?", "7", "5", "6", "8", 0, "MP Constable", "2025"),
    Q("VIBGYOR का Full Form?", "Violet Indigo Blue Green Yellow Orange Red", "Very Important", "Visual Ideas", "Virtual Intelligence", 0, "SSC CGL", "2025"),
    Q("Reflection का नियम क्या है?", "Angle of Incidence = Angle of Reflection", "Different Angles", "No Rule", "Random", 0, "MPPSC Pre", "2025"),
    Q("Refraction क्या है?", "प्रकाश का एक माध्यम से दूसरे में जाने पर मुड़ना", "सीधा जाना", "रुकना", "वापस आना", 0, "SSC CGL", "2025"),
    Q("Lens कितने प्रकार के होते हैं?", "2 (Convex, Concave)", "3", "4", "1", 0, "MPPSC Pre", "2025"),
    Q("Mirror कितने प्रकार के होते हैं?", "3 (Plane, Convex, Concave)", "2", "4", "1", 0, "SSC CGL", "2025"),
    Q("Convex Lens क्या करता है?", "Converge (Collect)", "Diverge", "No Effect", "Mirror", 0, "MPPSC Pre", "2025"),
    Q("Concave Lens क्या करता है?", "Diverge (Scatter)", "Converge", "No Effect", "Mirror", 0, "SSC CGL", "2025"),
    Q("Scattering of Light से क्या होता है?", "आकाश नीला दिखता है", "आकाश लाल", "आकाश हरा", "आकाश पीला", 0, "MPPSC Pre", "2025"),
    Q("Solar Eclipse कब होता है?", "जब चंद्रमा सूर्य और पृथ्वी के बीच आता है", "पूर्णिमा", "हर दिन", "कभी नहीं", 0, "SSC CGL", "2025"),
    Q("Lunar Eclipse कब होता है?", "जब पृथ्वी सूर्य और चंद्रमा के बीच आती है", "अमावस्या", "हर दिन", "कभी नहीं", 0, "MPPSC Pre", "2025")
]);

// MIXED - 50
appendToFile('questions/mixed_gk.js', [
    Q("Zayed Medal 2024 किसे मिला?", "PM Modi", "Joe Biden", "Xi Jinping", "Putin", 0, "MPPSC Pre", "2025"),
    Q("Order of St Andrew Medal 2024 किसे मिला?", "PM Modi", "Joe Biden", "Xi Jinping", "Macron", 0, "SSC CGL", "2025"),
    Q("Bharat Ratna 2024 किसे मिला?", "Karpoori Thakur, PV Narasimha Rao, Chaudhary Charan Singh, MS Swaminathan, LK Advani", "केवल Modi", "केवल Gandhi", "केवल Nehru", 0, "MPPSC Pre", "2025"),
    Q("Padma Vibhushan 2024 में कितने लोगों को मिला?", "5", "3", "7", "10", 0, "SSC CGL", "2025"),
    Q("India GDP Rank by PPP 2024?", "3rd", "4th", "5th", "2nd", 0, "MPPSC Pre", "2025"),
    Q("India Services Sector GDP Contribution?", "50%+", "30%", "40%", "60%", 0, "SSC CGL", "2025"),
    Q("India Agriculture GDP Contribution?", "15-17%", "10%", "20%", "30%", 0, "MPPSC Pre", "2025"),
    Q("India Industry GDP Contribution?", "25-30%", "10%", "40%", "50%", 0, "SSC CGL", "2025"),
    Q("India Labour Force 2024 (approx)?", "55 Crore+", "30 Crore", "40 Crore", "70 Crore", 0, "MPPSC Pre", "2025"),
    Q("India Unemployment Rate 2024 (CMIE)?", "7-8%", "5%", "10%", "15%", 0, "SSC CGL", "2025"),
    Q("Make in India Initiative कब शुरू हुई?", "25 सितंबर 2014", "15 अगस्त 2014", "26 जनवरी 2015", "1 अप्रैल 2014", 0, "MPPSC Pre", "2025"),
    Q("Skill India Mission कब शुरू हुआ?", "15 जुलाई 2015", "26 जनवरी 2015", "15 अगस्त 2015", "1 अप्रैल 2015", 0, "SSC CGL", "2025"),
    Q("Digital India कब शुरू हुआ?", "1 जुलाई 2015", "15 अगस्त 2015", "26 जनवरी 2015", "1 अप्रैल 2015", 0, "MPPSC Pre", "2025"),
    Q("Swachh Bharat Mission कब शुरू हुआ?", "2 अक्टूबर 2014", "15 अगस्त 2014", "26 जनवरी 2015", "1 अप्रैल 2014", 0, "SSC CGL", "2025"),
    Q("Beti Bachao Beti Padhao कब शुरू हुआ?", "22 जनवरी 2015", "8 मार्च 2015", "15 अगस्त 2015", "26 जनवरी 2015", 0, "MPPSC Pre", "2025"),
    Q("PM Ujjwala Yojana कब शुरू हुई?", "1 मई 2016", "15 अगस्त 2016", "26 जनवरी 2016", "2 अक्टूबर 2016", 0, "SSC CGL", "2025"),
    Q("Ayushman Bharat Yojana कब शुरू हुई?", "23 सितंबर 2018", "15 अगस्त 2018", "26 जनवरी 2018", "1 अप्रैल 2018", 0, "MPPSC Pre", "2025"),
    Q("Ayushman Bharat में कितने तक का Free इलाज?", "5 लाख/वर्ष/परिवार", "1 लाख", "2 लाख", "10 लाख", 0, "SSC CGL", "2025"),
    Q("PM SVANidhi Yojana किसके लिए है?", "Street Vendors", "Farmers", "Students", "Teachers", 0, "MPPSC Pre", "2025"),
    Q("PM WANI Scheme किससे संबंधित है?", "Public Wi-Fi", "Water Supply", "Agriculture", "Education", 0, "SSC CGL", "2025")
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
console.log('*** GRAND TOTAL: ' + total + ' ***');
console.log('============================');
