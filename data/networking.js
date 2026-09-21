/* =====================================================================
   BANCA DE ÎNTREBĂRI — IT SPECIALIST: NETWORKING
   Vezi data/python.js pentru explicația completă a formatului de întrebări.
   307 întrebări (Cartea 1 + Cartea 2, fără duplicate).
   ===================================================================== */

window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.networking = {
  id: "networking",
  name: "Networking",
  shortLabel: "NET",
  accent: "#E8A33D",
  description: "Concepte de rețea, infrastructură, echipamente, protocoale și depanare în medii cu fir și wireless.",

  CHAPTERS: [
    { id: "concepte-retea",   name: "Concepte de rețea" },
    { id: "infrastructura",   name: "Infrastructura de rețea" },
    { id: "echipamente",      name: "Echipamente de rețea" },
    { id: "protocoale",       name: "Protocoale și servicii" },
    { id: "depanare-unelte",  name: "Depanare și instrumente" }
  ],

  QUESTIONS: [
    {
      id: "net-001",
      chapter: "concepte-retea",
      type: "multiple",
      question: "Networking Fundamentals 1.1 includes which topics? Choose two.",
      options: ["Internet, intranet, extranet and client-server concepts", "Only graphic design and video editing", "Transmission types such as unicast, multicast and broadcast", "Only Microsoft Word formatting"],
      correct: [0, 2],
      explanation: "Răspunsurile corecte: Internet, intranet, extranet and client-server concepts; Transmission types such as unicast, multicast and broadcast."
    },
    {
      id: "net-002",
      chapter: "protocoale",
      type: "single",
      question: "Connecting to a private network address from a public network requires:",
      options: ["Network address translation (NAT)", "Dynamic Host Configuration Protocol (DHCP)", "Network Access Protection (NAP)", "Dynamic domain name system (DDNS)"],
      correct: 0,
      explanation: "Răspunsul corect: Network address translation (NAT)."
    },
    {
      id: "net-003",
      chapter: "echipamente",
      type: "single",
      question: "A Media Access Control (MAC) address identifies a/an:",
      options: ["UPnP device", "Local broadcast domain", "Network interface card (NIC)", "Local area network (LAN)"],
      correct: 2,
      explanation: "Răspunsul corect: Network interface card (NIC)."
    },
    {
      id: "net-004",
      chapter: "concepte-retea",
      type: "single",
      question: "Two companies want to share data by using the Internet. Which type of network provides the solution?",
      options: ["Ethernet", "Intranet", "Extranet", "Perimeter"],
      correct: 2,
      explanation: "Răspunsul corect: Extranet."
    },
    {
      id: "net-005",
      chapter: "concepte-retea",
      type: "single",
      question: "Which technology can you use to extend an internal network across shared or public networks?",
      options: ["VLAN", "Microsoft ASP.NET", "Microsoft .NET Framework", "VPN"],
      correct: 3,
      explanation: "Răspunsul corect: VPN."
    },
    {
      id: "net-006",
      chapter: "concepte-retea",
      type: "single",
      question: "One purpose of a perimeter network is to:",
      options: ["Make resources available to the intranet", "Link campus area networks (CANs)", "Link local area networks (LANs)", "Make resources available to the Internet"],
      correct: 3,
      explanation: "Răspunsul corect: Make resources available to the Internet."
    },
    {
      id: "net-007",
      chapter: "concepte-retea",
      type: "single",
      question: "A private network that allows members of an organization to exchange data is an:",
      options: ["Extranet", "Ethernet", "Intranet", "Internet"],
      correct: 2,
      explanation: "Răspunsul corect: Intranet."
    },
    {
      id: "net-008",
      chapter: "concepte-retea",
      type: "drag_drop",
      question: "Match each network type to its corresponding definition.",
      dragItems: [
        { id: "a", text: "Extranet" },
        { id: "b", text: "Intranet" },
        { id: "c", text: "Internet" }
      ],
      dropZones: [
        { id: "z1", label: "Controlled access for business/educational purposes", correctItemId: "a" },
        { id: "z2", label: "Access only within an organization", correctItemId: "b" },
        { id: "z3", label: "System of interconnected networks", correctItemId: "c" }
      ],
      explanation: "Asocierile corecte: Extranet → Controlled access for business/educational purposes; Intranet → Access only within an organization; Internet → System of interconnected networks."
    },
    {
      id: "net-009",
      chapter: "concepte-retea",
      type: "single",
      question: "What technology takes data, breaks it into packets, and sends it over a network, sometimes using different routes for each packet?",
      options: ["Circuit switching", "Connection switching", "Packet switching", "Network switching"],
      correct: 2,
      explanation: "Răspunsul corect: Packet switching."
    },
    {
      id: "net-010",
      chapter: "concepte-retea",
      type: "single",
      question: "What name does Windows Server 2008 R2 use for terminal service?",
      options: ["MS telnet server", "MS primary services", "MS thin server", "Remote Desktop Service"],
      correct: 3,
      explanation: "Răspunsul corect: Remote Desktop Service."
    },
    {
      id: "net-011",
      chapter: "concepte-retea",
      type: "single",
      question: "What would you use to create VPN tunnels so users can connect to your internal network while at home using Windows Server 2008 R2?",
      options: ["Microsoft RAS", "Microsoft RRAS", "Microsoft RDC", "Microsoft VPN Server"],
      correct: 1,
      explanation: "Răspunsul corect: Microsoft RRAS."
    },
    {
      id: "net-012",
      chapter: "concepte-retea",
      type: "single",
      question: "VPNs are implemented to provide:",
      options: ["A secure connection within a private network", "A secure connection through public networks", "Additional encryption by using IPSec", "Additional security for selected computers"],
      correct: 1,
      explanation: "Răspunsul corect: A secure connection through public networks."
    },
    {
      id: "net-013",
      chapter: "concepte-retea",
      type: "single",
      question: "A VPN is a/an:",
      options: ["Encrypted connection across the Internet", "Virtual network within your LAN", "Communication tunnel between VLANs", "Personal network for your use only"],
      correct: 0,
      explanation: "Răspunsul corect: Encrypted connection across the Internet."
    },
    {
      id: "net-014",
      chapter: "echipamente",
      type: "single",
      question: "“A/an virtual private network (VPN)” protects a network's perimeter by monitoring traffic as it enters and leaves. What is correct instead?",
      options: ["Extranet", "Firewall", "Intranet", "No change is needed"],
      correct: 1,
      explanation: "Răspunsul corect: Firewall."
    },
    {
      id: "net-015",
      chapter: "protocoale",
      type: "drag_drop",
      question: "Match each VPN connection type to its corresponding definition.",
      dragItems: [
        { id: "a", text: "SSL VPN" },
        { id: "b", text: "Site-to-Site VPN" },
        { id: "c", text: "L2TP" }
      ],
      dropZones: [
        { id: "z1", label: "Connects a remote user from the Internet", correctItemId: "a" },
        { id: "z2", label: "Connects two private networks", correctItemId: "b" },
        { id: "z3", label: "Creates an unencrypted connection (needs IPsec for encryption)", correctItemId: "c" }
      ],
      explanation: "Asocierile corecte: SSL VPN → Connects a remote user from the Internet; Site-to-Site VPN → Connects two private networks; L2TP → Creates an unencrypted connection (needs IPsec for encryption)."
    },
    {
      id: "net-016",
      chapter: "protocoale",
      type: "single",
      question: "What port does Remote Desktop Services use?",
      options: ["443", "501", "389", "3389"],
      correct: 3,
      explanation: "Răspunsul corect: 3389."
    },
    {
      id: "net-017",
      chapter: "concepte-retea",
      type: "single",
      question: "What allows a user to connect to a corporate network using the Internet?",
      options: ["VPN", "VPC", "PPTP", "IPSec"],
      correct: 0,
      explanation: "Răspunsul corect: VPN."
    },
    {
      id: "net-018",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to connect to a remote computer so that you can execute commands?",
      options: ["Ftp", "nslookup", "telnet", "nbtstat"],
      correct: 2,
      explanation: "Răspunsul corect: telnet."
    },
    {
      id: "net-019",
      chapter: "concepte-retea",
      type: "single",
      question: "A network that separates an organization's private network from a public network is a/an:",
      options: ["Firewall", "Extranet", "Perimeter", "Internet"],
      correct: 2,
      explanation: "Răspunsul corect: Perimeter."
    },
    {
      id: "net-020",
      chapter: "concepte-retea",
      type: "multiple",
      question: "In local area network (LAN) topologies, the primary media access methods are: Choose two.",
      options: ["Contention", "Negotiation", "Kerberos", "Token passing"],
      correct: [0, 3],
      explanation: "Răspunsurile corecte: Contention; Token passing."
    },
    {
      id: "net-021",
      chapter: "concepte-retea",
      type: "single",
      question: "In a physical star topology, the central device is referred to as a:",
      options: ["Bridge", "Server", "Segmenter", "Hub"],
      correct: 3,
      explanation: "Răspunsul corect: Hub."
    },
    {
      id: "net-022",
      chapter: "concepte-retea",
      type: "single",
      question: "The topology of a local area network (LAN) is defined by the:",
      options: ["Number of devices to connect", "Physical and logical characteristics", "Distance between workstations", "Type of cable being used"],
      correct: 1,
      explanation: "Răspunsul corect: Physical and logical characteristics."
    },
    {
      id: "net-023",
      chapter: "concepte-retea",
      type: "single",
      question: "A node within a local area network (LAN) must have a network interface device and a:",
      options: ["Network account", "Table of all network nodes", "Host address", "Resource to share"],
      correct: 2,
      explanation: "Răspunsul corect: Host address."
    },
    {
      id: "net-024",
      chapter: "echipamente",
      type: "single",
      question: "Which type of port is used to support VLAN traffic between two switches?",
      options: ["Virtual port", "WAN port", "Trunk port", "LAN port"],
      correct: 2,
      explanation: "Răspunsul corect: Trunk port."
    },
    {
      id: "net-025",
      chapter: "infrastructura",
      type: "single",
      question: "One reason to incorporate VLANs in a network is to:",
      options: ["Increase the number of available IP addresses", "Increase the number of available MAC addresses", "Reduce the number of broadcast domains", "Reduce the number of nodes in a broadcast domain"],
      correct: 3,
      explanation: "Răspunsul corect: Reduce the number of nodes in a broadcast domain."
    },
    {
      id: "net-026",
      chapter: "concepte-retea",
      type: "drag_drop",
      question: "Match each network topology to its characteristic.",
      dragItems: [
        { id: "a", text: "Star" },
        { id: "b", text: "Ring" },
        { id: "c", text: "Mesh" }
      ],
      dropZones: [
        { id: "z1", label: "Has a central device", correctItemId: "a" },
        { id: "z2", label: "Each node connects to two other nodes", correctItemId: "b" },
        { id: "z3", label: "Each computer connects to every other computer", correctItemId: "c" }
      ],
      explanation: "Asocierile corecte: Star → Has a central device; Ring → Each node connects to two other nodes; Mesh → Each computer connects to every other computer."
    },
    {
      id: "net-027",
      chapter: "concepte-retea",
      type: "single",
      question: "To set lower security settings in Internet Explorer for an extranet site, add the site's URL to the “Local Intranet” zone. What is correct instead?",
      options: ["Internet", "Trusted Sites", "Extranet Sites", "No change is needed"],
      correct: 1,
      explanation: "Răspunsul corect: Trusted Sites."
    },
    {
      id: "net-028",
      chapter: "protocoale",
      type: "single",
      question: "IPSec policies for two machines on a LAN can be modified by using the “IPSec policy snap-in” on Windows 7. What is correct instead?",
      options: ["Windows Firewall with Advanced Security snap-in", "LAN adapter properties", "Remote Access snap-in", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: Windows Firewall with Advanced Security snap-in."
    },
    {
      id: "net-029",
      chapter: "echipamente",
      type: "single",
      question: "You need to divide a network into three subnets. Which device should you use?",
      options: ["Hub", "Bridge", "Router", "Segmenter"],
      correct: 2,
      explanation: "Răspunsul corect: Router."
    },
    {
      id: "net-030",
      chapter: "concepte-retea",
      type: "multiple",
      question: "You work at a coffee shop and need to set up a perimeter network. Which two items should you include in the perimeter network? Choose two.",
      options: ["Network printer", "Web server", "File server", "Wi-Fi network", "Point of sale terminals"],
      correct: [1, 3],
      explanation: "Răspunsurile corecte: Web server; Wi-Fi network."
    },
    {
      id: "net-031",
      chapter: "concepte-retea",
      type: "multiple",
      question: "A node within a local area network (LAN) must have which two of the following? Choose two.",
      options: ["Username and password", "Share name", "NIC", "IP address", "Table of all network nodes"],
      correct: [2, 3],
      explanation: "Răspunsurile corecte: NIC; IP address."
    },
    {
      id: "net-032",
      chapter: "concepte-retea",
      type: "multiple",
      question: "What are two advantages of using star topology rather than ring topology in a computer lab workgroup? Choose two.",
      options: ["Failure of a central device does not bring down the entire network", "A central connection point allows flexibility and scalability", "Data travels on redundant paths", "A cable problem within the group affects two nodes, at most"],
      correct: [1, 3],
      explanation: "Răspunsurile corecte: A central connection point allows flexibility and scalability; A cable problem within the group affects two nodes, at most."
    },
    {
      id: "net-033",
      chapter: "concepte-retea",
      type: "multiple",
      question: "What are three characteristics of Ethernet network topology? Choose three.",
      options: ["It uses tokens to avoid collisions", "It can use coaxial, twisted pair, and fiber optic media", "It comprises the largest share of networks in place today", "It is a non-switching protocol", "It can negotiate different transmission speeds"],
      correct: [1, 2, 4],
      explanation: "Răspunsurile corecte: It can use coaxial, twisted pair, and fiber optic media; It comprises the largest share of networks in place today; It can negotiate different transmission speeds."
    },
    {
      id: "net-034",
      chapter: "concepte-retea",
      type: "multiple",
      question: "What are two characteristics of the CSMA/CD access method? Choose two.",
      options: ["It checks to see if a collision has been detected", "It does a round robin search for requests", "It signals its intent to transmit", "It waits until the transmission medium is idle"],
      correct: [0, 3],
      explanation: "Răspunsurile corecte: It checks to see if a collision has been detected; It waits until the transmission medium is idle."
    },
    {
      id: "net-035",
      chapter: "infrastructura",
      type: "single",
      question: "Wireless Network Properties. Which variant correctly completes the statements?",
      options: ["To manually select the network, uncheck “connect to a more preferred network if available”; 802.1X requires certificates for encryption", "To manually select the network, enable automatic connection; WEP requires certificates", "To manually select the network, disable the wireless adapter; WPA-PSK requires certificates", "No change is needed for either statement"],
      correct: 0,
      explanation: "Răspunsul corect: To manually select the network, uncheck “connect to a more preferred network if available”; 802.1X requires certificates for encryption."
    },
    {
      id: "net-036",
      chapter: "concepte-retea",
      type: "single",
      question: "Perimeter network statements. Which variant is correct?",
      options: ["Internal clients access external resources – True; LAN has no access to perimeter – True; Perimeter has Internet servers – False", "Internal clients access external resources – False; LAN has no access to perimeter – False; Perimeter has Internet servers – True", "All three statements are True", "All three statements are False"],
      correct: 1,
      explanation: "Răspunsul corect: Internal clients access external resources – False; LAN has no access to perimeter – False; Perimeter has Internet servers – True."
    },
    {
      id: "net-037",
      chapter: "concepte-retea",
      type: "single",
      question: "Security zones: https://sales.northwindtrades.com should be placed in which zone, and https://hr.contoso.com in which zone?",
      options: ["Internet; Internet", "Trusted Sites; Local Intranet", "Restricted Sites; Internet", "Local Intranet; Restricted Sites"],
      correct: 1,
      explanation: "Răspunsul corect: Trusted Sites; Local Intranet."
    },
    {
      id: "net-038",
      chapter: "echipamente",
      type: "single",
      question: "What device acts as a high-speed modem for LAN?",
      options: ["Analog modem", "Telco incoming router", "Packet switcher", "CSU/DSU"],
      correct: 3,
      explanation: "Răspunsul corect: CSU/DSU."
    },
    {
      id: "net-039",
      chapter: "infrastructura",
      type: "single",
      question: "Which type of network is most vulnerable to intrusion?",
      options: ["Dial-up", "Wireless", "Broadband", "Leased line"],
      correct: 1,
      explanation: "Răspunsul corect: Wireless."
    },
    {
      id: "net-040",
      chapter: "infrastructura",
      type: "single",
      question: "Which type of network covers the broadest area?",
      options: ["WAN", "CAN", "LAN", "PAN"],
      correct: 0,
      explanation: "Răspunsul corect: WAN."
    },
    {
      id: "net-041",
      chapter: "protocoale",
      type: "single",
      question: "Which of the following is a Layer 2 WAN protocol?",
      options: ["Point-to-Point Protocol (PPP)", "Simple Network Management Protocol (SNMP)", "Transmission Control Protocol (TCP)", "Internet Protocol (IP)"],
      correct: 0,
      explanation: "Răspunsul corect: Point-to-Point Protocol (PPP)."
    },
    {
      id: "net-042",
      chapter: "infrastructura",
      type: "multiple",
      question: "Which two of the following are connectivity options for wide area networks (WANs)? Choose two.",
      options: ["Token ring", "Ethernet", "Dial-up", "Leased line"],
      correct: [2, 3],
      explanation: "Răspunsurile corecte: Dial-up; Leased line."
    },
    {
      id: "net-043",
      chapter: "infrastructura",
      type: "single",
      question: "What is the bit rate for a North American T3 circuit?",
      options: ["6.312 Mbit/s", "44.736 Mbit/s", "274.176 Mbit/s", "400.352 Mbit/s"],
      correct: 1,
      explanation: "Răspunsul corect: 44.736 Mbit/s."
    },
    {
      id: "net-044",
      chapter: "infrastructura",
      type: "single",
      question: "A university has network links between various locations. Where would a T3 connection be appropriate?",
      options: ["Server to network in the main campus server room", "Main campus to a large satellite campus", "Computer lab PC to lab printer", "Library laptop PC to Internet"],
      correct: 1,
      explanation: "Răspunsul corect: Main campus to a large satellite campus."
    },
    {
      id: "net-045",
      chapter: "echipamente",
      type: "multiple",
      question: "Which two features of a Windows Server 2008 R2 server should you install to use that server as a software router? Choose two.",
      options: ["Network Policy and Access Services", "Routing and Remote Access Services", "Remote Administration", "DirectAccess"],
      correct: [0, 1],
      explanation: "Răspunsurile corecte: Network Policy and Access Services; Routing and Remote Access Services."
    },
    {
      id: "net-046",
      chapter: "infrastructura",
      type: "single",
      question: "In a network diagram, where is a T3 connection most appropriate?",
      options: ["Between two computers in the same lab", "Between a local PC and a printer", "Between a WAN/telecom link and the organization network/perimeter router", "Between a keyboard and a workstation"],
      correct: 2,
      explanation: "Răspunsul corect: Between a WAN/telecom link and the organization network/perimeter router."
    },
    {
      id: "net-047",
      chapter: "infrastructura",
      type: "single",
      question: "What is the primary disadvantage of X.25?",
      options: ["Digital circuit", "Small data payloads", "Circuit switching", "Slow speeds"],
      correct: 3,
      explanation: "Răspunsul corect: Slow speeds."
    },
    {
      id: "net-048",
      chapter: "infrastructura",
      type: "single",
      question: "The _____________ is the largest WAN in the world.",
      options: ["Internet", "Intranet", "WWW", "MSDN"],
      correct: 0,
      explanation: "Răspunsul corect: Internet."
    },
    {
      id: "net-049",
      chapter: "concepte-retea",
      type: "single",
      question: "What stage is the World Wide Web in?",
      options: ["1.0", "1.1", "2.0", "3.0"],
      correct: 2,
      explanation: "Răspunsul corect: 2.0."
    },
    {
      id: "net-050",
      chapter: "infrastructura",
      type: "single",
      question: "When you have multiple circuits connected to a site, the entire circuit is known as a:",
      options: ["Virtual circuit", "Emulated circuit", "Joined circuit", "Multitasked circuit"],
      correct: 0,
      explanation: "Răspunsul corect: Virtual circuit."
    },
    {
      id: "net-051",
      chapter: "infrastructura",
      type: "single",
      question: "What replaced X.25?",
      options: ["Frame relay", "ATM", "ISDN BRI", "DSL"],
      correct: 0,
      explanation: "Răspunsul corect: Frame relay."
    },
    {
      id: "net-052",
      chapter: "infrastructura",
      type: "single",
      question: "At what speed does a T3 line run?",
      options: ["1.5 Mbps", "4.5 Mbps", "44.7 Mbps", "128 Mbps"],
      correct: 2,
      explanation: "Răspunsul corect: 44.7 Mbps."
    },
    {
      id: "net-053",
      chapter: "infrastructura",
      type: "single",
      question: "In Europe, what circuit would be similar to the T1 found in the United States?",
      options: ["E1", "J1", "T2", "F1"],
      correct: 0,
      explanation: "Răspunsul corect: E1."
    },
    {
      id: "net-054",
      chapter: "infrastructura",
      type: "single",
      question: "How many B channels does an ISDN PRI support?",
      options: ["2", "8", "23", "48"],
      correct: 2,
      explanation: "Răspunsul corect: 23."
    },
    {
      id: "net-055",
      chapter: "infrastructura",
      type: "single",
      question: "What technology uses wires from the telephone company to provide broadband Internet connection?",
      options: ["Cable", "DSL", "FDDI", "Frame relay"],
      correct: 1,
      explanation: "Răspunsul corect: DSL."
    },
    {
      id: "net-056",
      chapter: "infrastructura",
      type: "single",
      question: "A __________ is the guaranteed certain amount of information provided by a circuit or line.",
      options: ["Committed information route", "Pivotal information route", "Next hop policy route", "Frame x frame route"],
      correct: 0,
      explanation: "Răspunsul corect: Committed information route."
    },
    {
      id: "net-057",
      chapter: "infrastructura",
      type: "single",
      question: "What speed does a T1 run at?",
      options: ["1.544 Mbps", "2.889 Mbps", "3.101 Gbps", "2.54 Mbps"],
      correct: 0,
      explanation: "Răspunsul corect: 1.544 Mbps."
    },
    {
      id: "net-058",
      chapter: "infrastructura",
      type: "single",
      question: "How fast is a DS0 circuit?",
      options: ["32 Kbps", "64 Kbps", "128 Kbps", "1024 Kbps"],
      correct: 1,
      explanation: "Răspunsul corect: 64 Kbps."
    },
    {
      id: "net-059",
      chapter: "infrastructura",
      type: "single",
      question: "X.25 and frame relay are examples of what type of WAN technology?",
      options: ["Circuit switching", "Connection switching", "Packet switching", "Network switching"],
      correct: 2,
      explanation: "Răspunsul corect: Packet switching."
    },
    {
      id: "net-060",
      chapter: "infrastructura",
      type: "single",
      question: "What part of the network is the point where the administrator's responsibility ends and the telecommunications provider's responsibility begins?",
      options: ["Last mile", "Demarc", "Router array", "PAD interface"],
      correct: 1,
      explanation: "Răspunsul corect: Demarc."
    },
    {
      id: "net-061",
      chapter: "infrastructura",
      type: "single",
      question: "Which factor has the biggest impact on data transmission speed in a wireless network?",
      options: ["The access method used for the network", "The transmission standard of the equipment used", "The use of strong encryption", "The transmission wattage rating used on the NIC"],
      correct: 1,
      explanation: "Răspunsul corect: The transmission standard of the equipment used."
    },
    {
      id: "net-062",
      chapter: "concepte-retea",
      type: "single",
      question: "Which of the following uses a tunneling protocol?",
      options: ["Internet", "VPN", "Extranet", "VLAN"],
      correct: 1,
      explanation: "Răspunsul corect: VPN."
    },
    {
      id: "net-063",
      chapter: "infrastructura",
      type: "multiple",
      question: "Which two are published IEEE 802.11 wireless transmission standards? Choose two.",
      options: ["802.11f", "802.11g", "802.11k", "802.11m", "802.11n"],
      correct: [1, 4],
      explanation: "Răspunsurile corecte: 802.11g; 802.11n."
    },
    {
      id: "net-064",
      chapter: "infrastructura",
      type: "single",
      question: "What happens when an 802.11b node starts broadcasting within the range of an 802.11g access point?",
      options: ["The access point will transmit, but the node will be unable to receive", "A connection will be established", "Both will be unable to transmit", "The node will transmit, but the access point will be unable to receive"],
      correct: 1,
      explanation: "Răspunsul corect: A connection will be established."
    },
    {
      id: "net-065",
      chapter: "infrastructura",
      type: "single",
      question: "Which technology provides the highest bit rate?",
      options: ["T1", "E1", "DS3", "ISDN"],
      correct: 2,
      explanation: "Răspunsul corect: DS3."
    },
    {
      id: "net-066",
      chapter: "infrastructura",
      type: "single",
      question: "Which wireless authentication method provides the highest level of security?",
      options: ["Wired Equivalency Privacy (WEP)", "IEEE 802.11n", "Wi-Fi Protected Access (WPA)", "IEEE 802.11a"],
      correct: 2,
      explanation: "Răspunsul corect: Wi-Fi Protected Access (WPA)."
    },
    {
      id: "net-067",
      chapter: "infrastructura",
      type: "single",
      question: "The maximum throughput of an 802.11g network is:",
      options: ["2.4 GHz", "54 GHz", "2.4 Mbps", "54 Mbps"],
      correct: 3,
      explanation: "Răspunsul corect: 54 Mbps."
    },
    {
      id: "net-068",
      chapter: "infrastructura",
      type: "drag_drop",
      question: "Match each 802.11 standard to its characteristics.",
      dragItems: [
        { id: "a", text: "802.11a" },
        { id: "b", text: "802.11b" },
        { id: "c", text: "802.11g" },
        { id: "d", text: "802.11n" }
      ],
      dropZones: [
        { id: "z1", label: "5 GHz / 54 Mbps", correctItemId: "a" },
        { id: "z2", label: "2.4 GHz / 11 Mbps", correctItemId: "b" },
        { id: "z3", label: "2.4 GHz / 54 Mbps", correctItemId: "c" },
        { id: "z4", label: "2.4–5 GHz / 65–600 Mbps", correctItemId: "d" }
      ],
      explanation: "Asocierile corecte: 802.11a → 5 GHz / 54 Mbps; 802.11b → 2.4 GHz / 11 Mbps; 802.11g → 2.4 GHz / 54 Mbps; 802.11n → 2.4–5 GHz / 65–600 Mbps."
    },
    {
      id: "net-069",
      chapter: "infrastructura",
      type: "single",
      question: "Security is a concern on wireless networks due to:",
      options: ["The radio broadcast access method", "Spread spectrum issues", "Frequency modulation issues", "The potential for cross-talk"],
      correct: 0,
      explanation: "Răspunsul corect: The radio broadcast access method."
    },
    {
      id: "net-070",
      chapter: "infrastructura",
      type: "single",
      question: "The IEEE standards 802.11a, b, g, and n are collectively known as what?",
      options: ["WiMAX", "Bluetooth", "WiFi", "Mobile ad hoc networks"],
      correct: 2,
      explanation: "Răspunsul corect: WiFi."
    },
    {
      id: "net-071",
      chapter: "infrastructura",
      type: "single",
      question: "Which IEEE 802.11 Wi-Fi standard requires dual antennas so it can run in all supported frequencies?",
      options: ["802.11a", "802.11b", "802.11g", "802.11n"],
      correct: 3,
      explanation: "Răspunsul corect: 802.11n."
    },
    {
      id: "net-072",
      chapter: "infrastructura",
      type: "single",
      question: "“WEP” wireless encryption is the most susceptible to interception and decryption. What is the correct answer?",
      options: ["WPA-AES", "WPA2", "WPA-PSK", "No change is needed"],
      correct: 3,
      explanation: "Răspunsul corect: No change is needed."
    },
    {
      id: "net-073",
      chapter: "infrastructura",
      type: "single",
      question: "Which wireless communication problem is caused by electromagnetic waves?",
      options: ["Fading", "Attenuation", "Interference", "Diffraction"],
      correct: 2,
      explanation: "Răspunsul corect: Interference."
    },
    {
      id: "net-074",
      chapter: "infrastructura",
      type: "single",
      question: "In a wireless network that requires an SSL certificate, WEP handles the SSL certificate. What is correct instead?",
      options: ["802.1X", "WPA2-PSK", "WPA-PSK", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: 802.1X."
    },
    {
      id: "net-075",
      chapter: "infrastructura",
      type: "single",
      question: "Wireless bridge statements. Which variant is correct?",
      options: ["Connects Ethernet devices – True; increases AP signal strength – False; always work in pairs – True", "All statements are True", "Connects Ethernet devices – False; increases AP signal – True; always work in pairs – False", "All statements are False"],
      correct: 0,
      explanation: "Răspunsul corect: Connects Ethernet devices – True; increases AP signal strength – False; always work in pairs – True."
    },
    {
      id: "net-076",
      chapter: "infrastructura",
      type: "single",
      question: "Which of the following is not a characteristic of 802.11n?",
      options: ["Frame aggregation", "Channel bonding", "RFI protection", "MIMO"],
      correct: 2,
      explanation: "Răspunsul corect: RFI protection."
    },
    {
      id: "net-077",
      chapter: "concepte-retea",
      type: "single",
      question: "Which of the following determines the media access method used in a network?",
      options: ["Number of hosts connected", "Number of domain servers", "Maximum speed of the media", "Topology and protocols"],
      correct: 3,
      explanation: "Răspunsul corect: Topology and protocols."
    },
    {
      id: "net-078",
      chapter: "concepte-retea",
      type: "single",
      question: "In which physical network topology is each computer connected to a central point?",
      options: ["Star", "Mesh", "Ring", "Bus"],
      correct: 0,
      explanation: "Răspunsul corect: Star."
    },
    {
      id: "net-079",
      chapter: "concepte-retea",
      type: "single",
      question: "A characteristic of the mesh topology is that it:",
      options: ["Uses a central hub", "Cannot use wired connections", "Uses redundant paths", "Cannot use wireless connections"],
      correct: 2,
      explanation: "Răspunsul corect: Uses redundant paths."
    },
    {
      id: "net-080",
      chapter: "concepte-retea",
      type: "multiple",
      question: "What are two characteristics of a mesh network topology? Choose two.",
      options: ["It is fault tolerant because of redundant connections", "Every node connects to every other node", "It works best for a large number of nodes", "It requires less cabling than star or ring"],
      correct: [0, 1],
      explanation: "Răspunsurile corecte: It is fault tolerant because of redundant connections; Every node connects to every other node."
    },
    {
      id: "net-081",
      chapter: "infrastructura",
      type: "single",
      question: "What speed does FDDI use?",
      options: ["10 Mbps", "44 Mbps", "54 Mbps", "100 Mbps"],
      correct: 3,
      explanation: "Răspunsul corect: 100 Mbps."
    },
    {
      id: "net-082",
      chapter: "concepte-retea",
      type: "single",
      question: "What topology does FDDI use?",
      options: ["Bus", "Star", "Ring", "Mesh"],
      correct: 2,
      explanation: "Răspunsul corect: Ring."
    },
    {
      id: "net-083",
      chapter: "echipamente",
      type: "single",
      question: "A network device that associates a MAC address with a port is a:",
      options: ["DSL modem", "Hub", "Router", "Switch"],
      correct: 3,
      explanation: "Răspunsul corect: Switch."
    },
    {
      id: "net-084",
      chapter: "echipamente",
      type: "single",
      question: "A Layer 2 device that connects multiple computers within a network is a:",
      options: ["Repeater", "Switch", "Router", "Packet"],
      correct: 1,
      explanation: "Răspunsul corect: Switch."
    },
    {
      id: "net-085",
      chapter: "echipamente",
      type: "single",
      question: "In addition to switching, multilayer switches also:",
      options: ["Provide Layer 3 routing functions", "Interface only with CAT3", "Support only 10 MB LAN ports", "Operate only by Layer 1 and 2 protocols"],
      correct: 0,
      explanation: "Răspunsul corect: Provide Layer 3 routing functions."
    },
    {
      id: "net-086",
      chapter: "echipamente",
      type: "single",
      question: "One reason to replace an unmanaged switch with a managed switch is to:",
      options: ["Manage routing tables", "Support multiple VLANs", "Reduce collision domains", "Route between networks"],
      correct: 1,
      explanation: "Răspunsul corect: Support multiple VLANs."
    },
    {
      id: "net-087",
      chapter: "echipamente",
      type: "single",
      question: "What is an example of a network device that associates a network address with a port?",
      options: ["Switch", "Router", "Hub", "DSL modem"],
      correct: 1,
      explanation: "Răspunsul corect: Router."
    },
    {
      id: "net-088",
      chapter: "echipamente",
      type: "single",
      question: "Which network device interconnects computers in a workgroup, can be remotely configured, and provides the best throughput?",
      options: ["Unmanaged switch", "Hub", "Router", "Managed switch"],
      correct: 3,
      explanation: "Răspunsul corect: Managed switch."
    },
    {
      id: "net-089",
      chapter: "echipamente",
      type: "multiple",
      question: "What are two differences between switches and hubs? Choose two.",
      options: ["Switches are slower than hubs", "Switches send data to all computers for efficiency", "Switches can send and receive data at the same time", "Switches identify the intended destination of received data"],
      correct: [2, 3],
      explanation: "Răspunsurile corecte: Switches can send and receive data at the same time; Switches identify the intended destination of received data."
    },
    {
      id: "net-090",
      chapter: "echipamente",
      type: "single",
      question: "Switch statements. Which variant is correct?",
      options: ["Unicast to one destination port – True; floods unknown destination – True; broadcasts only to uplink – False", "All statements are True", "Unicast to all ports – True; floods unknown destination – False; broadcasts only to uplink – True", "All statements are False"],
      correct: 0,
      explanation: "Răspunsul corect: Unicast to one destination port – True; floods unknown destination – True; broadcasts only to uplink – False."
    },
    {
      id: "net-091",
      chapter: "echipamente",
      type: "single",
      question: "One advantage of dynamic routing is that it:",
      options: ["Automatically maintains routing tables", "Limits traffic derived from routing protocols", "Reduces broadcast traffic", "Automatically enables DHCP"],
      correct: 0,
      explanation: "Răspunsul corect: Automatically maintains routing tables."
    },
    {
      id: "net-092",
      chapter: "echipamente",
      type: "single",
      question: "A router's static route is set by the:",
      options: ["Adjacent network", "Next upstream router", "Network administrator", "Routing protocol"],
      correct: 2,
      explanation: "Răspunsul corect: Network administrator."
    },
    {
      id: "net-093",
      chapter: "protocoale",
      type: "single",
      question: "The query protocol used to locate resources on a network is:",
      options: ["UDP", "LDAP", "Tracert", "Telnet"],
      correct: 1,
      explanation: "Răspunsul corect: LDAP."
    },
    {
      id: "net-094",
      chapter: "echipamente",
      type: "single",
      question: "The function of a router is to:",
      options: ["Provide IP subnet masks for hosts", "Forward traffic to other networks", "Broadcast routing tables to clients", "Store tables for name resolution"],
      correct: 1,
      explanation: "Răspunsul corect: Forward traffic to other networks."
    },
    {
      id: "net-095",
      chapter: "echipamente",
      type: "single",
      question: "If a router cannot determine the next hop for a packet, the router will:",
      options: ["Forward the packet to the default route", "Send the packet back to the source", "Broadcast the packet", "Store the packet in memory"],
      correct: 0,
      explanation: "Răspunsul corect: Forward the packet to the default route."
    },
    {
      id: "net-096",
      chapter: "protocoale",
      type: "single",
      question: "If a router separates a DHCP server from its clients, the clients will:",
      options: ["Immediately lose connectivity to all segments", "Be unable to obtain their leases from the server", "Immediately lose connectivity to the local segment", "Receive an immediate renewal"],
      correct: 1,
      explanation: "Răspunsul corect: Be unable to obtain their leases from the server."
    },
    {
      id: "net-097",
      chapter: "protocoale",
      type: "single",
      question: "Every router today is “TCP/IP” enabled, an industry-standard protocol used on the Internet and for local addressing. What is correct?",
      options: ["HTTP", "FTP", "SNMP", "No change is needed"],
      correct: 3,
      explanation: "Răspunsul corect: No change is needed."
    },
    {
      id: "net-098",
      chapter: "echipamente",
      type: "single",
      question: "“Dynamic routing” is fault tolerant. What is correct?",
      options: ["Static routing", "Default route", "Least cost routing", "No change is needed"],
      correct: 3,
      explanation: "Răspunsul corect: No change is needed."
    },
    {
      id: "net-099",
      chapter: "echipamente",
      type: "single",
      question: "What is an example of a Layer 3 device that connects multiple computers and networks?",
      options: ["Packet", "Repeater", "Switch", "Router"],
      correct: 3,
      explanation: "Răspunsul corect: Router."
    },
    {
      id: "net-100",
      chapter: "protocoale",
      type: "single",
      question: "Which metric does Routing Information Protocol (RIP) use to determine the least costly route?",
      options: ["Delay", "Host ID", "Hop count", "Interface"],
      correct: 2,
      explanation: "Răspunsul corect: Hop count."
    },
    {
      id: "net-101",
      chapter: "protocoale",
      type: "single",
      question: "Quality of Service (QoS) statements. Which variant is correct?",
      options: ["Defines priority traffic – True; controls bandwidth – True; assigns protocols dynamically – False", "All statements are True", "Defines priority – False; controls bandwidth – False; assigns protocols dynamically – True", "All statements are False"],
      correct: 0,
      explanation: "Răspunsul corect: Defines priority traffic – True; controls bandwidth – True; assigns protocols dynamically – False."
    },
    {
      id: "net-102",
      chapter: "echipamente",
      type: "single",
      question: "________ is a route that must be manually defined on each router.",
      options: ["Static", "Dynamic", "Persistent", "Global"],
      correct: 0,
      explanation: "Răspunsul corect: Static."
    },
    {
      id: "net-103",
      chapter: "echipamente",
      type: "single",
      question: "What feature within Windows allows the server to act as a router?",
      options: ["IPSec", "DHCP", "IP forwarding", "RDC"],
      correct: 2,
      explanation: "Răspunsul corect: IP forwarding."
    },
    {
      id: "net-104",
      chapter: "infrastructura",
      type: "single",
      question: "_______________ uses a clocking circuit to control the timing of communications between two WAN devices such as routers.",
      options: ["Static route", "Dynamic route", "PPTP route", "Point to point"],
      correct: 3,
      explanation: "Răspunsul corect: Point to point."
    },
    {
      id: "net-105",
      chapter: "protocoale",
      type: "single",
      question: "What routing protocol is the most popular distance-vector routing algorithm used to determine best routes within a network?",
      options: ["RIP", "OSPF", "BGP", "IGMP"],
      correct: 0,
      explanation: "Răspunsul corect: RIP."
    },
    {
      id: "net-106",
      chapter: "protocoale",
      type: "single",
      question: "What routing protocol is the most popular link-state protocol used within a large organization?",
      options: ["RIP", "OSPF", "BGP", "IGMP"],
      correct: 1,
      explanation: "Răspunsul corect: OSPF."
    },
    {
      id: "net-107",
      chapter: "echipamente",
      type: "single",
      question: "When a packet traverses a network, each router is a ____________.",
      options: ["Jump point", "CSU/DSU", "Jump switch", "Hop"],
      correct: 3,
      explanation: "Răspunsul corect: Hop."
    },
    {
      id: "net-108",
      chapter: "infrastructura",
      type: "single",
      question: "A cable that meets the 1000BaseT standard has a maximum length of:",
      options: ["100 m", "250 m", "500 m", "1,000 m"],
      correct: 0,
      explanation: "Răspunsul corect: 100 m."
    },
    {
      id: "net-109",
      chapter: "infrastructura",
      type: "single",
      question: "Attenuation in a wireless network signal is a result of:",
      options: ["Number of wireless nodes connected", "Distance from the access point", "Interference from cellular phones", "Encryption of the signal"],
      correct: 1,
      explanation: "Răspunsul corect: Distance from the access point."
    },
    {
      id: "net-110",
      chapter: "infrastructura",
      type: "single",
      question: "What is the maximum cable length for a single Cat5 UTP cable run?",
      options: ["285 feet / 86.87 meters", "328 feet / 99.97 meters", "432 feet / 131.67 meters", "600 feet / 182.88 meters"],
      correct: 1,
      explanation: "Răspunsul corect: 328 feet / 99.97 meters."
    },
    {
      id: "net-111",
      chapter: "infrastructura",
      type: "single",
      question: "Which cable type transmits data the greatest distance?",
      options: ["Multi-mode fiber", "Single-mode fiber", "Cat5e", "Cat6"],
      correct: 1,
      explanation: "Răspunsul corect: Single-mode fiber."
    },
    {
      id: "net-112",
      chapter: "infrastructura",
      type: "single",
      question: "To directly connect the Ethernet NICs of two computers, you should use a:",
      options: ["Crossover cable", "Straight cable", "Rollover cable", "Coaxial cable"],
      correct: 0,
      explanation: "Răspunsul corect: Crossover cable."
    },
    {
      id: "net-113",
      chapter: "infrastructura",
      type: "single",
      question: "What is the minimum cabling requirement for a 100BaseTX network?",
      options: ["Category 3 UTP cable", "Category 5 UTP cable", "Category 6 UTP cable", "Multimode fiber cable"],
      correct: 1,
      explanation: "Răspunsul corect: Category 5 UTP cable."
    },
    {
      id: "net-114",
      chapter: "infrastructura",
      type: "single",
      question: "Which feature of Category 5e STP cable reduces external interference?",
      options: ["Crosstalk", "Shielding", "Length", "Twisting"],
      correct: 1,
      explanation: "Răspunsul corect: Shielding."
    },
    {
      id: "net-115",
      chapter: "infrastructura",
      type: "single",
      question: "A home office cable needs to support at least 300 Mbps. What is the least expensive option that meets this requirement?",
      options: ["Cat3", "Cat5", "Cat5e", "Cat6"],
      correct: 2,
      explanation: "Răspunsul corect: Cat5e."
    },
    {
      id: "net-116",
      chapter: "infrastructura",
      type: "single",
      question: "The type of connector used on a 100BaseT Ethernet cable is:",
      options: ["RJ-11", "RJ-45", "TNC", "BNC"],
      correct: 1,
      explanation: "Răspunsul corect: RJ-45."
    },
    {
      id: "net-117",
      chapter: "infrastructura",
      type: "multiple",
      question: "What are two characteristics of fiber optic cable? Choose two.",
      options: ["Conducts electricity", "Requires metal conduit", "Supports splicing", "Requires a polish for end connectors"],
      correct: [2, 3],
      explanation: "Răspunsurile corecte: Supports splicing; Requires a polish for end connectors."
    },
    {
      id: "net-118",
      chapter: "infrastructura",
      type: "single",
      question: "You need to run Ethernet drops where interference exists. Which cable type should you use?",
      options: ["STP Cat5e", "UTP Cat5e", "Cat3", "UTP Cat6"],
      correct: 0,
      explanation: "Răspunsul corect: STP Cat5e."
    },
    {
      id: "net-119",
      chapter: "infrastructura",
      type: "single",
      question: "When a signal degrades as it runs through a wire, you have:",
      options: ["Degradation", "Attenuation", "Crossover", "Resistance"],
      correct: 1,
      explanation: "Răspunsul corect: Attenuation."
    },
    {
      id: "net-120",
      chapter: "infrastructura",
      type: "single",
      question: "What does X.25 use at its DTE device?",
      options: ["Telco incoming router", "Packet switcher", "Analog modem", "PAD"],
      correct: 3,
      explanation: "Răspunsul corect: PAD."
    },
    {
      id: "net-121",
      chapter: "infrastructura",
      type: "single",
      question: "Which of the following represents a MAC address?",
      options: ["GV:ZC:KK:DK:FZ:CA", "255.255.255.0", "05:35:AB:6E:A1:25", "127.0.0.1"],
      correct: 2,
      explanation: "Răspunsul corect: 05:35:AB:6E:A1:25."
    },
    {
      id: "net-122",
      chapter: "concepte-retea",
      type: "single",
      question: "What is the correct order of the OSI model layers?",
      options: ["Physical, Data Link, Network, Transport, Session, Presentation, Application", "Application, Presentation, Session, Transport, Network, Data Link, Physical", "Physical, Network, Data Link, Transport, Session, Presentation, Application", "Data Link, Physical, Network, Transport, Application, Session, Presentation"],
      correct: 0,
      explanation: "Răspunsul corect: Physical, Data Link, Network, Transport, Session, Presentation, Application."
    },
    {
      id: "net-123",
      chapter: "concepte-retea",
      type: "single",
      question: "In which OSI layer does routing occur?",
      options: ["Transport", "Network", "Data Link", "Physical"],
      correct: 1,
      explanation: "Răspunsul corect: Network."
    },
    {
      id: "net-124",
      chapter: "protocoale",
      type: "single",
      question: "Which protocol is a transport layer protocol?",
      options: ["FTP", "IP", "UDP", "ASCII"],
      correct: 2,
      explanation: "Răspunsul corect: UDP."
    },
    {
      id: "net-125",
      chapter: "protocoale",
      type: "single",
      question: "Which protocol is responsible for automatically assigning IP addresses?",
      options: ["HTTP", "DHCP", "DNS", "WINS"],
      correct: 1,
      explanation: "Răspunsul corect: DHCP."
    },
    {
      id: "net-126",
      chapter: "concepte-retea",
      type: "single",
      question: "At what layer in the OSI model are hardware addresses referenced?",
      options: ["Network", "Application", "Data Link", "Physical"],
      correct: 2,
      explanation: "Răspunsul corect: Data Link."
    },
    {
      id: "net-127",
      chapter: "concepte-retea",
      type: "single",
      question: "According to the OSI model, encryption takes place on the transport layer. What is correct instead?",
      options: ["Presentation", "Network", "Application", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: Presentation."
    },
    {
      id: "net-128",
      chapter: "protocoale",
      type: "drag_drop",
      question: "Match each protocol to its description.",
      dragItems: [
        { id: "a", text: "UDP" },
        { id: "b", text: "TCP" },
        { id: "c", text: "ARP" }
      ],
      dropZones: [
        { id: "z1", label: "Connectionless / best-effort delivery", correctItemId: "a" },
        { id: "z2", label: "Connection-oriented / guaranteed delivery", correctItemId: "b" },
        { id: "z3", label: "Resolves an IP address to a MAC address", correctItemId: "c" }
      ],
      explanation: "Asocierile corecte: UDP → Connectionless / best-effort delivery; TCP → Connection-oriented / guaranteed delivery; ARP → Resolves an IP address to a MAC address."
    },
    {
      id: "net-129",
      chapter: "concepte-retea",
      type: "drag_drop",
      question: "Match each OSI layer to its description.",
      dragItems: [
        { id: "a", text: "Application" },
        { id: "b", text: "Session" },
        { id: "c", text: "Network" },
        { id: "d", text: "Data Link" }
      ],
      dropZones: [
        { id: "z1", label: "Provides services to user applications", correctItemId: "a" },
        { id: "z2", label: "Controls the dialogue between systems", correctItemId: "b" },
        { id: "z3", label: "Handles path determination", correctItemId: "c" },
        { id: "z4", label: "Checks frames (CRC)", correctItemId: "d" }
      ],
      explanation: "Asocierile corecte: Application → Provides services to user applications; Session → Controls the dialogue between systems; Network → Handles path determination; Data Link → Checks frames (CRC)."
    },
    {
      id: "net-130",
      chapter: "concepte-retea",
      type: "single",
      question: "OSI statements. Which variant is correct?",
      options: ["HTTP/TELNET/FTP/SMTP operate on Layer 7 – True; Layer 4 controls dialogue – False; Layer 3 controls routing – True", "All statements are True", "All statements are False", "Layer 4 controls dialogue – True; Layer 3 controls routing – False"],
      correct: 0,
      explanation: "Răspunsul corect: HTTP/TELNET/FTP/SMTP operate on Layer 7 – True; Layer 4 controls dialogue – False; Layer 3 controls routing – True."
    },
    {
      id: "net-131",
      chapter: "concepte-retea",
      type: "single",
      question: "Which layer in the OSI model covers routing between networks?",
      options: ["Physical", "Data Link", "Network", "Transport"],
      correct: 2,
      explanation: "Răspunsul corect: Network."
    },
    {
      id: "net-132",
      chapter: "concepte-retea",
      type: "single",
      question: "_____________ is used to send packets from one network to another network.",
      options: ["Routing", "Transport", "BGP", "Encapsulation"],
      correct: 0,
      explanation: "Răspunsul corect: Routing."
    },
    {
      id: "net-133",
      chapter: "protocoale",
      type: "single",
      question: "The protocol that maps IP addresses to MAC addresses is:",
      options: ["IMAP", "DHCP", "RIP", "UDP", "ARP"],
      correct: 4,
      explanation: "Răspunsul corect: ARP."
    },
    {
      id: "net-134",
      chapter: "protocoale",
      type: "single",
      question: "Which of these is an application layer protocol?",
      options: ["TCP", "FTP", "IP", "UDP"],
      correct: 1,
      explanation: "Răspunsul corect: FTP."
    },
    {
      id: "net-135",
      chapter: "protocoale",
      type: "multiple",
      question: "After enabling Windows Firewall, you can no longer access websites. Which two TCP ports should you add exceptions for? Choose two.",
      options: ["Port 21", "Port 23", "Port 25", "Port 80", "Port 443"],
      correct: [3, 4],
      explanation: "Răspunsurile corecte: Port 80; Port 443."
    },
    {
      id: "net-136",
      chapter: "protocoale",
      type: "single",
      question: "TCP/IP model statements. Which variant is correct?",
      options: ["TCP/IP has four layers corresponding with OSI seven layers – False; TCP/IP application layer corresponds with top four OSI layers – False; TCP/IP transport and Internet layers correspond with OSI layers 3 and 4 – True", "All statements are True", "All statements are False", "Only the first statement is True"],
      correct: 0,
      explanation: "Răspunsul corect: TCP/IP has four layers corresponding with OSI seven layers – False; TCP/IP application layer corresponds with top four OSI layers – False; TCP/IP transport and Internet layers correspond with OSI layers 3 and 4 – True."
    },
    {
      id: "net-137",
      chapter: "protocoale",
      type: "drag_drop",
      question: "Match each service to its TCP port.",
      dragItems: [
        { id: "a", text: "SMTP" },
        { id: "b", text: "FTP" },
        { id: "c", text: "HTTPS" }
      ],
      dropZones: [
        { id: "z1", label: "Port 25", correctItemId: "a" },
        { id: "z2", label: "Port 21", correctItemId: "b" },
        { id: "z3", label: "Port 443", correctItemId: "c" }
      ],
      explanation: "Asocierile corecte: SMTP → Port 25; FTP → Port 21; HTTPS → Port 443."
    },
    {
      id: "net-138",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to connect to an FTP server to download a file?",
      options: ["nslookup", "Ssh", "telnet", "Ftp"],
      correct: 3,
      explanation: "Răspunsul corect: Ftp."
    },
    {
      id: "net-139",
      chapter: "infrastructura",
      type: "single",
      question: "The default subnet mask for a Class B network is:",
      options: ["0.0.0.255", "0.0.255.255", "255.0.0.0", "255.255.0.0"],
      correct: 3,
      explanation: "Răspunsul corect: 255.255.0.0."
    },
    {
      id: "net-140",
      chapter: "infrastructura",
      type: "single",
      question: "Which network does the IP address 220.100.100.100 belong to?",
      options: ["220.100.100.0/24", "220.100.100.1/24", "255.255.255.0/24", "255.255.255.1/24"],
      correct: 0,
      explanation: "Răspunsul corect: 220.100.100.0/24."
    },
    {
      id: "net-141",
      chapter: "infrastructura",
      type: "single",
      question: "Which subnet mask is valid?",
      options: ["255.255.255.240", "255.255.255.228", "255.255.255.164", "255.255.255.245"],
      correct: 0,
      explanation: "Răspunsul corect: 255.255.255.240."
    },
    {
      id: "net-142",
      chapter: "infrastructura",
      type: "single",
      question: "What is the default subnet mask for a Class C Internet network?",
      options: ["255.255.255.252", "255.255.255.240", "255.255.255.192", "255.255.255.0"],
      correct: 3,
      explanation: "Răspunsul corect: 255.255.255.0."
    },
    {
      id: "net-143",
      chapter: "infrastructura",
      type: "single",
      question: "Which of the following is a public IP address?",
      options: ["10.156.89.1", "68.24.78.221", "172.16.152.48", "192.168.25.101"],
      correct: 1,
      explanation: "Răspunsul corect: 68.24.78.221."
    },
    {
      id: "net-144",
      chapter: "infrastructura",
      type: "single",
      question: "To which IP configuration does the CIDR notation 192.168.1.1/25 refer?",
      options: ["192.168.1.1 255.255.255.64", "192.168.1.1 255.255.255.1", "192.168.1.1 255.255.255.32", "192.168.1.1 255.255.255.256", "192.168.1.1 255.255.255.128"],
      correct: 4,
      explanation: "Răspunsul corect: 192.168.1.1 255.255.255.128."
    },
    {
      id: "net-145",
      chapter: "infrastructura",
      type: "single",
      question: "The default gateway address identifies the:",
      options: ["Device that will connect the computer to the local network", "Device that will connect the computer to a remote network", "Server that will provide name services", "Server that will authenticate the user"],
      correct: 1,
      explanation: "Răspunsul corect: Device that will connect the computer to a remote network."
    },
    {
      id: "net-146",
      chapter: "infrastructura",
      type: "single",
      question: "IPv4 multicast addresses range from 192.168.0.0 to 192.168.255.255. What is correct instead?",
      options: ["127.0.0.0 to 127.255.255.255", "172.16.0.0 to 172.31.255.255", "224.0.0.0 to 239.255.255.255", "No change is needed"],
      correct: 2,
      explanation: "Răspunsul corect: 224.0.0.0 to 239.255.255.255."
    },
    {
      id: "net-147",
      chapter: "infrastructura",
      type: "single",
      question: "The loopback address of your computer is 127.0.0.1. What is correct?",
      options: ["10.0.1.1", "169.254.0.5", "192.168.1.1", "No change is needed"],
      correct: 3,
      explanation: "Răspunsul corect: No change is needed."
    },
    {
      id: "net-148",
      chapter: "infrastructura",
      type: "single",
      question: "Which of these is a public address space?",
      options: ["192.168.0.0/16", "197.16.0.0/12", "10.0.0.0/8", "172.16.0.0/12"],
      correct: 1,
      explanation: "Răspunsul corect: 197.16.0.0/12."
    },
    {
      id: "net-149",
      chapter: "infrastructura",
      type: "single",
      question: "IPv4 address statements. Which variant is correct?",
      options: ["IPv4 has 64 bits – True; octets are 8-bit fields – True; octet values are 0–256 – True", "IPv4 has 64 bits – False; octets are 8-bit fields – True; octet values are 0–256 – False", "IPv4 has 32 bits – False; octets are 16-bit fields – True; octet values are 0–256 – True", "All statements are False"],
      correct: 1,
      explanation: "Răspunsul corect: IPv4 has 64 bits – False; octets are 8-bit fields – True; octet values are 0–256 – False."
    },
    {
      id: "net-150",
      chapter: "infrastructura",
      type: "single",
      question: "Each IPv4 address consists of a MAC address and data-link layer address. What is correct instead?",
      options: ["Network ID and a host ID", "DNS record and a default route", "64-bit binary number divided into octets", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: Network ID and a host ID."
    },
    {
      id: "net-151",
      chapter: "infrastructura",
      type: "drag_drop",
      question: "Match each IP address to its IPv4 address class.",
      dragItems: [
        { id: "a", text: "64.123.12.1" },
        { id: "b", text: "133.234.23.2" },
        { id: "c", text: "201.111.22.3" },
        { id: "d", text: "224.100.20.3" }
      ],
      dropZones: [
        { id: "z1", label: "Class A", correctItemId: "a" },
        { id: "z2", label: "Class B", correctItemId: "b" },
        { id: "z3", label: "Class C", correctItemId: "c" },
        { id: "z4", label: "Class D", correctItemId: "d" }
      ],
      explanation: "Asocierile corecte: 64.123.12.1 → Class A; 133.234.23.2 → Class B; 201.111.22.3 → Class C; 224.100.20.3 → Class D."
    },
    {
      id: "net-152",
      chapter: "infrastructura",
      type: "drag_drop",
      question: "Match each IPv4 address type to its definition.",
      dragItems: [
        { id: "a", text: "Multicast" },
        { id: "b", text: "Broadcast" },
        { id: "c", text: "Unicast" }
      ],
      dropZones: [
        { id: "z1", label: "One-to-many", correctItemId: "a" },
        { id: "z2", label: "To everyone on a subnet", correctItemId: "b" },
        { id: "z3", label: "One-to-one", correctItemId: "c" }
      ],
      explanation: "Asocierile corecte: Multicast → One-to-many; Broadcast → To everyone on a subnet; Unicast → One-to-one."
    },
    {
      id: "net-153",
      chapter: "echipamente",
      type: "single",
      question: "Dynamic routing statements. Which variant is correct?",
      options: ["Learns networks automatically – True; removes routes automatically – True; selects best route using metrics – True", "Only the first statement is True", "Only the second statement is True", "All statements are False"],
      correct: 0,
      explanation: "Răspunsul corect: Learns networks automatically – True; removes routes automatically – True; selects best route using metrics – True."
    },
    {
      id: "net-154",
      chapter: "infrastructura",
      type: "drag_drop",
      question: "Match each address range to its address type.",
      dragItems: [
        { id: "a", text: "127.0.0.0–127.255.255.255" },
        { id: "b", text: "192.168.0.0–192.168.255.255" },
        { id: "c", text: "224.0.0.0–239.255.255.255" }
      ],
      dropZones: [
        { id: "z1", label: "Loopback", correctItemId: "a" },
        { id: "z2", label: "Private", correctItemId: "b" },
        { id: "z3", label: "Multicast", correctItemId: "c" }
      ],
      explanation: "Asocierile corecte: 127.0.0.0–127.255.255.255 → Loopback; 192.168.0.0–192.168.255.255 → Private; 224.0.0.0–239.255.255.255 → Multicast."
    },
    {
      id: "net-155",
      chapter: "depanare-unelte",
      type: "single",
      question: "The ipconfig command will:",
      options: ["Configure routers", "Configure DHCP clients", "Display a client's address", "Display a client's broadcast mode"],
      correct: 2,
      explanation: "Răspunsul corect: Display a client's address."
    },
    {
      id: "net-156",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to release the IP configuration handed out by a DHCP server?",
      options: ["ipconfig /renew", "ipconfig /releasedns", "ipconfig /savestatic", "ipconfig /release"],
      correct: 3,
      explanation: "Răspunsul corect: ipconfig /release."
    },
    {
      id: "net-157",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to reacquire IP configuration from a DHCP server?",
      options: ["ipconfig /renew", "ipconfig /releasedns", "ipconfig /savestatic", "ipconfig /release"],
      correct: 0,
      explanation: "Răspunsul corect: ipconfig /renew."
    },
    {
      id: "net-158",
      chapter: "protocoale",
      type: "single",
      question: "List the four steps for a client to get an IP address from a DHCP server in the correct order.",
      options: ["Discovery, offering, request, acknowledge", "Request, offering, discovery, acknowledge", "Discovery, request, offering, acknowledge"],
      correct: 0,
      explanation: "Răspunsul corect: Discovery, offering, request, acknowledge."
    },
    {
      id: "net-159",
      chapter: "protocoale",
      type: "single",
      question: "What protocol automatically configures IP configuration for a client?",
      options: ["DNS", "DHCP", "WINS", "FTP"],
      correct: 1,
      explanation: "Răspunsul corect: DHCP."
    },
    {
      id: "net-160",
      chapter: "protocoale",
      type: "single",
      question: "Teredo tunneling is a protocol that:",
      options: ["Translates IPv4 to IPv6", "Allows IPv6 connectivity through IPv4 devices", "Provides VPN security", "Dynamically allocates IPv6 addresses"],
      correct: 1,
      explanation: "Răspunsul corect: Allows IPv6 connectivity through IPv4 devices."
    },
    {
      id: "net-161",
      chapter: "infrastructura",
      type: "single",
      question: "IPv6 statements. Which variant is correct?",
      options: ["0:0:0:0:0:0:0:1 is loopback – True; FEC0::9C5A is site-local – True; FE80::F856:02AA is link-local – True", "Only loopback is True", "Only link-local is True", "All statements are False"],
      correct: 0,
      explanation: "Răspunsul corect: 0:0:0:0:0:0:0:1 is loopback – True; FEC0::9C5A is site-local – True; FE80::F856:02AA is link-local – True."
    },
    {
      id: "net-162",
      chapter: "infrastructura",
      type: "single",
      question: "Which of these represents the IPv6 loopback address?",
      options: ["127.0.0.1", "192.168.0.1", "FEC0:A8C0::AA01", "::1"],
      correct: 3,
      explanation: "Răspunsul corect: ::1."
    },
    {
      id: "net-163",
      chapter: "infrastructura",
      type: "single",
      question: "Which of these addresses is a multicast address?",
      options: ["127.0.0.1", "169.254.0.1", "192.168.0.1", "224.0.0.1"],
      correct: 3,
      explanation: "Răspunsul corect: 224.0.0.1."
    },
    {
      id: "net-164",
      chapter: "infrastructura",
      type: "single",
      question: "How many bits are there in an IPv6 address?",
      options: ["32", "64", "128", "256"],
      correct: 2,
      explanation: "Răspunsul corect: 128."
    },
    {
      id: "net-165",
      chapter: "infrastructura",
      type: "single",
      question: "IPv6 address validity. Which variant is correct?",
      options: ["21DA:D3:0:2F3B:2AA:FF:FE28:9C5A – True; FE80::2AA:FF:FE28:9C5A – True; 21DA:02AA:::FF:FE28:9C5A – False", "All three are valid", "Only the last one is valid", "All are invalid"],
      correct: 0,
      explanation: "Răspunsul corect: 21DA:D3:0:2F3B:2AA:FF:FE28:9C5A – True; FE80::2AA:FF:FE28:9C5A – True; 21DA:02AA:::FF:FE28:9C5A – False."
    },
    {
      id: "net-166",
      chapter: "infrastructura",
      type: "single",
      question: "IPv6 general statements. Which variant is correct?",
      options: ["IPv6 addresses are 64-bit – True; divided into 8-bit blocks – True; represented by dotted-decimal notation – True", "IPv6 addresses are 64-bit – False; divided into 8-bit blocks – False; represented by dotted-decimal notation – False", "Only dotted-decimal notation is True", "Only 8-bit blocks are True"],
      correct: 1,
      explanation: "Răspunsul corect: IPv6 addresses are 64-bit – False; divided into 8-bit blocks – False; represented by dotted-decimal notation – False."
    },
    {
      id: "net-167",
      chapter: "protocoale",
      type: "single",
      question: "The default port used for SMTP is:",
      options: ["23", "25", "80", "8080"],
      correct: 1,
      explanation: "Răspunsul corect: 25."
    },
    {
      id: "net-168",
      chapter: "protocoale",
      type: "single",
      question: "The default port used for Telnet is:",
      options: ["23", "25", "80", "8080"],
      correct: 0,
      explanation: "Răspunsul corect: 23."
    },
    {
      id: "net-169",
      chapter: "protocoale",
      type: "single",
      question: "All session data is encrypted between all machines while using Telnet. What is correct instead?",
      options: ["Not encrypted", "Encrypted between any Windows machines", "Encrypted only to any non-Windows machines", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: Not encrypted."
    },
    {
      id: "net-170",
      chapter: "depanare-unelte",
      type: "single",
      question: "Which command displays the ports that your computer is listening for?",
      options: ["nslookup", "nbtstat", "ping", "netstat"],
      correct: 3,
      explanation: "Răspunsul corect: netstat."
    },
    {
      id: "net-171",
      chapter: "protocoale",
      type: "single",
      question: "Which of these ports does DHCP use?",
      options: ["80", "67", "23", "500"],
      correct: 1,
      explanation: "Răspunsul corect: 67."
    },
    {
      id: "net-172",
      chapter: "protocoale",
      type: "single",
      question: "What port does DNS use?",
      options: ["443", "389", "51", "53"],
      correct: 3,
      explanation: "Răspunsul corect: 53."
    },
    {
      id: "net-173",
      chapter: "depanare-unelte",
      type: "single",
      question: "Which setting/tool is used to determine DNS settings on a client computer?",
      options: ["TELNET", "NSLOOKUP", "PATHPING", "NETSTAT"],
      correct: 1,
      explanation: "Răspunsul corect: NSLOOKUP."
    },
    {
      id: "net-174",
      chapter: "protocoale",
      type: "single",
      question: "A service that resolves NetBIOS names to IP addresses is:",
      options: ["Domain Name Service (DNS)", "Internet Service Provider (ISP)", "Address Resolution Protocol (ARP)", "Windows Internet Name Service (WINS)"],
      correct: 3,
      explanation: "Răspunsul corect: Windows Internet Name Service (WINS)."
    },
    {
      id: "net-175",
      chapter: "protocoale",
      type: "single",
      question: "What type of DNS record maps host names to addresses?",
      options: ["Mail Exchanger (MX) DNS record", "Service (SRV) DNS record", "Host (A) DNS record", "Canonical (CNAME) DNS record"],
      correct: 2,
      explanation: "Răspunsul corect: Host (A) DNS record."
    },
    {
      id: "net-176",
      chapter: "depanare-unelte",
      type: "single",
      question: "You can ping a server by IP address but not by FQDN. Why?",
      options: ["PING is improperly configured", "The DNS is not resolving", "The DHCP server is offline", "NSLOOKUP is stopped"],
      correct: 1,
      explanation: "Răspunsul corect: The DNS is not resolving."
    },
    {
      id: "net-177",
      chapter: "protocoale",
      type: "single",
      question: "A secondary zone is the first DNS zone to which all updates are written. What is correct instead?",
      options: ["Primary zone", "Stub zone", "Conditional forwarding zone", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: Primary zone."
    },
    {
      id: "net-178",
      chapter: "protocoale",
      type: "single",
      question: "Which of the following uses pointer records and A records?",
      options: ["IDS", "DNS Server", "NAT Server", "IPS"],
      correct: 1,
      explanation: "Răspunsul corect: DNS Server."
    },
    {
      id: "net-179",
      chapter: "protocoale",
      type: "single",
      question: "The top-level domain of www.adventureworks.com is:",
      options: ["Www", "Adventureworks", "Adventureworks.com", "Com"],
      correct: 3,
      explanation: "Răspunsul corect: Com."
    },
    {
      id: "net-180",
      chapter: "protocoale",
      type: "single",
      question: "What type of record does DNS use to find a mail service?",
      options: ["Service (SRV) DNS record", "Canonical (CNAME) DNS record", "Mail Exchanger (MX) DNS record", "Host (A) DNS record"],
      correct: 2,
      explanation: "Răspunsul corect: Mail Exchanger (MX) DNS record."
    },
    {
      id: "net-181",
      chapter: "protocoale",
      type: "single",
      question: "An ARP table is used to associate IP addresses with host names. What is correct instead?",
      options: ["MAC addresses", "HomeGroup membership", "Preferred routers", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: MAC addresses."
    },
    {
      id: "net-182",
      chapter: "protocoale",
      type: "single",
      question: "The host name of the FQDN mail.exchange.corp.nwtraders.com is:",
      options: ["Corp", "Com", "Nwtraders", "Exchange", "Mail"],
      correct: 4,
      explanation: "Răspunsul corect: Mail."
    },
    {
      id: "net-183",
      chapter: "protocoale",
      type: "single",
      question: "The service that resolves FQDNs to IP addresses is:",
      options: ["Windows Internet Name Service (WINS)", "Domain Name Service (DNS)", "Internet Service Provider (ISP)", "Address Resolution Protocol (ARP)"],
      correct: 1,
      explanation: "Răspunsul corect: Domain Name Service (DNS)."
    },
    {
      id: "net-184",
      chapter: "protocoale",
      type: "single",
      question: "The process of replicating a zone file to multiple DNS servers is called zone replication. What is correct instead?",
      options: ["Zone transfer", "Zone synchronization", "Start of authority", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: Zone transfer."
    },
    {
      id: "net-185",
      chapter: "protocoale",
      type: "single",
      question: "Which DNS record type specifies the host that is the authority for a given domain?",
      options: ["NS", "MX", "CNAME", "SOA"],
      correct: 3,
      explanation: "Răspunsul corect: SOA."
    },
    {
      id: "net-186",
      chapter: "protocoale",
      type: "single",
      question: "What DNS record type specifies an alias name of another address record?",
      options: ["MX", "CNAME", "NS", "SOA"],
      correct: 1,
      explanation: "Răspunsul corect: CNAME."
    },
    {
      id: "net-187",
      chapter: "protocoale",
      type: "single",
      question: "The NTP value in a resource record indicates how long DNS servers cache information. What is correct instead?",
      options: ["TTL", "GPS", "SOA RR", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: TTL."
    },
    {
      id: "net-188",
      chapter: "protocoale",
      type: "single",
      question: "DNS query statements. Which variant is correct?",
      options: ["Recursive query may contact other DNS servers – True; unresolved iterative query may escalate to root DNS – True; DNS server makes iterative query outside local domain if no forwarder – True", "Only the first statement is True", "Only the second statement is True", "All statements are False"],
      correct: 0,
      explanation: "Răspunsul corect: Recursive query may contact other DNS servers – True; unresolved iterative query may escalate to root DNS – True; DNS server makes iterative query outside local domain if no forwarder – True."
    },
    {
      id: "net-189",
      chapter: "depanare-unelte",
      type: "multiple",
      question: "The ping tool is used to: Choose two.",
      options: ["Determine the network portion of a host address", "Self-test a host's own network interface", "Determine whether a host is reachable", "Manage a host's session when UDP is used"],
      correct: [1, 2],
      explanation: "Răspunsurile corecte: Self-test a host's own network interface; Determine whether a host is reachable."
    },
    {
      id: "net-190",
      chapter: "protocoale",
      type: "multiple",
      question: "Which of the following are features of DHCP? Choose two.",
      options: ["IP address resolution to canonical names", "Secure shell connections", "Address reservation", "Network file transfer", "IP address exclusion"],
      correct: [2, 4],
      explanation: "Răspunsurile corecte: Address reservation; IP address exclusion."
    },
    {
      id: "net-191",
      chapter: "depanare-unelte",
      type: "single",
      question: "The command-line tool used to list a host's active incoming connections is:",
      options: ["NETSTAT", "IPCONFIG", "NSLOOKUP", "PING"],
      correct: 0,
      explanation: "Răspunsul corect: NETSTAT."
    },
    {
      id: "net-192",
      chapter: "depanare-unelte",
      type: "single",
      question: "A computer with IP address 169.254.0.1 cannot access the network. Which service should you confirm is available?",
      options: ["WINS", "DNS", "DHCP", "TFTP"],
      correct: 2,
      explanation: "Răspunsul corect: DHCP."
    },
    {
      id: "net-193",
      chapter: "protocoale",
      type: "single",
      question: "When a client's DHCP-issued address expires, the client will:",
      options: ["Select a new address and request approval from the DHCP server", "Require manual configuration with a static IP address", "Attempt to obtain a new address by broadcasting", "Continue to use the address until notified to stop"],
      correct: 2,
      explanation: "Răspunsul corect: Attempt to obtain a new address by broadcasting."
    },
    {
      id: "net-194",
      chapter: "protocoale",
      type: "multiple",
      question: "Internet Key Exchange (IKE) is responsible for which two functions? Choose two.",
      options: ["Establishing network speed parameters", "Verifying the client's patch level", "Negotiating algorithms to use", "Exchanging key information"],
      correct: [2, 3],
      explanation: "Răspunsurile corecte: Negotiating algorithms to use; Exchanging key information."
    },
    {
      id: "net-195",
      chapter: "depanare-unelte",
      type: "single",
      question: "Which command is used to verify that a server is connected to the network?",
      options: ["IPCONFIG", "ROUTE", "PING", "CHECK"],
      correct: 2,
      explanation: "Răspunsul corect: PING."
    },
    {
      id: "net-196",
      chapter: "echipamente",
      type: "single",
      question: "To protect a network when it is connected to the Internet, you should use a:",
      options: ["Bridge", "Firewall", "Switch", "Router"],
      correct: 1,
      explanation: "Răspunsul corect: Firewall."
    },
    {
      id: "net-197",
      chapter: "protocoale",
      type: "single",
      question: "Which service masks internal IP addresses from outside the network?",
      options: ["DHCP", "WINS", "NAT", "DNS"],
      correct: 2,
      explanation: "Răspunsul corect: NAT."
    },
    {
      id: "net-198",
      chapter: "depanare-unelte",
      type: "single",
      question: "Tracert is used to:",
      options: ["Manage routing tables dynamically", "Manage session-oriented connections between nodes", "Report the route taken by packets across an IP network", "Report the shortest route between different networks"],
      correct: 2,
      explanation: "Răspunsul corect: Report the route taken by packets across an IP network."
    },
    {
      id: "net-199",
      chapter: "protocoale",
      type: "single",
      question: "A school network uses DHCP. Settings are manual and websites do not work. Which changes are needed?",
      options: ["Set IP address to manual and DNS to manual", "Obtain IP address automatically and obtain DNS server address automatically", "Only change the subnet mask", "Only disable DNS"],
      correct: 1,
      explanation: "Răspunsul corect: Obtain IP address automatically and obtain DNS server address automatically."
    },
    {
      id: "net-200",
      chapter: "protocoale",
      type: "multiple",
      question: "For which two reasons should you use IPsec between computers? Choose two.",
      options: ["Data compression", "Data integrity", "Data redundancy", "Data confidentiality"],
      correct: [1, 3],
      explanation: "Răspunsurile corecte: Data integrity; Data confidentiality."
    },
    {
      id: "net-201",
      chapter: "depanare-unelte",
      type: "single",
      question: "Which address indicates that a router's DHCP service is NOT functioning?",
      options: ["169.254.1.15", "172.16.1.15", "192.168.1.15", "10.19.1.15"],
      correct: 0,
      explanation: "Răspunsul corect: 169.254.1.15."
    },
    {
      id: "net-202",
      chapter: "concepte-retea",
      type: "single",
      question: "A public-facing web server must be protected from the internal network. What should you do?",
      options: ["Set the web server in a perimeter network", "Block access on ports 80 and 443 on the web server", "Configure the firewall to block ports 80 and 443", "Set the web server IP address within the LAN"],
      correct: 0,
      explanation: "Răspunsul corect: Set the web server in a perimeter network."
    },
    {
      id: "net-203",
      chapter: "depanare-unelte",
      type: "single",
      question: "A computer has IP address 169.254.48.97 and cannot connect to resources. What should you do next?",
      options: ["Flush the DNS server cache", "Reset the user's password", "Check router routing tables", "Verify that the DHCP service is available"],
      correct: 3,
      explanation: "Răspunsul corect: Verify that the DHCP service is available."
    },
    {
      id: "net-204",
      chapter: "protocoale",
      type: "single",
      question: "Which protocol can be used to encrypt packets on the Internet?",
      options: ["SNMP", "HTTPS", "TFTP", "HTTP"],
      correct: 1,
      explanation: "Răspunsul corect: HTTPS."
    },
    {
      id: "net-205",
      chapter: "concepte-retea",
      type: "single",
      question: "Which Microsoft network service can establish a connection to a corporate LAN without user action?",
      options: ["VPN", "Remote Desktop", "DirectAccess", "NAP"],
      correct: 2,
      explanation: "Răspunsul corect: DirectAccess."
    },
    {
      id: "net-206",
      chapter: "protocoale",
      type: "single",
      question: "When a client cannot reach a DHCP server, it assigns an IP address in 10.0.0.0–10.0.0.255. What is correct instead?",
      options: ["127.0.0.0–127.0.0.255", "169.254.0.0–169.254.255.255", "192.168.100.0–192.168.100.255", "No change is needed"],
      correct: 1,
      explanation: "Răspunsul corect: 169.254.0.0–169.254.255.255."
    },
    {
      id: "net-207",
      chapter: "infrastructura",
      type: "single",
      question: "POTS, most ISDN lines, and switched T1 lines are examples of Message Switching. What is correct instead?",
      options: ["Circuit Switching", "Packet Switching", "FDDI Switching", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: Circuit Switching."
    },
    {
      id: "net-208",
      chapter: "protocoale",
      type: "single",
      question: "IPsec statements. Which variant is correct?",
      options: ["Can secure communications between two machines – True; between two networks – True; traffic is always encrypted – False", "All statements are True", "Only the first statement is True", "All statements are False"],
      correct: 0,
      explanation: "Răspunsul corect: Can secure communications between two machines – True; between two networks – True; traffic is always encrypted – False."
    },
    {
      id: "net-209",
      chapter: "depanare-unelte",
      type: "single",
      question: "Tracert statements. Which variant is correct?",
      options: ["Displays router addresses traversed – True; determines packet loss – False; displays routers for all active connections – False", "All statements are True", "Only packet loss is True", "All statements are False"],
      correct: 0,
      explanation: "Răspunsul corect: Displays router addresses traversed – True; determines packet loss – False; displays routers for all active connections – False."
    },
    {
      id: "net-210",
      chapter: "protocoale",
      type: "single",
      question: "What protocol is used with L2TP to provide encryption?",
      options: ["IPsec", "MPPE", "HTTPS", "MS-CHAP"],
      correct: 0,
      explanation: "Răspunsul corect: IPsec."
    },
    {
      id: "net-211",
      chapter: "protocoale",
      type: "single",
      question: "After installing DHCP servers and configuring/activating a scope, what is the last step?",
      options: ["Register the scope", "Register the server", "Authorize the server", "Register the clients"],
      correct: 2,
      explanation: "Răspunsul corect: Authorize the server."
    },
    {
      id: "net-212",
      chapter: "depanare-unelte",
      type: "single",
      question: "A computer has address 169.254.32.23 and mask 255.255.0.0 but cannot connect to local file servers. What is most likely the problem?",
      options: ["It cannot communicate with a DHCP server", "DNS servers are incorrect or down", "NetBIOS over TCP/IP is not enabled", "The network card is not connected properly"],
      correct: 0,
      explanation: "Răspunsul corect: It cannot communicate with a DHCP server."
    },
    {
      id: "net-213",
      chapter: "protocoale",
      type: "single",
      question: "Which IPSec component generates the encryption and authentication keys?",
      options: ["SA", "AH", "EP", "MPPE"],
      correct: 0,
      explanation: "Răspunsul corect: SA."
    },
    {
      id: "net-214",
      chapter: "protocoale",
      type: "single",
      question: "Which IPSec component provides connectionless integrity and data authentication but not confidentiality?",
      options: ["SA", "AH", "ESP", "MPPE"],
      correct: 1,
      explanation: "Răspunsul corect: AH."
    },
    {
      id: "net-215",
      chapter: "protocoale",
      type: "single",
      question: "Which IPSec component includes the most security, including confidentiality?",
      options: ["SA", "AH", "ESP", "MPPE"],
      correct: 2,
      explanation: "Răspunsul corect: ESP."
    },
    {
      id: "net-216",
      chapter: "protocoale",
      type: "single",
      question: "What service on a Windows network translates between NetBIOS/computer names and IP addresses?",
      options: ["DNS", "WINS", "DHCP", "LDAP"],
      correct: 1,
      explanation: "Răspunsul corect: WINS."
    },
    {
      id: "net-217",
      chapter: "protocoale",
      type: "single",
      question: "What provides name resolution between domain names and IP addresses?",
      options: ["DHCP", "DNS", "ARP", "RPC"],
      correct: 1,
      explanation: "Răspunsul corect: DNS."
    },
    {
      id: "net-218",
      chapter: "concepte-retea",
      type: "single",
      question: "What type of network can you set up that is another company’s internal network?",
      options: ["Intranet", "Extranet", "Internet", "DMZ"],
      correct: 1,
      explanation: "Răspunsul corect: Extranet."
    },
    {
      id: "net-219",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to display and modify the network configuration of a local computer?",
      options: ["Netsh", "netstat", "telnet", "nbtstat"],
      correct: 0,
      explanation: "Răspunsul corect: Netsh."
    },
    {
      id: "net-220",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command is used to add static routes to a Windows computer?",
      options: ["nslookup", "telnet", "route", "nbtstat"],
      correct: 2,
      explanation: "Răspunsul corect: route."
    },
    {
      id: "net-221",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to display the routing table on a local system?",
      options: ["route display", "route table", "route local", "route print"],
      correct: 3,
      explanation: "Răspunsul corect: route print."
    },
    {
      id: "net-222",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to display the MAC address on a system?",
      options: ["ipconfig /all", "Pathping -m", "route /showmac", "nbtstat -r"],
      correct: 0,
      explanation: "Răspunsul corect: ipconfig /all."
    },
    {
      id: "net-223",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to retrieve or update your DHCP assigned configuration?",
      options: ["ipconfig /flushdns", "ipconfig /all", "ipconfig /release", "ipconfig /renew"],
      correct: 3,
      explanation: "Răspunsul corect: ipconfig /renew."
    },
    {
      id: "net-224",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command do you use to register the computer’s name and IP address with the nearest DNS server?",
      options: ["ipconfig /renew", "ipconfig /renew all", "ipconfig /flushdns", "ipconfig /registerdns"],
      correct: 3,
      explanation: "Răspunsul corect: ipconfig /registerdns."
    },
    {
      id: "net-225",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command displays Ethernet statistics?",
      options: ["netstat -e", "netstat -x", "netstat -q", "netstat -t"],
      correct: 0,
      explanation: "Răspunsul corect: netstat -e."
    },
    {
      id: "net-226",
      chapter: "depanare-unelte",
      type: "single",
      question: "What option do you use to ping constantly until you stop it?",
      options: ["ping -t <host>", "ping -q <host>", "ping -r <host>", "ping -s <host>"],
      correct: 0,
      explanation: "Răspunsul corect: ping -t <host>."
    },
    {
      id: "net-227",
      chapter: "protocoale",
      type: "single",
      question: "What server is used to translate host names to IP addresses?",
      options: ["DNS", "WINS", "HOSTS", "DHCP"],
      correct: 0,
      explanation: "Răspunsul corect: DNS."
    },
    {
      id: "net-228",
      chapter: "depanare-unelte",
      type: "single",
      question: "What command can you use to connect to a mail server so that you can test SMTP?",
      options: ["Ftp", "nslookup", "telnet", "nbtstat"],
      correct: 2,
      explanation: "Răspunsul corect: telnet."
    },
    {
      id: "net-229",
      chapter: "concepte-retea",
      type: "multiple",
      question: "CompanyPro plans to migrate several servers to cloud-based virtual machines. You need to identify the administrative responsibilities that will be reduced after the planned migration. Which two responsibilities will be reduced? Choose two.",
      options: ["Backing up application data", "Managing permissions to shared documents", "Updating server operating systems", "Replacing failed server hardware", "Managing physical server security"],
      correct: [3, 4],
      explanation: "Răspunsurile corecte: Replacing failed server hardware; Managing physical server security."
    },
    {
      id: "net-230",
      chapter: "concepte-retea",
      type: "single",
      question: "An organization needs to move its infrastructure completely off-premises. Where should they locate their data center?",
      options: ["A public cloud", "A private cloud", "A virtual machine", "A hybrid cloud"],
      correct: 0,
      explanation: "Răspunsul corect: A public cloud."
    },
    {
      id: "net-231",
      chapter: "concepte-retea",
      type: "single",
      question: "You are configuring remote access for dial-in clients. You need to configure a solution that enables them to connect through standard phone lines without having access to the Internet. Which role should you install?",
      options: ["Multipoint Services", "Network Policy and Access Services", "Remote Access", "Remote Desktop Services"],
      correct: 2,
      explanation: "Răspunsul corect: Remote Access."
    },
    {
      id: "net-232",
      chapter: "concepte-retea",
      type: "single",
      question: "You use the ____________ to connect to a terminal server",
      options: ["Remote Desktop Connection (RDC)", "Remote Desktop Protocol (RDP)", "Remote Session Call (RSC)", "Remote NetBIOS Connection (RNC)"],
      correct: 0,
      explanation: "Răspunsul corect: Remote Desktop Connection (RDC)."
    },
    {
      id: "net-233",
      chapter: "concepte-retea",
      type: "single",
      question: "What zone is used to publish external websites for an organization?",
      options: ["Intranet", "Exanet", "Internetwork", "DMZ"],
      correct: 3,
      explanation: "Răspunsul corect: DMZ."
    },
    {
      id: "net-234",
      chapter: "concepte-retea",
      type: "single",
      question: "What is the primary purpose of a perimeter network?",
      options: ["To act as a hidden location to deploy network clients", "To act as a secure location for deploying highly sensitive network servers", "To provide a buffer area between a private intranet and the public Internet", "To monitor traffic between routed subnets in a private LAN"],
      correct: 2,
      explanation: "Răspunsul corect: To provide a buffer area between a private intranet and the public Internet."
    },
    {
      id: "net-235",
      chapter: "concepte-retea",
      type: "multiple",
      question: "Which two servers should you place in a perimeter network? Choose two.",
      options: ["NAT server", "Database server", "Secure file server", "DHCP server", "Public web server"],
      correct: [0, 4],
      explanation: "Răspunsurile corecte: NAT server; Public web server."
    },
    {
      id: "net-236",
      chapter: "infrastructura",
      type: "multiple",
      question: "What are two characteristics of VLANs? Choose two.",
      options: ["VLANs act as though they are on the same LAN regardless of physical location", "A VLAN can logically address packets by using IP", "A VLAN compartmentalizes a network and isolates traffic", "A single switch can service only a single VLAN"],
      correct: [0, 2],
      explanation: "Răspunsurile corecte: VLANs act as though they are on the same LAN regardless of physical location; A VLAN compartmentalizes a network and isolates traffic."
    },
    {
      id: "net-237",
      chapter: "infrastructura",
      type: "multiple",
      question: "What are three advantages of VLANs? Choose three.",
      options: ["They can logically address packets by using IP", "They require a router to connect to VLANs on another switch", "They compartmentalize a network and isolate traffic", "They are efficient because a single switch can implement only a single VLAN", "They act as though they are on the same LAN regardless of physical location"],
      correct: [1, 2, 4],
      explanation: "Răspunsurile corecte: They require a router to connect to VLANs on another switch; They compartmentalize a network and isolate traffic; They act as though they are on the same LAN regardless of physical location."
    },
    {
      id: "net-238",
      chapter: "infrastructura",
      type: "multiple",
      question: "What are two advantages of using DSL for WAN connections? Choose two.",
      options: ["DSL bypasses the need to use an ISP to connect to the Internet", "DSL supports higher bandwidth than cable modems and ISDN", "DSL provides a cost-effective way for small office/home office connections to the Internet", "DSL is the preferred method for WAN point-to-point links in an enterprise network", "DSL is implemented using standard telephone company service lines"],
      correct: [2, 4],
      explanation: "Răspunsurile corecte: DSL provides a cost-effective way for small office/home office connections to the Internet; DSL is implemented using standard telephone company service lines."
    },
    {
      id: "net-239",
      chapter: "concepte-retea",
      type: "single",
      question: "You need to configure a VPN connection between two offices. You want to maximize the connection speed. Which connection should you use?",
      options: ["ISDN", "Cable Modem", "T1", "DSL"],
      correct: 1,
      explanation: "Răspunsul corect: Cable Modem."
    },
    {
      id: "net-240",
      chapter: "infrastructura",
      type: "single",
      question: "Which connectivity option for wide area networks (WANs) is most readily available in most geographic areas?",
      options: ["Leased line", "ISDN", "T1", "Dial-up"],
      correct: 3,
      explanation: "Răspunsul corect: Dial-up."
    },
    {
      id: "net-241",
      chapter: "infrastructura",
      type: "single",
      question: "POTS, ISDN, and. T1 use which type of switching?",
      options: ["Packet", "Circuit"],
      correct: 1,
      explanation: "Răspunsul corect: Circuit."
    },
    {
      id: "net-242",
      chapter: "infrastructura",
      type: "single",
      question: "What wifi standards support 54Mbps and only at 2.5Ghz?",
      options: ["802.11a", "802.11g", "802.11n"],
      correct: 1,
      explanation: "Răspunsul corect: 802.11g."
    },
    {
      id: "net-243",
      chapter: "infrastructura",
      type: "single",
      question: "The 802.11n wireless standard specifies a maximum data rate of 54 Mbps. What is correct instead?",
      options: ["10 Mbps", "11-128 Mbps", "300-600 Mbps", "No change is needed"],
      correct: 2,
      explanation: "Răspunsul corect: 300-600 Mbps."
    },
    {
      id: "net-244",
      chapter: "infrastructura",
      type: "single",
      question: "What happens when an 802.11a node broadcasts within the range of an 802.11g access point?",
      options: ["The access point transmits, but the node is unable to receive", "A connection occurs", "Both the node and the access point are unable to transmit", "The node transmits, but the access point is unable to receive"],
      correct: 3,
      explanation: "Răspunsul corect: The node transmits, but the access point is unable to receive."
    },
    {
      id: "net-245",
      chapter: "infrastructura",
      type: "single",
      question: "On a wireless router, what is an SSID?",
      options: ["The default administrator account", "The broadcast ID", "The default communication protocol", "A WAN encryption protocol"],
      correct: 1,
      explanation: "Răspunsul corect: The broadcast ID."
    },
    {
      id: "net-246",
      chapter: "infrastructura",
      type: "single",
      question: "If an 802.11g Internet connection has connectivity problems, what may be the cause?",
      options: ["A cordless phone", "A cellular phone", "Incandescent lights", "Electromagnetic interference (EMI)"],
      correct: 0,
      explanation: "Răspunsul corect: A cordless phone."
    },
    {
      id: "net-247",
      chapter: "infrastructura",
      type: "single",
      question: "Which is an example of external interference that can degrade the transmission quality of a UTP cable segment?",
      options: ["Wireless access points", "Crosstalk", "Large electric motors", "Cell phones"],
      correct: 2,
      explanation: "Răspunsul corect: Large electric motors."
    },
    {
      id: "net-248",
      chapter: "concepte-retea",
      type: "single",
      question: "Which physical network topology provides fault-tolerant communication by providing redundant communication paths?",
      options: ["Bus", "Ring", "Star", "Mesh"],
      correct: 3,
      explanation: "Răspunsul corect: Mesh."
    },
    {
      id: "net-249",
      chapter: "concepte-retea",
      type: "single",
      question: "All devices on your company network connect to the same network switch. This is an example of a physical star topology. What is correct?",
      options: ["Ring", "Bus", "Mesh", "No change is needed"],
      correct: 3,
      explanation: "Răspunsul corect: No change is needed."
    },
    {
      id: "net-250",
      chapter: "concepte-retea",
      type: "single",
      question: "At Ethernet 1000BaseT network is wired as a physical star using switches. What is the logical topology?",
      options: ["Mesh", "Ring", "Bus", "Star"],
      correct: 2,
      explanation: "Răspunsul corect: Bus."
    },
    {
      id: "net-251",
      chapter: "concepte-retea",
      type: "single",
      question: "Which access method is used in a physical ring topology?",
      options: ["Collision", "Token passing", "Avoidance", "Polling"],
      correct: 1,
      explanation: "Răspunsul corect: Token passing."
    },
    {
      id: "net-252",
      chapter: "echipamente",
      type: "single",
      question: "What is the most common central device used today to connect computers to a network?",
      options: ["Hub", "Switch", "SOHO router", "VPN router"],
      correct: 1,
      explanation: "Răspunsul corect: Switch."
    },
    {
      id: "net-253",
      chapter: "protocoale",
      type: "single",
      question: "Which is not a routing protocol?",
      options: ["EIGRP", "RIP", "OSPF", "TCP"],
      correct: 3,
      explanation: "Răspunsul corect: TCP."
    },
    {
      id: "net-254",
      chapter: "depanare-unelte",
      type: "multiple",
      question: "Your school network has multiple routers. Students in one of the dorms report that they cannot connect to the email server. You verify that the email server is operational. You suspect that the router on the subnet is causing the problem. Which two actions should you perfume? Choose two.",
      options: ["Enable dynamic routing", "Look in the router's NAT table", "Enable multicast", "Look in the router's routing table"],
      correct: [0, 3],
      explanation: "Răspunsurile corecte: Enable dynamic routing; Look in the router's routing table."
    },
    {
      id: "net-255",
      chapter: "protocoale",
      type: "multiple",
      question: "You work for a small office that has 15 computers. Your local ISP provides you with one public IP address. You need to enable internet access for all 15 computers. Which routing function should you enable? Choose two.",
      options: ["Static routing", "NAT", "Port forwarding (PAT)", "RIP"],
      correct: [1, 2],
      explanation: "Răspunsurile corecte: NAT; Port forwarding (PAT)."
    },
    {
      id: "net-256",
      chapter: "infrastructura",
      type: "single",
      question: "What is the most common cable used today?",
      options: ["UTP", "STP", "Coaxial", "Fiber"],
      correct: 0,
      explanation: "Răspunsul corect: UTP."
    },
    {
      id: "net-257",
      chapter: "concepte-retea",
      type: "multiple",
      question: "What are two characteristics of wired Ethernet network topology? Choose two.",
      options: ["It uses tokens to avoid collisions on the network", "It is typically employed using twisted pair or fiber optic media", "It uses network adapters physically encoded with an IP address", "It can negotiate different transmission speeds"],
      correct: [1, 3],
      explanation: "Răspunsurile corecte: It is typically employed using twisted pair or fiber optic media; It can negotiate different transmission speeds."
    },
    {
      id: "net-258",
      chapter: "infrastructura",
      type: "single",
      question: "If you are making a crossover cable and one end is 568A, what should the other end be?",
      options: ["568A", "568B", "568C", "BOGB"],
      correct: 1,
      explanation: "Răspunsul corect: 568B."
    },
    {
      id: "net-259",
      chapter: "infrastructura",
      type: "single",
      question: "What is a justification for using STP cable instead of UTP cable to wire a network expansion?",
      options: ["You are routing cables through an area with high external interference", "You want to minimize the costs relating to the new installation", "You need to reduce attenuation", "You need the cable to be as light and flexible as possible"],
      correct: 0,
      explanation: "Răspunsul corect: You are routing cables through an area with high external interference."
    },
    {
      id: "net-260",
      chapter: "infrastructura",
      type: "single",
      question: "Which media type is least susceptible to external interference including EMI and RFI?",
      options: ["Fiber optic", "STP", "UTP", "Wireless"],
      correct: 0,
      explanation: "Răspunsul corect: Fiber optic."
    },
    {
      id: "net-261",
      chapter: "infrastructura",
      type: "single",
      question: "You need to install a network cable between two locations that are six miles from each other. What should you use?",
      options: ["Multi-mode fiber", "Single-mode fiber", "Cat5e", "Cat6"],
      correct: 1,
      explanation: "Răspunsul corect: Single-mode fiber."
    },
    {
      id: "net-262",
      chapter: "infrastructura",
      type: "single",
      question: "You need to run four Ethernet network drops. Each drop is approximately 125 feet/46.33 meters. An interference exists along the path of each drop. You need to ensure that interference is reduced. Which cable type should you use?",
      options: ["STP Cat5e", "UTPCat5e", "Cat3", "UTPCat6"],
      correct: 0,
      explanation: "Răspunsul corect: STP Cat5e."
    },
    {
      id: "net-263",
      chapter: "protocoale",
      type: "single",
      question: "How many layers does the TCP/IP model have?",
      options: ["3", "4", "6", "7"],
      correct: 1,
      explanation: "Răspunsul corect: 4."
    },
    {
      id: "net-264",
      chapter: "concepte-retea",
      type: "single",
      question: "Which layer in the OSI model is included in the TCP/IP model?",
      options: ["Physical", "Data Link", "Transport", "Application"],
      correct: 2,
      explanation: "Răspunsul corect: Transport."
    },
    {
      id: "net-265",
      chapter: "concepte-retea",
      type: "single",
      question: "What model is used to describe how data communication occurs between hosts?",
      options: ["Server-centric model", "Workgroup model", "Peer-to-peer model", "OSI reference model"],
      correct: 3,
      explanation: "Răspunsul corect: OSI reference model."
    },
    {
      id: "net-266",
      chapter: "concepte-retea",
      type: "single",
      question: "An ICMP ping message is sent at the application layer of the OSI model. What is correct instead?",
      options: ["Network", "Transport", "Data-link", "No change is needed"],
      correct: 0,
      explanation: "Răspunsul corect: Network."
    },
    {
      id: "net-267",
      chapter: "concepte-retea",
      type: "single",
      question: "Which layer in the OSI model covers HTTP, FTP, and RDC?",
      options: ["Physical", "Session", "Application", "Presentation"],
      correct: 2,
      explanation: "Răspunsul corect: Application."
    },
    {
      id: "net-268",
      chapter: "concepte-retea",
      type: "multiple",
      question: "Which two functions are implemented at the application layer of the OSI model? Choose two.",
      options: ["Remote file services", "Data encryption/decryption", "Data compression", "Directory services"],
      correct: [0, 3],
      explanation: "Răspunsurile corecte: Remote file services; Directory services."
    },
    {
      id: "net-269",
      chapter: "concepte-retea",
      type: "single",
      question: "What layer in the OSI model is used to encrypt data?",
      options: ["Physical", "Session", "Application", "Presentation"],
      correct: 3,
      explanation: "Răspunsul corect: Presentation."
    },
    {
      id: "net-270",
      chapter: "concepte-retea",
      type: "single",
      question: "Encryption takes place at what layer of the OSI Model?",
      options: ["7", "6", "4"],
      correct: 1,
      explanation: "Răspunsul corect: 6."
    },
    {
      id: "net-271",
      chapter: "concepte-retea",
      type: "single",
      question: "POP3 is in what layer of the OSI model?",
      options: ["7", "4", "2"],
      correct: 0,
      explanation: "Răspunsul corect: 7."
    },
    {
      id: "net-272",
      chapter: "concepte-retea",
      type: "single",
      question: "Which layer of the OSI model includes VLANs?",
      options: ["Physical", "Data Link", "Network", "Transport"],
      correct: 1,
      explanation: "Răspunsul corect: Data Link."
    },
    {
      id: "net-273",
      chapter: "protocoale",
      type: "single",
      question: "NetBIOS protocol is what layer of the OSI model?",
      options: ["Network", "Session", "Transport"],
      correct: 1,
      explanation: "Răspunsul corect: Session."
    },
    {
      id: "net-274",
      chapter: "concepte-retea",
      type: "single",
      question: "Which layer in the OSI model is used to verify that data was delivered without error?",
      options: ["Physical", "Data Link", "Network", "Transport"],
      correct: 3,
      explanation: "Răspunsul corect: Transport."
    },
    {
      id: "net-275",
      chapter: "protocoale",
      type: "single",
      question: "Which protocol do you use as the transport protocol for a video application?",
      options: ["TCP", "UDP", "FTP", "RDC"],
      correct: 0,
      explanation: "Răspunsul corect: TCP."
    },
    {
      id: "net-276",
      chapter: "echipamente",
      type: "single",
      question: "Which type of switch can provide a layer 3 function?",
      options: ["Managed switch", "Multi layer switch", "Unmanaged switch"],
      correct: 1,
      explanation: "Răspunsul corect: Multi layer switch."
    },
    {
      id: "net-277",
      chapter: "echipamente",
      type: "single",
      question: "What is a similarity between Layer 2 and Layer 3 switches?",
      options: ["Both provide a high level of security to the network", "Both use logical addressing to forward transmissions", "Both forward packets onto the network", "Both allow the implementation of VLANs"],
      correct: 3,
      explanation: "Răspunsul corect: Both allow the implementation of VLANs."
    },
    {
      id: "net-278",
      chapter: "echipamente",
      type: "multiple",
      question: "What is the purpose of a Media Access Control (MAC) address? Choose two.",
      options: ["Identify a network device to the Internet", "Uniquely identify a physical network device", "Manage permissions for shared network resources", "Provide a routing address on a local area network (LAN)"],
      correct: [1, 0],
      explanation: "Răspunsurile corecte: Uniquely identify a physical network device; Identify a network device to the Internet."
    },
    {
      id: "net-279",
      chapter: "protocoale",
      type: "single",
      question: "ICMP and ARP protocol is what layer of the OSI model?",
      options: ["2", "4", "3"],
      correct: 2,
      explanation: "Răspunsul corect: 3."
    },
    {
      id: "net-280",
      chapter: "protocoale",
      type: "single",
      question: "TCP/IP and IPX/SPX are known as _________ stacks.",
      options: ["Protocols", "Services", "Layers", "Lenses"],
      correct: 0,
      explanation: "Răspunsul corect: Protocols."
    },
    {
      id: "net-281",
      chapter: "protocoale",
      type: "single",
      question: "What is the advantage of UDP over TCP?",
      options: ["Less Overhead - Faster Performance", "Older - Larger pool of compatible hardware", "TCP is not IPv6 compatible UDP is", "UDP can operate at Layer 1"],
      correct: 0,
      explanation: "Răspunsul corect: Less Overhead - Faster Performance."
    },
    {
      id: "net-282",
      chapter: "protocoale",
      type: "single",
      question: "___ protocol guarantees delivery",
      options: ["TCP", "UDP"],
      correct: 0,
      explanation: "Răspunsul corect: TCP."
    },
    {
      id: "net-283",
      chapter: "infrastructura",
      type: "single",
      question: "Which of the following is a public address?",
      options: ["10.1.1.1", "178.16.1.1", "192.168.1.1"],
      correct: 1,
      explanation: "Răspunsul corect: 178.16.1.1."
    },
    {
      id: "net-284",
      chapter: "protocoale",
      type: "single",
      question: "What ports are defined above 49,152?",
      options: ["Well-known ports", "Registered ports", "Dynamic ports", "Sliding ports"],
      correct: 2,
      explanation: "Răspunsul corect: Dynamic ports."
    },
    {
      id: "net-285",
      chapter: "infrastructura",
      type: "single",
      question: "A network is configured with a single IPv4 subnet. You want to deploy a computer running Windows Server 2016 to use as a file server. What two parameters are required? Choose two.",
      options: ["Default gateway", "Mac address", "IP address", "Primary DNS server", "Subnet mask"],
      correct: 2,
      explanation: "Răspunsul corect: IP address."
    },
    {
      id: "net-286",
      chapter: "protocoale",
      type: "single",
      question: "What is the IPv6 APIPA address?",
      options: ["FEC0:", "FE80:", "FFF:"],
      correct: 1,
      explanation: "Răspunsul corect: FE80:."
    },
    {
      id: "net-287",
      chapter: "protocoale",
      type: "single",
      question: "Which is a IPv4 to IPv6 tunneling protocol?",
      options: ["DHCP", "RDP", "Teredo"],
      correct: 2,
      explanation: "Răspunsul corect: Teredo."
    },
    {
      id: "net-288",
      chapter: "protocoale",
      type: "single",
      question: "Which port categories include inbound ports of HTTP, HTTPS, FTP, and DNS?",
      options: ["Well-known ports", "Registered ports", "Dynamic ports", "Private ports"],
      correct: 0,
      explanation: "Răspunsul corect: Well-known ports."
    },
    {
      id: "net-289",
      chapter: "protocoale",
      type: "single",
      question: "What information is contained in a client computer's HOSTS file?",
      options: ["NetBIOS name to IP address mappings", "A list of local DNS Servers", "FQDN to IP address mapping", "A list of Internet and root DNS servers"],
      correct: 2,
      explanation: "Răspunsul corect: FQDN to IP address mapping."
    },
    {
      id: "net-290",
      chapter: "protocoale",
      type: "single",
      question: "What is the first step in the DNS name resolution process?",
      options: ["The client checks the LMHOSTS file for an entry to the name", "The client checks its HOSTS file for an entry to the name", "The client checks to see if the name being resolved is its own name"],
      correct: 2,
      explanation: "Răspunsul corect: The client checks to see if the name being resolved is its own name."
    },
    {
      id: "net-291",
      chapter: "protocoale",
      type: "single",
      question: "What type of DNS resource record maps an IP address to a fully qualified domain name (FQDN)?",
      options: ["CNAME", "PTR", "AAAA", "A"],
      correct: 1,
      explanation: "Răspunsul corect: PTR."
    },
    {
      id: "net-292",
      chapter: "protocoale",
      type: "single",
      question: "_____ query is when the DNS server sends request to the root server?",
      options: ["Advanced", "Iterative", "Complex"],
      correct: 1,
      explanation: "Răspunsul corect: Iterative."
    },
    {
      id: "net-293",
      chapter: "protocoale",
      type: "multiple",
      question: "You need to configure DHCPServ with scopes to support both subnets. What needs to be done on the other subnet? Choose two.",
      options: ["Configure the router to support DHCP messages and BOOTP messages", "Deploy a DHCP relay in the other subnet", "Reconfigure both subnets with the same set of addresses", "Deploy a NAT Server"],
      correct: [1, 0],
      explanation: "Răspunsurile corecte: Deploy a DHCP relay in the other subnet; Configure the router to support DHCP messages and BOOTP messages."
    },
    {
      id: "net-294",
      chapter: "depanare-unelte",
      type: "single",
      question: "Your home computer is having problems accessing the Internet. You suspect that your Internet router's DHCP service is not functioning, so you check your computer's IP address. Which address indicates that your router's DHCP service is NOT functioning?",
      options: ["169.254.1.15", "172.16.1.15", "192.168.1.15", "10.19.1.15"],
      correct: 0,
      explanation: "Răspunsul corect: 169.254.1.15."
    },
    {
      id: "net-295",
      chapter: "protocoale",
      type: "single",
      question: "You deploy a server running Windows Server 2016 and install Remote Access Server. What do you need to configure to access the Internet and navigate multiple web sites?",
      options: ["DHCP", "NAT", "WAP", "VPN"],
      correct: 1,
      explanation: "Răspunsul corect: NAT."
    },
    {
      id: "net-296",
      chapter: "depanare-unelte",
      type: "multiple",
      question: "You are a network administrator at a small business. An employee is not able to access any websites. No other employees are having this problem. All computers are on the same intranet. You need to troubleshoot the problem. Which three actions should you complete? Choose three.",
      options: ["Ensure that the router has a connection to the internet", "Contact the internet service provider", "Check the employee’s network adapter to verify that it is working", "Check to see if the router is working properly", "Determine whether the employee’s computer has a valid IP address"],
      correct: [2, 4],
      explanation: "Răspunsurile corecte: Check the employee’s network adapter to verify that it is working; Determine whether the employee’s computer has a valid IP address."
    },
    {
      id: "net-297",
      chapter: "depanare-unelte",
      type: "single",
      question: "You are a network administrator at a small business. One morning at the start of business, you realize that no employees at the company can access external websites. However, all employees have the same intranet connected by a single router. You need to troubleshoot the problem. Which two actions should you complete? Choose two.",
      options: ["Check the router for proper physical connectivity", "Check that each computer has a valid IP address", "Contact the internet service provider", "Check for bad network adapters on individual computers"],
      correct: 0,
      explanation: "Răspunsul corect: Check the router for proper physical connectivity."
    },
    {
      id: "net-298",
      chapter: "depanare-unelte",
      type: "multiple",
      question: "A computer is connected to a switch through a network patch panel by using copper cable. The computer is getting lower-than-expected data speeds. Which two actions should you perform to identify the issue? Choose two.",
      options: ["Test the data speed of the cable", "Use an optical time-domain reflectometer (OTDR) to test the line", "Search for broken wires in the cable by using a cable tester", "Tone the line from Unit A to Unit B"],
      correct: [0, 2],
      explanation: "Răspunsurile corecte: Test the data speed of the cable; Search for broken wires in the cable by using a cable tester."
    },
    {
      id: "net-299",
      chapter: "infrastructura",
      type: "single",
      question: "The fiber network connection between Building A and Building B is 550 meters. There is attenuation on the line. Which tool should you use to test this?",
      options: ["Multimeter", "Time-domain reflectometer (TDR)", "Toner", "Optical time-domain reflectometer (OTDR)"],
      correct: 3,
      explanation: "Răspunsul corect: Optical time-domain reflectometer (OTDR)."
    },
    {
      id: "net-300",
      chapter: "depanare-unelte",
      type: "single",
      question: "Which command shows the public IP information for a certain domain name?",
      options: ["netstat", "nslookup", "tracert"],
      correct: 1,
      explanation: "Răspunsul corect: nslookup."
    },
    {
      id: "net-301",
      chapter: "depanare-unelte",
      type: "single",
      question: "On a Windows computer, which utility should you use to determine whether your Domain Name System (DNS) service is properly resolving fully qualified domain names (FQDNs) to IP addresses?",
      options: ["netstat", "nslookup", "nbtstat", "ipconfig"],
      correct: 1,
      explanation: "Răspunsul corect: nslookup."
    },
    {
      id: "net-302",
      chapter: "depanare-unelte",
      type: "single",
      question: "___ is the command you run to view your IP information on a Windows PC?",
      options: ["Ifconfig", "Netconfig", "ipconfig"],
      correct: 2,
      explanation: "Răspunsul corect: ipconfig."
    },
    {
      id: "net-303",
      chapter: "depanare-unelte",
      type: "single",
      question: "Which command should you use to force a client computer to renew its address lease from a DHCP server?",
      options: ["Pathping", "ipconfig", "netstat", "Netsh"],
      correct: 1,
      explanation: "Răspunsul corect: ipconfig."
    },
    {
      id: "net-304",
      chapter: "depanare-unelte",
      type: "single",
      question: "A user reports that she cannot connect to network resources from a computer on the company network. The user was able to connect to the network resources yesterday. You verify that the user's computer is properly physically connected to the network. You discover that the computer's IP address is 169.254.48.97. You need to restore access to network resources. What should you do next?",
      options: ["Flush the cache on the DNS server", "Reset the user's password on the server", "Check your router's current routing tables", "Verify that the DHCP service is available"],
      correct: 3,
      explanation: "Răspunsul corect: Verify that the DHCP service is available."
    },
    {
      id: "net-305",
      chapter: "depanare-unelte",
      type: "single",
      question: "Which command shows all ports and incoming connects?",
      options: ["netstat", "nslookup", "tracert"],
      correct: 0,
      explanation: "Răspunsul corect: netstat."
    },
    {
      id: "net-306",
      chapter: "depanare-unelte",
      type: "single",
      question: "You are setting up a network computer game. You need to open up ports on your firewall so your friends can join the network. Which command displays the ports that your computer is listening for?",
      options: ["nslookup", "nbtstat", "ping", "netstat"],
      correct: 3,
      explanation: "Răspunsul corect: netstat."
    },
    {
      id: "net-307",
      chapter: "depanare-unelte",
      type: "single",
      question: "Which command shows the hops or routers along a certain route?",
      options: ["netstat", "nslookup", "tracert"],
      correct: 2,
      explanation: "Răspunsul corect: tracert."
    }
  ]
};
