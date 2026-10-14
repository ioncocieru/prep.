/* ITS PREP — complete question bank; original statements kept individually. */
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
      "type": "drag_drop",
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
      "image": "assets/device-connectors/connector-set.svg",
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
      "explanation": "Mapping in the original image: A Audio, B Ethernet, C HDMI, D USB Type A, E USB Type C. USB-C is reversible; its shape alone does not guarantee a particular data rate or video support. Original image was not included in the supplied files, so this mapping still requires visual confirmation.",
      "imageAlt": "Five redrawn connector faces labelled A through E."
    },
    {
      "id": "dcm-051",
      "chapter": "aplicatii-periferice",
      "type": "drag_drop",
      "question": "Using drag and drop, match each connection type in the image with the peripheral device it typically attaches.",
      "image": "assets/device-connectors/connector-set.svg",
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
      "imageAlt": "Reference connector faces: A audio, B Ethernet, C HDMI, D USB Type A, E USB Type C."
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "explanation": "Scale modifică dimensiunea elementelor. Rezoluția modifică numărul de pixeli; orientarea modifică rotația afișajului."
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
      "explanation": "Nu există un singur jurnal pentru toate erorile. Alegerea depinde de componenta afectată; în enunțul original lipsea contextul."
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
      "type": "drag_drop",
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
    }
  ]
};
