/* =====================================================================
   BANCA DE ÎNTREBĂRI — IT SPECIALIST: DEVICE CONFIGURATION AND MANAGEMENT
   Vezi data/python.js pentru explicația completă a formatului de întrebări.
   ===================================================================== */

window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.deviceConfig = {
  id: "deviceConfig",
  name: "Device Configuration and Management",
  shortLabel: "DCM",
  accent: "#7C5CFF",
  description: "Instalarea, configurarea și depanarea dispozitivelor Windows: aplicații, periferice, date și securitate.",

  CHAPTERS: [
    { id: "instalare-config",   name: "Instalarea și configurarea Windows" },
    { id: "aplicatii-periferice", name: "Aplicații, funcții și periferice" },
    { id: "acces-date",         name: "Accesul și gestionarea datelor" },
    { id: "securitate-dispozitiv", name: "Securitatea dispozitivelor" },
    { id: "management-depanare", name: "Gestionare și depanare Windows" }
  ],

  QUESTIONS: [
    {
      id: "dcm-001",
      chapter: "instalare-config",
      type: "single",
      question: "Care instrument Windows este folosit pentru a crea o partiție nouă pe un disc?",
      options: ["Task Manager", "Disk Management", "Device Manager", "Event Viewer"],
      correct: 1,
      explanation: "Disk Management permite crearea, redimensionarea și formatarea partițiilor de disc."
    },
    {
      id: "dcm-002",
      chapter: "instalare-config",
      type: "true_false",
      question: "O adresă IP de tip APIPA (169.254.x.x) indică faptul că dispozitivul a primit cu succes o adresă de la un server DHCP.",
      options: ["Adevărat", "Fals"],
      correct: 1,
      explanation: "O adresă APIPA apare atunci când dispozitivul NU a reușit să contacteze un server DHCP și își auto-atribuie o adresă temporară."
    },
    {
      id: "dcm-003",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "Din ce locație implicită Windows instalează aplicații descărcate din Microsoft Store?",
      options: ["C:\\Program Files", "C:\\Windows\\System32", "C:\\Program Files\\WindowsApps", "C:\\Users\\Public"],
      correct: 2,
      explanation: "Aplicațiile din Microsoft Store (aplicații UWP) se instalează implicit în C:\\Program Files\\WindowsApps."
    },
    {
      id: "dcm-004",
      chapter: "aplicatii-periferice",
      type: "multiple",
      question: "Care dintre următoarele sunt periferice de intrare (input)? Alege 2 răspunsuri.",
      options: ["Tastatură", "Monitor", "Microfon", "Boxe"],
      correct: [0, 2],
      explanation: "Tastatura și microfonul trimit date către calculator (input); monitorul și boxele afișează/redau date (output)."
    },
    {
      id: "dcm-005",
      chapter: "acces-date",
      type: "single",
      question: "Ce tehnologie Windows permite criptarea unui întreg volum de disc?",
      options: ["EFS (Encrypting File System)", "BitLocker", "Windows Defender", "NTFS Permissions"],
      correct: 1,
      explanation: "BitLocker criptează întregul volum, în timp ce EFS criptează fișiere sau foldere individuale."
    },
    {
      id: "dcm-006",
      chapter: "acces-date",
      type: "drag_drop",
      question: "Asociază fiecare tip de backup cu descrierea corectă.",
      dragItems: [
        { id: "a", text: "Backup complet (full)" },
        { id: "b", text: "Backup incremental" },
        { id: "c", text: "Backup diferențial" }
      ],
      dropZones: [
        { id: "z1", label: "Copiază toate datele, indiferent de backup-urile anterioare", correctItemId: "a" },
        { id: "z2", label: "Copiază doar datele modificate de la ultimul backup de orice tip", correctItemId: "b" },
        { id: "z3", label: "Copiază datele modificate de la ultimul backup complet", correctItemId: "c" }
      ],
      explanation: "Full copiază tot; incremental copiază doar schimbările față de ultimul backup (complet sau incremental); diferențial copiază schimbările față de ultimul backup complet."
    },
    {
      id: "dcm-007",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "User Account Control (UAC) solicită confirmarea utilizatorului înainte ca o aplicație să facă modificări ce necesită drepturi de administrator.",
      options: ["Adevărat", "Fals"],
      correct: 0,
      explanation: "UAC este un mecanism de securitate care previne modificările neautorizate cerând confirmare explicită pentru acțiuni administrative."
    },
    {
      id: "dcm-008",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Care sistem de fișiere Windows suportă permisiuni de securitate la nivel de fișier/folder (NTFS permissions)?",
      options: ["FAT32", "exFAT", "NTFS", "CDFS"],
      correct: 2,
      explanation: "NTFS suportă liste de control al accesului (ACL) și permisiuni detaliate, spre deosebire de FAT32 sau exFAT."
    },
    {
      id: "dcm-009",
      chapter: "management-depanare",
      type: "single",
      question: "Ce instrument Windows arată jurnalul evenimentelor de sistem, aplicație și securitate pentru depanare?",
      options: ["Event Viewer", "Control Panel", "File Explorer", "Task Scheduler"],
      correct: 0,
      explanation: "Event Viewer înregistrează evenimente de sistem, aplicații și securitate, utile pentru diagnosticarea problemelor."
    },
    {
      id: "dcm-010",
      chapter: "management-depanare",
      type: "multiple",
      question: "Care dintre următoarele sunt pași corecți pentru a depana o conexiune de rețea care nu funcționează? Alege 2 răspunsuri.",
      options: [
        "Verificarea cablului fizic sau a conexiunii Wi-Fi",
        "Ștergerea contului de utilizator",
        "Rularea comenzii ipconfig pentru a verifica adresa IP",
        "Reinstalarea sistemului de operare"
      ],
      correct: [0, 2],
      explanation: "Verificarea conexiunii fizice și a configurației IP (ipconfig) sunt primii pași standard de depanare a rețelei."
    },
    {
      id: "dcm-011",
      chapter: "instalare-config",
      type: "multiple",
      question: "Which types of updates are found in the Optional Updates area on a Windows device? (Choose 2.)",
      options: ["Security updates","Firmware updates","Windows updates","Driver updates"],
      correct: [2,3],
      explanation: "Windows and driver updates are typically found in Optional Updates. Security updates are not optional, and firmware updates are usually only found on Surface devices."
    },
    {
      id: "dcm-012",
      chapter: "instalare-config",
      type: "single",
      question: "Which service hosts user accounts for Microsoft cloud offerings?",
      options: ["Azure Active Directory","Azure IAM","Active Directory Domain Services (AD DS)","Authentication Services"],
      correct: 0,
      explanation: "User accounts for Microsoft's cloud offerings are stored in an Azure Active Directory (Azure AD) tenant, which can be synchronized with on-premises AD DS using Azure AD Connect. AD DS is on-premises, and IAM and authentication services do not host accounts."
    },
    {
      id: "dcm-013",
      chapter: "instalare-config",
      type: "true_false",
      question: "Installing Windows: Microsoft Windows supports multiple languages, but may require you to download a language pack.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "If a preferred language does not appear in the display language list, its language pack must be installed first."
    },
    {
      id: "dcm-014",
      chapter: "instalare-config",
      type: "true_false",
      question: "Installing Windows: The installation process prompts you to set the current time zone.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Setup asks for the time zone; it can be changed later under Time & language."
    },
    {
      id: "dcm-015",
      chapter: "instalare-config",
      type: "true_false",
      question: "Installing Windows: An Upgrade installation is the same as a Custom installation.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "An upgrade keeps apps, files and settings and does not format the drive; a Custom installation performs a clean install and deletes everything on the installation drive."
    },
    {
      id: "dcm-016",
      chapter: "instalare-config",
      type: "true_false",
      question: "Windows installations: An installation can be done through a network share.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Windows can be installed from a network share."
    },
    {
      id: "dcm-017",
      chapter: "instalare-config",
      type: "true_false",
      question: "Windows installations: The default time zone is the Pacific time zone.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "According to the exam material, the default time zone during installation is Pacific."
    },
    {
      id: "dcm-018",
      chapter: "instalare-config",
      type: "true_false",
      question: "Windows installations: A Microsoft account is required for a Windows installation.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "A local account can be used; a Microsoft account is not required."
    },
    {
      id: "dcm-019",
      chapter: "instalare-config",
      type: "drag_drop",
      question: "Match each Windows installation feature with its description.",
      dragItems: [
        { id: "i1", text: "Time Zone" },
        { id: "i2", text: "Custom Installation" },
        { id: "i3", text: "Upgrade Installation" }
      ],
      dropZones: [
        { id: "z1", label: "Retains existing apps, files and Windows settings.", correctItemId: "i3" },
        { id: "z2", label: "Formats the destination hard drive to perform a clean install.", correctItemId: "i2" },
        { id: "z3", label: "The geographic location where the target computer resides.", correctItemId: "i1" }
      ],
      explanation: "An upgrade retains apps, files and settings; a Custom installation formats the drive (back up first); the time zone is the geographic location of the computer."
    },
    {
      id: "dcm-020",
      chapter: "instalare-config",
      type: "single",
      question: "You have been asked to explain the difference between a local account and a Microsoft account. Which of these options best describes a Microsoft account?",
      options: ["A Microsoft account works without the Internet.","A Microsoft account is a subscription-based account.","A Microsoft account is a cloud account.","A Microsoft account requires a VPN."],
      correct: 2,
      explanation: "A Microsoft account is a cloud account usable from any Internet-connected device."
    },
    {
      id: "dcm-021",
      chapter: "instalare-config",
      type: "single",
      question: "You have been asked to explain the difference between a local account and a Microsoft account. Which of these options best describes a local account?",
      options: ["A local account is a subscription-based account.","A local account works without the Internet.","A local account requires a VPN.","A local account is a cloud account."],
      correct: 1,
      explanation: "A local account exists only on the computer that created it, so it works without the Internet but can only be used to sign in to that computer."
    },
    {
      id: "dcm-022",
      chapter: "instalare-config",
      type: "multiple",
      question: "A new device administrator notices that many accounts on user devices are local accounts. Which other statements are true regarding local accounts? (Choose 2.)",
      options: ["Local accounts can access shares on other devices.","A network connection is not required to create an account.","All apps can be installed from the Microsoft Store.","Local accounts can be assigned permissions on other devices."],
      correct: [0,1],
      explanation: "Local accounts can access shares and can be created without a network connection. Only some apps can be installed from the Store, and local accounts cannot be assigned permissions on other devices."
    },
    {
      id: "dcm-023",
      chapter: "instalare-config",
      type: "true_false",
      question: "Desktop settings: Windows will not allow users to customize icons that appear in the Start menu.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Users can customize which folders appear in the Start menu under Settings > Personalization > Start."
    },
    {
      id: "dcm-024",
      chapter: "instalare-config",
      type: "true_false",
      question: "Desktop settings: Windows allows users to take panoramic photos using any hardware.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Panoramic photos are available on some hardware, not all."
    },
    {
      id: "dcm-025",
      chapter: "instalare-config",
      type: "true_false",
      question: "Desktop settings: The minus symbol on a window minimizes the window to the taskbar.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "The minus button minimizes a window to the taskbar."
    },
    {
      id: "dcm-026",
      chapter: "instalare-config",
      type: "true_false",
      question: "Desktop settings: Multiple monitors can be configured on a Windows device.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Additional monitors are set up under Display Settings."
    },
    {
      id: "dcm-027",
      chapter: "instalare-config",
      type: "true_false",
      question: "Desktop settings: The time zone setting cannot be changed after Windows is installed.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "The time zone can be changed under Time & language."
    },
    {
      id: "dcm-028",
      chapter: "instalare-config",
      type: "true_false",
      question: "Desktop settings: Windows allows a personal photo to be used as a desktop image.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "A personal photo can be set as the desktop background."
    },
    {
      id: "dcm-029",
      chapter: "instalare-config",
      type: "true_false",
      question: "Windows interface: Windows allows a user to add a custom toolbar to the taskbar.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Right-click an empty area of the taskbar, point to Toolbars, and select New Toolbar."
    },
    {
      id: "dcm-030",
      chapter: "instalare-config",
      type: "true_false",
      question: "Windows interface: The x button on a window closes the window.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "The x button closes the window."
    },
    {
      id: "dcm-031",
      chapter: "instalare-config",
      type: "true_false",
      question: "Windows interface: The square button on a window makes the window available only from the taskbar.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "The minus button minimizes a window to the taskbar; the square button maximizes or restores it."
    },
    {
      id: "dcm-032",
      chapter: "instalare-config",
      type: "single",
      question: "If a 32-bit software application is installed on a 64-bit Windows operating system, where is it stored?",
      options: ["Program Files folder","AppData folder","Program Files (x86) folder","Documents folder"],
      correct: 2,
      explanation: "32-bit applications on 64-bit Windows are stored in Program Files (x86). 64-bit apps go in Program Files, user-specific data in AppData, and the Documents folder stores files."
    },
    {
      id: "dcm-033",
      chapter: "instalare-config",
      type: "single",
      question: "Which folder is the default location for 64-bit app installations?",
      options: ["Program Files(x86)","Microsoft Store","Program Files","AppData"],
      correct: 2,
      explanation: "64-bit applications are installed in the Program Files folder."
    },
    {
      id: "dcm-034",
      chapter: "instalare-config",
      type: "single",
      question: "A user just installed a Windows update to be able to download and install a new app from the Microsoft Store, but cannot install the app. What should be done next to attempt to rectify the situation?",
      options: ["Check Family settings to see if the settings are hiding the app","Check to see if the app is compatible with the device","Reboot the device","Check to see if the app is blocked from the region in which the device is present"],
      correct: 2,
      explanation: "After a Windows update the device must be rebooted before installations from the Microsoft Store can take place."
    },
    {
      id: "dcm-035",
      chapter: "instalare-config",
      type: "multiple",
      question: "Which types of updates can be configured to occur automatically on most devices? (Choose 2.)",
      options: ["Operating System","Hardware","Application Software","Firmware"],
      correct: [0,2],
      explanation: "Updates can be automatic for the Windows operating system and most applications. Driver updates are generally not automatic, and firmware updates exist only for certain devices such as Surface."
    },
    {
      id: "dcm-036",
      chapter: "instalare-config",
      type: "single",
      question: "A user recently updated a Windows laptop. The user doesn't want to miss future important fixes or device drivers for Windows. What should the user do?",
      options: ["Manually update Windows every quarter","Enable Automatic Updates","Upgrade Windows","Check the internet every month for announcements about available updates"],
      correct: 1,
      explanation: "Automatic updates ensure the user does not miss fixes or drivers. Manual or periodic checks do not keep drivers updated in a timely manner."
    },
    {
      id: "dcm-037",
      chapter: "instalare-config",
      type: "multiple",
      question: "Which of the following options can Windows Update install automatically? (Choose 2.)",
      options: ["Definition updates","Critical updates","App updates","Firmware updates"],
      correct: [0,1],
      explanation: "Critical updates and Windows Security definition updates are automatic. Firmware and app updates are not automatic by default."
    },
    {
      id: "dcm-038",
      chapter: "instalare-config",
      type: "drag_drop",
      question: "An employee joining a new network is having trouble connecting to the internet and to other devices. Running ipconfig returns the IP address 169.254.22.23. Indicate the cause of the problem.",
      dragItems: [
        { id: "i1", text: "Static" },
        { id: "i2", text: "Web" },
        { id: "i3", text: "APIPA" },
        { id: "i4", text: "Dynamic" },
        { id: "i5", text: "DNS" },
        { id: "i6", text: "DHCP" }
      ],
      dropZones: [
        { id: "z1", label: "What type of IP address is the employee receiving?", correctItemId: "i3" },
        { id: "z2", label: "Which server is not being reached properly as a result of this type of IP address?", correctItemId: "i6" }
      ],
      explanation: "169.254.x.x is an APIPA (Automatic Private IP Address), assigned when the device cannot reach a DHCP server."
    },
    {
      id: "dcm-039",
      chapter: "instalare-config",
      type: "single",
      question: "An employee brings a laptop in from home to connect to the corporate domain-based network. The laptop cannot join a domain. The employee is running Windows Enterprise. What is the most likely cause of the inability to join a domain?",
      options: ["The user needs to be a member of the Domain Admins group","The user needs the Create computer object permission in Active Directory","The laptop needs to be running Windows Pro","The user needs to have Domain join installed"],
      correct: 1,
      explanation: "To join a domain, a user needs the Create computer object permission in Active Directory. Domain Admins membership is not required, and Enterprise can already join a domain."
    },
    {
      id: "dcm-040",
      chapter: "instalare-config",
      type: "single",
      question: "A consultant is trying to join a laptop to the company domain, but the option for joining a domain is not available. What operating system does the consultant likely have?",
      options: ["Windows Home","Windows Education","Windows Enterprise","Windows Pro"],
      correct: 0,
      explanation: "Windows Home cannot join a corporate domain. Education, Pro and Enterprise can."
    },
    {
      id: "dcm-041",
      chapter: "instalare-config",
      type: "true_false",
      question: "User accounts: Local administrator accounts can make changes to any computer in a domain.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Local administrators can only make changes to the local computer."
    },
    {
      id: "dcm-042",
      chapter: "instalare-config",
      type: "true_false",
      question: "User accounts: A Standard User account can be promoted to an Administrator account.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "In Manage Accounts, select the account, choose Change the account type, and select Administrator."
    },
    {
      id: "dcm-043",
      chapter: "instalare-config",
      type: "true_false",
      question: "User accounts: Only administrator accounts can install apps on a device.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Standard users can install apps when the installation does not require administrator-level privileges."
    },
    {
      id: "dcm-044",
      chapter: "instalare-config",
      type: "single",
      question: "On a Windows device, which account level and permission level, at a minimum, are needed to install apps on that device?",
      options: ["Standard user with domain administrative privileges","Standard user with local administrative privileges","Administrator with domain administrative privileges","Administrator with local administrative privileges"],
      correct: 1,
      explanation: "At a minimum, a Standard user with local administrative privileges can install apps. The account does not need to be an Administrator or have domain admin privileges."
    },
    {
      id: "dcm-045",
      chapter: "instalare-config",
      type: "single",
      question: "Which power setting, when enabled, stores files in RAM while a laptop is inactive?",
      options: ["Shutdown mode","Standby mode","Sleep mode","Hibernate mode"],
      correct: 2,
      explanation: "Sleep mode keeps data in RAM; Hibernate stores it on the hard drive; Shutdown loses unsaved data."
    },
    {
      id: "dcm-046",
      chapter: "instalare-config",
      type: "single",
      question: "A user has connected an external monitor to a laptop and wants to span the desktop across both displays. Icons representing each monitor are presented for configuration. Which option will cause the laptop monitor to display the left half of the extended desktop?",
      options: ["Extend these displays","Custom Scaling","Duplicate these displays","Screen Resolution"],
      correct: 0,
      explanation: "Extend these displays spreads the desktop across multiple screens. Duplicate shows the same desktop, resolution sets the size, and scaling adjusts text size."
    },
    {
      id: "dcm-047",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "An administrator wants software updates and patches applied as soon as possible on the apps they support. Where are most updates for apps found?",
      options: ["Start Menu","Device Manager","Windows Update","Within the apps themselves"],
      correct: 3,
      explanation: "Most app updates are found within the apps themselves. Windows Update handles operating system updates and Device Manager handles driver updates."
    },
    {
      id: "dcm-048",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "What would be the best way to access a commonly used network folder or application from the desktop?",
      options: ["Create a shortcut on the desktop","Create a shortcut in the Documents folder","Create a shortcut in the Start Menu","Drag the resource from its original location to the desktop"],
      correct: 0,
      explanation: "A desktop shortcut gives direct access. Dragging a resource moves it by default, which can break it."
    },
    {
      id: "dcm-049",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "A technician is looking for a cable that supports both video and digital audio output and is used for gaming consoles. Which connection type supports both?",
      options: ["DVI","3.5mm AUDIO","HDMI","VGA"],
      correct: 2,
      explanation: "HDMI carries video and digital audio. 3.5mm is analog audio only, and VGA and DVI carry video but not audio."
    },
    {
      id: "dcm-050",
      chapter: "aplicatii-periferice",
      type: "drag_drop",
      question: "Using drag and drop, match each connection type in the image with its name.",
      image: "assets/device1.png",
      dragItems: [
        { id: "i1", text: "AUDIO" },
        { id: "i2", text: "USB TYPE C" },
        { id: "i3", text: "HDMI" },
        { id: "i4", text: "ETHERNET" },
        { id: "i5", text: "USB" }
      ],
      dropZones: [
        { id: "z1", label: "A", correctItemId: "i1" },
        { id: "z2", label: "B", correctItemId: "i4" },
        { id: "z3", label: "C", correctItemId: "i3" },
        { id: "z4", label: "D", correctItemId: "i5" },
        { id: "z5", label: "E", correctItemId: "i2" }
      ],
      explanation: "A: AUDIO (headset). B: ETHERNET (network). C: HDMI (HD TV). D: USB (data and power for cameras, printers, storage). E: USB TYPE C (smaller, faster, reversible connector, typical on smartphones)."
    },
    {
      id: "dcm-051",
      chapter: "aplicatii-periferice",
      type: "drag_drop",
      question: "Using drag and drop, match each connection type in the image with the peripheral device it typically attaches.",
      image: "assets/device2.png",
      dragItems: [
        { id: "i1", text: "HDMI" },
        { id: "i2", text: "USB TYPE C" },
        { id: "i3", text: "USB" },
        { id: "i4", text: "AUDIO" },
        { id: "i5", text: "ETHERNET" }
      ],
      dropZones: [
        { id: "z1", label: "Headset", correctItemId: "i4" },
        { id: "z2", label: "Network", correctItemId: "i5" },
        { id: "z3", label: "TV", correctItemId: "i1" },
        { id: "z4", label: "Printer", correctItemId: "i3" },
        { id: "z5", label: "Smartphone", correctItemId: "i2" }
      ],
      explanation: "AUDIO connects a headset, ETHERNET connects a device to a network, HDMI connects a TV, USB connects printers, cameras and storage, and USB TYPE C is typical on smartphones."
    },
    {
      id: "dcm-052",
      chapter: "aplicatii-periferice",
      type: "drag_drop",
      question: "Match each video connection type with its capability.",
      dragItems: [
        { id: "i1", text: "VGA" },
        { id: "i2", text: "DisplayPort" },
        { id: "i3", text: "mini-HDMI" }
      ],
      dropZones: [
        { id: "z1", label: "A cable used for high-quality data transmission for both video and audio, often used with tablets and portable cameras", correctItemId: "i3" },
        { id: "z2", label: "Connects a desktop computer to a monitor using an analog connection", correctItemId: "i1" },
        { id: "z3", label: "A digital video transmission that allows connecting multiple displays to a single port", correctItemId: "i2" }
      ],
      explanation: "mini-HDMI carries video and audio on small devices, VGA is a legacy analog standard, and DisplayPort is digital and supports multiple displays from one port."
    },
    {
      id: "dcm-053",
      chapter: "aplicatii-periferice",
      type: "drag_drop",
      question: "A laptop has two USB-A ports and one USB-C port. An external drive is connected to a USB-A port, an iPhone with a USB-C cable must be plugged in occasionally, and an external monitor with an HDMI port must be connected. Choose the correct answer for each statement.",
      dragItems: [
        { id: "i1", text: "No" },
        { id: "i2", text: "USB-C to HDMI" },
        { id: "i3", text: "HDMI" },
        { id: "i4", text: "USB" },
        { id: "i5", text: "Yes" },
        { id: "i6", text: "VGA" },
        { id: "i7", text: "USB-A to HDMI" },
        { id: "i8", text: "USB hub" }
      ],
      dropZones: [
        { id: "z1", label: "A USB-A to HDMI adapter will allow the monitor to use its HDMI port and connect the USB-A end to one of the USB-A ports on the laptop.", correctItemId: "i5" },
        { id: "z2", label: "The laptop's owner found a USB-A to USB-C connector. Now, what adapter is needed?", correctItemId: "i2" },
        { id: "z3", label: "An external storage device is typically connected to a computer using:", correctItemId: "i4" }
      ],
      explanation: "A USB-A to HDMI adapter works with a free USB-A port. With a USB-A to USB-C connector used for the iPhone, a USB-C to HDMI adapter is needed for the monitor. External storage typically uses USB."
    },
    {
      id: "dcm-054",
      chapter: "aplicatii-periferice",
      type: "true_false",
      question: "Accessibility: Mouse settings are the same for every Windows device.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Mouse settings vary depending on the mouse installed on the device."
    },
    {
      id: "dcm-055",
      chapter: "aplicatii-periferice",
      type: "true_false",
      question: "Accessibility: Speech recognition can help those with hearing impairments.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Speech recognition turns spoken text into typed input; it does not help with hearing."
    },
    {
      id: "dcm-056",
      chapter: "aplicatii-periferice",
      type: "true_false",
      question: "Accessibility: An on-screen keyboard helps those with mobility issues.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "An on-screen keyboard lets users select keys with a mouse or other pointer."
    },
    {
      id: "dcm-057",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "A technician is setting up a laptop for someone who has trouble distinguishing reds from greens. Which Accessibility setting helps people who struggle to see certain colors?",
      options: ["Color filters","High Contrast","Magnifier","Colors"],
      correct: 0,
      explanation: "Color filters help people who struggle with certain colors (red/green or blue/yellow). High Contrast is for low vision, and Magnifier enlarges content."
    },
    {
      id: "dcm-058",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "A person wants to see text in a larger font but only while reading that specific text. Which Accessibility feature should the person use?",
      options: ["Text size","Narrator","Magnifier","Font settings"],
      correct: 2,
      explanation: "Magnifier enlarges the text under the mouse. Text size sets the overall size, and Narrator reads text aloud."
    },
    {
      id: "dcm-059",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "Which of the following accessibility features in Windows will let a user press multiple key commands (such as Ctrl + S) one key at a time?",
      options: ["Toggle Keys","On-Screen Keyboard","Sticky Keys","Filter Keys"],
      correct: 2,
      explanation: "Sticky Keys lets the user press key combinations one key at a time. Toggle Keys plays a sound for Caps/Num/Scroll lock, Filter Keys ignores brief or repeated keystrokes, and On-Screen Keyboard uses a mouse."
    },
    {
      id: "dcm-060",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "Which of the following accessibility features in Windows reads text to an individual?",
      options: ["Magnifier","Narrator","Closed Captions","Speech Recognition"],
      correct: 1,
      explanation: "Narrator reads text aloud. Closed Captions show words on screen, Speech Recognition converts speech to text, and Magnifier enlarges text."
    },
    {
      id: "dcm-061",
      chapter: "aplicatii-periferice",
      type: "drag_drop",
      question: "Match each accessibility setting with the accessibility need it helps.",
      dragItems: [
        { id: "i1", text: "Closed captions" },
        { id: "i2", text: "High-contrast" },
        { id: "i3", text: "Sticky keys" }
      ],
      dropZones: [
        { id: "z1", label: "Vision", correctItemId: "i2" },
        { id: "z2", label: "Hearing", correctItemId: "i1" },
        { id: "z3", label: "Mobility", correctItemId: "i3" }
      ],
      explanation: "High-contrast helps those with vision impairments, closed captions help those with hearing impairments, and sticky keys help those with mobility issues."
    },
    {
      id: "dcm-062",
      chapter: "aplicatii-periferice",
      type: "multiple",
      question: "In which areas of Windows will an administrator find the ability to repair or reinstall a desktop application? (Choose 2.)",
      options: ["Start Menu","Windows Update","Control Panel","Apps & Features"],
      correct: [2,3],
      explanation: "Desktop applications can be repaired or reinstalled from Apps & Features and the Control Panel. The Start Menu can only uninstall, and Windows Update handles system updates."
    },
    {
      id: "dcm-063",
      chapter: "aplicatii-periferice",
      type: "multiple",
      question: "Which is the proper way to cleanly uninstall a software application from a Windows computer? (Choose 2.)",
      options: ["Select Uninstall after an app is selected from the Start menu","Delete its applications folder","Remove its associated registry settings","Right-click the software title in Apps and Features and select Uninstall"],
      correct: [0,3],
      explanation: "Use the app's Uninstall option from the Start menu, Settings (Apps & features) or the Control Panel. The uninstaller removes folders and registry settings."
    },
    {
      id: "dcm-064",
      chapter: "aplicatii-periferice",
      type: "multiple",
      question: "A new administrator is learning about the benefits of the Microsoft Store. What are the main benefits of using it to obtain apps? (Choose 2.)",
      options: ["To update Windows devices","To allow a user to obtain both free and paid apps","To obtain apps that have been verified by Microsoft","To purchase devices for Windows-based computers"],
      correct: [1,2],
      explanation: "The Microsoft Store provides free and paid apps that Microsoft has verified. Windows Update updates Windows, and the Store does not sell hardware."
    },
    {
      id: "dcm-065",
      chapter: "aplicatii-periferice",
      type: "true_false",
      question: "Application installations and features: The Windows Features area is part of the Control Panel.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Windows Features is in the Control Panel."
    },
    {
      id: "dcm-066",
      chapter: "aplicatii-periferice",
      type: "true_false",
      question: "Application installations and features: The Family options area is used to set screen time limits on devices.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Family options let you set screen time limits."
    },
    {
      id: "dcm-067",
      chapter: "aplicatii-periferice",
      type: "true_false",
      question: "Application installations and features: Microsoft Store app updates must be done in the Apps & Features area.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Microsoft Store app updates can be done in the Store itself."
    },
    {
      id: "dcm-068",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "Which is a customization that can be made to a Windows Start menu?",
      options: ["Save Start Menu preset","Pin and Unpin tiles","Change the icon images of the Start Menu items","Download Start Menu templates"],
      correct: 1,
      explanation: "You can pin and unpin tiles (and move and resize them). There are no Start menu presets or templates, and icon images cannot be changed from the Start menu."
    },
    {
      id: "dcm-069",
      chapter: "aplicatii-periferice",
      type: "single",
      question: "Which Windows feature is used to update drivers or roll back drivers on hardware devices to previous versions?",
      options: ["Microsoft Store","Device Manager","Apps and Features","Windows Update"],
      correct: 1,
      explanation: "Device Manager updates and rolls back drivers."
    },
    {
      id: "dcm-070",
      chapter: "aplicatii-periferice",
      type: "multiple",
      question: "When using Device Manager to update drivers for a device, which options are available from within Device Manager? (Choose 2.)",
      options: ["Link to the device manufacturer's support site for a driver","Browse the host device for a driver","Search the web for an updated driver","Search the host device for a driver"],
      correct: [1,3],
      explanation: "Device Manager can browse the computer for a driver or have Windows search automatically. It does not search the web or link to the manufacturer's site."
    },
    {
      id: "dcm-071",
      chapter: "acces-date",
      type: "multiple",
      question: "A new technician wants to manage a printer that someone else installed in a business, but cannot access the printer management console. What should the network administrator do so that the technician can manage the printer? (Choose 2.)",
      options: ["Assign the technician the Manage Documents permission","Assign the technician the Manage Printers permission","Add the technician to the Administrators group for the network on which the printer resides","Assign the technician the Print permission"],
      correct: [0,1],
      explanation: "Managing a printer requires the Manage this printer (Manage Printers) and Manage documents permissions. Administrators group membership is not needed, and Print is assigned to everyone by default."
    },
    {
      id: "dcm-072",
      chapter: "acces-date",
      type: "single",
      question: "You are reorganizing the drive on your computer. You move several files to a new folder located on the same partition. When you move the files to the new folder, what happens to their permissions?",
      options: ["The destination folder permissions are inherited","The permissions on the files are retained","All permissions are lost","The source and destination permissions are combined"],
      correct: 1,
      explanation: "Files moved within the same partition keep their explicit permissions. Nothing is inherited because no new copy is created."
    },
    {
      id: "dcm-073",
      chapter: "acces-date",
      type: "single",
      question: "In which action with files and folders are permissions retained as those files or folders are moved or copied to a new destination?",
      options: ["Files and folders are moved to a new partition","Files and folders are moved within the same partition","Files and folders are copied to a new partition","Files and folders are copied within the same partition"],
      correct: 1,
      explanation: "Permissions are retained only when files or folders are moved within the same partition. Copies are new files and inherit permissions from the parent folder."
    },
    {
      id: "dcm-074",
      chapter: "acces-date",
      type: "single",
      question: "When a file or folder is moved or copied from one partition to another, what happens to the permissions of that file or folder?",
      options: ["The permissions inherit from the folder of the destination partition","The permissions from the source partition are retained with the file or folder","The users and groups assigned to the resource in the source partition are copied to the new partition","The permissions from the source partition remain with the file or folder"],
      correct: 0,
      explanation: "The destination partition can have different users and groups, so the file inherits permissions from its new parent folder."
    },
    {
      id: "dcm-075",
      chapter: "acces-date",
      type: "single",
      question: "A sales team often works in remote areas and needs to work on files even when not connected to the Internet. Which cloud feature enables this?",
      options: ["Blob storage","Offline backups","Offline file synchronization","Encryption"],
      correct: 2,
      explanation: "Offline file synchronization lets people work on cloud-based files without an Internet connection and syncs the changes later."
    },
    {
      id: "dcm-076",
      chapter: "acces-date",
      type: "single",
      question: "A consulting firm wants non-essential files purged after 90 days on a server, but essential files kept for up to seven years. Which type of policy should the firm build to define these and similar rules for historical data?",
      options: ["MOU","Remote wipe","Retention policy","AUP"],
      correct: 2,
      explanation: "A retention policy defines data classifications and how long data must be kept or when it should be purged."
    },
    {
      id: "dcm-077",
      chapter: "acces-date",
      type: "single",
      question: "A user needs to access a network folder frequently. Which method of accessing the folder would be the easiest for the user?",
      options: ["Add the folder to the Start Menu","Create a Workplace Join for that folder","Map a drive to that folder","Copy the folder contents to drive C:"],
      correct: 2,
      explanation: "Mapping a drive to the network folder is the easiest way to reach it. Workplace Join joins an entire workplace and copying the contents does not give access to the share."
    },
    {
      id: "dcm-078",
      chapter: "acces-date",
      type: "drag_drop",
      question: "Drag each Microsoft cloud service to the matching definition. Each service may be used once, more than once, or not at all.",
      dragItems: [
        { id: "i1", text: "Azure" },
        { id: "i2", text: "OneDrive" },
        { id: "i3", text: "SharePoint" },
        { id: "i4", text: "Teams" }
      ],
      dropZones: [
        { id: "z1", label: "Accommodates high-workload applications, virtual machines, and access from a variety of platforms", correctItemId: "i1" },
        { id: "z2", label: "An intranet-based collaboration site where files and folders can be stored and shared", correctItemId: "i3" },
        { id: "z3", label: "A collaboration tool used for live chat, virtual meetings, and file sharing", correctItemId: "i4" },
        { id: "z4", label: "Similar to traditional file storage, but in the cloud", correctItemId: "i2" }
      ],
      explanation: "Azure hosts workloads and virtual machines, SharePoint is an intranet collaboration site, Teams provides chat, meetings and file sharing, and OneDrive is cloud file storage."
    },
    {
      id: "dcm-079",
      chapter: "acces-date",
      type: "single",
      question: "A business working on contracts wants to store and possibly restore multiple versions of contract files. Which Windows feature allows backing up multiple versions of files and restoring a version from a particular date and time?",
      options: ["System Restore","File Recovery","Recycle Bin","File History"],
      correct: 3,
      explanation: "File History backs up multiple versions of files and can restore a version from a specific time. System Restore restores system files from a restore point."
    },
    {
      id: "dcm-080",
      chapter: "acces-date",
      type: "drag_drop",
      question: "Match each backup type to its description.",
      dragItems: [
        { id: "i1", text: "Full" },
        { id: "i2", text: "Differential" },
        { id: "i3", text: "Incremental" },
        { id: "i4", text: "Mirror" }
      ],
      dropZones: [
        { id: "z1", label: "A backup of all data selected on a drive, usually done weekly", correctItemId: "i1" },
        { id: "z2", label: "Only copies data created or changed since the last backup", correctItemId: "i3" },
        { id: "z3", label: "Only copies data created or changed since the initial backup", correctItemId: "i2" },
        { id: "z4", label: "An exact copy of its source that updates when its source is updated", correctItemId: "i4" }
      ],
      explanation: "Full copies everything (resets the archive bit); incremental copies changes since the last backup (resets the archive bit); differential copies changes since the last full backup (does not reset the archive bit); mirror is an exact copy of the source."
    },
    {
      id: "dcm-081",
      chapter: "acces-date",
      type: "multiple",
      question: "Which specific NTFS permissions are considered basic permissions? (Choose 2.)",
      options: ["Write attributes","Modify","Take ownership","Read"],
      correct: [1,3],
      explanation: "Basic NTFS permissions are Full Control, Modify, Read & Execute, Read and Write. Read attributes, Write attributes and Take ownership are advanced permissions."
    },
    {
      id: "dcm-082",
      chapter: "acces-date",
      type: "multiple",
      question: "When files are shared from a cloud server, which types of entities are granted permissions to those files? (Choose 2.)",
      options: ["Domains","Users","Sites","Groups"],
      correct: [1,3],
      explanation: "As on-premises servers, permissions on files are assigned to users and groups, not to sites or domains."
    },
    {
      id: "dcm-083",
      chapter: "acces-date",
      type: "single",
      question: "You need to share a folder and limit the number of users connected to it to five at a time. Which type of share should you set up?",
      options: ["Basic","Advanced","Security","Public"],
      correct: 1,
      explanation: "An advanced share lets you control the number of simultaneous users. Basic and public shares do not allow that limit, and the Security tab sets user/group permissions, not shares."
    },
    {
      id: "dcm-084",
      chapter: "acces-date",
      type: "drag_drop",
      question: "A new technician is learning the distinction between file permissions and share permissions. Identify each set of permissions.",
      dragItems: [
        { id: "i1", text: "Share" },
        { id: "i2", text: "File" }
      ],
      dropZones: [
        { id: "z1", label: "Full Control, Modify, and Read & Execute are ___ permissions.", correctItemId: "i2" },
        { id: "z2", label: "Read/Write and Owner are ___ permissions.", correctItemId: "i1" }
      ],
      explanation: "According to the exam material, Full Control, Modify and Read & Execute are file permissions, while Read/Write and Owner are share permissions."
    },
    {
      id: "dcm-085",
      chapter: "acces-date",
      type: "drag_drop",
      question: "A user is creating a backup strategy. The user wants to conserve storage space but wants to restore quickly in case of data loss. Which backup types should the user choose?",
      dragItems: [
        { id: "i1", text: "Incremental" },
        { id: "i2", text: "Differential" },
        { id: "i3", text: "Full" },
        { id: "i4", text: "Mirror" }
      ],
      dropZones: [
        { id: "z1", label: "On a weekly basis, the user should perform a ___ backup.", correctItemId: "i3" },
        { id: "z2", label: "Each night, the user should perform a ___ backup.", correctItemId: "i2" }
      ],
      explanation: "A weekly full backup plus nightly differential backups saves storage and needs only two restore steps (last full + latest differential). Incremental backups require restoring every increment after the full backup."
    },
    {
      id: "dcm-086",
      chapter: "acces-date",
      type: "single",
      question: "In a backup strategy that creates a Full Backup once a week, which type, when created on day 4, is quicker to restore?",
      options: ["Mirror","Differential","Incremental","Full"],
      correct: 1,
      explanation: "A differential restore needs only two steps: the last full backup and the latest differential. Incremental needs all increments since the full backup."
    },
    {
      id: "dcm-087",
      chapter: "acces-date",
      type: "true_false",
      question: "Backups and restores: In the context of full/incremental/differential backups, a restore always starts with the last full backup.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "A restore always starts from the last full backup, then the differential or incremental backups are applied."
    },
    {
      id: "dcm-088",
      chapter: "acces-date",
      type: "true_false",
      question: "Backups and restores: Incremental backups back up files that have changed since the last full or incremental backup.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Incremental backups copy changes since the last full or incremental backup."
    },
    {
      id: "dcm-089",
      chapter: "acces-date",
      type: "true_false",
      question: "Backups and restores: Each differential backup in between full backups gets larger in size.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "A differential backup copies everything changed since the last full backup, so each one is larger than the previous."
    },
    {
      id: "dcm-090",
      chapter: "acces-date",
      type: "single",
      question: "A new cloud administrator learns that a virtual machine can be configured to increase or decrease its RAM dynamically based on workload demand. Which cloud feature is this describing?",
      options: ["Load balancing","Elasticity","Scalability","Reserved instance"],
      correct: 1,
      explanation: "Elasticity adjusts resources such as RAM or CPU up or down for a workload. Scalability adds or removes instances, and load balancing distributes work among servers."
    },
    {
      id: "dcm-091",
      chapter: "acces-date",
      type: "single",
      question: "A real estate company is considering moving its data storage to the cloud. What is a benefit of having files stored in the cloud as opposed to on-premises servers?",
      options: ["Files in the cloud are accessed faster than files on on-premises servers.","File and folder structure is simplified.","Security is more granular on cloud files.","The ability for files to be opened on multiple types of devices."],
      correct: 3,
      explanation: "A main benefit of cloud storage is access from many device types (tablets, phones, laptops, desktops). Speed, structure and security are not necessarily better."
    },
    {
      id: "dcm-092",
      chapter: "acces-date",
      type: "single",
      question: "A law office is noticing that documents are being deleted without a review process. What can be added to documents to ensure they are kept for a specified amount of time and not deleted without a review?",
      options: ["Retention labels","Retention policy","Legal hold","Disposition review"],
      correct: 0,
      explanation: "Retention labels define the details of a retention policy: whether to retain, delete or hold a document for a defined time. A legal hold is indefinite, and a disposition review decides whether to delete."
    },
    {
      id: "dcm-093",
      chapter: "acces-date",
      type: "true_false",
      question: "Permissions and shares: Basic shares allow for custom permissions to users and groups.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Advanced shares allow custom permissions to users and groups."
    },
    {
      id: "dcm-094",
      chapter: "acces-date",
      type: "true_false",
      question: "Permissions and shares: Take Ownership is an advanced permission.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Take Ownership is an advanced NTFS permission."
    },
    {
      id: "dcm-095",
      chapter: "acces-date",
      type: "true_false",
      question: "Permissions and shares: Files in public shares on a device are available to all accounts on that device.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Public shares are available to all accounts on the device."
    },
    {
      id: "dcm-096",
      chapter: "acces-date",
      type: "multiple",
      question: "Which two permissions are combined to determine your effective permissions? (Choose 2.)",
      options: ["User Account","Sites","Group","Organizational Units"],
      correct: [0,2],
      explanation: "Effective permissions combine user account permissions and group permissions (Deny overrides Allow). Sites and OUs are part of Group Policy, not permissions."
    },
    {
      id: "dcm-097",
      chapter: "acces-date",
      type: "single",
      question: "A new technician is learning the meaning of permissions on network drives. What does the Take Ownership permission give someone that is unavailable with other permissions besides Full Control?",
      options: ["The ability to write to the resource","The ability to control attributes on a resource","The ability to modify a resource","The ability to control permissions of a resource"],
      correct: 3,
      explanation: "Take Ownership allows controlling the permissions on a file or folder. Modify, Write and attribute permissions do not."
    },
    {
      id: "dcm-098",
      chapter: "acces-date",
      type: "drag_drop",
      question: "Match each virtual machine host to the type of virtual machines the host provides.",
      dragItems: [
        { id: "i1", text: "Hyper-V" },
        { id: "i2", text: "AWS" },
        { id: "i3", text: "Azure" }
      ],
      dropZones: [
        { id: "z1", label: "Microsoft-based cloud host for virtual machines", correctItemId: "i3" },
        { id: "z2", label: "Non-Microsoft-based cloud host for virtual machines", correctItemId: "i2" },
        { id: "z3", label: "Microsoft on-premises virtual machine host", correctItemId: "i1" }
      ],
      explanation: "Azure is Microsoft's cloud, Hyper-V is Microsoft's on-premises host, and Amazon Web Services (AWS) is a non-Microsoft cloud host."
    },
    {
      id: "dcm-099",
      chapter: "acces-date",
      type: "drag_drop",
      question: "Match each network type typically found in a business with its description.",
      dragItems: [
        { id: "i1", text: "Private" },
        { id: "i2", text: "Public" },
        { id: "i3", text: "Guest" }
      ],
      dropZones: [
        { id: "z1", label: "An external-facing network that interacts with the internet", correctItemId: "i2" },
        { id: "z2", label: "A network that has its resources protected from outside access", correctItemId: "i1" },
        { id: "z3", label: "A network that is separated from other networks in an organization and typically allows internet access but keeps people away from important company resources", correctItemId: "i3" }
      ],
      explanation: "Public networks face the internet, private networks protect resources, and guest networks are separated and give internet access only."
    },
    {
      id: "dcm-100",
      chapter: "acces-date",
      type: "true_false",
      question: "Types of networks: An extranet allows customers, suppliers, and business partners to gain full access to an organization's internal resources.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "An extranet gives limited access to the organization's intranet."
    },
    {
      id: "dcm-101",
      chapter: "acces-date",
      type: "true_false",
      question: "Types of networks: An intranet is strictly internal and confidential to the organization, and not connected to the Internet directly.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "An intranet is internal and confidential to the organization."
    },
    {
      id: "dcm-102",
      chapter: "acces-date",
      type: "true_false",
      question: "Types of networks: The internet is a widely used example of a public network.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "The internet is the best-known public network."
    },
    {
      id: "dcm-103",
      chapter: "securitate-dispozitiv",
      type: "drag_drop",
      question: "Match each definition with the corresponding type of malware. Each malware type may be used once, more than once, or not at all.",
      dragItems: [
        { id: "i1", text: "Displays unwanted commercials and product promotions" },
        { id: "i2", text: "Malicious code that masquerades as a desirable application" },
        { id: "i3", text: "Harmless code added to a file" },
        { id: "i4", text: "Infects a computer when an executable file is initiated by a user" }
      ],
      dropZones: [
        { id: "z1", label: "Adware", correctItemId: "i1" },
        { id: "z2", label: "Virus", correctItemId: "i4" },
        { id: "z3", label: "Trojan Horse", correctItemId: "i2" }
      ],
      explanation: "Adware displays unwanted ads; a virus infects a computer when an executable file is run by the user; a Trojan horse masquerades as a desirable application. No type of malware is harmless, so \"Harmless code added to a file\" matches nothing."
    },
    {
      id: "dcm-104",
      chapter: "securitate-dispozitiv",
      type: "drag_drop",
      question: "Match each type of malware to its definition. Each malware type may be used once, more than once, or not at all.",
      dragItems: [
        { id: "i1", text: "Adware" },
        { id: "i2", text: "Spyware" },
        { id: "i3", text: "Worm" }
      ],
      dropZones: [
        { id: "z1", label: "Displays unwanted commercials and product promotions", correctItemId: "i1" },
        { id: "z2", label: "Gathers personal information or tracks computer activity without consent", correctItemId: "i2" },
        { id: "z3", label: "Self-replicates and exploits operating system vulnerabilities", correctItemId: "i3" }
      ],
      explanation: "Adware shows unwanted ads, spyware gathers information or tracks activity without consent, and a worm self-replicates by exploiting operating system vulnerabilities."
    },
    {
      id: "dcm-105",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "A real estate business is looking to implement a BYOD policy for personal mobile devices. Which type of system can help enforce that policy?",
      options: ["SIEM","VPN","MDM","SMB"],
      correct: 2,
      explanation: "A Mobile Device Management (MDM) system helps enforce a Bring Your Own Device (BYOD) policy. A VPN creates a secure tunnel, a SIEM provides security alerts and analysis, and SMB is the protocol used for file shares."
    },
    {
      id: "dcm-106",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "You work for a computer support company that has a contract to provide high-security services. You have been given a smart card. What is the purpose of a smart card?",
      options: ["Authentication","To encrypt data","To decrypt data","Portable storage"],
      correct: 0,
      explanation: "A smart card is typically used for authentication. It contains a small CPU and a small amount of storage, but it is not used as a storage device or to encrypt/decrypt data."
    },
    {
      id: "dcm-107",
      chapter: "securitate-dispozitiv",
      type: "multiple",
      question: "A manufacturing company is trying to improve its overall security posture. In what situations would social engineering training be warranted? (Choose 2.)",
      options: ["Employees forgetting their ID badges","Employees are non-participants in online meetings","Employees are divulging information to people acting as help desk employees","Employees are clicking on emails asking for personal information"],
      correct: [2,3],
      explanation: "Giving out information to someone posing as help desk staff and clicking on phishing emails are social engineering risks. Forgetting badges or skipping meetings are not."
    },
    {
      id: "dcm-108",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "Group Policy precedence: For Group Policy, OU settings override domain settings.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "The priority order is OU, Domain, Site, Local, so OU settings override domain settings."
    },
    {
      id: "dcm-109",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "Group Policy precedence: Group Policy does not override a local system policy.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "In a domain, Group Policy overrides local system policy settings."
    },
    {
      id: "dcm-110",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "Group Policy precedence: Group Policy provides central management of user and computer settings.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Group Policy centrally manages user and computer settings."
    },
    {
      id: "dcm-111",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "UAC: The goal of UAC is to elevate a guest user to a standard user level.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "UAC elevates a standard user to administrator level for the privileges needed to install an app or change Windows settings."
    },
    {
      id: "dcm-112",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "UAC: UAC is used only when attempts are made to change Windows settings.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "UAC is used both for installing apps and for changing Windows settings."
    },
    {
      id: "dcm-113",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "UAC: The default UAC setting is to notify a user when apps try to make changes to the computer.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "The default UAC setting notifies the user when apps try to make changes to the computer."
    },
    {
      id: "dcm-114",
      chapter: "securitate-dispozitiv",
      type: "drag_drop",
      question: "For each situation, indicate which type of wipe is taking place on a device.",
      dragItems: [
        { id: "i1", text: "Full wipe" },
        { id: "i2", text: "Partial wipe" },
        { id: "i3", text: "Business wipe" },
        { id: "i4", text: "Account Only Remote wipe" }
      ],
      dropZones: [
        { id: "z1", label: "A phone has its business data deleted but the personal data is still on the phone.", correctItemId: "i4" },
        { id: "z2", label: "A mobile device is reset to its factory settings.", correctItemId: "i1" }
      ],
      explanation: "Deleting only business data and leaving personal data is an Account Only Remote wipe; a reset to factory settings is a full wipe."
    },
    {
      id: "dcm-115",
      chapter: "securitate-dispozitiv",
      type: "multiple",
      question: "A network administrator wants to track mobile device movement so a device can be disabled if it is outside travel boundaries set by the company. What features need to be turned on so this tracking can take place? (Choose 2.)",
      options: ["Cellular (on either platform)","Location (on Android)","Wi-Fi (on either platform)","Location Services (on iOS)"],
      correct: [1,3],
      explanation: "Location must be turned on for Android and Location Services for iOS. Turning on Wi-Fi or Cellular does not enable location tracking."
    },
    {
      id: "dcm-116",
      chapter: "securitate-dispozitiv",
      type: "multiple",
      question: "Two employees have older Android devices enrolled with an MDM. When they try to connect, they are told the device is no longer compatible with the MDM. What has been done on the MDM to cause this message? (Choose 2.)",
      options: ["A policy has been defined","The devices have been determined to be non-compliant","The device has gone through a remote wipe","The device has gone through a full wipe"],
      correct: [0,1],
      explanation: "A policy changed the operating system requirements for Android devices, so the older devices were deemed non-compliant. If a wipe had taken place, data would have been deleted."
    },
    {
      id: "dcm-117",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Which is an example of multi-factor authentication?",
      options: ["Sending a text message to subscribe to special discount notifications","Paying a bill over the telephone by providing your address and phone number","Withdrawing money from an ATM using your card and PIN","Logging into a network with a username and password"],
      correct: 2,
      explanation: "An ATM card (possession factor) and a PIN (knowledge factor) are two different factors. A username and password are both knowledge factors, and an address and phone number are also knowledge factors."
    },
    {
      id: "dcm-118",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Which of the following is considered a strong password for BYOD and corporate-managed mobile devices?",
      options: ["A four-digit PIN","A one-time token","At least eight characters with numbers, lowercase letters, uppercase letters, and symbols","A six-character word"],
      correct: 2,
      explanation: "A strong password has at least eight characters and combines numbers, lowercase letters, uppercase letters and symbols. A four-digit PIN is not secure and a one-time token is not a password."
    },
    {
      id: "dcm-119",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Which policy document outlines what employees are allowed to view on the Internet from company devices?",
      options: ["BCP","MOU","DRP","AUP"],
      correct: 3,
      explanation: "An Acceptable Use Policy (AUP) defines what employees are allowed to do with company devices. A BCP keeps the business running during a disaster, a DRP restores it afterwards, and an MOU is an agreement between parties."
    },
    {
      id: "dcm-120",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Which permission elevation takes place during the use of UAC?",
      options: ["Standard permissions to guest accounts","Standard permissions to administrator accounts","Administrative permissions to standard accounts","Backup operator permissions to standard accounts"],
      correct: 2,
      explanation: "UAC grants temporary administrative permissions to standard user accounts to change Windows settings or install apps."
    },
    {
      id: "dcm-121",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Which Windows authentication technology can grant temporary administrative permissions to standard user accounts for the purpose of changing Windows settings or installing apps?",
      options: ["User Account Control (UAC)","Azure Active Directory (AD)","Multi-factor Authentication (MFA)","Microsoft Authenticator"],
      correct: 0,
      explanation: "User Account Control (UAC) can grant temporary administrative permissions to standard user accounts."
    },
    {
      id: "dcm-122",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Which mitigation method helps to mitigate possible physical attacks on a data server within a business' premises?",
      options: ["Adding a firewall in front of the server","Locking a server in a room that requires authentication to enter","Adding a honeypot to the server","Moving the server offsite"],
      correct: 1,
      explanation: "A locked server room that requires authentication protects against physical attacks. A firewall filters packets, a honeypot lures attackers, and moving the server offsite does not necessarily protect it."
    },
    {
      id: "dcm-123",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "For a mobile device to interact with an MDM, what needs to happen with the device?",
      options: ["The device owner must agree to the MDM policy","The device must enroll in the MDM","The MDM needs to approve a device request","The device needs the same operating system as that of the MDM"],
      correct: 1,
      explanation: "A device must be enrolled in the Mobile Device Management (MDM) tool before it can interact with it."
    },
    {
      id: "dcm-124",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "For a mobile device to enroll in an MDM server for management purposes, what needs to be installed on that mobile device?",
      options: ["Antivirus app","Microsoft Intune","Tracking app","Agent"],
      correct: 3,
      explanation: "An agent (usually an app, sometimes a certificate) lets the device enroll with and communicate with the MDM server. Intune is itself an MDM server."
    },
    {
      id: "dcm-125",
      chapter: "securitate-dispozitiv",
      type: "drag_drop",
      question: "For each malware attack description, indicate the attack being described.",
      dragItems: [
        { id: "i1", text: "Spyware" },
        { id: "i2", text: "Ransomware" },
        { id: "i3", text: "On-path attack" },
        { id: "i4", text: "Phishing" },
        { id: "i5", text: "Keylogging" },
        { id: "i6", text: "Adware" }
      ],
      dropZones: [
        { id: "z1", label: "Data is stolen from a legal firm and encrypted. Money is then demanded for the firm to get back its data, decrypted.", correctItemId: "i2" },
        { id: "z2", label: "An email from what appears to be a bank tells a person an account problem needs to be solved and provides a link to enter username and password on an illegitimate site.", correctItemId: "i4" },
        { id: "z3", label: "Information and activity are stolen and then used to launch a replay attack at a later date.", correctItemId: "i5" }
      ],
      explanation: "Ransomware encrypts data and demands payment; phishing solicits private information through fake messages; keyloggers record keystrokes, and the stolen information can later be used in a replay attack."
    },
    {
      id: "dcm-126",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "You provide volunteer computer support for a non-profit organization. They received ten Windows computers whose antivirus software expires at the end of the month. There is no budget to renew it. What should you recommend as a no-cost solution to protect the computers from malware?",
      options: ["Don't use the computers until they can get funds to renew the antivirus software licenses","Uninstall the expiring antivirus software and enable Windows Defender","Recommend that they not connect to the Internet","Download and install a 30-day trial of a good antivirus software"],
      correct: 1,
      explanation: "Windows Security (Defender) is built into Windows and free. It is disabled while a third-party antivirus is installed, and normally re-enables when that antivirus is uninstalled."
    },
    {
      id: "dcm-127",
      chapter: "securitate-dispozitiv",
      type: "multiple",
      question: "You are training a new technician to analyze antimalware scan results. What are clues that the network may be under a malware attack? (Choose 2.)",
      options: ["An increase in video packet transmissions occurs during the analysis period","A file is replicated rapidly","All network activity stops during the analysis period","A flood of ping requests turns up on the activity report"],
      correct: [1,3],
      explanation: "Rapid file replication and a flood of ping requests can signify malware. More video packets could be a video conference, and a stop in activity usually points to a physical device issue."
    },
    {
      id: "dcm-128",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Which type of document is an agreement between two parties to outline terms and goals for that agreement?",
      options: ["MOA","MOU","AUP","SLA"],
      correct: 1,
      explanation: "A Memorandum of Understanding (MOU) outlines terms and goals and is usually not legally binding. An MOA is more detailed, an AUP defines acceptable use, and an SLA defines uptime expectations."
    },
    {
      id: "dcm-129",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "Which Microsoft tool is used to manage mobile devices on a corporate network?",
      options: ["Security Center","Compliance Center","Microsoft Intune","Azure Resource Manager"],
      correct: 2,
      explanation: "Microsoft Intune manages mobile devices. Security Center gives recommendations, Compliance Center covers regulations and standards, and Azure Resource Manager deploys resources."
    },
    {
      id: "dcm-130",
      chapter: "securitate-dispozitiv",
      type: "drag_drop",
      question: "Match each biometric method to its primary disadvantage.",
      dragItems: [
        { id: "i1", text: "Voice Recognition" },
        { id: "i2", text: "Iris (Retinal) Scanning" },
        { id: "i3", text: "Fingerprint Scanning" },
        { id: "i4", text: "Signature Verification" },
        { id: "i5", text: "Facial Recognition" }
      ],
      dropZones: [
        { id: "z1", label: "Can be replicated; also cuts or swelling can affect accuracy", correctItemId: "i3" },
        { id: "z2", label: "Newer technology has poor accuracy and it's expensive", correctItemId: "i2" },
        { id: "z3", label: "Lighting or expression changes can affect detection", correctItemId: "i5" },
        { id: "z4", label: "Respiratory illness or background noise can affect accuracy", correctItemId: "i1" },
        { id: "z5", label: "Low-level security and user inconsistencies affect accuracy", correctItemId: "i4" }
      ],
      explanation: "Biometrics is the \"what you are\" form of authentication; each method has a typical weakness, as listed."
    },
    {
      id: "dcm-131",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "User authentication: A common form of two-factor authentication is to require a password and a code sent as a text message to a registered smartphone.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Two-factor authentication needs a password plus another factor, such as a code sent to a smartphone."
    },
    {
      id: "dcm-132",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "User authentication: Smartcards are a form of biometric authentication.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "A smart card is a physical key (possession factor), not a biometric."
    },
    {
      id: "dcm-133",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "User authentication: A strong password has at least six characters.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "A strong password has at least eight characters and at least three of the four character types."
    },
    {
      id: "dcm-134",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "Remote wipes: Remote wipes can wipe out all the data on a device.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "A full wipe deletes all data on the device."
    },
    {
      id: "dcm-135",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "Remote wipes: Remote wipes can be set to only remove business data on a device.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "A remote wipe can delete only the business data."
    },
    {
      id: "dcm-136",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "Remote wipes: Remote wipes are always triggered manually.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Devices can be wiped automatically after a set number of incorrect sign-in attempts."
    },
    {
      id: "dcm-137",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "An administrator wants to set up specific UAC settings, such as the behavior of the elevation prompt and requiring that elevation only applies to signed and validated executables. Where are these settings configured?",
      options: ["Settings","Control Panel","Windows Security","Group Policy"],
      correct: 3,
      explanation: "These UAC settings are configured in Group Policy."
    },
    {
      id: "dcm-138",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "gpresult and gpupdate: gpresult /V will display detailed group policy information.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "/V (verbose) displays detailed group policy information."
    },
    {
      id: "dcm-139",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "gpresult and gpupdate: gpresult /R will display group policy settings on a remote computer.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "gpresult /R shows settings on the local computer; a remote computer needs /S computername."
    },
    {
      id: "dcm-140",
      chapter: "securitate-dispozitiv",
      type: "true_false",
      question: "gpresult and gpupdate: gpupdate /force refreshes group policy settings on a local computer immediately.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "gpupdate /force refreshes local and Active Directory-based policies immediately."
    },
    {
      id: "dcm-141",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "In what situation would one want to disable Windows Defender Firewall on a device?",
      options: ["To run an antimalware scan","The firewall is blocking needed data from an app","To install an app","If another firewall is installed on the same device"],
      correct: 3,
      explanation: "Windows Defender Firewall should only be disabled if another firewall is used on the device. If it blocks an app, open the app's port instead."
    },
    {
      id: "dcm-142",
      chapter: "securitate-dispozitiv",
      type: "single",
      question: "When a user logs onto a network and multiple group policies are applied, which policy takes precedence by being applied last?",
      options: ["Local Group Policy","Domain Group Policy","Site Group Policy","Organizational Unit (OU) Group Policy"],
      correct: 3,
      explanation: "Policies apply in order Local, Site, Domain, OU, so the OU policy is applied last and takes precedence."
    },
    {
      id: "dcm-143",
      chapter: "management-depanare",
      type: "single",
      question: "A new support person is learning about tools used to troubleshoot Windows. Which tool is used to identify problems with hardware devices inside or attached to devices?",
      options: ["Device Manager","Program Compatibility Troubleshooter","Performance Monitor","Task Manager"],
      correct: 0,
      explanation: "Device Manager identifies problems with hardware devices. Performance Monitor measures performance, Task Manager shows running processes, and the Compatibility Troubleshooter fixes older apps."
    },
    {
      id: "dcm-144",
      chapter: "management-depanare",
      type: "single",
      question: "A laptop is not recognizing an external hard drive that has been plugged into it. Which Windows tool should an administrator check first to see if the disk is being recognized?",
      options: ["Device Manager","Services","Computer Management","Disk Management"],
      correct: 3,
      explanation: "Disk Management shows whether the drive is being recognized. Device Manager is for hardware recognition in general."
    },
    {
      id: "dcm-145",
      chapter: "management-depanare",
      type: "single",
      question: "A Bluetooth keyboard is having intermittent connectivity issues. The keyboard is five feet away; the further it moves away, the more issues it has. What should the user check first?",
      options: ["Change the battery on the keyboard","Disable and enable Bluetooth on the host device","Reconnect the device via Bluetooth","Reinstall the keyboard drivers"],
      correct: 0,
      explanation: "A weak battery makes Bluetooth connectivity more sensitive to distance, so replace the battery first."
    },
    {
      id: "dcm-146",
      chapter: "management-depanare",
      type: "true_false",
      question: "Disk Management: The Disk Management tool can change a drive letter.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Disk Management can change a drive letter or path."
    },
    {
      id: "dcm-147",
      chapter: "management-depanare",
      type: "true_false",
      question: "Disk Management: The Disk Management tool can shrink a basic volume.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Disk Management can create, delete, extend and shrink volumes."
    },
    {
      id: "dcm-148",
      chapter: "management-depanare",
      type: "true_false",
      question: "Disk Management: The Disk Management tool can create a restore point.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Restore points are created with System Restore, not Disk Management."
    },
    {
      id: "dcm-149",
      chapter: "management-depanare",
      type: "multiple",
      question: "A person suspects bad sectors on a magnetic hard disk. What are ways in which that disk can be scanned for errors? (Choose 2.)",
      options: ["Run chkdsk in a command prompt","Run Optimize on the Tools tab under Properties of a hard drive","Run Error Checking on the Tools tab under Properties of a hard drive","Run SFC in a command prompt"],
      correct: [0,2],
      explanation: "chkdsk and Error Checking scan a disk for errors. Optimize defragments, and SFC checks system files."
    },
    {
      id: "dcm-150",
      chapter: "management-depanare",
      type: "multiple",
      question: "A technician needs to reconfigure drivers on an external scanner. What should the technician do? (Choose 2.)",
      options: ["Download the latest drivers from Device Manager","Uninstall and reinstall the scanner","Use Device Manager to update the drivers on the device","Download the latest drivers from the manufacturer's website"],
      correct: [1,3],
      explanation: "Download the latest drivers from the manufacturer's website, then uninstall and reinstall the scanner. Device Manager is unlikely to have the most recent drivers."
    },
    {
      id: "dcm-151",
      chapter: "management-depanare",
      type: "single",
      question: "An employee travels between home and office with a laptop. The office uses a high-speed Ethernet network, not wireless. Today, the employee is working in the office and cannot see the office network login screen. Employees in neighboring offices report no problems. Which would be the first step to troubleshoot this issue?",
      options: ["Change the employee's password","Check that DHCP is enabled","Check that the wireless card has an IP address","Check that the Ethernet cable is connected properly"],
      correct: 3,
      explanation: "Check the physical connection first. The wireless card is not involved, and a password does not affect network connectivity."
    },
    {
      id: "dcm-152",
      chapter: "management-depanare",
      type: "true_false",
      question: "Headsets and microphones: On a system with multiple microphones, different apps can default to different microphones.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Each app can use a different microphone."
    },
    {
      id: "dcm-153",
      chapter: "management-depanare",
      type: "true_false",
      question: "Headsets and microphones: All apps on a system will default to using the same output for audio.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Different apps can use different outputs, for example speakers for one and a headset for another."
    },
    {
      id: "dcm-154",
      chapter: "management-depanare",
      type: "true_false",
      question: "Headsets and microphones: Headsets and microphones can be partially functional without having their respective drivers installed, but functionality will be limited.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Devices can work partially without their specific drivers, with limited functionality."
    },
    {
      id: "dcm-155",
      chapter: "management-depanare",
      type: "true_false",
      question: "Operating system troubleshooting: Resetting an operating system preserves user files.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Resetting keeps user files on the hard drive (when that option is chosen)."
    },
    {
      id: "dcm-156",
      chapter: "management-depanare",
      type: "true_false",
      question: "Operating system troubleshooting: Safe Mode can be loaded with network connectivity.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Safe Mode with Networking is available."
    },
    {
      id: "dcm-157",
      chapter: "management-depanare",
      type: "true_false",
      question: "Operating system troubleshooting: To roll back an operating system to a state before an app caused instability, one should boot into Safe Mode.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "To roll back to a state before the instability, boot to the Last Known Good Configuration."
    },
    {
      id: "dcm-158",
      chapter: "management-depanare",
      type: "single",
      question: "A monitor is not displaying anything on a desktop device. What should a technician do first to troubleshoot the situation?",
      options: ["Restart the computer.","Plug in a different monitor.","Connect to the computer remotely.","Make sure the monitor is on and connected properly to the computer."],
      correct: 3,
      explanation: "Check that the monitor is on and properly connected before trying other steps."
    },
    {
      id: "dcm-159",
      chapter: "management-depanare",
      type: "drag_drop",
      question: "You are a new technician trying to find out why a scanner is having intermittent issues reading documents and transmitting results. Match the area to go to with its role in finding a solution.",
      dragItems: [
        { id: "i1", text: "Device Manager" },
        { id: "i2", text: "Manufacturer's website" },
        { id: "i3", text: "Web search" }
      ],
      dropZones: [
        { id: "z1", label: "A new driver is needed", correctItemId: "i2" },
        { id: "z2", label: "Check the connection of the scanner to a device", correctItemId: "i1" },
        { id: "z3", label: "More information on the problem is needed", correctItemId: "i3" }
      ],
      explanation: "New drivers come from the manufacturer's website, a web search provides more information about the problem, and Device Manager confirms the device can see the scanner."
    },
    {
      id: "dcm-160",
      chapter: "management-depanare",
      type: "single",
      question: "What is the first step for troubleshooting issues on a computing device?",
      options: ["Gathering information to describe the issue(s)","Knowing where to escalate the issue","Identifying troubleshooting tools","Research how to remedy issues"],
      correct: 0,
      explanation: "An issue must be defined before it can be remedied or escalated, so gather information first."
    },
    {
      id: "dcm-161",
      chapter: "management-depanare",
      type: "true_false",
      question: "Ethernet file transfers keep slowing down or being interrupted. Could this hardware be a source of the problem? The Ethernet cable could be faulty and a new cable should be tried.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "A faulty cable can cause slow or interrupted transfers."
    },
    {
      id: "dcm-162",
      chapter: "management-depanare",
      type: "true_false",
      question: "Ethernet file transfers keep slowing down or being interrupted. Could this hardware be a source of the problem? The port on the person's device or any port used in the connection to the network switch could be faulty.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Faulty ports can cause intermittent connectivity."
    },
    {
      id: "dcm-163",
      chapter: "management-depanare",
      type: "true_false",
      question: "Ethernet file transfers keep slowing down or being interrupted. Could this hardware be a source of the problem? The network switch is suffering intermittent power outages.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Per the exam material, switch power outages would affect many or all devices, so this is not considered a likely source for a single employee."
    },
    {
      id: "dcm-164",
      chapter: "management-depanare",
      type: "true_false",
      question: "Ethernet file transfers keep slowing down or being interrupted. Could this hardware be a source of the problem? The network switch needs a driver update.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Network switches do not need driver updates."
    },
    {
      id: "dcm-165",
      chapter: "management-depanare",
      type: "true_false",
      question: "A portable camera uses a USB-C cable but the laptop cannot see it and it does not show in Device Manager. What should be done next? Update the driver for the camera.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "A driver update will not help if the device is not detected at all."
    },
    {
      id: "dcm-166",
      chapter: "management-depanare",
      type: "true_false",
      question: "A portable camera uses a USB-C cable but the laptop cannot see it and it does not show in Device Manager. What should be done next? Try a different USB-C cable.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "The most likely problem is the cable, so try a new one."
    },
    {
      id: "dcm-167",
      chapter: "management-depanare",
      type: "true_false",
      question: "A portable camera uses a USB-C cable but the laptop cannot see it and it does not show in Device Manager. What should be done next? Reboot the device.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Rebooting will often result in the same problem."
    },
    {
      id: "dcm-168",
      chapter: "management-depanare",
      type: "true_false",
      question: "A portable camera uses a USB-C cable but the laptop cannot see it and it does not show in Device Manager. What should be done next? Get a USB-C to USB-A adapter.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "An adapter will not fix a faulty cable."
    },
    {
      id: "dcm-169",
      chapter: "management-depanare",
      type: "single",
      question: "An employee is unable to make a connection to a wireless network within an office. Others in the employee's vicinity can connect to the same network. What should a technician do first to troubleshoot the issue?",
      options: ["Make sure the authentication information for the wireless network is correct","Forget any existing wireless networks on the device","Run ipconfig /reset on the device","Make sure the wireless card is enabled"],
      correct: 3,
      explanation: "Check first that the wireless card is enabled; then verify the authentication information."
    },
    {
      id: "dcm-170",
      chapter: "management-depanare",
      type: "single",
      question: "A help desk operator has spent an hour trying to diagnose why an operations manager cannot access Dynamics 365 to perform day-to-day tasks. What should the help desk operator do next?",
      options: ["Escalate the issue","Call the app vendor to get help on troubleshooting the issue","Abandon the issue","Continue to try to troubleshoot the issue"],
      correct: 0,
      explanation: "When a critical issue cannot be solved, it should be escalated. Calling the vendor is only appropriate after escalation."
    },
    {
      id: "dcm-171",
      chapter: "management-depanare",
      type: "true_false",
      question: "Device Manager: Device Manager can be used to update drivers on hardware.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Device Manager updates and rolls back drivers."
    },
    {
      id: "dcm-172",
      chapter: "management-depanare",
      type: "true_false",
      question: "Device Manager: Device Manager can be used to update features on hardware.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Device Manager updates drivers, not hardware features."
    },
    {
      id: "dcm-173",
      chapter: "management-depanare",
      type: "true_false",
      question: "Device Manager: Device Manager shows the devices that are disabled on a system.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Disabled devices are shown in Device Manager."
    },
    {
      id: "dcm-174",
      chapter: "management-depanare",
      type: "drag_drop",
      question: "Match each troubleshooting tool with the issue it will solve.",
      dragItems: [
        { id: "i1", text: "Safe Mode" },
        { id: "i2", text: "Advanced Startup" },
        { id: "i3", text: "Rollback" }
      ],
      dropZones: [
        { id: "z1", label: "Issue caused by an update to the operating system", correctItemId: "i3" },
        { id: "z2", label: "Need to upgrade the BIOS", correctItemId: "i2" },
        { id: "z3", label: "Erratic behavior after installing a new driver", correctItemId: "i1" }
      ],
      explanation: "Rollback reverts an OS update; Advanced Startup gives access to the BIOS and boot options; Safe Mode loads only essential drivers so a problem driver can be removed."
    },
    {
      id: "dcm-175",
      chapter: "management-depanare",
      type: "true_false",
      question: "Compatibility: The Compatibility Troubleshooter can help determine compatibility issues within an app.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "The Compatibility Troubleshooter detects and fixes compatibility problems."
    },
    {
      id: "dcm-176",
      chapter: "management-depanare",
      type: "true_false",
      question: "Compatibility: Some apps can be run in Compatibility Mode to be compatible with a newer operating system.",
      options: ["Adevărat","Fals"],
      correct: 0,
      explanation: "Compatibility Mode lets older apps run on newer Windows."
    },
    {
      id: "dcm-177",
      chapter: "management-depanare",
      type: "true_false",
      question: "Compatibility: Apps cannot be run at a lower screen resolution than intended.",
      options: ["Adevărat","Fals"],
      correct: 1,
      explanation: "Apps can be run at a lower screen resolution than intended."
    },
    {
      id: "dcm-178",
      chapter: "management-depanare",
      type: "single",
      question: "What is the first thing to check on a laptop when troubleshooting an external power issue?",
      options: ["Device Manager","Power cables","BIOS","Battery"],
      correct: 1,
      explanation: "Check that all power cables are plugged in securely and the outlet works. The battery is an internal power source, and the BIOS does not control external power."
    },
    {
      id: "dcm-179",
      chapter: "management-depanare",
      type: "single",
      question: "A presenter is trying to use a wireless mouse from one end of a conference room to control a device on the other end. The mouse is having intermittent connectivity issues with the device. What is the most likely cause?",
      options: ["Battery weakness","Wrong driver on mouse","The mouse is turned off","Distance from the mouse to the device"],
      correct: 3,
      explanation: "Distance is the likely factor: infrared mice reach about six feet and Bluetooth about 30 feet. A dead battery or a mouse that is off would cause no connection, not an intermittent one."
    }
 
  ]
};
