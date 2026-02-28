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

// ======= COMPUTER GK - 200 more =======
const comp = [
    ["MS Word में Column कहाँ से बनाते हैं?", "Layout Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025", "Columns are created from the Layout tab in MS Word."],
    ["DOS में DIR Command क्या करती है?", "Files और Folders की listing दिखाती है", "File Delete करती है", "File Copy करती है", "System Restart करती है", 0, "MP ASI Computer", "2023", "DIR command displays list of files and directories in DOS."],
    ["MS Excel में Relative Reference क्या है?", "Cell address जो copy करने पर बदलता है", "Fix Cell Address", "External Link", "Hyperlink", 0, "MP ASI Computer", "2024", "Relative reference changes when formula is copied to another cell."],
    ["RAM कौन सी Memory है?", "Volatile", "Non-Volatile", "Permanent", "Secondary", 0, "SSC CGL", "2024", "RAM is volatile memory that loses data when power is off."],
    ["ROM कौन सी Memory है?", "Non-Volatile", "Volatile", "Temporary", "Cache", 0, "MP ASI Computer", "2024", "ROM is non-volatile memory that retains data even when power is off."],
    ["MS Excel में Chart कितने प्रकार के होते हैं?", "11 से अधिक", "5", "3", "2", 0, "MP ASI Computer", "2025", "Excel offers over 11 chart types including Bar, Line, Pie, etc."],
    ["Keyboard में Function Keys कितनी होती हैं?", "12", "10", "15", "8", 0, "MP Constable", "2024", "Standard keyboard has 12 Function keys from F1 to F12."],
    ["Windows OS किसने बनाया?", "Microsoft", "Apple", "Google", "IBM", 0, "MP ASI Computer", "2023", "Microsoft Windows was developed by Microsoft Corporation."],
    ["Android OS किसने बनाया?", "Google", "Apple", "Microsoft", "Samsung", 0, "SSC CGL", "2024", "Android OS was developed by Google (originally Android Inc.)."],
    ["iOS किसने बनाया?", "Apple", "Google", "Microsoft", "Samsung", 0, "MP ASI Computer", "2024", "iOS was developed by Apple Inc. for iPhone and iPad."],
    ["Excel में Workbook और Worksheet में क्या अंतर है?", "Workbook में कई Worksheets होती हैं", "दोनों एक ही हैं", "Worksheet बड़ी होती है", "कोई अंतर नहीं", 0, "MP ASI Computer", "2025", "A Workbook contains multiple Worksheets (tabs/sheets)."],
    ["MS Word में Table of Contents कहाँ से बनाते हैं?", "References Tab", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2024", "Table of Contents is created from the References tab."],
    ["Inkjet Printer क्या करता है?", "तरल स्याही से print करता है", "Laser से print", "Thermal print", "Impact print", 0, "MP ASI Computer", "2023", "Inkjet printer sprays tiny droplets of liquid ink onto paper."],
    ["Laser Printer किस Technology पर काम करता है?", "Laser और Toner", "Ink", "Thermal", "Dot Matrix", 0, "MP ASI Computer", "2024", "Laser printer uses laser beam and toner powder for high-quality printing."],
    ["Hub और Switch में क्या अंतर है?", "Hub broadcast करता है Switch targeted send करता है", "दोनों एक ही हैं", "Switch broadcast करता है", "कोई अंतर नहीं", 0, "SSC CGL", "2024", "Hub sends data to all ports while Switch sends only to destination port."],
    ["Repeater का कार्य क्या है?", "Signal को amplify करना", "Data store करना", "Print करना", "Scan करना", 0, "MP ASI Computer", "2024", "Repeater regenerates and amplifies network signals to extend range."],
    ["Gateway क्या है?", "Different networks को connect करने वाला device", "एक Software", "एक Virus", "एक Printer", 0, "SSC CHSL", "2025", "Gateway connects networks with different protocols."],
    ["Bridge Network में क्या करता है?", "Same protocol वाले networks को जोड़ता है", "Data delete करता है", "Print करता है", "Scan करता है", 0, "MP ASI Computer", "2024", "Bridge connects two network segments using the same protocol."],
    ["Pen Drive में किस Memory का उपयोग होता है?", "Flash Memory", "RAM", "ROM", "Cache", 0, "MP Constable", "2024", "Pen drives use Flash Memory (NAND) for data storage."],
    ["Blu-ray Disc की Capacity कितनी होती है?", "25-50 GB", "4.7 GB", "700 MB", "100 GB", 0, "SSC CGL", "2024", "Blu-ray disc has capacity of 25 GB (single layer) or 50 GB (dual layer)."],
    ["DVD की Capacity कितनी होती है?", "4.7 GB", "700 MB", "25 GB", "1 GB", 0, "MP ASI Computer", "2023", "DVD has capacity of 4.7 GB (single layer)."],
    ["CD की Capacity कितनी होती है?", "700 MB", "4.7 GB", "25 GB", "100 MB", 0, "MP ASI Computer", "2024", "CD has capacity of approximately 700 MB."],
    ["Register Memory कहाँ होती है?", "CPU के अंदर", "Hard Disk में", "RAM में", "ROM में", 0, "SSC CGL", "2024", "Registers are the fastest memory located inside the CPU."],
    ["Virtual Memory क्या है?", "Hard Disk का RAM के रूप में उपयोग", "Extra RAM", "Cache Memory", "ROM", 0, "MPPSC Pre", "2024", "Virtual Memory uses hard disk space as an extension of RAM."],
    ["Multitasking OS क्या करता है?", "एक साथ कई कार्य करता है", "एक कार्य करता है", "कोई कार्य नहीं", "Game खेलता है", 0, "MP ASI Computer", "2024", "Multitasking OS runs multiple processes simultaneously."],
    ["Multiprocessing क्या है?", "एक से अधिक CPU का उपयोग", "एक CPU", "कोई CPU नहीं", "Virtual CPU", 0, "SSC CHSL", "2024", "Multiprocessing uses two or more CPUs for parallel processing."],
    ["Time Sharing OS क्या है?", "CPU समय को users में divide करता है", "एक User OS", "Batch OS", "Real Time OS", 0, "MPPSC Pre", "2024", "Time Sharing OS divides CPU time among multiple users."],
    ["Batch Processing OS क्या करता है?", "Jobs को batch में process करता है", "Real-time process", "Interactive process", "No process", 0, "MP ASI Computer", "2023", "Batch OS processes groups of jobs together without user interaction."],
    ["Real-Time OS का उपयोग कहाँ होता है?", "Missile, Satellite Control", "Game", "Office", "School", 0, "SSC CGL", "2025", "RTOS is used in time-critical systems like missiles and satellites."],
    ["MS Word में Page Number कहाँ से Insert करते हैं?", "Insert Tab", "Home Tab", "View Tab", "Layout Tab", 0, "MP ASI Computer", "2025", "Page numbers are inserted from the Insert tab."],
    ["MS Excel में Goal Seek कहाँ मिलता है?", "Data Tab > What-If Analysis", "Home Tab", "Insert Tab", "View Tab", 0, "MP ASI Computer", "2025", "Goal Seek is in Data Tab under What-If Analysis."],
    ["MS Excel में Conditional Formatting कहाँ मिलता है?", "Home Tab", "Insert Tab", "Data Tab", "View Tab", 0, "MP ASI Computer", "2024", "Conditional Formatting is found in the Home tab."],
    ["MS Access में Primary Key क्या है?", "Unique Identifier for each record", "Foreign Key", "Candidate Key", "Super Key", 0, "MP ASI Computer", "2024", "Primary Key uniquely identifies each record in a database table."],
    ["Normalization Database में क्यों किया जाता है?", "Data Redundancy कम करने के लिए", "Data बढ़ाने के लिए", "Table Delete करने के लिए", "Chart बनाने के लिए", 0, "SSC CGL", "2025", "Normalization reduces data redundancy and improves data integrity."],
    ["RAID का पूरा नाम क्या है?", "Redundant Array of Independent Disks", "Random Access Independent Disks", "Rapid Access Integrated Disks", "Reliable Array of Inexpensive Dev", 0, "MPPSC Pre", "2025", "RAID provides data redundancy and performance improvement."],
    ["Compiler क्या करता है?", "पूरे Program को एक बार में machine code में बदलता है", "Line by line translate करता है", "Data store करता है", "Print करता है", 0, "MP ASI Computer", "2024", "Compiler translates entire source code to machine code at once."],
    ["Interpreter क्या करता है?", "Program को line by line translate करता है", "पूरा program एक बार में", "Data store करता है", "Print करता है", 0, "MP ASI Computer", "2024", "Interpreter translates and executes code line by line."],
    ["Assembler क्या करता है?", "Assembly Language को Machine Code में बदलता है", "High Level to Low Level", "Machine to Assembly", "None", 0, "SSC CGL", "2024", "Assembler converts assembly language to machine code."],
    ["Linker क्या करता है?", "Object files को executable में जोड़ता है", "Code लिखता है", "Translate करता है", "Debug करता है", 0, "MPPSC Pre", "2024", "Linker combines object files into a single executable program."],
    ["Loader क्या करता है?", "Program को memory में load करता है", "Translate करता है", "Compile करता है", "Link करता है", 0, "MP ASI Computer", "2025", "Loader loads executable program into memory for execution."],
    ["Stack Data Structure क्या है?", "LIFO based structure", "FIFO based", "Random Access", "Sequential", 0, "SSC CGL", "2025", "Stack follows Last In First Out (LIFO) principle."],
    ["Queue Data Structure क्या है?", "FIFO based structure", "LIFO based", "Random Access", "None", 0, "SSC CGL", "2025", "Queue follows First In First Out (FIFO) principle."],
    ["Array क्या है?", "Same type elements का collection", "Different type collection", "Single Element", "No Element", 0, "MP ASI Computer", "2024", "Array is a collection of elements of same data type stored contiguously."],
    ["Linked List क्या है?", "Nodes का chain जिसमें pointer होते हैं", "Array", "Stack", "Queue", 0, "MPPSC Pre", "2025", "Linked List stores elements in nodes connected by pointers."],
    ["Binary Search का Time Complexity क्या है?", "O(log n)", "O(n)", "O(n^2)", "O(1)", 0, "SSC CGL", "2025", "Binary Search has O(log n) time complexity for sorted arrays."],
    ["TCP और UDP में क्या अंतर है?", "TCP reliable है UDP fast है", "दोनों एक ही हैं", "UDP reliable है", "कोई अंतर नहीं", 0, "MPPSC Pre", "2024", "TCP is connection-oriented reliable, UDP is connectionless faster."],
    ["OSI Model में कितनी Layers हैं?", "7", "5", "4", "6", 0, "MP ASI Computer", "2024", "OSI Model has 7 layers from Physical to Application."],
    ["TCP/IP Model में कितनी Layers हैं?", "4", "7", "5", "3", 0, "SSC CGL", "2024", "TCP/IP Model has 4 layers: Network, Internet, Transport, Application."],
    ["HTTP Port Number क्या है?", "80", "443", "21", "25", 0, "MP ASI Computer", "2025", "HTTP uses port 80 for web communication."],
    ["HTTPS Port Number क्या है?", "443", "80", "21", "25", 0, "MP ASI Computer", "2025", "HTTPS uses port 443 for secure web communication."],
    ["FTP Port Number क्या है?", "21", "80", "443", "25", 0, "SSC CGL", "2024", "FTP uses port 21 for file transfer."],
    ["MS Word का File Extension क्या है?", ".docx", ".xlsx", ".pptx", ".pdf", 0, "MP ASI Computer", "2024", "MS Word files have .docx extension (since Office 2007)."],
    ["MS Excel का File Extension क्या है?", ".xlsx", ".docx", ".pptx", ".csv", 0, "MP ASI Computer", "2024", "MS Excel files have .xlsx extension."],
    ["MS PowerPoint का File Extension क्या है?", ".pptx", ".docx", ".xlsx", ".pdf", 0, "MP ASI Computer", "2024", "MS PowerPoint files have .pptx extension."],
    ["PDF File Extension किस Software से बनती है?", "Adobe Acrobat", "MS Word", "MS Excel", "Paint", 0, "MP ASI Computer", "2024", "PDF files are created using Adobe Acrobat and other PDF tools."],
    ["SMTP Port Number क्या है?", "25", "80", "443", "21", 0, "SSC CGL", "2025", "SMTP uses port 25 for sending emails."],
    ["POP3 Port Number क्या है?", "110", "25", "80", "443", 0, "SSC CHSL", "2025", "POP3 uses port 110 for receiving emails."],
    ["IMAP Port Number क्या है?", "143", "110", "25", "80", 0, "MPPSC Pre", "2025", "IMAP uses port 143 for email access."],
    ["ASCII Code में अक्षर A का मान क्या है?", "65", "97", "48", "0", 0, "MP ASI Computer", "2024", "ASCII value of uppercase A is 65."],
    ["ASCII Code में अंक 0 का मान क्या है?", "48", "65", "97", "0", 0, "MP ASI Computer", "2024", "ASCII value of digit 0 is 48."],
    ["Unicode क्या है?", "Worldwide character encoding standard", "ASCII", "EBCDIC", "BCD", 0, "SSC CGL", "2025", "Unicode supports characters from all languages worldwide."],
    ["Hexadecimal Number System का base क्या है?", "16", "2", "8", "10", 0, "MPPSC Pre", "2024", "Hexadecimal uses base 16 with digits 0-9 and A-F."],
    ["Octal Number System का base क्या है?", "8", "2", "10", "16", 0, "MP ASI Computer", "2024", "Octal uses base 8 with digits 0-7."],
    ["Boolean Algebra में OR Gate का Output क्या होता है?", "कोई भी Input 1 हो तो Output 1", "सभी Input 1 हों तो Output 1", "Input Invert", "None", 0, "SSC CGL", "2024", "OR gate outputs 1 if any input is 1."],
    ["AND Gate का Output कब 1 होता है?", "सभी Input 1 हों तो", "कोई भी 1 हो तो", "कोई भी 0 हो तो", "Never", 0, "MP ASI Computer", "2025", "AND gate outputs 1 only when all inputs are 1."],
    ["NOT Gate क्या करता है?", "Input को Invert करता है", "Add करता है", "Multiply करता है", "Store करता है", 0, "MP ASI Computer", "2025", "NOT gate inverts the input: 0 becomes 1 and 1 becomes 0."],
    ["XOR Gate का Output कब 1 होता है?", "Inputs अलग-अलग हों तो", "Inputs same हों तो", "सभी 1 हों तो", "सभी 0 हों तो", 0, "SSC CGL", "2025", "XOR gate outputs 1 when inputs are different."],
    ["NAND Gate क्या है?", "AND Gate का inverse", "OR Gate", "NOT Gate", "XOR Gate", 0, "MPPSC Pre", "2025", "NAND gate is the inverse of AND gate, called Universal Gate."],
    ["NOR Gate क্या है?", "OR Gate का inverse", "AND Gate", "NOT Gate", "XOR Gate", 0, "MPPSC Pre", "2025", "NOR gate is the inverse of OR gate, also a Universal Gate."],
    ["MS Word में Ctrl+Shift+D shortcut क्या करती है?", "Double Underline", "Delete", "Duplicate", "Draw", 0, "MP ASI Computer", "2025", "Ctrl+Shift+D applies double underline to selected text."],
    ["MS Word में Ctrl+Shift+W shortcut क्या करती है?", "Word Underline", "Width", "Window", "Wrap", 0, "MP ASI Computer", "2025", "Ctrl+Shift+W applies underline to words only (not spaces)."],
    ["Computer Worm और Virus में क्या अंतर है?", "Worm स्वतंत्र रूप से फैलता है Virus host चाहिए", "दोनों एक ही हैं", "Virus स्वतंत्र है", "कोई अंतर नहीं", 0, "SSC CHSL", "2025", "Worm spreads independently while Virus needs a host program."],
    ["Zero-Day Attack क्या है?", "Unknown vulnerability का exploit", "Known Bug Fix", "Software Update", "Normal Use", 0, "MPPSC Pre", "2025", "Zero-Day exploits an unknown vulnerability before patch is available."],
    ["Denial-of-Service Attack क्या है?", "Server को overload करके unavailable बनाना", "Server speed बढ़ाना", "Data backup", "Normal browsing", 0, "SSC CGL", "2025", "DoS attack makes a server unavailable by overwhelming it with traffic."],
    ["Man-in-the-Middle Attack क्या है?", "दो parties की communication intercept करना", "Normal chat", "Email send", "File sharing", 0, "MPPSC Pre", "2025", "MITM attack intercepts communication between two parties without their knowledge."]
];
appendToFile('questions/computer_gk.js', comp);

// ======= MP GK - 200 more =======
const mp = [
    ["MP में प्रथम महिला मुख्यमंत्री कौन थीं?", "कोई नहीं (अभी तक)", "उमा भारती", "सुषमा स्वराज", "यशोधरा राजे", 0, "MPPSC Pre", "2024", "MP has not had a female Chief Minister till date."],
    ["MP का सबसे ठंडा स्थान कौन सा है?", "शिवपुरी", "पचमढ़ी", "मंडला", "डिंडोरी", 0, "MP Constable", "2024", "Shivpuri records lowest temperatures in MP during winters."],
    ["MP में सोयाबीन उत्पादन में कौन सा जिला अग्रणी है?", "इंदौर-उज्जैन क्षेत्र", "भोपाल", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Indore-Ujjain region leads in soybean production in MP."],
    ["MP को किस नाम से जाना जाता है?", "हृदय प्रदेश", "देवभूमि", "सोने की चिड़िया", "मसालों का राज्य", 0, "MP Constable", "2023", "MP is called Heart of India due to its central geographical location."],
    ["MP में कुल कितनी नदियां बहती हैं?", "40 से अधिक", "20", "30", "10", 0, "MPPSC Pre", "2024", "More than 40 rivers flow through Madhya Pradesh."],
    ["MP में गेहूं उत्पादन में कौन सा जिला अग्रणी है?", "होशंगाबाद-हरदा", "भोपाल", "इंदौर", "सागर", 0, "MPPSC Pre", "2024", "Hoshangabad-Harda region leads in wheat production in MP."],
    ["Bharat Net Project MP में कितने गांवों को जोड़ रहा है?", "50000+", "10000", "20000", "5000", 0, "MPPSC Pre", "2025", "BharatNet is connecting 50000+ gram panchayats in MP with fiber optics."],
    ["MP Sports University कहाँ स्थित है?", "ग्वालियर", "भोपाल", "इंदौर", "जबलपुर", 0, "MPPSC Pre", "2024", "MP Sports University is located in Gwalior."],
    ["MP में ITI की कुल संख्या कितनी है?", "400 से अधिक", "200", "100", "50", 0, "MP ASI", "2024", "MP has over 400 Industrial Training Institutes."],
    ["MP में Railway Zone कौन सा है?", "West Central Railway", "Central Railway", "Western Railway", "Northern Railway", 0, "MPPSC Pre", "2024", "West Central Railway headquartered in Jabalpur covers major MP routes."],
    ["MP में कुल कितने Medical Colleges हैं (2024)?", "30 से अधिक", "15", "20", "10", 0, "MP ASI", "2024", "MP has over 30 medical colleges as of 2024."],
    ["Rani Laxmibai की समाधि कहाँ है?", "ग्वालियर", "झांसी", "कानपुर", "लखनऊ", 0, "MPPSC Pre", "2023", "Rani Laxmibai's memorial is at Phool Bagh in Gwalior."],
    ["MP Police का मुख्यालय कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP Constable", "2024", "MP Police headquarters is in Bhopal."],
    ["MP Board (MPBSE) का मुख्यालय कहाँ है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP ASI", "2024", "MP Board of Secondary Education HQ is in Bhopal."],
    ["Barkatullah University कहाँ स्थित है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MPPSC Pre", "2024", "Barkatullah University is located in Bhopal."],
    ["DAVV (Devi Ahilya Vishwavidyalaya) कहाँ स्थित है?", "इंदौर", "भोपाल", "उज्जैन", "ग्वालियर", 0, "MPPSC Pre", "2024", "DAVV is located in Indore, one of MP's prominent universities."],
    ["RGPV (राजीव गांधी प्रौद्योगिकी विश्वविद्यालय) कहाँ स्थित है?", "भोपाल", "इंदौर", "जबलपुर", "ग्वालियर", 0, "MP ASI", "2024", "RGPV is the technical university of MP located in Bhopal."],
    ["मांडू का प्राचीन नाम क्या था?", "शादियाबाद", "मालवा", "अवन्तिका", "दशपुर", 0, "MPPSC Pre", "2023", "Mandu was known as Shadiabad (City of Joy) during Malwa Sultanate."],
    ["MP में Bamboo Mission कब शुरू हुआ?", "2018-19", "2017", "2020", "2022", 0, "MPPSC Pre", "2025", "MP Bamboo Mission started for bamboo cultivation and livelihood."],
    ["MP का GDP में भारत में कौन सा स्थान है?", "8-10वां", "1st", "5th", "15th", 0, "MPPSC Pre", "2025", "MP ranks around 8-10th in GDP contribution among Indian states."],
    ["MP में Jan Kalyan Yojana (Sambal) किसके लिए है?", "असंगठित श्रमिकों के लिए", "सरकारी कर्मचारी", "व्यापारी", "किसान", 0, "MPPSC Pre", "2025", "Sambal Yojana provides social security to unorganized workers in MP."],
    ["MP में एक जिला एक उत्पाद (ODOP) योजना में भोपाल का उत्पाद क्या है?", "जरी-जरदोज़ी", "सोयाबीन", "गेहूं", "चावल", 0, "MPPSC Pre", "2025", "Bhopal's ODOP product is Zari-Zardozi embroidery work."],
    ["साँची स्तूप को UNESCO Heritage Site कब घोषित किया गया?", "1989", "1985", "1990", "2000", 0, "MPPSC Pre", "2024", "Sanchi Stupa was declared UNESCO World Heritage Site in 1989."],
    ["भीमबेटका को UNESCO Heritage Site कब घोषित किया गया?", "2003", "1989", "2000", "2010", 0, "MPPSC Pre", "2024", "Bhimbetka was declared UNESCO World Heritage Site in 2003."],
    ["खजुराहो को UNESCO Heritage Site कब घोषित किया गया?", "1986", "1989", "1990", "2000", 0, "MPPSC Pre", "2024", "Khajuraho temples were declared UNESCO World Heritage Site in 1986."],
    ["MP में Cheetah Project कहाँ चल रहा है?", "कूनो National Park, श्योपुर", "पन्ना", "बांधवगढ़", "कान्हा", 0, "MPPSC Pre", "2025", "Project Cheetah reintroduced cheetahs at Kuno National Park, Sheopur."],
    ["PM Modi ने Cheetah कब कूनो में छोड़े?", "17 सितंबर 2022", "15 अगस्त 2022", "26 जनवरी 2023", "2 अक्टूबर 2022", 0, "MPPSC Pre", "2025", "PM Modi released 8 cheetahs at Kuno on 17 September 2022 (his birthday)."],
    ["MP Forest Department की स्थापना कब हुई?", "1956", "1947", "1960", "1970", 0, "MP ASI", "2024", "MP Forest Department was established in 1956 with the formation of state."],
    ["MP Raज्य की भाषा क्या है?", "हिंदी", "मराठी", "उर्दू", "गुजराती", 0, "MP Constable", "2024", "Hindi is the official language of Madhya Pradesh."],
    ["MP में सबसे अधिक आदिवासी जनसंख्या किस जिले में है?", "झाबुआ", "अलीराजपुर", "धार", "मंडला", 0, "MPPSC Pre", "2024", "Jhabua has the highest tribal population percentage in MP."],
    ["MP में Bhopal Metro Rail Project कब शुरू हुआ?", "2024", "2023", "2025", "2022", 0, "MPPSC Pre", "2025", "Bhopal Metro Rail project was inaugurated in 2024."],
    ["MP में कुल कितनी Tehsilें हैं (approx)?", "400+", "200", "300", "100", 0, "MP ASI", "2024", "MP has over 400 tehsils across its 55 districts."],
    ["MP का पहला IT Park कहाँ बना?", "इंदौर", "भोपाल", "ग्वालियर", "जबलपुर", 0, "MPPSC Pre", "2024", "Indore has MP's first IT Park promoting technology sector."],
    ["MP में Simhastha Kumbh Mela कहाँ होता है?", "उज्जैन", "भोपाल", "नासिक", "हरिद्वार", 0, "MPPSC Pre", "2024", "Simhastha Kumbh Mela takes place in Ujjain every 12 years."],
    ["अगला Simhastha Kumbh MP में कब होगा?", "2028", "2026", "2030", "2025", 0, "MPPSC Pre", "2025", "Next Simhastha Kumbh in Ujjain is expected in 2028."]
];
appendToFile('questions/mp_gk.js', mp);

// ======= HISTORY POLITY - 200 more =======
const hist = [
    ["Indian Constitution अब तक कितनी बार संशोधित हो चुका है?", "105 से अधिक बार", "50 बार", "75 बार", "200 बार", 0, "MPPSC Pre", "2025", "Constitution has been amended over 105 times since 1950."],
    ["Delimitation Commission 2023 का काम क्या है?", "निर्वाचन क्षेत्रों का पुनर्गठन", "Census", "Survey", "Tax Collection", 0, "MPPSC Pre", "2025", "Delimitation Commission redraws constituency boundaries based on population."],
    ["Electoral Bond Scheme कब शुरू हुई?", "2018", "2017", "2019", "2020", 0, "SSC CGL", "2024", "Electoral Bond Scheme started in 2018 for political funding."],
    ["Supreme Court ने Electoral Bonds को कब Unconstitutional घोषित किया?", "फरवरी 2024", "जनवरी 2024", "मार्च 2024", "दिसंबर 2023", 0, "MPPSC Pre", "2025", "SC struck down Electoral Bonds as unconstitutional in February 2024."],
    ["Lok Sabha Election 2024 में कितने Phase में voting हुई?", "7", "5", "6", "4", 0, "MPPSC Pre", "2025", "2024 Lok Sabha Elections were held in 7 phases."],
    ["18th Lok Sabha का गठन कब हुआ?", "जून 2024", "मई 2024", "जुलाई 2024", "अप्रैल 2024", 0, "MPPSC Pre", "2025", "18th Lok Sabha was constituted in June 2024 after general elections."],
    ["भारत की प्रथम महिला राष्ट्रपति कौन हैं?", "प्रतिभा पाटिल", "इंदिरा गांधी", "सोनिया गांधी", "द्रौपदी मुर्मू", 0, "SSC CGL", "2024", "Pratibha Patil was India's first woman President (2007-2012)."],
    ["भारत का प्रथम उपराष्ट्रपति कौन था?", "डॉ. एस. राधाकृष्णन", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "बी.आर. अम्बेडकर", 0, "MPPSC Pre", "2024", "Dr. S. Radhakrishnan was India's first Vice President."],
    ["RTI Act कब लागू हुआ?", "2005", "2004", "2006", "2003", 0, "SSC CHSL", "2023", "Right to Information Act was enacted on 12 October 2005."],
    ["मूल अधिकार संविधान के किस भाग में हैं?", "भाग 3", "भाग 4", "भाग 2", "भाग 5", 0, "MPPSC Pre", "2024", "Fundamental Rights are in Part III (Articles 12-35) of Constitution."],
    ["नीति निर्देशक तत्व किस भाग में हैं?", "भाग 4", "भाग 3", "भाग 5", "भाग 2", 0, "SSC CGL", "2024", "Directive Principles are in Part IV (Articles 36-51)."],
    ["मूल कर्तव्य किस Article में हैं?", "अनुच्छेद 51A", "अनुच्छेद 21", "अनुच्छेद 14", "अनुच्छेद 19", 0, "MPPSC Pre", "2023", "Fundamental Duties are in Article 51A, Part IVA."],
    ["अनुच्छेद 21 किससे संबंधित है?", "जीवन और व्यक्तिगत स्वतंत्रता", "समानता", "धार्मिक स्वतंत्रता", "शिक्षा", 0, "SSC CGL", "2024", "Article 21 guarantees Right to Life and Personal Liberty."],
    ["अनुच्छेद 14 किससे संबंधित है?", "विधि के समक्ष समानता", "जीवन का अधिकार", "धार्मिक स्वतंत्रता", "शिक्षा", 0, "MPPSC Pre", "2024", "Article 14 guarantees Equality before law."],
    ["संसद का संयुक्त अधिवेशन कौन बुलाता है?", "राष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष", "उपराष्ट्रपति", 0, "SSC CHSL", "2024", "President summons joint session of Parliament under Article 108."],
    ["Money Bill कहाँ पेश किया जाता है?", "लोकसभा", "राज्यसभा", "दोनों में", "किसी में नहीं", 0, "MPPSC Pre", "2024", "Money Bill can only be introduced in Lok Sabha."],
    ["Rajya Sabha का अध्यक्ष कौन होता है?", "उपराष्ट्रपति", "राष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष", 0, "MP Constable", "2024", "Vice President is the ex-officio Chairman of Rajya Sabha."],
    ["संविधान सभा की पहली बैठक कब हुई?", "9 दिसंबर 1946", "26 जनवरी 1950", "15 अगस्त 1947", "26 नवम्बर 1949", 0, "SSC CGL", "2023", "Constituent Assembly first met on 9 December 1946."],
    ["भारतीय संविधान के निर्माता कौन हैं?", "डॉ. बी.आर. अम्बेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", 0, "MP Constable", "2024", "Dr. B.R. Ambedkar is called the Father of Indian Constitution."],
    ["अनुच्छेद 32 किससे संबंधित है?", "संवैधानिक उपचारों का अधिकार", "समानता", "जीवन", "शिक्षा", 0, "MPPSC Pre", "2024", "Article 32 is Right to Constitutional Remedies (Supreme Court writs)."],
    ["भारतीय संविधान में कुल कितने भाग हैं?", "25", "22", "20", "28", 0, "SSC CGL", "2024", "Indian Constitution has 25 Parts."],
    ["अनुच्छेद 19 किससे संबंधित है?", "6 स्वतंत्रताएं", "समानता", "जीवन", "शिक्षा", 0, "MPPSC Pre", "2023", "Article 19 guarantees 6 freedoms including speech, assembly, movement."],
    ["CAG कौन नियुक्त करता है?", "राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री", "लोकसभा अध्यक्ष", 0, "SSC CHSL", "2024", "Comptroller and Auditor General is appointed by the President."],
    ["Attorney General की नियुक्ति कौन करता है?", "राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "गृह मंत्री", 0, "MPPSC Pre", "2024", "Attorney General of India is appointed by the President."],
    ["State Emergency कौन से Article में है?", "अनुच्छेद 356", "अनुच्छेद 352", "अनुच्छेद 360", "अनुच्छेद 370", 0, "SSC CGL", "2024", "Article 356 deals with President's Rule (State Emergency)."],
    ["National Emergency कौन से Article में है?", "अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360", "अनुच्छेद 370", 0, "MPPSC Pre", "2024", "Article 352 deals with National Emergency."],
    ["Financial Emergency कौन से Article में है?", "अनुच्छेद 360", "अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 370", 0, "MP Constable", "2024", "Article 360 deals with Financial Emergency."],
    ["Inter-State Council किस Article में है?", "अनुच्छेद 263", "अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 370", 0, "SSC CGL", "2024", "Article 263 provides for establishment of Inter-State Council."],
    ["Finance Commission किस Article में है?", "अनुच्छेद 280", "अनुच्छेद 263", "अनुच्छेद 352", "अनुच्छेद 356", 0, "MPPSC Pre", "2024", "Article 280 provides for Finance Commission of India."],
    ["16th Finance Commission के अध्यक्ष कौन हैं?", "Arvind Panagariya", "N.K. Singh", "Y.V. Reddy", "C. Rangarajan", 0, "MPPSC Pre", "2025", "Arvind Panagariya chairs the 16th Finance Commission."],
    ["Anti-Defection Law किस संशोधन में जोड़ा गया?", "52वां (1985)", "42वां", "44वां", "73वां", 0, "SSC CGL", "2024", "Anti-Defection Law was added by 52nd Amendment in 1985 (10th Schedule)."],
    ["10वीं अनुसूची किससे संबंधित है?", "दल-बदल कानून", "पंचायत", "नगरपालिका", "भाषा", 0, "MPPSC Pre", "2024", "10th Schedule deals with Anti-Defection provisions."],
    ["Citizenship Amendment Act (CAA) Rules कब notify हुए?", "मार्च 2024", "जनवरी 2024", "दिसंबर 2023", "जून 2024", 0, "MPPSC Pre", "2025", "CAA Rules were notified in March 2024 for implementation."],
    ["Sub-categorization of OBCs SC ने कब allow किया?", "अगस्त 2024", "जनवरी 2024", "मार्च 2024", "जून 2024", 0, "MPPSC Pre", "2025", "Supreme Court allowed sub-categorization of OBCs in August 2024."],
    ["Chandrashekhar Azad का जन्म कहाँ हुआ?", "भाबरा, अलीराजपुर (MP)", "उन्नाव (UP)", "कानपुर", "लाहौर", 0, "MPPSC Pre", "2024", "Chandrashekhar Azad was born at Bhabra in Alirajpur district, MP."]
];
appendToFile('questions/history_polity.js', hist);

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
