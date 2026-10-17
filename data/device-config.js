/* ITS PREP — integrated question bank; original IDs preserved. */
window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.deviceConfig = {
  "id": "deviceConfig",
  "name": "Device Configuration and Management",
  "shortLabel": "DCM",
  "accent": "#7C5CFF",
  "description": "Instalarea, configurarea și depanarea dispozitivelor Windows: aplicații, periferice, date și securitate.",
  "CHAPTERS": [
    {
      "id": "instalare-config",
      "name": "Instalarea și configurarea Windows"
    },
    {
      "id": "aplicatii-periferice",
      "name": "Aplicații, funcții și periferice"
    },
    {
      "id": "acces-date",
      "name": "Accesul și gestionarea datelor"
    },
    {
      "id": "securitate-dispozitiv",
      "name": "Securitatea dispozitivelor"
    },
    {
      "id": "management-depanare",
      "name": "Gestionare și depanare Windows"
    }
  ],
  "QUESTIONS": [
    {
      "id": "dcm-001",
      "chapter": "instalare-config",
      "type": "single",
      "question": "Care instrument Windows este folosit pentru a crea o partiție nouă pe un disc?",
      "options": [
        "Task Manager",
        "Disk Management",
        "Device Manager",
        "Event Viewer"
      ],
      "correct": 1,
      "explanation": "Disk Management permite crearea, redimensionarea și formatarea partițiilor de disc."
    },
    {
      "id": "dcm-002",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "O adresă IP de tip APIPA (169.254.x.x) indică faptul că dispozitivul a primit cu succes o adresă de la un server DHCP.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "O adresă APIPA apare atunci când dispozitivul NU a reușit să contacteze un server DHCP și își auto-atribuie o adresă temporară."
    },
    {
      "id": "dcm-003",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Where are UWP apps from Microsoft Store installed by default on the Windows system drive?",
      "options": [
        "C:\\Program Files",
        "C:\\Windows\\System32",
        "C:\\Program Files\\WindowsApps",
        "C:\\Users\\Public"
      ],
      "correct": 2,
      "explanation": "UWP packages use the protected WindowsApps folder, normally C:\\Program Files\\WindowsApps. Other Store-delivered desktop applications may use other locations."
    },
    {
      "id": "dcm-004",
      "chapter": "aplicatii-periferice",
      "type": "multiple",
      "question": "Care dintre următoarele sunt periferice de intrare (input)? Alege 2 răspunsuri.",
      "options": [
        "Tastatură",
        "Monitor",
        "Microfon",
        "Boxe"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Tastatura și microfonul trimit date către calculator (input); monitorul și boxele afișează/redau date (output)."
    },
    {
      "id": "dcm-005",
      "chapter": "acces-date",
      "type": "single",
      "question": "Ce tehnologie Windows permite criptarea unui întreg volum de disc?",
      "options": [
        "EFS (Encrypting File System)",
        "BitLocker",
        "Windows Defender",
        "NTFS Permissions"
      ],
      "correct": 1,
      "explanation": "BitLocker criptează întregul volum, în timp ce EFS criptează fișiere sau foldere individuale."
    },
    {
      "id": "dcm-006",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Asociază fiecare tip de backup cu descrierea corectă.",
      "dragItems": [
        {
          "id": "a",
          "text": "Backup complet (full)"
        },
        {
          "id": "b",
          "text": "Backup incremental"
        },
        {
          "id": "c",
          "text": "Backup diferențial"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Copiază toate datele, indiferent de backup-urile anterioare",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Copiază doar datele modificate de la ultimul backup de orice tip",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Copiază datele modificate de la ultimul backup complet",
          "correctItemId": "c"
        }
      ],
      "explanation": "Full copiază tot; incremental copiază doar schimbările față de ultimul backup (complet sau incremental); diferențial copiază schimbările față de ultimul backup complet."
    },
    {
      "id": "dcm-007",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "User Account Control (UAC) solicită confirmarea utilizatorului înainte ca o aplicație să facă modificări ce necesită drepturi de administrator.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "UAC este un mecanism de securitate care previne modificările neautorizate cerând confirmare explicită pentru acțiuni administrative."
    },
    {
      "id": "dcm-008",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Care sistem de fișiere Windows suportă permisiuni de securitate la nivel de fișier/folder (NTFS permissions)?",
      "options": [
        "FAT32",
        "exFAT",
        "NTFS",
        "CDFS"
      ],
      "correct": 2,
      "explanation": "NTFS suportă liste de control al accesului (ACL) și permisiuni detaliate, spre deosebire de FAT32 sau exFAT."
    },
    {
      "id": "dcm-009",
      "chapter": "management-depanare",
      "type": "single",
      "question": "Ce instrument Windows arată jurnalul evenimentelor de sistem, aplicație și securitate pentru depanare?",
      "options": [
        "Event Viewer",
        "Control Panel",
        "File Explorer",
        "Task Scheduler"
      ],
      "correct": 0,
      "explanation": "Event Viewer înregistrează evenimente de sistem, aplicații și securitate, utile pentru diagnosticarea problemelor."
    },
    {
      "id": "dcm-010",
      "chapter": "management-depanare",
      "type": "multiple",
      "question": "Care dintre următoarele sunt pași corecți pentru a depana o conexiune de rețea care nu funcționează? Alege 2 răspunsuri.",
      "options": [
        "Verificarea cablului fizic sau a conexiunii Wi-Fi",
        "Ștergerea contului de utilizator",
        "Rularea comenzii ipconfig pentru a verifica adresa IP",
        "Reinstalarea sistemului de operare"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Verificarea conexiunii fizice și a configurației IP (ipconfig) sunt primii pași standard de depanare a rețelei."
    },
    {
      "id": "dcm-011",
      "chapter": "instalare-config",
      "type": "multiple",
      "question": "Which types of updates are found in the Optional Updates area on a Windows device? (Choose 2.)",
      "options": [
        "Mandatory monthly security updates",
        "Optional non-security Windows preview updates",
        "Microsoft Store app updates",
        "Optional device driver updates"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "Optional Updates may offer non-security preview updates and optional drivers. Firmware can also be delivered through a driver package, so it should not be a competing distractor here."
    },
    {
      "id": "dcm-012",
      "chapter": "instalare-config",
      "type": "single",
      "question": "Which service hosts user accounts for Microsoft cloud offerings?",
      "options": [
        "Microsoft Entra ID (formerly Azure Active Directory)",
        "Azure IAM",
        "Active Directory Domain Services (AD DS)",
        "Authentication Services"
      ],
      "correct": 0,
      "explanation": "User accounts for Microsoft's cloud offerings are stored in an Azure Active Directory (Azure AD) tenant, which can be synchronized with on-premises AD DS using Azure AD Connect. AD DS is on-premises, and IAM and authentication services do not host accounts."
    },
    {
      "id": "dcm-013",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Installing Windows: Microsoft Windows supports multiple languages, but may require you to download a language pack.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "If a preferred language does not appear in the display language list, its language pack must be installed first."
    },
    {
      "id": "dcm-014",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Installing Windows: The installation process prompts you to set the current time zone.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Setup asks for the time zone; it can be changed later under Time & language."
    },
    {
      "id": "dcm-015",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Installing Windows: An Upgrade installation is the same as a Custom installation.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "An upgrade keeps apps, files and settings and does not format the drive; a Custom installation performs a clean install and deletes everything on the installation drive."
    },
    {
      "id": "dcm-016",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Windows installations: An installation can be done through a network share.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Windows can be installed from a network share."
    },
    {
      "id": "dcm-017",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Every Windows installation always uses the Pacific time zone, regardless of the installation image and setup choices.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "The time zone depends on the image, configuration and user choices. Pacific time is not a universal requirement."
    },
    {
      "id": "dcm-018",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Windows 10 can be installed and configured with a local account instead of a Microsoft account.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Windows 10 supports local accounts. Setup requirements differ between editions and Windows versions."
    },
    {
      "id": "dcm-019",
      "chapter": "instalare-config",
      "type": "drag_drop",
      "question": "Match each Windows installation feature with its description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Time Zone"
        },
        {
          "id": "i2",
          "text": "Custom Installation"
        },
        {
          "id": "i3",
          "text": "Upgrade Installation"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Upgrades Windows while retaining compatible apps, files and settings.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Installs a fresh copy of Windows on a selected partition; formatting is an optional setup action.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Determines the local time offset used by the computer.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "An upgrade retains apps, files and settings; a Custom installation formats the drive (back up first); the time zone is the geographic location of the computer."
    },
    {
      "id": "dcm-020",
      "chapter": "instalare-config",
      "type": "single",
      "question": "You have been asked to explain the difference between a local account and a Microsoft account. Which of these options best describes a Microsoft account?",
      "options": [
        "A Microsoft account works without the Internet.",
        "A Microsoft account is a subscription-based account.",
        "A Microsoft account is a cloud account.",
        "A Microsoft account requires a VPN."
      ],
      "correct": 2,
      "explanation": "A Microsoft account is a cloud account usable from any Internet-connected device."
    },
    {
      "id": "dcm-021",
      "chapter": "instalare-config",
      "type": "single",
      "question": "You have been asked to explain the difference between a local account and a Microsoft account. Which of these options best describes a local account?",
      "options": [
        "A local account is a subscription-based account.",
        "A local account works without the Internet.",
        "A local account requires a VPN.",
        "A local account is a cloud account."
      ],
      "correct": 1,
      "explanation": "A local account exists only on the computer that created it, so it works without the Internet but can only be used to sign in to that computer."
    },
    {
      "id": "dcm-022",
      "chapter": "instalare-config",
      "type": "multiple",
      "question": "A new device administrator notices that many accounts on user devices are local accounts. Which other statements are true regarding local accounts? (Choose 2.)",
      "options": [
        "A local account automatically grants access to every share on another computer",
        "An Internet connection is not required to create a local account",
        "Every Microsoft Store app can be installed without a Microsoft account",
        "A local account can be configured as a standard user or an administrator"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "Local accounts exist on a specific computer and can be standard or administrator accounts. Access to remote shares requires authentication and permissions on the remote device."
    },
    {
      "id": "dcm-023",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Desktop settings: Windows will not allow users to customize icons that appear in the Start menu.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Users can customize which folders appear in the Start menu under Settings > Personalization > Start."
    },
    {
      "id": "dcm-024",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Desktop settings: Windows allows users to take panoramic photos using any hardware.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Panoramic photos are available on some hardware, not all."
    },
    {
      "id": "dcm-025",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Desktop settings: The minus symbol on a window minimizes the window to the taskbar.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "The minus button minimizes a window to the taskbar."
    },
    {
      "id": "dcm-026",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Desktop settings: Multiple monitors can be configured on a Windows device.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Additional monitors are set up under Display Settings."
    },
    {
      "id": "dcm-027",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Desktop settings: The time zone setting cannot be changed after Windows is installed.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "The time zone can be changed under Time & language."
    },
    {
      "id": "dcm-028",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Desktop settings: Windows allows a personal photo to be used as a desktop image.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "A personal photo can be set as the desktop background."
    },
    {
      "id": "dcm-029",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Windows 10 interface: Windows allows a user to add a custom toolbar to the taskbar.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Right-click an empty area of the taskbar, point to Toolbars, and select New Toolbar."
    },
    {
      "id": "dcm-030",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Windows interface: The x button on a window closes the window.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "The x button closes the window."
    },
    {
      "id": "dcm-031",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Windows interface: The square button on a window makes the window available only from the taskbar.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "The minus button minimizes a window to the taskbar; the square button maximizes or restores it."
    },
    {
      "id": "dcm-032",
      "chapter": "instalare-config",
      "type": "single",
      "question": "What is the usual default installation folder for a 32-bit desktop application on 64-bit Windows?",
      "options": [
        "Program Files folder",
        "AppData folder",
        "Program Files (x86) folder",
        "Documents folder"
      ],
      "correct": 2,
      "explanation": "32-bit applications on 64-bit Windows are stored in Program Files (x86). 64-bit apps go in Program Files, user-specific data in AppData, and the Documents folder stores files."
    },
    {
      "id": "dcm-033",
      "chapter": "instalare-config",
      "type": "single",
      "question": "What is the usual default installation folder for a 64-bit desktop application on 64-bit Windows?",
      "options": [
        "Program Files(x86)",
        "Microsoft Store",
        "Program Files",
        "AppData"
      ],
      "correct": 2,
      "explanation": "64-bit applications are installed in the Program Files folder."
    },
    {
      "id": "dcm-034",
      "chapter": "instalare-config",
      "type": "single",
      "question": "A user just installed a Windows update to be able to download and install a new app from the Microsoft Store, but cannot install the app. What should be done next to attempt to rectify the situation?",
      "options": [
        "Check Family settings to see if the settings are hiding the app",
        "Check to see if the app is compatible with the device",
        "Reboot the device",
        "Check to see if the app is blocked from the region in which the device is present"
      ],
      "correct": 2,
      "explanation": "After a Windows update the device must be rebooted before installations from the Microsoft Store can take place."
    },
    {
      "id": "dcm-035",
      "chapter": "instalare-config",
      "type": "multiple",
      "question": "Which TWO listed software categories commonly support automatic software updates?",
      "options": [
        "Operating system",
        "Physical replacement of RAM modules",
        "Application software",
        "Physical replacement of the motherboard"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Operating systems and applications commonly support automatic software updates. Drivers and supported firmware can also be updated automatically; physically replacing components is not a software update."
    },
    {
      "id": "dcm-036",
      "chapter": "instalare-config",
      "type": "single",
      "question": "A user recently updated a Windows laptop. The user doesn't want to miss future important fixes or device drivers for Windows. What should the user do?",
      "options": [
        "Manually update Windows every quarter",
        "Enable Automatic Updates",
        "Upgrade Windows",
        "Check the internet every month for announcements about available updates"
      ],
      "correct": 1,
      "explanation": "Automatic updates ensure the user does not miss fixes or drivers. Manual or periodic checks do not keep drivers updated in a timely manner."
    },
    {
      "id": "dcm-037",
      "chapter": "instalare-config",
      "type": "multiple",
      "question": "Which TWO listed Windows Update categories provide malware-definition updates and high-priority fixes, respectively?",
      "options": [
        "Definition updates",
        "Critical updates",
        "General Microsoft Store app feature updates",
        "A BIOS version-number display"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Definition updates refresh malware detection data; critical updates deliver high-priority fixes. Supported drivers and firmware can also be delivered by Windows Update, so they should not be treated as universally non-automatic."
    },
    {
      "id": "dcm-038",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "An employee joining a new network is having trouble connecting to the internet and to other devices. Running ipconfig returns the IP address 169.254.22.23. Indicate the cause of the problem.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Static"
        },
        {
          "id": "i2",
          "text": "Web"
        },
        {
          "id": "i3",
          "text": "APIPA"
        },
        {
          "id": "i4",
          "text": "Dynamic"
        },
        {
          "id": "i5",
          "text": "DNS"
        },
        {
          "id": "i6",
          "text": "DHCP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "What type of IP address is the employee receiving?",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Which server is not being reached properly as a result of this type of IP address?",
          "correctItemId": "i6"
        }
      ],
      "explanation": "169.254.x.x is an APIPA (Automatic Private IP Address), assigned when the device cannot reach a DHCP server."
    },
    {
      "id": "dcm-039",
      "chapter": "instalare-config",
      "type": "single",
      "question": "A Windows Enterprise laptop can reach the domain controller. DNS and credentials are correct, but the user has no delegated join rights and the default machine-account quota is zero. Which permission can an administrator delegate to let the user create its computer account in the target OU?",
      "options": [
        "The user needs to be a member of the Domain Admins group",
        "The user needs the Create computer object permission in Active Directory",
        "The laptop needs to be running Windows Pro",
        "The user needs to have Domain join installed"
      ],
      "correct": 1,
      "explanation": "Delegating Create Computer objects in the target OU is one way to authorize creation of the new domain computer account. Domain Admin membership is not required. Other join failures need their own diagnostics."
    },
    {
      "id": "dcm-040",
      "chapter": "instalare-config",
      "type": "single",
      "question": "A consultant is trying to join a laptop to the company domain, but the option for joining a domain is not available. What operating system does the consultant likely have?",
      "options": [
        "Windows Home",
        "Windows Education",
        "Windows Enterprise",
        "Windows Pro"
      ],
      "correct": 0,
      "explanation": "Windows Home cannot join a corporate domain. Education, Pro and Enterprise can."
    },
    {
      "id": "dcm-041",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "User accounts: Local administrator accounts can make changes to any computer in a domain.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Local administrators can only make changes to the local computer."
    },
    {
      "id": "dcm-042",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "User accounts: A Standard User account can be promoted to an Administrator account.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "In Manage Accounts, select the account, choose Change the account type, and select Administrator."
    },
    {
      "id": "dcm-043",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "User accounts: Only administrator accounts can install apps on a device.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Standard users can install apps when the installation does not require administrator-level privileges."
    },
    {
      "id": "dcm-044",
      "chapter": "instalare-config",
      "type": "single",
      "question": "A standard user needs to install a desktop app that writes to protected system folders and requires elevation. What is the minimum scope of administrative privileges required?",
      "options": [
        "Domain-wide administrative privileges",
        "Local administrative privileges supplied through UAC",
        "Forest-wide administrative privileges",
        "No elevation is needed"
      ],
      "correct": 1,
      "explanation": "For this system-wide installer, UAC can request local administrator credentials. Store or per-user apps do not necessarily require elevation."
    },
    {
      "id": "dcm-045",
      "chapter": "instalare-config",
      "type": "single",
      "question": "Which power setting, when enabled, stores files in RAM while a laptop is inactive?",
      "options": [
        "Shutdown mode",
        "Restart",
        "Sleep mode",
        "Hibernate mode"
      ],
      "correct": 2,
      "explanation": "Sleep mode keeps data in RAM; Hibernate stores it on the hard drive; Shutdown loses unsaved data."
    },
    {
      "id": "dcm-046",
      "chapter": "instalare-config",
      "type": "single",
      "question": "A user wants different windows on a laptop screen and an external monitor instead of mirroring the same content. Which display mode should the user select?",
      "options": [
        "Extend these displays",
        "Custom Scaling",
        "Duplicate these displays",
        "Screen Resolution"
      ],
      "correct": 0,
      "explanation": "Extend these displays creates an extended desktop. To put the laptop display on the left, arrange its monitor icon to the left in Display settings."
    },
    {
      "id": "dcm-047",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "An administrator wants software updates and patches applied as soon as possible on the apps they support. Where are most updates for apps found?",
      "options": [
        "Start Menu",
        "Device Manager",
        "Windows Update",
        "Within the apps themselves"
      ],
      "correct": 3,
      "explanation": "Most app updates are found within the apps themselves. Windows Update handles operating system updates and Device Manager handles driver updates."
    },
    {
      "id": "dcm-048",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "What would be the best way to access a commonly used network folder or application from the desktop?",
      "options": [
        "Create a shortcut on the desktop",
        "Create a shortcut in the Documents folder",
        "Create a shortcut in the Start Menu",
        "Drag the resource from its original location to the desktop"
      ],
      "correct": 0,
      "explanation": "A desktop shortcut gives direct access. Dragging a resource moves it by default, which can break it."
    },
    {
      "id": "dcm-049",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A technician is looking for a cable that supports both video and digital audio output and is used for gaming consoles. Which connection type supports both?",
      "options": [
        "DVI",
        "3.5mm AUDIO",
        "HDMI",
        "VGA"
      ],
      "correct": 2,
      "explanation": "HDMI carries video and digital audio. 3.5mm is analog audio only, and VGA and DVI carry video but not audio."
    },
    {
      "id": "dcm-050",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Using drag and drop, match each connection type in the image with its name.",
      "image": "assets/device-config/pdf-095-connectors-labelled.png",
      "dragItems": [
        {
          "id": "i1",
          "text": "AUDIO"
        },
        {
          "id": "i2",
          "text": "USB TYPE C"
        },
        {
          "id": "i3",
          "text": "HDMI"
        },
        {
          "id": "i4",
          "text": "ETHERNET"
        },
        {
          "id": "i5",
          "text": "USB"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "B",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "C",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "D",
          "correctItemId": "i5"
        },
        {
          "id": "z5",
          "label": "E",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A: Audio; B: Ethernet; C: HDMI; D: USB Type-A; E: USB Type-C. The supplied PDF confirms this labeling. A USB-C shape alone does not guarantee a particular data rate, power capability or video mode.",
      "imageAlt": "Connectors A: audio, B: Ethernet, C: HDMI, D: USB Type-A, E: USB Type-C"
    },
    {
      "id": "dcm-051",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Using drag and drop, match each connection type in the image with the peripheral device it typically attaches.",
      "image": "assets/device-config/pdf-086-connectors.png",
      "dragItems": [
        {
          "id": "i1",
          "text": "HDMI"
        },
        {
          "id": "i2",
          "text": "USB TYPE C"
        },
        {
          "id": "i3",
          "text": "USB"
        },
        {
          "id": "i4",
          "text": "AUDIO"
        },
        {
          "id": "i5",
          "text": "ETHERNET"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Headset",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Network",
          "correctItemId": "i5"
        },
        {
          "id": "z3",
          "label": "TV",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Printer",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Smartphone",
          "correctItemId": "i2"
        }
      ],
      "explanation": "AUDIO connects a headset, ETHERNET connects a device to a network, HDMI connects a TV, USB connects printers, cameras and storage, and USB TYPE C is typical on smartphones.",
      "imageAlt": "Audio, Ethernet, HDMI, USB Type-A and USB Type-C connector photograph"
    },
    {
      "id": "dcm-052",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each video connection type with its capability.",
      "dragItems": [
        {
          "id": "i1",
          "text": "VGA"
        },
        {
          "id": "i2",
          "text": "DisplayPort"
        },
        {
          "id": "i3",
          "text": "mini-HDMI"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A cable used for high-quality data transmission for both video and audio, often used with tablets and portable cameras",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Connects a desktop computer to a monitor using an analog connection",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A digital video transmission that allows connecting multiple displays to a single port",
          "correctItemId": "i2"
        }
      ],
      "explanation": "mini-HDMI carries video and audio on small devices, VGA is a legacy analog standard, and DisplayPort is digital and supports multiple displays from one port."
    },
    {
      "id": "dcm-053",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "A laptop has USB-A and USB-C ports. Its USB-C port supports DisplayPort Alt Mode. Consider an active USB-A graphics adapter with its required driver installed. Match each statement to the correct answer.",
      "dragItems": [
        {
          "id": "i1",
          "text": "No"
        },
        {
          "id": "i2",
          "text": "USB-C to HDMI"
        },
        {
          "id": "i3",
          "text": "HDMI"
        },
        {
          "id": "i4",
          "text": "USB"
        },
        {
          "id": "i5",
          "text": "Yes"
        },
        {
          "id": "i6",
          "text": "VGA"
        },
        {
          "id": "i7",
          "text": "USB-A to HDMI"
        },
        {
          "id": "i8",
          "text": "USB hub"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Can the active USB-A to HDMI graphics adapter, with its driver installed, connect an HDMI monitor?",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Which adapter connects the video-capable USB-C port to an HDMI monitor?",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "An external storage device is typically connected to a computer using:",
          "correctItemId": "i4"
        }
      ],
      "explanation": "An active USB-A graphics adapter can provide HDMI output with its driver; a passive cable cannot. USB-C to HDMI requires video-capable USB-C (specified here). USB is a common external-storage interface."
    },
    {
      "id": "dcm-054",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Accessibility: Mouse settings are the same for every Windows device.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Mouse settings vary depending on the mouse installed on the device."
    },
    {
      "id": "dcm-055",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Windows Speech Recognition provides a way to control a computer and enter text without using a physical keyboard.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Speech Recognition is primarily an input/control accessibility tool. Closed captions provide a direct hearing-accessibility aid."
    },
    {
      "id": "dcm-056",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Accessibility: An on-screen keyboard helps those with mobility issues.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "An on-screen keyboard lets users select keys with a mouse or other pointer."
    },
    {
      "id": "dcm-057",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A technician is setting up a laptop for someone who has trouble distinguishing reds from greens. Which Accessibility setting helps people who struggle to see certain colors?",
      "options": [
        "Color filters",
        "High Contrast",
        "Magnifier",
        "Colors"
      ],
      "correct": 0,
      "explanation": "Color filters help people who struggle with certain colors (red/green or blue/yellow). High Contrast is for low vision, and Magnifier enlarges content."
    },
    {
      "id": "dcm-058",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A person wants to see text in a larger font but only while reading that specific text. Which Accessibility feature should the person use?",
      "options": [
        "Text size",
        "Narrator",
        "Magnifier",
        "Font settings"
      ],
      "correct": 2,
      "explanation": "Magnifier enlarges the text under the mouse. Text size sets the overall size, and Narrator reads text aloud."
    },
    {
      "id": "dcm-059",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Which of the following accessibility features in Windows will let a user press multiple key commands (such as Ctrl + S) one key at a time?",
      "options": [
        "Toggle Keys",
        "On-Screen Keyboard",
        "Sticky Keys",
        "Filter Keys"
      ],
      "correct": 2,
      "explanation": "Sticky Keys lets the user press key combinations one key at a time. Toggle Keys plays a sound for Caps/Num/Scroll lock, Filter Keys ignores brief or repeated keystrokes, and On-Screen Keyboard uses a mouse."
    },
    {
      "id": "dcm-060",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Which of the following accessibility features in Windows reads text to an individual?",
      "options": [
        "Magnifier",
        "Narrator",
        "Closed Captions",
        "Speech Recognition"
      ],
      "correct": 1,
      "explanation": "Narrator reads text aloud. Closed Captions show words on screen, Speech Recognition converts speech to text, and Magnifier enlarges text."
    },
    {
      "id": "dcm-061",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each accessibility setting with the accessibility need it helps.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Closed captions"
        },
        {
          "id": "i2",
          "text": "High-contrast"
        },
        {
          "id": "i3",
          "text": "Sticky keys"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Vision",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Hearing",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Mobility",
          "correctItemId": "i3"
        }
      ],
      "explanation": "High-contrast helps those with vision impairments, closed captions help those with hearing impairments, and sticky keys help those with mobility issues."
    },
    {
      "id": "dcm-062",
      "chapter": "aplicatii-periferice",
      "type": "multiple",
      "question": "In which areas of Windows will an administrator find the ability to repair or reinstall a desktop application? (Choose 2.)",
      "options": [
        "Start Menu",
        "Windows Update",
        "Control Panel",
        "Apps & Features"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Desktop applications can be repaired or reinstalled from Apps & Features and the Control Panel. The Start Menu can only uninstall, and Windows Update handles system updates."
    },
    {
      "id": "dcm-063",
      "chapter": "aplicatii-periferice",
      "type": "multiple",
      "question": "Which is the proper way to cleanly uninstall a software application from a Windows computer? (Choose 2.)",
      "options": [
        "Select Uninstall from the app context menu in Start",
        "Delete its application folder",
        "Manually delete all associated registry settings",
        "Select the app in Windows 10 Apps & features and choose Uninstall"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Use the app's Uninstall option from the Start menu, Settings (Apps & features) or the Control Panel. The uninstaller removes folders and registry settings."
    },
    {
      "id": "dcm-064",
      "chapter": "aplicatii-periferice",
      "type": "multiple",
      "question": "A new administrator is learning about the benefits of the Microsoft Store. What are the main benefits of using it to obtain apps? (Choose 2.)",
      "options": [
        "To update Windows devices",
        "To allow a user to obtain both free and paid apps",
        "To obtain apps that have been verified by Microsoft",
        "To purchase devices for Windows-based computers"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "The Microsoft Store provides free and paid apps that Microsoft has verified. Windows Update updates Windows, and the Store does not sell hardware."
    },
    {
      "id": "dcm-065",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Application installations and features: The Windows Features area is part of the Control Panel.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Windows Features is in the Control Panel."
    },
    {
      "id": "dcm-066",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Application installations and features: The Family options area is used to set screen time limits on devices.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Family options let you set screen time limits."
    },
    {
      "id": "dcm-067",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Application installations and features: Microsoft Store app updates must be done in the Apps & Features area.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Microsoft Store app updates can be done in the Store itself."
    },
    {
      "id": "dcm-068",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Which is a customization that can be made to a Windows 10 Start menu?",
      "options": [
        "Save Start Menu preset",
        "Pin and Unpin tiles",
        "Change the icon images of the Start Menu items",
        "Download Start Menu templates"
      ],
      "correct": 1,
      "explanation": "You can pin and unpin tiles (and move and resize them). There are no Start menu presets or templates, and icon images cannot be changed from the Start menu."
    },
    {
      "id": "dcm-069",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Which Windows feature is used to update drivers or roll back drivers on hardware devices to previous versions?",
      "options": [
        "Microsoft Store",
        "Device Manager",
        "Apps and Features",
        "Windows Update"
      ],
      "correct": 1,
      "explanation": "Device Manager updates and rolls back drivers."
    },
    {
      "id": "dcm-070",
      "chapter": "aplicatii-periferice",
      "type": "multiple",
      "question": "When using Device Manager to update drivers for a device, which options are available from within Device Manager? (Choose 2.)",
      "options": [
        "Open a direct link to the manufacturer's support site",
        "Browse my computer for drivers",
        "Automatically search for drivers",
        "Change the file system of the device"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "Device Manager offers Search automatically for drivers and Browse my computer for drivers. Available online search behavior varies by Windows version."
    },
    {
      "id": "dcm-071",
      "chapter": "acces-date",
      "type": "multiple",
      "question": "A technician needs to change a printer configuration and cancel print jobs submitted by other users. Which TWO printer permissions should be assigned directly?",
      "options": [
        "Assign the technician the Manage Documents permission",
        "Assign the technician the Manage Printers permission",
        "Add the technician to the Administrators group for the network on which the printer resides",
        "Assign the technician the Print permission"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Manage Printers allows configuration changes; Manage Documents allows management of other users’ print jobs. Print alone does not provide these capabilities."
    },
    {
      "id": "dcm-072",
      "chapter": "acces-date",
      "type": "single",
      "question": "You are reorganizing the drive on your computer. You move several files to a new folder located on the same partition. When you move the files to the new folder, what happens to their permissions? Assume NTFS source and destination and a normal File Explorer operation without an explicit ACL-preservation tool.",
      "options": [
        "The destination folder permissions are inherited",
        "The permissions on the files are retained",
        "All permissions are lost",
        "The source and destination permissions are combined"
      ],
      "correct": 1,
      "explanation": "Files moved within the same partition keep their explicit permissions. Nothing is inherited because no new copy is created."
    },
    {
      "id": "dcm-074",
      "chapter": "acces-date",
      "type": "single",
      "question": "When a file or folder is moved or copied from one partition to another, what happens to the permissions of that file or folder? Assume NTFS source and destination and a normal File Explorer operation without an explicit ACL-preservation tool.",
      "options": [
        "The permissions inherit from the folder of the destination partition",
        "The permissions from the source partition are retained with the file or folder",
        "The users and groups assigned to the resource in the source partition are copied to the new partition",
        "The permissions from the source partition remain with the file or folder"
      ],
      "correct": 0,
      "explanation": "The destination partition can have different users and groups, so the file inherits permissions from its new parent folder."
    },
    {
      "id": "dcm-075",
      "chapter": "acces-date",
      "type": "single",
      "question": "A sales team often works in remote areas and needs to work on files even when not connected to the Internet. Which cloud feature enables this?",
      "options": [
        "Blob storage",
        "Offline backups",
        "Offline file synchronization",
        "Encryption"
      ],
      "correct": 2,
      "explanation": "Offline file synchronization lets people work on cloud-based files without an Internet connection and syncs the changes later."
    },
    {
      "id": "dcm-076",
      "chapter": "acces-date",
      "type": "single",
      "question": "A consulting firm wants non-essential files purged after 90 days on a server, but essential files kept for up to seven years. Which type of policy should the firm build to define these and similar rules for historical data?",
      "options": [
        "MOU",
        "Remote wipe",
        "Retention policy",
        "AUP"
      ],
      "correct": 2,
      "explanation": "A retention policy defines data classifications and how long data must be kept or when it should be purged."
    },
    {
      "id": "dcm-077",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user needs to access a network folder frequently. Which method of accessing the folder would be the easiest for the user?",
      "options": [
        "Add the folder to the Start Menu",
        "Create a Workplace Join for that folder",
        "Map a drive to that folder",
        "Copy the folder contents to drive C:"
      ],
      "correct": 2,
      "explanation": "Mapping a drive to the network folder is the easiest way to reach it. Workplace Join joins an entire workplace and copying the contents does not give access to the share."
    },
    {
      "id": "dcm-078",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Drag each Microsoft cloud service to the matching definition. Each service may be used once, more than once, or not at all.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Azure"
        },
        {
          "id": "i2",
          "text": "OneDrive"
        },
        {
          "id": "i3",
          "text": "SharePoint"
        },
        {
          "id": "i4",
          "text": "Teams"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Accommodates high-workload applications, virtual machines, and access from a variety of platforms",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "An intranet-based collaboration site where files and folders can be stored and shared",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "A collaboration tool used for live chat, virtual meetings, and file sharing",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Similar to traditional file storage, but in the cloud",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Azure hosts workloads and virtual machines, SharePoint is an intranet collaboration site, Teams provides chat, meetings and file sharing, and OneDrive is cloud file storage."
    },
    {
      "id": "dcm-079",
      "chapter": "acces-date",
      "type": "single",
      "question": "A business working on contracts wants to store and possibly restore multiple versions of contract files. Which Windows feature allows backing up multiple versions of files and restoring a version from a particular date and time?",
      "options": [
        "System Restore",
        "File Recovery",
        "Recycle Bin",
        "File History"
      ],
      "correct": 3,
      "explanation": "File History backs up multiple versions of files and can restore a version from a specific time. System Restore restores system files from a restore point."
    },
    {
      "id": "dcm-080",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match each backup type to its description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Full"
        },
        {
          "id": "i2",
          "text": "Differential"
        },
        {
          "id": "i3",
          "text": "Incremental"
        },
        {
          "id": "i4",
          "text": "Mirror"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A backup of all data selected on a drive, usually done weekly",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Only copies data created or changed since the last backup",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Only copies data created or changed since the initial backup",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "An exact copy of its source that updates when its source is updated",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Full copies everything (resets the archive bit); incremental copies changes since the last backup (resets the archive bit); differential copies changes since the last full backup (does not reset the archive bit); mirror is an exact copy of the source."
    },
    {
      "id": "dcm-081",
      "chapter": "acces-date",
      "type": "multiple",
      "question": "Which listed NTFS permissions are basic permissions? (Choose 3.)",
      "options": [
        "Write attributes",
        "Take ownership",
        "Read",
        "Read attributes",
        "Full control",
        "Modify"
      ],
      "correct": [
        2,
        4,
        5
      ],
      "explanation": "Read, Full control, and Modify are basic NTFS permission sets. Write attributes, Read attributes, and Take ownership are individual advanced permissions, although some are included within basic permission sets."
    },
    {
      "id": "dcm-082",
      "chapter": "acces-date",
      "type": "multiple",
      "question": "When files are shared from a cloud server, which types of entities are granted permissions to those files? (Choose 2.)",
      "options": [
        "Domains",
        "Users",
        "Sites",
        "Groups"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "As on-premises servers, permissions on files are assigned to users and groups, not to sites or domains."
    },
    {
      "id": "dcm-083",
      "chapter": "acces-date",
      "type": "single",
      "question": "You need to share a folder and limit the number of users connected to it to five at a time. Which type of share should you set up?",
      "options": [
        "Basic",
        "Advanced",
        "Security",
        "Public"
      ],
      "correct": 1,
      "explanation": "An advanced share lets you control the number of simultaneous users. Basic and public shares do not allow that limit, and the Security tab sets user/group permissions, not shares."
    },
    {
      "id": "dcm-084",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A new technician is learning the distinction between file permissions and share permissions. Identify each set of permissions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Share"
        },
        {
          "id": "i2",
          "text": "File"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Full Control, Modify, and Read & Execute are NTFS ___ permissions.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Read, Change, and Full Control in Advanced Sharing are SMB ___ permissions.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "NTFS file permissions include Modify and Read & Execute. Advanced SMB sharing offers Read, Change, and Full Control. Basic sharing UI labels are not the same permission list."
    },
    {
      "id": "dcm-085",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A user is creating a backup strategy. The user wants to conserve storage space but wants to restore quickly in case of data loss. Which backup types should the user choose?",
      "dragItems": [
        {
          "id": "i1",
          "text": "Incremental"
        },
        {
          "id": "i2",
          "text": "Differential"
        },
        {
          "id": "i3",
          "text": "Full"
        },
        {
          "id": "i4",
          "text": "Mirror"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "On a weekly basis, the user should perform a ___ backup.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Each night, the user should perform a ___ backup.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A weekly full backup plus nightly differential backups saves storage and needs only two restore steps (last full + latest differential). Incremental backups require restoring every increment after the full backup."
    },
    {
      "id": "dcm-086",
      "chapter": "acces-date",
      "type": "single",
      "question": "After a weekly full backup, which nightly backup type normally needs only that full backup plus the latest nightly backup for a restore?",
      "options": [
        "Differential",
        "Incremental",
        "No backup",
        "Only the first incremental"
      ],
      "correct": 0,
      "explanation": "Differential restore normally requires the full backup and latest differential. Incremental restore requires the full backup plus each subsequent incremental in order."
    },
    {
      "id": "dcm-087",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Backups and restores: In the context of full/incremental/differential backups, a restore always starts with the last full backup.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "A restore always starts from the last full backup, then the differential or incremental backups are applied."
    },
    {
      "id": "dcm-088",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Backups and restores: Incremental backups back up files that have changed since the last full or incremental backup.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Incremental backups copy changes since the last full or incremental backup."
    },
    {
      "id": "dcm-089",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Between full backups, differential backups generally contain more changed data as additional files change.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Differential backups accumulate changes since the latest full backup. They need not grow every single time; no changes, deletions, compression and implementation affect size."
    },
    {
      "id": "dcm-090",
      "chapter": "acces-date",
      "type": "single",
      "question": "A new cloud administrator learns that a virtual machine can be configured to increase or decrease its RAM dynamically based on workload demand. Which cloud feature is this describing?",
      "options": [
        "Load balancing",
        "Elasticity",
        "Scalability",
        "Reserved instance"
      ],
      "correct": 1,
      "explanation": "Elasticity is automatic adjustment of resource allocation with changing demand. Scalability is the ability to increase capacity vertically or horizontally, whether manually or automatically. Load balancing distributes work; a reserved instance concerns a reservation/pricing arrangement."
    },
    {
      "id": "dcm-091",
      "chapter": "acces-date",
      "type": "single",
      "question": "A real estate company is considering moving its data storage to the cloud. What is a benefit of having files stored in the cloud as opposed to on-premises servers?",
      "options": [
        "Files in the cloud are accessed faster than files on on-premises servers.",
        "File and folder structure is simplified.",
        "Security is more granular on cloud files.",
        "The ability for files to be opened on multiple types of devices."
      ],
      "correct": 3,
      "explanation": "A main benefit of cloud storage is access from many device types (tablets, phones, laptops, desktops). Speed, structure and security are not necessarily better."
    },
    {
      "id": "dcm-092",
      "chapter": "acces-date",
      "type": "single",
      "question": "A law office is noticing that documents are being deleted without a review process. What can be added to documents to ensure they are kept for a specified amount of time and not deleted without a review?",
      "options": [
        "Retention labels",
        "Retention policy",
        "Legal hold",
        "Disposition review"
      ],
      "correct": 0,
      "explanation": "Retention labels define the details of a retention policy: whether to retain, delete or hold a document for a defined time. A legal hold is indefinite, and a disposition review decides whether to delete."
    },
    {
      "id": "dcm-093",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Advanced Sharing offers more granular share configuration than the basic Windows sharing wizard.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Advanced Sharing exposes share-level permissions and settings such as connection limits. The basic wizard can still grant access to selected users."
    },
    {
      "id": "dcm-094",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Permissions and shares: Take Ownership is an advanced permission.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Take Ownership is an advanced NTFS permission."
    },
    {
      "id": "dcm-095",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Files in C:\\Users\\Public can normally be shared with local users, subject to their NTFS permissions.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Public folders are designed for sharing. Custom ACLs can restrict access; they do not override NTFS security."
    },
    {
      "id": "dcm-096",
      "chapter": "acces-date",
      "type": "multiple",
      "question": "Which two permissions are combined to determine your effective permissions? (Choose 2.)",
      "options": [
        "User Account",
        "Sites",
        "Group",
        "Organizational Units"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Effective permissions combine user account permissions and group permissions (Deny overrides Allow). Sites and OUs are part of Group Policy, not permissions."
    },
    {
      "id": "dcm-097",
      "chapter": "acces-date",
      "type": "single",
      "question": "What does the NTFS Take ownership permission allow a user to do?",
      "options": [
        "Automatically decrypt EFS files",
        "Make themselves the owner of a file or folder",
        "Automatically execute every file",
        "Bypass all file permissions without changing ownership"
      ],
      "correct": 1,
      "explanation": "Take ownership allows taking ownership. An owner can normally change the DACL to grant access, but taking ownership does not itself decrypt an EFS file."
    },
    {
      "id": "dcm-098",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match each virtual machine host to the type of virtual machines the host provides.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Hyper-V"
        },
        {
          "id": "i2",
          "text": "AWS"
        },
        {
          "id": "i3",
          "text": "Azure"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Microsoft-based cloud host for virtual machines",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Non-Microsoft-based cloud host for virtual machines",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Microsoft on-premises virtual machine host",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Azure is Microsoft's cloud, Hyper-V is Microsoft's on-premises host, and Amazon Web Services (AWS) is a non-Microsoft cloud host."
    },
    {
      "id": "dcm-099",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match the informal business-network segment labels to their roles. These labels describe this design, not Windows firewall profiles.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Private"
        },
        {
          "id": "i2",
          "text": "Public"
        },
        {
          "id": "i3",
          "text": "Guest"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An external-facing network that interacts with the internet",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A network that has its resources protected from outside access",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A network that is separated from other networks in an organization and typically allows internet access but keeps people away from important company resources",
          "correctItemId": "i3"
        }
      ],
      "explanation": "In this design, Public means an exposed segment, Private means the trusted internal segment, and Guest means an isolated visitor segment. Internet connectivity alone does not make a trusted LAN public. Windows firewall profiles are a different classification."
    },
    {
      "id": "dcm-100",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Types of networks: An extranet allows customers, suppliers, and business partners to gain full access to an organization's internal resources.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "An extranet gives limited access to the organization's intranet."
    },
    {
      "id": "dcm-101",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "An intranet is a private network or site intended for an organization’s authorized users; it may still use Internet-connected infrastructure.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Private access, not a total absence of Internet connectivity, defines an intranet."
    },
    {
      "id": "dcm-102",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Types of networks: The internet is a widely used example of a public network.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "The internet is the best-known public network."
    },
    {
      "id": "dcm-103",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match each definition with the corresponding type of malware. Each malware type may be used once, more than once, or not at all.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Displays unwanted commercials and product promotions"
        },
        {
          "id": "i2",
          "text": "Malicious code that masquerades as a desirable application"
        },
        {
          "id": "i3",
          "text": "Harmless code added to a file"
        },
        {
          "id": "i4",
          "text": "Infects a computer when an executable file is initiated by a user"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Adware",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Virus",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Trojan Horse",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Adware displays unwanted ads; a virus infects a computer when an executable file is run by the user; a Trojan horse masquerades as a desirable application. No type of malware is harmless, so \"Harmless code added to a file\" matches nothing."
    },
    {
      "id": "dcm-104",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match each type of malware to its definition. Each malware type may be used once, more than once, or not at all.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Adware"
        },
        {
          "id": "i2",
          "text": "Spyware"
        },
        {
          "id": "i3",
          "text": "Worm"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Displays unwanted commercials and product promotions",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Gathers personal information or tracks computer activity without consent",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Self-replicates and exploits operating system vulnerabilities",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Adware shows unwanted ads, spyware gathers information or tracks activity without consent, and a worm self-replicates by exploiting operating system vulnerabilities."
    },
    {
      "id": "dcm-105",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A real estate business is looking to implement a BYOD policy for personal mobile devices. Which type of system can help enforce that policy?",
      "options": [
        "SIEM",
        "VPN",
        "MDM",
        "SMB"
      ],
      "correct": 2,
      "explanation": "A Mobile Device Management (MDM) system helps enforce a Bring Your Own Device (BYOD) policy. A VPN creates a secure tunnel, a SIEM provides security alerts and analysis, and SMB is the protocol used for file shares."
    },
    {
      "id": "dcm-106",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A high-security workplace issues a smart card to a user as a sign-in credential. What is its primary role in this scenario?",
      "options": [
        "Authentication",
        "To encrypt data",
        "To decrypt data",
        "Portable storage"
      ],
      "correct": 0,
      "explanation": "The card serves as an authentication credential. Smart cards can store protected keys and perform cryptographic operations; it would be incorrect to say they never encrypt, decrypt or sign data."
    },
    {
      "id": "dcm-107",
      "chapter": "securitate-dispozitiv",
      "type": "multiple",
      "question": "A manufacturing company is trying to improve its overall security posture. In what situations would social engineering training be warranted? (Choose 2.)",
      "options": [
        "Employees forgetting their ID badges",
        "Employees are non-participants in online meetings",
        "Employees are divulging information to people acting as help desk employees",
        "Employees are clicking on emails asking for personal information"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Giving out information to someone posing as help desk staff and clicking on phishing emails are social engineering risks. Forgetting badges or skipping meetings are not."
    },
    {
      "id": "dcm-108",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Group Policy precedence: For Group Policy, OU settings override domain settings. Assume normal Local–Site–Domain–OU processing, no enforced links, no blocked inheritance, and conflicting settings for the same scope.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "The priority order is OU, Domain, Site, Local, so OU settings override domain settings."
    },
    {
      "id": "dcm-109",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Group Policy precedence: Group Policy does not override a local system policy.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "In a domain, Group Policy overrides local system policy settings."
    },
    {
      "id": "dcm-110",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Group Policy precedence: Group Policy provides central management of user and computer settings.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Group Policy centrally manages user and computer settings."
    },
    {
      "id": "dcm-111",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "UAC: The goal of UAC is to elevate a guest user to a standard user level.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "UAC elevates a standard user to administrator level for the privileges needed to install an app or change Windows settings."
    },
    {
      "id": "dcm-112",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "UAC: UAC is used only when attempts are made to change Windows settings.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "UAC is used both for installing apps and for changing Windows settings."
    },
    {
      "id": "dcm-113",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "UAC: The default UAC setting is to notify a user when apps try to make changes to the computer.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "The default UAC setting notifies the user when apps try to make changes to the computer."
    },
    {
      "id": "dcm-114",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each situation, indicate which type of wipe is taking place on a device.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Full wipe"
        },
        {
          "id": "i4",
          "text": "Selective corporate-data wipe"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A phone has its business data deleted but the personal data is still on the phone.",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "A mobile device is reset to its factory settings.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "A selective wipe removes managed corporate data while preserving personal data where the platform supports it. A full wipe resets the device and removes its data."
    },
    {
      "id": "dcm-115",
      "chapter": "securitate-dispozitiv",
      "type": "multiple",
      "question": "A management solution supports location-based monitoring on both Android and iOS. Which OS location settings are needed for location access? (Choose 2.)",
      "options": [
        "Cellular (on either platform)",
        "Location (on Android)",
        "Wi-Fi (on either platform)",
        "Location Services (on iOS)"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "The relevant location setting must be enabled and app permission granted on each platform. Availability of monitoring/geofencing depends on the management solution and enrollment mode."
    },
    {
      "id": "dcm-116",
      "chapter": "securitate-dispozitiv",
      "type": "multiple",
      "question": "Two employees have older Android devices enrolled with an MDM. When they try to connect, they are told the device is no longer compatible with the MDM. What has been done on the MDM to cause this message? (Choose 2.)",
      "options": [
        "A policy has been defined",
        "The devices have been determined to be non-compliant",
        "The device has gone through a remote wipe",
        "The device has gone through a full wipe"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "A policy changed the operating system requirements for Android devices, so the older devices were deemed non-compliant. If a wipe had taken place, data would have been deleted."
    },
    {
      "id": "dcm-117",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which is an example of multi-factor authentication?",
      "options": [
        "Sending a text message to subscribe to special discount notifications",
        "Paying a bill over the telephone by providing your address and phone number",
        "Withdrawing money from an ATM using your card and PIN",
        "Logging into a network with a username and password"
      ],
      "correct": 2,
      "explanation": "An ATM card (possession factor) and a PIN (knowledge factor) are two different factors. A username and password are both knowledge factors, and an address and phone number are also knowledge factors."
    },
    {
      "id": "dcm-118",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which of the following is considered a strong password for BYOD and corporate-managed mobile devices?",
      "options": [
        "A four-digit PIN",
        "A one-time token",
        "At least eight characters with numbers, lowercase letters, uppercase letters, and symbols",
        "A six-character word"
      ],
      "correct": 2,
      "explanation": "A strong password has at least eight characters and combines numbers, lowercase letters, uppercase letters and symbols. A four-digit PIN is not secure and a one-time token is not a password."
    },
    {
      "id": "dcm-119",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which policy document outlines what employees are allowed to view on the Internet from company devices?",
      "options": [
        "BCP",
        "MOU",
        "DRP",
        "AUP"
      ],
      "correct": 3,
      "explanation": "An Acceptable Use Policy (AUP) defines what employees are allowed to do with company devices. A BCP keeps the business running during a disaster, a DRP restores it afterwards, and an MOU is an agreement between parties."
    },
    {
      "id": "dcm-120",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What does UAC allow when a standard user supplies valid administrator credentials for an operation that requires elevation?",
      "options": [
        "Permanent conversion of the user to a guest",
        "Permanent conversion of the user to an administrator",
        "Running the requested operation with administrative privileges",
        "Automatic removal of all security restrictions"
      ],
      "correct": 2,
      "explanation": "UAC elevates the authorized operation/process. It does not permanently change a standard account into an administrator account."
    },
    {
      "id": "dcm-121",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which Windows security feature can request administrator credentials when a standard user starts an operation requiring elevation?",
      "options": [
        "User Account Control (UAC)",
        "Azure Active Directory (AD)",
        "Multi-factor Authentication (MFA)",
        "Microsoft Authenticator"
      ],
      "correct": 0,
      "explanation": "User Account Control handles elevation prompts. With valid administrator credentials, the requested process can run with administrative privileges."
    },
    {
      "id": "dcm-122",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which mitigation method helps to mitigate possible physical attacks on a data server within a business' premises?",
      "options": [
        "Adding a firewall in front of the server",
        "Locking a server in a room that requires authentication to enter",
        "Adding a honeypot to the server",
        "Moving the server offsite"
      ],
      "correct": 1,
      "explanation": "A locked server room that requires authentication protects against physical attacks. A firewall filters packets, a honeypot lures attackers, and moving the server offsite does not necessarily protect it."
    },
    {
      "id": "dcm-123",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "For a mobile device to interact with an MDM, what needs to happen with the device?",
      "options": [
        "The device owner must agree to the MDM policy",
        "The device must enroll in the MDM",
        "The MDM needs to approve a device request",
        "The device needs the same operating system as that of the MDM"
      ],
      "correct": 1,
      "explanation": "A device must be enrolled in the Mobile Device Management (MDM) tool before it can interact with it."
    },
    {
      "id": "dcm-124",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An MDM solution requires a separate client app on the device. What is the general name of that management client?",
      "options": [
        "Antivirus app",
        "Microsoft Intune",
        "Tracking app",
        "Agent"
      ],
      "correct": 3,
      "explanation": "A separate management client is often called an agent. Other MDM implementations can use built-in OS enrollment components instead."
    },
    {
      "id": "dcm-125",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each malware attack description, indicate the attack being described.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Spyware"
        },
        {
          "id": "i2",
          "text": "Ransomware"
        },
        {
          "id": "i3",
          "text": "On-path attack"
        },
        {
          "id": "i4",
          "text": "Phishing"
        },
        {
          "id": "i5",
          "text": "Keylogging"
        },
        {
          "id": "i6",
          "text": "Adware"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Data is stolen from a legal firm and encrypted. Money is then demanded for the firm to get back its data, decrypted.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "An email from what appears to be a bank tells a person an account problem needs to be solved and provides a link to enter username and password on an illegitimate site.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Malware records a user’s keystrokes, including passwords entered at the keyboard.",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Ransomware encrypts data and demands payment; phishing solicits private information through fake messages; keyloggers record keystrokes, and the stolen information can later be used in a replay attack."
    },
    {
      "id": "dcm-126",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "You provide volunteer computer support for a non-profit organization. They received ten Windows computers whose antivirus software expires at the end of the month. There is no budget to renew it. What should you recommend as a no-cost solution to protect the computers from malware?",
      "options": [
        "Don't use the computers until they can get funds to renew the antivirus software licenses",
        "Uninstall the expiring antivirus software and enable Windows Defender",
        "Recommend that they not connect to the Internet",
        "Download and install a 30-day trial of a good antivirus software"
      ],
      "correct": 1,
      "explanation": "Windows Security (Defender) is built into Windows and free. It is disabled while a third-party antivirus is installed, and normally re-enables when that antivirus is uninstalled."
    },
    {
      "id": "dcm-127",
      "chapter": "securitate-dispozitiv",
      "type": "multiple",
      "question": "You are training a new technician to analyze antimalware scan results. What are clues that the network may be under a malware attack? (Choose 2.)",
      "options": [
        "An increase in video packet transmissions occurs during the analysis period",
        "A file is replicated rapidly",
        "All network activity stops during the analysis period",
        "A flood of ping requests turns up on the activity report"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "Rapid file replication and a flood of ping requests can signify malware. More video packets could be a video conference, and a stop in activity usually points to a physical device issue."
    },
    {
      "id": "dcm-128",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which type of document is an agreement between two parties to outline terms and goals for that agreement?",
      "options": [
        "MOA",
        "MOU",
        "AUP",
        "SLA"
      ],
      "correct": 1,
      "explanation": "A Memorandum of Understanding (MOU) outlines terms and goals and is usually not legally binding. An MOA is more detailed, an AUP defines acceptable use, and an SLA defines uptime expectations."
    },
    {
      "id": "dcm-129",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which Microsoft tool is used to manage mobile devices on a corporate network?",
      "options": [
        "Security Center",
        "Compliance Center",
        "Microsoft Intune",
        "Azure Resource Manager"
      ],
      "correct": 2,
      "explanation": "Microsoft Intune manages mobile devices. Security Center gives recommendations, Compliance Center covers regulations and standards, and Azure Resource Manager deploys resources."
    },
    {
      "id": "dcm-130",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match each biometric method to its primary disadvantage.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Voice Recognition"
        },
        {
          "id": "i2",
          "text": "Iris Scanning"
        },
        {
          "id": "i3",
          "text": "Fingerprint Scanning"
        },
        {
          "id": "i4",
          "text": "Signature Verification"
        },
        {
          "id": "i5",
          "text": "Facial Recognition"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Cuts or damage to the fingertip may affect matching",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Requires specialized eye-imaging hardware and appropriate positioning",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Lighting, occlusion, and the camera technology can affect matching",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Respiratory illness or background noise may affect matching",
          "correctItemId": "i1"
        },
        {
          "id": "z5",
          "label": "Natural variation in handwriting can affect matching",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Each method has implementation-dependent limitations. Iris scanning examines the iris; retinal scanning is a different technique."
    },
    {
      "id": "dcm-131",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "User authentication: A common form of two-factor authentication is to require a password and a code sent as a text message to a registered smartphone.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Two-factor authentication needs a password plus another factor, such as a code sent to a smartphone."
    },
    {
      "id": "dcm-132",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "User authentication: Smartcards are a form of biometric authentication.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "A smart card is a physical key (possession factor), not a biometric."
    },
    {
      "id": "dcm-133",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "User authentication: A strong password has at least six characters.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "A strong password has at least eight characters and at least three of the four character types."
    },
    {
      "id": "dcm-134",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Remote wipes: Remote wipes can wipe out all the data on a device.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "A full wipe deletes all data on the device."
    },
    {
      "id": "dcm-135",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Remote wipes: Remote wipes can be set to only remove business data on a device.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "A remote wipe can delete only the business data."
    },
    {
      "id": "dcm-136",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Remote wipes: Remote wipes are always triggered manually.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Devices can be wiped automatically after a set number of incorrect sign-in attempts."
    },
    {
      "id": "dcm-137",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An administrator wants to set up specific UAC settings, such as the behavior of the elevation prompt and requiring that elevation only applies to signed and validated executables. Where are these settings configured?",
      "options": [
        "Settings",
        "Control Panel",
        "Windows Security",
        "Group Policy"
      ],
      "correct": 3,
      "explanation": "These UAC settings are configured in Group Policy."
    },
    {
      "id": "dcm-138",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "gpresult and gpupdate: gpresult /V will display detailed group policy information.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "/V (verbose) displays detailed group policy information."
    },
    {
      "id": "dcm-139",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "gpresult and gpupdate: gpresult /R will display group policy settings on a remote computer.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "gpresult /R shows settings on the local computer; a remote computer needs /S computername."
    },
    {
      "id": "dcm-140",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "gpresult and gpupdate: gpupdate /force refreshes group policy settings on a local computer immediately.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "gpupdate /force refreshes local and Active Directory-based policies immediately."
    },
    {
      "id": "dcm-141",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which situation may justify disabling Windows Defender Firewall under an approved security configuration?",
      "options": [
        "Running an antimalware scan",
        "An application needs a new rule",
        "Installing any desktop application",
        "A verified replacement firewall is active and the approved deployment requires Defender Firewall to be disabled"
      ],
      "correct": 3,
      "explanation": "Do not disable protection merely because another product is installed. Verify replacement coverage and follow the approved configuration; for blocked apps, configure an appropriate rule."
    },
    {
      "id": "dcm-142",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "When a user logs onto a network and multiple group policies are applied, which policy takes precedence by being applied last? Assume normal Local–Site–Domain–OU processing, no enforced links, no blocked inheritance, and conflicting settings for the same scope.",
      "options": [
        "Local Group Policy",
        "Domain Group Policy",
        "Site Group Policy",
        "Organizational Unit (OU) Group Policy"
      ],
      "correct": 3,
      "explanation": "Policies apply in order Local, Site, Domain, OU, so the OU policy is applied last and takes precedence."
    },
    {
      "id": "dcm-143",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A new support person is learning about tools used to troubleshoot Windows. Which tool is used to identify problems with hardware devices inside or attached to devices?",
      "options": [
        "Device Manager",
        "Program Compatibility Troubleshooter",
        "Performance Monitor",
        "Task Manager"
      ],
      "correct": 0,
      "explanation": "Device Manager identifies problems with hardware devices. Performance Monitor measures performance, Task Manager shows running processes, and the Compatibility Troubleshooter fixes older apps."
    },
    {
      "id": "dcm-144",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A laptop is not recognizing an external hard drive that has been plugged into it. Which Windows tool should an administrator check first to see if the disk is being recognized?",
      "options": [
        "Device Manager",
        "Services",
        "Computer Management",
        "Disk Management"
      ],
      "correct": 3,
      "explanation": "Disk Management shows whether the drive is being recognized. Device Manager is for hardware recognition in general."
    },
    {
      "id": "dcm-145",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A Bluetooth keyboard is having intermittent connectivity issues. The keyboard is five feet away; the further it moves away, the more issues it has. What should the user check first?",
      "options": [
        "Change the battery on the keyboard",
        "Disable and enable Bluetooth on the host device",
        "Reconnect the device via Bluetooth",
        "Reinstall the keyboard drivers"
      ],
      "correct": 0,
      "explanation": "A weak battery makes Bluetooth connectivity more sensitive to distance, so replace the battery first."
    },
    {
      "id": "dcm-146",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Disk Management: The Disk Management tool can change a drive letter.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Disk Management can change a drive letter or path."
    },
    {
      "id": "dcm-147",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Disk Management: The Disk Management tool can shrink a basic volume.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Disk Management can create, delete, extend and shrink volumes."
    },
    {
      "id": "dcm-148",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Disk Management: The Disk Management tool can create a restore point.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Restore points are created with System Restore, not Disk Management."
    },
    {
      "id": "dcm-149",
      "chapter": "management-depanare",
      "type": "multiple",
      "question": "A person suspects bad sectors on a magnetic hard disk. What are ways in which that disk can be scanned for errors? (Choose 2.)",
      "options": [
        "Run chkdsk in a command prompt",
        "Run Optimize on the Tools tab under Properties of a hard drive",
        "Run Error Checking on the Tools tab under Properties of a hard drive",
        "Run SFC in a command prompt"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "chkdsk and Error Checking scan a disk for errors. Optimize defragments, and SFC checks system files."
    },
    {
      "id": "dcm-150",
      "chapter": "management-depanare",
      "type": "multiple",
      "question": "A scanner driver package is corrupt. The approved plan is to remove the device and reinstall it using the latest official manufacturer package. Which TWO actions follow this plan?",
      "options": [
        "Download an unofficial driver from a random site",
        "Uninstall the scanner in Device Manager, then reinstall it with the official package",
        "Disable antivirus permanently",
        "Download the latest compatible driver from the manufacturer's website"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "Download the latest drivers from the manufacturer's website, then uninstall and reinstall the scanner. Device Manager is unlikely to have the most recent drivers."
    },
    {
      "id": "dcm-151",
      "chapter": "management-depanare",
      "type": "single",
      "question": "An employee travels between home and office with a laptop. The office uses a high-speed Ethernet network, not wireless. Today, the employee is working in the office and cannot see the office network login screen. Employees in neighboring offices report no problems. Which would be the first step to troubleshoot this issue?",
      "options": [
        "Change the employee's password",
        "Check that DHCP is enabled",
        "Check that the wireless card has an IP address",
        "Check that the Ethernet cable is connected properly"
      ],
      "correct": 3,
      "explanation": "Check the physical connection first. The wireless card is not involved, and a password does not affect network connectivity."
    },
    {
      "id": "dcm-152",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Headsets and microphones: On a system with multiple microphones, different apps can default to different microphones.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Each app can use a different microphone."
    },
    {
      "id": "dcm-153",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Headsets and microphones: All apps on a system will default to using the same output for audio.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Different apps can use different outputs, for example speakers for one and a headset for another."
    },
    {
      "id": "dcm-154",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "A USB headset may work with a built-in Windows class driver even when no separate vendor driver package has been installed.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "A compatible built-in driver still exists in this scenario. Working without a vendor package is not the same as working without any driver."
    },
    {
      "id": "dcm-155",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Reset this PC always preserves personal files, regardless of the reset option selected.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Keep my files preserves personal files while removing apps/settings; Remove everything removes personal files as well."
    },
    {
      "id": "dcm-156",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Operating system troubleshooting: Safe Mode can be loaded with network connectivity.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Safe Mode with Networking is available."
    },
    {
      "id": "dcm-157",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Operating system troubleshooting: To roll back an operating system to a state before an app caused instability, one should boot into Safe Mode.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "To roll back to a state before the instability, boot to the Last Known Good Configuration."
    },
    {
      "id": "dcm-158",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A monitor is not displaying anything on a desktop device. What should a technician do first to troubleshoot the situation?",
      "options": [
        "Restart the computer.",
        "Plug in a different monitor.",
        "Connect to the computer remotely.",
        "Make sure the monitor is on and connected properly to the computer."
      ],
      "correct": 3,
      "explanation": "Check that the monitor is on and properly connected before trying other steps."
    },
    {
      "id": "dcm-159",
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "You are a new technician trying to find out why a scanner is having intermittent issues reading documents and transmitting results. Match the area to go to with its role in finding a solution.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Device Manager"
        },
        {
          "id": "i2",
          "text": "Manufacturer's website"
        },
        {
          "id": "i3",
          "text": "Web search"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A new driver is needed",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Check whether Windows detects the scanner and reports a device/driver error",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "More information on the problem is needed",
          "correctItemId": "i3"
        }
      ],
      "explanation": "New drivers come from the manufacturer's website, a web search provides more information about the problem, and Device Manager confirms the device can see the scanner."
    },
    {
      "id": "dcm-160",
      "chapter": "management-depanare",
      "type": "single",
      "question": "What is the first step for troubleshooting issues on a computing device?",
      "options": [
        "Gathering information to describe the issue(s)",
        "Knowing where to escalate the issue",
        "Identifying troubleshooting tools",
        "Research how to remedy issues"
      ],
      "correct": 0,
      "explanation": "An issue must be defined before it can be remedied or escalated, so gather information first."
    },
    {
      "id": "dcm-161",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Ethernet file transfers keep slowing down or being interrupted. Could this hardware be a source of the problem? The Ethernet cable could be faulty and a new cable should be tried.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "A faulty cable can cause slow or interrupted transfers."
    },
    {
      "id": "dcm-162",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Ethernet file transfers keep slowing down or being interrupted. Could this hardware be a source of the problem? The port on the person's device or any port used in the connection to the network switch could be faulty.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Faulty ports can cause intermittent connectivity."
    },
    {
      "id": "dcm-163",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Ethernet file transfers keep slowing down or being interrupted. Could this hardware be a source of the problem? The network switch is suffering intermittent power outages.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Intermittent switch power loss can interrupt network links and file transfers. Inspect the switch power supply and event history."
    },
    {
      "id": "dcm-164",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Ethernet file transfers keep slowing down or being interrupted. Could this hardware be a source of the problem? The network switch needs a driver update.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Network switches do not need driver updates."
    },
    {
      "id": "dcm-165",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "A portable camera uses a USB-C cable but the laptop cannot see it and it does not show in Device Manager. What should be done next? Update the driver for the camera.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "A driver update will not help if the device is not detected at all."
    },
    {
      "id": "dcm-166",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "A portable camera uses a USB-C cable but the laptop cannot see it and it does not show in Device Manager. What should be done next? Try a different USB-C cable.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "The most likely problem is the cable, so try a new one."
    },
    {
      "id": "dcm-167",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "A portable camera uses a USB-C cable but the laptop cannot see it and it does not show in Device Manager. What should be done next? Reboot the device.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Rebooting will often result in the same problem."
    },
    {
      "id": "dcm-168",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "A portable camera uses a USB-C cable but the laptop cannot see it and it does not show in Device Manager. What should be done next? Get a USB-C to USB-A adapter.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "An adapter will not fix a faulty cable."
    },
    {
      "id": "dcm-169",
      "chapter": "management-depanare",
      "type": "single",
      "question": "An employee is unable to make a connection to a wireless network within an office. Others in the employee's vicinity can connect to the same network. What should a technician do first to troubleshoot the issue?",
      "options": [
        "Make sure the authentication information for the wireless network is correct",
        "Forget any existing wireless networks on the device",
        "Run ipconfig /reset on the device",
        "Make sure the wireless card is enabled"
      ],
      "correct": 3,
      "explanation": "Check first that the wireless card is enabled; then verify the authentication information."
    },
    {
      "id": "dcm-170",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A help desk operator has spent an hour trying to diagnose why an operations manager cannot access Dynamics 365 to perform day-to-day tasks. What should the help desk operator do next?",
      "options": [
        "Escalate the issue",
        "Call the app vendor to get help on troubleshooting the issue",
        "Abandon the issue",
        "Continue to try to troubleshoot the issue"
      ],
      "correct": 0,
      "explanation": "When a critical issue cannot be solved, it should be escalated. Calling the vendor is only appropriate after escalation."
    },
    {
      "id": "dcm-171",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Device Manager: Device Manager can be used to update drivers on hardware.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Device Manager updates and rolls back drivers."
    },
    {
      "id": "dcm-172",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Device Manager: Device Manager can be used to update features on hardware.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Device Manager updates drivers, not hardware features."
    },
    {
      "id": "dcm-173",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Device Manager: Device Manager shows the devices that are disabled on a system.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Disabled devices are shown in Device Manager."
    },
    {
      "id": "dcm-174",
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "Match each troubleshooting tool with the issue it will solve.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Safe Mode"
        },
        {
          "id": "i2",
          "text": "Advanced Startup"
        },
        {
          "id": "i3",
          "text": "Rollback"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Issue caused by an update to the operating system",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Need to access Windows recovery tools or UEFI firmware settings from the recovery menu",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Erratic behavior after installing a new driver",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Advanced Startup provides recovery/startup tools and, on supported systems, access to UEFI settings. Firmware updates use manufacturer-specific tools, not Advanced Startup alone."
    },
    {
      "id": "dcm-175",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Compatibility: The Compatibility Troubleshooter can help determine compatibility issues within an app.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "The Compatibility Troubleshooter detects and fixes compatibility problems."
    },
    {
      "id": "dcm-176",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Compatibility: Some apps can be run in Compatibility Mode to be compatible with a newer operating system.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Compatibility Mode lets older apps run on newer Windows."
    },
    {
      "id": "dcm-177",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Compatibility: Apps cannot be run at a lower screen resolution than intended.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Apps can be run at a lower screen resolution than intended."
    },
    {
      "id": "dcm-178",
      "chapter": "management-depanare",
      "type": "single",
      "question": "What is the first thing to check on a laptop when troubleshooting an external power issue?",
      "options": [
        "Device Manager",
        "Power cables",
        "BIOS",
        "Battery"
      ],
      "correct": 1,
      "explanation": "Check that all power cables are plugged in securely and the outlet works. The battery is an internal power source, and the BIOS does not control external power."
    },
    {
      "id": "dcm-179",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A wireless mouse works reliably near the laptop, but becomes unreliable at the far end of a conference room. The battery is new and the receiver is unobstructed. What is the most likely cause?",
      "options": [
        "Battery weakness",
        "Wrong driver on mouse",
        "The mouse is turned off",
        "Distance from the mouse to the device"
      ],
      "correct": 3,
      "explanation": "The increasing distance can exceed the reliable radio range in that environment. Range depends on hardware, obstacles and interference; low batteries can also cause intermittent faults in other scenarios."
    },
    {
      "id": "dcm-180",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Files and folders can be backed up to a cloud storage service that supports backup or versioned copies.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Un serviciu adecvat poate păstra copii în cloud; sincronizarea simplă nu înlocuiește automat un backup cu versiuni."
    },
    {
      "id": "dcm-181",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Credential Manager can back up supported saved Windows credentials to a protected backup file.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Credential Manager oferă backup pentru credențialele Windows acceptate. Nu reprezintă o copie universală a tuturor parolelor sau cheilor."
    },
    {
      "id": "dcm-182",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Files and folders can be backed up to physical media such as an external hard drive.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Backup-ul poate folosi HDD/SSD extern sau alt suport adecvat. Protejează copia și testează restaurarea."
    },
    {
      "id": "dcm-183",
      "chapter": "management-depanare",
      "type": "single",
      "question": "Print jobs are stuck and you have identified the Windows 10 Print Spooler service as the cause. What should you try first?",
      "options": [
        "Restart the Print Spooler service",
        "Delete the user account",
        "Format the system drive",
        "Change the screen resolution"
      ],
      "correct": 0,
      "explanation": "Repornește serviciul Print Spooler. Dacă problema persistă, oprește serviciul, golește coada conform procedurii autorizate și pornește-l din nou."
    },
    {
      "id": "dcm-184",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "By default, Domain Admins are members of the local Administrators group on domain-joined Windows member servers.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "În configurația implicită, Domain Admins au privilegii administrative pe serverele membre. Politicile modificate, ACL-urile și criptarea pot limita anumite operații; nu înseamnă acces necondiționat la orice fișier."
    },
    {
      "id": "dcm-185",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Domain administrators can create domain user accounts and assign appropriate group memberships and permissions.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Administratorii domeniului pot administra utilizatori și drepturi în Active Directory, conform politicii organizației."
    },
    {
      "id": "dcm-186",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Every user in the Domain Admins group is automatically exempt from account lockout policies.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Apartenența la Domain Admins nu oferă tuturor conturilor o excepție de la lockout. Contul Administrator încorporat are comportament separat, dependent de politică și versiune."
    },
    {
      "id": "dcm-187",
      "chapter": "instalare-config",
      "type": "single",
      "question": "In Windows 10 Display settings, which option changes the size of text, apps, and other items?",
      "options": [
        "Scale",
        "Display resolution",
        "Display orientation",
        "Refresh rate"
      ],
      "correct": 0,
      "explanation": "Scale modifică dimensiunea elementelor. Rezoluția modifică numărul de pixeli; orientarea modifică rotația afișajului.",
      "image": "assets/device-config/pdf-108-display-scale.png"
    },
    {
      "id": "dcm-188",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Windows Update can offer device drivers supplied by hardware manufacturers, not only drivers authored by Microsoft.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Actualizările driverelor pot proveni de la producători și pot fi distribuite prin Windows Update."
    },
    {
      "id": "dcm-189",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "A Windows feature update can include security improvements as well as new or changed features.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Feature updates pot include îmbunătățiri de securitate. Nu trebuie confundate cu actualizările lunare de securitate."
    },
    {
      "id": "dcm-190",
      "chapter": "instalare-config",
      "type": "true_false",
      "question": "Historically, Windows service packs combined multiple updates, fixes, and patches into one package.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Service packs sunt pachete cumulative istorice. Windows 10 folosește modelul de feature/quality updates, nu service packs tradiționale."
    },
    {
      "id": "dcm-191",
      "chapter": "instalare-config",
      "type": "single",
      "question": "You must perform a clean Windows 10 installation on a new computer with one blank internal drive. How should you prepare a USB installation medium?",
      "options": [
        "Use the Media Creation Tool on another working PC to create a bootable USB drive of at least 8 GB",
        "Copy a shortcut to Windows onto the USB drive",
        "Create a restore point on the blank internal drive",
        "Save an ISO filename in a text file"
      ],
      "correct": 0,
      "explanation": "Pe alt PC funcțional, Media Creation Tool poate crea stickul USB bootabil. Salvează datele de pe stick înainte: crearea mediului poate șterge conținutul."
    },
    {
      "id": "dcm-192",
      "chapter": "instalare-config",
      "type": "drag_drop",
      "question": "Match each Windows user-profile type to its description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Mandatory profile"
        },
        {
          "id": "i2",
          "text": "Local profile"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Preconfigured profile whose user changes are discarded at sign-out",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Profile stored on the particular computer where it is used",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Mandatory este un tip de profil, nu un tip de cont. Local profile este păstrat pe calculatorul respectiv."
    },
    {
      "id": "dcm-193",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each connector to the signal it normally carries. Items may be reused.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Audio only"
        },
        {
          "id": "i2",
          "text": "Video only"
        },
        {
          "id": "i3",
          "text": "Audio and video"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "DisplayPort",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "VGA",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "HDMI",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Optical S/PDIF (TOSLINK)",
          "correctItemId": "i1"
        }
      ],
      "explanation": "DisplayPort și HDMI pot transmite audio și video; VGA transmite video analogic; S/PDIF optic transmite audio digital."
    },
    {
      "id": "dcm-194",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A webcam companion app will not install from Microsoft Store. You suspect a corrupted Store cache, not a webcam driver problem. Which tool should you try?",
      "options": [
        "Device Manager",
        "wsreset.exe",
        "Task Manager",
        "Installed Apps"
      ],
      "correct": 1,
      "explanation": "wsreset.exe resetează cache-ul Microsoft Store. Device Manager ar fi potrivit pentru o problemă de dispozitiv sau driver, nu pentru acest simptom specific."
    },
    {
      "id": "dcm-195",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Third-party desktop application installers cannot modify the Windows Registry.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Instalatoarele pot modifica Registry în limita permisiunilor procesului. Modificările system-wide pot solicita elevare UAC."
    },
    {
      "id": "dcm-196",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Deleting a desktop shortcut automatically uninstalls the third-party application it points to.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Ștergerea scurtăturii elimină numai legătura. Folosește dezinstalarea aplicației pentru a o elimina."
    },
    {
      "id": "dcm-197",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What is a main purpose of Microsoft Authenticator?",
      "options": [
        "Provide authentication codes and sign-in approvals for supported accounts",
        "Replace Device Manager",
        "Format storage devices",
        "Create disk partitions"
      ],
      "correct": 0,
      "explanation": "Authenticator oferă metode de autentificare pentru conturi și servicii acceptate. Nu înlocuiește automat autentificarea Windows pe orice PC."
    },
    {
      "id": "dcm-198",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Microsoft Authenticator can generate TOTP codes for supported non-Microsoft services.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Poate gestiona coduri TOTP și pentru servicii non-Microsoft care acceptă acest standard."
    },
    {
      "id": "dcm-199",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Microsoft Authenticator requires an active Internet connection to generate every TOTP verification code.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Codurile TOTP se generează local, după configurare, folosind secretul și ora dispozitivului. Aprobările push necesită conectivitate."
    },
    {
      "id": "dcm-200",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Every Microsoft Authenticator push sign-in is always approved with one tap and never requires number matching or device verification.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Number matching și verificarea PIN/biometrică pot face parte din flux. Nu considera universală aprobarea cu un singur tap."
    },
    {
      "id": "dcm-201",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A Level 1 technician diagnoses a broken screen on a dropped laptop used at home and in the office. Hardware replacement is outside the technician’s authorization. What should the technician do?",
      "options": [
        "Permanently replace the laptop with a desktop monitor",
        "Reject the ticket without documenting it",
        "Document the diagnosis and escalate to the authorized Level 2 hardware team",
        "Ignore the user"
      ],
      "correct": 2,
      "explanation": "Documentează diagnosticul și escaladează către echipa autorizată. Nivelul de suport nu stabilește universal atribuțiile; scenariul precizează limita autorizării."
    },
    {
      "id": "dcm-202",
      "chapter": "acces-date",
      "type": "single",
      "question": "Using File Explorer, a user copies NTFS files protected by EFS to a FAT32 external drive and confirms decryption when prompted. What happens to the original NTFS permissions and EFS encryption on the destination copies?",
      "options": [
        "Both are retained",
        "Permissions remain but encryption is lost",
        "Encryption remains but permissions are lost",
        "Neither NTFS permissions nor EFS encryption is retained"
      ],
      "correct": 3,
      "explanation": "FAT32 nu acceptă ACL-uri NTFS sau EFS. Copiile confirmate sunt necriptate. Criptarea independentă în conținut, ca un ZIP criptat, este alt caz."
    },
    {
      "id": "dcm-203",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match the minimum listed basic NTFS permission to each action. Assume inherited permissions are not blocked and no Deny entry applies.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Write"
        },
        {
          "id": "i2",
          "text": "Modify"
        },
        {
          "id": "i3",
          "text": "Read & execute"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Create a new subfolder",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Delete an existing subfolder",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Run an executable application",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Write permite creare/scriere; Modify adaugă ștergerea; Read & execute permite executarea. Permisiunile avansate pot configura separat aceste operații."
    },
    {
      "id": "dcm-204",
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "Match each Windows network troubleshooting action to its purpose.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ipconfig"
        },
        {
          "id": "i2",
          "text": "ipconfig /flushdns"
        },
        {
          "id": "i3",
          "text": "Check the Ethernet cable"
        },
        {
          "id": "i4",
          "text": "Check that Wi-Fi is enabled"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display the basic IP configuration",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Clear the DNS resolver cache",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Verify a wired physical connection",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Verify that the wireless adapter is enabled",
          "correctItemId": "i4"
        }
      ],
      "explanation": "ipconfig afișează configurația, iar ipconfig /flushdns golește cache-ul DNS. Verificarea fizică depinde de conexiunea Ethernet sau Wi-Fi."
    },
    {
      "id": "dcm-205",
      "chapter": "instalare-config",
      "type": "single",
      "question": "Which Windows 10 Pro account type is used to authenticate to an Active Directory domain and access authorized domain resources?",
      "options": [
        "Local administrator account",
        "Local standard account",
        "Domain account",
        "Personal Microsoft account"
      ],
      "correct": 2,
      "explanation": "Un cont de domeniu este administrat în Active Directory și poate accesa resursele permise ale domeniului."
    },
    {
      "id": "dcm-206",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "Ordinary system RAM is non-volatile and retains its contents when power is removed.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "RAM obișnuită este volatilă; datele se pierd la întreruperea alimentării."
    },
    {
      "id": "dcm-207",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "For typical random-access workloads, an HDD generally has lower access latency than an SSD.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Un SSD are de regulă latență mai mică decât un HDD mecanic, pentru acces aleator. Performanța exactă depinde de dispozitiv și workload."
    },
    {
      "id": "dcm-208",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "SSDs, HDDs, and USB flash drives are examples of physical storage devices.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Toate sunt suporturi fizice de stocare nevolatilă."
    },
    {
      "id": "dcm-209",
      "chapter": "instalare-config",
      "type": "single",
      "question": "Which category in Windows 10 Settings contains Narrator settings?",
      "options": [
        "Accessibility (Windows 11 category name)",
        "Apps",
        "Personalization",
        "Ease of Access"
      ],
      "correct": 3,
      "explanation": "Windows 10 folosește Ease of Access. În Windows 11 categoria se numește Accessibility."
    },
    {
      "id": "dcm-210",
      "chapter": "management-depanare",
      "type": "single",
      "question": "After a Windows feature upgrade, a user installs a new app. The user now wants to go back to the previous Windows version and guarantees that this newly installed app will remain installed. Which listed option guarantees BOTH requirements?",
      "options": [
        "Go back",
        "System Restore",
        "System Image Recovery using an image from before the upgrade",
        "Reset this PC",
        "None of these options guarantees both requirements"
      ],
      "correct": 4,
      "explanation": "Go back elimină aplicațiile și driverele instalate după upgrade. Celelalte opțiuni nu garantează simultan versiunea anterioară și păstrarea aplicației noi. Salvează datele și pregătește reinstalarea aplicației."
    },
    {
      "id": "dcm-211",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "System Restore always preserves every current system setting unchanged.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "System Restore poate readuce setări de sistem, Registry, drivere și aplicații la starea unui restore point. Nu este backup pentru documentele personale."
    },
    {
      "id": "dcm-212",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Every Windows setting change is immediately backed up to OneDrive automatically.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "OneDrive sincronizează fișiere configurate. Backup/sincronizarea unor setări este o funcție separată și nu acoperă fiecare modificare imediat."
    },
    {
      "id": "dcm-213",
      "chapter": "instalare-config",
      "type": "drag_drop",
      "question": "Match each account type to its description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Domain account"
        },
        {
          "id": "i2",
          "text": "Guest account"
        },
        {
          "id": "i3",
          "text": "Microsoft account"
        },
        {
          "id": "i4",
          "text": "Local account"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Managed by Active Directory in an organization’s domain",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Limited visitor account, normally disabled by default",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Personal cloud identity used for supported Microsoft services",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Identity created and stored on a particular computer",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Tipul identității și nivelul de privilegii sunt concepte distincte: un cont local sau Microsoft poate fi standard sau administrator."
    },
    {
      "id": "dcm-214",
      "chapter": "instalare-config",
      "type": "single",
      "question": "On Windows 10 Home, which account privilege level is needed to authorize administrative changes to protected system settings?",
      "options": [
        "Personal Microsoft account regardless of privileges",
        "Standard user without elevation",
        "Domain user account",
        "Administrator user account"
      ],
      "correct": 3,
      "explanation": "Sunt necesare privilegii administrative. Nu orice fișier de sistem poate fi modificat direct: există ACL-uri, protecția TrustedInstaller și UAC."
    },
    {
      "id": "dcm-215",
      "chapter": "instalare-config",
      "type": "single",
      "question": "Where can a Windows 10 user view detailed display information and select an available refresh rate?",
      "options": [
        "Device Manager",
        "Advanced display settings",
        "Ease of Access",
        "Gaming"
      ],
      "correct": 1,
      "explanation": "Advanced display settings oferă informații și opțiuni pentru rata de reîmprospătare, în funcție de versiune. Rezoluția se schimbă pe pagina principală Display."
    },
    {
      "id": "dcm-216",
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "Match each Event Viewer Windows log to the event type it normally contains.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Application"
        },
        {
          "id": "i2",
          "text": "Security"
        },
        {
          "id": "i3",
          "text": "Setup"
        },
        {
          "id": "i4",
          "text": "System"
        },
        {
          "id": "i5",
          "text": "Forwarded Events"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Events written by applications, such as an application crash",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Audited sign-in and security-related events when auditing is configured",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Windows setup or servicing events",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Operating-system components and service/driver events",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Events collected from other computers by event forwarding",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Nu există un singur jurnal pentru toate erorile. Alegerea depinde de componenta afectată; în enunțul original lipsea contextul.",
      "image": "assets/device-config/pdf-110-event-viewer.png"
    },
    {
      "id": "dcm-217",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "A computer’s supported RAM capacity and speed depend on motherboard support as well as CPU and platform limits.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Placa de bază, procesorul, tipul RAM, firmware-ul și sistemul de operare pot impune limite. ROM din nota originală a fost interpretat ca RAM."
    },
    {
      "id": "dcm-218",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "You can directly replace an Intel desktop CPU with an AMD desktop CPU on the same Intel-compatible motherboard.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Intel și AMD folosesc platforme, socket-uri și chipset-uri diferite; o astfel de înlocuire directă nu este compatibilă."
    },
    {
      "id": "dcm-219",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "PC BIOS/UEFI firmware is stored in non-volatile memory on the motherboard.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Firmware-ul este păstrat în memorie nevolatilă pe placa de bază. Configurația poate fi păstrată în CMOS/NVRAM, în funcție de platformă."
    },
    {
      "id": "dcm-220",
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "Match each ipconfig command to its function.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ipconfig"
        },
        {
          "id": "i2",
          "text": "ipconfig /all"
        },
        {
          "id": "i3",
          "text": "ipconfig /renew"
        },
        {
          "id": "i4",
          "text": "ipconfig /release"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display basic IP address, subnet mask, and gateway information",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Display detailed adapter configuration",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Request renewal of a DHCP lease",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Release a DHCP-assigned address",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Comenzile /renew și /release se folosesc pentru adaptoare configurate prin DHCP. Nota originală nu preciza operația cerută; s-a creat un exercițiu de asociere."
    },
    {
      "id": "dcm-221",
      "chapter": "management-depanare",
      "type": "single",
      "question": "What is the primary purpose of the Windows Registry?",
      "options": [
        "Store system and application configuration data",
        "Store all user documents",
        "Replace RAM",
        "Control the physical monitor cable"
      ],
      "correct": 0,
      "explanation": "Windows Registry este o bază ierarhică de date pentru configurarea sistemului și a aplicațiilor."
    },
    {
      "id": "dcm-222",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "A DVI plug fits directly into a VGA port without an adapter.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "DVI și VGA au forme și semnale diferite. Un adaptor potrivit depinde de tipul DVI și de suportul analogic/digital."
    },
    {
      "id": "dcm-223",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "A USB-C plug fits directly into a USB-A port without an adapter.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "USB-C și USB-A au forme diferite; este necesar un cablu sau adaptor cu conectorii potriviți."
    },
    {
      "id": "dcm-224",
      "chapter": "aplicatii-periferice",
      "type": "true_false",
      "question": "A USB 3.0 Standard-A plug can physically connect to a USB 1.1 Standard-A receptacle without a shape adapter.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "Conectorii Standard-A sunt compatibili fizic; comunicația folosește viteza comună acceptată, dacă dispozitivul și cerințele de alimentare sunt compatibile. Versiunea USB nu definește singură forma conectorului."
    },
    {
      "id": "dcm-225",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "A personal Microsoft account is required for every Windows Hello facial-recognition setup.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Windows Hello poate fi folosit și cu alte tipuri de conturi acceptate, în funcție de configurație și politici. Nu este obligatoriu un cont Microsoft personal în toate cazurile."
    },
    {
      "id": "dcm-226",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "Windows Hello facial recognition requires a compatible infrared (IR) camera.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "O cameră web RGB obișnuită nu este suficientă pentru Windows Hello Face; este necesar hardware IR compatibil."
    },
    {
      "id": "dcm-227",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A Windows 10 desktop app is not responding. In Task Manager, which tab and action should you use to terminate the app?",
      "options": [
        "Performance → change the graph",
        "Startup → disable the app for next boot",
        "Processes → select the app → End task",
        "App history → clear usage history"
      ],
      "correct": 2,
      "explanation": "Processes → End task poate închide aplicația blocată. Datele nesalvate pot fi pierdute. Startup controlează pornirea viitoare, nu închiderea procesului curent."
    },
    {
      "id": "dcm-228",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each Microsoft service to its description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Microsoft 365"
        },
        {
          "id": "i2",
          "text": "OneNote"
        },
        {
          "id": "i3",
          "text": "SharePoint"
        },
        {
          "id": "i4",
          "text": "Windows 365"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A suite of productivity applications and cloud services",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A digital notebook organized into notebooks, sections, and pages",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Sites and document libraries for collaboration across an organization",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "A Cloud PC service that streams a Windows desktop to supported devices",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Microsoft 365 provides productivity apps and services. OneNote organizes notes like a tabbed notebook. SharePoint hosts collaborative sites and document libraries. Windows 365 provides a hosted Windows Cloud PC accessible from supported clients or a web browser."
    },
    {
      "id": "dcm-230",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "NTFS has a maximum individual file size of only 4 GiB.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Limita de aproximativ 4 GiB per fișier aparține FAT32; NTFS permite fișiere mult mai mari, în limitele implementării și volumului."
    },
    {
      "id": "dcm-231",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "A standard FAT32 volume with 512-byte logical sectors can have a size of 32 TB.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Cu sectoare logice de 512 bytes, limita adresării FAT32 este de aproximativ 2 TiB. Nu confunda limita volumului, limita fișierului și limita instrumentului de formatare."
    },
    {
      "id": "dcm-232",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "exFAT is often suitable for flash storage and supports individual files larger than 4 GiB.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 0,
      "explanation": "exFAT este potrivit frecvent pentru suporturi flash și fișiere mari, dacă toate dispozitivele îl acceptă. Afirmația 256 TB nu a fost tratată ca limită universală."
    },
    {
      "id": "dcm-234",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Disk Management is the standard Windows tool for deleting temporary files to free disk space.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "correct": 1,
      "explanation": "Folosește Storage Sense sau Disk Cleanup pentru fișiere temporare. Disk Management gestionează volumele, nu curățarea obișnuită a fișierelor."
    },
    {
      "id": "dcm-235",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Identify the connector shown in the diagram.",
      "image": "assets/device-connectors/port-01.svg",
      "imageAlt": "Technical front-view diagram of a connector to identify.",
      "options": [
        "VGA (DE-15)",
        "HDMI Type A",
        "DisplayPort",
        "USB Type A"
      ],
      "correct": 0,
      "explanation": "The connector has three rows of five contacts and side screw fittings, characteristic of VGA (DE-15). VGA carries analog video, not audio."
    },
    {
      "id": "dcm-236",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Identify the connector shown in the diagram.",
      "image": "assets/device-connectors/port-02.svg",
      "imageAlt": "Technical front-view diagram of a connector to identify.",
      "options": [
        "VGA (DE-15)",
        "HDMI Type A",
        "DisplayPort",
        "USB Type A"
      ],
      "correct": 1,
      "explanation": "The illustrated Type A HDMI connector has the characteristic symmetrical trapezoidal outline. HDMI carries digital video and audio."
    },
    {
      "id": "dcm-237",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Identify the connector shown in the diagram.",
      "image": "assets/device-connectors/port-03.svg",
      "imageAlt": "Technical front-view diagram of a connector to identify.",
      "options": [
        "VGA (DE-15)",
        "HDMI Type A",
        "DisplayPort",
        "USB Type A"
      ],
      "correct": 2,
      "explanation": "The full-size DisplayPort connector has a largely rectangular outline with one beveled corner. DisplayPort carries digital video and audio."
    },
    {
      "id": "dcm-238",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Identify the connector shown in the diagram.",
      "image": "assets/device-connectors/port-04.svg",
      "imageAlt": "Technical front-view diagram of a connector to identify.",
      "options": [
        "VGA (DE-15)",
        "HDMI Type A",
        "DisplayPort",
        "USB Type A"
      ],
      "correct": 3,
      "explanation": "The rectangular USB Type A connector is typically used for peripherals and storage; supported data rates and power depend on the USB implementation."
    },
    {
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match each malware type to its definition.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Logic bomb"
        },
        {
          "id": "i2",
          "text": "Ransomware"
        },
        {
          "id": "i3",
          "text": "Trojan horse"
        },
        {
          "id": "i4",
          "text": "Worm"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Self-replicating malware that can spread between systems without attaching itself to a host file",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Makes data inaccessible and demands payment or another condition for recovery",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Malicious software disguised as a legitimate or useful program",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Malicious code activated by a specified condition or trigger",
          "correctItemId": "i1"
        }
      ],
      "explanation": "A worm self-replicates; ransomware demands a ransom, often after encrypting files; a Trojan masquerades as legitimate software; and a logic bomb activates when a predefined condition is met. A virus, unlike a worm, attaches to a host file or program.",
      "id": "dcm-239"
    },
    {
      "id": "dcm-240",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A Windows file server named FS1 shares D:\\Projects\\Training as Training. The exhibit shows the permissions effective for your account. Assume no additional group grants or Deny entries. Drag Yes or No to each statement. Items may be reused.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "You can open a subfolder through \\\\FS1\\Training.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "You can create a subfolder through \\\\FS1\\Training.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "You can create a subfolder in D:\\Projects\\Training during a Remote Desktop session on FS1.",
          "correctItemId": "no"
        }
      ],
      "explanation": "Over SMB, both share and NTFS permissions apply, so Read share permissions do not allow folder creation. During Remote Desktop access to a local path, share permissions do not apply, but NTFS Read & Execute still does not grant Write/Create folders.",
      "image": "assets/device-connectors/training-permissions.svg",
      "imageAlt": "Training folder permissions: NTFS Read & Execute, List folder contents, and Read allowed; share Read allowed; no Write or Change grant."
    },
    {
      "id": "dcm-241",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate these statements about Active Directory Domain Services. Drag Yes or No to each statement. Items may be reused.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A domain user can use the same domain identity to authenticate to authorized resources across the domain.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Active Directory is the Windows feature that indexes and searches every file on your local computer.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Every domain user can assign their own administrative rights.",
          "correctItemId": "no"
        }
      ],
      "explanation": "Active Directory centralizes identities and access management. Windows Search handles local file indexing. Administrative rights are assigned by authorized administrators and policy, not freely chosen by every user."
    },
    {
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Microsoft Defender Antivirus quarantines an application. After investigation, an authorized administrator verifies that it is safe and that the detection is a false positive. What should the administrator do to recover the application?",
      "options": [
        "Delete the application permanently",
        "Disable all antivirus protection permanently",
        "Restore the verified file from quarantine in Protection history",
        "Change the desktop theme"
      ],
      "correct": 2,
      "explanation": "After validating the file and following organizational policy, an administrator can restore a false-positive item from Protection history. Do not restore an item merely because its publisher claims it is safe, and do not disable antivirus globally.",
      "id": "dcm-242"
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A legacy printer is connected through a USB-to-serial adapter. You need to adjust baud rate, data bits, stop bits, and parity. Which Device Manager category contains the serial port settings?",
      "options": [
        "Print queues",
        "Ports (COM & LPT)",
        "Display adapters",
        "Universal Serial Bus controllers"
      ],
      "correct": 1,
      "explanation": "Serial communication settings are configured on the appropriate COM port under Ports (COM & LPT), typically through Properties > Port Settings. Print queues manage print jobs, not serial framing parameters.",
      "id": "dcm-243",
      "image": "assets/device-connectors/device-manager-serial.svg",
      "imageAlt": "A redrawn Device Manager tree with several device categories, including Ports (COM & LPT)."
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A Windows 10 user wants to share a small file directly with a nearby Windows device over supported wireless connections. Which System setting should the user configure?",
      "options": [
        "Nearby sharing",
        "Display",
        "Projecting to this PC",
        "Remote Desktop"
      ],
      "correct": 0,
      "explanation": "Nearby sharing supports sharing files and links between nearby compatible Windows devices using Bluetooth and/or Wi-Fi, depending on the Windows version and configuration. Projecting to this PC shares a display, and Remote Desktop controls a remote session.",
      "id": "dcm-244"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "The company Wi-Fi SSID is visible, but no employees can connect. Client Wi-Fi is enabled. After confirming that the problem affects the whole wireless network, which listed troubleshooting action is most appropriate?",
      "options": [
        "Check every employee’s Ethernet cable",
        "Run ipconfig /renew on one client only",
        "Check and, if authorized, restart the wireless access point or router",
        "Replace every laptop keyboard"
      ],
      "correct": 2,
      "explanation": "When many clients are affected, investigate shared infrastructure such as the access point, authentication service, and router. An authorized restart may resolve a failed access point; first check status and preserve relevant logs. One client’s DHCP renewal will not repair a network-wide wireless fault.",
      "id": "dcm-245"
    },
    {
      "chapter": "acces-date",
      "type": "single",
      "question": "You are formatting a 4 GB USB drive for the widest practical compatibility with legacy devices, game systems, and non-Windows computers. Which file system should you choose?",
      "options": [
        "exFAT",
        "FAT16",
        "NTFS",
        "FAT32"
      ],
      "correct": 3,
      "explanation": "FAT32 has broad legacy-device support and suits a small removable drive. Its maximum individual file size is 4 GiB minus one byte. exFAT supports much larger files but is not supported by every older device.",
      "id": "dcm-246"
    },
    {
      "chapter": "instalare-config",
      "type": "multiple",
      "question": "A blank 3 TB SSD will be used in a modern Windows 11 device. You need access to the full capacity and a resilient Windows file system. Which partition style and file system should you select? (Choose 2.)",
      "options": [
        "GPT partition style",
        "FAT32 file system",
        "exFAT file system",
        "NTFS file system",
        "MBR partition style"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "GPT supports disks larger than the approximately 2 TiB addressable limit of typical MBR disks with 512-byte sectors and maintains redundant partition metadata. NTFS supports Windows permissions and file-system journaling. These features improve resilience but do not replace backups.",
      "id": "dcm-247"
    },
    {
      "id": "dcm-248",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "Evaluate these statements about Windows 10 update settings. Drag Yes or No to each statement. Items may be reused.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Optional updates can be viewed from Windows Update; the exact link or Advanced options location varies by Windows version.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "For a removable update, the uninstall option can be accessed through Update history and the related uninstall-updates interface.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Pending required updates can install only when active hours have been configured.",
          "correctItemId": "no"
        }
      ],
      "explanation": "Optional-update navigation varies by release. Update history provides a path to uninstall supported updates, although not every update can be removed. Active hours primarily help prevent disruptive automatic restarts; they are not a prerequisite for installing required updates."
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each connector to the most appropriate description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "USB Type-C"
        },
        {
          "id": "i2",
          "text": "VGA"
        },
        {
          "id": "i3",
          "text": "DisplayPort"
        },
        {
          "id": "i4",
          "text": "HDMI"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A reversible connector that can carry power and data; supported features depend on the implementation",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "An analog video connector common on legacy monitors and computers",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A digital display interface commonly used on PC monitors and capable of multi-stream transport on supported systems",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "A digital audio/video interface widely used by televisions, game consoles, computers, and projectors",
          "correctItemId": "i4"
        }
      ],
      "explanation": "USB-C describes a connector shape, not a guaranteed speed or video capability. VGA carries analog video. DisplayPort can support multiple displays through MST when the source and display chain support it. HDMI is widely used for digital audio/video on consumer equipment.",
      "id": "dcm-249"
    },
    {
      "id": "dcm-250",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "Evaluate these statements about installing and rolling back device drivers. Drag Yes or No to each statement. Items may be reused.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "If Windows cannot find an updated driver, no newer compatible driver can exist on the manufacturer’s website.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "When carrying out a clean reinstallation of a corrupted driver, removing the affected device/driver and restarting as required can be appropriate before installing the official replacement.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The Roll Back Driver button lets you choose any historical version of a driver, even if that version is not stored on the computer.",
          "correctItemId": "no"
        }
      ],
      "explanation": "Windows driver search does not cover every vendor release. A clean driver reinstall may involve uninstalling the device or driver package, restarting as instructed, and installing a compatible official package. Roll Back Driver normally restores the previously retained driver, not any arbitrary historical version."
    },
    {
      "id": "dcm-251",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "Evaluate these statements about graphics hardware. Drag Yes or No to each statement. Items may be reused.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A graphics processor renders graphics for output to a display.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "VGA, DVI, HDMI, and DisplayPort are display-output connection standards.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Integrated graphics always has its own dedicated video memory, separate from system RAM.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "Adding a discrete graphics card guarantees a higher CPU clock speed.",
          "correctItemId": "no"
        }
      ],
      "explanation": "Graphics processors render display output. VGA, DVI, HDMI, and DisplayPort are display connection standards. Integrated graphics commonly shares system memory. A discrete GPU can accelerate supported graphics workloads, but it does not guarantee any increase in CPU clock speed."
    },
    {
      "id": "dcm-252",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "On a standard Windows 10 installation, without third-party shell customization, decide whether each desktop-environment item can be configured through supported settings. Drag Yes or No to each statement. Items may be reused.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Replace the Windows logo on the Start button with an arbitrary custom image.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Move an unlocked taskbar to a different edge of the screen.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Change display resolution and orientation to supported values.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "Choose which supported folders appear on Start.",
          "correctItemId": "yes"
        }
      ],
      "explanation": "Windows 10 supports moving an unlocked taskbar, changing supported display modes, and selecting certain folders shown on Start. Built-in settings do not provide an arbitrary Start-button logo replacement. Windows 11 taskbar behavior differs, so the Windows version matters."
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "A print service is stopped on a Windows computer. In Task Manager, where can you locate the service and issue a Start command when authorized?",
      "options": [
        "Processes tab > End task",
        "Startup apps tab > Disable",
        "Performance tab > Open CPU graph",
        "Services tab > right-click the service > Start"
      ],
      "correct": 3,
      "explanation": "Task Manager’s Services tab can display services and expose Start, Stop, and Restart commands when permitted. A stopped Print Spooler service can prevent printing. Ending an application process is not the same as starting a Windows service.",
      "id": "dcm-253"
    },
    {
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "On Windows 11, which Settings category provides the route to Windows Security and Microsoft Defender Antivirus settings?",
      "options": [
        "System",
        "Network & internet",
        "Privacy & security",
        "Windows Update"
      ],
      "correct": 2,
      "explanation": "In Windows 11, open Settings > Privacy & security > Windows Security > Virus & threat protection. Defender Antivirus settings are managed there, subject to organizational policy and the presence of another antivirus provider. Windows Update is not the category for directly configuring antivirus protection.",
      "id": "dcm-254",
      "image": "assets/device-connectors/windows-settings.svg",
      "imageAlt": "Redrawn Windows 11 Settings sidebar showing System, Network & internet, Accessibility, Privacy & security, and Windows Update."
    },
    {
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "Match each switch type to its characteristic forwarding function.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Layer 2 switch"
        },
        {
          "id": "i2",
          "text": "Layer 3 switch"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Forwards Ethernet frames using destination MAC addresses",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Can route packets between IP subnets, in addition to switching frames",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A Layer 2 switch uses MAC addresses for Ethernet forwarding. A Layer 3 switch also provides IP routing, such as routing between VLANs, subject to its capabilities and configuration.",
      "id": "dcm-255"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "Which protocol prevents Layer 2 switching loops by managing redundant Ethernet paths?",
      "options": [
        "DHCP",
        "Spanning Tree Protocol (STP)",
        "NAT",
        "RDP"
      ],
      "correct": 1,
      "explanation": "STP and its variants build a loop-free Layer 2 topology by placing redundant paths into non-forwarding states as needed. DHCP assigns IP configuration, NAT translates addresses, and RDP provides remote desktop access.",
      "id": "dcm-256"
    },
    {
      "chapter": "management-depanare",
      "type": "multiple",
      "question": "Which statements describe normal operation of a modern Ethernet switch? (Choose 2.)",
      "options": [
        "A switch forwards every received frame to every port in all circumstances",
        "A switch uses a MAC address table to select a port for a known destination",
        "A full-duplex switched link can transmit and receive simultaneously",
        "All switch ports belong to one shared collision domain"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "A switch learns source MAC addresses and uses its MAC table to forward known unicast traffic. Modern full-duplex links transmit and receive simultaneously. Unknown unicast and broadcast traffic may be flooded within the relevant VLAN, but not every frame is sent everywhere.",
      "id": "dcm-257"
    },
    {
      "chapter": "management-depanare",
      "type": "multiple",
      "question": "Compared with a hub, which TWO advantages does an Ethernet switch provide? (Choose 2.)",
      "options": [
        "It creates a separate collision domain for each port",
        "It forwards all Ethernet frames based only on the destination IP address",
        "It intelligently forwards known unicast frames using MAC addresses",
        "It operates only in half-duplex mode"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "A hub repeats traffic across one shared collision domain. A switch separates collision domains and selectively forwards known unicast traffic using destination MAC addresses. Layer 2 frame forwarding is not based on destination IP addresses.",
      "id": "dcm-258"
    },
    {
      "id": "dcm-259",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "Evaluate these switch-forwarding statements. Assume ordinary Layer 2 switching within one VLAN, with no special filtering configuration. Drag Yes or No to each statement. Items may be reused.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A known unicast frame is forwarded using the switch’s MAC address table.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "An unknown unicast frame is flooded to other eligible forwarding ports in the same VLAN, except the incoming port.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Broadcast frames are forwarded only to other switches through trunk ports.",
          "correctItemId": "no"
        }
      ],
      "explanation": "Known unicast forwarding uses the MAC address table. Unknown unicast and broadcast traffic is normally flooded to eligible ports in the same VLAN other than the incoming port. Broadcasts can reach access ports as well as eligible trunk ports; VLAN boundaries limit the broadcast domain."
    },
    {
      "id": "dcm-260",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "Evaluate these comparisons of network devices. Drag Yes or No to each statement. Items may be reused.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A Layer 3 switch can perform IP routing, whereas an ordinary Layer 2 switch does not.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A hub creates a separate collision domain for every port.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A managed switch exposes configuration options that an unmanaged switch normally does not.",
          "correctItemId": "yes"
        }
      ],
      "explanation": "Layer 3 switching adds routing capabilities. A hub shares one collision domain rather than separating each port. Managed switches commonly support configuration and monitoring features such as VLANs, port security, and management interfaces."
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "A technician must connect computers within a LAN and needs remote configuration, monitoring, and switched per-port forwarding. Which device best fits these requirements?",
      "options": [
        "Hub",
        "Unmanaged switch",
        "Router without a LAN switch",
        "Managed switch"
      ],
      "correct": 3,
      "explanation": "A managed switch combines Ethernet switching with configurable management and monitoring functions. An unmanaged switch provides switching but lacks the same management controls; a hub repeats traffic over shared media.",
      "id": "dcm-261"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "Which network device primarily forwards IP packets between different networks and uses a routing table to choose the next hop?",
      "options": [
        "Layer 2 switch",
        "Hub",
        "Router",
        "Repeater"
      ],
      "correct": 2,
      "explanation": "A router uses IP routing information to forward packets between networks. It is commonly used to connect a LAN to a WAN. A Layer 2 switch forwards frames within a Layer 2 domain, while hubs and repeaters do not make IP routing decisions.",
      "id": "dcm-262"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "Which option is an example of a wide-area wireless network access technology?",
      "options": [
        "VLAN",
        "Wireless LAN",
        "Cellular 3G, 4G, or 5G",
        "Perimeter network"
      ],
      "correct": 2,
      "explanation": "Cellular networks provide wireless coverage across broad geographic areas. A WLAN is a local wireless network; a VLAN is logical LAN segmentation; a perimeter network is a security architecture rather than a cellular access technology.",
      "id": "dcm-263"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "What is a primary benefit of dynamic routing compared with static routing?",
      "options": [
        "It automatically assigns IP addresses to all clients",
        "It allows routers to update routing information as network conditions change",
        "It automatically splits every LAN into smaller broadcast domains",
        "It always requires less design and configuration in every network"
      ],
      "correct": 1,
      "explanation": "Dynamic routing protocols exchange reachability information and can adapt routes after topology changes. Static routes are explicitly configured. Routing protocols do not replace DHCP, and their design can introduce additional complexity.",
      "id": "dcm-264"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "Which router feature prioritizes selected traffic, such as voice or streaming video, during congestion?",
      "options": [
        "Network Address Translation (NAT)",
        "Port forwarding",
        "Quality of Service (QoS)",
        "A default route"
      ],
      "correct": 2,
      "explanation": "QoS classifies and prioritizes traffic to help manage delay, jitter, and loss under contention. NAT translates addresses, port forwarding redirects inbound connections, and a default route is a fallback forwarding path.",
      "id": "dcm-265"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "How is an ordinary static route added to a router’s routing table?",
      "options": [
        "An administrator or management system explicitly configures the route",
        "OSPF always creates it automatically",
        "A directly connected switch sends a command that always creates it",
        "The router learns it automatically from every neighboring device"
      ],
      "correct": 0,
      "explanation": "A static route is explicitly configured by an administrator or a management system. Routes learned through a dynamic routing protocol are dynamic routes; directly connected routes are derived from interface configuration.",
      "id": "dcm-266"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "Which route is used when no more-specific matching route exists for a packet’s destination?",
      "options": [
        "A dynamic route of any prefix length",
        "A default route",
        "An unrelated directly connected route",
        "A port-forwarding rule"
      ],
      "correct": 1,
      "explanation": "A default route, such as 0.0.0.0/0 for IPv4, is the least-specific fallback. A more-specific matching prefix takes precedence. Port forwarding does not replace the routing table’s destination-prefix selection.",
      "id": "dcm-267"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "What does a typical inbound port-forwarding rule on a home or small-office router do?",
      "options": [
        "Assigns IP addresses to every client",
        "Prioritizes voice traffic",
        "Maps traffic arriving at a specified external port to a designated internal host and port",
        "Prevents Layer 2 switching loops"
      ],
      "correct": 2,
      "explanation": "Port forwarding commonly uses destination NAT to send an inbound connection on a selected external port to a specified internal address and port. The service must also be listening and allowed by the firewall. It is not a substitute for access controls.",
      "id": "dcm-268"
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A copper Ethernet cable must run near machinery that produces substantial electromagnetic interference. Which listed cable includes shielding to help reduce that interference?",
      "options": [
        "UTP Cat5e",
        "UTP Cat6",
        "STP Cat5e",
        "UTP Cat3"
      ],
      "correct": 2,
      "explanation": "STP uses conductive shielding to reduce electromagnetic interference when it is installed and grounded correctly. A higher unshielded category does not inherently add shielding. For especially severe interference, fiber may be a better medium.",
      "id": "dcm-269"
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A network connection must span 8 kilometers. Which listed medium is designed for the longest optical transmission distances?",
      "options": [
        "UTP Cat6",
        "Single-mode fiber-optic cable",
        "STP Cat5e",
        "Multimode fiber-optic cable"
      ],
      "correct": 1,
      "explanation": "Single-mode fiber with suitable optics supports kilometer-scale links. Copper Ethernet channels are normally limited to much shorter distances, commonly 100 meters. Actual supported fiber distance depends on the transceivers, wavelength, and link budget.",
      "id": "dcm-270"
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Without Auto MDI-X, which traditional twisted-pair cable configuration connects a computer’s MDI Ethernet port to a switch’s MDI-X access port?",
      "options": [
        "Crossover",
        "Straight-through",
        "Rollover console cable",
        "Coaxial cable"
      ],
      "correct": 1,
      "explanation": "A traditional computer-to-switch link uses a straight-through cable because the MDI and MDI-X pin assignments complement each other. Auto MDI-X on modern hardware can often accommodate either straight-through or crossover cabling.",
      "id": "dcm-271"
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Two older Ethernet switches have ordinary MDI-X ports and no Auto MDI-X support. Which cable configuration traditionally connects them directly?",
      "options": [
        "Straight-through",
        "Crossover",
        "USB charging cable",
        "Rollover console cable"
      ],
      "correct": 1,
      "explanation": "A crossover cable swaps transmit and receive pairs for a direct legacy connection between like port types, such as MDI-X to MDI-X. A traditional router MDI port connected to a switch MDI-X port normally uses straight-through wiring. Modern Auto MDI-X hardware often handles either cable.",
      "id": "dcm-272"
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "What term describes interference caused by a signal on one wire pair coupling into an adjacent pair within the same cable?",
      "options": [
        "Electromagnetic interference from a nearby motor only",
        "Radio-frequency interference from a distant transmitter only",
        "Crosstalk",
        "Signal interception"
      ],
      "correct": 2,
      "explanation": "Crosstalk is unwanted coupling between nearby circuits or wire pairs. Twisting pairs, maintaining pair geometry, and using suitable cable and termination practices help reduce it. It differs from deliberate signal interception.",
      "id": "dcm-273"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "A switch port connects an ordinary end-user computer and carries untagged traffic for one configured data VLAN. What is this port mode normally called?",
      "options": [
        "Access port",
        "Trunk port",
        "Default-route port",
        "WAN port"
      ],
      "correct": 0,
      "explanation": "An access port normally places an endpoint’s untagged traffic into one assigned VLAN. A trunk carries traffic for multiple VLANs, commonly using tags. Special cases, such as a voice VLAN, do not change the basic distinction.",
      "id": "dcm-274"
    },
    {
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "Match each characteristic to a hub or an Ethernet switch. Items may be reused.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Hub"
        },
        {
          "id": "i2",
          "text": "Switch"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Repeats signals across one shared collision domain",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Operates using half-duplex shared Ethernet behavior",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Separates collision domains by port",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Uses a MAC address table to forward known unicast frames",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A hub repeats signals over shared half-duplex media. A switch learns MAC addresses and separates collision domains; full-duplex switched Ethernet avoids collisions on properly configured point-to-point links.",
      "id": "dcm-275"
    },
    {
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "Match each routing concept to its description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Static route"
        },
        {
          "id": "i2",
          "text": "Dynamic route"
        },
        {
          "id": "i3",
          "text": "Default route"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Explicitly configured by an administrator or management system",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Learned through a routing protocol",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A catch-all route used when no more-specific route matches",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Static versus dynamic describes how a route is obtained. Default describes the least-specific prefix used as a fallback, so a default route itself can be configured statically or learned dynamically.",
      "id": "dcm-276"
    },
    {
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each cable medium to its principal interference characteristic.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Fiber optic"
        },
        {
          "id": "i2",
          "text": "Shielded twisted pair (STP)"
        },
        {
          "id": "i3",
          "text": "Unshielded twisted pair (UTP)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Carries light and is not affected by electromagnetic interference in the data signal",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Uses conductive shielding to help reduce electromagnetic interference",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Has no conductive shielding and relies in part on pair twisting to reduce interference",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Fiber transmits light rather than electrical signals and is immune to EMI in its signal path. STP adds conductive shielding, while UTP relies on balanced signaling and twisted pairs. Correct installation and termination remain important.",
      "id": "dcm-277"
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "A USB printer stopped working after another printer was installed and removed. In Device Manager, the Printers category is not visible. Which action can reveal non-present or hidden device entries for further investigation?",
      "options": [
        "View > Show hidden devices",
        "Action > Add legacy hardware, without investigation",
        "Disable Windows Update permanently",
        "Replace all printers because Windows supports only one"
      ],
      "correct": 0,
      "explanation": "Device Manager’s View > Show hidden devices can reveal hidden or non-present device entries. A missing category alone does not prove a printer conflict, a failed device, or lack of multi-printer support. Also inspect Print queues, drivers, connections, and the Print Spooler as appropriate.",
      "id": "dcm-278",
      "image": "assets/device-connectors/device-manager-hidden.svg",
      "imageAlt": "A simplified Device Manager tree without a visible Printers category."
    },
    {
      "chapter": "management-depanare",
      "type": "single",
      "question": "Which task can a conversational assistant such as Microsoft Copilot perform by providing guidance, without directly changing hardware or system settings?",
      "options": [
        "Physically move files from a flash drive to a hard drive without access to the device",
        "Directly replace the network adapter driver without permissions or a management tool",
        "Generate a list of troubleshooting steps for a printer problem",
        "Automatically change the default browser on every computer without authorization"
      ],
      "correct": 2,
      "explanation": "A conversational assistant can explain concepts and generate troubleshooting guidance. Reading advice is different from authorizing a tool to perform actions. Driver changes, file operations, and default-application changes require appropriate device access, supported tools, and permissions.",
      "id": "dcm-279"
    },
    {
      "id": "dcm-280",
      "chapter": "acces-date",
      "type": "true_false",
      "question": "Persistent Windows Registry settings normally survive a system restart.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "The Registry stores persistent configuration data on disk. An ordinary restart does not erase those settings."
    },
    {
      "id": "dcm-281",
      "chapter": "securitate-dispozitiv",
      "type": "true_false",
      "question": "If Windows Hello facial recognition fails, Windows automatically signs in using a saved password without asking the user.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Failed facial recognition does not bypass authentication. The user must use an allowed fallback, such as a PIN or password, subject to device policy."
    },
    {
      "id": "dcm-282",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Restarting a computer clears the previous runtime contents of ordinary system RAM.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Ordinary RAM is volatile. A normal restart discards the previous runtime memory state and initializes a new operating-system session."
    },
    {
      "id": "dcm-283",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Opening an application generally loads its active code and working data into RAM.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "An application uses RAM for active code and working data. Executable files and other persistent resources remain on storage; not every part of a large application must be loaded at once."
    },
    {
      "id": "dcm-284",
      "chapter": "management-depanare",
      "type": "true_false",
      "question": "Reading data from ordinary system RAM is generally slower than reading it from a hard disk drive.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "RAM normally offers much lower access latency and higher bandwidth than a mechanical hard disk drive. The statement reverses their typical performance relationship."
    },
    {
      "id": "dcm-285",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "FS1 shares D:\\Projects\\Training as Training. The exhibit shows effective NTFS Modify and share Read permissions. Assume no other grants or Deny entries. Choose Yes or No for each action.",
      "explanation": "Network access is limited by both share and NTFS permissions, so share Read blocks creating files. Local access over Remote Desktop uses NTFS permissions, and Modify permits editing.",
      "image": "assets/device-config/pdf-102-training-permissions.png",
      "imageAlt": "training permissions",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Open a file through \\\\FS1\\Training",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Create a file through \\\\FS1\\Training",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Edit a local D:\\Projects\\Training file during a Remote Desktop session on FS1",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "dcm-286",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "A Windows laptop uses an FHD TV as a second display. Show the video on the TV and retain controls on the laptop. Choose the TV native resolution, normal widescreen orientation, and display mode. Assume the taskbar is configured only on the laptop.",
      "explanation": "FHD is 1920×1080; 4K content is downscaled for this TV. Extend permits different content on each display. Taskbar visibility requires a separate setting; Extend alone does not hide the taskbar.",
      "image": "assets/device-config/pdf-103-display-settings.png",
      "imageAlt": "display settings",
      "dragItems": [
        {
          "id": "i1",
          "text": "1920 × 1080"
        },
        {
          "id": "i2",
          "text": "3840 × 2160"
        },
        {
          "id": "i3",
          "text": "Landscape"
        },
        {
          "id": "i4",
          "text": "Portrait"
        },
        {
          "id": "i5",
          "text": "Extend these displays"
        },
        {
          "id": "i6",
          "text": "Duplicate these displays"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "TV resolution",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Orientation",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Display mode",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "dcm-287",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Windows Features is in the Control Panel. Family options let you set screen time limits. Microsoft Store app updates can be done in the Store itself.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Windows Features area is part of the Control Panel.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The Family options area is used to set screen time limits on devices.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Microsoft Store app updates must be done in the Apps & Features area.",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "dcm-065",
        "dcm-066",
        "dcm-067"
      ]
    },
    {
      "id": "dcm-288",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Local administrators can only make changes to the local computer. In Manage Accounts, select the account, choose Change the account type, and select Administrator. Standard users can install apps when the installation does not require administrator-level privileges.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Local administrator accounts can make changes to any computer in a domain.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A Standard User account can be promoted to an Administrator account.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Only administrator accounts can install apps on a device.",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "dcm-041",
        "dcm-042",
        "dcm-043"
      ]
    },
    {
      "id": "dcm-289",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Right-click an empty area of the taskbar, point to Toolbars, and select New Toolbar. The x button closes the window. The minus button minimizes a window to the taskbar; the square button maximizes or restores it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Windows allows a user to add a custom toolbar to the taskbar.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The x button on a window closes the window.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "The square button on a window makes the window available only from the taskbar.",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "dcm-029",
        "dcm-030",
        "dcm-031"
      ]
    },
    {
      "id": "dcm-290",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "A full wipe deletes all data on the device. A remote wipe can delete only the business data. Devices can be wiped automatically after a set number of incorrect sign-in attempts.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Remote wipes can wipe out all the data on a device.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Remote wipes can be set to only remove business data on a device.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Remote wipes are always triggered manually.",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "dcm-134",
        "dcm-135",
        "dcm-136"
      ]
    },
    {
      "id": "dcm-291",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Device Manager updates and rolls back drivers. Device Manager updates drivers, not hardware features. Disabled devices are shown in Device Manager.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Device Manager can be used to update drivers on hardware.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Device Manager can be used to update features on hardware.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Device Manager shows the devices that are disabled on a system.",
          "correctItemId": "i1"
        }
      ],
      "assembledFrom": [
        "dcm-171",
        "dcm-172",
        "dcm-173"
      ]
    },
    {
      "id": "dcm-292",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Additional monitors are set up under Display Settings. The time zone can be changed under Time & language. A personal photo can be set as the desktop background.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Multiple monitors can be configured on a Windows device.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The time zone setting cannot be changed after Windows is installed.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Windows allows a personal photo to be used as a desktop image.",
          "correctItemId": "i1"
        }
      ],
      "assembledFrom": [
        "dcm-026",
        "dcm-027",
        "dcm-028"
      ]
    },
    {
      "id": "dcm-293",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Two-factor authentication needs a password plus another factor, such as a code sent to a smartphone. A smart card is a physical key (possession factor), not a biometric. A strong password has at least eight characters and at least three of the four character types.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A common form of two-factor authentication is to require a password and a code sent as a text message to a registered smartphone.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Smartcards are a form of biometric authentication.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A strong password has at least six characters.",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "dcm-131",
        "dcm-132",
        "dcm-133"
      ]
    },
    {
      "id": "dcm-294",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "/V (verbose) displays detailed group policy information. gpresult /R shows settings on the local computer; a remote computer needs /S computername. gpupdate /force refreshes local and Active Directory-based policies immediately.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "gpresult /V will display detailed group policy information.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "gpresult /R will display group policy settings on a remote computer.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "gpupdate /force refreshes group policy settings on a local computer immediately.",
          "correctItemId": "i1"
        }
      ],
      "assembledFrom": [
        "dcm-138",
        "dcm-139",
        "dcm-140"
      ]
    },
    {
      "id": "dcm-295",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "The Compatibility Troubleshooter detects and fixes compatibility problems. Compatibility Mode lets older apps run on newer Windows. Apps can be run at a lower screen resolution than intended.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Compatibility Troubleshooter can help determine compatibility issues within an app.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Some apps can be run in Compatibility Mode to be compatible with a newer operating system.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Apps cannot be run at a lower screen resolution than intended.",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "dcm-175",
        "dcm-176",
        "dcm-177"
      ]
    },
    {
      "id": "dcm-296",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "UAC elevates a standard user to administrator level for the privileges needed to install an app or change Windows settings. UAC is used both for installing apps and for changing Windows settings. The default UAC setting notifies the user when apps try to make changes to the computer.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The goal of UAC is to elevate a guest user to a standard user level.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "UAC is used only when attempts are made to change Windows settings.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The default UAC setting is to notify a user when apps try to make changes to a computer.",
          "correctItemId": "i1"
        }
      ],
      "assembledFrom": [
        "dcm-111",
        "dcm-112",
        "dcm-113"
      ]
    },
    {
      "id": "dcm-297",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "If a preferred language does not appear in the display language list, its language pack must be installed first. Setup asks for the time zone; it can be changed later under Time & language. An upgrade keeps apps, files and settings and does not format the drive; a Custom installation performs a clean install and deletes everything on the installation drive.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Microsoft Windows supports multiple languages, but may require you to download a language pack.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The installation process prompts you to set the current time zone.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "An Upgrade installation is the same as a Custom installation.",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "dcm-013",
        "dcm-014",
        "dcm-015"
      ]
    },
    {
      "id": "dcm-298",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Users can customize which folders appear in the Start menu under Settings > Personalization > Start. Panoramic photos are available on some hardware, not all. The minus button minimizes a window to the taskbar.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Windows will not allow users to customize icons that appear in the Start menu.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Windows allows users to take panoramic photos using any hardware.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The minus symbol on a Window minimizes a window to the taskbar.",
          "correctItemId": "i1"
        }
      ],
      "assembledFrom": [
        "dcm-023",
        "dcm-024",
        "dcm-025"
      ]
    },
    {
      "id": "dcm-299",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Disk Management can change a drive letter or path. Disk Management can create, delete, extend and shrink volumes. Restore points are created with System Restore, not Disk Management.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Disk Management tool can change a drive letter.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The Disk Management tool can shrink a basic volume.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "The Disk Management tool can create a restore point.",
          "correctItemId": "i2"
        }
      ],
      "assembledFrom": [
        "dcm-146",
        "dcm-147",
        "dcm-148"
      ]
    },
    {
      "id": "dcm-300",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each of the following statements regarding Windows installations, select Yes if the\nstatement is true and No if it is false.",
      "explanation": "Installation files can be hosted on a network share. The default time zone depends on the image, region and deployment configuration. Microsoft accounts are not required for every edition and deployment scenario; organizational and offline enterprise installation methods exist.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An installation can be done through a network share.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The default time zone is the Pacific time zone.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A Microsoft account is required for a Windows installation.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-301",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "In which action with files and folders are permissions retained as those files or\nfolders are moved or copied to a new destination?",
      "explanation": "A normal move within one NTFS volume retains the existing ACL because the file remains on that volume. Copies and cross-volume moves normally inherit destination permissions.",
      "options": [
        "Files and folders are copied to a new partition",
        "Files and folders are moved to a new partition",
        "Files and folders are moved within the same partition",
        "Files and folders are copied within the same partition"
      ],
      "correct": 2
    },
    {
      "id": "dcm-302",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which permission elevation takes place during the use of UAC?",
      "explanation": "UAC elevates a process from standard-user rights to administrative rights after consent or valid administrator credentials; it does not permanently convert a standard account into an administrator.",
      "options": [
        "Standard permissions to administrator accounts",
        "Administrative permissions to standard accounts",
        "Standard permissions to guest accounts",
        "Backup operator permissions to standard accounts"
      ],
      "correct": 0
    },
    {
      "id": "dcm-303",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A new administrator is learning about permissions and shares and the effect file\nmovement has on permissions. For each statement regarding permissions and shares,\nindicate Yes if the statement is True and No if the statement is False.",
      "explanation": "Basic sharing offers limited preset access levels; advanced sharing and NTFS security provide granular permissions. Take ownership is an advanced permission. The Public folder normally makes its shared contents accessible to local users, subject to any explicit restrictions.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Basic shares allow for custom permissions to users and groups.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Take Ownership is an advanced permission.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Files in public shares on a device are available to all accounts on that device.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-304",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A portable camera uses a USB-C cable to connect to a device. A person connects a camera\nto a laptop, but the device cannot see the camera. The camera does not show in Device\nManager. For each of the following actions, indicate Yes if it should be done next to\ntroubleshoot the issue or No if it should not.",
      "explanation": "When no device enumerates, first check a data-capable cable, port and restart. A driver update is not the first fix for a device that is not detected at all, and changing connector shape alone does not establish that the cable or port works.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Update the driver for the camera",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Try a different USB-C cable",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Reboot the device",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "Get an USB-C to USB-A adapter",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-305",
      "chapter": "securitate-dispozitiv",
      "type": "multiple",
      "question": "Which password characteristics are considered to be a secure password requirement for\nBYOD mobile device? (Choose two)",
      "explanation": "Of these traditional password choices, a longer password and a mixture of character categories improve resistance to guessing. A four-digit PIN has a small search space; a one-time token is another authentication factor, not a reusable password policy. Modern guidance favors long unique passphrases and MFA.",
      "options": [
        "A password with lowercase letters, uppercase letters, symbols, and numbers",
        "A four-digit PIN",
        "A one-time token",
        "A password with eight or more characters"
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "dcm-306",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A laptop has two USB-A ports, one USB-C port, and needs to have an external monitor with\nan HDMI port connected to the laptop.\nThe USB-A port has an external drive connected to it.\nAn iPhone, which uses a USB-C cable, needs to be plugged into the laptop on occasion to\nsync files and get charged.\nUsing the dropdown lists, indicate whether the devices chosen will satisfy the\nrequirements for the laptop and its devices.\n\nA USB-A to HDMI adapter will allow the monitor to use its HDMI port and connect the\nUSB-A end to one of the USB-A ports on the laptop. \n[1]\n\n\nThe laptop's owner found a USB-A to USB-C connector. Now, what adapter is needed? \n[2]\n\n\nAn external storage device is typically connected to a computer using? \n[3]",
      "explanation": "USB-A does not provide native HDMI output, but a compatible active USB graphics adapter can supply it. A USB-A-to-C data cable can connect the phone, leaving a video-capable USB-C port for an HDMI adapter. USB-C display output requires appropriate alternate-mode support.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Only by formatting the monitor"
        },
        {
          "id": "i2",
          "text": "Yes, with a compatible active USB graphics adapter and driver"
        },
        {
          "id": "i3",
          "text": "Yes, every passive USB cable outputs video"
        },
        {
          "id": "i4",
          "text": "No USB connection can ever support display output"
        },
        {
          "id": "i5",
          "text": "USB-C to HDMI adapter with video support"
        },
        {
          "id": "i6",
          "text": "USB-A charging-only cable"
        },
        {
          "id": "i7",
          "text": "VGA-to-serial cable"
        },
        {
          "id": "i8",
          "text": "Passive Ethernet splitter"
        },
        {
          "id": "i9",
          "text": "VGA"
        },
        {
          "id": "i10",
          "text": "PS/2"
        },
        {
          "id": "i11",
          "text": "Serial"
        },
        {
          "id": "i12",
          "text": "USB"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-307",
      "chapter": "acces-date",
      "type": "single",
      "question": "After the same weekly full backup, which backup type gives a shorter restore chain on day 4 than using incremental backups?",
      "explanation": "Compared with incremental backup chains after the same weekly full backup, a differential restore needs only the full backup and the latest differential. An incremental restore also needs every intervening incremental.",
      "options": [
        "Mirror",
        "Full",
        "Incremental",
        "Differential"
      ],
      "correct": 3
    },
    {
      "id": "dcm-308",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A new technician is learning about the meaning of permissions with files and folders on\nnetwork drives. What does the Take Ownership permission give someone that is unavailable\nwith other permissions besides Full Control?",
      "explanation": "Taking ownership lets the new owner change the object's discretionary permissions and then grant appropriate access. Ownership alone does not automatically grant read/write access to the content.",
      "options": [
        "The ability to control attributes on a resource",
        "The ability to control permissions of a resource",
        "The ability to write to the resource",
        "The ability to modify a resource"
      ],
      "correct": 1
    },
    {
      "id": "dcm-309",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Using drag and drop, match each troubleshooting tool on the left with the issue it will\nsolve on the right.\n\n : Issue caused by an update to the operating system\n : Need to upgrade the BIOS\n : Erratic behavior after installing a new driver",
      "explanation": "Rollback can undo a problematic update. Firmware is updated using the manufacturer's supported BIOS/UEFI update utility, not merely by entering Advanced Startup. Safe Mode starts with limited drivers to diagnose instability after a driver installation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Rollback"
        },
        {
          "id": "i2",
          "text": "UEFI/BIOS vendor update utility"
        },
        {
          "id": "i3",
          "text": "Safe Mode"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Undo an operating-system update that caused a problem",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Upgrade the BIOS/UEFI firmware",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Diagnose erratic behavior after a new driver",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-310",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A user has connected an external monitor to a laptop and wants span the desktop across\nboth displays. Icons representing each monitor are presented for configuration. Which\noption will cause the laptop monitor to display the left half of the extended desktop?",
      "explanation": "Extend these displays creates one desktop across both monitors. To put the laptop on the left specifically, drag its display rectangle to the left in Display settings; choosing Extend alone does not determine left/right position.",
      "options": [
        "Screen Resolution",
        "Custom Scaling",
        "Extend these displays",
        "Duplicate these displays"
      ],
      "correct": 2
    },
    {
      "id": "dcm-311",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A person recently ran updates on a device and the updates are interfering with a\nfunctionality of an app.\nThe person wants to possibly uninstall these updates.\n\nClick the Windows setting category that will allow the user to view the driver\ninstallation history and possibly uninstall any updates.",
      "explanation": "In Windows 11, Windows Update contains Update history and Uninstall updates. Update & Security is the older Windows 10 category name.",
      "options": [
        "System",
        "Bluetooth & devices",
        "Accessibility",
        "Windows Update"
      ],
      "correct": 3
    },
    {
      "id": "dcm-312",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "You connected an external hard drive to your Windows 11 computer via a USB-C cable.\nHowever, you cannot find the drive in Windows Explorer.\nWhen you open Device Manager, you only see the internal Toshiba disk drive.\n\nWhat should you do to solve this problem? \n[1]",
      "explanation": "Because only the internal disk enumerates, verify the physical connection and drive power before partitioning or assigning a drive letter. Disk Management cannot configure hardware that is not detected.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Format the operating-system volume"
        },
        {
          "id": "i2",
          "text": "Disable all USB controllers permanently"
        },
        {
          "id": "i3",
          "text": "Try a known-good data-capable cable and another USB port, then rescan hardware"
        },
        {
          "id": "i4",
          "text": "Initialize a disk that the operating system cannot detect"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "dcm-313",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "For each statement about motherboards, select True or False.",
      "explanation": "Motherboard firmware and chipset constrain supported RAM, together with the CPU and operating system. Intel and AMD CPUs require compatible sockets/platforms. Firmware settings are held in motherboard nonvolatile storage.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A computer's maximum supported RAM capacity and speed are determined by the motherboard.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "You can upgrade an Intel processor to an AMD processor without changing the motherboard.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "BIOS settings are stored on the motherboard.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-314",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Microsoft Word crashes.\nWhich Event Viewer log should you check for errors?\nSelect the correct option in the answer area.",
      "explanation": "Application records include application crashes and related events, so they are the first log to inspect for a Word failure.",
      "options": [
        "Application",
        "Security",
        "Setup",
        "System",
        "Forwarded Events"
      ],
      "correct": 0
    },
    {
      "id": "dcm-315",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Determine whether each statement describes a Private network or a Public network.\n\nNetwork discovery is turned off to prevent other devices on the network from seeing your\ncomputer. \n[1]\n\nThis network profile is typically used for home or office networks where you trust the\ndevices connected. \n[2]\n\nThis network profile is used when you connect as a guest to a network where you do not\nhave a user account. \n[3]",
      "explanation": "Public profiles disable discovery by default on untrusted networks. Private profiles are intended for trusted home or office networks. Being a guest alone is not a technical requirement, but an untrusted guest hotspot should use Public.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Private"
        },
        {
          "id": "i2",
          "text": "Domain"
        },
        {
          "id": "i3",
          "text": "Public"
        },
        {
          "id": "i4",
          "text": "Domain"
        },
        {
          "id": "i5",
          "text": "Private"
        },
        {
          "id": "i6",
          "text": "Public"
        },
        {
          "id": "i7",
          "text": "Public"
        },
        {
          "id": "i8",
          "text": "Private"
        },
        {
          "id": "i9",
          "text": "Domain"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i7",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ]
    },
    {
      "id": "dcm-316",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "You have lost connection to the Internet. You suspect this has something to do with the\nWi-Fi connection to your router. What are some troubleshooting steps you can take?\nComplete the sentences by selecting the correct option from each drop-down list.\n\nGo to command prompt and \n[1]\n.\nIf the No Internet icon is visible, verify \n[2]\n.\nYou should also try \n[3]\n.",
      "explanation": "ipconfig /all reports addressing and DNS configuration. Check association with the intended wireless network, then reconnect and test the local gateway before investigating external services.",
      "dragItems": [
        {
          "id": "i1",
          "text": "run shutdown /s"
        },
        {
          "id": "i2",
          "text": "run taskkill /im explorer.exe"
        },
        {
          "id": "i3",
          "text": "run ipconfig /all"
        },
        {
          "id": "i4",
          "text": "run format C:"
        },
        {
          "id": "i5",
          "text": "the taskbar color"
        },
        {
          "id": "i6",
          "text": "the Wi-Fi connection to the intended router"
        },
        {
          "id": "i7",
          "text": "the wallpaper image dimensions"
        },
        {
          "id": "i8",
          "text": "the keyboard language only"
        },
        {
          "id": "i9",
          "text": "reconnecting to Wi-Fi and testing the router with ping"
        },
        {
          "id": "i10",
          "text": "deleting every saved document"
        },
        {
          "id": "i11",
          "text": "formatting the network drive"
        },
        {
          "id": "i12",
          "text": "turning off all security services"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-317",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about installing or removing applications, select True or False.",
      "explanation": "64-bit apps normally use Program Files, while 32-bit apps use Program Files (x86). Deleting a folder does not properly uninstall an application. Writing to protected Program Files locations requires elevation.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "64-bit applications are installed in the \"C:\\Program Files (x86)\" folder by default.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Deleting an application's folder and its associated files uninstalls it from the computer and removes the associated registry settings.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A User Account Control (UAC) prompt displays when Standard Users install applications in the \"Program Files\" or \"Program Files (x86)\" folders.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-318",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "What is the purpose of the Microsoft Store?",
      "explanation": "Microsoft Store distributes applications through Microsoft's storefront with applicable publication checks. It is not a used-hardware market or a directory of every application.",
      "options": [
        "An online marketplace for buying Microsoft branded computers and peripherals",
        "A digital distribution platform and marketplace for Microsoft approved applications",
        "An online marketplace for selling and buying used hardware",
        "A digital distribution platform and marketplace for all applications"
      ],
      "correct": 1
    },
    {
      "id": "dcm-319",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "You are currently using a password to log into your Windows 11 computer.\nYou want to use a different factor of authentication than your password. However, you do\nnot have any biometric scanners available.\n\nWhich option should you select to configure your new authentication method?",
      "explanation": "A Windows Hello PIN requires no camera or fingerprint reader and is bound to the device. A separate security key would require additional hardware.",
      "options": [
        "Facial recognition (Windows Hello)",
        "Fingerprint recognition (Windows Hello)",
        "PIN (Windows Hello)",
        "Security key"
      ],
      "correct": 2
    },
    {
      "id": "dcm-320",
      "chapter": "instalare-config",
      "type": "single",
      "question": "Where can you increase or decrease the size of the mouse pointer in Windows 11?",
      "explanation": "Windows 11 Settings places mouse-pointer size and color under Accessibility, then Mouse pointer and touch.",
      "options": [
        "Hardware and Sound",
        "Ease of Access",
        "Personalization",
        "Accessibility"
      ],
      "correct": 3
    },
    {
      "id": "dcm-321",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about using the Microsoft Authenticator app in Windows 11, select\nTrue or False.",
      "explanation": "Authenticator does not provide push sign-in for ordinary local Windows accounts. A previously configured supported Microsoft/work account can use passwordless sign-in or another registered method when a password is forgotten. The app also generates TOTP codes for configured accounts.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Microsoft Authenticator app can send push notifications to approve sign-in attempts for both local and Microsoft accounts.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "You can use the Microsoft Authenticator app to login if you forget your password.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Microsoft Authenticator app generates time-based one-time passwords as part of the multi-factor authentication process.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-322",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement about Device Manager and Disk Management, select True or False.",
      "explanation": "Disk Management initializes disks and configures partitions/volumes. Storage cleanup is performed with tools such as Storage settings or Disk Cleanup, not Disk Management. Device Manager can update drivers.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Setting up a new drive is done through Disk Management.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Freeing up disk space for a slow running computer is done through Disk Management.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Manually updating drivers can be done through the Device Manager.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-323",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Move each term from the list on the left to the correct definition on the right.\n\n : Self replicating malware\n : Malware that is disguised as legitimate software\n : An attack that targets websites and servers by disrupting network services in an\nattempt to exhaust an application's resources\n : An attack that aims to steal or damage sensitive data by deceiving people into\nrevealing personal information like passwords and credit card numbers",
      "explanation": "A worm replicates itself. A Trojan masquerades as legitimate software. DDoS floods or exhausts services, and phishing deceives people into revealing sensitive information.",
      "dragItems": [
        {
          "id": "i1",
          "text": "DDOS"
        },
        {
          "id": "i2",
          "text": "Worm"
        },
        {
          "id": "i3",
          "text": "Phishing"
        },
        {
          "id": "i4",
          "text": "Trojan Horse"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Self replicating malware",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Malware that is disguised as legitimate software",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "An attack that targets websites and servers by disrupting network services in an attempt to exhaust an application's resources",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "An attack that aims to steal or damage sensitive data by deceiving people into revealing personal information like passwords and credit card numbers",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-324",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "For each statement about Windows Update settings in Windows 11, select True or False.",
      "explanation": "Optional updates are under Advanced options, and recent updates can be removed through Update history where uninstall is supported. Active hours primarily reduce disruptive restarts; they do not make installation conditional on setting active hours.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Optional updates are accessible directly from Windows Update Advanced Options.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Uninstall for recently installed updates can be accessed under update history.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Required updates that are pending installation will only install when active hours are set.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-325",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A worker reports that their Windows 11 computer is not applying the new security\nsettings implemented by the IT department. These settings include password complexity\nrequirements and screen timeout policies.\nYou need to manually refresh the settings on the worker's computer.\n\nWhat should you do?",
      "explanation": "gpupdate /force refreshes applicable Group Policy settings. gpresult reports effective policies rather than applying them.",
      "options": [
        "Run the gpupdate /force command from the command prompt.",
        "Open System Information and choose Refresh from the View menu.",
        "Run the gpresult /h command from the command prompt.",
        "Open Local Security Policy and choose Reload from the Action menu."
      ],
      "correct": 0
    },
    {
      "id": "dcm-326",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement, select True or False.",
      "explanation": "RAM loses data without power. SSDs normally have much lower access latency than mechanical HDDs. SSDs, HDDs and flash drives are all physical storage.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "RAM is non-volatile.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A low latency HDD is faster than an SSD.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Physical storage includes SSD, HDD, and flash drives.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-327",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A user cannot connect to the network. You need to determine their IP address and default\ngateway.\n\nWhich command should you enter at the command line?",
      "explanation": "ipconfig displays IP addressing and default gateways. /release discards a DHCP lease and ping tests reachability instead of listing the configuration.",
      "options": [
        "ipconfig",
        "ipconfig /release",
        "ping 0.0.0.0",
        "ping 127.0.0.1"
      ],
      "correct": 0
    },
    {
      "id": "dcm-328",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement about Active Directory, select True or False.",
      "explanation": "Active Directory centralizes identities and authentication across a domain. It is not the local file-search index, and administrators control access rather than allowing every user to assign their own rights.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "It allows users to use their credentials throughout the network.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "It allows efficient searching of files on your computer.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "It allows all users to configure their own rights.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-329",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "For each statement about connectors, select True or False.",
      "explanation": "DVI and VGA have different connectors, as do USB-C and USB-A. A compatible USB 3.x Type-A plug can connect to a USB 1.x Type-A port at the older speed; connector shape and device support still matter.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A DVI cable can be plugged into a VGA port without an adapter.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A USB-C cable can be plugged into a USB-A port without an adapter.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A compatible USB 3.0 Type-A cable can be plugged into a USB 1.x Type-A port without an adapter.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-330",
      "chapter": "acces-date",
      "type": "single",
      "question": "You want to ensure that a Windows 11 computer backs up all files in the D:\\Books folder\neven when not connected to the internet. No other folders or files should be backed up.\nThe backup should occur automatically every 10 minutes. The solution should allow you to\nrestore previous versions of all files in that folder.\n\nWhat should you do?",
      "explanation": "File History can retain versions of selected library contents on an available local/network destination without Internet access. Include D:\\Books in a supported library and configure the 10-minute interval; exclude unwanted content. System Restore and system images do not provide this narrow continuous file-version workflow.",
      "options": [
        "Configure System Restore to create restore points on a schedule.",
        "Configure OneDrive to sync user files.",
        "Enable File History to save copies of files to a network drive.",
        "Use Backup and Restore to create a system image."
      ],
      "correct": 2
    },
    {
      "id": "dcm-331",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "Select the appropriate Windows power-saving option. For extended absence, the session must survive removal of power.",
      "explanation": "Sleep retains the session in powered RAM for fast resume. Hibernate writes the session to disk, uses little or no power, and resumes more slowly. Hibernate does not keep RAM powered.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Shut down"
        },
        {
          "id": "i2",
          "text": "Balanced power plan"
        },
        {
          "id": "i3",
          "text": "Sleep"
        },
        {
          "id": "i4",
          "text": "Hibernate"
        },
        {
          "id": "i5",
          "text": "Balanced power plan"
        },
        {
          "id": "i6",
          "text": "Hibernate"
        },
        {
          "id": "i7",
          "text": "Sleep"
        },
        {
          "id": "i8",
          "text": "Shut down"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Short absence, powered RAM and quick resume",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Long absence, session saved to disk and slower resume",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-332",
      "chapter": "management-depanare",
      "type": "single",
      "question": "Which command requests a DHCP lease renewal on all eligible DHCP-enabled network adapters?",
      "explanation": "ipconfig /renew requests renewal of DHCP leases on eligible DHCP-configured adapters. It cannot assign addresses to statically configured adapters or guarantee that the server chooses a different address.",
      "options": [
        "ipconfig /release",
        "ipconfig /all",
        "ipconfig",
        "ipconfig /renew"
      ],
      "correct": 3
    },
    {
      "id": "dcm-333",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "You are working as a tier 1 technical support technician for a company that has 4 tiers\nof technical support personnel.\nAn employee is experiencing an issue that requires specialized knowledge about hardware\nthat is different from the hardware you have been trained on.\n\nHow should you assist the user in resolving their issue?",
      "explanation": "Escalate to the next support tier when the incident requires expertise outside the current technician's scope, while preserving the troubleshooting record.",
      "options": [
        "Submit a request to be trained in the unique hardware and software to support the employee.",
        "Call the hardware vendor to receive training to help support the employee.",
        "Provide the employee with phone numbers for the hardware vendor to receive support.",
        "Escalate the employee's issue to a tier 2 technical support technician."
      ],
      "correct": 3
    },
    {
      "id": "dcm-334",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "In the historical Windows Copilot in-box rollout (before later standalone/web app changes), which statement describes its limited operating-system availability?",
      "explanation": "This describes the historical in-box rollout to Windows 11 and eligible Windows 10 devices. Copilot availability, packaging and capabilities change by version, region and organizational policy; it is not a universal current restriction.",
      "options": [
        "Only Microsoft applications can be located and started using Copilot.",
        "It is only natively installed on computers running Windows 11 and some computers using Windows 10.",
        "Copilot requires a paid subscription to create an image.",
        "All questions must be written in complete sentences."
      ],
      "correct": 1
    },
    {
      "id": "dcm-335",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Choose the least-permissive listed standard BASIC NTFS permission group for each capability. Advanced individual rights can be narrower.\n\nComplete the sentences by selecting the correct option from each drop-down list.\n\nThe \n[1]\n permission allows you to create a subfolder.\nThe \n[2]\n permission allows you to delete a subfolder.\nThe \n[3]\n permission allows you to run an application.",
      "explanation": "Write includes creating folders, Modify includes deleting, and Read & execute permits running applications when the other applicable permissions also allow access.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Full Control"
        },
        {
          "id": "i2",
          "text": "Write"
        },
        {
          "id": "i3",
          "text": "Read & execute"
        },
        {
          "id": "i4",
          "text": "Modify"
        },
        {
          "id": "i5",
          "text": "Modify"
        },
        {
          "id": "i6",
          "text": "Read & execute"
        },
        {
          "id": "i7",
          "text": "Write"
        },
        {
          "id": "i8",
          "text": "Full Control"
        },
        {
          "id": "i9",
          "text": "Write"
        },
        {
          "id": "i10",
          "text": "Modify"
        },
        {
          "id": "i11",
          "text": "Full Control"
        },
        {
          "id": "i12",
          "text": "Read & execute"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-336",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about NTFS, exFAT, and FAT32, select True or False.",
      "explanation": "NTFS supports files far larger than 4GB. FAT32 does not support a 32TB volume; its limits depend on sector size and implementation. exFAT is suitable for removable cross-platform storage and supports very large volumes, including 256TB within applicable implementation limits.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "NTFS supports a maximum file size of 4GB.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "FAT32 supports partitions up to 32TB.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "ExFAT is ideal for flash drives and supports storage media up to 256TB.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-337",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "You are configuring the desktop environment for a Windows 11 computer.\nFor each configuration option, select Yes if it can be locally configured or No if it\ncannot.",
      "explanation": "Built-in Windows 11 settings do not replace the Start logo or move the taskbar to another screen edge. Display resolution/orientation and supported Start-menu folder shortcuts can be configured.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Logo on the Start button",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Taskbar location",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Display resolution and orientation",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "Folders that appear in the Start menu",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-338",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "For each of the following statements regarding types of networks, select Yes if the\nstatement is true and No if it is false.",
      "explanation": "An extranet grants selected external access, not unrestricted access to all internal resources. An intranet serves internal users, usually behind controlled gateways; this does not mean it must be physically isolated from the Internet. The Internet is public.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An extranet gives external partners unrestricted access to all internal resources.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "An intranet serves internal organizational users behind controlled network access.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The Internet is a widely used example of a public network.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-339",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each of the following statements, select Yes if the statement is true and No if it\nis false.",
      "explanation": "Normally Group Policy follows Local, Site, Domain, OU order, with later conflicting settings winning. Domain policy can override local policy. Enforcement, blocked inheritance and security filtering are important exceptions.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "For Group Policy, OU settings override domain settings.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Group Policy does not override a local system policy.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Group Policy provides central management of user and computer settings.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-340",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "For each accessibility setting statement, select Yes if the statement is true and No if\nthe statement is false.",
      "explanation": "Mouse preferences can vary by device and user. Speech recognition primarily assists voice input and mobility needs, whereas captions/visual alerts assist hearing impairments. The on-screen keyboard can assist users with mobility limitations.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Mouse settings are the same for every Windows device.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Speech recognition can help those with hearing impairments.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "An on-screen keyboard helps those with mobility issues.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-341",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "To accommodate a user who has difficulty hearing, the computer support technician wants\nto customize the Windows sound settings and show audio alerts visually.\n\nClick the Windows setting category that will allow customization of the Audio\nAccessibility settings.",
      "explanation": "Accessibility contains audio and visual notification options, including flashing the screen for audio alerts.",
      "options": [
        "Bluetooth andDevices",
        "Time & Language",
        "Accessibility",
        "Windows Update"
      ],
      "correct": 2
    },
    {
      "id": "dcm-342",
      "chapter": "acces-date",
      "type": "multiple",
      "question": "A new PC is built with an AMD APU that supports 64-bit architecture. Which two components are typically integrated into an APU? (Choose two)",
      "explanation": "An APU combines CPU processing cores and integrated GPU capabilities on one chip; system RAM and drives are separate components.",
      "options": [
        "Random Access Memory (RAM)",
        "Central Processing Unit (CPU)",
        "Physical Storage (SSD/HDD)",
        "Graphics Processing Unit (GPU)"
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "id": "dcm-343",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding the purpose and application of Active Directory services. Select Yes if the statement is true and No if it is false.",
      "explanation": "AD centralizes identities and domain resource access. Administrative credentials should be reserved for administration rather than routine work.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The primary purpose of Active Directory is to provide centralized management of user accounts and groups.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A domain user account can typically access resources on the network after a computer is domain-joined.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Domain administrator accounts should be used for day-to-day work tasks to simplify application installation.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-344",
      "chapter": "securitate-dispozitiv",
      "type": "multiple",
      "question": "Which two characteristics differentiate a Custom Installation of Windows from an Upgrade Installation? (Choose two)",
      "explanation": "A custom/clean installation lets the installer select a target partition and is needed for architecture changes such as 32-bit to 64-bit. It does not preserve installed applications like an in-place upgrade.",
      "options": [
        "It retains existing user data and applications.",
        "It is often used when changing the computer's architecture (e.g., x86 to x64).",
        "It requires the user to select the appropriate disk partition for the OS.",
        "It must be performed using a Microsoft Account."
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "dcm-345",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A new user is configuring a Windows 11 device. They want to ensure they can manage system files and security settings without restrictions.\nComplete the statements by selecting the correct option from each drop-down list.\n\nThe most appropriate account type for unrestricted system access is an \n[1]\n\nA Standard User account provides \n[2]\n permissions by default.",
      "explanation": "Administrator accounts can elevate for system-level tasks. Standard users have limited rights; even administrators remain subject to UAC, ACLs and organizational policy.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Administrator"
        },
        {
          "id": "i2",
          "text": "Limited"
        },
        {
          "id": "i3",
          "text": "Guest"
        },
        {
          "id": "i4",
          "text": "Standard user"
        },
        {
          "id": "i5",
          "text": "Administrator"
        },
        {
          "id": "i6",
          "text": "Guest"
        },
        {
          "id": "i7",
          "text": "Standard user"
        },
        {
          "id": "i8",
          "text": "Limited"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-346",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "On Windows 10, a standard user should be allowed to reposition the taskbar without receiving administrative rights. Which setting permits moving the taskbar?",
      "explanation": "On Windows 10, unlocking the taskbar permits moving it without granting administrative rights. Windows 11 does not offer the same native taskbar-edge relocation setting.",
      "options": [
        "Change the user account type from Standard to Administrator.",
        "Unpin the desired application shortcuts from the Start menu.",
        "Configure a local security policy to disable the lock screen.",
        "Unlock the Taskbar setting."
      ],
      "correct": 3
    },
    {
      "id": "dcm-347",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about local and group security policies, select Yes if the statement is true and No if it is false.",
      "explanation": "Under normal processing, domain GPOs can override conflicting local settings and centrally manage users/computers. Filtering and inheritance controls can alter effective policy.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A local security policy always takes precedence over a Group Policy Object (GPO) applied from the domain.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "In Windows, policies applied from the domain override the default security settings configured locally on the device.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Group policies are primarily used for centralized management of users and computers in an Active Directory environment.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-348",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A technician is installing Windows 11 on a new domain-joined computer for an employee. Which account type will the technician primarily use to log in after the installation is complete? (Choose one)",
      "explanation": "An employee uses their domain user identity to access domain-managed resources on a joined computer.",
      "options": [
        "Microsoft Account",
        "Local Account",
        "Standard User Account",
        "Domain User Account"
      ],
      "correct": 3
    },
    {
      "id": "dcm-349",
      "chapter": "securitate-dispozitiv",
      "type": "multiple",
      "question": "Which two components of a Windows installation require an internet connection to function optimally and utilize cloud features? (Choose two)",
      "explanation": "A Microsoft account and OneDrive cloud synchronization use Internet services. Local accounts and local offline file access do not require Internet connectivity.",
      "options": [
        "Local user account",
        "Offline access to already cached local files",
        "Microsoft account cloud features",
        "OneDrive online synchronization"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "dcm-350",
      "chapter": "management-depanare",
      "type": "multiple",
      "question": "An IT Specialist needs to ensure that a user who has difficulty seeing can hear an audio description of elements on the screen and read dictated text. Which two accessibility features should be enabled? (Choose two)",
      "explanation": "Narrator reads interface elements aloud; Voice Typing converts dictated speech into text. Neither is a substitute for the other's function.",
      "options": [
        "Sticky Keys",
        "Narrator",
        "Voice Typing (dictation)",
        "Contrast Themes"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "dcm-351",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "An administrator is managing the update process for a fleet of Windows devices.\n\nComplete the statements by selecting the correct option from each drop-down list.\n\nUpdates for third-party peripheral devices should primarily be sourced from the \n[1]\n.\nUpdates that fix bugs and security vulnerabilities are categorized as \n[2]\n.",
      "explanation": "Manufacturer support provides device-specific drivers. Quality/security updates address reliability and vulnerabilities; verify compatibility before installation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A random social media attachment"
        },
        {
          "id": "i2",
          "text": "An unrelated printer vendor"
        },
        {
          "id": "i3",
          "text": "Device manufacturer's official support site"
        },
        {
          "id": "i4",
          "text": "An unverified driver-download advertisement"
        },
        {
          "id": "i5",
          "text": "A Windows account rename"
        },
        {
          "id": "i6",
          "text": "Quality/security updates"
        },
        {
          "id": "i7",
          "text": "A BIOS password change"
        },
        {
          "id": "i8",
          "text": "A file-system format"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-352",
      "chapter": "acces-date",
      "type": "single",
      "question": "Which hardware component is primarily responsible for performing high-speed calculations and logic operations, and is available in both 32-bit (x86) and 64-bit (x64) architectures? (Choose one)",
      "explanation": "The CPU executes program instructions and arithmetic/logic operations; an APU includes CPU capabilities plus graphics.",
      "options": [
        "Motherboard",
        "Random Access Memory (RAM)",
        "CPU/APU",
        "Physical Storage"
      ],
      "correct": 2
    },
    {
      "id": "dcm-353",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the primary Active Directory service concept on the left with its description on the right.\n\n : Defines security settings and configurations for users and computers within a domain.\n : A specific type of account used by IT staff to manage user accounts and devices on the network.\n : The core function of AD, allowing consistent management of access for multiple users and devices.",
      "explanation": "Group Policy defines centrally applied settings. A domain administrator performs privileged directory administration, while centralized management is AD's broader purpose.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Group Policy"
        },
        {
          "id": "i2",
          "text": "Domain Administrator Account"
        },
        {
          "id": "i3",
          "text": "Centralized Management"
        },
        {
          "id": "i4",
          "text": "Domain User Account"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Defines security settings and configurations for users and computers within a domain.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A specific type of account used by IT staff to manage user accounts and devices on the network.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The core function of AD, allowing consistent management of access for multiple users and devices.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-354",
      "chapter": "instalare-config",
      "type": "single",
      "question": "A Windows 11 user requires an accessibility feature that assists them in managing the Windows interface by automatically transcribing spoken audio into text captions. Which feature, introduced in Windows 11, enables this function? (Choose one)",
      "explanation": "Live Captions converts supported spoken audio into visible text, assisting users who cannot hear the audio.",
      "options": [
        "Magnifier",
        "Live Captions",
        "Sticky Keys",
        "Eye Control"
      ],
      "correct": 1
    },
    {
      "id": "dcm-355",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "For each statement regarding Windows accessibility settings, select Yes if the statement is true and No if it is false.",
      "explanation": "Color/contrast tools assist vision and the on-screen keyboard can assist mobility. Voice Access controls the device by voice, while Voice Typing primarily transcribes dictation.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Color filters and Contrast themes are available options to assist users with visual impairments.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The On-screen keyboard is intended primarily for users with mobility issues.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Voice Access and Voice Typing perform the same function of transcribing speech into text.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-356",
      "chapter": "acces-date",
      "type": "single",
      "question": "Which of the following is the most effective way for an administrator to ensure that a device's manufacturer-specific drivers are up-to-date? (Choose one)",
      "explanation": "The manufacturer's official support page provides model-specific driver packages. Use compatible supported versions rather than assuming every newest driver is appropriate.",
      "options": [
        "Checking the Windows Update history.",
        "Using a custom install during Windows setup.",
        "Manually downloading the latest driver package from the manufacturer's website.",
        "Enabling Voice Typing in accessibility settings."
      ],
      "correct": 2
    },
    {
      "id": "dcm-357",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match the basic computer component on the left with its primary function on the right.\n\n : The main circuit board connecting all components, providing expansion slots.\n : Volatile memory used to hold data and instructions actively being processed by the CPU.\n : Non-volatile storage used for long-term data retention and OS installation.",
      "explanation": "The motherboard interconnects components, RAM stores active volatile working data, and drives retain data without power.",
      "dragItems": [
        {
          "id": "i1",
          "text": "RAM (Random Access Memory)"
        },
        {
          "id": "i2",
          "text": "Motherboard"
        },
        {
          "id": "i3",
          "text": "Physical Storage (SSD/HDD)"
        },
        {
          "id": "i4",
          "text": "Graphics Card"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The main circuit board connecting all components, providing expansion slots.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Volatile memory used to hold data and instructions actively being processed by the CPU.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Non-volatile storage used for long-term data retention and OS installation.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-358",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A technician is installing Windows 11 on a computer that will be part of a domain. Which action best describes the configuration difference compared to a non-domain-joined installation? (Choose one)",
      "explanation": "After joining, AD-based identities and policy can centrally govern access and management. Domain membership does not require every policy to be applied during setup itself.",
      "options": [
        "The computer must be configured with a local account only.",
        "The computer will require a Group Policy Object (GPO) applied during the installation process.",
        "The computer's access and user management will be controlled by Active Directory services after joining.",
        "The computer cannot use a Microsoft Account for any user login."
      ],
      "correct": 2
    },
    {
      "id": "dcm-359",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding user account options in Windows. Select Yes if the statement is true and No if it is false.",
      "explanation": "Normal users can adjust display resolution. Profiles store per-user data/settings. Switching to an available local-account option is not inherently an Internet operation.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An administrative account is required to change display resolution settings on a Windows device.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "User profiles store user-specific settings, documents, and application data.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Switching a user account from a Microsoft account to a local account requires an internet connection.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-360",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "An employee needs to manage their open applications more efficiently and configure the laptop's sleep behavior.\n\nEvaluate the scenarios and complete the statements by selecting the correct options from the drop-down lists.\n\nTo quickly view two open applications side-by-side, the user can utilize the Windows \n[1]\n management feature.\nThe user can customize when the screen turns off and when the device enters sleep mode using \n[2]\n settings.",
      "explanation": "Snap arranges windows side by side. Power settings control screen-off and sleep timers.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Storage Sense"
        },
        {
          "id": "i2",
          "text": "Snap"
        },
        {
          "id": "i3",
          "text": "Magnifier"
        },
        {
          "id": "i4",
          "text": "Narrator"
        },
        {
          "id": "i5",
          "text": "Power & battery"
        },
        {
          "id": "i6",
          "text": "Personalization"
        },
        {
          "id": "i7",
          "text": "Accounts"
        },
        {
          "id": "i8",
          "text": "Windows Update"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-361",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A manufacturer driver was delivered through Windows Update last week. Where in Windows Settings should a technician first check its installation history?",
      "explanation": "Windows Update history lists driver updates delivered through Windows Update. For manually installed drivers, verify Device Manager's installed version/date instead.",
      "options": [
        "Task Manager Startup Tab",
        "Update History within Windows Update settings",
        "Local Security Policy Editor",
        "System Information Utility"
      ],
      "correct": 1
    },
    {
      "id": "dcm-362",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which of the following statements is true regarding the precedence of local versus domain-based Group Policies? (Choose one)",
      "explanation": "A later applicable domain policy normally wins over a conflicting local setting. This applies to configured conflicts, not every setting indiscriminately.",
      "options": [
        "Local policies always override domain policies",
        "An applicable domain GPO normally overrides a conflicting local policy setting",
        "Whichever policy was edited most recently always wins",
        "Local/domain settings can never conflict"
      ],
      "correct": 1
    },
    {
      "id": "dcm-363",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "When configuring the initial Windows installation, the user is presented with the option to choose between a Microsoft Account and a local account. Which is the main benefit of choosing a Microsoft Account? (Choose one)",
      "explanation": "A Microsoft account integrates supported cloud services and settings synchronization; it does not eliminate authentication or keep all data exclusively local.",
      "options": [
        "It guarantees the user maximum privacy by storing all data locally.",
        "It eliminates the need for any password or biometric authentication.",
        "It provides seamless access to cloud services like OneDrive and the Microsoft Store.",
        "It prevents the computer from being joined to an Active Directory domain."
      ],
      "correct": 2
    },
    {
      "id": "dcm-364",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "For each statement about Windows power and display settings, select Yes if the statement is true and No if it is false.",
      "explanation": "Power settings control supported sleep/hibernation behavior. Themes/Accessibility also control appearance, and the time zone can be changed after installation.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Power settings allow users to configure when a device goes into hibernation or sleep mode.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Display settings are the only way to adjust the Windows color scheme and contrast themes.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The time zone option must be set during the initial installation and cannot be changed later.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-365",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A visually impaired user is struggling to control the mouse because they cannot use a physical pointer device effectively. Which accessibility feature should the technician configure to allow the user to control the pointer via voice commands? (Choose one)",
      "explanation": "Voice Access supports voice-based interaction with the Windows interface, including pointer control.",
      "options": [
        "Narrator",
        "Magnifier",
        "Mouse Settings",
        "Voice Access"
      ],
      "correct": 3
    },
    {
      "id": "dcm-366",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "An administrator is reviewing Windows update settings.\n\nComplete the statements by selecting the correct option from each drop-down list.\n\nThe history of installed fixes and security patches can be found in \n[1]\n.\nOptional OS updates usually contain \n[2]\n.",
      "explanation": "Update history records installed updates. Optional updates can include preview non-security changes or drivers; feature updates are a separate release category.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Print queue"
        },
        {
          "id": "i2",
          "text": "Device inventory"
        },
        {
          "id": "i3",
          "text": "File History"
        },
        {
          "id": "i4",
          "text": "Update history"
        },
        {
          "id": "i5",
          "text": "Only password reset instructions"
        },
        {
          "id": "i6",
          "text": "Only full disk image backups"
        },
        {
          "id": "i7",
          "text": "Non-security fixes, preview improvements or optional drivers"
        },
        {
          "id": "i8",
          "text": "Only mandatory operating-system upgrades"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-367",
      "chapter": "acces-date",
      "type": "single",
      "question": "Which of the following is the primary role of RAM (Random Access Memory) in a computer system? (Choose one)",
      "explanation": "RAM holds active instructions/data temporarily for fast CPU access and normally loses contents without power.",
      "options": [
        "Storing the operating system and user files long-term.",
        "Executing program instructions and performing calculations.",
        "Providing high-speed, temporary storage for data actively used by the CPU.",
        "Rendering graphics and video output to the display."
      ],
      "correct": 2
    },
    {
      "id": "dcm-368",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding the benefits of Active Directory Group Policy. Select Yes if the statement is true and No if it is false.",
      "explanation": "Supported GPOs can configure Start layout. Domain membership does not forbid local accounts, and GPOs include both user and computer settings.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Group Policy can be used to centrally manage the Start menu layout across all domain-joined computers.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Group Policy ensures that a local user account cannot be created on a domain-joined machine.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Group Policy is applied only to user accounts and cannot be applied to computer objects.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-369",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Complete the steps to manage the laptop through an Active Directory domain. Provision a separate domain identity rather than attempting to convert a personal Microsoft account.",
      "explanation": "Join the computer and provision/sign in with a domain identity. A Microsoft account is not literally converted into an AD account; a separate domain profile may be created.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Joined to the Active Directory domain"
        },
        {
          "id": "i2",
          "text": "Configured as a workgroup-only PC"
        },
        {
          "id": "i3",
          "text": "Signed in only with a personal Microsoft account"
        },
        {
          "id": "i4",
          "text": "Disconnected from all networks"
        },
        {
          "id": "i5",
          "text": "Local-only user account"
        },
        {
          "id": "i6",
          "text": "Guest account"
        },
        {
          "id": "i7",
          "text": "Personal Microsoft account"
        },
        {
          "id": "i8",
          "text": "Domain user account"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Computer configuration",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Identity used for domain sign-in",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-370",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A standard user tries to install a new desktop application and receives a prompt requiring administrative credentials. This situation confirms which characteristic of a Standard User account? (Choose one)",
      "explanation": "Standard users lack rights for protected system-wide changes and must supply authorized administrative credentials when elevation is required.",
      "options": [
        "Standard Users have full control over all system settings.",
        "Standard Users cannot access the internet without administrative approval.",
        "Standard Users have limited permissions and require elevation for system-wide changes.",
        "Standard Users can only install applications from the Microsoft Store."
      ],
      "correct": 2
    },
    {
      "id": "dcm-371",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Which of the following settings should a technician configure to ensure the user's primary desktop application is easily accessible directly from the main workspace? (Choose one)",
      "explanation": "A desktop/Start/taskbar shortcut provides direct access to an application; time zone and display settings do not.",
      "options": [
        "Time zone options",
        "Display settings",
        "Application shortcuts",
        "Window management (snap)"
      ],
      "correct": 2
    },
    {
      "id": "dcm-372",
      "chapter": "acces-date",
      "type": "multiple",
      "question": "Which two components are typically part of a Graphics Card and are essential for rendering high-quality video output? (Choose two)",
      "explanation": "The GPU processes graphics, and VRAM holds frame buffers/textures and other graphics data on a dedicated graphics card.",
      "options": [
        "Motherboard bus",
        "GPU (Graphics Processing Unit)",
        "VRAM (Video Random Access Memory)",
        "Optical Drive"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "dcm-373",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the Windows configuration item on the left with its description on the right.\n\n : The file system structure that holds user documents, settings, and application preferences.\n : A specific set of policies used to enforce security and configuration settings across many users in a corporate environment.\n : A dedicated account required for performing elevated actions such as installing system drivers or editing the Windows Registry.",
      "explanation": "A profile stores user data/settings, GPOs centrally configure managed systems, and an authorized administrator can elevate for protected tasks.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Group Policy"
        },
        {
          "id": "i2",
          "text": "User Profile"
        },
        {
          "id": "i3",
          "text": "Administrative Account"
        },
        {
          "id": "i4",
          "text": "Domain User Account"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The file system structure that holds user documents, settings, and application preferences.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A specific set of policies used to enforce security and configuration settings across many users in a corporate environment.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A dedicated account required for performing elevated actions such as installing system drivers or editing the Windows Registry.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-374",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "For each statement regarding desktop settings, select Yes if the statement is true and No if it is false.",
      "explanation": "Power settings control inactivity display timers. Start can contain pinned application shortcuts, and Snap arranges windows rather than primarily minimizing them.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Power settings must be configured to ensure the display turns off after a period of inactivity.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The Start menu layout cannot be customized or contain application shortcuts.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The Snap feature for window management is primarily used to minimize open windows to the Taskbar.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-375",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A system administrator is reviewing device configuration settings.\n\nComplete the statements by selecting the correct option from each drop-down list.\n\nThe primary function of the CPU is to execute \n[1]\n.\nA system administrator typically uses a \n[2]\n account for routine, non-administrative work.",
      "explanation": "The CPU executes instructions. Administrators should use a standard user context for routine tasks and elevate only when required.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Unused backup images"
        },
        {
          "id": "i2",
          "text": "Ethernet cable signals"
        },
        {
          "id": "i3",
          "text": "Program instructions"
        },
        {
          "id": "i4",
          "text": "Permanent user archives"
        },
        {
          "id": "i5",
          "text": "Guest"
        },
        {
          "id": "i6",
          "text": "Standard user"
        },
        {
          "id": "i7",
          "text": "Administrator"
        },
        {
          "id": "i8",
          "text": "Limited"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-376",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A Windows device is consistently downloading a new version of the OS that introduces new features, but the user wants to wait. Which type of update is the user trying to defer? (Choose one)",
      "explanation": "A feature update introduces a new Windows version and capabilities; it differs from routine quality/security patches and device drivers.",
      "options": [
        "Routine quality update",
        "Device driver update",
        "Feature update",
        "Security intelligence update"
      ],
      "correct": 2
    },
    {
      "id": "dcm-377",
      "chapter": "acces-date",
      "type": "single",
      "question": "A system administrator has successfully connected a new external solid-state drive (SSD)\nto a laptop using a Thunderbolt port. The drive does not appear in File Explorer or Disk\nManagement. Upon inspecting Device Manager, the SSD is not listed under 'Disk Drives'.\nWhat is the most immediate step the administrator should take within Device Manager to\nattempt to resolve the issue?",
      "explanation": "Scan for hardware changes asks Windows to rediscover attached hardware. If still absent, check cable, power, port and supported drivers before partition changes.",
      "options": [
        "Select 'Disable device' from the context menu.",
        "Click 'Add legacy hardware' from the Action menu to manually install a driver.",
        "Click 'Scan for hardware changes' from the Action menu.",
        "Use the 'View' menu to enable 'Show hidden devices' and verify the device."
      ],
      "correct": 2
    },
    {
      "id": "dcm-378",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A standard user tries to make a change that requires elevated administrative rights,\nsuch as altering a core system file or modifying the Windows Registry. Which security\nfeature is responsible for presenting the user with an elevation or consent prompt?\n(Choose one)",
      "explanation": "UAC prompts for consent or administrator credentials when a process requests elevation.",
      "options": [
        "Multi-factor Authentication (MFA)",
        "Windows Firewall",
        "User Account Control (UAC)",
        "The Local Security Policy"
      ],
      "correct": 2
    },
    {
      "id": "dcm-379",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A desktop application has frozen and is displaying a 'Not Responding' error. You open\nTask Manager to manually terminate the program's execution. Which Task Manager tab\nshould you utilize to select the program and choose the 'End Task' option? (Choose one)",
      "explanation": "The Processes tab shows active apps/processes and offers End task. Termination may lose unsaved data.",
      "options": [
        "Services",
        "Users",
        "Processes",
        "App history"
      ],
      "correct": 2
    },
    {
      "id": "dcm-380",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "A consultant is explaining the various Microsoft cloud offerings to a client. Move each\nservice from the list on the left to the correct service description on the right.\n\n : An organization-wide platform used for team sites and collaborative document\nmanagement.\n : A subscription service providing a full suite of cloud-based applications,\nincluding Word, Excel, and Outlook.\n : A virtual desktop solution that streams a personalized cloud PC experience to\nvarious devices.\n : A digital note-taking application designed to organize information using sections\nand pages, similar to a physical notebook.",
      "explanation": "SharePoint supports team content/sites, Microsoft 365 provides productivity subscriptions, Windows 365 supplies Cloud PCs, and OneNote organizes notebooks.",
      "dragItems": [
        {
          "id": "i1",
          "text": "OneNote"
        },
        {
          "id": "i2",
          "text": "Microsoft 365"
        },
        {
          "id": "i3",
          "text": "Windows 365"
        },
        {
          "id": "i4",
          "text": "SharePoint"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An organization-wide platform used for team sites and collaborative document management.",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "A subscription service providing a full suite of cloud-based applications, including Word, Excel, and Outlook.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A virtual desktop solution that streams a personalized cloud PC experience to various devices.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "A digital note-taking application designed to organize information using sections and pages, similar to a physical notebook.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "dcm-381",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A technician is reviewing the foundational functions of the motherboard in a modern PC.\nFor each statement regarding motherboards and their limitations, select Yes if the\nstatement is true and No if it is false.",
      "explanation": "The motherboard/firmware and CPU together constrain RAM. CPU sockets are not universally compatible. Firmware settings are retained on motherboard nonvolatile storage.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The motherboard's chipset and BIOS primarily govern the maximum amount and operating speed of the installed RAM.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "All major CPU manufacturers (e.g., Intel and AMD) use universally compatible processor sockets, allowing for easy interchangeability.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Crucial firmware settings, such as the boot order and system time, are retained on a storage chip located directly on the motherboard.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-382",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A graphics professional needs to confirm the exact color depth and maximum refresh rate\nsupported by their connected display. Which specific section within Windows Display\nSettings contains detailed information about these monitor capabilities? (Choose one)",
      "explanation": "Advanced display shows refresh rate, bit depth and related display information. Available modes depend on the monitor, GPU and connection.",
      "options": [
        "Gaming Performance tab",
        "Device Manager properties",
        "Advanced display settings",
        "Ease of Access center"
      ],
      "correct": 2
    },
    {
      "id": "dcm-383",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A Windows 10 user reports that a newly installed third-party desktop application is\ncrashing unexpectedly. A technician opens the Event Viewer utility to \"Gather data to\ndescribe issues and support troubleshooting.\" Which Windows Logs section should the\ntechnician examine first to find error details related to the application failure?\n(Choose one)",
      "explanation": "Application logs are the first place to find application failure/error events.",
      "options": [
        "System",
        "Application",
        "Security",
        "Setup"
      ],
      "correct": 1
    },
    {
      "id": "dcm-384",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A Windows administrator is configuring the firewall profile for a traveling employee's\nlaptop. Evaluate the security characteristics below and complete the statements by\nselecting the correct network profile (Public or Private) from each drop-down list.\n\nThe firewall is configured with aggressive filtering and **Network Discovery** is\ndisabled by default. This describes a \n[1]\n network profile.\nThis profile is recommended for use in airports, coffee shops, and other potentially\nunsecured, non-trusted locations: \n[2]\n network profile.\nThis profile is characterized by less restrictive firewall rules and is intended for use\nin environments like a trusted home or small business office: \n[3]\n network profile.",
      "explanation": "Public is intended for untrusted networks with discovery disabled by default. Private is for trusted networks and can allow discovery/sharing when configured.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Private"
        },
        {
          "id": "i2",
          "text": "Domain"
        },
        {
          "id": "i3",
          "text": "Public"
        },
        {
          "id": "i4",
          "text": "Domain"
        },
        {
          "id": "i5",
          "text": "Public"
        },
        {
          "id": "i6",
          "text": "Private"
        },
        {
          "id": "i7",
          "text": "Private"
        },
        {
          "id": "i8",
          "text": "Public"
        },
        {
          "id": "i9",
          "text": "Domain"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i7",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ]
    },
    {
      "id": "dcm-385",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A user reports intermittent loss of Internet access, suspecting an issue with their\nWi-Fi connection to the local router. Evaluate the troubleshooting actions and complete\nthe statements by selecting the correct option from each drop-down list.\n\nTo verify the device has a valid IP address and troubleshoot DNS issues, the technician\nshould run the \n[1]\n command.\nTo confirm the connection status and signal quality of the wireless access point, the\nuser should verify the \n[2]\n.\nIf the device is assigned a 169.254.x.x IP address, you should run the \n[3]\n command to\nattempt a new address acquisition from the DHCP server.",
      "explanation": "ipconfig /all reports addresses and DNS settings. Wi-Fi status verifies association/signal. renew retries DHCP after APIPA fallback.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ipconfig /all"
        },
        {
          "id": "i2",
          "text": "ping"
        },
        {
          "id": "i3",
          "text": "tracert"
        },
        {
          "id": "i4",
          "text": "pathping"
        },
        {
          "id": "i5",
          "text": "Monitor refresh rate"
        },
        {
          "id": "i6",
          "text": "Printer paper size"
        },
        {
          "id": "i7",
          "text": "Keyboard repeat delay"
        },
        {
          "id": "i8",
          "text": "Wi-Fi connection status and signal strength"
        },
        {
          "id": "i9",
          "text": "tracert"
        },
        {
          "id": "i10",
          "text": "pathping"
        },
        {
          "id": "i11",
          "text": "ipconfig /renew"
        },
        {
          "id": "i12",
          "text": "ping"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-386",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A technician is reviewing best practices for managing applications on a Windows device.\nFor each statement about installing or removing applications, select Yes if the\nstatement is true and No if it is false.",
      "explanation": "32-bit apps normally use Program Files (x86). Uninstallers can leave user data/settings, so complete removal is not guaranteed. Protected directories require elevation.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "32-bit (x86) software applications are installed in the \"C:\\Program Files\" folder by default on a 64-bit operating system.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Properly using the 'Apps and Features' utility ensures that all associated data, files, and registry entries are correctly removed during uninstallation.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "An elevation prompt occurs when a user tries to install an application into a system directory that requires administrator-level write permissions.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-387",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An IT Specialist needs to describe the primary function of the Microsoft Store to a new\nemployee. Which statement best defines the role of the Microsoft Store within the\nWindows operating system? (Choose one)",
      "explanation": "Microsoft Store is Microsoft's centralized software distribution storefront with applicable publication requirements; it is not a guarantee that every app is risk-free.",
      "options": [
        "It serves as a private repository for software created exclusively by third-party developers.",
        "It provides a centralized digital distribution system for software, ensuring all applications meet specific quality and security standards set by Microsoft.",
        "It is an auction site for reselling original Windows licenses and pre-owned Microsoft devices.",
        "It functions as a general web browser for accessing cloud-based services like Azure and Microsoft 365."
      ],
      "correct": 1
    },
    {
      "id": "dcm-388",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user of a Windows 11 machine is utilizing a traditional password for sign-in but wants\nto transition to a more convenient, local alternative that does not rely on a physical\nbiometric scanner (like a camera or fingerprint reader). Which Windows Hello\nauthentication option can be configured using only the keyboard? (Choose one)",
      "explanation": "A Windows Hello PIN can be entered by keyboard and requires no biometric scanner.",
      "options": [
        "Facial Scan",
        "Security Key (FIDO)",
        "PIN (Personal Identification Number)",
        "Retinal Verification"
      ],
      "correct": 2
    },
    {
      "id": "dcm-389",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A technician is helping a user with a visual impairment adjust the user interface for\nbetter visibility. To modify the color and size of the mouse pointer globally in Windows\n11, where should the technician navigate within the Settings application? (Choose one)",
      "explanation": "Pointer size and color are under Accessibility, then Mouse pointer and touch.",
      "options": [
        "System and Security",
        "Personalization",
        "Accounts",
        "Accessibility"
      ],
      "correct": 3
    },
    {
      "id": "dcm-390",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A home user has three separate Windows laptops and wants a single sign-on experience\nthat automatically syncs their desktop background, saved passwords, and cloud-stored\nfiles across all devices. Which user account type is specifically designed to provide\nthis centralized cloud-based synchronization? (Choose one)",
      "explanation": "A Microsoft account integrates supported cloud services and synchronization across devices, subject to enabled settings and current Windows capabilities.",
      "options": [
        "Local Account",
        "Domain User Account",
        "Administrative Account",
        "Microsoft Account"
      ],
      "correct": 3
    },
    {
      "id": "dcm-391",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match the connectors. USB-C video/charging requires supporting hardware. DisplayPort does not generally require a separate audio license; that incorrect claim is removed.",
      "explanation": "USB-C can support video and charging when the port/cable support it. VGA is analog; HDMI is common on consumer displays; DisplayPort is common on PC monitors.",
      "dragItems": [
        {
          "id": "i1",
          "text": "HDMI"
        },
        {
          "id": "i2",
          "text": "VGA"
        },
        {
          "id": "i3",
          "text": "USB Type-C"
        },
        {
          "id": "i4",
          "text": "DisplayPort"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Video and charging over a compatible alternate-mode connector",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Analog 15-pin video connector",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Digital consumer display connector common on game consoles",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Digital display connector common on PC monitors",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-392",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "On your Windows 11 computer, you encounter an error when trying to download and install a webcam application from the Microsoft Store. What utility can help you fix this installation problem?",
      "explanation": "wsreset.exe clears the Microsoft Store cache and can resolve Store download/install problems without uninstalling the Store.",
      "options": [
        "WSReset.exe",
        "Device Manager",
        "Event Viewer",
        "Windows Update"
      ],
      "correct": 0
    },
    {
      "id": "dcm-393",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A user reports that their Windows system has become sluggish and unresponsive after\nopening a specific desktop application. After confirming the application is stuck, which\nTask Manager tab and associated action is the most direct method to terminate the\noffending program's execution and restore system performance? (Choose one)",
      "explanation": "Processes > End task terminates the hung program; unsaved application data may be lost.",
      "options": [
        "App History - Analyze Resource Consumption",
        "Services - Restart Service",
        "Processes - End Task",
        "Startup Apps - Disable Program"
      ],
      "correct": 2
    },
    {
      "id": "dcm-394",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A system administrator is educating users on the use of Microsoft Authenticator as part\nof the organization's Multi-Factor Authentication (MFA) strategy. For each statement,\nselect Yes if the statement is true and No if it is false.",
      "explanation": "Ordinary local Windows accounts do not use Authenticator push sign-in. Registered supported accounts can use it as a passwordless/recovery factor, and TOTP supplies possession-based codes.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Microsoft Authenticator can be configured to manage and approve sign-in attempts for standard local Windows user accounts.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "If a user forgets their primary account password, the Authenticator app can be utilized as a trusted identity factor for account recovery.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The application is capable of generating Time-based One-Time Passcodes (TOTP) used to fulfill the 'something you have' requirement of MFA.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-395",
      "chapter": "acces-date",
      "type": "single",
      "question": "A recent Windows feature update caused instability. Within the supported rollback window, which feature reverts to the previous build while retaining personal files? Applications/drivers installed after the upgrade may need reinstalling.",
      "explanation": "Go back can revert an eligible recent feature update during its rollback window and retain personal files. Apps/drivers installed after the upgrade may be removed; back up first.",
      "options": [
        "System Restore Point",
        "Advanced Startup Repair",
        "Go back to the previous version of Windows",
        "Perform a Custom Reinstallation"
      ],
      "correct": 2
    },
    {
      "id": "dcm-396",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A system administrator is using Windows built-in tools to manage storage and device\ndrivers. For each statement about Device Manager and Disk Management, select Yes if the\nstatement is true and No if it is false.",
      "explanation": "Disk Management can partition/format disks but is not a temporary-file cleanup tool. Device Manager can roll back a driver when a previous package remains available.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Disk Management can partition and format a newly installed drive.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Disk Management is the most suitable tool for deleting temporary files.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Device Manager can roll back an available previous device driver.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-397",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "A security awareness training is being developed to educate employees on common cyber\nthreats. Match each threat term from the list on the left to its correct technical\ndescription or mechanism on the right.\n\n : A form of malicious code designed to propagate autonomously across networks without\nuser interaction.\n : A cyber-attack that relies on overwhelming a target system with massive volumes of\ntraffic from multiple sources, causing legitimate service disruption.\n : A type of social engineering where an attacker uses deceptive electronic\ncommunication to trick victims into surrendering confidential login credentials.\n : Malicious software that gains entry by masquerading as a benign, useful utility or\nlegitimate application.",
      "explanation": "Worms self-propagate, DDoS exhausts services from multiple sources, phishing steals information through deception and Trojans impersonate legitimate software.",
      "dragItems": [
        {
          "id": "i1",
          "text": "DDoS"
        },
        {
          "id": "i2",
          "text": "Worm"
        },
        {
          "id": "i3",
          "text": "Phishing"
        },
        {
          "id": "i4",
          "text": "Trojan Horse"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A form of malicious code designed to propagate autonomously across networks without user interaction.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A cyber-attack that relies on overwhelming a target system with massive volumes of traffic from multiple sources, causing legitimate service disruption.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A type of social engineering where an attacker uses deceptive electronic communication to trick victims into surrendering confidential login credentials.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Malicious software that gains entry by masquerading as a benign, useful utility or legitimate application.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-398",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A system administrator is managing the deployment of software patches and updates on\nclient machines. For each statement about Windows Update settings in Windows 11, select\nYes if the statement is true and No if it is false.",
      "explanation": "Optional drivers/preview quality updates can be selected manually. Update history includes uninstall options. Active hours primarily discourage disruptive restarts, not confine all installs to those hours.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Device driver updates and non-security quality updates are classified as optional updates that can be manually selected for installation.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The \"Uninstall updates\" link, used for removing previously installed security patches, is located within the Update History section of Windows Update.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Critical security updates will only ever install and restart the computer during the configured 'Active hours' to avoid user disruption.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-399",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user installed a new device driver for their network adapter, and immediately\nafterward, their internet connection stopped working. The technician believes the new\ndriver is incompatible with the system. Using Device Manager, which action should the\ntechnician perform to revert the device to its last known working state? (Choose one)",
      "explanation": "Roll Back Driver reinstalls the prior driver when available, reversing a regression from the new package.",
      "options": [
        "Update Driver to search for a new version.",
        "Roll Back Driver.",
        "Disable Device to force a hardware reset.",
        "Uninstall Device and reboot the system."
      ],
      "correct": 1
    },
    {
      "id": "dcm-400",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A Windows 11 technician needs to access a shared network folder called \\\\FS1\\Training\\\n(details shown in the image) and perform file operations. Evaluate the effective\npermissions and complete the statements by selecting the correct option from each\ndrop-down list.\n\nThe user's effective network permission to **read** the contents of a file in the shared\nfolder is \n[1]\n.\nThe user's effective network permission to **delete** a file in the shared folder is \n[2]\n.\nIf the technician accesses the folder locally on the server (D:\\Projects\\Training),\ntheir maximum permission level would be \n[3]\n.",
      "explanation": "Network access is constrained by both share Read and NTFS Modify, leaving effective Read. Local access is controlled by NTFS Modify, not share permissions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Denied"
        },
        {
          "id": "i2",
          "text": "Allowed"
        },
        {
          "id": "i3",
          "text": "Denied"
        },
        {
          "id": "i4",
          "text": "Allowed"
        },
        {
          "id": "i5",
          "text": "Read & execute"
        },
        {
          "id": "i6",
          "text": "Write"
        },
        {
          "id": "i7",
          "text": "Full Control"
        },
        {
          "id": "i8",
          "text": "Modify"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3",
          "optionIds": [
            "i3",
            "i4"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "image": "assets/device-config/pdf-102-training-permissions.png"
    },
    {
      "id": "dcm-401",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A corporate policy requires that all documents must be stored on OneDrive. To ensure\nthat remote employees can access and modify these documents during periods without\nInternet connectivity, which feature of cloud storage must be utilized? (Choose one)",
      "explanation": "Locally synchronized/always-available OneDrive files can be edited offline and changes synchronized after reconnection.",
      "options": [
        "Full disk encryption",
        "Offline file synchronization",
        "Version history management",
        "Geo-redundant storage"
      ],
      "correct": 1
    },
    {
      "id": "dcm-402",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A technician is comparing different types of memory and storage devices. For each\nstatement about computer components, select Yes if the statement is true and No if it is\nfalse.",
      "explanation": "RAM is volatile. SSDs generally outperform mechanical HDDs for access latency. All listed drives are nonvolatile storage.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "RAM (Random Access Memory) is classified as volatile memory, meaning data is lost when power is removed.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Due to its mechanical nature, a traditional Hard Disk Drive (HDD) can achieve read/write speeds that consistently match or exceed a modern Solid State Drive (SSD).",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The Physical Storage component of a computer includes all permanent media, such as SSDs, HDDs, and external USB flash drives.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-403",
      "chapter": "management-depanare",
      "type": "multiple",
      "question": "Which TWO commands show the assigned IPv4 address, subnet mask and default gateway?",
      "explanation": "Both ipconfig and ipconfig /all display IPv4 addressing, masks and gateways; /all adds details such as DHCP and DNS.",
      "options": [
        "ipconfig /all",
        "ipconfig",
        "ping 192.168.1.1",
        "traceroute"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "dcm-404",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A remote technician is setting up a Windows 11 laptop to wirelessly cast a 4K media\nstream to a 50\" FHD (1920x1080) television. The user requires the media to be full\nscreen on the television, while keeping the desktop icons and taskbar visible on the\nlaptop screen.\n\nEvaluate the requirements and complete the statements by selecting the correct display\nsetting from each drop-down list.\n\nThe preferred configuration for the **Multiple displays** setting should be \n[1]\n.\nThe appropriate **Display resolution** for the FHD television (Screen 2) should be set\nto \n[2]\n.\nThe typical **Display orientation** used for this video consumption scenario is \n[3]\n.",
      "explanation": "An extended desktop allows full-screen video on the TV while keeping the laptop workspace independent. The FHD panel's native resolution is 1920x1080.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Show only on 2"
        },
        {
          "id": "i2",
          "text": "Extend these displays"
        },
        {
          "id": "i3",
          "text": "Duplicate these displays"
        },
        {
          "id": "i4",
          "text": "Show only on 1"
        },
        {
          "id": "i5",
          "text": "1920 x 1080"
        },
        {
          "id": "i6",
          "text": "3840 x 2160"
        },
        {
          "id": "i7",
          "text": "1280 x 720"
        },
        {
          "id": "i8",
          "text": "800 x 600"
        },
        {
          "id": "i9",
          "text": "Portrait"
        },
        {
          "id": "i10",
          "text": "Landscape (flipped)"
        },
        {
          "id": "i11",
          "text": "Portrait (flipped)"
        },
        {
          "id": "i12",
          "text": "Landscape"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-405",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A new employee needs to be provisioned with an account that allows them to securely log\ninto the company's Active Directory-managed network and access shared resources like\nfile servers and internal applications. Which Windows 11 Professional account type is\nspecifically used for this purpose? (Choose one)",
      "explanation": "A domain account authenticates against Active Directory and accesses domain resources under assigned permissions.",
      "options": [
        "Domain Account",
        "Local Standard Account",
        "Microsoft account",
        "Local Administrator Account"
      ],
      "correct": 0
    },
    {
      "id": "dcm-406",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A network administrator is explaining the fundamental capabilities of Active Directory\n(AD) services. For each statement about Active Directory, select Yes if the statement is\ntrue and No if it is false.",
      "explanation": "AD centralizes identities/SSO, not local file indexing. It does not give every standard user unrestricted rights management.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Active Directory enables Single Sign-On (SSO) by allowing users to use a single set of credentials to access multiple network resources and computers.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The main function of Active Directory is to replace the Windows Search Indexer for efficiently locating documents and media files on local workstations.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Active Directory is a user-centric system that gives all Standard Users the ability to define and configure their own access rights and security permissions.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-407",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A support technician is troubleshooting connection issues and verifying cable\ncompatibility. For each statement about peripheral device connectors, select Yes if the\nstatement is true and No if it is false.",
      "explanation": "DVI and VGA, and USB-C and USB-A, require physical adapters. Compatible Type-A USB versions are backward compatible at supported speeds.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An older DVI-I cable, which carries both digital and analog signals, can be physically connected to an analog-only VGA port without the use of an adapter.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A USB Type-C plug can be directly and successfully inserted into a rectangular USB Type-A port without any physical adapter.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Due to backward compatibility standards, a modern USB 3.0 Type-A plug can be inserted and functionally connected to an older USB 1.0 or 2.0 Type-A port.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-408",
      "chapter": "acces-date",
      "type": "single",
      "question": "A project manager requires a backup solution for a single project folder\n(D:\\Projects\\Final\\) on their Windows 11 machine. The solution must automatically save\nmultiple file versions every hour and must function even when the laptop is disconnected\nfrom the main office network. Which built-in Windows feature is the most appropriate for\nmeeting these specific file versioning and backup requirements? (Choose one)",
      "explanation": "File History stores multiple file versions on a secondary destination. Use a connected local drive and include the project folder in a supported library.",
      "options": [
        "Configure System Restore to capture system state only.",
        "Configure OneDrive to sync files to the cloud.",
        "Enable File History to maintain version control on a secondary drive.",
        "Use the Windows 7 Backup and Restore tool to create a full system image."
      ],
      "correct": 2
    },
    {
      "id": "dcm-409",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A system engineer is explaining the core configuration mechanisms of the Windows\noperating system. Which statement accurately describes the primary function and content\nof the Windows Registry? (Choose one)",
      "explanation": "The Registry is a hierarchical configuration database for Windows, applications and hardware profiles.",
      "options": [
        "It indexes data within the file system to optimize search results for the user.",
        "It serves as a central hierarchical database for storing configuration data for the operating system, applications, and hardware profiles.",
        "It is a utility that verifies and repairs the integrity of system files on the boot drive (e.g., SFC/CHKDSK).",
        "It provides real-time protection and monitoring against malicious software and viruses."
      ],
      "correct": 1
    },
    {
      "id": "dcm-410",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A user is configuring their Windows laptop's power settings for optimal battery\nmanagement. Select the correct power saving option from each drop-down list based on the\nuser's needs.\n\nThis mode keeps the device ready for immediate use, maintaining the current state in\n**volatile** memory: \n[1]\n\nThis mode saves the current system state to **non-volatile** storage and requires a\nlonger time to resume, but uses zero power: \n[2]",
      "explanation": "Sleep retains state in powered RAM for fast resume. Hibernate saves it to disk and can survive complete power removal.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Hibernate"
        },
        {
          "id": "i2",
          "text": "Shut down"
        },
        {
          "id": "i3",
          "text": "Balanced power plan"
        },
        {
          "id": "i4",
          "text": "Sleep"
        },
        {
          "id": "i5",
          "text": "Shut down"
        },
        {
          "id": "i6",
          "text": "Balanced power plan"
        },
        {
          "id": "i7",
          "text": "Hibernate"
        },
        {
          "id": "i8",
          "text": "Sleep"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-411",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A network technician discovers that a workstation has an invalid APIPA (169.254.x.x)\naddress and needs to be assigned a new, correct IP address from the DHCP server. Which\ncombined command line sequence must the technician execute to first release the current\ninvalid address and then acquire a new, valid address? (Choose one option representing\nthe sequence)",
      "explanation": "release relinquishes DHCP leases; renew requests new leases. Fix DHCP connectivity if renewal still fails.",
      "options": [
        "ipconfig /all followed by ipconfig /flushdns",
        "ipconfig /renew followed immediately by ipconfig /release",
        "ipconfig /release followed by ipconfig /renew",
        "ping 127.0.0.1 followed by ipconfig"
      ],
      "correct": 2
    },
    {
      "id": "dcm-412",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "You are serving as a Tier 1 help desk professional and receive a support ticket\nregarding a specialized industrial hardware component. You realize the issue requires\nadvanced diagnostic skills that are beyond your current training level. According to\nstandard IT support procedures, what is the most appropriate action you should take to\nensure the problem is resolved efficiently? (Choose one)",
      "explanation": "Escalation transfers the issue to personnel with the required expertise while preserving the ticket and diagnostics.",
      "options": [
        "Schedule a time to receive full training on the specialized hardware before contacting the user.",
        "Provide the user with the manufacturer's technical support contact information for them to resolve it.",
        "Escalate the user's issue to a Tier 2 or Tier 3 technical support specialist.",
        "Perform an immediate Google search for the hardware model number and attempt a resolution."
      ],
      "correct": 2
    },
    {
      "id": "dcm-413",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "During the historical native Windows Copilot rollout, which listed limitation affected availability? This is a version-scoped question, not a claim about all later web/standalone Copilot apps.",
      "explanation": "The historical native Windows Copilot rollout depended on supported OS versions. Availability and packaging later changed, including standalone and web access.",
      "options": [
        "Copilot is only accessible to users with an active Microsoft 365 Enterprise subscription.",
        "The feature is restricted by its minimum OS requirement and is primarily available as a native installation on Windows 11.",
        "Copilot cannot interact with or launch any applications that were installed from the Microsoft Store.",
        "It requires the user to manually enter complex programming commands instead of natural language prompts."
      ],
      "correct": 1
    },
    {
      "id": "dcm-414",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An authorized user successfully copies decrypted files from NTFS to FAT32. Which NTFS-only security attributes cannot be retained on the destination?",
      "explanation": "FAT32 has no NTFS ACLs or EFS. If an authorized decrypted copy completes, those NTFS security attributes cannot be retained on FAT32.",
      "options": [
        "The files retained their encryption, but the NTFS permissions were reset to default.",
        "The files are still encrypted, but they lose their permissions set on the external drive.",
        "The files lost both their encryption and their access control permissions.",
        "The files retained their security settings because copying within Windows always preserves source attributes."
      ],
      "correct": 2
    },
    {
      "id": "dcm-415",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Select the minimum STANDARD BASIC NTFS permission level among Write, Modify, Read & execute and Full control for each task (not individual advanced ACL rights).",
      "explanation": "Among standard basic permission levels, Write creates folders, Modify includes delete and Read & execute permits execution. Advanced individual rights can be more granular.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Modify"
        },
        {
          "id": "i2",
          "text": "Full Control"
        },
        {
          "id": "i3",
          "text": "Write"
        },
        {
          "id": "i4",
          "text": "Read & execute"
        },
        {
          "id": "i5",
          "text": "Full Control"
        },
        {
          "id": "i6",
          "text": "Modify"
        },
        {
          "id": "i7",
          "text": "Read & execute"
        },
        {
          "id": "i8",
          "text": "Write"
        },
        {
          "id": "i9",
          "text": "Read & execute"
        },
        {
          "id": "i10",
          "text": "Write"
        },
        {
          "id": "i11",
          "text": "Modify"
        },
        {
          "id": "i12",
          "text": "Full Control"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Create a subfolder",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Delete a subfolder",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Execute a program",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-416",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A data manager is comparing the suitability of different file systems for various\nstorage needs. For each statement about NTFS, exFAT, and FAT32, select Yes if the\nstatement is true and No if it is false.",
      "explanation": "FAT32's file limit is just under 4GiB. NTFS supports ACLs/EFS, and exFAT supports large files across common modern systems, though compatibility is not universal on every device.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The FAT32 file system is limited by its inability to store individual files larger than 4GB.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The NTFS file system is typically utilized when superior security features like file-level permissions and encryption are required.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "ExFAT (Extended File Allocation Table) is recommended for modern USB flash drives due to its universal compatibility and support for large file sizes.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-417",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A user is customizing their Windows 11 desktop environment. For each configuration\noption, select Yes if the setting can be modified locally by the user, or No if it\ncannot.",
      "explanation": "Native settings do not replace the Start icon or move the taskbar to another edge. Start-folder shortcuts, supported display modes and accessibility color filters can be configured.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The ability to change the default icon displayed on the Taskbar's Start button.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The configuration of which system folders (e.g., Documents, Pictures) appear pinned next to the Start menu.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The position of the Taskbar on the desktop screen (e.g., top, bottom, or side).",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "The screen's color depth and color filters settings.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-418",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user wants to perform an action that modifies system-wide files, such as deleting\nfiles from the Windows directory or changing core system configurations. Which specific\ntype of account is required to execute these high-level administrative tasks on a\nWindows 11 Home computer? (Choose one)",
      "explanation": "An authorized administrator can elevate for protected system-wide changes; UAC/ACLs and policy still apply.",
      "options": [
        "Standard User Account",
        "Microsoft Account",
        "Administrative User Account",
        "Guest Account"
      ],
      "correct": 2
    },
    {
      "id": "dcm-419",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "During a routine security review, the organization's antimalware program flagged and\nquarantined a proprietary application as a false positive. The IT Security team has\nofficially verified that the application is safe and necessary for operations. What is\nthe necessary next step for a technician to make the application functional again?\n(Choose one)",
      "explanation": "After security approval, restore the false-positive file from quarantine using the antimalware interface and approved policy. Do not disable protection globally.",
      "options": [
        "Temporarily disable the antimalware protection and then reinstall the program from the original source.",
        "Recover the program file from the quarantine area within the antimalware application.",
        "Find the quarantined file using File Explorer and manually exclude it from the security scan.",
        "Initiate a full system scan with a different antimalware tool to obtain a second opinion."
      ],
      "correct": 1
    },
    {
      "id": "dcm-420",
      "chapter": "acces-date",
      "type": "single",
      "question": "A technician is installing a new desktop application. The system is running a 64-bit\nversion of Windows. Which directory is the default location for the installation files\nof a 32-bit (x86) application? (Choose one)",
      "explanation": "On 64-bit Windows, traditional 32-bit applications normally install under Program Files (x86).",
      "options": [
        "C:\\Program Files",
        "C:\\Users\\AppData\\Local",
        "C:\\ProgramData",
        "C:\\Program Files (x86)"
      ],
      "correct": 3
    },
    {
      "id": "dcm-421",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "An IT purchaser is comparing different peripheral connection standards based on their\ncapabilities. Match each connection type from the list on the left to its primary\ncharacteristic on the right.\n\n : An all-digital connector used widely by computers that can carry both video and\naudio on a single cable.\n : A multi-purpose physical connector that supports various protocols and can deliver\nboth data and power.\n : A legacy connector designed only for analog video signals, often secured by screws.\n : A low-cost connector primarily used for computer audio peripherals, known for its\nsmall circular plug.",
      "explanation": "HDMI carries digital video/audio, USB-C can carry data/power and optional video, VGA is analog video and 3.5mm auxiliary connectors carry analog audio.",
      "dragItems": [
        {
          "id": "i1",
          "text": "HDMI"
        },
        {
          "id": "i2",
          "text": "VGA"
        },
        {
          "id": "i3",
          "text": "USB Type-C"
        },
        {
          "id": "i4",
          "text": "Aux audio cable"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An all-digital connector used widely by computers that can carry both video and audio on a single cable.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A multi-purpose physical connector that supports various protocols and can deliver both data and power.",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "A legacy connector designed only for analog video signals, often secured by screws.",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "A low-cost connector primarily used for computer audio peripherals, known for its small circular plug.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-422",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A user connects their laptop to an external monitor. Evaluate the required display\nsetting for each scenario and select the correct option from the drop-down lists.\n\nTo present a slide show on the monitor while continuing to work on email on the laptop,\nthe user should select \n[1]\n.\nTo view a single screen across both the laptop and the monitor for a larger workspace,\nthe user should select \n[2]\n.",
      "explanation": "Extended mode gives independent windows and a larger combined desktop. Duplicate mirrors the same content instead.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Show only on 2"
        },
        {
          "id": "i2",
          "text": "Extend these displays"
        },
        {
          "id": "i3",
          "text": "Duplicate these displays"
        },
        {
          "id": "i4",
          "text": "Show only on 1"
        },
        {
          "id": "i5",
          "text": "Extend these displays"
        },
        {
          "id": "i6",
          "text": "Duplicate these displays"
        },
        {
          "id": "i7",
          "text": "Show only on 1"
        },
        {
          "id": "i8",
          "text": "Show only on 2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-423",
      "chapter": "acces-date",
      "type": "single",
      "question": "Which is the supported way to initiate removal of a desktop application? Some uninstallers may retain user data or settings; complete removal of every trace is not guaranteed.",
      "explanation": "Settings Apps or Programs and Features invokes the application's supported uninstaller. It may leave user data, so no method here guarantees every trace is removed.",
      "options": [
        "Delete the application's folder directly from the 'Program Files' directory.",
        "Use the 'Apps' utility in Settings or 'Programs and Features' in Control Panel.",
        "Run the 'chkdsk /f' command to scan for and remove application fragments.",
        "Terminate the application's process using Task Manager and delete the shortcut."
      ],
      "correct": 1
    },
    {
      "id": "dcm-424",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A technician is comparing legacy and modern video connectors. For each statement about\nvideo connection types, select Yes if the statement is true and No if it is false.",
      "explanation": "DVI-D is digital video, HDMI carries both digital audio/video and VGA carries analog video.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "DVI-D connectors are capable of transmitting only digital video signals.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "HDMI is primarily a digital connector designed to transmit video, but it cannot carry accompanying digital audio signals.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "VGA connectors rely on a digital signal to transmit high-definition video data to the display.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-425",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "When a user logs into a domain network and multiple Group Policy Objects (GPOs) are\napplied, which policy level is applied last, thereby having the highest precedence over\nall others by default? (Choose one)",
      "explanation": "Normal Group Policy processing is Local, Site, Domain, OU, with later conflicting settings normally winning. Enforcement/filtering can alter results.",
      "options": [
        "Local Group Policy",
        "Site Group Policy",
        "Domain Group Policy",
        "Organizational Unit (OU) Group Policy"
      ],
      "correct": 3
    },
    {
      "id": "dcm-426",
      "chapter": "aplicatii-periferice",
      "type": "multiple",
      "question": "A technician is configuring a new peripheral device. Which two types of connections\nsupport both data transfer and significant power delivery to a connected device? (Choose\ntwo)",
      "explanation": "Supported USB-C Power Delivery and modern Thunderbolt connections can carry data and substantial power. Capabilities depend on hardware/cables.",
      "options": [
        "HDMI",
        "VGA",
        "USB Type-C",
        "Thunderbolt"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "dcm-427",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A project manager wants to wirelessly stream a video presentation from their laptop to a\nconference room TV, but they also need to view speaker notes and control the\npresentation from their laptop screen. Which display setting should be configured?\n(Choose one)",
      "explanation": "Extend permits different content on the laptop and presentation screen.",
      "options": [
        "Duplicating the display",
        "Extending the display",
        "Setting the television as the main display",
        "Using ClearType settings"
      ],
      "correct": 1
    },
    {
      "id": "dcm-428",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A technician is reviewing the differences between volatile and non-volatile memory. For\neach statement, select Yes if the statement is true and No if it is false.",
      "explanation": "RAM is volatile, CPUs execute instructions, GPUs specialize in graphics, and HDDs/SSDs retain data without power.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "RAM is considered non-volatile memory because it retains its contents when the computer is powered off.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The CPU is responsible for executing instructions and performing calculations, while the GPU is specialized for graphics rendering.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Solid State Drives (SSDs) and Hard Disk Drives (HDDs) are both forms of non-volatile physical storage.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-429",
      "chapter": "acces-date",
      "type": "single",
      "question": "A technician needs to connect an older projector with a VGA port to a modern laptop that\nonly provides a full-size HDMI output. Which statement accurately describes the\nrequirement for this type of video conversion? (Choose one)",
      "explanation": "HDMI is digital and VGA analog, requiring active digital-to-analog conversion rather than passive rewiring alone.",
      "options": [
        "The conversion requires a simple passive cable since both signals are natively digital.",
        "The conversion requires an active signal converter because HDMI is digital and VGA is analog.",
        "The conversion cannot be accomplished as HDMI and VGA operate on different refresh rates.",
        "A basic cable can be used, but only if the laptop's driver is rolled back to a previous version."
      ],
      "correct": 1
    },
    {
      "id": "dcm-430",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A graphics specialist is reviewing best practices for optimizing display output. For\neach statement about display configuration, select Yes if the statement is true and No\nif it is false.",
      "explanation": "ClearType improves LCD text rendering. Above-native scaling does not guarantee sharper output. Windows can change orientation.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "ClearType is a technique used to improve text legibility specifically on modern LCD displays.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Setting the display resolution higher than the monitor's native resolution will always result in a sharper image.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Display orientation can be changed from Landscape to Portrait mode using the Windows Display settings.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-431",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each requested kind of assistance to its capability category. Treat device actions as conceptual/historical examples, not guarantees that every current Copilot build can directly execute them.",
      "explanation": "These are conceptual categories for launch assistance, settings guidance, code generation and content generation. Actual Copilot device actions vary by version and permissions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Can open applications"
        },
        {
          "id": "i2",
          "text": "Can access settings"
        },
        {
          "id": "i3",
          "text": "Can retrieve information"
        },
        {
          "id": "i4",
          "text": "Can generate programming code"
        },
        {
          "id": "i5",
          "text": "Can generate content"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The ability to start and run a specific desktop program.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The ability to change system behavior, such as activating Dark Mode or Bluetooth.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The ability to transform programming syntax from one language to another.",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "The ability to produce textual content based on a conversational prompt.",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "dcm-432",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user requires an optional feature of Windows, such as 'Wireless Display' or 'Windows\nSubsystem for Linux (WSL)'. Where should the technician navigate to locate and install\nthese optional Windows components? (Choose one)",
      "explanation": "Optional features/Windows Features manages supported optional components. WSL can also be installed with its supported command-line installer.",
      "options": [
        "Device Manager",
        "Optional features",
        "Windows Update Advanced Options",
        "Local Security Policy Editor"
      ],
      "correct": 1
    },
    {
      "id": "dcm-433",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which of the following account types has the necessary permissions to install a new\ndesktop application that makes changes to the system files or Windows Registry? (Choose\none)",
      "explanation": "An administrator can elevate for protected system/Registry changes, subject to policy and ACLs.",
      "options": [
        "Standard User Account (without UAC prompt)",
        "Administrative Account",
        "Guest Account",
        "Microsoft Account (local standard user)"
      ],
      "correct": 1
    },
    {
      "id": "dcm-434",
      "chapter": "acces-date",
      "type": "single",
      "question": "A technician needs to connect a computer with a DisplayPort output to a television that\nonly accepts HDMI input. Which statement accurately describes the required conversion?\n(Choose one)",
      "explanation": "A DisplayPort source without dual-mode DP++ output needs an active HDMI converter. DP++ can support passive conversion within its limits.",
      "options": [
        "This conversion is always passive and can be done with a simple adapter cable.",
        "The conversion requires an active signal converter if the source device does not support dual-mode DisplayPort.",
        "Conversion is impossible because DisplayPort carries only video, and HDMI carries video and audio.",
        "Conversion requires a change to the display driver settings, not a physical adapter."
      ],
      "correct": 1
    },
    {
      "id": "dcm-435",
      "chapter": "acces-date",
      "type": "single",
      "question": "A content editor is working on a document that is much longer than it is wide. To\nmaximize the viewable area for the text, which display setting should be adjusted?\n(Choose one)",
      "explanation": "Portrait orientation better suits a tall document on a physically rotatable display.",
      "options": [
        "Display resolution",
        "Display orientation",
        "ClearType settings",
        "Refresh rate"
      ],
      "correct": 1
    },
    {
      "id": "dcm-436",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A network administrator is defining the centralized control mechanisms in a corporate\nenvironment. For each statement regarding Active Directory services, select Yes if the\nstatement is true and No if it is false.",
      "explanation": "Local accounts can still sign in on many domain-joined machines. Group Policy centrally applies settings. AD identity management is not IP routing.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Domain User Accounts are required to log into any computer that has been domain-joined.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Group Policy is the mechanism used to enforce security and desktop configuration settings centrally.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Active Directory's primary function is to manage and control network traffic routing and DNS queries.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-437",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A technician is reviewing methods for managing desktop applications on a Windows device.\nFor each statement, select Yes if the statement is true and No if it is false.",
      "explanation": "Use the app's supported repair/uninstall entry, not folder deletion. Program Files (x86) is normally for 32-bit apps.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "To completely remove an application, deleting the program folder from the \"Program Files\" directory is the officially recommended procedure.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "64-bit applications are typically installed in the \"Program Files (x86)\" folder on a 64-bit Windows operating system.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The \"Apps\" section in Windows Settings is the correct location to initiate a repair or removal of a desktop application.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-438",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A support technician is evaluating the physical compatibility of various USB connectors.\nFor each statement, select Yes if the statement is true and No if it is false.",
      "explanation": "Compatible Type-A versions are backward compatible. USB-C can support alternate-mode video. Thunderbolt 3 and later use USB-C; earlier Thunderbolt used Mini DisplayPort connectors.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A compatible USB 3.0 Type-A plug can connect to an older Type-A port at supported lower speeds.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "USB-C cannot carry any display signals.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Thunderbolt 3 and later use USB-C-shaped connectors.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-439",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A technician is looking for a cable which supports both video and digital audio output\nand is universally used for connecting external devices like modern game consoles and\nBlu-ray players to a display. Which connection type should be selected? (Choose one)",
      "explanation": "HDMI is the common digital audio/video connection on game consoles and Blu-ray players.",
      "options": [
        "DVI",
        "HDMI",
        "3.5mm AUDIO",
        "VGA"
      ],
      "correct": 1
    },
    {
      "id": "dcm-440",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A programmer is using Copilot for Windows to increase productivity. Which capability can\nCopilot perform? (Choose one)",
      "explanation": "Copilot can generate suggested code from prompts. Generated output needs review and does not bypass UAC.",
      "options": [
        "Execute administrative-level commands without a UAC prompt.",
        "Generate new programming code based on a descriptive prompt.",
        "Remotely manage and troubleshoot devices on a different network segment.",
        "Uninstall core Windows applications and features."
      ],
      "correct": 1
    },
    {
      "id": "dcm-441",
      "chapter": "acces-date",
      "type": "single",
      "question": "What is the primary purpose of the Remote Desktop feature in Windows? (Choose one)",
      "explanation": "Remote Desktop supplies interactive graphical access to a remote computer over an authenticated network session.",
      "options": [
        "To create a virtualized operating system environment on the local machine.",
        "To allow a user to connect to and control a remote computer's graphical interface over a network connection.",
        "To manage software licenses and activate Microsoft applications across multiple devices.",
        "To enable offline file synchronization for network drives."
      ],
      "correct": 1
    },
    {
      "id": "dcm-442",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A support technician is reviewing the core functions of a PC's memory components. For\neach statement, select Yes if the statement is true and No if it is false.",
      "explanation": "RAM is volatile. CPU/OS architecture constrains addressable memory along with edition/hardware limits. GPUs focus on graphics, not general storage transfer management.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "RAM is considered non-volatile, retaining data even after the computer's power is turned off.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The CPU architecture (e.g., x86 or 64-bit) determines the maximum amount of RAM the operating system can effectively address.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The GPU's primary function is to manage data transfer between the CPU and long-term storage (SSD/HDD).",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-443",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "An IT administrator is configuring the physical display properties of a monitor.\nComplete the statements by selecting the correct option from each drop-down list.\n\nThe physical measurement that describes the relationship between the width and height of\nthe display is known as the \n[1]\n.\nSetting the display to 1080p defines the screen's \n[2]\n.",
      "explanation": "Aspect ratio relates width to height; 1080p commonly denotes 1920x1080 progressive resolution.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Aspect ratio"
        },
        {
          "id": "i2",
          "text": "Resolution"
        },
        {
          "id": "i3",
          "text": "Refresh rate"
        },
        {
          "id": "i4",
          "text": "Color depth"
        },
        {
          "id": "i5",
          "text": "Aspect ratio"
        },
        {
          "id": "i6",
          "text": "Refresh rate"
        },
        {
          "id": "i7",
          "text": "Color depth"
        },
        {
          "id": "i8",
          "text": "Resolution"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-444",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A system administrator is reviewing hardware interface standards. For each statement\nabout video connectors, select Yes if the statement is true and No if it is false.",
      "explanation": "DVI-I/DVI-A include analog capabilities. Among VGA, HDMI, DisplayPort and DVI-D, only VGA is analog. HDMI-to-VGA needs active conversion.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Every DVI family variant is digital-only.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Among VGA, HDMI, DisplayPort and DVI-D, VGA is the analog connector.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "HDMI-to-VGA conversion requires active signal conversion.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-445",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A presenter wants to display the same content on their laptop screen and an external\nprojector simultaneously. Which display configuration option should the user select?\n(Choose one)",
      "explanation": "Duplicate mirrors the same desktop on both screens, unlike Extend's independent workspace.",
      "options": [
        "Extend these displays",
        "Second screen only",
        "Duplicate these displays",
        "Disconnect this display"
      ],
      "correct": 2
    },
    {
      "id": "dcm-446",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A technician is preparing to install Windows on a new laptop. For each statement about\nWindows installation scenarios, select Yes if the statement is true and No if it is\nfalse.",
      "explanation": "An eligible in-place upgrade can preserve apps/settings/files. Custom setup selects the target partition. Domain joining can occur after installation or through supported offline methods.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An Upgrade installation retains existing user files, application settings, and installed applications.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A Custom installation is primarily used to install the operating system into a specific, selected partition.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A domain-joined installation requires the computer to be connected to the Active Directory network during the installation process.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-447",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "A technician is asked to identify different USB connector shapes used for peripherals.\nMatch each connector type from the list on the left to its physical description on the\nright.\n\n : The standard rectangular, legacy connector found on most host computers.\n : The small, oval-shaped connector known for its reversibility and high speed.\n : The square-shaped connector typically used on large devices like printers and\nscanners.",
      "explanation": "Type-A is the traditional host rectangle, Type-C is the reversible oval and full-size Type-B is common on printers.",
      "dragItems": [
        {
          "id": "i1",
          "text": "USB Type-A"
        },
        {
          "id": "i2",
          "text": "USB Type-C"
        },
        {
          "id": "i3",
          "text": "USB Type-B"
        },
        {
          "id": "i4",
          "text": "Micro-USB"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The standard rectangular, legacy connector found on most host computers.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The small, oval-shaped connector known for its reversibility and high speed.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The square-shaped connector typically used on large devices like printers and scanners.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-448",
      "chapter": "acces-date",
      "type": "single",
      "question": "On a Windows 11 64-bit operating system, where are the primary executable files for\n64-bit applications stored by default? (Choose one)",
      "explanation": "64-bit desktop applications normally install under C:\\Program Files.",
      "options": [
        "C:\\Program Files (x86)",
        "C:\\Program Files",
        "C:\\Windows\\System32",
        "C:\\Users\\Public\\Documents"
      ],
      "correct": 1
    },
    {
      "id": "dcm-449",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A support staff member is reviewing the access control differences between user account\ntypes. For each statement about user permissions, select Yes if the statement is true\nand No if it is false.",
      "explanation": "Administrators can still receive UAC prompts. Per-user desktop apps may install without admin rights, and a domain user is not automatically an administrator.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An Administrative Account can install new hardware drivers and modify system-wide settings without requiring a User Account Control (UAC) prompt.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A Standard User Account requires administrator credentials to install any application outside of the Microsoft Store.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A Domain User Account provides full administrative privileges by default, solely by virtue of being part of the domain.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-450",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "An administrator wants to change the alignment of the Start button and pinned applications from the center to the left side of the screen. Which Windows setting must be accessed? (Choose one)",
      "explanation": "Taskbar settings > Taskbar behaviors controls center/left alignment in Windows 11; this differs from moving the taskbar to another edge.",
      "options": [
        "Start menu folders",
        "Application shortcuts",
        "Taskbar settings",
        "Display resolution"
      ],
      "correct": 2
    },
    {
      "id": "dcm-451",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user is experiencing an issue with a system setting but is unsure how to find the\ncorrect configuration area in the Settings app. Which feature of Windows Copilot is\ndesigned to help the user resolve this navigation problem? (Choose one)",
      "explanation": "Copilot may explain or direct the user to settings/troubleshooting. Available direct actions depend on its version and policy.",
      "options": [
        "Generating programming code",
        "Directing users to troubleshooting tools and settings",
        "Translating text into different languages",
        "Managing peripheral device drivers"
      ],
      "correct": 1
    },
    {
      "id": "dcm-452",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A developer is analyzing the Windows Registry structure. For each statement, select Yes\nif the statement is true and No if it is false.",
      "explanation": "The Registry has keys/subkeys for many Windows and application settings. Supported UI controls are preferable for ordinary preferences.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Registry is organized into a hierarchical structure of keys and subkeys.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The Registry only stores settings for applications that were installed from the Microsoft Store.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Modifying the Registry manually is the preferred method for changing user-level desktop preferences.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-453",
      "chapter": "aplicatii-periferice",
      "type": "multiple",
      "question": "In which two areas of Windows will an administrator find the ability to repair or\nreinstall a desktop application? (Choose two)",
      "explanation": "Programs and Features and Settings Apps expose supported repair/change/uninstall options when the application supplies them.",
      "options": [
        "Task Manager",
        "Control Panel (Programs and Features)",
        "Windows Update History",
        "Apps(Settings)"
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "id": "dcm-454",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A core benefit of implementing Active Directory in a corporate environment is its\nability to facilitate __. (Choose one)",
      "explanation": "AD centralizes identities, authentication and policy rather than acting as Internet router or local disk maintenance.",
      "options": [
        "Physical storage of all user files on a single domain controller.",
        "Centralized management of security policies and user authentication across the entire network.",
        "High-speed internet routing for all client devices.",
        "Automatic defragmentation of all hard drives upon user login."
      ],
      "correct": 1
    },
    {
      "id": "dcm-455",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "A technician is formatting external drives for different use cases. Match each file system to its specific characteristic or limitation.\n\n : A modern file system optimized for flash drives that supports large files and is compatible with both Windows and macOS.\n : A legacy file system that provides broad compatibility but cannot store individual files larger than 4GB.\n : A proprietary Windows file system that supports file-level security, encryption, and compression.\n : A file system structure used primarily for optical media like DVDs.",
      "explanation": "exFAT supports large removable files, FAT32 has a near-4GiB file limit, NTFS supplies Windows security features and UDF is used on optical media.",
      "dragItems": [
        {
          "id": "i1",
          "text": "NTFS"
        },
        {
          "id": "i2",
          "text": "exFAT"
        },
        {
          "id": "i3",
          "text": "UDF"
        },
        {
          "id": "i4",
          "text": "FAT32"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A modern file system optimized for flash drives that supports large files and is compatible with both Windows and macOS.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A legacy file system that provides broad compatibility but cannot store individual files larger than 4GB.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "A proprietary Windows file system that supports file-level security, encryption, and compression.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "A file system structure used primarily for optical media like DVDs.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-456",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Assume traditional 512-byte logical sectors for MBR and standard 64-bit Windows UEFI boot. Evaluate each statement.",
      "explanation": "With conventional 512-byte logical sectors MBR is limited near 2TiB. UEFI Windows boot uses GPT, and MBR has four primary entries including any extended partition.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Master Boot Record (MBR) partition style supports drives larger than 2TB natively.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "GUID Partition Table (GPT) is required to boot Windows from a drive on a system using UEFI firmware.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "MBR is limited to a maximum of four primary partitions per drive.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-457",
      "chapter": "acces-date",
      "type": "single",
      "question": "Which Microsoft 365 service is primarily designed as a team-based collaboration platform that integrates chat, video meetings, and shared document storage? (Choose one)",
      "explanation": "Teams combines chat, meetings and collaboration with Microsoft 365 storage services.",
      "options": [
        "Microsoft Exchange",
        "Microsoft Teams",
        "OneDrive for Business",
        "Windows 365"
      ],
      "correct": 1
    },
    {
      "id": "dcm-458",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A system administrator tries to delete an old folder on a file server but receives an \"Access Denied\" message, even though they are a member of the Administrators group. Upon checking the security tab, the administrator sees they have no permissions assigned. What is the first step the administrator must take to resolve this and delete the folder? (Choose one)",
      "explanation": "An authorized administrator can take ownership and then assign the necessary permissions before deletion. Group membership alone does not override every ACL.",
      "options": [
        "Boot the system into Safe Mode and delete the folder from the command line.",
        "Convert the drive to FAT32 to remove security attributes.",
        "Use the 'Effective Access' tab to simulate a different user login.",
        "Take ownership of the folder in the Advanced Security settings."
      ],
      "correct": 3
    },
    {
      "id": "dcm-459",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A technician is setting up a backup strategy for a user who frequently edits Word documents and needs the ability to restore previous versions of these files if they are accidentally saved over. Which Windows feature is specifically designed for this purpose? (Choose one)",
      "explanation": "File History maintains previous versions of supported personal files on a backup destination.",
      "options": [
        "System Restore",
        "Disk Cleanup",
        "File History",
        "BitLocker Drive Encryption"
      ],
      "correct": 2
    },
    {
      "id": "dcm-460",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "An IT student is learning about how Windows applies permissions when a user accesses a folder over the network. Evaluate the scenarios below and select the **Effective Permission** (the actual level of access) the user will have.\n\nScenario 1: Share Permission is **Read**, but NTFS Permission is **Full Control**. The effective permission is \n[1]\n.\nScenario 2: Share Permission is **Full Control**, but NTFS Permission is **Read**. The effective permission is \n[2]\n.\nScenario 3: The user logs in **locally** to the computer (bypassing the network share). The Share Permission is Read, and NTFS Permission is **Modify**. The effective permission is \n[3]\n.",
      "explanation": "Network access must satisfy both share and NTFS restrictions; local access uses NTFS and does not traverse the share.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Read"
        },
        {
          "id": "i2",
          "text": "Write"
        },
        {
          "id": "i3",
          "text": "Modify"
        },
        {
          "id": "i4",
          "text": "Full Control"
        },
        {
          "id": "i5",
          "text": "Write"
        },
        {
          "id": "i6",
          "text": "Modify"
        },
        {
          "id": "i7",
          "text": "Full Control"
        },
        {
          "id": "i8",
          "text": "Read"
        },
        {
          "id": "i9",
          "text": "Write"
        },
        {
          "id": "i10",
          "text": "Full Control"
        },
        {
          "id": "i11",
          "text": "Modify"
        },
        {
          "id": "i12",
          "text": "Read & execute"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-461",
      "chapter": "acces-date",
      "type": "single",
      "question": "You are initializing a legacy hard drive using the MBR (Master Boot Record) partition style. You have already created 3 Primary Partitions. You need to create 3 more separate logical drives for data organization. What specific type of partition must you create next to allow for this expansion? (Choose one)",
      "explanation": "One extended partition occupies the fourth MBR slot and can contain several logical drives.",
      "options": [
        "Extended Partition",
        "Simple Volume",
        "System Reserved Partition",
        "Recovery Partition"
      ],
      "correct": 0
    },
    {
      "id": "dcm-462",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A technician is comparing storage technologies for a client's new laptop. For each statement about SSDs and HDDs, select Yes if the statement is true and No if it is false.",
      "explanation": "SSDs use flash rather than spinning platters and generally resist shock better than HDDs. Routine traditional defragmentation is not appropriate SSD maintenance; Windows uses suitable optimization/TRIM.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Solid State Drives (SSDs) use magnetic spinning platters to read and write data.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Hard Disk Drives (HDDs) are generally slower and more susceptible to physical damage from drops than SSDs.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Defragmentation is a critical maintenance task that must be performed weekly on SSDs to maintain speed.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-463",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A Windows 11 workstation has suffered a catastrophic drive failure due to a ransomware attack. The IT department has a recent \"System Image\" backup stored on an external drive. To restore the entire operating system, applications, and files to their state at the time of the backup, which recovery tool should be launched from the Windows Recovery Environment (WinRE)? (Choose one)",
      "explanation": "System Image Recovery restores an entire captured Windows image from WinRE; restore points do not replace all files/apps.",
      "options": [
        "Startup Repair",
        "System Restore (Restore Points)",
        "System Image Recovery",
        "Command Prompt"
      ],
      "correct": 2
    },
    {
      "id": "dcm-464",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "A consultant is explaining the various Microsoft cloud offerings to a client. Move each service from the list on the left to the correct service description on the right.\n\n : An organization-wide platform used for team sites, intranet portals, and collaborative document management.\n : A personal cloud storage service that synchronizes files across devices and allows for easy file sharing.\n : A comprehensive cloud computing platform used for building, deploying, and managing applications and services.\n : A subscription service providing a full suite of cloud-based productivity applications, including Word, Excel, and Outlook.",
      "explanation": "SharePoint supports organizational collaboration, OneDrive synchronizes personal files, Azure hosts cloud infrastructure and applications, and Microsoft 365 supplies subscription productivity tools.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Azure"
        },
        {
          "id": "i2",
          "text": "OneDrive"
        },
        {
          "id": "i3",
          "text": "Microsoft 365"
        },
        {
          "id": "i4",
          "text": "SharePoint"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An organization-wide platform used for team sites, intranet portals, and collaborative document management.",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "A personal cloud storage service that synchronizes files across devices and allows for easy file sharing.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A comprehensive cloud computing platform used for building, deploying, and managing applications and services.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "A subscription service providing a full suite of cloud-based productivity applications, including Word, Excel, and Outlook.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-465",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A video editor needs to format a 1TB external SSD to transfer 50GB video files between a Windows 11 PC and a macOS laptop. The drive must support files larger than 4GB and be natively readable and writable by both operating systems without third-party drivers. Which file system should be selected? (Choose one)",
      "explanation": "exFAT supports large files and native read/write access on Windows and macOS; FAT32 has a 4 GiB minus one byte file limit.",
      "options": [
        "exFAT",
        "NTFS",
        "FAT32",
        "ReFS"
      ],
      "correct": 0
    },
    {
      "id": "dcm-466",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A technician is initializing a new large-capacity storage drive. For each statement regarding the GPT (GUID Partition Table) partition style, select Yes if the statement is true and No if it is false.",
      "explanation": "GPT supports large disks and many partitions. Standard UEFI-mode Windows boot requires GPT, not the four-primary-partition MBR layout.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "GPT supports hard drives larger than 2TB, whereas MBR is limited to approximately 2TB.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A drive initialized as GPT can have a maximum of only 4 primary partitions.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The GPT partition style is required to boot a 64-bit Windows OS on a system using UEFI firmware.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-467",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An employee has left the organization, and their user account has been deleted. The manager needs access to a folder in the employee's user profile (C:\\Users\\JohnDoe\\Docs), but is currently denied access. As an Administrator, what is the necessary first step to gain access to these files? (Choose one)",
      "explanation": "An administrator can take ownership and then grant the required NTFS permissions. Ownership alone does not decrypt EFS-protected files.",
      "options": [
        "Reset the local administrator password.",
        "Enable the Guest account and log in as Guest.",
        "Take ownership of the folder and then assign permissions.",
        "Run a Check Disk (chkdsk) scan on the volume."
      ],
      "correct": 2
    },
    {
      "id": "dcm-468",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user accidentally overwrote a critical content in a Word document stored on a local NTFS folder that has \"File History\" or \"Shadow Copies\" enabled. The user needs to restore the document to the state it was in yesterday morning. Which tab in the file's Properties dialog box should the user access to locate and restore this specific backup? (Choose one)",
      "explanation": "Previous Versions exposes available historical versions supplied by configured backup or shadow-copy features.",
      "options": [
        "Security",
        "Details",
        "Previous Versions",
        "Sharing"
      ],
      "correct": 2
    },
    {
      "id": "dcm-469",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A network administrator wants to configure a user's computer so that a shared folder located at \"\\\\FileServer01\\Projects\" appears as the \"Z:\" drive in File Explorer, allowing the user to access it like a local hard drive. Which Windows feature should be used? (Choose one)",
      "explanation": "Map Network Drive associates a UNC share with a drive letter without turning it into local storage.",
      "options": [
        "Map Network Drive",
        "Storage Spaces",
        "iSCSI Initiator",
        "BitLocker To Go"
      ],
      "correct": 0
    },
    {
      "id": "dcm-470",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A technician is explaining cloud storage concepts to a new employee. For each statement about Microsoft 365 storage services, select Yes if the statement is true and No if it is false.",
      "explanation": "OneDrive Personal stores individual files, SharePoint provides team sites, and Files On-Demand displays online-only files without downloading their contents.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "OneDrive Personal is primarily designed for storing an individual user's files and photos.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "SharePoint Online is best utilized for creating organization-wide team sites and intranet portals.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The \"Files On-Demand\" feature requires a user to fully download every file to their local hard drive before they can see it in File Explorer.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-471",
      "chapter": "acces-date",
      "type": "single",
      "question": "What is a primary technical reason for an administrator to partition a single physical hard drive into two separate logical volumes (e.g., C: and D:)? (Choose one)",
      "explanation": "Separate volumes can keep user data independent of an OS reinstall, provided the installer formats only the OS volume. Partitioning is not a substitute for backup.",
      "options": [
        "To increase the physical read/write speed of the disk mechanism.",
        "To separate the operating system files from user data, allowing for easier OS reinstallation without data loss.",
        "To automatically compress all data stored on the drive to save space.",
        "To increase the amount of RAM available to the system."
      ],
      "correct": 1
    },
    {
      "id": "dcm-472",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "A security specialist is training staff on NTFS permissions. Match each permission level from the list on the left to its specific capability on the right.\n\n : Allows a user to view file contents and run executables, but not make any changes.\n : Allows a user to view, create, and modify files, but not delete them.\n : Allows a user to view, create, modify, and delete files/folders.\n : Allows a user to perform all actions, including changing permissions and taking ownership.",
      "explanation": "Read and Execute permits viewing and execution; combined Read and Write permits viewing and changing content; Modify adds deletion; Full Control includes permission and ownership changes.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Modify"
        },
        {
          "id": "i2",
          "text": "Read and Execute"
        },
        {
          "id": "i3",
          "text": "Full Control"
        },
        {
          "id": "i4",
          "text": "Read and Write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Allows a user to view file contents and run executables, but not make any changes.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Allows a user to view, create, and modify files, but not delete them.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Allows a user to view, create, modify, and delete files/folders.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Allows a user to perform all actions, including changing permissions and taking ownership.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-473",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user creates a file on their local C: drive (NTFS) and then **moves** that file to a folder on a secondary D: drive (also NTFS). How does the file handle the permissions in the new location? (Choose one)",
      "explanation": "A normal cross-volume move is implemented as a copy followed by deletion, so the new file normally inherits destination permissions.",
      "options": [
        "The file retains its original permissions from the C: drive.",
        "The file becomes encrypted automatically during the transfer.",
        "The file inherits the permissions of the destination folder on the D: drive.",
        "The file loses all permissions and becomes accessible to Everyone."
      ],
      "correct": 2
    },
    {
      "id": "dcm-474",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A technician is configuring network settings for a laptop that travels between a secure corporate office and a public coffee shop. Select the correct Network Profile for each scenario.\n\nTo ensure the computer is hidden from other devices and file sharing is **disabled** while at the coffee shop, use the \n[1]\n profile.\nTo allow the computer to share files and be discovered by printers and other PCs in the secure office, use the \n[2]\n profile.",
      "explanation": "Public profiles restrict discovery and sharing by default. Private profiles permit trusted-network discovery and sharing when enabled in the firewall settings.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Private"
        },
        {
          "id": "i2",
          "text": "Domain"
        },
        {
          "id": "i3",
          "text": "Public"
        },
        {
          "id": "i4",
          "text": "Domain"
        },
        {
          "id": "i5",
          "text": "Private"
        },
        {
          "id": "i6",
          "text": "Public"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        }
      ]
    },
    {
      "id": "dcm-475",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A user is viewing the status of their OneDrive files in File Explorer. For each statement about the status icons, select Yes if the statement is true and No if it is false.",
      "explanation": "A blue cloud marks online-only content, a solid green check marks always-available local content, and a red X indicates a synchronization problem.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A \"Blue Cloud\" icon indicates that the file is only available online and does not take up space on the local drive.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A \"Green Checkmark\" (solid green circle) indicates that the file is \"Always keep on this device\" and is available offline.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A \"Red X\" icon indicates that the file has been successfully shared with an external user.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-476",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A system builder attempts to install Windows 11 on a new PC using UEFI firmware. They receive an error stating that Windows cannot be installed on this disk. The disk is currently initialized as MBR. What action must be taken to resolve this? (Choose one)",
      "explanation": "Windows installed in UEFI mode requires a GPT system disk. Back up data and use a supported conversion procedure before changing the partition style.",
      "options": [
        "Convert the disk to the GPT partition style.",
        "Format the disk using the FAT32 file system.",
        "Create an Extended Partition on the MBR disk.",
        "Disable Secure Boot and use the MBR style."
      ],
      "correct": 0
    },
    {
      "id": "dcm-477",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the storage terminology on the left with its correct definition on the right.\n\n : A logical division of a hard drive that is treated as a separate unit by the operating system.\n : The process of preparing a partition with a file system (like NTFS) so it can store data.\n : A section of the hard drive allocated to support the virtual memory (RAM) of the system when physical RAM is full.\n : The method used to organize and track the location of files on a disk (e.g., NTFS, FAT32).",
      "explanation": "A partition divides disk space; formatting creates a file system; paging provides disk-backed virtual memory; a file system organizes files and allocation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Formatting"
        },
        {
          "id": "i2",
          "text": "Partition"
        },
        {
          "id": "i3",
          "text": "File System"
        },
        {
          "id": "i4",
          "text": "Pagefile / Swap"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A logical division of a hard drive that is treated as a separate unit by the operating system.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "The process of preparing a partition with a file system (like NTFS) so it can store data.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A section of the hard drive allocated to support the virtual memory (RAM) of the system when physical RAM is full.",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "The method used to organize and track the location of files on a disk (e.g., NTFS, FAT32).",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-478",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A project manager wants to share a sensitive document via OneDrive with an external client. The client needs to read the document, but they must not be able to edit or change the content. Which specific permission level should the manager assign when creating the share link? (Choose one)",
      "explanation": "Can view grants read access without granting document-editing rights. It does not inherently prevent copying or screenshots.",
      "options": [
        "Full Control",
        "Can edit",
        "Modify",
        "Can view"
      ],
      "correct": 3
    },
    {
      "id": "dcm-479",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A technician connects a brand new physical hard drive to a Windows PC. Upon opening Disk Management, the drive appears as \"Disk 1\", but the status is listed as \"Unknown\" and \"Not Initialized\". What is the first step the technician must perform before volumes can be created on this disk? (Choose one)",
      "explanation": "Initialize the new disk before creating and formatting volumes and assigning drive letters.",
      "options": [
        "Run the Defragment and Optimize Drives tool.",
        "Assign a drive letter to the disk.",
        "Initialize the disk (MBR or GPT).",
        "Format the disk with NTFS."
      ],
      "correct": 2
    },
    {
      "id": "dcm-480",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A system administrator is reviewing file security options. For each statement regarding the Encrypting File System (EFS), select Yes if the statement is true and No if it is false.",
      "explanation": "EFS requires NTFS and suitable private keys. Access can also be granted to additional EFS users or recovery agents. Losing every usable private key makes recovery impossible by normal means.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "EFS encryption can be applied to files stored on a FAT32 formatted USB drive.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A user with a suitable EFS private key, or a configured data recovery agent, can decrypt an EFS file when other access requirements are satisfied.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Losing every usable EFS private key, including recovery keys and backups, leaves the encrypted data recoverable by normal means.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-481",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match the backup or recovery feature on the left with its primary function on the right.\n\n : Creates a complete, bit-by-bit copy of the entire hard drive, including Windows, apps, and settings.\n : Automatically saves copies of files in the Documents, Music, Pictures, Videos, and Desktop folders to an external drive.\n : Reverts the computer's system files and settings to an earlier point in time without affecting personal files.\n : Syncs user folders (Desktop, Documents, Pictures) to the cloud to protect against local hardware failure.",
      "explanation": "A system image backs up system volumes, File History versions configured personal files, System Restore restores system state, and OneDrive folder backup synchronizes supported user folders.",
      "dragItems": [
        {
          "id": "i1",
          "text": "System Restore"
        },
        {
          "id": "i2",
          "text": "OneDrive Folder Backup"
        },
        {
          "id": "i3",
          "text": "System Image Backup"
        },
        {
          "id": "i4",
          "text": "File History"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Creates a complete, bit-by-bit copy of the entire hard drive, including Windows, apps, and settings.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Automatically saves copies of files in the Documents, Music, Pictures, Videos, and Desktop folders to an external drive.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Reverts the computer's system files and settings to an earlier point in time without affecting personal files.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Syncs user folders (Desktop, Documents, Pictures) to the cloud to protect against local hardware failure.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "dcm-482",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An administrator changes the NTFS permissions on a parent folder named \"Confidential\". They want to ensure that these new restrictions immediately apply to all existing subfolders and files inside \"Confidential\", overriding any previous settings. Which option in the Advanced Security Settings must be selected? (Choose one)",
      "explanation": "Replacing child permission entries propagates the parent's inheritable entries to existing descendants. Review the scope before applying this change.",
      "options": [
        "Replace all child object permission entries with inheritable permission entries from this object.",
        "Disable inheritance and convert permissions to explicit permissions.",
        "Enable auditing for object access.",
        "Change the owner of the object."
      ],
      "correct": 0
    },
    {
      "id": "dcm-483",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match the specific Microsoft cloud service on the left with its accurate description on the right.\n\n : A service that streams a personalized, full Windows desktop experience (Cloud PC) to any device.\n : A unified communication hub for chat, video meetings, and app integration.\n : A cloud-based platform primarily used for creating internal websites and managing document libraries.\n : A personal storage service that allows users to sync files across devices and back up standard folders.",
      "explanation": "Windows 365 streams Cloud PCs, Teams provides communication, SharePoint manages sites and libraries, and OneDrive synchronizes individual files.",
      "dragItems": [
        {
          "id": "i1",
          "text": "SharePoint"
        },
        {
          "id": "i2",
          "text": "OneDrive"
        },
        {
          "id": "i3",
          "text": "Windows 365"
        },
        {
          "id": "i4",
          "text": "Microsoft Teams"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A service that streams a personalized, full Windows desktop experience (Cloud PC) to any device.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "A unified communication hub for chat, video meetings, and app integration.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "A cloud-based platform primarily used for creating internal websites and managing document libraries.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "A personal storage service that allows users to sync files across devices and back up standard folders.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "dcm-484",
      "chapter": "acces-date",
      "type": "single",
      "question": "A technician needs to create a new partition on a user's computer to store backup files. The disk currently has only one large \"C:\" partition that takes up the entire drive space, but it has 500GB of free space available. Which action in Disk Management must be performed on the C: volume first to make space available for the new partition? (Choose one)",
      "explanation": "Shrink Volume reduces C: and produces unallocated space from which another volume can be created. Unmovable files may limit the available shrink size.",
      "options": [
        "Extend Volume",
        "Format Volume",
        "Shrink Volume",
        "Change Drive Letter and Paths"
      ],
      "correct": 2
    },
    {
      "id": "dcm-485",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A network administrator is explaining network sharing concepts. For each statement, select Yes if the statement is true and No if it is false.",
      "explanation": "A dollar suffix hides a share from ordinary browsing but does not secure it. Mapping assigns a drive letter; public folder sharing is not granular enterprise access control.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Appending a \"$\" symbol to the end of a share name (e.g., Data$) hides the share from standard network browsing lists.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Mapping a network drive assigns a local drive letter (like Z:) to a shared network folder.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The \"Public Folder Sharing\" feature provides the highest level of security and granular access control for enterprise networks.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-486",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user attempts to copy a 6GB video file to a USB flash drive but receives an error message stating \"The file is too large for the destination file system,\" even though the drive has 20GB of free space. What is the most likely cause of this error? (Choose one)",
      "explanation": "FAT32 cannot store a single 6 GB file even when ample free space remains. Use an appropriate large-file file system after protecting existing data.",
      "options": [
        "The USB drive is encrypted with BitLocker.",
        "The user does not have \"Write\" permissions on the USB drive.",
        "The USB drive is formatted with the NTFS file system.",
        "The USB drive is formatted with the FAT32 file system."
      ],
      "correct": 3
    },
    {
      "id": "dcm-487",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user needs to manually connect to a network share using the Run dialog box. The server name is \"FileSrv\" and the share name is \"HR\". Which of the following represents the correct Universal Naming Convention (UNC) path syntax to access this share? (Choose one)",
      "explanation": "UNC paths use two leading backslashes, followed by a server name, a backslash, and a share name.",
      "options": [
        "FileSrv:HR",
        "\\\\FileSrv\\HR",
        "//FileSrv/HR",
        "C:\\FileSrv\\HR"
      ],
      "correct": 1
    },
    {
      "id": "dcm-488",
      "chapter": "acces-date",
      "type": "single",
      "question": "An administrator wants to combine three physical hard drives of different sizes into a single logical pool. This pool will be used to create virtual drives that can protect data against drive failure using parity. Which Windows feature should be used to achieve this? (Choose one)",
      "explanation": "Storage Spaces combines physical drives into a pool and creates virtual disks with supported resiliency settings, including parity.",
      "options": [
        "RAID 0 (Striping)",
        "Dynamic Disks",
        "Storage Spaces",
        "Pagefile Management"
      ],
      "correct": 2
    },
    {
      "id": "dcm-489",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A technician is studying how Windows handles conflicting permissions. For each statement about NTFS permission logic, select Yes if the statement is true and No if it is false.",
      "explanation": "Allow permissions from applicable identities accumulate, explicit deny entries override conflicting allows in canonical evaluation, and FAT32 cannot preserve NTFS ACLs.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Permissions assigned to a user directly and permissions assigned to the groups they belong to are cumulative (added together).",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "An explicit \"Deny\" permission takes precedence over an \"Allow\" permission, blocking access even if the user is in a group with Full Control.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "When copying a file from an NTFS drive to a FAT32 USB stick, the file retains its original Access Control List (ACL) permissions.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-490",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user wants to configure Windows to automatically delete temporary system files and empty the Recycle Bin for files that have been there for over 30 days. Which storage management feature should be enabled in the Settings app? (Choose one)",
      "explanation": "Storage Sense automates cleanup of eligible temporary files and Recycle Bin content according to configured retention settings.",
      "options": [
        "Storage Sense",
        "Disk Cleanup (Cleanmgr.exe)",
        "Defragment and Optimize Drives",
        "System Restore"
      ],
      "correct": 0
    },
    {
      "id": "dcm-491",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match the file attribute on the left with its correct function or description on the right.\n\n : Prevents a file from being accidentally modified or deleted by the user.\n : Prevents the file from being displayed in File Explorer unless the user changes the view settings.\n : Reduces the file size on the disk transparently, allowing the user to open it normally.\n : Historically used to indicate that a file has changed and needs to be backed up.",
      "explanation": "Read-only discourages ordinary content edits, Hidden affects default visibility, Compressed saves allocation space, and Archive traditionally flags changed files for backup.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Hidden"
        },
        {
          "id": "i2",
          "text": "Archive"
        },
        {
          "id": "i3",
          "text": "Read-only"
        },
        {
          "id": "i4",
          "text": "Compressed"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Discourages accidental content edits in applications; it is not a security permission and does not reliably prevent deletion.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Hides the file from ordinary File Explorer views unless hidden items are enabled.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Reduces disk allocation transparently while allowing normal file access.",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Traditionally indicates that a changed file should be backed up.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "dcm-492",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A consultant needs to secure sensitive data stored on a removable USB flash drive. The data must be encrypted so that if the drive is lost or stolen, the information remains unreadable to unauthorized users. Which Windows feature is specifically designed for this purpose? (Choose one)",
      "explanation": "BitLocker To Go encrypts supported removable drives and protects their contents when the drive is lost.",
      "options": [
        "Encrypting File System (EFS)",
        "NTFS Security Permissions",
        "Secure Boot",
        "BitLocker To Go"
      ],
      "correct": 3
    },
    {
      "id": "dcm-493",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A company requires that all laptop hard drives be fully encrypted to protect sensitive\ndata in case of theft. Which Windows feature should a technician enable to meet this\nrequirement?",
      "explanation": "BitLocker provides volume encryption rather than only file-level encryption or access permissions.",
      "options": [
        "Encrypting File System (EFS)",
        "NTFS Permissions",
        "BitLocker Drive Encryption",
        "Windows Defender Firewall"
      ],
      "correct": 2
    },
    {
      "id": "dcm-494",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement regarding Task Manager tabs in Windows 11, select Yes if the\nstatement is true and No if the statement is false.",
      "explanation": "App history reports usage rather than uninstalling programs; Performance shows resource graphs; Startup apps controls sign-in startup behavior.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The **App history** tab allows you to uninstall desktop applications directly.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The **Performance** tab displays real-time graphs for CPU, Memory, Disk, and Network usage.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The **Startup** tab allows you to disable applications from launching automatically when you sign in.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-495",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "A user wants to configure their laptop to save power without closing their applications.\nSelect the correct power state for each description using the dropdown lists.\n\nThis state saves your open documents and programs to the hard disk and then turns off\nyour computer completely. It uses zero power. \n[1]\n\nThis state puts your work and settings in memory and draws a small amount of power,\nallowing the computer to wake up quickly (within seconds). \n[2]\n\nThis setting creates a balanced approach between system performance and energy\nconsumption. \n[3]",
      "explanation": "Hibernate stores session state on disk and needs no power to preserve it. Sleep keeps memory powered; Balanced trades performance against energy use.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Sleep"
        },
        {
          "id": "i2",
          "text": "Shut down"
        },
        {
          "id": "i3",
          "text": "Balanced power plan"
        },
        {
          "id": "i4",
          "text": "Hibernate"
        },
        {
          "id": "i5",
          "text": "Shut down"
        },
        {
          "id": "i6",
          "text": "Balanced power plan"
        },
        {
          "id": "i7",
          "text": "Sleep"
        },
        {
          "id": "i8",
          "text": "Hibernate"
        },
        {
          "id": "i9",
          "text": "Shut down"
        },
        {
          "id": "i10",
          "text": "Balanced power plan"
        },
        {
          "id": "i11",
          "text": "Sleep"
        },
        {
          "id": "i12",
          "text": "Hibernate"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-496",
      "chapter": "acces-date",
      "type": "single",
      "question": "A stuck print queue does not recover after cancelling the offending job. Which listed service-level repair should be attempted before reinstalling the printer?",
      "explanation": "Restarting the spooler can recover a stalled queue when normal job cancellation fails. Reinstallation is unnecessarily disruptive as a first service-level repair.",
      "options": [
        "Reinstall the printer driver",
        "Turn the printer off and on again",
        "Restart the Print Spooler service",
        "Delete the printer and add it again"
      ],
      "correct": 2
    },
    {
      "id": "dcm-497",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match each non-technical security threat to its correct description.\n\n : Gathering information by looking over someone's shoulder as they work or enter a password.\n : Searching through trash or recycling bins to find sensitive documents or information.\n : Manipulating people into giving up confidential information (e.g., calling and pretending to be IT support).",
      "explanation": "Shoulder surfing observes private activity, dumpster diving retrieves discarded information, and social engineering manipulates people.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Social Engineering"
        },
        {
          "id": "i2",
          "text": "Shoulder Surfing"
        },
        {
          "id": "i3",
          "text": "Dumpster Diving"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Gathering information by looking over someone's shoulder as they work or enter a password.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Searching through trash or recycling bins to find sensitive documents or information.",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Manipulating people into giving up confidential information (e.g., calling and pretending to be IT support).",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "dcm-498",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A network administrator needs to verify the path that data packets take to reach a\nremote web server and identify where the connection is experiencing latency (delays).\nWhich command-line tool should they use?",
      "explanation": "tracert discovers route hops and reports round-trip probe times; one slow hop alone does not necessarily prove end-to-end loss.",
      "options": [
        "ipconfig",
        "tracert",
        "ping",
        "nslookup"
      ],
      "correct": 1
    },
    {
      "id": "dcm-499",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user installs a new PDF editor and wants it to open automatically whenever they\ndouble-click a .pdf file, replacing the current browser default. Which Settings\ncategory contains the option to change this behavior?",
      "explanation": "Default apps configures which application handles a file extension such as .pdf.",
      "options": [
        "System > Storage",
        "Personalization > Taskbar",
        "Apps > Default apps",
        "Accounts > Sign-in options"
      ],
      "correct": 2
    },
    {
      "id": "dcm-500",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each computer component to its primary function.\n\n : Performs calculations and executes instructions (The brain).\n : Stores data permanently, even when power is off.\n : Provides temporary, high-speed workspace for currently running programs (Volatile).\n : Renders images and video to the display.",
      "explanation": "The CPU executes general instructions, storage persists data, RAM provides volatile working memory, and the GPU processes graphics.",
      "dragItems": [
        {
          "id": "i1",
          "text": "SSD/HDD"
        },
        {
          "id": "i2",
          "text": "GPU"
        },
        {
          "id": "i3",
          "text": "CPU"
        },
        {
          "id": "i4",
          "text": "RAM"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Performs calculations and executes instructions (The brain).",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Stores data permanently, even when power is off.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Provides temporary, high-speed workspace for currently running programs (Volatile).",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Renders images and video to the display.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "dcm-501",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement regarding Windows Storage Sense, select Yes if the statement is true\nand No if the statement is false.",
      "explanation": "Storage Sense can run automatically and clean eligible Recycle Bin and temporary content according to configured settings.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Storage Sense requires the user to manually run the tool every time disk space is low.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Storage Sense can automatically delete files in the Recycle Bin that have been there for over 30 days.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Storage Sense can be configured to delete temporary files that apps are not using.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-502",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A small business needs to set up a computer that can join a corporate Domain (Active\nDirectory) and be managed via Group Policy. Which edition of Windows 11 is the\nminimum requirement to support these features?",
      "explanation": "Windows 11 Pro is the mainstream business edition that supports joining an Active Directory domain and domain Group Policy; Home does not.",
      "options": [
        "Windows 11 Home",
        "Windows 11 S Mode",
        "Windows 11 Education (Student)",
        "Windows 11 Pro"
      ],
      "correct": 3
    },
    {
      "id": "dcm-503",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A large organization uses Active Directory to manage hundreds of users. For each\nstatement about Active Directory, select Yes if the statement is true and No if the\nstatement is false.",
      "explanation": "Active Directory centralizes identity rather than eliminating authentication credentials. Domain controllers authenticate identities and GPOs enforce scoped settings.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Active Directory removes the need for individual user passwords.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A Domain Controller is the central server that authenticates users and computers on the network.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Group Policy Objects (GPOs) allow administrators to enforce specific settings on all computers at once.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-504",
      "chapter": "acces-date",
      "type": "single",
      "question": "A computer fails to boot correctly after a recent driver update, displaying a blue screen\nerror. Which troubleshooting mode loads Windows with a minimal set of drivers and\nservices to help diagnose the issue?",
      "explanation": "Safe Mode starts Windows with a minimal set of drivers and services to isolate startup problems.",
      "options": [
        "Fast Startup",
        "Safe Mode",
        "Sleep Mode",
        "Command Prompt Only"
      ],
      "correct": 1
    },
    {
      "id": "dcm-505",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each Windows accessibility tool to the user need it addresses.\n\n : Magnifies part or all of the screen for users with low vision.\n : Displays text on the screen for audio content (movies, videos).\n : Allows users to control the computer using voice commands instead of a mouse or keyboard.\n : Reads text aloud to users who are blind or have low vision.",
      "explanation": "Magnifier enlarges visual content, captions present spoken content as text, speech tools accept voice commands, and Narrator reads interface content aloud.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Closed Captions"
        },
        {
          "id": "i2",
          "text": "Magnifier"
        },
        {
          "id": "i3",
          "text": "Narrator"
        },
        {
          "id": "i4",
          "text": "Speech Recognition"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Magnifies part or all of the screen for users with low vision.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Displays text on the screen for audio content (movies, videos).",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Allows users to control the computer using voice commands instead of a mouse or keyboard.",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "Reads text aloud to users who are blind or have low vision.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-506",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user wants to share a folder named \"Reports\" with a colleague on the same network.\nThe colleague needs to be able to read files but NOT edit or delete them. Which\npermission level should be assigned?",
      "explanation": "Read permits viewing without granting write, modify, or delete rights; effective access also depends on other applicable permissions.",
      "options": [
        "Modify",
        "Read",
        "Write",
        "Full Control"
      ],
      "correct": 1
    },
    {
      "id": "dcm-507",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which type of update typically includes non-critical fixes, drivers, and new features,\nand is often optional or can be delayed by the user?",
      "explanation": "Feature updates introduce larger Windows capability changes and may be scheduled or deferred subject to support and policy requirements.",
      "options": [
        "Quality Update (Cumulative)",
        "Security Definition Update",
        "Feature Update",
        "Critical Security Patch"
      ],
      "correct": 2
    },
    {
      "id": "dcm-508",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A video editor attempts to copy a single 6 GB video file to an external USB flash\ndrive. Although the drive has 32 GB of free space, the transfer fails with an error\nstating the file is \"too large for the destination file system.\" What is the most\nlikely cause of this issue?",
      "explanation": "FAT32's per-file size limit is just under 4 GiB, regardless of remaining free space.",
      "options": [
        "The drive is formatted with the NTFS file system.",
        "The drive is formatted with the FAT32 file system.",
        "The USB port is only version 2.0.",
        "The file is encrypted."
      ],
      "correct": 1
    },
    {
      "id": "dcm-509",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match each Microsoft cloud service to its primary purpose.\n\n : Personal cloud storage integrated into File Explorer for backing up Desktop, Documents, and Pictures.\n : A collaboration platform primarily used for team communication, meetings, and file sharing.\n : A web-based platform used by organizations to create websites and manage content/documents.",
      "explanation": "OneDrive provides individual file synchronization, Teams supports communication and collaboration, and SharePoint hosts organizational sites and document libraries.",
      "dragItems": [
        {
          "id": "i1",
          "text": "SharePoint"
        },
        {
          "id": "i2",
          "text": "OneDrive"
        },
        {
          "id": "i3",
          "text": "Microsoft Teams"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Personal cloud storage integrated into File Explorer for backing up Desktop, Documents, and Pictures.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A collaboration platform primarily used for team communication, meetings, and file sharing.",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "A web-based platform used by organizations to create websites and manage content/documents.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "dcm-510",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A remote employee connects their company laptop to a free Wi-Fi hotspot at an airport.\nWindows prompts them to select a network profile. Which profile should they choose to\nensure their device is hidden from other devices on the network and file sharing is\ndisabled?",
      "explanation": "The Public profile uses restrictive discovery and sharing defaults appropriate for an untrusted hotspot.",
      "options": [
        "Domain Network",
        "Private Network",
        "Public Network",
        "Homegroup Network"
      ],
      "correct": 2
    },
    {
      "id": "dcm-511",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement regarding System Restore points, select Yes if the statement is true\nand No if the statement is false.",
      "explanation": "System Restore can reverse later application, driver, and system changes without being a personal-file backup. Automatic restore point creation depends on protection settings and system behavior, not every major update being guaranteed.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "System Restore can remove applications and drivers installed after the selected restore point.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "System Restore is intended to delete personal documents, photos, and emails.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Every major update is guaranteed to create a usable restore point, even with System Protection disabled.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-512",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A technician needs to connect a specialized legacy measuring device to a modern\nlaptop. The device uses a 9-pin DB9 connector (Serial/RS-232). The laptop only has\nUSB ports. What is the best solution to connect this device?",
      "explanation": "A compatible USB-to-serial adapter provides an RS-232 interface; the appropriate driver and serial settings are still required.",
      "options": [
        "Use a USB-to-Ethernet adapter.",
        "Use a VGA-to-HDMI adapter.",
        "Use a USB-to-Serial adapter.",
        "The device cannot be connected to a modern laptop."
      ],
      "correct": 2
    },
    {
      "id": "dcm-513",
      "chapter": "acces-date",
      "type": "single",
      "question": "A technician is repurposing a laptop for a new employee. The laptop currently has\nWindows 10 and data from a previous user. The technician wants to completely delete\nall files, apps, and settings, and install a fresh copy of Windows 11. Which\ninstallation option should they select during the setup process?",
      "explanation": "Custom installation supports a clean install. To erase previous data, back it up if needed and deliberately delete or format the correct partitions; choosing Custom alone does not guarantee erasure.",
      "options": [
        "Upgrade: Install Windows and keep files, settings, and applications",
        "Custom: Install Windows only (advanced)",
        "System Restore",
        "Windows Update"
      ],
      "correct": 1
    },
    {
      "id": "dcm-514",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user reports that they cannot print to any local printer. A technician suspects the\nbackground process responsible for managing print jobs has stopped running. Which\nadministrative tool is used to find and restart the \"Print Spooler\"?",
      "explanation": "The Services management console can inspect, start, stop, and restart the Print Spooler service.",
      "options": [
        "Device Manager",
        "Disk Management",
        "Registry Editor",
        "Services"
      ],
      "correct": 3
    },
    {
      "id": "dcm-515",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user is trying to connect a new Bluetooth headset to their laptop. Bluetooth is\nenabled on the laptop, but the headset does not appear in the \"Add a device\" list.\nWhat is the most likely reason the device is not being discovered?",
      "explanation": "The accessory generally must enter pairing/discovery mode before it appears as an available Bluetooth device.",
      "options": [
        "The laptop needs a driver update.",
        "The headset is not in pairing/discovery mode.",
        "The Wi-Fi is interfering with the signal.",
        "The headset is not fully charged."
      ],
      "correct": 1
    },
    {
      "id": "dcm-516",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An employee is working from a coffee shop and needs to access the company's internal\nintranet site, which is not available to the public internet. What technology allows\nthem to create a secure, encrypted tunnel to the corporate network?",
      "explanation": "A VPN provides encrypted remote access to authorized private corporate resources.",
      "options": [
        "Proxy Server",
        "Hotspot",
        "VPN (Virtual Private Network)",
        "Remote Desktop Protocol (RDP)"
      ],
      "correct": 2
    },
    {
      "id": "dcm-517",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement about setting up a new hard drive in Disk Management, select Yes if\nthe statement is true and No if the statement is false.",
      "explanation": "New uninitialized disks require initialization before volumes are created. Data volumes also need file systems, and an NTFS folder mount point can provide access without assigning a drive letter.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Only Windows installation volumes ever require formatting with a file system.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A new empty uninitialized disk must be initialized before volumes are created.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Every data volume must have a drive letter; a folder mount point cannot be used instead.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-518",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user reports that their Windows computer displays the wrong date and time every\ntime they restart the device after it has been unplugged from the power source.\nWhich hardware component on the motherboard is likely failing and needs to be replaced?",
      "explanation": "A failing RTC/CMOS battery can prevent the real-time clock from retaining the correct time without external power.",
      "options": [
        "Power Supply Unit (PSU)",
        "CMOS Battery",
        "CPU Fan",
        "Hard Drive"
      ],
      "correct": 1
    },
    {
      "id": "dcm-519",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A student is trying to install the Google Chrome web browser from a download link on\nthe internet. They receive an error message stating that \"For security and\nperformance, this mode of Windows only runs verified apps from the Store.\" Which\nWindows mode is currently enabled on the device?",
      "explanation": "Windows in S mode restricts app installation to supported Store applications; switching out of S mode is a separate deliberate action.",
      "options": [
        "Windows Safe Mode",
        "Windows Developer Mode",
        "Windows 10/11 in S mode",
        "Windows Tablet Mode"
      ],
      "correct": 2
    },
    {
      "id": "dcm-520",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A technician is troubleshooting a computer that cannot load a specific website, even\nthough the site works on other devices. The technician suspects the computer is holding\nonto an outdated IP address for that site. Which command should they run to clear the\nresolver cache?",
      "explanation": "ipconfig /flushdns clears the local DNS resolver cache so later queries can obtain fresh records.",
      "options": [
        "ipconfig /release",
        "ipconfig /flushdns",
        "ping -t",
        "netstat -an"
      ],
      "correct": 1
    },
    {
      "id": "dcm-521",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "When managing file permissions, the action you take affects whether permissions are\nkept or inherited. Select the correct outcome for each action.\n\nWhen you **copy** a file from one folder to another on the same drive, the file \n[1]\n the\npermissions of the destination folder.\nWhen you **move** a file from one folder to another on the same drive, the file \n[2]\n its\noriginal permissions.\nWhen you **move** a file from one drive to a different drive (e.g., C: to D:), the file\n\n[3]\n the permissions of the destination folder.",
      "explanation": "Under normal Explorer operations, copies and cross-volume moves inherit destination ACLs, whereas a move within the same NTFS volume normally preserves its ACL.",
      "dragItems": [
        {
          "id": "i1",
          "text": "prototype"
        },
        {
          "id": "i2",
          "text": "inherits"
        },
        {
          "id": "i3",
          "text": "extends"
        },
        {
          "id": "i4",
          "text": "implements"
        },
        {
          "id": "i5",
          "text": "retains"
        },
        {
          "id": "i6",
          "text": "inherits"
        },
        {
          "id": "i7",
          "text": "removes"
        },
        {
          "id": "i8",
          "text": "extends"
        },
        {
          "id": "i9",
          "text": "implements"
        },
        {
          "id": "i10",
          "text": "prototype"
        },
        {
          "id": "i11",
          "text": "inherits"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i8",
            "i9",
            "i10",
            "i11"
          ]
        }
      ]
    },
    {
      "id": "dcm-522",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user's computer is infected with malware and runs very slowly. You decide to use the\n\"Reset this PC\" feature to fix the OS. If you select the **\"Keep my files\"** option,\nwhich of the following will be preserved?",
      "explanation": "Keep my files reinstalls Windows while preserving personal files, but removes installed apps and resets settings. Back up first rather than treating reset as a guaranteed recovery method.",
      "options": [
        "Applications installed from the web (e.g., Chrome, Adobe Reader)",
        "Custom Windows settings (e.g., desktop wallpaper, theme)",
        "Files stored in the User's profile (Documents, Music, Pictures)",
        "Device drivers installed by the user"
      ],
      "correct": 2
    },
    {
      "id": "dcm-523",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A local administrator on a domain-joined computer changes the desktop wallpaper to a\npersonal photo. However, every time the computer is restarted, the wallpaper reverts to\nthe company logo. What is the most likely reason for this behavior?",
      "explanation": "A domain GPO can reapply the corporate desktop configuration and override conflicting local settings.",
      "options": [
        "The user's profile is corrupted.",
        "A Domain Group Policy Object (GPO) is overriding the local setting.",
        "The personal photo file is too large.",
        "Windows is not activated."
      ],
      "correct": 1
    },
    {
      "id": "dcm-524",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match the Device Manager icon or symbol to its correct meaning.\n\n : The device has a problem, a configuration error, or a missing driver.\n : The device has been manually disabled by an administrator or user.\n : The device is working properly.",
      "explanation": "A warning triangle indicates a device problem, a downward arrow indicates a disabled device, and an ordinary icon has no reported warning.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Small Down Arrow"
        },
        {
          "id": "i2",
          "text": "Yellow Triangle with Exclamation Mark"
        },
        {
          "id": "i3",
          "text": "No extra symbol (Standard Icon)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The device has a problem, a configuration error, or a missing driver.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "The device has been manually disabled by an administrator or user.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "The device is working properly.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-525",
      "chapter": "acces-date",
      "type": "single",
      "question": "A user has 1 TB of data on their corporate OneDrive but only 256 GB of space on their\nlaptop. They want to be able to see and browse all their files in File Explorer without\ndownloading them all and filling up the hard drive. Which OneDrive feature should be\nenabled?",
      "explanation": "Files On-Demand exposes online-only placeholders and downloads file content when needed.",
      "options": [
        "Always keep on this device",
        "Files On-Demand",
        "Storage Sense",
        "File History"
      ],
      "correct": 1
    },
    {
      "id": "dcm-526",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A company is upgrading its laptops and wants to utilize Windows Hello Facial Recognition\nfor secure sign-ins. Which specific hardware component must the new laptops' webcams\nhave to support this feature?",
      "explanation": "Windows Hello facial recognition requires a compatible infrared camera, not merely a high-resolution ordinary webcam.",
      "options": [
        "4K Resolution",
        "Privacy Shutter",
        "Infrared (IR) sensor",
        "High Dynamic Range (HDR)"
      ],
      "correct": 2
    },
    {
      "id": "dcm-527",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about File Explorer \"View\" settings, select Yes if the statement is\ntrue and No if the statement is false.",
      "explanation": "Visible extensions help expose deceptive filenames, but an extension is not proof of actual content. Hidden items shows ordinary hidden files; protected OS files have a separate visibility setting.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Hiding filename extensions is a recommended defense against deceptive filenames.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Displaying filename extensions helps identify suspicious names, although extensions do not verify file contents.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Hidden items shows ordinary hidden files and folders; protected OS files have an additional separate visibility setting.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-528",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "For each statement about command-line tools, select Yes if the statement is true and\nNo if the statement is false.",
      "explanation": "taskkill terminates processes, ipconfig displays network configuration, and ping probes IP reachability using ICMP.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The **taskkill** command is used to install new software updates.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The **ipconfig** command displays the current IP address and network configuration.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The **ping** command is used to test connectivity to another network device.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-529",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match each Ease of Access (Accessibility) tool to the user it is designed to help.\n\n : A tool that magnifies the screen for users with low vision.\n : A tool that reads text aloud for users who are blind or have low vision.\n : A tool that displays visual alerts for sounds for users who are hard of hearing.\n : A tool that allows users to type without a physical keyboard.",
      "explanation": "These tools respectively enlarge visuals, read content, replace sound cues with visual alerts, and provide software-based typing.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Show audio alerts visually"
        },
        {
          "id": "i2",
          "text": "Magnifier"
        },
        {
          "id": "i3",
          "text": "On-Screen Keyboard"
        },
        {
          "id": "i4",
          "text": "Narrator"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A tool that magnifies the screen for users with low vision.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A tool that reads text aloud for users who are blind or have low vision.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "A tool that displays visual alerts for sounds for users who are hard of hearing.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "A tool that allows users to type without a physical keyboard.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-530",
      "chapter": "acces-date",
      "type": "single",
      "question": "A company requires a backup strategy where a full backup is performed on Sunday, and\nonly the files that have changed since the last backup (whether full or incremental)\nare backed up on weekdays. Which backup type should be used for the weekday backups?",
      "explanation": "Incremental backups capture changes since the preceding backup; differential backups capture changes since the last full backup.",
      "options": [
        "Differential Backup",
        "Full Backup",
        "Incremental Backup",
        "Copy Backup"
      ],
      "correct": 2
    },
    {
      "id": "dcm-531",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which least-privileged ordinary Windows account type should be used for library visitors who must not make administrative system changes? Kiosk policy can impose further restrictions.",
      "explanation": "A standard account avoids administrative installation and system-wide changes. Kiosk restrictions can further limit a public terminal to selected activities.",
      "options": [
        "Standard User Account",
        "Administrator Account",
        "Domain Administrator Account",
        "Local System Account"
      ],
      "correct": 0
    },
    {
      "id": "dcm-532",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Choose the least-permissive listed standard BASIC NTFS permission group for each capability. Advanced individual rights can be narrower.\n\nAn IT administrator is configuring folder and execution permissions for a new group of\nusers.\n\nComplete the statements by selecting the appropriate permission level from each\ndrop-down list.\n\nThe \n[1]\n permission enables a user to generate a new nested folder.\nThe \n[2]\n permission grants the ability to remove a nested folder.\nThe \n[3]\n permission is required to launch and execute a program.",
      "explanation": "Among basic NTFS permission groups, Write enables creation, Modify includes deletion, and Read and Execute permits launching a program. Granular advanced permissions can grant narrower rights.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Full Control"
        },
        {
          "id": "i2",
          "text": "Write"
        },
        {
          "id": "i3",
          "text": "Read & execute"
        },
        {
          "id": "i4",
          "text": "Modify"
        },
        {
          "id": "i5",
          "text": "Modify"
        },
        {
          "id": "i6",
          "text": "Read & execute"
        },
        {
          "id": "i7",
          "text": "Write"
        },
        {
          "id": "i8",
          "text": "Full Control"
        },
        {
          "id": "i9",
          "text": "Write"
        },
        {
          "id": "i10",
          "text": "Modify"
        },
        {
          "id": "i11",
          "text": "Full Control"
        },
        {
          "id": "i12",
          "text": "Read and Execute"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-533",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Choose the appropriate power management state from each drop-down list based on the\nprovided scenario.\n\nThis Windows power state is ideal when stepping away from the computer briefly, allowing\nyou to quickly return to your open work. \n[1]\n\nThis Windows power state requires more time to wake up, but it saves the current session\nto the hard drive, minimizing power consumption during prolonged absences. \n[2]",
      "explanation": "Sleep keeps RAM powered for a quick resume; hibernation saves session state to disk for lower-power extended absence.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Sleep"
        },
        {
          "id": "i2",
          "text": "Hibernate"
        },
        {
          "id": "i3",
          "text": "Shut down"
        },
        {
          "id": "i4",
          "text": "Balanced power plan"
        },
        {
          "id": "i5",
          "text": "Sleep"
        },
        {
          "id": "i6",
          "text": "Shut down"
        },
        {
          "id": "i7",
          "text": "Balanced power plan"
        },
        {
          "id": "i8",
          "text": "Hibernate"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-534",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An employee states that recent organizational security policies, such as mandatory\nscreen locks and password rules, are not taking effect on their Windows 11 workstation.\nYou must force the computer to immediately apply these updated configurations.\n\nWhich action should be taken? (Choose one)",
      "explanation": "gpupdate /force reapplies Group Policy. gpresult reports policy results rather than applying updates.",
      "options": [
        "Select Reload from the Action menu in the Local Security Policy editor.",
        "Select Refresh from the View menu in the System Information tool.",
        "Execute gpresult /h in the command line interpreter.",
        "Execute gpupdate /force in the command line interpreter."
      ],
      "correct": 3
    },
    {
      "id": "dcm-535",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match each cybersecurity threat category on the left with its corresponding description\non the right.\n\n : Malicious software designed to automatically copy itself and spread across\nnetworks.\n : A type of malware that hides its true destructive intent by masquerading as safe or\nuseful software.\n : A cyberattack that floods a target server or network with traffic to overwhelm its\nresources and deny service to legitimate users.\n : A deceptive practice used to trick individuals into disclosing sensitive data, such\nas login credentials or financial information.",
      "explanation": "A worm self-propagates, a Trojan disguises malicious behavior, DDoS overwhelms service from distributed sources, and phishing tricks users into revealing information.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Worm"
        },
        {
          "id": "i2",
          "text": "Trojan Horse"
        },
        {
          "id": "i3",
          "text": "DDoS"
        },
        {
          "id": "i4",
          "text": "Phishing"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Malicious software designed to automatically copy itself and spread across networks.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A type of malware that hides its true destructive intent by masquerading as safe or useful software.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A cyberattack that floods a target server or network with traffic to overwhelm its resources and deny service to legitimate users.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "A deceptive practice used to trick individuals into disclosing sensitive data, such as login credentials or financial information.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-536",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user is setting up a personal laptop running Windows 11. Which type of user\nprofile must be utilized in order to modify core system files and settings? (Choose one)",
      "explanation": "Administrative privileges are needed for protected system changes, usually through an elevated process approved by UAC.",
      "options": [
        "Microsoft Account",
        "Domain User Account",
        "Standard User Account",
        "Administrator User Account"
      ],
      "correct": 3
    },
    {
      "id": "dcm-537",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding Windows Update configuration in Windows 11.\nSelect Yes if the statement is accurate and No if it is incorrect.",
      "explanation": "Optional updates are under Advanced options, update removal is available through Update history, and active hours do not need to be configured before updates can install.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "You can find and install optional updates directly within the Advanced Options menu of Windows Update.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The option to remove a recently applied update is located within the Update History section.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Mandatory updates that are waiting to be installed require active hours to be configured before they will execute.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-538",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "You serve as a Level 1 helpdesk technician in an organization with a four-level IT\nsupport structure.\n\nA user contacts you regarding a problem involving specific hardware components that fall\noutside the scope of your current training and expertise.\n\nWhat is the most appropriate course of action to ensure the user receives help? (Choose\none)",
      "explanation": "Escalating according to the support structure routes an out-of-scope issue to staff with the necessary expertise while preserving ticket ownership and context.",
      "options": [
        "Transfer the user's ticket to a Level 2 support technician for further investigation.",
        "Contact the device manufacturer to obtain the necessary training to assist the user.",
        "Formally request training on the unfamiliar equipment and applications in order to provide support.",
        "Give the user the manufacturer's contact information so they can seek external assistance."
      ],
      "correct": 0
    },
    {
      "id": "dcm-539",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "You are customizing the user interface on a Windows 11 machine.\n\nEvaluate whether each of the following elements can be modified natively through local\nsettings. Select Yes if customizable, or No if it cannot be changed.",
      "explanation": "Windows 11 does not natively replace the Start icon or freely move the taskbar to screen edges. It permits left/center taskbar alignment, display settings, and selected Start folders.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Start button graphic can be replaced natively through Windows 11 Settings.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Windows 11 Settings natively supports moving the taskbar to any screen edge.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Display resolution and orientation can be changed through supported display settings.",
          "correctItemId": "yes"
        },
        {
          "id": "z4",
          "label": "Selected quick-link folders can be shown beside the Start menu power button.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-540",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "If a desktop application freezes and stops responding to user input, which section of\nthe Windows Task Manager is utilized to forcefully terminate the software? (Choose one)",
      "explanation": "Processes lets a user select a hung application and end its task.",
      "options": [
        "Performance",
        "App history",
        "Startup apps",
        "Processes"
      ],
      "correct": 3
    },
    {
      "id": "dcm-541",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Read the following assertions regarding software installation and removal in Windows.\nChoose Yes if the assertion is correct, or No if it is incorrect.",
      "explanation": "64-bit programs normally use Program Files, deleting a folder is not a full uninstall, and protected system-wide installation requires administrator authorization.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "By default, the operating system places 64-bit software programs into the \"C:\\Program Files (x86)\" directory.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Manually erasing a program's installation folder will fully uninstall the software and clear all related Windows Registry entries.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Standard User accounts will trigger a User Account Control (UAC) authorization request when attempting to install software into protected system directories like \"Program Files\".",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-542",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An employee is reporting that their Microsoft Word application closes unexpectedly\nmultiple times a day.\n\nBased on the provided Event Viewer hierarchy, which specific log section must be\nanalyzed to identify the software crash details?",
      "explanation": "Application logs contain software-related events, including many application crash reports.",
      "options": [
        "Application",
        "Security",
        "System",
        "Forwarded Events"
      ],
      "correct": 0,
      "image": "assets/device-config/pdf-099-event-viewer.png"
    },
    {
      "id": "dcm-543",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding computer motherboard specifications and\ncapabilities. Select Yes if the statement is true and No if it is false.",
      "explanation": "Motherboard support constrains RAM capacity and speeds along with the CPU and firmware. Intel and AMD processors need compatible sockets and chipsets; firmware settings reside in motherboard-associated nonvolatile storage.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The physical limitations of the motherboard dictate both the maximum amount and the highest operational speed of the System Memory (RAM) that can be installed.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A user can seamlessly replace an existing Intel central processing unit with an AMD processor while retaining the same motherboard.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "System firmware configurations (BIOS/UEFI settings) are saved directly onto a memory chip located on the motherboard.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-544",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Review the following statements concerning the functionality of the Microsoft\nAuthenticator application in a Windows 11 environment. Choose Yes if the statement is\ncorrect, or No if it is incorrect.",
      "explanation": "Authenticator supports configured online identity verification, not arbitrary local Windows accounts. Properly enrolled passwordless or MFA methods can provide alternatives and time-based codes.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Microsoft Authenticator mobile app can deliver verification prompts to authorize sign-ins for both local machine accounts and cloud-based Microsoft accounts.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "In the event of a forgotten password, the Microsoft Authenticator app can be utilized as an alternative credential to gain access to your account.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "As a component of multi-factor authentication (MFA), the Microsoft Authenticator app produces temporary, time-restricted security codes.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-545",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "During a routine system sweep, Windows Defender intercepts and isolates a file it\nsuspects is malicious.\n\nHowever, your system administrator verifies that the flagged file is actually a safe,\nrequired application experiencing a false positive.\n\nWhat is the correct procedure to resolve this? (Choose one)",
      "explanation": "After an authorized administrator verifies a false positive, restoring the quarantined file returns it to use. Do not broadly disable protection.",
      "options": [
        "Perform a secondary malware sweep.",
        "Uninstall and then reinstall the application.",
        "Restore the isolated file from the quarantine section.",
        "Locate the file path in File Explorer and permanently delete it."
      ],
      "correct": 2
    },
    {
      "id": "dcm-546",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "An individual owns several Windows PCs at their residence and wishes to seamlessly\nsynchronize their personal files, browser favorites, and desktop themes across all\ndevices.\n\nWhich user account configuration is necessary to enable this automatic synchronization?\n(Choose one)",
      "explanation": "A Microsoft account enables supported Windows, OneDrive, and browser synchronization features when their synchronization settings are enabled.",
      "options": [
        "Guest Account",
        "Microsoft Account",
        "Local Account",
        "Domain Account"
      ],
      "correct": 1
    },
    {
      "id": "dcm-547",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user with the EFS decryption key successfully copies EFS-encrypted NTFS files to FAT32 and approves decryption if prompted. Which security attributes remain on the FAT32 copies?",
      "explanation": "A successful authorized copy to FAT32 cannot retain NTFS ACLs or EFS encryption. Without permission or the decryption key, the copy can fail instead.",
      "options": [
        "The copies retain file encryption but are stripped of their user access permissions.",
        "The copies are stripped of both their user access permissions and their encryption.",
        "The copies maintain their original access permissions but lose their file encryption.",
        "The copies successfully retain both their encryption and their access permissions."
      ],
      "correct": 1
    },
    {
      "id": "dcm-548",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Whenever a user tries to execute an installer to add new software to a Windows computer,\na security dialog box appears asking for confirmation.\n\nWhich built-in Windows security component is responsible for generating this\nauthorization request? (Choose one)",
      "explanation": "UAC requests consent or administrator credentials for operations requiring elevated privileges.",
      "options": [
        "Active Directory (AD)",
        "Windows Defender",
        "Windows Hello",
        "User Account Control (UAC)"
      ],
      "correct": 3
    },
    {
      "id": "dcm-549",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Review the following statements regarding the functions of Windows Device Manager and\nDisk Management tools. Select Yes if the statement is accurate, or No if it is false.",
      "explanation": "Disk Management initializes, partitions, and formats disks; temporary-file cleanup belongs to other tools. Device Manager installs and updates device drivers.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Disk Management utility is the primary tool used to initialize, partition, and format newly installed hard drives.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "You can utilize the Disk Management console to run a cleanup operation that removes temporary files and reclaims storage space on a full hard drive.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The Device Manager interface provides the functionality to manually install or update driver software for specific hardware components.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-550",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "Assess the validity of the following statements concerning physical hardware connectors\nand ports. Choose Yes if the statement is factually correct, or No if it is incorrect.",
      "explanation": "DVI and VGA connectors differ, USB-C and USB-A differ physically, and compatible USB Type-A generations retain their basic plug shape.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A user can directly connect a monitor with a DVI cable into a computer's VGA port without requiring an intermediate adapter.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A peripheral device utilizing a modern USB Type-C connector can be inserted directly into a traditional USB Type-A port.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A standard USB 3.0 (Type-A) cable is physically backwards compatible and can be plugged directly into an older USB 1.0 (Type-A) port without an adapter.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-551",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "You wirelessly connect your Windows 11 laptop to a 1080p (FHD) display monitor. You\nintend to play a 4K resolution video file using a media application on the external\ndisplay.\n\nThe configuration must adhere to the following conditions:\n- The media player content must be isolated on the external display.\n- All desktop shortcuts, application windows, and the taskbar must remain visible only\non the laptop.\n- The external display must render the media content with the highest possible clarity\nsupported by its hardware.\n\nYou access the Display settings and select the external monitor.\n\nChoose the correct configuration for each setting from the drop-down lists.\n\nDisplay resolution: \n[1]\n\nDisplay orientation: \n[2]\n\nMultiple displays: \n[3]",
      "explanation": "Use the monitor's native Full HD resolution and an extended desktop. Move the player to it and disable showing the taskbar on all displays to keep taskbars on the laptop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "1280 × 720"
        },
        {
          "id": "i2",
          "text": "1024 × 768"
        },
        {
          "id": "i3",
          "text": "1920 × 1080"
        },
        {
          "id": "i4",
          "text": "3840 × 2160"
        },
        {
          "id": "i5",
          "text": "Portrait (flipped)"
        },
        {
          "id": "i6",
          "text": "Landscape"
        },
        {
          "id": "i7",
          "text": "Portrait"
        },
        {
          "id": "i8",
          "text": "Landscape (flipped)"
        },
        {
          "id": "i9",
          "text": "Extend these displays"
        },
        {
          "id": "i10",
          "text": "Duplicate these displays"
        },
        {
          "id": "i11",
          "text": "Show only on 1"
        },
        {
          "id": "i12",
          "text": "Show only on 2"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ],
      "image": "assets/device-config/pdf-093-display-settings.png"
    },
    {
      "id": "dcm-552",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A user notices their Windows 11 system is lagging significantly due to a frozen software\nprogram.\n\nWhat is the correct sequence of steps within the Task Manager application to alleviate\nthis problem? (Choose one)",
      "explanation": "Select the frozen application in Processes and choose End task; changing startup behavior does not stop the current hung instance.",
      "options": [
        "Navigate to the Processes tab and click End task.",
        "Go to the Services tab and select Stop service.",
        "Open the Startup apps tab and choose Disable.",
        "View the Performance tab and analyze Resource usage."
      ],
      "correct": 0
    },
    {
      "id": "dcm-553",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "A user's laptop has dropped its internet connection, and they suspect an issue with the\nlocal Wi-Fi router link. What are the appropriate steps to diagnose and resolve this?\nComplete the following statements by choosing the correct troubleshooting action from\neach drop-down list.\n\nLaunch the Command Prompt and \n[1]\n.\nIf the system tray displays a 'No internet' symbol, ensure \n[2]\n.\nAs a general connectivity fix, consider \n[3]\n.",
      "explanation": "Gateway reachability tests the local routed path, checking Wi-Fi addresses a disabled or disconnected link, and a controlled restart may clear transient faults.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ping the default gateway"
        },
        {
          "id": "i2",
          "text": "format the operating-system volume"
        },
        {
          "id": "i3",
          "text": "clear the browser bookmarks"
        },
        {
          "id": "i4",
          "text": "disable all firewall rules"
        },
        {
          "id": "i5",
          "text": "the display resolution is set to its maximum"
        },
        {
          "id": "i6",
          "text": "the printer is the default device"
        },
        {
          "id": "i7",
          "text": "Storage Sense is disabled"
        },
        {
          "id": "i8",
          "text": "Wi-Fi is enabled and connected to the intended network"
        },
        {
          "id": "i9",
          "text": "disable encryption permanently"
        },
        {
          "id": "i10",
          "text": "replace every application"
        },
        {
          "id": "i11",
          "text": "restart the network adapter or router when authorized"
        },
        {
          "id": "i12",
          "text": "delete the Windows directory"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-554",
      "chapter": "management-depanare",
      "type": "single",
      "question": "A Windows feature update causes instability. The rollback period is still available. Which option returns to the previous Windows version, with the understanding that applications installed after the upgrade may need reinstallation?",
      "explanation": "Go back is the supported feature-update rollback when available. Apps installed after the upgrade may be removed and need reinstallation; no listed method guarantees retaining them.",
      "options": [
        "Go back",
        "Reset this PC",
        "System Restore",
        "System Image Recovery"
      ],
      "correct": 0
    },
    {
      "id": "dcm-555",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Match the hardware cable connector type on the left with its corresponding\ncharacteristic on the right.\n\n : Capable of transmitting both electricity for charging and digital data streams\nsimultaneously.\n : An older analog video standard frequently seen on older models of displays and\nPCs.\n : A digital interface common on PC graphics cards and monitors, but generally\nabsent from home gaming consoles.\n : A ubiquitous audio/video interface standard found across TVs, PCs, consoles,\nand projection equipment.",
      "explanation": "USB-C can carry power and data, VGA is analog video, DisplayPort is common on PC displays, and HDMI is widespread in consumer audio/video equipment.",
      "dragItems": [
        {
          "id": "i1",
          "text": "USB Type-C"
        },
        {
          "id": "i2",
          "text": "VGA"
        },
        {
          "id": "i3",
          "text": "DisplayPort"
        },
        {
          "id": "i4",
          "text": "HDMI"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Capable of transmitting both electricity for charging and digital data streams simultaneously.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "An older analog video standard frequently seen on older models of displays and PCs.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A digital interface common on PC graphics cards and monitors, but generally absent from home gaming consoles.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "A ubiquitous audio/video interface standard found across TVs, PCs, consoles, and projection equipment.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-556",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding computer memory and storage technologies.\nSelect True if the statement is correct, or False if it is incorrect.",
      "explanation": "RAM is volatile, SSDs generally outperform mechanical disks for latency and random access, and all listed devices are physical nonvolatile storage.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "System RAM (Random Access Memory) retains its data even when the computer's power is turned off, making it non-volatile.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Even the highest-performing, low-latency mechanical Hard Disk Drives (HDDs) generally offer faster data read/write speeds than standard Solid State Drives (SSDs).",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The category of physical storage devices encompasses Solid State Drives (SSDs), mechanical Hard Disks (HDDs), and portable USB flash media.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-557",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "A Windows 11 system named SERVER01 contains a directory located at E:\\Docs\\Finance. This\ndirectory is shared over the network with the share name 'Finance'. You are connecting\nto SERVER01 remotely using the Remote Desktop Protocol (RDP) and also have network\naccess to the share.\n\nBased on the provided effective permissions (Assume Share: Read, NTFS: Modify for\nEveryone), evaluate the following scenarios and select the correct outcome from each\ndrop-down list.\n\nAre you able to open and read a document via the network path \\\\SERVER01\\Finance? \n[1]\n\nAre you able to create a new document in the network path \\\\SERVER01\\Finance? \n[2]\n\nAre you able to edit a document locally at E:\\Docs\\Finance during your Remote Desktop\nsession to SERVER01? \n[3]",
      "explanation": "Network access intersects Share Read with NTFS Modify, leaving Read. A local path used within an RDP session is governed by NTFS, not the SMB share permissions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        },
        {
          "id": "i3",
          "text": "Yes"
        },
        {
          "id": "i4",
          "text": "No"
        },
        {
          "id": "i5",
          "text": "Yes"
        },
        {
          "id": "i6",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4",
          "optionIds": [
            "i3",
            "i4"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6"
          ]
        }
      ],
      "image": "assets/device-config/pdf-102-training-permissions.png"
    },
    {
      "id": "dcm-558",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Determine whether each statement describes a Private network or a Public network\nconnection profile in Windows.\n\nSelect the appropriate option from each drop-down list.\n\nThis configuration disables network discovery, preventing your machine from being\nvisible to other computers on the LAN. \n[1]\n\nThis setting is recommended for trusted environments, such as your house or a corporate\noffice, allowing file and printer sharing. \n[2]\n\nThis profile should be selected when joining a coffee shop's Wi-Fi hotspot or a hotel\nnetwork where you don't know the other connected users. \n[3]",
      "explanation": "Public is appropriate for untrusted networks and restricts discovery; Private supports trusted-network sharing when enabled.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Domain"
        },
        {
          "id": "i2",
          "text": "Public"
        },
        {
          "id": "i3",
          "text": "Private"
        },
        {
          "id": "i4",
          "text": "Private"
        },
        {
          "id": "i5",
          "text": "Public"
        },
        {
          "id": "i6",
          "text": "Domain"
        },
        {
          "id": "i7",
          "text": "Private"
        },
        {
          "id": "i8",
          "text": "Domain"
        },
        {
          "id": "i9",
          "text": "Public"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ]
    },
    {
      "id": "dcm-559",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "An employee reports they have lost internet access on their workstation. To begin\ntroubleshooting, you need to find out the machine's assigned IPv4 address and the\naddress of the router it uses to reach the internet.\n\nWhich command-line utility provides this information? (Choose one)",
      "explanation": "ipconfig displays interface IP addresses and default gateways without releasing the network configuration.",
      "options": [
        "ipconfig /release",
        "ping 127.0.0.1",
        "ping 0.0.0.0",
        "ipconfig"
      ],
      "correct": 3
    },
    {
      "id": "dcm-560",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Which of the following describes a recognized limitation or restriction associated with\nMicrosoft Copilot in a Windows environment? (Choose one)",
      "explanation": "Copilot availability and integration vary by supported OS, app version, region, account, and policy. It is not limited to Microsoft-only apps or grammatically complete prompts, and image generation is not universally premium-only.",
      "options": [
        "Copilot features depend on supported OS/app versions, account, region, and organizational policy.",
        "Copilot can only launch Microsoft applications.",
        "Every Copilot image generation feature always requires a paid subscription.",
        "All Copilot prompts must be grammatically complete sentences."
      ],
      "correct": 0
    },
    {
      "id": "dcm-561",
      "chapter": "acces-date",
      "type": "single",
      "question": "You need to set up an automated backup for a specific local directory (e.g.,\nE:\\Work\\Manuals) on a Windows 11 machine. The backup must run every 15 minutes, must not\ndepend on an active internet connection, and should exclusively back up this single\nfolder while allowing for the restoration of previous file versions.\n\nWhat is the most appropriate configuration to achieve this? (Choose one)",
      "explanation": "File History can version selected included personal data to a local or network backup target on a 15-minute schedule; include the target folder through supported library configuration and exclude unwanted content.",
      "options": [
        "Turn on File History and designate a local external or network drive as the target.",
        "Utilize the Backup and Restore tool to generate a full system image.",
        "Set up Microsoft OneDrive to synchronize the folder to the cloud.",
        "Create a scheduled task to trigger System Restore points frequently."
      ],
      "correct": 0
    },
    {
      "id": "dcm-562",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "In a corporate environment utilizing Windows 11 Pro, what kind of user account is\nspecifically required to authenticate against the company's central directory and gain\nentry to shared network assets and services? (Choose one)",
      "explanation": "An organizational domain account authenticates against the central directory and receives access according to domain permissions.",
      "options": [
        "Domain Account",
        "Local Standard Account",
        "Local Administrator Account",
        "Microsoft account"
      ],
      "correct": 0
    },
    {
      "id": "dcm-563",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding the capabilities of Microsoft Active\nDirectory. Select True if the statement is correct, or False if it is incorrect.",
      "explanation": "Active Directory centralizes identities and authentication. It is neither a workstation search index nor a mechanism for unrestricted self-promotion to administrator.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "It provides a centralized authentication mechanism, enabling a user to access authorized resources across the entire domain using a single set of credentials.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Its primary function is to index the local hard drive to allow for rapid file and folder searches on an individual workstation.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The architecture is designed to empower every standard user to independently assign themselves elevated administrative privileges on the network.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-564",
      "chapter": "acces-date",
      "type": "single",
      "question": "After installing a new driver for the pointing device on a Windows 11 system, the device\nbecomes unresponsive. Prior to this installation, it functioned normally. To restore\nfunctionality without completely removing the device, you access the device's Properties\nwindow within Device Manager.\n\nWhich option on the Driver tab should you use to revert the change? (Choose one)",
      "explanation": "Roll Back Driver restores the previously installed driver when a rollback package is available.",
      "options": [
        "Update Driver",
        "Roll Back Driver",
        "Uninstall Device",
        "Disable Device"
      ],
      "correct": 1,
      "image": "assets/device-config/pdf-101-touchpad-driver.png"
    },
    {
      "id": "dcm-565",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "Which panel under System > Display lets you select a supported monitor refresh rate and inspect detailed display information?",
      "explanation": "System > Display controls resolution; Advanced display provides refresh rate and detailed display information for the selected monitor.",
      "options": [
        "Advanced display",
        "Gaming",
        "Accessibility",
        "Device Manager"
      ],
      "correct": 0
    },
    {
      "id": "dcm-566",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which of the following best describes the core purpose and contents of the Windows\nRegistry? (Choose one)",
      "explanation": "The Registry is a hierarchical configuration database for Windows, users, software, and hardware; it is not an antivirus or file index.",
      "options": [
        "It serves as a centralized database for storing configuration settings for the operating system, user preferences, installed applications, and hardware devices.",
        "It acts as a real-time scanner that actively blocks malicious software and network-based threats.",
        "It continuously verifies the structural integrity and health of all system files located on the primary storage drive.",
        "It maintains a catalog of all user files to significantly decrease the time required to perform local searches."
      ],
      "correct": 0
    },
    {
      "id": "dcm-567",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match each Microsoft service or application with its corresponding purpose or primary\nfeature set.\n\n : A comprehensive suite of cloud-hosted applications designed for workforce\nproductivity.\n : A digital notebook application structured similar to a physical binder, complete\nwith individual sections and pages.\n : A centralized platform utilized primarily for document storage, sharing, and\nintra-organizational collaboration.\n : A cloud-based virtualization service that streams a full operating system\nexperience to various end-user devices, regardless of their native OS.",
      "explanation": "Microsoft 365 supplies productivity services, OneNote organizes notebooks, SharePoint supports organizational content collaboration, and Windows 365 streams Cloud PCs.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Microsoft 365"
        },
        {
          "id": "i2",
          "text": "OneNote"
        },
        {
          "id": "i3",
          "text": "SharePoint"
        },
        {
          "id": "i4",
          "text": "Windows 365"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A comprehensive suite of cloud-hosted applications designed for workforce productivity.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A digital notebook application structured similar to a physical binder, complete with individual sections and pages.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A centralized platform utilized primarily for document storage, sharing, and intra-organizational collaboration.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "A cloud-based virtualization service that streams a full operating system experience to various end-user devices, regardless of their native OS.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-568",
      "chapter": "management-depanare",
      "type": "single",
      "question": "You are troubleshooting a DHCP issue and need to request a fresh IPv4 address lease for\nall active network interfaces on a Windows workstation.\n\nWhat is the correct command-line instruction to accomplish this? (Choose one)",
      "explanation": "ipconfig /renew requests renewal for eligible DHCP-configured IPv4 adapters. It does not affect static addresses or guarantee a different address.",
      "options": [
        "ipconfig /all",
        "ipconfig /renew",
        "ipconfig /release",
        "ipconfig"
      ],
      "correct": 1
    },
    {
      "id": "dcm-569",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "You currently access your Windows 11 device using a standard alphanumeric password. You\nwish to implement an alternative authentication factor for a faster login experience.\nHowever, your device lacks a built-in camera or fingerprint reader.\n\nBased on the available 'Sign-in options' menu, which method should you configure?\n(Choose one)",
      "explanation": "A Windows Hello PIN works without biometric hardware and is bound to the device. It is an alternate sign-in credential, not automatically an extra independent MFA factor.",
      "options": [
        "Security key",
        "PIN (Windows Hello)",
        "Fingerprint recognition (Windows Hello)",
        "Facial recognition (Windows Hello)"
      ],
      "correct": 1,
      "image": "assets/device-config/pdf-100-sign-in-options.png"
    },
    {
      "id": "dcm-570",
      "chapter": "acces-date",
      "type": "single",
      "question": "You connect a new external USB-C Solid State Drive (SSD) to your Windows 11 laptop. The\ndrive does not appear in File Explorer. Upon checking Device Manager under 'Disk\ndrives', you only see your laptop's internal NVMe drive; the new SSD is completely\nmissing from the list.\n\nWhat is the most appropriate next step to try and force Windows to detect the drive?\n(Choose one)",
      "explanation": "Scan for hardware changes asks Plug and Play to enumerate newly attached hardware. A disk cannot be initialized until Windows detects it.",
      "options": [
        "In Device Manager, click the 'Action' menu and select 'Scan for hardware changes'.",
        "Open Disk Management and initialize the drive.",
        "Run the Windows Network Diagnostics tool.",
        "Update the driver for the internal NVMe drive."
      ],
      "correct": 0,
      "image": "assets/device-config/pdf-098-device-manager.png"
    },
    {
      "id": "dcm-571",
      "chapter": "instalare-config",
      "type": "single",
      "question": "Within the Windows 11 operating system, which specific Settings category must you\nnavigate to in order to modify the scale and dimensions of the mouse cursor? (Choose\none)",
      "explanation": "Windows 11 exposes pointer size and related assistive settings under Accessibility.",
      "options": [
        "Accessibility",
        "Ease of Access",
        "Personalization",
        "Hardware and Sound"
      ],
      "correct": 0
    },
    {
      "id": "dcm-572",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What is the main difference between Share Permissions and NTFS Permissions? (Choose one)",
      "explanation": "SMB share permissions restrict network access; NTFS permissions apply to files and folders for both local and network access. Network access must satisfy both.",
      "options": [
        "Share permissions apply only to local files, while NTFS applies only over the network.",
        "Share permissions control access over the network, while NTFS applies always, regardless of the access method (local or network).",
        "NTFS permissions are limited to read and write, while Share offers granular control.",
        "Share permissions automatically override any NTFS setting."
      ],
      "correct": 1
    },
    {
      "id": "dcm-573",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding Share Permission access levels. Select Yes if the statement is true and No if it is false.",
      "explanation": "Share Read does not allow editing, Change includes writing and deletion, and Full Control permits remote permission changes only when NTFS also authorizes them.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The \"Read\" level allows the user to modify and delete files over the network.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The \"Change\" level allows creating new folders and modifying existing files.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The \"Full Control\" level allows changing NTFS permissions remotely.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-574",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Complete the analogy used in the lesson to describe the two security layers.\n\nThe \n[1]\n permissions act as the security guard at the building's main gate.\nThe \n[2]\n permissions act as the security guards at each office door.",
      "explanation": "Share permissions govern the network entry point, while NTFS permissions govern access to individual files and directories.",
      "dragItems": [
        {
          "id": "i1",
          "text": "NTFS"
        },
        {
          "id": "i2",
          "text": "FAT32"
        },
        {
          "id": "i3",
          "text": "EFS"
        },
        {
          "id": "i4",
          "text": "Share"
        },
        {
          "id": "i5",
          "text": "FAT32"
        },
        {
          "id": "i6",
          "text": "EFS"
        },
        {
          "id": "i7",
          "text": "NTFS"
        },
        {
          "id": "i8",
          "text": "Share"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-575",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the security concept on the left with its corresponding description on the right.\n\n : The final and actual set of rights a user has after combining all group memberships.\n : The supreme rule that cancels out any other access right.\n : The inherent right to change permissions, held by the file's creator.",
      "explanation": "Effective permissions combine applicable access entries. Explicit deny can block conflicting allows; an object's owner normally has the inherent ability to change its permissions, subject to owner-rights restrictions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Effective Permissions"
        },
        {
          "id": "i2",
          "text": "Owner"
        },
        {
          "id": "i3",
          "text": "Deny Permission"
        },
        {
          "id": "i4",
          "text": "Advanced Sharing"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The resulting access rights after evaluating applicable identity and group entries.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "An explicit access-control entry that blocks conflicting allowed rights.",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "The identity that normally has an inherent right to change the object ACL, subject to owner-rights restrictions.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "dcm-576",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What is the industry-recommended \"Best Practice\" for combining Share and NTFS permissions? (Choose one)",
      "explanation": "A common administration pattern uses suitably permissive share access and detailed NTFS ACLs. Limit share access to appropriate principals and retain least privilege rather than granting unnecessary access.",
      "options": [
        "Setting strict rules at the Share level and permissive permissions at the NTFS level.",
        "Exclusively using Share permissions and ignoring the Security tab.",
        "Granting permissive Share permissions (e.g., Everyone - Change) and handling detailed security strictly through NTFS permissions.",
        "Using the \"Deny\" permission on both layers for maximum security."
      ],
      "correct": 2
    },
    {
      "id": "dcm-577",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the statements regarding the rules for calculating Effective Permissions. Select Yes if the statement is true and No if it is false.",
      "explanation": "Applicable allows accumulate, being a manager does not override explicit deny, and Effective Access helps evaluate rights. Remote share restrictions may still need separate verification.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "\"Allow\" permissions received from multiple groups are cumulative, applying the most permissive set.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If you are a manager (with Full Control), a \"Deny\" permission applied to one of your groups will be ignored.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The \"Effective Access\" tool allows testing and viewing a user's final rights without doing manual calculations.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-578",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What is the relationship between Basic Permissions and Advanced Permissions in NTFS? (Choose one)",
      "explanation": "Basic NTFS permissions are convenient bundles of granular advanced access rights rather than a separate security system.",
      "options": [
        "They are two completely different security systems that conflict with each other.",
        "Basic Permissions are simply \"shortcuts\" that simultaneously check a specific group of Advanced Permissions.",
        "Advanced Permissions apply only to network access, and Basic apply to local access.",
        "Basic Permissions can override a \"Deny\" set in Advanced Permissions."
      ],
      "correct": 1
    },
    {
      "id": "dcm-579",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Analyze the sharing types available in Windows.\n\nThe method designed for home networks, where files automatically become accessible, is the \n[1]\n Share.\nThe manual and comprehensive method, used by administrators on servers for total control, is the \n[2]\n Share.",
      "explanation": "Public folder sharing offers a simple shared location; Advanced Sharing exposes explicit share configuration. Public access still requires appropriate sharing and security settings.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Administrative"
        },
        {
          "id": "i2",
          "text": "Hidden"
        },
        {
          "id": "i3",
          "text": "Public Folder"
        },
        {
          "id": "i4",
          "text": "Advanced"
        },
        {
          "id": "i5",
          "text": "Hidden"
        },
        {
          "id": "i6",
          "text": "Advanced"
        },
        {
          "id": "i7",
          "text": "Public Folder"
        },
        {
          "id": "i8",
          "text": "Administrative"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-580",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the advanced NTFS permission with the action it allows.\n\n : The right to see the list of files within a folder.\n : The right to change security settings for other users.\n : The right to pass through a parent folder to reach a subfolder.",
      "explanation": "These rights respectively enumerate a directory, modify its ACL, and traverse it to reach an object below it.",
      "dragItems": [
        {
          "id": "i1",
          "text": "List folder / read data"
        },
        {
          "id": "i2",
          "text": "Traverse folder / execute file"
        },
        {
          "id": "i3",
          "text": "Change permissions"
        },
        {
          "id": "i4",
          "text": "Take ownership"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The right to see the list of files within a folder.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The right to change security settings for other users.",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "The right to pass through a parent folder to reach a subfolder.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "dcm-581",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "In which situation does Taking Ownership become absolutely necessary? (Choose one)",
      "explanation": "An administrator may need ownership recovery when no available identity can change an orphaned folder's permissions. This is not automatically necessary whenever an employee leaves.",
      "options": [
        "When you want to send a large folder via email.",
        "When trying to access a colleague's public share.",
        "When an employee leaves the company and their account (the folder owner) is deleted, blocking access for everyone else.",
        "When you want to hide a file in the system."
      ],
      "correct": 2
    },
    {
      "id": "dcm-582",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the statements regarding the Take Ownership process.",
      "explanation": "Take ownership can be delegated or enabled by privilege rather than requiring an Administrator account in every case. Ownership does not erase deny entries; the replace-owner option propagates ownership to descendants.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Only an Administrator account can ever take ownership; the right cannot be delegated.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Taking ownership automatically removes every Deny entry from the ACL.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Replace owner on subcontainers and objects propagates the ownership change to the selected descendants.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-583",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "To create a secure \"Drop Box\" (where users can deposit files but cannot see what others have deposited), which type of permissions must be used? (Choose one)",
      "explanation": "A secure deposit-only folder requires carefully scoped advanced NTFS rights, including creation without broad listing or reading of other users' files.",
      "options": [
        "Share Permissions (Full Control level)",
        "Basic NTFS Permissions (Modify level)",
        "Advanced NTFS Permissions (granular setup of Traverse, Create, List rights)",
        "Public Sharing (C:\\Users\\Public folder)"
      ],
      "correct": 2
    },
    {
      "id": "dcm-584",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "When using the Basic Share method (\"Give access to...\"), Windows automates certain processes.\n\nThe system configures the \n[1]\n permissions in the background at the network level.\nAt the same time, it also modifies the \n[2]\n permissions in the Security tab to guarantee access for the selected user.",
      "explanation": "The basic sharing wizard coordinates share and file-system permissions for the selected identities; effective access still depends on the resulting ACLs and other restrictions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "EFS"
        },
        {
          "id": "i2",
          "text": "Share"
        },
        {
          "id": "i3",
          "text": "NTFS"
        },
        {
          "id": "i4",
          "text": "FAT32"
        },
        {
          "id": "i5",
          "text": "NTFS"
        },
        {
          "id": "i6",
          "text": "Share"
        },
        {
          "id": "i7",
          "text": "FAT32"
        },
        {
          "id": "i8",
          "text": "EFS"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-585",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which advanced NTFS right allows an authorized user to become the owner and then repair the ACL, without automatically bypassing all data permissions?",
      "explanation": "Take ownership changes the owner, allowing subsequent authorized ACL repair. It does not automatically grant every data right or decrypt EFS files.",
      "options": [
        "Delete subfolders and files",
        "Create files / write data",
        "Change permissions",
        "Take ownership"
      ],
      "correct": 3
    },
    {
      "id": "dcm-586",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the statements regarding different types of shares.",
      "explanation": "Public folder contents normally inherit permissions, basic sharing is not mandatory for servers, and Advanced Sharing can configure a simultaneous-user limit within OS limits.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Public Share requires manual NTFS configuration for every file added to the folder.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "The Basic Share (\"Give access to\") is the optimal and mandatory method for file servers in a business environment.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The Advanced Share allows limiting the number of users who can connect simultaneously to a folder.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-587",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Why is it recommended to use the \"Deny\" permission with extreme caution? (Choose one)",
      "explanation": "Explicit deny entries can block legitimate users through their group memberships, so use them deliberately and evaluate their scope.",
      "options": [
        "It reduces network bandwidth.",
        "An explicit deny can block a conflicting allow through group membership and accidentally deny legitimate access.",
        "It requires installing another Windows component.",
        "It works only for Public folder sharing."
      ],
      "correct": 1
    },
    {
      "id": "dcm-588",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the Basic Permission type with the rights it implies.\n\n : Allows viewing file names and opening them, but without the ability to execute programs.\n : Allows adding, modifying, and deleting files, but not changing permissions.\n : Offers absolutely all rights, including changing the owner.",
      "explanation": "Read grants viewing, Modify adds writing and deletion without ACL management, and Full Control includes permission and ownership management.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Modify"
        },
        {
          "id": "i2",
          "text": "Read"
        },
        {
          "id": "i3",
          "text": "Full Control"
        },
        {
          "id": "i4",
          "text": "Write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Allows viewing file names and opening them, but without the ability to execute programs.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Allows adding, modifying, and deleting files, but not changing permissions.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Offers absolutely all rights, including changing the owner.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-589",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Select the correct options regarding Share Permissions.\n\nThey control access only when the resource is accessed via the \n[1]\n.\nThe Share level that allows creating, but also deleting files, is called \n[2]\n.",
      "explanation": "Share ACLs apply to access through the share; Change includes creating, modifying, and deleting data subject to NTFS permissions.",
      "dragItems": [
        {
          "id": "i1",
          "text": "network"
        },
        {
          "id": "i2",
          "text": "direct local file path"
        },
        {
          "id": "i3",
          "text": "BIOS setup"
        },
        {
          "id": "i4",
          "text": "offline backup"
        },
        {
          "id": "i5",
          "text": "Read"
        },
        {
          "id": "i6",
          "text": "Write"
        },
        {
          "id": "i7",
          "text": "Modify"
        },
        {
          "id": "i8",
          "text": "Change"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-590",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What specifically does the \"Effective Access\" tool in the Security tab do? (Choose one)",
      "explanation": "Effective Access evaluates a selected identity's applicable access rights and helps avoid manual ACL calculations; it does not itself change permissions.",
      "options": [
        "Automatically calculates the sum of all Allow and Deny rights to show exactly what actions a specific user can perform.",
        "Instantly changes the owner of the file.",
        "Converts a normal folder into an Advanced Share.",
        "Unblocks files infected by viruses."
      ],
      "correct": 0
    },
    {
      "id": "dcm-591",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the statements about the Owner concept.",
      "explanation": "The creator usually becomes owner, but group ownership is possible. Ownership recovery and ACL repair mean an accidental deny is not necessarily permanent loss.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Usually, the account that created the file automatically becomes its owner.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If the owner accidentally sets a \"Deny Full Control\" for themselves, they permanently lose access to the file with no way to recover.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The owner of a file can be an entire group, such as the Administrators group.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-592",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Scenario: User Andrew accesses a server file over the network.\nShare Permission: Change.\nNTFS Permission: Read.\nWhat is Andrew's final (effective) access level? (Choose one)",
      "explanation": "Network access is restricted by both Share Change and NTFS Read, leaving only their shared read capabilities.",
      "options": [
        "Change",
        "Read",
        "Full Control",
        "No Access"
      ],
      "correct": 1
    },
    {
      "id": "dcm-593",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Scenario: User Maria accesses a shared folder.\nShare Permission: Read.\nNTFS Permission: Full Control.\nWhat is Maria's final access level when connecting via network? (Choose one)",
      "explanation": "Share Read caps network access at Read even when NTFS grants Full Control.",
      "options": [
        "Read",
        "Modify",
        "Full Control",
        "Deny"
      ],
      "correct": 0
    },
    {
      "id": "dcm-594",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Calculate the final permission (The Share vs NTFS Golden Rule).\n\nShare Permission: Full Control. NTFS Permission: Modify. Final access will be \n[1]\n.\nShare Permission: Read. NTFS Permission: Read. Final access will be \n[2]\n.",
      "explanation": "Intersect share and NTFS rights for network access: Full Control with Modify leaves Modify; Read with Read leaves Read.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Read & execute"
        },
        {
          "id": "i2",
          "text": "Write"
        },
        {
          "id": "i3",
          "text": "Full Control"
        },
        {
          "id": "i4",
          "text": "Modify"
        },
        {
          "id": "i5",
          "text": "Modify"
        },
        {
          "id": "i6",
          "text": "Full Control"
        },
        {
          "id": "i7",
          "text": "Read"
        },
        {
          "id": "i8",
          "text": "Write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-595",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "NTFS Cumulation Scenario: David is in the \"HR\" and \"Management\" groups.\nThe HR group has NTFS Allow: Read.\nThe Management group has NTFS Allow: Write.\nThere are no Deny permissions. What is David's effective permission on the local file? (Choose one)",
      "explanation": "Applicable Allow Read and Allow Write entries accumulate in the absence of conflicting denies, without granting Full Control.",
      "options": [
        "Read Only",
        "Write Only",
        "Read and Write (accumulated)",
        "Full Control"
      ],
      "correct": 2
    },
    {
      "id": "dcm-596",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Calculate access based on the Deny rule. Anna is a member of the \"Managers\" and \"Interns\" groups.\nNTFS Managers Group: Allow Full Control.\nNTFS Interns Group: Deny Write.\nEvaluate what Anna will be able to do.",
      "explanation": "With these explicit rights and no other constraints, Deny Write blocks writing but does not remove independent Read or Delete rights.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Anna will be able to delete the file (Delete).",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Anna will be able to modify the file content (Write).",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Anna will be able to read the file (Read).",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-597",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Calculate the effective permission for NETWORK access and match the final result.\n\n : Share = Change, NTFS = Modify\n : Share = Full Control, NTFS = Read\n : Share = Read, NTFS = Full Control",
      "explanation": "Share Change and NTFS Modify permit data changes; either layer restricted to Read limits network access to Read.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Change / Modify"
        },
        {
          "id": "i2",
          "text": "Read"
        },
        {
          "id": "i3",
          "text": "Full Control"
        },
        {
          "id": "i4",
          "text": "Write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Share = Change, NTFS = Modify",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Share = Full Control, NTFS = Read",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Share = Read, NTFS = Full Control",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "dcm-598",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "3 Groups Local NTFS Scenario: John is in G1, G2, and G3.\nG1 has Allow: Read.\nG2 has Allow: Modify.\nG3 has Deny: Delete.\nWhich permission from the Modify package will be canceled for John by group 3? (Choose one)",
      "explanation": "An explicit Deny Delete entry blocks that specific right, not every right in the Modify bundle. Separate parent Delete-child rights can also affect deletion in broader scenarios.",
      "options": [
        "The ability to read the file.",
        "The ability to edit (overwrite) the file.",
        "The ability to delete the file.",
        "It completely cancels his Modify permission."
      ],
      "correct": 2
    },
    {
      "id": "dcm-599",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Calculate the permission based on the typical Share rule (Best Practice).\n\nThe administrator set the Share on \\\\Server\\Projects like this: Everyone has \n[1]\n.\nThe real permissions for the user are calculated only by looking at the \n[2]\n tab.",
      "explanation": "When a suitable share ACL does not constrain data access further, granular file rights are managed in the NTFS Security tab. This is a simplified model, not a reason to ignore other policies.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Write"
        },
        {
          "id": "i2",
          "text": "Modify"
        },
        {
          "id": "i3",
          "text": "Full Control"
        },
        {
          "id": "i4",
          "text": "Read & execute"
        },
        {
          "id": "i5",
          "text": "Setup"
        },
        {
          "id": "i6",
          "text": "Security"
        },
        {
          "id": "i7",
          "text": "Application"
        },
        {
          "id": "i8",
          "text": "System"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-600",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Local Access Scenario: Elena connects physically to the Server (local login).\nShe attempts to open D:\\Data.\nShare Permission on folder: Read.\nNTFS Permission on folder: Modify.\nWhat is her effective permission at this moment? (Choose one)",
      "explanation": "A direct local path does not use SMB share permissions, so the stated NTFS Modify rights apply.",
      "options": [
        "Read, because the Share limits her.",
        "Modify, because Share Permissions are ignored during local access.",
        "No access.",
        "Full Control."
      ],
      "correct": 1
    },
    {
      "id": "dcm-601",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Complex Combination Scenario:\nShare: Everyone - Change.\nNTFS Group A (Michael's group): Allow Read.\nNTFS Group B (Michael's group): Allow Write.\nWhat is Michael's final access through the network? (Choose one)",
      "explanation": "Read and Write allows accumulate at the NTFS layer and fit within Share Change; the share does not independently add missing NTFS rights.",
      "options": [
        "Change (only from Share)",
        "Read & Write (Share allows Change, NTFS cumulates R+W, the restrictive NTFS rule applies which fits within Change)",
        "Read Only",
        "Write Only"
      ],
      "correct": 1
    },
    {
      "id": "dcm-602",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Analyze the behavior of advanced permissions in the \"Drop Box\" scenario for the Employees group:\nAllow: Traverse folder, Create files/write data.\nDeny (or unchecked): List folder / read data.",
      "explanation": "With narrowly scoped deposit-only rights and no other grants, the employee can create files but cannot enumerate others' files or delete them.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An employee can see the files deposited by their colleagues.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "An employee can successfully add their own file to the folder.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "An employee can delete the report deposited last week.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-603",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Network Access with Deny Scenario:\nShare: Everyone - Full Control.\nNTFS Personal Account: Allow Modify.\nNTFS Ex_Employees Group: Deny All.\nThe user is in the Ex_Employees group. What is their effective access? (Choose one)",
      "explanation": "An applicable explicit Deny Full Control blocks the ordinary data access otherwise granted by Modify and the share ACL.",
      "options": [
        "Modify, because the personal account permission overrides the group.",
        "Full Control, because Share overrides NTFS.",
        "Access Denied (No access), the Deny rule cancels any Allow.",
        "Read Only."
      ],
      "correct": 2
    },
    {
      "id": "dcm-604",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Calculate permission cumulation on local files:\n\nGroup X: Allow Read. Group Y: Allow Execute. Effective permission: \n[1]\n.\nGroup A: Allow Modify. Group B: Deny Write. Overall effective permission: Can read and execute, but any attempt to save will result in \n[2]\n.",
      "explanation": "Read and Execute allows accumulate; an applicable explicit Deny Write blocks a write request even when other Modify rights remain.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Full Control"
        },
        {
          "id": "i2",
          "text": "Read and Execute"
        },
        {
          "id": "i3",
          "text": "Write"
        },
        {
          "id": "i4",
          "text": "Modify"
        },
        {
          "id": "i5",
          "text": "Access denied"
        },
        {
          "id": "i6",
          "text": "Access automatically elevated"
        },
        {
          "id": "i7",
          "text": "Share permissions removed"
        },
        {
          "id": "i8",
          "text": "File automatically decrypted"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-605",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Lockout Situation: The Administrator accidentally set NTFS \"Deny - Full Control\" for the Everyone group on a critical folder, affecting himself as well. Now no one has access. What is the only calculation step left to regain access? (Choose one)",
      "explanation": "An elevated administrator with the ownership privilege can take ownership and then repair the ACL. Taking ownership alone does not erase the deny entry.",
      "options": [
        "Change the Share Permissions to Full Control for the network.",
        "Use the \"Advanced...\" panel to declare his Admin account as the \"Owner\" (Take Ownership), bypassing the lockout.",
        "Use the \"Give access to\" right-click option.",
        "Nothing can be done, the data is lost."
      ],
      "correct": 1
    },
    {
      "id": "dcm-606",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the NTFS Take Ownership scenario with the immediate result.\n\n : The user does not check \"Replace owner on subcontainers\".\n : The Administrator becomes the new owner.\n : An old account holding Owner rights is deleted from Windows.",
      "explanation": "Ownership propagation must be requested for descendants. Ownership generally permits ACL repair, while deleting an old account does not automatically remove other valid access entries.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Becomes owner of the folder, but not the files inside."
        },
        {
          "id": "i2",
          "text": "The Administrator gains the inherent right to change permissions in the Security tab."
        },
        {
          "id": "i3",
          "text": "Ownership recovery may be needed if no available identity can repair the orphaned ACL."
        },
        {
          "id": "i4",
          "text": "Deny access is automatically deleted."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The user does not check \"Replace owner on subcontainers\".",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "The Administrator becomes the new owner.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "An old account holding Owner rights is deleted from Windows.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-607",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "\"Emergency Button\" Scenario: You are logged in as local Administrator, but when you try to copy data from an old HDD (connected via USB) you get \"Access Denied\". Share is not involved. What rights calculation is the system missing to let you read the files? (Choose one)",
      "explanation": "For an orphaned NTFS ACL, an authorized administrator can take ownership and grant appropriate read rights. EFS data additionally requires a valid decryption key.",
      "options": [
        "Missing the \"Read\" Share permission.",
        "The system still sees the old account as Owner; a transfer of ownership to your current Admin account must be calculated.",
        "The system needs a Public Sharing checkmark.",
        "The HDD is not formatted in NTFS."
      ],
      "correct": 1
    },
    {
      "id": "dcm-608",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Final evaluation of Effective Permissions on NTFS. User Chris is part of the IT, Project_X, and Collaborators groups.\nIT: Allow Change permissions.\nProject_X: Allow Modify.\nCollaborators: Deny Delete.",
      "explanation": "Modify permits creation; explicit Deny Delete blocks deletion in the stated ACL model; the separate Change permissions allow still permits ACL changes.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Chris can add new files to the folder.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Chris can delete the folder.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Chris can change security settings for other users.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-609",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Share + Advanced Permissions Calculation.\n\nShare: Read.\nAdvanced NTFS: Allow Create Files.\nIf the user accesses over the network, the action to create a file will \n[1]\n, because Share stops at the Read level.\nIf they log physically onto the server (local access), the action to create a file will \n[2]\n.",
      "explanation": "Share Read blocks creation over SMB; a local request is evaluated against the stated NTFS Create Files right instead, assuming other required access is satisfied.",
      "dragItems": [
        {
          "id": "i1",
          "text": "fail"
        },
        {
          "id": "i2",
          "text": "succeed"
        },
        {
          "id": "i3",
          "text": "fail"
        },
        {
          "id": "i4",
          "text": "succeed"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i4",
          "optionIds": [
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "dcm-610",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Calculation based on Basic vs Advanced Permissions. The admin grants the basic \"Read\" permission to the Students group. What actually happens in the \"background\" within the advanced permissions list? (Choose one)",
      "explanation": "Read is a bundle including list/read data, read attributes, extended attributes, and permission information, not just one isolated advanced right.",
      "options": [
        "Only \"Read Data\" is checked. All others are denied.",
        "A group of advanced permissions is checked simultaneously (List folder, Read attributes, Read extended attributes, Read permissions).",
        "The Take Ownership option is automatically activated.",
        "The system calculates the sum of Share permissions."
      ],
      "correct": 1
    },
    {
      "id": "dcm-611",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Combined Final Scenario: A folder on the Server is shared on the network.\nShare Permissions for Everyone: Full Control.\nNTFS Management Group: Allow Modify.\nNTFS Accounting Group: Allow Read.\nUser Basil (member of both Management and Accounting) wants to modify a Word file over the network. Will he succeed?",
      "explanation": "The NTFS allows accumulate to Modify, and Share Full Control does not restrict those rights further.",
      "options": [
        "No, because the Accounting group (Read) pulls him down according to the most restrictive rule.",
        "Yes, because at the NTFS level the Allow rights accumulate (Read + Modify = Modify), and the Share gives him Full Control. The final intersection is Modify.",
        "Yes, because Share always beats NTFS when Everyone is used.",
        "No, because Full Control from Share generates an error when conflicting with Modify."
      ],
      "correct": 1
    },
    {
      "id": "dcm-612",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the Antimalware term with its definition.\n\n : Constant monitoring of the system in the background.\n : A secure area where suspicious files are isolated.\n : A legitimate file incorrectly identified as malware.",
      "explanation": "Real-time protection monitors activity, quarantine isolates suspicious content, and a false positive is a mistaken detection of legitimate content.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Exclusion"
        },
        {
          "id": "i2",
          "text": "Quarantine"
        },
        {
          "id": "i3",
          "text": "False Positive"
        },
        {
          "id": "i4",
          "text": "Real-time Protection"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Constant monitoring of the system in the background.",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "A secure area where suspicious files are isolated.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A legitimate file incorrectly identified as malware.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-613",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "How does a Trojan Horse typically compromise a system? (Choose one)",
      "explanation": "A Trojan presents itself as useful or legitimate while delivering malicious behavior; a backdoor is one possible payload rather than a requirement of all Trojans.",
      "options": [
        "It disguises itself as legitimate software, tricking the user into installing it and opening a backdoor.",
        "It encrypts the user's files immediately upon connecting to the internet.",
        "It exploits network vulnerabilities without the user knowing.",
        "It self-replicates across the local network to infect as many computers as possible."
      ],
      "correct": 0
    },
    {
      "id": "dcm-614",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding Social Engineering techniques. Select Yes if the statement is true and No if it is false.",
      "explanation": "Vishing uses voice, smishing uses SMS, and spoofing impersonates an identity or source rather than searching trash.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Vishing relies on fraudulent voice calls to manipulate victims.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Spoofing involves physically stealing documents from a company's trash bin.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Smishing is a type of phishing attack conducted via SMS text messages.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-615",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Complete the sentences regarding network disruption attacks.\n\nA basic \n[1]\n attack uses one source to flood a target server with traffic.\nA more advanced \n[2]\n attack uses a massive botnet of compromised computers.",
      "explanation": "A distributed denial-of-service attack uses multiple sources; a single-source attack is a non-distributed DoS in this comparison.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Phishing"
        },
        {
          "id": "i2",
          "text": "Spoofing"
        },
        {
          "id": "i3",
          "text": "DoS"
        },
        {
          "id": "i4",
          "text": "DDoS"
        },
        {
          "id": "i5",
          "text": "Spoofing"
        },
        {
          "id": "i6",
          "text": "DDoS"
        },
        {
          "id": "i7",
          "text": "DoS"
        },
        {
          "id": "i8",
          "text": "Phishing"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-616",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What is \"Phishing\"? (Choose one)",
      "explanation": "Phishing impersonates a trusted source to obtain secrets or induce harmful actions, commonly through deceptive email.",
      "options": [
        "A program that secretly records your keystrokes.",
        "Fraudulent emails appearing to be from a trusted source, designed to steal sensitive data.",
        "A type of ransomware that targets fish farming businesses.",
        "Stealing a physical laptop from a coffee shop."
      ],
      "correct": 1
    },
    {
      "id": "dcm-617",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Match the scan type with its typical use case.\n\n : Checking only essential startup files and memory quickly.\n : A deep analysis of every file on the hard drive.\n : Scanning a specific downloaded folder or USB stick.",
      "explanation": "A quick scan targets common infection locations, a full scan covers the configured broad scope, and a custom scan targets chosen locations.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Full Scan"
        },
        {
          "id": "i2",
          "text": "Scheduled Scan"
        },
        {
          "id": "i3",
          "text": "Quick Scan"
        },
        {
          "id": "i4",
          "text": "Custom Scan"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Checking only essential startup files and memory quickly.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "A deep analysis of every file on the hard drive.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Scanning a specific downloaded folder or USB stick.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-618",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding Viruses and Worms. Select Yes if the statement is true and No if it is false.",
      "explanation": "Disguise is characteristic of Trojans, not a requirement for worms. A classic file virus needs its infected host to execute, while worms can self-propagate.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A worm always disguises itself as a legitimate application to trick the user into installing it.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "A classic virus needs a host file and user interaction (like opening an attachment) to spread.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A worm is capable of self-propagating across a network by exploiting security vulnerabilities.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-619",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What is the main objective of a Denial of Service (DoS) attack? (Choose one)",
      "explanation": "DoS attacks target service availability by exhausting or disrupting resources; they do not inherently steal data or encrypt files.",
      "options": [
        "To overwhelm a server with fake traffic so it cannot respond to legitimate users.",
        "To physically damage the server's hard drives.",
        "To steal sensitive information from a database.",
        "To encrypt server files for ransom."
      ],
      "correct": 0
    },
    {
      "id": "dcm-620",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Match the attack tools to their physical counterparts.\n\nLeaving an infected flash drive in a parking lot is an attack using an \n[1]\n.\nA hardware device secretly plugged into a monitor cable is a \n[2]\n.",
      "explanation": "A planted USB drive exploits user behavior; a capture device in a display connection can intercept video output.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Dumpster diving"
        },
        {
          "id": "i2",
          "text": "Errant USB drive"
        },
        {
          "id": "i3",
          "text": "Hardware screen capture device"
        },
        {
          "id": "i4",
          "text": "Shoulder surfing"
        },
        {
          "id": "i5",
          "text": "Hardware screen capture device"
        },
        {
          "id": "i6",
          "text": "Errant USB drive"
        },
        {
          "id": "i7",
          "text": "Shoulder surfing"
        },
        {
          "id": "i8",
          "text": "Dumpster diving"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-621",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the malware type with its key characteristic.\n\n : Needs a host file and user action to spread.\n : Disguises itself as a desirable program.\n : Self-propagates across networks autonomously.",
      "explanation": "Classic viruses infect hosts, Trojans disguise malicious functionality, and worms replicate autonomously across reachable systems.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Trojan Horse"
        },
        {
          "id": "i2",
          "text": "Spyware"
        },
        {
          "id": "i3",
          "text": "Virus"
        },
        {
          "id": "i4",
          "text": "Worm"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Needs a host file and user action to spread.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Disguises itself as a desirable program.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Self-propagates across networks autonomously.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-622",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements about Adware and Potentially Unwanted Programs (PUPs). Select Yes if the statement is true and No if it is false.",
      "explanation": "Adware primarily displays advertising and is often bundled with downloads. Destructive file encryption is associated with ransomware, not the defining behavior of adware.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Adware is generally considered more dangerous than Ransomware because it permanently deletes system files.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Adware primarily aims to generate revenue by displaying unwanted advertisements.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Adware often arrives \"bundled\" with legitimate free software when users quickly click through the installation process.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-623",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "When analyzing an antimalware scan, what does it mean when a file is \"Quarantined\"? (Choose one)",
      "explanation": "Quarantine isolates a suspected threat to prevent ordinary execution and permit investigation or authorized restoration; the implementation need not always use encryption.",
      "options": [
        "The file was sent to law enforcement.",
        "The file was permanently deleted.",
        "The file was ignored as trusted.",
        "The file was isolated so it cannot execute normally while it is investigated."
      ],
      "correct": 3
    },
    {
      "id": "dcm-624",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Complete the concepts of Antimalware scanning.\n\nA \n[1]\n checks only the most vulnerable areas like memory and startup files.\nA \n[2]\n thoroughly checks every single file and folder on the storage drives.",
      "explanation": "Quick scans focus on common infection locations, while full scans cover a much broader configured set of files and storage.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Scheduled Scan"
        },
        {
          "id": "i2",
          "text": "Quick Scan"
        },
        {
          "id": "i3",
          "text": "Full Scan"
        },
        {
          "id": "i4",
          "text": "Custom Scan"
        },
        {
          "id": "i5",
          "text": "Full Scan"
        },
        {
          "id": "i6",
          "text": "Quick Scan"
        },
        {
          "id": "i7",
          "text": "Custom Scan"
        },
        {
          "id": "i8",
          "text": "Scheduled Scan"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-625",
      "chapter": "instalare-config",
      "type": "drag_drop",
      "question": "Match the symptom with the likely Adware infection type.\n\n : Your default search engine and homepage change suddenly.\n : Unwanted advertisements appear over your screen.\n : New, unrequested add-ons appear in your browser window.",
      "explanation": "Search/homepage changes suggest hijacking, unsolicited floating advertisements are pop-ups, and unwanted browser bars are toolbars.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Keylogger"
        },
        {
          "id": "i2",
          "text": "Toolbars"
        },
        {
          "id": "i3",
          "text": "Browser Hijacking"
        },
        {
          "id": "i4",
          "text": "Pop-ups"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Your default search engine and homepage change suddenly.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Unwanted advertisements appear over your screen.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "New, unrequested add-ons appear in your browser window.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "dcm-626",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements about configuring Antimalware programs. Select Yes if the statement is true and No if it is false.",
      "explanation": "Exclusions can skip configured scan locations, real-time protection should normally remain enabled, and updated threat intelligence improves detection of new malware.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Adding a folder to the \"Exclusions\" list means the antimalware program will ignore it during scans.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Real-time protection should only be turned on when you suspect you have downloaded a virus.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Virus definitions (signatures) must be updated frequently to detect the newest threats.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-627",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What is the fundamental difference between a classic Virus and a Worm? (Choose one)",
      "explanation": "A classic file virus depends on execution of an infected host, whereas a worm can exist independently and propagate over a network.",
      "options": [
        "A virus only affects hardware, while a worm only affects software.",
        "A virus spreads automatically across networks, while a worm requires user interaction.",
        "There is no difference; the terms are completely interchangeable.",
        "A virus requires a host file and user action to spread, whereas a worm is a standalone program that self-propagates over a network."
      ],
      "correct": 3
    },
    {
      "id": "dcm-628",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Complete the descriptions of malware types.\n\nA piece of malicious code that requires a host file and user action to spread is a \n[1]\n.\nA standalone program that actively exploits network vulnerabilities to self-propagate is a \n[2]\n.",
      "explanation": "Classic file viruses attach to hosts; standalone self-propagating network malware is a worm.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Logic Bomb"
        },
        {
          "id": "i2",
          "text": "Virus"
        },
        {
          "id": "i3",
          "text": "Worm"
        },
        {
          "id": "i4",
          "text": "Trojan Horse"
        },
        {
          "id": "i5",
          "text": "Worm"
        },
        {
          "id": "i6",
          "text": "Virus"
        },
        {
          "id": "i7",
          "text": "Trojan Horse"
        },
        {
          "id": "i8",
          "text": "Logic Bomb"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-629",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding the actions taken after an Antimalware scan. Select Yes if the statement is true and No if it is false.",
      "explanation": "Quarantine can permit restoration, a clean scan is not a future immunity guarantee, and potentially exposed credentials should be rotated from a clean device after containment.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Putting a file in \"Quarantine\" allows you to restore it later if it was a false positive.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "\"No Threats Found\" means the computer is 100% immune to all future attacks.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "After cleaning a severe infection, changing all your important passwords is a necessary step.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-630",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the social engineering technique with its delivery method.\n\n : Fraudulent emails.\n : Fraudulent voice calls.\n : Falsifying the \"From\" address or Caller ID.",
      "explanation": "Email phishing deceives through messages, vishing uses calls, and spoofing falsifies a displayed source identity.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Smishing"
        },
        {
          "id": "i2",
          "text": "Vishing"
        },
        {
          "id": "i3",
          "text": "Phishing"
        },
        {
          "id": "i4",
          "text": "Spoofing"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Fraudulent emails.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Fraudulent voice calls.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Falsifying the \"From\" address or Caller ID.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-631",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "What is the recommended first step if you suspect your computer has been infected by malware (like a worm or ransomware)? (Choose one)",
      "explanation": "Disconnecting an infected endpoint helps contain spread and command-and-control traffic. Follow the organization's incident-response procedure and preserve evidence.",
      "options": [
        "Delete the C:\\Windows directory.",
        "Restart the computer normally and wait for the antivirus to fix it.",
        "Disconnect the computer from the network and internet immediately to contain the spread.",
        "Pay the ransom immediately to avoid data loss."
      ],
      "correct": 2
    },
    {
      "id": "dcm-632",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Complete the descriptions of specific malware behaviors.\n\nMalware that triggers only when a specific condition is met is a \n[1]\n.\nMalware that disguises itself as legitimate software to gain entry is a \n[2]\n.",
      "explanation": "A logic bomb triggers on a condition, while a Trojan enters under the appearance of legitimate software.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Trojan Horse"
        },
        {
          "id": "i2",
          "text": "Logic Bomb"
        },
        {
          "id": "i3",
          "text": "Virus"
        },
        {
          "id": "i4",
          "text": "Worm"
        },
        {
          "id": "i5",
          "text": "Trojan Horse"
        },
        {
          "id": "i6",
          "text": "Virus"
        },
        {
          "id": "i7",
          "text": "Worm"
        },
        {
          "id": "i8",
          "text": "Logic Bomb"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-633",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "Evaluate the following statements about Spyware. Select Yes if the statement is true and No if it is false.",
      "explanation": "Spyware covertly gathers information. A malicious keylogger captures keyboard input rather than advertising its presence.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The primary goal of spyware is to collect personal information and transmit it to a third party without consent.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Spyware is designed to be highly visible, frequently alerting the user of its presence.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A Keylogger is a type of spyware that records every keystroke made by the user.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-634",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the incident response phase with its action regarding Ransomware.\n\n : Disconnecting the computer from the network.\n : Booting in Safe Mode and running an antimalware scan.\n : Restoring encrypted files from an external backup.",
      "explanation": "Isolation contains the threat, remediation removes it, and recovery restores service and data from verified clean backups. Severe compromise may require reimaging rather than a simple scan.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Remediation"
        },
        {
          "id": "i2",
          "text": "Post-Mortem"
        },
        {
          "id": "i3",
          "text": "Isolation"
        },
        {
          "id": "i4",
          "text": "Recovery"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Disconnecting the computer from the network.",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Booting in Safe Mode and running an antimalware scan.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Restoring encrypted files from an external backup.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-635",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "How does a DDoS attack differ from a DoS attack? (Choose one)",
      "explanation": "DDoS uses distributed attack sources, often a botnet, to overwhelm a service. Compromised computers are common but not the only possible sources.",
      "options": [
        "A DDoS attack uses a single, very powerful computer.",
        "A DDoS attack is physically executed at the server location.",
        "A DDoS attack only targets email servers.",
        "A DDoS attack is distributed, utilizing a botnet of multiple infected computers to flood the target."
      ],
      "correct": 3
    },
    {
      "id": "dcm-636",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "Identify the specific type of social engineering based on the communication channel.\n\nA fraudulent SMS message attempting to steal data is called \n[1]\n.\nA fraudulent voice phone call impersonating an authority is called \n[2]\n.",
      "explanation": "Smishing uses SMS messages and vishing uses voice calls to deceive victims.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Dumpster Diving"
        },
        {
          "id": "i2",
          "text": "Smishing"
        },
        {
          "id": "i3",
          "text": "Vishing"
        },
        {
          "id": "i4",
          "text": "Shoulder Surfing"
        },
        {
          "id": "i5",
          "text": "Vishing"
        },
        {
          "id": "i6",
          "text": "Smishing"
        },
        {
          "id": "i7",
          "text": "Shoulder Surfing"
        },
        {
          "id": "i8",
          "text": "Dumpster Diving"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-637",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding Ransomware and Incident Response. Select Yes if the statement is true and No if it is false.",
      "explanation": "Isolation can limit spread, encrypting ransomware blocks file access, and paying does not guarantee data recovery or safety.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Disconnecting the infected computer from the network can prevent ransomware from spreading to other devices.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Ransomware is designed to encrypt your files, making them inaccessible.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Security experts strongly recommend paying the ransom immediately to guarantee the safe return of your data.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-638",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the terms related to Denial of Service attacks.\n\n : A network of compromised computers controlled by an attacker.\n : An individual infected computer participating in a DDoS attack.\n : The process of filtering out malicious traffic before it hits the server.",
      "explanation": "A botnet is a controlled collection of compromised devices; each participating device is a bot; scrubbing filters attack traffic.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Phishing"
        },
        {
          "id": "i2",
          "text": "Botnet"
        },
        {
          "id": "i3",
          "text": "Scrubbing"
        },
        {
          "id": "i4",
          "text": "Zombie / Bot"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A network of compromised computers controlled by an attacker.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "An individual infected computer participating in a DDoS attack.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "The process of filtering out malicious traffic before it hits the server.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-639",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which of the following best describes the primary goal of Ransomware? (Choose one)",
      "explanation": "Encrypting ransomware extorts payment by denying access to data; some variants also steal data or lock systems.",
      "options": [
        "To completely destroy the computer's hardware components.",
        "To encrypt user files and demand a financial payment for the decryption key.",
        "To secretly record keystrokes and steal passwords.",
        "To display unwanted advertisements on the user's desktop."
      ],
      "correct": 1
    },
    {
      "id": "dcm-640",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Identify the core components of an Antimalware system.\n\nThe active shield that monitors files as they are opened or downloaded is the \n[1]\n.\nThe database of known threat signatures that must be frequently updated is the \n[2]\n.",
      "explanation": "Real-time monitoring checks activity as it occurs; signatures and threat intelligence need regular updates.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Quarantine"
        },
        {
          "id": "i2",
          "text": "Real-time Protection"
        },
        {
          "id": "i3",
          "text": "Virus definitions"
        },
        {
          "id": "i4",
          "text": "Firewall"
        },
        {
          "id": "i5",
          "text": "Virus definitions"
        },
        {
          "id": "i6",
          "text": "Real-time Protection"
        },
        {
          "id": "i7",
          "text": "Firewall"
        },
        {
          "id": "i8",
          "text": "Quarantine"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-641",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements about DoS and DDoS attacks. Select Yes if the statement is true and No if it is false.",
      "explanation": "A botnet can generate distributed attack traffic, a local firewall cannot prevent upstream bandwidth exhaustion by itself, and DoS targets availability rather than password theft.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A DDoS attack utilizes a \"botnet\" of infected computers to flood a target.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "An individual home user can easily block a massive DDoS attack using a standard software firewall.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A DoS attack attempts to steal passwords from a database.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-642",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the physical threat with its mitigation.\n\n : Protected by Full Disk Encryption (e.g., BitLocker).\n : Prevented by using Privacy Screens.\n : Mitigated by disabling the \"Autorun\" feature in the OS.",
      "explanation": "Disk encryption protects data on a stolen locked device, privacy screens reduce visual eavesdropping, and disabling autorun reduces one USB execution path. None replaces a complete security policy.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Errant USB drives"
        },
        {
          "id": "i2",
          "text": "Dumpster Diving"
        },
        {
          "id": "i3",
          "text": "Theft"
        },
        {
          "id": "i4",
          "text": "Shoulder Surfing"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Protected by Full Disk Encryption (e.g., BitLocker).",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Prevented by using Privacy Screens.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Mitigated by disabling the \"Autorun\" feature in the OS.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "dcm-643",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Which of the following accurately describes \"Social Engineering\" in the context of cybersecurity? (Choose one)",
      "explanation": "Social engineering manipulates human trust and behavior rather than relying only on technical exploitation.",
      "options": [
        "Writing complex code to bypass network firewalls.",
        "Using brute force to guess complex passwords.",
        "The psychological manipulation of people into performing actions or divulging confidential information.",
        "Building a secure physical infrastructure for server rooms."
      ],
      "correct": 2
    },
    {
      "id": "dcm-644",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Match the physical threat with its description.\n\nDirectly observing someone entering their PIN at an ATM is known as \n[1]\n.\nSearching through a company's physical trash for sensitive documents is known as \n[2]\n.",
      "explanation": "Watching a PIN entry is visual eavesdropping; searching discarded documents is dumpster diving.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Dumpster Diving"
        },
        {
          "id": "i2",
          "text": "Shoulder Surfing"
        },
        {
          "id": "i3",
          "text": "Smishing"
        },
        {
          "id": "i4",
          "text": "Vishing"
        },
        {
          "id": "i5",
          "text": "Dumpster Diving"
        },
        {
          "id": "i6",
          "text": "Smishing"
        },
        {
          "id": "i7",
          "text": "Vishing"
        },
        {
          "id": "i8",
          "text": "Shoulder Surfing"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-645",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding Logic Bombs and Trojans. Select Yes if the statement is true and No if it is false.",
      "explanation": "A logic bomb waits for its trigger. Trojans may install backdoors, but a backdoor is not a requirement for every Trojan.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A logic bomb can remain dormant until a specified date, event, or condition.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Every logic bomb must execute immediately upon download.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Every Trojan must install a backdoor; otherwise it cannot be a Trojan.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-646",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the Spyware technique to its function.\n\n : Records every letter you type, including passwords.\n : Takes pictures of your monitor at regular intervals.\n : Scans saved data in your browser for login details.",
      "explanation": "Keyloggers capture typed input, screen capture records displayed content, and credential theft retrieves stored authentication information.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Credential Theft"
        },
        {
          "id": "i2",
          "text": "Keylogger"
        },
        {
          "id": "i3",
          "text": "Ransomware"
        },
        {
          "id": "i4",
          "text": "Screen Capture"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Records every letter you type, including passwords.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Takes pictures of your monitor at regular intervals.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Scans saved data in your browser for login details.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "dcm-647",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Why is an \"Errant USB drive\" attack so effective? (Choose one)",
      "explanation": "A planted USB device exploits curiosity or helpfulness to persuade someone to connect untrusted hardware.",
      "options": [
        "It relies on human curiosity or the desire to help, prompting the victim to plug the infected drive into a secure computer.",
        "USB drives explode and physically damage the computer.",
        "Because USB drives can remotely hack Wi-Fi networks.",
        "It uses advanced AI to bypass all known antivirus software."
      ],
      "correct": 0
    },
    {
      "id": "dcm-648",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "Distinguish between Adware and Spyware.\n\n\n[1]\n is designed to be highly visible, degrading performance to show unwanted advertisements.\n\n[2]\n is designed to be completely invisible, silently recording keystrokes and stealing credentials.",
      "explanation": "Adware is characterized by advertising; spyware covertly collects information. These categories can overlap and invisibility is an intent, not an absolute guarantee.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Trojan Horse"
        },
        {
          "id": "i2",
          "text": "Adware"
        },
        {
          "id": "i3",
          "text": "Virus"
        },
        {
          "id": "i4",
          "text": "Worm"
        },
        {
          "id": "i5",
          "text": "Spyware"
        },
        {
          "id": "i6",
          "text": "Virus"
        },
        {
          "id": "i7",
          "text": "Worm"
        },
        {
          "id": "i8",
          "text": "Trojan Horse"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-649",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following statements about Physical Security threats. Select Yes if the statement is true and No if it is false.",
      "explanation": "Proper disk encryption protects a powered-off or locked stolen device, screen capture may be performed in hardware or software, and shoulder surfing observes private input.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Full Disk Encryption protects data even if the physical laptop is stolen.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A \"Screen Scraper\" is always a software virus and never a physical hardware device.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Shoulder surfing refers to an attacker directly observing someone typing a password or PIN.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-650",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Match the advanced social engineering attack with its method.\n\n : Intercepting a real email and resending a modified malicious copy.\n : Looking through physical trash for sensitive data.\n : Sending malicious links via text message.",
      "explanation": "Clone phishing imitates a legitimate message with altered malicious content; dumpster diving searches trash; smishing uses SMS.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Clone Phishing"
        },
        {
          "id": "i2",
          "text": "Vishing"
        },
        {
          "id": "i3",
          "text": "Smishing"
        },
        {
          "id": "i4",
          "text": "Dumpster Diving"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Intercepting a real email and resending a modified malicious copy.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Looking through physical trash for sensitive data.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Sending malicious links via text message.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-651",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Identify the Antimalware actions.\n\nMoving a suspicious file into a secure, isolated \"prison\" on the disk is called \n[1]\n.\nCompletely wiping the malicious file from the storage drive is called \n[2]\n.",
      "explanation": "Quarantine isolates a file for controlled handling; deletion removes it from normal storage. Ordinary deletion is not necessarily a secure wipe of every recoverable byte.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Restore"
        },
        {
          "id": "i2",
          "text": "Ignore"
        },
        {
          "id": "i3",
          "text": "Quarantine"
        },
        {
          "id": "i4",
          "text": "Delete"
        },
        {
          "id": "i5",
          "text": "Ignore"
        },
        {
          "id": "i6",
          "text": "Delete"
        },
        {
          "id": "i7",
          "text": "Quarantine"
        },
        {
          "id": "i8",
          "text": "Restore"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "dcm-652",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "You are setting up a Windows 11 laptop for a new employee. The employee needs to be able to use installed productivity apps and change their desktop wallpaper, but they should not be allowed to install new software or change system-wide security settings.\n\nWhich type of account should you create for them?",
      "explanation": "A standard account supports ordinary application use and personal settings without granting administrative system changes. Additional policy is needed to forbid all per-user software installation.",
      "options": [
        "Administrator Account",
        "Guest Account",
        "Standard User Account",
        "Managed Service Account"
      ],
      "correct": 2
    },
    {
      "id": "dcm-653",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Move each connector type from the list on the left to the correct description on the right.\n\n : An older analog video-only connector that does not transmit audio.\n : A versatile digital interface that can simultaneously transmit video, data, and power.\n : A common digital interface used to transmit both high-definition video and audio, frequently used for televisions.\n : A digital display interface originally developed by VESA, often used for high refresh rate PC gaming monitors.",
      "explanation": "VGA carries analog video, capable USB-C ports support data/power and alternate-mode video, HDMI carries digital audio/video, and DisplayPort is a VESA display interface.",
      "dragItems": [
        {
          "id": "i1",
          "text": "HDMI"
        },
        {
          "id": "i2",
          "text": "VGA"
        },
        {
          "id": "i3",
          "text": "DisplayPort"
        },
        {
          "id": "i4",
          "text": "USB Type-C"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An older analog video-only connector that does not transmit audio.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A versatile digital interface that can simultaneously transmit video, data, and power.",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "A common digital interface used to transmit both high-definition video and audio, frequently used for televisions.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "A digital display interface originally developed by VESA, often used for high refresh rate PC gaming monitors.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-654",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "For each statement about managing applications and services in Windows 11, select True or False.",
      "explanation": "Task Manager can disable startup entries and control services; ending a process does not uninstall its application.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "You can disable applications from automatically opening when Windows starts by using the Startup apps tab in Task Manager.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Ending a background process in Task Manager will permanently uninstall the application from your computer.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The Services tab in Task Manager allows you to stop and restart background system services.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-655",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "You are troubleshooting a network connectivity issue on a Windows 11 PC. Complete the sentences by selecting the correct command from each drop-down list.\n\nTo verify if your computer can successfully reach the default gateway, you can use the \n[1]\n command.\nTo force the computer to request a new IP address from the DHCP server, use the \n[2]\n command.\nTo clear the DNS resolver cache and fix potential name resolution issues, use the \n[3]\n command.",
      "explanation": "ping probes gateway reachability, renew requests a DHCP lease renewal, and flushdns clears the resolver cache.",
      "dragItems": [
        {
          "id": "i1",
          "text": "pathping"
        },
        {
          "id": "i2",
          "text": "nslookup"
        },
        {
          "id": "i3",
          "text": "ping"
        },
        {
          "id": "i4",
          "text": "tracert"
        },
        {
          "id": "i5",
          "text": "pathping"
        },
        {
          "id": "i6",
          "text": "ipconfig /renew"
        },
        {
          "id": "i7",
          "text": "ping"
        },
        {
          "id": "i8",
          "text": "tracert"
        },
        {
          "id": "i9",
          "text": "ipconfig /flushdns"
        },
        {
          "id": "i10",
          "text": "ping"
        },
        {
          "id": "i11",
          "text": "tracert"
        },
        {
          "id": "i12",
          "text": "pathping"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-656",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "In Windows 11, you want to change the display resolution and increase the scale of text and apps because they appear too small on your high-resolution monitor.\n\nWhere should you navigate to make these changes?",
      "explanation": "System > Display contains display resolution and scaling settings for the selected monitor.",
      "options": [
        "Settings -> Personalization -> Themes",
        "Settings -> System -> Display",
        "Settings -> Accessibility -> Magnifier",
        "Control Panel -> Appearance and Personalization"
      ],
      "correct": 1
    },
    {
      "id": "dcm-657",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A Windows 11 user can browse websites using their IP addresses but cannot access them using their domain names.\n\nWhich command should you run to resolve this local DNS cache issue?",
      "explanation": "flushdns removes stale local DNS entries. Persistent failures may require correcting DNS server configuration instead.",
      "options": [
        "ipconfig /release",
        "ipconfig /flushdns",
        "ping 127.0.0.1",
        "ipconfig /renew"
      ],
      "correct": 1
    },
    {
      "id": "dcm-658",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Choose the least-permissive listed standard BASIC NTFS permission group for each capability. Advanced individual rights can be narrower.\n\nMatch each NTFS folder permission with its correct capability.\n\nAllows a user to view file contents and run executable files: \n[1]\n\nAllows a user to read, edit, add, and delete files within a folder: \n[2]\n\nAllows a user to take ownership of files and change all permissions: \n[3]",
      "explanation": "These basic groups progressively add execution, data modification/deletion, and permission/ownership administration.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Write"
        },
        {
          "id": "i2",
          "text": "Modify"
        },
        {
          "id": "i3",
          "text": "Full Control"
        },
        {
          "id": "i4",
          "text": "Read and Execute"
        },
        {
          "id": "i5",
          "text": "Write"
        },
        {
          "id": "i6",
          "text": "Full Control"
        },
        {
          "id": "i7",
          "text": "Modify"
        },
        {
          "id": "i8",
          "text": "Read & execute"
        },
        {
          "id": "i9",
          "text": "Modify"
        },
        {
          "id": "i10",
          "text": "Full Control"
        },
        {
          "id": "i11",
          "text": "Read & execute"
        },
        {
          "id": "i12",
          "text": "Write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-659",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about storage management and file systems in Windows 11, select True or False.",
      "explanation": "Disk Management can shrink supported volumes, FAT32 cannot store single files of 4 GiB or more, and NTFS supports file compression and EFS on suitable editions.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "You can use the Disk Management tool to shrink a basic volume and create unallocated space.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "The FAT32 file system supports individual files that are larger than 4GB.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "NTFS includes built-in features for file-level encryption and compression.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-660",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Move each malware type from the list on the left to its correct definition on the right.\n\n : Encrypts user files or locks the system and demands payment to restore access.\n : Self-replicating code that spreads across networks without needing a host file or user interaction.\n : Appears to be legitimate, useful software but contains hidden malicious code.\n : Secretly monitors user activity, such as keystrokes, and sends the data to a third party.",
      "explanation": "Ransomware extorts by denying access, worms self-propagate, Trojans masquerade as legitimate programs, and spyware collects information covertly.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Trojan Horse"
        },
        {
          "id": "i2",
          "text": "Worm"
        },
        {
          "id": "i3",
          "text": "Spyware"
        },
        {
          "id": "i4",
          "text": "Ransomware"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Encrypts user files or locks the system and demands payment to restore access.",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Self-replicating code that spreads across networks without needing a host file or user interaction.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Appears to be legitimate, useful software but contains hidden malicious code.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Secretly monitors user activity, such as keystrokes, and sends the data to a third party.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "dcm-661",
      "chapter": "acces-date",
      "type": "single",
      "question": "You want your Windows 11 PC to automatically back up your personal documents to an external USB drive and keep multiple historical versions of those files.\n\nWhich Windows feature should you enable?",
      "explanation": "File History keeps historical versions of configured personal files on a backup drive rather than merely synchronizing current content.",
      "options": [
        "Storage Spaces",
        "System Restore",
        "Disk Cleanup",
        "File History"
      ],
      "correct": 3
    },
    {
      "id": "dcm-662",
      "chapter": "management-depanare",
      "type": "single",
      "question": "You want to ensure that your Windows 11 computer does not automatically restart to install updates while you are working during your normal shift (8 AM to 5 PM).\n\nWhich Windows Update setting should you configure?",
      "explanation": "Active hours helps avoid automatic update restarts during the working period; deadlines and organizational policies can still affect restart behavior.",
      "options": [
        "Pause updates",
        "Delivery Optimization",
        "Active hours",
        "Optional updates"
      ],
      "correct": 2
    },
    {
      "id": "dcm-663",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about Windows Security (Windows Defender) in Windows 11, select True or False.",
      "explanation": "Defender supplies built-in real-time antivirus and free security intelligence updates; an authorized user can restore a verified false positive from Protection history.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "It provides real-time protection against viruses and malware out of the box.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "It requires a paid subscription to receive the latest daily antivirus definitions.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A falsely flagged safe file can be recovered from the Protection history (Quarantine) section.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-664",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Move each command-line tool from the list on the left to its correct troubleshooting purpose on the right.\n\n : Tests the basic network reachability of a device using an IP address or domain name.\n : Displays the route and measures transit delays of packets across an IP network.\n : Forces a manual refresh of local and Active Directory network security settings.\n : Displays all current TCP/IP network configuration values, including the MAC address.",
      "explanation": "These commands respectively probe reachability, trace hops, refresh Group Policy, and display detailed interface configuration.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ping"
        },
        {
          "id": "i2",
          "text": "tracert"
        },
        {
          "id": "i3",
          "text": "gpupdate /force"
        },
        {
          "id": "i4",
          "text": "ipconfig /all"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Tests the basic network reachability of a device using an IP address or domain name.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Displays the route and measures transit delays of packets across an IP network.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Forces a manual refresh of local and Active Directory network security settings.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Displays all current TCP/IP network configuration values, including the MAC address.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-665",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Assume default UAC behavior and operations requiring administrative elevation. Complete each description.",
      "explanation": "Under standard UAC settings, standard users supply administrator credentials for protected changes, while administrator accounts approve elevation. Not every per-user installer needs elevation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "require approval for administrative changes"
        },
        {
          "id": "i2",
          "text": "automatically allow all system changes"
        },
        {
          "id": "i3",
          "text": "replace antivirus protection"
        },
        {
          "id": "i4",
          "text": "encrypt every downloaded file"
        },
        {
          "id": "i5",
          "text": "automatically grant administrator rights"
        },
        {
          "id": "i6",
          "text": "uninstall the target application"
        },
        {
          "id": "i7",
          "text": "disable Group Policy"
        },
        {
          "id": "i8",
          "text": "request administrator credentials"
        },
        {
          "id": "i9",
          "text": "automatically disable UAC"
        },
        {
          "id": "i10",
          "text": "remove the application"
        },
        {
          "id": "i11",
          "text": "request consent for elevation"
        },
        {
          "id": "i12",
          "text": "always create a new account"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Purpose of UAC",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Standard user requests an administrative change",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Administrator requests an elevated operation",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-666",
      "chapter": "acces-date",
      "type": "single",
      "question": "You installed a new video driver on your Windows 11 PC, and now the screen goes black immediately after the Windows logo appears during boot. You need to start Windows with a minimal set of generic drivers so you can roll back the problematic driver.\n\nWhich boot option should you use?",
      "explanation": "Safe Mode loads a reduced driver/service set so a problematic display driver can be removed or rolled back.",
      "options": [
        "Safe Mode",
        "Last Known Good Configuration",
        "System Restore",
        "Debugging Mode"
      ],
      "correct": 0
    },
    {
      "id": "dcm-667",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about BitLocker drive encryption in Windows 11, select True or False.",
      "explanation": "BitLocker supports OS and removable volumes on supported editions, does not require domain membership, and provides recovery-key protection when configured.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "BitLocker can encrypt both the internal operating system drive and external removable USB drives.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "You can only use BitLocker if your computer is joined to an Active Directory domain.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A recovery key is generated during setup to help you regain access if you forget your PIN or password.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-668",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Move each service or storage term from the list on the left to its correct description on the right.\n\n : Microsoft's cloud storage service built directly into Windows 11 File Explorer.\n : A subscription service that provides Microsoft Office applications and additional cloud storage.\n : A physical local network storage solution accessible by multiple users in an office.\n : A cloud-based service that streams a full personalized Windows desktop to any device.",
      "explanation": "OneDrive synchronizes files, Microsoft 365 bundles productivity services, NAS provides network storage, and Windows 365 supplies Cloud PCs.",
      "dragItems": [
        {
          "id": "i1",
          "text": "OneDrive"
        },
        {
          "id": "i2",
          "text": "Microsoft 365"
        },
        {
          "id": "i3",
          "text": "NAS (Network Attached Storage)"
        },
        {
          "id": "i4",
          "text": "Windows 365"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Microsoft's cloud storage service built directly into Windows 11 File Explorer.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A subscription service that provides Microsoft Office applications and additional cloud storage.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A physical local network storage solution accessible by multiple users in an office.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "A cloud-based service that streams a full personalized Windows desktop to any device.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-669",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "Your company is implementing an on-premises Windows Server infrastructure. You need to purchase a new laptop that will be joined to the company's local Active Directory Domain.\n\nWhich minimum edition of Windows 11 is required to support domain joining?",
      "explanation": "Windows 11 Pro supports on-premises Active Directory domain join; Home and SE do not provide that ordinary business capability.",
      "options": [
        "Windows 11 Pro",
        "Windows 11 Home",
        "Windows 11 SE",
        "Windows 11 Home in S mode"
      ],
      "correct": 0
    },
    {
      "id": "dcm-670",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Match the Event Viewer log with the type of events it stores. Complete the sentences.\n\nRecords events logged by software, such as a database program crashing: \n[1]\n\nRecords events related to Windows components, such as a hardware driver failing to load: \n[2]\n\nRecords events such as valid and invalid logon attempts or resource access: \n[3]",
      "explanation": "Application logs hold software events, System logs hold Windows component events, and Security records audited authentication and access events when auditing is enabled.",
      "dragItems": [
        {
          "id": "i1",
          "text": "System"
        },
        {
          "id": "i2",
          "text": "Security"
        },
        {
          "id": "i3",
          "text": "Setup"
        },
        {
          "id": "i4",
          "text": "Application"
        },
        {
          "id": "i5",
          "text": "Security"
        },
        {
          "id": "i6",
          "text": "Setup"
        },
        {
          "id": "i7",
          "text": "System"
        },
        {
          "id": "i8",
          "text": "Application"
        },
        {
          "id": "i9",
          "text": "Setup"
        },
        {
          "id": "i10",
          "text": "Security"
        },
        {
          "id": "i11",
          "text": "Application"
        },
        {
          "id": "i12",
          "text": "System"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-671",
      "chapter": "acces-date",
      "type": "single",
      "question": "You are trying to connect a new Bluetooth headset to your Windows 11 laptop. The headset is fully charged and in pairing mode, but the laptop does not detect it in the \"Add a device\" window.\n\nWhat is the most likely first step you should verify in the Windows 11 Settings app?",
      "explanation": "Verify that Bluetooth is enabled before changing drivers or applying broad system updates.",
      "options": [
        "Ensure the Bluetooth toggle switch is turned On in the Bluetooth & devices menu.",
        "Run the Network and Internet troubleshooter.",
        "Update the generic audio drivers in Device Manager.",
        "Check for the latest Windows Updates."
      ],
      "correct": 0
    },
    {
      "id": "dcm-672",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A user wants to center the taskbar icons, change the desktop background, and apply a dark color theme to their Windows 11 interface.\n\nWhere should they go to make these changes?",
      "explanation": "Personalization contains taskbar alignment, backgrounds, and color/theme settings.",
      "options": [
        "Settings -> Personalization",
        "Settings -> Accessibility",
        "Control Panel -> Display",
        "Settings -> System"
      ],
      "correct": 0
    },
    {
      "id": "dcm-673",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Match the Windows Hello authentication method with its hardware or input requirement.\n\nFacial recognition: \n[1]\n\nFingerprint recognition: \n[2]\n\nPIN: \n[3]",
      "explanation": "Face and fingerprint methods require compatible biometric hardware. A PIN uses a device-bound credential entered by the user.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Compatible infrared camera"
        },
        {
          "id": "i2",
          "text": "Compatible fingerprint reader"
        },
        {
          "id": "i3",
          "text": "Device-bound PIN entry"
        },
        {
          "id": "i4",
          "text": "Ordinary RGB webcam only"
        },
        {
          "id": "i5",
          "text": "Compatible infrared camera"
        },
        {
          "id": "i6",
          "text": "Device-bound PIN entry"
        },
        {
          "id": "i7",
          "text": "Ordinary RGB webcam only"
        },
        {
          "id": "i8",
          "text": "Compatible fingerprint reader"
        },
        {
          "id": "i9",
          "text": "Compatible fingerprint reader"
        },
        {
          "id": "i10",
          "text": "Ordinary RGB webcam only"
        },
        {
          "id": "i11",
          "text": "Device-bound PIN entry"
        },
        {
          "id": "i12",
          "text": "Compatible infrared camera"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-674",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each statement about NTFS permissions and file sharing in Windows 11, select True or False.",
      "explanation": "Share ACLs apply to SMB access, cross-volume moves normally inherit destination permissions, and explicit deny entries block conflicting allows in the stated canonical ACL model.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SMB share permissions apply to remote share access, not direct local file paths.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A normal Explorer move between different NTFS volumes always retains the source ACL instead of inheriting destination permissions.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "An explicit Deny entry blocks a conflicting Allow right in a canonical ACL.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-675",
      "chapter": "acces-date",
      "type": "single",
      "question": "You connected a new USB printer to your Windows 11 PC, but it is not printing. When you open Device Manager, you see a yellow exclamation mark next to the printer's name.\n\nWhat should you do first to fix this issue?",
      "explanation": "A Device Manager warning indicates a device problem; inspect its status/error code and install or update the correct driver when the problem is driver-related.",
      "options": [
        "Update the device driver.",
        "Replace the USB cable.",
        "Plug the printer into a different USB port.",
        "Reinstall the Windows operating system."
      ],
      "correct": 0,
      "image": "assets/device-config/pdf-088-device-manager.png"
    },
    {
      "id": "dcm-676",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "After installing a recent Windows 11 feature update, several legacy applications crash frequently. You decide to uninstall the update and revert to the previous version.\n\nWhere can you find the option to go back?",
      "explanation": "System > Recovery exposes Go back while the rollback files and supported rollback period remain available.",
      "options": [
        "Settings -> System -> Recovery",
        "Settings -> Windows Update -> Update history",
        "Control Panel -> Programs and Features",
        "Settings -> Apps -> Installed apps"
      ],
      "correct": 0
    },
    {
      "id": "dcm-677",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement about network profiles in Windows 11, select True or False.",
      "explanation": "Public is appropriate for untrusted networks. Private supports discovery and sharing but these still depend on configured sharing settings and firewall rules.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Public profile uses restrictive discovery defaults suitable for untrusted networks.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Private is the recommended profile for an unknown coffee-shop hotspot.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Private permits trusted discovery and file sharing when their sharing settings and firewall rules are enabled.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-678",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Move each USB connector type from the list on the left to its correct description on the right.\n\n : Reversible oval connector commonly used on modern Windows 11 laptops and smartphones.\n : Standard rectangular connector found on most older legacy PCs and flash drives.\n : Square-like connector typically used to connect desktop printers and scanners to a PC.\n : Small, flat connector commonly used for older legacy mobile devices and accessories before Type-C.",
      "explanation": "Type-C is reversible and oval, Type-A is rectangular, classic Type-B is near-square, and Micro-USB is a small older mobile-device connector.",
      "dragItems": [
        {
          "id": "i1",
          "text": "USB Type-C"
        },
        {
          "id": "i2",
          "text": "USB Type-A"
        },
        {
          "id": "i3",
          "text": "USB Type-B"
        },
        {
          "id": "i4",
          "text": "Micro-USB"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Reversible oval connector commonly used on modern Windows 11 laptops and smartphones.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Standard rectangular connector found on most older legacy PCs and flash drives.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Square-like connector typically used to connect desktop printers and scanners to a PC.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Small, flat connector commonly used for older legacy mobile devices and accessories before Type-C.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-679",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "A background application is consuming 99% of your CPU, making your Windows 11 system completely unresponsive.\n\nWhich tool should you use to quickly force this application to close?",
      "explanation": "Task Manager provides a direct End task action for a misbehaving process.",
      "options": [
        "Task Manager",
        "Resource Monitor",
        "Device Manager",
        "Event Viewer"
      ],
      "correct": 0
    },
    {
      "id": "dcm-680",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Select the correct power state for each description in Windows 11.\n\nSaves your current session to RAM and uses a very small amount of power: \n[1]\n\nSaves your current session to the hard drive and turns off the PC completely: \n[2]\n\nCloses all apps and turns off the PC without saving the session state: \n[3]",
      "explanation": "Sleep retains session memory with power, Hibernate stores it on disk, and shutdown ends the user session rather than preserving open apps.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Balanced power plan"
        },
        {
          "id": "i2",
          "text": "Sleep"
        },
        {
          "id": "i3",
          "text": "Hibernate"
        },
        {
          "id": "i4",
          "text": "Shut down"
        },
        {
          "id": "i5",
          "text": "Hibernate"
        },
        {
          "id": "i6",
          "text": "Sleep"
        },
        {
          "id": "i7",
          "text": "Shut down"
        },
        {
          "id": "i8",
          "text": "Balanced power plan"
        },
        {
          "id": "i9",
          "text": "Sleep"
        },
        {
          "id": "i10",
          "text": "Hibernate"
        },
        {
          "id": "i11",
          "text": "Balanced power plan"
        },
        {
          "id": "i12",
          "text": "Shut down"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-681",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "A user recently purchased a Windows 11 laptop and cannot install a third-party web browser downloaded from the internet. The system only allows app installations from the Microsoft Store.\n\nWhat is the most likely cause of this limitation?",
      "explanation": "S mode restricts installation to approved Store sources; it is distinct from ordinary UAC prompts.",
      "options": [
        "The computer is running Windows 11 in S mode.",
        "The user is logged in with a Standard Account instead of an Administrator account.",
        "User Account Control (UAC) is set to \"Always notify\".",
        "Windows Defender SmartScreen blocked the download."
      ],
      "correct": 0
    },
    {
      "id": "dcm-682",
      "chapter": "management-depanare",
      "type": "single",
      "question": "Your company has limited internet bandwidth. You want your Windows 11 PCs to download updates from other PCs on the local network instead of downloading them multiple times from the internet.\n\nWhich feature should you enable?",
      "explanation": "Delivery Optimization can retrieve update content from allowed peers, including local-network PCs, to reduce repeated internet downloads.",
      "options": [
        "Delivery Optimization",
        "Windows Server Update Services (WSUS)",
        "Active hours",
        "Optional updates"
      ],
      "correct": 0
    },
    {
      "id": "dcm-683",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement about Microsoft Edge and Copilot in Windows 11, select True or False.",
      "explanation": "Edge is supplied as the default browser, Copilot includes cloud-based service experiences, and supported integrations can assist with settings. Exact capabilities vary by release and policy.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Microsoft Edge is supplied as the default web browser in Windows 11.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Copilot cannot use cloud services and requires every model to run locally.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Some supported Copilot/Windows integrations can assist with settings; availability depends on version and policy.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-684",
      "chapter": "instalare-config",
      "type": "dropdown",
      "question": "Complete the sentences regarding IP addressing in Windows 11.\n\nA server that automatically assigns IP addresses to devices on a network is called a \n[1]\n.\nIf a PC fails to contact this server, Windows assigns an automatic private IP address starting with \n[2]\n.\nThe address that identifies the router used to access the internet is the \n[3]\n.",
      "explanation": "DHCP leases configuration, APIPA chooses a link-local 169.254/16 address when no lease is obtained, and the gateway provides off-subnet routing.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Web server"
        },
        {
          "id": "i2",
          "text": "DHCP server"
        },
        {
          "id": "i3",
          "text": "DNS server"
        },
        {
          "id": "i4",
          "text": "Proxy server"
        },
        {
          "id": "i5",
          "text": "169.254"
        },
        {
          "id": "i6",
          "text": "192.168"
        },
        {
          "id": "i7",
          "text": "127.0"
        },
        {
          "id": "i8",
          "text": "224.0"
        },
        {
          "id": "i9",
          "text": "UNC path"
        },
        {
          "id": "i10",
          "text": "Local drive letter on the server"
        },
        {
          "id": "i11",
          "text": "MAC address"
        },
        {
          "id": "i12",
          "text": "Default gateway"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i12",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-685",
      "chapter": "acces-date",
      "type": "drag_drop",
      "question": "Move each hardware component from the list on the left to its correct function on the right.\n\n : The primary circuit board that connects all computer components.\n : Temporary, volatile memory used by active applications.\n : The main processor that executes instructions and performs calculations.\n : Non-volatile storage used to permanently save the operating system and user files.",
      "explanation": "The motherboard connects components, RAM holds working data, the CPU executes instructions, and disks preserve files without power.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Motherboard"
        },
        {
          "id": "i2",
          "text": "RAM"
        },
        {
          "id": "i3",
          "text": "CPU"
        },
        {
          "id": "i4",
          "text": "SSD/HDD"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The primary circuit board that connects all computer components.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Temporary, volatile memory used by active applications.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The main processor that executes instructions and performs calculations.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Non-volatile storage used to permanently save the operating system and user files.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-686",
      "chapter": "acces-date",
      "type": "single",
      "question": "You want to pin a frequently used application directly to the Windows 11 taskbar for quick access.\n\nHow can you accomplish this?",
      "explanation": "Pin to taskbar creates a persistent taskbar launcher for the application.",
      "options": [
        "Right-click the application icon and select \"Pin to taskbar\".",
        "Drag and drop the application onto the desktop.",
        "Create a shortcut in the Documents folder.",
        "Change the Taskbar alignment in Settings."
      ],
      "correct": 0
    },
    {
      "id": "dcm-687",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement about Storage Spaces in Windows 11, select True or False.",
      "explanation": "Storage Spaces pools supported physical drives and provides resiliency options; drives need not all have identical capacity or interface type.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Storage Spaces allows you to group multiple physical drives into a single logical pool.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "You can use Storage Spaces to protect your data from drive failures by mirroring files.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Storage Spaces can only combine drives of the exact same size and connection type.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-688",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "You connected a projector to your Windows 11 laptop for a presentation. You want to see your speaker notes on the laptop screen while the audience only sees the slides on the projector.\n\nWhich multiple display option should you select?",
      "explanation": "Extend creates separate display workspaces so presentation software can show notes locally and slides externally.",
      "options": [
        "Extend these displays",
        "Duplicate these displays",
        "Show only on 1",
        "Show only on 2"
      ],
      "correct": 0
    },
    {
      "id": "dcm-689",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Match the file system to its primary use case in a Windows 11 environment.\n\nThe default and most secure file system for the Windows 11 operating system drive: \n[1]\n\nA highly compatible file system for USB flash drives, but limited to a 4GB maximum file size: \n[2]\n\nAn optimized file system for large external flash drives that removes the 4GB file size limit: \n[3]",
      "explanation": "NTFS is the Windows system-volume file system, FAT32 has a just-under-4-GiB file limit, and exFAT supports large files on removable storage.",
      "dragItems": [
        {
          "id": "i1",
          "text": "NTFS"
        },
        {
          "id": "i2",
          "text": "Share"
        },
        {
          "id": "i3",
          "text": "FAT32"
        },
        {
          "id": "i4",
          "text": "EFS"
        },
        {
          "id": "i5",
          "text": "Share"
        },
        {
          "id": "i6",
          "text": "NTFS"
        },
        {
          "id": "i7",
          "text": "EFS"
        },
        {
          "id": "i8",
          "text": "FAT32"
        },
        {
          "id": "i9",
          "text": "FAT32"
        },
        {
          "id": "i10",
          "text": "ReFS"
        },
        {
          "id": "i11",
          "text": "exFAT"
        },
        {
          "id": "i12",
          "text": "NTFS"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-690",
      "chapter": "securitate-dispozitiv",
      "type": "drag_drop",
      "question": "Move each security policy concept from the left to its correct description on the right.\n\n : A set of rules configured on a standalone computer to enforce password requirements.\n : A centralized set of rules pushed from a server to all computers in a domain.\n : The principle that domain-level rules override conflicting local rules.\n : A security feature that prevents access to an account after too many incorrect password attempts.",
      "explanation": "Local policy governs standalone settings, domain GPOs centralize rules, precedence resolves conflicts, and lockout responds to repeated failed authentication.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Local Security Policy"
        },
        {
          "id": "i2",
          "text": "Group Policy"
        },
        {
          "id": "i3",
          "text": "Policy Precedence"
        },
        {
          "id": "i4",
          "text": "Account Lockout"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A set of rules configured on a standalone computer to enforce password requirements.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A centralized set of rules pushed from a server to all computers in a domain.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "The principle that domain-level rules override conflicting local rules.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "A security feature that prevents access to an account after too many incorrect password attempts.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-691",
      "chapter": "instalare-config",
      "type": "single",
      "question": "A user has limited vision and needs the text and images on their Windows 11 screen to be significantly larger. They want a tool that acts like a digital magnifying glass following their mouse cursor.\n\nWhich Accessibility feature should they use?",
      "explanation": "Magnifier enlarges a portion or the whole screen and can follow the pointer.",
      "options": [
        "Magnifier",
        "Narrator",
        "High contrast",
        "Live captions"
      ],
      "correct": 0
    },
    {
      "id": "dcm-692",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "For each statement about connecting peripherals in Windows 11, select True or False.",
      "explanation": "Plug and Play often installs suitable drivers, ordinary Bluetooth peripherals need pairing, and Type-A cannot physically plug directly into Type-C.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Windows 11 can automatically detect and install drivers for many Plug and Play devices.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Bluetooth devices must be paired in Settings before they can be used with a Windows 11 PC.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A standard USB Type-A device can be plugged directly into a USB Type-C port without an adapter.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-693",
      "chapter": "acces-date",
      "type": "single",
      "question": "You want to completely remove a desktop application and all its associated files from your Windows 11 computer.\n\nWhat is the proper method?",
      "explanation": "Run the application's supported uninstaller through Installed apps. Some preferences or user data may remain; deleting shortcuts or folders is not a proper full uninstall.",
      "options": [
        "Use the \"Installed apps\" section in Settings to uninstall it.",
        "Delete the application's shortcut from the desktop.",
        "Delete the application's folder from \"C:\\Program Files\".",
        "Drag the application icon to the Recycle Bin."
      ],
      "correct": 0
    },
    {
      "id": "dcm-694",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Complete the sentences regarding printer configuration in Windows 11.\n\nIf a printer is shared over the network, other users can connect to it using its \n[1]\n.\nTo allow a local printer to be used by others on the network, you must enable \n[2]\n in the printer properties.\nIf a print job is stuck, you can cancel or restart it from the \n[3]\n.",
      "explanation": "A shared printer is addressed by a server/share path, sharing is enabled in its properties, and individual jobs are managed in its queue.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Local drive letter on the server"
        },
        {
          "id": "i2",
          "text": "MAC address"
        },
        {
          "id": "i3",
          "text": "Default gateway"
        },
        {
          "id": "i4",
          "text": "UNC path"
        },
        {
          "id": "i5",
          "text": "Print a test page"
        },
        {
          "id": "i6",
          "text": "Pause printing"
        },
        {
          "id": "i7",
          "text": "Share this printer"
        },
        {
          "id": "i8",
          "text": "Set as default printer"
        },
        {
          "id": "i9",
          "text": "File History"
        },
        {
          "id": "i10",
          "text": "Print queue"
        },
        {
          "id": "i11",
          "text": "Device inventory"
        },
        {
          "id": "i12",
          "text": "Update history"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-695",
      "chapter": "management-depanare",
      "type": "drag_drop",
      "question": "Move the network troubleshooting tool to its correct description.\n\n : Identifying if a remote server is online and responding.\n : Viewing the path a packet takes to reach its destination.\n : Seeing the current IP address assigned to your PC.\n : Requesting a new IP address from the DHCP server.",
      "explanation": "These tools test ICMP reachability, trace hops, show interface configuration, and renew eligible DHCP leases. A blocked ping alone does not prove a server is offline.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ping"
        },
        {
          "id": "i2",
          "text": "tracert"
        },
        {
          "id": "i3",
          "text": "ipconfig"
        },
        {
          "id": "i4",
          "text": "ipconfig /renew"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Identifying if a remote server is online and responding.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Viewing the path a packet takes to reach its destination.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Seeing the current IP address assigned to your PC.",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Requesting a new IP address from the DHCP server.",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "dcm-696",
      "chapter": "acces-date",
      "type": "single",
      "question": "Which feature in the Windows 11 taskbar provides quick access to AI-powered chat, search, and system assistance?",
      "explanation": "Copilot is Microsoft's AI assistant; whether it appears as a taskbar button depends on the Windows and app version and policy.",
      "options": [
        "Copilot",
        "Task View",
        "Widgets",
        "File Explorer"
      ],
      "correct": 0
    },
    {
      "id": "dcm-697",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Read the following statements regarding the different update types found in Update History. Choose True or False for each.",
      "explanation": "Driver updates can deliver manufacturer drivers, feature releases can contain security fixes, and a service pack historically bundles multiple updates.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Third-party and device manufacturer drivers can be installed through Windows Driver updates.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Security vulnerabilities are occasionally patched by installing feature updates.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A service pack is a single package that bundles multiple past hotfixes, patches, and updates.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-698",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "On your Windows 11 computer, you encounter an error when trying to download and install a webcam application from the Microsoft Store. What utility can help you fix this installation problem?",
      "explanation": "WSReset resets the Microsoft Store cache and can help resolve Store download or installation issues without changing device drivers.",
      "options": [
        "WSReset.exe",
        "Device Manager",
        "Event Viewer",
        "Windows Update"
      ],
      "correct": 0
    },
    {
      "id": "dcm-699",
      "chapter": "acces-date",
      "type": "single",
      "question": "Which of the following best describes the main type of information kept inside the Windows Registry?",
      "explanation": "The Registry stores hierarchical OS, user, hardware, and application configuration rather than media files or backup images.",
      "options": [
        "User profiles and application configuration settings",
        "Multimedia files such as videos and music",
        "System backups and restore points",
        "Cached web pages and internet history"
      ],
      "correct": 0
    },
    {
      "id": "dcm-700",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "In Windows 11, where would you go to adjust the settings for the Narrator feature?",
      "explanation": "Windows 11 groups Narrator settings under Accessibility.",
      "options": [
        "Privacy & security",
        "Accessibility",
        "System",
        "Ease of Access"
      ],
      "correct": 1
    },
    {
      "id": "dcm-701",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Choose the least-permissive listed standard BASIC NTFS permission group for each capability. Advanced individual rights can be narrower.\n\nFill in the blanks by choosing the appropriate NTFS permission from the drop-down menus.\n\nYou must have the \n[1]\n permission to be able to create a new subfolder.\nThe \n[2]\n permission is required to delete an existing subfolder.\nIn order to execute a program, you need the \n[3]\n permission.",
      "explanation": "Among basic NTFS groups, Write allows creation, Modify includes deletion, and Read and Execute includes program execution.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Write"
        },
        {
          "id": "i2",
          "text": "Read & execute"
        },
        {
          "id": "i3",
          "text": "Modify"
        },
        {
          "id": "i4",
          "text": "Full Control"
        },
        {
          "id": "i5",
          "text": "Read & execute"
        },
        {
          "id": "i6",
          "text": "Write"
        },
        {
          "id": "i7",
          "text": "Full Control"
        },
        {
          "id": "i8",
          "text": "Modify"
        },
        {
          "id": "i9",
          "text": "Modify"
        },
        {
          "id": "i10",
          "text": "Full Control"
        },
        {
          "id": "i11",
          "text": "Read and Execute"
        },
        {
          "id": "i12",
          "text": "Write"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-702",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding the installation and removal of third-party software on Windows. Choose True or False for each.",
      "explanation": "Applications can write authorized Registry keys, shortcuts do not uninstall apps, and 32-/64-bit applications normally use separate default Program Files locations on 64-bit Windows.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "During installation, third-party software is restricted from modifying the Windows Registry.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Removing an application's desktop shortcut will completely uninstall the program from your system.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Windows automatically separates the default installation folders for third-party programs depending on whether they are 32-bit or 64-bit.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "dcm-703",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "You are experiencing issues with a USB printer. Here is what happened:\n1. A USB printer was installed and functioned properly.\n2. A wireless printer was added, which caused the USB printer to fail.\n3. The wireless printer was removed and disconnected, but the USB printer remains unresponsive.\n\nWhen checking Device Manager, the 'Printers' category is completely missing.\n\nWhat is the problem? \n[1]\n\nWhat should you do to further troubleshoot this problem? \n[2]",
      "explanation": "A missing category does not prove a particular hardware failure. Inspect hidden/nonpresent devices, reconnect the printer, scan for changes, and check the relevant printer queues and drivers.",
      "dragItems": [
        {
          "id": "i1",
          "text": "The printer is definitely out of ink"
        },
        {
          "id": "i2",
          "text": "The computer cannot support any USB device"
        },
        {
          "id": "i3",
          "text": "Windows is not currently enumerating the printer in that category"
        },
        {
          "id": "i4",
          "text": "The printer is definitely physically destroyed"
        },
        {
          "id": "i5",
          "text": "Disable every network service"
        },
        {
          "id": "i6",
          "text": "Show hidden devices and scan for hardware changes"
        },
        {
          "id": "i7",
          "text": "Format the system disk immediately"
        },
        {
          "id": "i8",
          "text": "Delete all documents"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "image": "assets/device-config/pdf-098-device-manager.png"
    },
    {
      "id": "dcm-704",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding Random Access Memory (RAM). Choose True or False for each.",
      "explanation": "A normal reboot rebuilds volatile application memory, running applications use RAM, and RAM access is much faster than mechanical disk access.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Rebooting the system will clear all data currently stored in RAM.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "When you launch an application, its data is transferred into the system's RAM.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Accessing information from RAM takes longer than retrieving it from a traditional hard drive.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-705",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "While working as an IT support specialist, you discover an abandoned USB thumb drive on the floor of your workplace. What is the most appropriate action to take?",
      "explanation": "Secure the unknown USB device and report it through the security process; do not attach untrusted hardware to a workstation.",
      "options": [
        "Keep it in a secure location or hand it over to the IT security team.",
        "Plug it into your workstation to run a quick antivirus scan.",
        "Connect it to your computer to open any text documents and identify the owner.",
        "Format the drive immediately so you can safely reuse it for yourself."
      ],
      "correct": 0
    },
    {
      "id": "dcm-706",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "Identify the type of data transmitted by each port connection. Choose Audio, Video, or Audio & Video from each drop-down menu.\n\nDisplayPort: \n[1]\n\nVGA: \n[2]\n\nHDMI: \n[3]\n\nS/PDIF Optical: \n[4]",
      "explanation": "DisplayPort and HDMI support digital audio/video, VGA carries analog video, and optical S/PDIF carries digital audio.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Audio & Video"
        },
        {
          "id": "i2",
          "text": "Video"
        },
        {
          "id": "i3",
          "text": "Audio"
        },
        {
          "id": "i4",
          "text": "Audio & Video"
        },
        {
          "id": "i5",
          "text": "Audio"
        },
        {
          "id": "i6",
          "text": "Video"
        },
        {
          "id": "i7",
          "text": "Audio"
        },
        {
          "id": "i8",
          "text": "Audio & Video"
        },
        {
          "id": "i9",
          "text": "Video"
        },
        {
          "id": "i10",
          "text": "Audio"
        },
        {
          "id": "i11",
          "text": "Audio & Video"
        },
        {
          "id": "i12",
          "text": "Video"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i8",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i10",
          "optionIds": [
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-707",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "If you are using Windows 11 Home and want an account that seamlessly syncs your settings across different Windows PCs and provides access to various Microsoft services, which option is required?",
      "explanation": "A Microsoft account enables supported personal cloud services and settings synchronization when those features are enabled.",
      "options": [
        "Local Standard Account",
        "Guest Account",
        "Work or School Account",
        "Microsoft Account"
      ],
      "correct": 3
    },
    {
      "id": "dcm-708",
      "chapter": "acces-date",
      "type": "single",
      "question": "You need to install Windows 11 on a brand new PC that has only one internal storage drive. What is the proper way to create the bootable installation media?",
      "explanation": "The Media Creation Tool prepares suitable bootable Windows installation media; merely copying an ISO as an ordinary file does not make a conventional bootable USB.",
      "options": [
        "Use the Windows Media Creation Tool to format and prepare a USB flash drive.",
        "Simply drag and drop the Windows 11 ISO file onto a blank USB stick.",
        "Burn the Windows 11 installation folders to a standard CD-ROM.",
        "Run the setup.exe file directly from the computer's BIOS."
      ],
      "correct": 0
    },
    {
      "id": "dcm-709",
      "chapter": "acces-date",
      "type": "single",
      "question": "What kind of user profile saves a person's configuration data directly to the local disk, meaning their personalized environment cannot be accessed from any other PC?",
      "explanation": "A local profile stores settings on that computer rather than roaming them through a domain profile service.",
      "options": [
        "Local user profile",
        "Guest user profile",
        "Roaming user profile",
        "Default user profile"
      ],
      "correct": 0
    },
    {
      "id": "dcm-710",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "For each of the following descriptions, identify if it applies to a Private network profile or a Public network profile.\n\nBy default, this setting turns on the ability to share files and printers: \n[1]\n\nSelecting this option makes your computer discoverable to other PCs on the same local network: \n[2]\n\nIt is highly advised to use this configuration when connecting to unknown or unsecured Wi-Fi hotspots: \n[3]",
      "explanation": "Private supports trusted discovery/sharing; Public applies more restrictive defaults on unknown networks. Sharing remains configurable rather than guaranteed by the profile alone.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Public"
        },
        {
          "id": "i2",
          "text": "Domain"
        },
        {
          "id": "i3",
          "text": "Private"
        },
        {
          "id": "i4",
          "text": "Domain"
        },
        {
          "id": "i5",
          "text": "Private"
        },
        {
          "id": "i6",
          "text": "Public"
        },
        {
          "id": "i7",
          "text": "Public"
        },
        {
          "id": "i8",
          "text": "Private"
        },
        {
          "id": "i9",
          "text": "Domain"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i7",
          "optionIds": [
            "i7",
            "i8",
            "i9"
          ]
        }
      ]
    },
    {
      "id": "dcm-711",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "While trying to fix a printer error on a Windows 11 computer, you discover that the print spooler has crashed or hung. What is the correct way to fix this directly from the Task Manager?",
      "explanation": "Select the Print Spooler service in Task Manager's Services view and restart it with suitable privileges.",
      "options": [
        "Navigate to the Services tab and select Restart.",
        "Go to the Details tab and select End process tree.",
        "Open the App history tab and clear usage data.",
        "Switch to the Users tab and sign out the current user."
      ],
      "correct": 0
    },
    {
      "id": "dcm-712",
      "chapter": "acces-date",
      "type": "single",
      "question": "Following a recent upgrade to Windows 11, you realize your computer's storage drive is almost full. Since you plan to keep Windows 11 and don't want to revert, what is the best method to reclaim that lost storage capacity?",
      "explanation": "Removing previous Windows installation files reclaims rollback space, but prevents using them to return to the prior version. Confirm backups first.",
      "options": [
        "Use the Disk Cleanup utility to delete the files from the old Windows installation.",
        "Uninstall and then download all of your programs again.",
        "Run the Check Disk (chkdsk) command to repair corrupted sectors.",
        "Shrink the volume size in Disk Management to create unallocated space."
      ],
      "correct": 0
    },
    {
      "id": "dcm-713",
      "chapter": "acces-date",
      "type": "single",
      "question": "If you need to install a newer version of a driver for a specific hardware component by hand, which Windows utility is the correct one to open?",
      "explanation": "Device Manager exposes per-device driver update options.",
      "options": [
        "System Information",
        "Optional Features",
        "Device Manager",
        "Programs and Features"
      ],
      "correct": 2
    },
    {
      "id": "dcm-714",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate standard Windows Hello sign-in options on a typical Windows 11 PC, not historical Windows Phone hardware.",
      "explanation": "Windows Hello on ordinary Windows 11 PCs supports PIN and compatible face/fingerprint methods. Iris recognition was associated with particular historical Windows devices, and Authenticator approval is not a standard local Hello method.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Enables individuals to log in to their computer using a numeric PIN rather than a standard password.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Permits unlocking the system using an iris recognition scanner.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Provides the ability to authenticate into the device by approving a prompt on the Microsoft Authenticator mobile application.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-715",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "Evaluate the following facts related to computer graphics cards. Choose True or False for each.",
      "explanation": "Graphics hardware renders display output and has used the listed display interfaces. Integrated GPUs typically share system RAM; arbitrary peripheral access is not their defining CPU-acceleration function.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The primary function of a graphics card is to process visual data and output it to a display device.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Common connection ports found on video cards include VGA, DVI, HDMI, and DisplayPort.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "An integrated GPU comes with its own dedicated VRAM separate from the system's main memory.",
          "correctItemId": "no"
        },
        {
          "id": "z4",
          "label": "A graphics card is capable of directly accessing computer peripherals to increase the CPU's overall processing performance.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-716",
      "chapter": "acces-date",
      "type": "dropdown",
      "question": "Evaluate the following statements regarding the management of device drivers in Windows 11. Choose True or False for each one.",
      "explanation": "A manufacturer may publish newer drivers before Windows Update. Uninstallation is not mandatory for every update, and rollback is limited by retained packages and available drivers.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "If Windows Update cannot locate a newer driver, it guarantees that no newer version exists.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "It is highly recommended to completely remove an existing driver and reboot the system prior to installing it again.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "The operating system permits you to revert a device driver to any older version that was ever installed on the system.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-717",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Associate each malware category with its corresponding description.\n\nA self-replicating threat that often travels through email payloads: \n[1]\n\nLocks users out of their own files until a financial extortion fee is paid: \n[2]\n\nA harmful payload disguised as safe and useful software: \n[3]\n\nA malicious script designed to execute only when specific criteria or events are met: \n[4]",
      "explanation": "A classic file virus replicates through infected hosts, ransomware extorts access, a Trojan disguises a payload, and a logic bomb waits for a condition.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Virus"
        },
        {
          "id": "i2",
          "text": "Worm"
        },
        {
          "id": "i3",
          "text": "Trojan Horse"
        },
        {
          "id": "i4",
          "text": "Logic Bomb"
        },
        {
          "id": "i5",
          "text": "Virus"
        },
        {
          "id": "i6",
          "text": "Worm"
        },
        {
          "id": "i7",
          "text": "Trojan Horse"
        },
        {
          "id": "i8",
          "text": "Ransomware"
        },
        {
          "id": "i9",
          "text": "Worm"
        },
        {
          "id": "i10",
          "text": "Logic Bomb"
        },
        {
          "id": "i11",
          "text": "Trojan Horse"
        },
        {
          "id": "i12",
          "text": "Virus"
        },
        {
          "id": "i13",
          "text": "Trojan Horse"
        },
        {
          "id": "i14",
          "text": "Logic Bomb"
        },
        {
          "id": "i15",
          "text": "Virus"
        },
        {
          "id": "i16",
          "text": "Worm"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Classic self-replicating malware that attaches to a host file and spreads when that host executes.",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Encrypts or locks user data and demands payment.",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Disguises a malicious payload as safe software.",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Activates when a specified condition or event occurs.",
          "correctItemId": "i14",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "dcm-718",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "Match each physical connection interface with the statement that best describes it.\n\nA versatile plug capable of supplying electrical charge alongside high-speed data transfer: \n[1]\n\nAn older, analog video standard mostly seen on outdated display equipment: \n[2]\n\nA digital interface prevalent on PC graphics cards and screens, but rarely adopted by living room gaming systems: \n[3]\n\nThe universal video and audio standard for modern TVs, projectors, and entertainment consoles: \n[4]",
      "explanation": "Capable USB-C connections carry power/data, VGA is analog video, DisplayPort is common on PCs, and HDMI is widespread in entertainment equipment.",
      "dragItems": [
        {
          "id": "i1",
          "text": "VGA"
        },
        {
          "id": "i2",
          "text": "DisplayPort"
        },
        {
          "id": "i3",
          "text": "HDMI"
        },
        {
          "id": "i4",
          "text": "USB Type-C"
        },
        {
          "id": "i5",
          "text": "DisplayPort"
        },
        {
          "id": "i6",
          "text": "HDMI"
        },
        {
          "id": "i7",
          "text": "VGA"
        },
        {
          "id": "i8",
          "text": "USB Type-C"
        },
        {
          "id": "i9",
          "text": "HDMI"
        },
        {
          "id": "i10",
          "text": "DisplayPort"
        },
        {
          "id": "i11",
          "text": "USB Type-C"
        },
        {
          "id": "i12",
          "text": "VGA"
        },
        {
          "id": "i13",
          "text": "HDMI"
        },
        {
          "id": "i14",
          "text": "USB Type-C"
        },
        {
          "id": "i15",
          "text": "VGA"
        },
        {
          "id": "i16",
          "text": "DisplayPort"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i13",
          "optionIds": [
            "i13",
            "i14",
            "i15",
            "i16"
          ]
        }
      ]
    },
    {
      "id": "dcm-719",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "You need to format a 4 GB flash drive on Windows 11 so that it can be read by older digital cameras, various gaming consoles, and macOS or Linux machines. What is the most universally compatible file system for this purpose?",
      "explanation": "FAT32 is widely supported by older consumer devices and operating systems, provided their device-specific media requirements are met.",
      "options": [
        "NTFS",
        "ext4",
        "FAT32",
        "ReFS"
      ],
      "correct": 2
    },
    {
      "id": "dcm-720",
      "chapter": "securitate-dispozitiv",
      "type": "single",
      "question": "You can see your workplace's wireless network name broadcasting, however, everyone in the office is failing to join it. What is the most appropriate action to resolve this?",
      "explanation": "When every user fails to join an otherwise visible WLAN, inspect the access point and perform an authorized controlled restart after checking configuration and outages.",
      "options": [
        "Run the ping 127.0.0.1 command to check the loopback address.",
        "Reset the DNS cache on the company server.",
        "Restart the network's wireless router or access point.",
        "Change the Wi-Fi password for all employees."
      ],
      "correct": 2
    },
    {
      "id": "dcm-721",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Evaluate the following capabilities of the Windows Backup application. Choose True or False for each.",
      "explanation": "The consumer Windows Backup app uses a Microsoft account and OneDrive for supported folders and can remember supported credentials/preferences. External-drive versioned backups use tools such as File History instead.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The Windows Backup utility is capable of saving your personal documents and directories to online cloud storage.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "You can utilize Windows Backup to securely synchronize your stored passwords and account credentials.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The tool allows you to create backups of your data directly onto external hard drives or USB flash drives.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-722",
      "chapter": "management-depanare",
      "type": "dropdown",
      "question": "Your PC has suddenly dropped its web connection, and you believe the issue lies with your local Wi-Fi router. Identify the appropriate diagnostic actions to resolve this.\n\nOpen the command line interface and \n[1]\n.\nWhen the 'No internet' warning appears in the system tray, check \n[2]\n.\nAnother highly recommended step is to \n[3]\n.",
      "explanation": "Test local gateway reachability, verify the connection state, and use a controlled restart for transient link problems.",
      "dragItems": [
        {
          "id": "i1",
          "text": "format the operating-system volume"
        },
        {
          "id": "i2",
          "text": "clear the browser bookmarks"
        },
        {
          "id": "i3",
          "text": "disable all firewall rules"
        },
        {
          "id": "i4",
          "text": "ping the default gateway"
        },
        {
          "id": "i5",
          "text": "the Recycle Bin is empty"
        },
        {
          "id": "i6",
          "text": "the desktop background is changed"
        },
        {
          "id": "i7",
          "text": "Wi-Fi is enabled and connected"
        },
        {
          "id": "i8",
          "text": "the monitor uses portrait orientation"
        },
        {
          "id": "i9",
          "text": "replace every application"
        },
        {
          "id": "i10",
          "text": "restart the network adapter or router when authorized"
        },
        {
          "id": "i11",
          "text": "delete the Windows directory"
        },
        {
          "id": "i12",
          "text": "disable encryption permanently"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i10",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-723",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "As an entry-level IT support specialist, you receive a report that an employee's work laptop has a shattered display after falling off a desk. The employee frequently travels between remote and on-site work. After confirming the display is completely broken, what is your best course of action?",
      "explanation": "A confirmed hardware failure outside Level 1 scope should be escalated through the repair/support process rather than improvised or discarded.",
      "options": [
        "Tell the employee they must permanently attach an external screen to the broken device.",
        "Attempt to replace the LCD panel yourself by following an online video tutorial.",
        "Pass the issue up to a tier 2 support technician who handles physical hardware fixes.",
        "Immediately order a brand new laptop from the manufacturer and throw away the broken one."
      ],
      "correct": 2
    },
    {
      "id": "dcm-724",
      "chapter": "acces-date",
      "type": "single",
      "question": "After plugging a mobile device into a Windows 11 computer via USB, the system fails to detect it. To check for and install the latest driver update for the device, which tool must you use?",
      "explanation": "Device Manager provides device status and manual driver update controls once the hardware can be enumerated.",
      "options": [
        "Network and Sharing Center",
        "Disk Management",
        "Device Manager",
        "Task Scheduler"
      ],
      "correct": 2
    },
    {
      "id": "dcm-725",
      "chapter": "aplicatii-periferice",
      "type": "dropdown",
      "question": "Finish the statements regarding Windows display configurations by picking the appropriate setting.\n\nIf you need to make interface elements like fonts and windows larger or smaller, you should modify \n[1]\n.\nTo alter the physical pixel dimensions of your desktop area, you should adjust \n[2]\n.\nTo flip your monitor's output between landscape and portrait modes, you should change \n[3]\n.",
      "explanation": "Scale changes UI sizing, resolution changes the pixel grid, and orientation selects landscape or portrait output.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Scale"
        },
        {
          "id": "i2",
          "text": "Display resolution"
        },
        {
          "id": "i3",
          "text": "Display orientation"
        },
        {
          "id": "i4",
          "text": "Refresh rate"
        },
        {
          "id": "i5",
          "text": "Scale"
        },
        {
          "id": "i6",
          "text": "Display orientation"
        },
        {
          "id": "i7",
          "text": "Refresh rate"
        },
        {
          "id": "i8",
          "text": "Display resolution"
        },
        {
          "id": "i9",
          "text": "Default apps"
        },
        {
          "id": "i10",
          "text": "Network discovery"
        },
        {
          "id": "i11",
          "text": "Display orientation"
        },
        {
          "id": "i12",
          "text": "Update history"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i11",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "dcm-726",
      "chapter": "acces-date",
      "type": "single",
      "question": "Identify one capability that is currently supported by Microsoft Copilot.",
      "explanation": "Copilot can generate troubleshooting guidance but cannot physically replace hardware or reconnect cables. Verify AI-generated advice before applying changes.",
      "options": [
        "Automatically replace a faulty hardware component.",
        "Format and partition a new solid-state drive.",
        "Generate step-by-step diagnostic procedures for technical issues.",
        "Physically reconnect a disconnected network cable."
      ],
      "correct": 2
    },
    {
      "id": "dcm-727",
      "chapter": "securitate-dispozitiv",
      "type": "dropdown",
      "question": "Assess the following facts regarding the Active Directory domain administrator role. Choose True or False.",
      "explanation": "Domain administrators have extensive delegated/administrative authority but do not automatically bypass encryption or every access restriction. They can manage domain accounts, and lockout behavior depends on policy and account circumstances.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Domain Administrators automatically bypass every file permission and encryption barrier without any additional action or key.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Domain administrators can create domain user accounts and assign authorized permissions.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Domain administrator accounts can never be locked out under any account or policy circumstances.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "dcm-728",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "You are trying to operate an older industrial printer using a USB-to-serial converter on Windows 11. While the device is detected, communication fails. To fix this, you must adjust the serial port settings like baud rate and parity. Under which section in Device Manager do you configure these parameters?",
      "explanation": "Serial adapter COM properties are under Ports (COM & LPT), where baud rate, data bits, parity, and flow control can be configured.",
      "options": [
        "Printers",
        "Universal Serial Bus controllers",
        "Ports (COM & LPT)",
        "System devices"
      ],
      "correct": 2
    },
    {
      "id": "dcm-729",
      "chapter": "securitate-dispozitiv",
      "type": "multiple",
      "question": "Prepare a 3TB data disk for an ordinary Windows 11 system. Select the partition scheme that exposes its full capacity and the broadly supported Windows file system with metadata journaling. ReFS availability varies by Windows edition and volume role.",
      "explanation": "For a broadly supported ordinary Windows data volume, GPT exposes capacity beyond typical MBR limits and NTFS supplies metadata journaling. Neither replaces backups or guarantees protection from every crash.",
      "options": [
        "Initialize the disk using the MBR partition scheme.",
        "Format the volume with the ReFS file system.",
        "Initialize the disk using the GPT partition scheme.",
        "Format the volume with the FAT32 file system.",
        "Format the volume with the NTFS file system."
      ],
      "correct": [
        2,
        4
      ]
    },
    {
      "id": "dcm-730",
      "chapter": "management-depanare",
      "type": "single",
      "question": "You are unable to access the internet on your workstation. Which command-line utility should you run to verify the local IPv4 or IPv6 configuration?",
      "explanation": "ipconfig displays the local interface IPv4/IPv6 configuration; tracert investigates a remote path instead.",
      "options": [
        "nslookup",
        "arp",
        "ipconfig",
        "tracert"
      ],
      "correct": 2
    },
    {
      "id": "dcm-731",
      "chapter": "aplicatii-periferice",
      "type": "single",
      "question": "An employee needs to wirelessly cast their computer monitor's output to a conference room's smart TV. Which section of the System settings should they use?",
      "explanation": "System > Display contains wireless-display connection options on supported devices; Windows+K also opens casting controls.",
      "options": [
        "Sound",
        "Display",
        "Multitasking",
        "Remote Desktop"
      ],
      "correct": 1
    }
  ]
};
