/* ITS PREP — integrated question bank; original IDs preserved. */
window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.networking = {
  "id": "networking",
  "name": "Networking",
  "shortLabel": "NET",
  "accent": "#E8A33D",
  "description": "Concepte de rețea, infrastructură, echipamente, protocoale și depanare în medii cu fir și wireless.",
  "CHAPTERS": [
    {
      "id": "concepte-retea",
      "name": "Concepte de rețea"
    },
    {
      "id": "infrastructura",
      "name": "Infrastructura de rețea"
    },
    {
      "id": "echipamente",
      "name": "Echipamente de rețea"
    },
    {
      "id": "protocoale",
      "name": "Protocoale și servicii"
    },
    {
      "id": "depanare-unelte",
      "name": "Depanare și instrumente"
    }
  ],
  "QUESTIONS": [
    {
      "id": "net-001",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "Networking Fundamentals 1.1 includes which topics? Choose two.",
      "options": [
        "Internet, intranet, extranet and client-server concepts",
        "Only graphic design and video editing",
        "Transmission types such as unicast, multicast and broadcast",
        "Only Microsoft Word formatting"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Răspunsurile corecte: Internet, intranet, extranet and client-server concepts; Transmission types such as unicast, multicast and broadcast."
    },
    {
      "id": "net-002",
      "chapter": "protocoale",
      "type": "single",
      "question": "An IPv4 LAN uses private addresses and accesses the public Internet through a gateway with a public IPv4 address. Which gateway function translates the private source addresses?",
      "options": [
        "Network address translation (NAT)",
        "Dynamic Host Configuration Protocol (DHCP)",
        "Network Access Protection (NAP)",
        "Dynamic domain name system (DDNS)"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Network address translation (NAT)."
    },
    {
      "id": "net-003",
      "chapter": "echipamente",
      "type": "single",
      "question": "A Media Access Control (MAC) address identifies a/an:",
      "options": [
        "UPnP device",
        "Local broadcast domain",
        "Network interface card (NIC)",
        "Local area network (LAN)"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Network interface card (NIC)."
    },
    {
      "id": "net-004",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Two companies want to share data by using the Internet. Which type of network provides the solution?",
      "options": [
        "Ethernet",
        "Intranet",
        "Extranet",
        "Perimeter"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Extranet."
    },
    {
      "id": "net-005",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which technology can you use to extend an internal network across shared or public networks?",
      "options": [
        "VLAN",
        "Microsoft ASP.NET",
        "Microsoft .NET Framework",
        "VPN"
      ],
      "correct": 3,
      "explanation": "A VPN protects a private connection across a shared or public network, normally with authentication and encryption."
    },
    {
      "id": "net-006",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "One purpose of a perimeter network is to:",
      "options": [
        "Make resources available to the intranet",
        "Link campus area networks (CANs)",
        "Link local area networks (LANs)",
        "Make resources available to the Internet"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Make resources available to the Internet."
    },
    {
      "id": "net-007",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A private network that allows members of an organization to exchange data is an:",
      "options": [
        "Extranet",
        "Ethernet",
        "Intranet",
        "Internet"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Intranet."
    },
    {
      "id": "net-008",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each network type to its corresponding definition.",
      "dragItems": [
        {
          "id": "a",
          "text": "Extranet"
        },
        {
          "id": "b",
          "text": "Intranet"
        },
        {
          "id": "c",
          "text": "Internet"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Controlled access for business/educational purposes",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Access only within an organization",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "System of interconnected networks",
          "correctItemId": "c"
        }
      ],
      "explanation": "Asocierile corecte: Extranet → Controlled access for business/educational purposes; Intranet → Access only within an organization; Internet → System of interconnected networks."
    },
    {
      "id": "net-009",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What technology takes data, breaks it into packets, and sends it over a network, sometimes using different routes for each packet?",
      "options": [
        "Circuit switching",
        "Connection switching",
        "Packet switching",
        "Network switching"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Packet switching."
    },
    {
      "id": "net-010",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What name does Windows Server 2008 R2 use for terminal service?",
      "options": [
        "MS telnet server",
        "MS primary services",
        "MS thin server",
        "Remote Desktop Service"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Remote Desktop Service."
    },
    {
      "id": "net-011",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What would you use to create VPN tunnels so users can connect to your internal network while at home using Windows Server 2008 R2?",
      "options": [
        "Microsoft RAS",
        "Microsoft RRAS",
        "Microsoft RDC",
        "Microsoft VPN Server"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Microsoft RRAS."
    },
    {
      "id": "net-012",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "VPNs are implemented to provide:",
      "options": [
        "A secure connection within a private network",
        "A secure connection through public networks",
        "Additional encryption by using IPSec",
        "Additional security for selected computers"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: A secure connection through public networks."
    },
    {
      "id": "net-013",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A VPN is a/an:",
      "options": [
        "Encrypted connection across the Internet",
        "Virtual network within your LAN",
        "Communication tunnel between VLANs",
        "Personal network for your use only"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Encrypted connection across the Internet."
    },
    {
      "id": "net-014",
      "chapter": "echipamente",
      "type": "single",
      "question": "“A/an virtual private network (VPN)” protects a network's perimeter by monitoring traffic as it enters and leaves. What is correct instead?",
      "options": [
        "Extranet",
        "Firewall",
        "Intranet",
        "No change is needed"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Firewall."
    },
    {
      "id": "net-015",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each VPN connection type to its corresponding definition.",
      "dragItems": [
        {
          "id": "a",
          "text": "SSL VPN"
        },
        {
          "id": "b",
          "text": "Site-to-Site VPN"
        },
        {
          "id": "c",
          "text": "L2TP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Connects a remote user from the Internet",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Connects two private networks",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Creates an unencrypted connection (needs IPsec for encryption)",
          "correctItemId": "c"
        }
      ],
      "explanation": "An office-to-office VPN is site-to-site. A remote user connecting to a company gateway is host-to-site."
    },
    {
      "id": "net-016",
      "chapter": "protocoale",
      "type": "single",
      "question": "What port does Remote Desktop Services use?",
      "options": [
        "443",
        "501",
        "389",
        "3389"
      ],
      "correct": 3,
      "explanation": "Remote Desktop Protocol normally uses port 3389."
    },
    {
      "id": "net-017",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What allows a user to connect to a corporate network using the Internet?",
      "options": [
        "VPN",
        "VPC",
        "PPTP",
        "IPSec"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: VPN."
    },
    {
      "id": "net-018",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which listed legacy, unencrypted command connects to a remote Telnet service to execute commands?",
      "options": [
        "Ftp",
        "nslookup",
        "telnet",
        "nbtstat"
      ],
      "correct": 2,
      "explanation": "Telnet provides an unencrypted remote terminal. SSH is preferred for secure administration."
    },
    {
      "id": "net-019",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A network that separates an organization's private network from a public network is a/an:",
      "options": [
        "Firewall",
        "Extranet",
        "Perimeter",
        "Internet"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Perimeter."
    },
    {
      "id": "net-020",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "In local area network (LAN) topologies, the primary media access methods are: Choose two.",
      "options": [
        "Contention",
        "Negotiation",
        "Kerberos",
        "Token passing"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Răspunsurile corecte: Contention; Token passing."
    },
    {
      "id": "net-021",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In a traditional hub-based Ethernet physical star, what is the central repeating device called?",
      "options": [
        "Bridge",
        "Server",
        "Segmenter",
        "Hub"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Hub."
    },
    {
      "id": "net-022",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "The topology of a local area network (LAN) is defined by the:",
      "options": [
        "Number of devices to connect",
        "Physical and logical characteristics",
        "Distance between workstations",
        "Type of cable being used"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Physical and logical characteristics."
    },
    {
      "id": "net-023",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "On an IPv4 LAN, which kind of address must a host have to send IPv4 packets?",
      "options": [
        "Network account",
        "Table of all network nodes",
        "Host address",
        "Resource to share"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Host address."
    },
    {
      "id": "net-024",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which type of port is used to support VLAN traffic between two switches?",
      "options": [
        "Virtual port",
        "WAN port",
        "Trunk port",
        "LAN port"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Trunk port."
    },
    {
      "id": "net-025",
      "chapter": "infrastructura",
      "type": "single",
      "question": "One reason to incorporate VLANs in a network is to:",
      "options": [
        "Increase the number of available IP addresses",
        "Increase the number of available MAC addresses",
        "Reduce the number of broadcast domains",
        "Reduce the number of nodes in a broadcast domain"
      ],
      "correct": 3,
      "explanation": "VLANs group switch ports into logical broadcast domains independently of physical location, provided the switching infrastructure supports the VLAN."
    },
    {
      "id": "net-026",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each network topology to its characteristic.",
      "dragItems": [
        {
          "id": "a",
          "text": "Star"
        },
        {
          "id": "b",
          "text": "Ring"
        },
        {
          "id": "c",
          "text": "Mesh"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Has a central device",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Each node connects to two other nodes",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Each computer connects to every other computer",
          "correctItemId": "c"
        }
      ],
      "explanation": "Asocierile corecte: Star → Has a central device; Ring → Each node connects to two other nodes; Mesh → Each computer connects to every other computer."
    },
    {
      "id": "net-027",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "To set lower security settings in Internet Explorer for an extranet site, add the site's URL to the “Local Intranet” zone. What is correct instead?",
      "options": [
        "Internet",
        "Trusted Sites",
        "Extranet Sites",
        "No change is needed"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Trusted Sites."
    },
    {
      "id": "net-028",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which Windows 7 console provides connection security rules for configuring IPsec?",
      "options": [
        "Windows Firewall with Advanced Security snap-in",
        "LAN adapter properties",
        "Remote Access snap-in",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Windows Firewall with Advanced Security provides connection security rules. The older IPsec policy snap-in also manages legacy IPsec policies; it is not inherently incorrect."
    },
    {
      "id": "net-029",
      "chapter": "echipamente",
      "type": "single",
      "question": "You need to divide a network into three subnets. Which device should you use?",
      "options": [
        "Hub",
        "Bridge",
        "Router",
        "Segmenter"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Router."
    },
    {
      "id": "net-030",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "A coffee shop isolates public-facing and guest resources from its trusted payment and staff LAN. Which TWO listed resources belong on isolated public/guest segments rather than the trusted LAN?",
      "options": [
        "Network printer",
        "Web server",
        "File server",
        "Wi-Fi network",
        "Point of sale terminals"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "A public web server and guest Wi-Fi should be isolated from trusted systems. They need not share one subnet or one DMZ."
    },
    {
      "id": "net-031",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "A node within a local area network (LAN) must have which two of the following? Choose two.",
      "options": [
        "Username and password",
        "Share name",
        "NIC",
        "IP address",
        "Table of all network nodes"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Răspunsurile corecte: NIC; IP address."
    },
    {
      "id": "net-032",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are two advantages of using star topology rather than ring topology in a computer lab workgroup? Choose two.",
      "options": [
        "Failure of a central device does not bring down the entire network",
        "A central connection point allows flexibility and scalability",
        "Data travels on redundant paths",
        "Failure of one endpoint cable normally affects only that endpoint"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "A central connection point eases expansion. A failed spoke cable does not break other spokes; failure of the central device can affect the entire star."
    },
    {
      "id": "net-033",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are three characteristics of Ethernet network topology? Choose three.",
      "options": [
        "It uses tokens to avoid collisions",
        "It can use coaxial, twisted pair, and fiber optic media",
        "It comprises the largest share of networks in place today",
        "It is a non-switching protocol",
        "It can negotiate different transmission speeds"
      ],
      "correct": [
        1,
        2,
        4
      ],
      "explanation": "Răspunsurile corecte: It can use coaxial, twisted pair, and fiber optic media; It comprises the largest share of networks in place today; It can negotiate different transmission speeds."
    },
    {
      "id": "net-034",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are two characteristics of the CSMA/CD access method? Choose two.",
      "options": [
        "It checks to see if a collision has been detected",
        "It does a round robin search for requests",
        "It signals its intent to transmit",
        "It waits until the transmission medium is idle"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Răspunsurile corecte: It checks to see if a collision has been detected; It waits until the transmission medium is idle."
    },
    {
      "id": "net-035",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which statement about certificate-based enterprise wireless authentication is correct?",
      "options": [
        "802.1X with EAP-TLS uses certificates for mutual authentication",
        "Every 802.1X method requires a client certificate",
        "WEP requires client certificates",
        "WPA-PSK requires client certificates"
      ],
      "correct": 0,
      "explanation": "802.1X is an access-control framework. EAP-TLS uses server and client certificates; other EAP methods have different requirements. Wi-Fi encryption is provided by the negotiated security suite."
    },
    {
      "id": "net-036",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Perimeter network statements. Which variant is correct?",
      "options": [
        "A DMZ automatically allows all traffic to the internal LAN",
        "A DMZ commonly hosts public-facing servers; access between it and the LAN is controlled by firewall rules",
        "The internal LAN can never access a DMZ",
        "A DMZ is a synonym for the trusted internal LAN"
      ],
      "correct": 1,
      "explanation": "A DMZ isolates exposed services from the trusted LAN. Allowed traffic depends on firewall policy, not an absolute ban on LAN access."
    },
    {
      "id": "net-037",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In a legacy Windows security-zone configuration, Contoso policy assigns its private hr.contoso.com site to Local Intranet and its vetted external partner sales.northwindtrades.com to Trusted Sites. Which pair is correct, in sales/HR order?",
      "options": [
        "Internet; Internet",
        "Trusted Sites; Local Intranet",
        "Restricted Sites; Internet",
        "Local Intranet; Restricted Sites"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Trusted Sites; Local Intranet."
    },
    {
      "id": "net-038",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which device terminates a digital leased WAN line such as T1 and interfaces it with a router?",
      "options": [
        "Analog modem",
        "Telco incoming router",
        "Packet switcher",
        "CSU/DSU"
      ],
      "correct": 3,
      "explanation": "A CSU/DSU interfaces a router with a digital leased WAN circuit; it is not a modem for an ordinary LAN."
    },
    {
      "id": "net-039",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which type of network is most vulnerable to intrusion?",
      "options": [
        "Dial-up",
        "Wireless",
        "Broadband",
        "Leased line"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Wireless."
    },
    {
      "id": "net-040",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which type of network covers the broadest area?",
      "options": [
        "WAN",
        "CAN",
        "LAN",
        "PAN"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: WAN."
    },
    {
      "id": "net-041",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following is a Layer 2 WAN protocol?",
      "options": [
        "Point-to-Point Protocol (PPP)",
        "Simple Network Management Protocol (SNMP)",
        "Transmission Control Protocol (TCP)",
        "Internet Protocol (IP)"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Point-to-Point Protocol (PPP)."
    },
    {
      "id": "net-042",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "Which two of the following are connectivity options for wide area networks (WANs)? Choose two.",
      "options": [
        "Token ring",
        "Ethernet",
        "Dial-up",
        "Leased line"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Răspunsurile corecte: Dial-up; Leased line."
    },
    {
      "id": "net-043",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the bit rate for a North American T3 circuit?",
      "options": [
        "6.312 Mbit/s",
        "44.736 Mbit/s",
        "274.176 Mbit/s",
        "400.352 Mbit/s"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 44.736 Mbit/s."
    },
    {
      "id": "net-044",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A university has network links between various locations. Where would a T3 connection be appropriate?",
      "options": [
        "Server to network in the main campus server room",
        "Main campus to a large satellite campus",
        "Computer lab PC to lab printer",
        "Library laptop PC to Internet"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Main campus to a large satellite campus."
    },
    {
      "id": "net-045",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two features of a Windows Server 2008 R2 server should you install to use that server as a software router? Choose two.",
      "options": [
        "Network Policy and Access Services",
        "Routing and Remote Access Services",
        "Remote Administration",
        "DirectAccess"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Răspunsurile corecte: Network Policy and Access Services; Routing and Remote Access Services."
    },
    {
      "id": "net-046",
      "chapter": "infrastructura",
      "type": "single",
      "question": "In a network diagram, where is a T3 connection most appropriate?",
      "options": [
        "Between two computers in the same lab",
        "Between a local PC and a printer",
        "Between a WAN/telecom link and the organization network/perimeter router",
        "Between a keyboard and a workstation"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Between a WAN/telecom link and the organization network/perimeter router."
    },
    {
      "id": "net-047",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the primary disadvantage of X.25?",
      "options": [
        "Digital circuit",
        "Small data payloads",
        "Circuit switching",
        "Slow speeds"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Slow speeds."
    },
    {
      "id": "net-048",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The _____________ is the largest WAN in the world.",
      "options": [
        "Internet",
        "Intranet",
        "WWW",
        "MSDN"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Internet."
    },
    {
      "id": "net-049",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which historical Web term describes interactive websites with user-generated content, such as blogs and wikis?",
      "options": [
        "1.0",
        "1.1",
        "2.0",
        "3.0"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: 2.0."
    },
    {
      "id": "net-050",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is a logical connection through a packet-switched network, rather than a dedicated end-to-end physical wire, called?",
      "options": [
        "Virtual circuit",
        "Emulated circuit",
        "Joined circuit",
        "Multitasked circuit"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Virtual circuit."
    },
    {
      "id": "net-051",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What replaced X.25?",
      "options": [
        "Frame relay",
        "ATM",
        "ISDN BRI",
        "DSL"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Frame relay."
    },
    {
      "id": "net-052",
      "chapter": "infrastructura",
      "type": "single",
      "question": "At what speed does a T3 line run?",
      "options": [
        "1.5 Mbps",
        "4.5 Mbps",
        "44.7 Mbps",
        "128 Mbps"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: 44.7 Mbps."
    },
    {
      "id": "net-053",
      "chapter": "infrastructura",
      "type": "single",
      "question": "In Europe, what circuit would be similar to the T1 found in the United States?",
      "options": [
        "E1",
        "J1",
        "T2",
        "F1"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: E1."
    },
    {
      "id": "net-054",
      "chapter": "infrastructura",
      "type": "single",
      "question": "How many B channels does an ISDN PRI support? Assume North American T1-based ISDN PRI.",
      "options": [
        "2",
        "8",
        "23",
        "48"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: 23."
    },
    {
      "id": "net-055",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What technology uses wires from the telephone company to provide broadband Internet connection?",
      "options": [
        "Cable",
        "DSL",
        "FDDI",
        "Frame relay"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: DSL."
    },
    {
      "id": "net-056",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which term describes the committed data rate specified in a Frame Relay service agreement?",
      "options": [
        "Committed Information Rate (CIR)",
        "Pivotal information route",
        "Next hop policy route",
        "Frame x frame route"
      ],
      "correct": 0,
      "explanation": "CIR is the committed information rate, normally measured in bits per second; it is not a route."
    },
    {
      "id": "net-057",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What speed does a T1 run at?",
      "options": [
        "1.544 Mbps",
        "2.889 Mbps",
        "3.101 Gbps",
        "2.54 Mbps"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 1.544 Mbps."
    },
    {
      "id": "net-058",
      "chapter": "infrastructura",
      "type": "single",
      "question": "How fast is a DS0 circuit?",
      "options": [
        "32 Kbps",
        "64 Kbps",
        "128 Kbps",
        "1024 Kbps"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 64 Kbps."
    },
    {
      "id": "net-059",
      "chapter": "infrastructura",
      "type": "single",
      "question": "X.25 and frame relay are examples of what type of WAN technology?",
      "options": [
        "Circuit switching",
        "Connection switching",
        "Packet switching",
        "Network switching"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Packet switching."
    },
    {
      "id": "net-060",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What part of the network is the point where the administrator's responsibility ends and the telecommunications provider's responsibility begins?",
      "options": [
        "Last mile",
        "Demarc",
        "Router array",
        "PAD interface"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Demarc."
    },
    {
      "id": "net-061",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which factor has the biggest impact on data transmission speed in a wireless network? Compare theoretical maximum rates of the listed standards, assuming otherwise equivalent conditions.",
      "options": [
        "The access method used for the network",
        "The transmission standard of the equipment used",
        "The use of strong encryption",
        "The transmission wattage rating used on the NIC"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: The transmission standard of the equipment used."
    },
    {
      "id": "net-062",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which of the following uses a tunneling protocol?",
      "options": [
        "Internet",
        "VPN",
        "Extranet",
        "VLAN"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: VPN."
    },
    {
      "id": "net-063",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "Which two are published IEEE 802.11 wireless transmission standards? Choose two.",
      "options": [
        "802.11f",
        "802.11g",
        "802.11k",
        "802.11m",
        "802.11n"
      ],
      "correct": [
        1,
        4
      ],
      "explanation": "Răspunsurile corecte: 802.11g; 802.11n."
    },
    {
      "id": "net-064",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What happens when an 802.11b node starts broadcasting within the range of an 802.11g access point?",
      "options": [
        "The access point will transmit, but the node will be unable to receive",
        "A connection will be established",
        "Both will be unable to transmit",
        "The node will transmit, but the access point will be unable to receive"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: A connection will be established."
    },
    {
      "id": "net-065",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which technology provides the highest bit rate?",
      "options": [
        "T1",
        "E1",
        "DS3",
        "ISDN"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: DS3."
    },
    {
      "id": "net-066",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which wireless authentication method provides the highest level of security? Select the strongest of the listed legacy choices, not the newest Wi-Fi security standard.",
      "options": [
        "Wired Equivalency Privacy (WEP)",
        "IEEE 802.11n",
        "Wi-Fi Protected Access (WPA)",
        "IEEE 802.11a"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Wi-Fi Protected Access (WPA)."
    },
    {
      "id": "net-067",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the maximum nominal PHY data rate of IEEE 802.11g?",
      "options": [
        "2.4 GHz",
        "54 GHz",
        "2.4 Mbps",
        "54 Mbps"
      ],
      "correct": 3,
      "explanation": "802.11g has a maximum nominal PHY rate of 54 Mbps. Actual application throughput is lower."
    },
    {
      "id": "net-068",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each 802.11 standard to its characteristics.",
      "dragItems": [
        {
          "id": "a",
          "text": "802.11a"
        },
        {
          "id": "b",
          "text": "802.11b"
        },
        {
          "id": "c",
          "text": "802.11g"
        },
        {
          "id": "d",
          "text": "802.11n"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "5 GHz / 54 Mbps",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "2.4 GHz / 11 Mbps",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "2.4 GHz / 54 Mbps",
          "correctItemId": "c"
        },
        {
          "id": "z4",
          "label": "2.4–5 GHz / 65–600 Mbps",
          "correctItemId": "d"
        }
      ],
      "explanation": "Asocierile corecte: 802.11a → 5 GHz / 54 Mbps; 802.11b → 2.4 GHz / 11 Mbps; 802.11g → 2.4 GHz / 54 Mbps; 802.11n → 2.4–5 GHz / 65–600 Mbps."
    },
    {
      "id": "net-069",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Security is a concern on wireless networks due to:",
      "options": [
        "The radio broadcast access method",
        "Spread spectrum issues",
        "Frequency modulation issues",
        "The potential for cross-talk"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: The radio broadcast access method."
    },
    {
      "id": "net-070",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The IEEE standards 802.11a, b, g, and n are collectively known as what?",
      "options": [
        "WiMAX",
        "Bluetooth",
        "WiFi",
        "Mobile ad hoc networks"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: WiFi."
    },
    {
      "id": "net-071",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which listed IEEE Wi-Fi standard introduced MIMO and can operate in the 2.4 GHz or 5 GHz band?",
      "options": [
        "802.11a",
        "802.11b",
        "802.11g",
        "802.11n"
      ],
      "correct": 3,
      "explanation": "802.11n introduced MIMO. It does not require every device to support both bands or exactly two antennas."
    },
    {
      "id": "net-072",
      "chapter": "infrastructura",
      "type": "single",
      "question": "“WEP” wireless encryption is the most susceptible to interception and decryption. What is the correct answer?",
      "options": [
        "WPA-AES",
        "WPA2",
        "WPA-PSK",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "WEP has fundamental cryptographic weaknesses and is the weakest listed wireless security scheme. It should not be used for modern deployments."
    },
    {
      "id": "net-073",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which wireless communication problem is caused by electromagnetic waves?",
      "options": [
        "Fading",
        "Attenuation",
        "Interference",
        "Diffraction"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Interference."
    },
    {
      "id": "net-074",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which access-control framework supports EAP-TLS certificate authentication in an enterprise Wi-Fi network?",
      "options": [
        "802.1X",
        "WPA2-PSK",
        "WPA-PSK",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "802.1X can use EAP-TLS. Certificates are not a WEP authentication feature, and not every 802.1X method requires client certificates."
    },
    {
      "id": "net-075",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Wireless bridge statements. Which variant is correct?",
      "options": [
        "Can connect Ethernet LANs wirelessly: True; inherently boosts an AP transmitter power: False; always works only in pairs: False",
        "All statements are True",
        "Cannot connect Ethernet LANs; always boosts AP transmitter power",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "A suitable wireless bridge can connect network segments. It must have radios or interfaces compatible with the different frequency bands and standards."
    },
    {
      "id": "net-076",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of the following is not a characteristic of 802.11n?",
      "options": [
        "Frame aggregation",
        "Channel bonding",
        "RFI protection",
        "MIMO"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: RFI protection."
    },
    {
      "id": "net-077",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which of the following determines the media access method used in a network?",
      "options": [
        "Number of hosts connected",
        "Number of domain servers",
        "Maximum speed of the media",
        "Topology and protocols"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Topology and protocols."
    },
    {
      "id": "net-078",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In which physical network topology is each computer connected to a central point?",
      "options": [
        "Star",
        "Mesh",
        "Ring",
        "Bus"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Star."
    },
    {
      "id": "net-079",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A characteristic of the mesh topology is that it:",
      "options": [
        "Uses a central hub",
        "Cannot use wired connections",
        "Uses redundant paths",
        "Cannot use wireless connections"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Uses redundant paths."
    },
    {
      "id": "net-080",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are two characteristics of a full mesh network topology? Choose two.",
      "options": [
        "It is fault tolerant because of redundant connections",
        "Every node connects to every other node",
        "It works best for a large number of nodes",
        "It requires less cabling than star or ring"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Redundant paths make mesh networks resilient. A failed node or link can be bypassed when an alternate usable path exists."
    },
    {
      "id": "net-081",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What speed does FDDI use?",
      "options": [
        "10 Mbps",
        "44 Mbps",
        "54 Mbps",
        "100 Mbps"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: 100 Mbps."
    },
    {
      "id": "net-082",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What topology does FDDI use?",
      "options": [
        "Bus",
        "Star",
        "Ring",
        "Mesh"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Ring."
    },
    {
      "id": "net-083",
      "chapter": "echipamente",
      "type": "single",
      "question": "A network device that associates a MAC address with a port is a:",
      "options": [
        "DSL modem",
        "Hub",
        "Router",
        "Switch"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Switch."
    },
    {
      "id": "net-084",
      "chapter": "echipamente",
      "type": "single",
      "question": "A Layer 2 device that connects multiple computers within a network is a:",
      "options": [
        "Repeater",
        "Switch",
        "Router",
        "Packet"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Switch."
    },
    {
      "id": "net-085",
      "chapter": "echipamente",
      "type": "single",
      "question": "In addition to switching, multilayer switches also:",
      "options": [
        "Provide Layer 3 routing functions",
        "Interface only with CAT3",
        "Support only 10 MB LAN ports",
        "Operate only by Layer 1 and 2 protocols"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Provide Layer 3 routing functions."
    },
    {
      "id": "net-086",
      "chapter": "echipamente",
      "type": "single",
      "question": "One reason to replace an unmanaged switch with a managed switch is to:",
      "options": [
        "Manage routing tables",
        "Support multiple VLANs",
        "Reduce collision domains",
        "Route between networks"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Support multiple VLANs."
    },
    {
      "id": "net-087",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which device uses a routing table to associate destination IP prefixes with next hops and outgoing interfaces?",
      "options": [
        "Switch",
        "Router",
        "Hub",
        "DSL modem"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Router."
    },
    {
      "id": "net-088",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which network device interconnects computers in a workgroup, can be remotely configured, and provides the best throughput?",
      "options": [
        "Unmanaged switch",
        "Hub",
        "Router",
        "Managed switch"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Managed switch."
    },
    {
      "id": "net-089",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "What are two differences between switches and hubs? Choose two.",
      "options": [
        "Switches are slower than hubs",
        "Switches send data to all computers for efficiency",
        "Switches can send and receive data at the same time",
        "Switches identify the intended destination of received data"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Răspunsurile corecte: Switches can send and receive data at the same time; Switches identify the intended destination of received data."
    },
    {
      "id": "net-090",
      "chapter": "echipamente",
      "type": "single",
      "question": "Switch statements. Which variant is correct? Assume a known unicast destination MAC address, not an unknown-unicast or broadcast frame.",
      "options": [
        "Unicast to one destination port – True; floods unknown destination – True; broadcasts only to uplink – False",
        "All statements are True",
        "Unicast to all ports – True; floods unknown destination – False; broadcasts only to uplink – True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Unicast to one destination port – True; floods unknown destination – True; broadcasts only to uplink – False."
    },
    {
      "id": "net-091",
      "chapter": "echipamente",
      "type": "single",
      "question": "One advantage of dynamic routing is that it:",
      "options": [
        "Automatically maintains routing tables",
        "Limits traffic derived from routing protocols",
        "Reduces broadcast traffic",
        "Automatically enables DHCP"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Automatically maintains routing tables."
    },
    {
      "id": "net-092",
      "chapter": "echipamente",
      "type": "single",
      "question": "A router's static route is set by the:",
      "options": [
        "Adjacent network",
        "Next upstream router",
        "Network administrator",
        "Routing protocol"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Network administrator."
    },
    {
      "id": "net-093",
      "chapter": "protocoale",
      "type": "single",
      "question": "The query protocol used to locate resources on a network is:",
      "options": [
        "UDP",
        "LDAP",
        "Tracert",
        "Telnet"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: LDAP."
    },
    {
      "id": "net-094",
      "chapter": "echipamente",
      "type": "single",
      "question": "The function of a router is to:",
      "options": [
        "Provide IP subnet masks for hosts",
        "Forward traffic to other networks",
        "Broadcast routing tables to clients",
        "Store tables for name resolution"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Forward traffic to other networks."
    },
    {
      "id": "net-095",
      "chapter": "echipamente",
      "type": "single",
      "question": "If a router cannot determine the next hop for a packet, the router will: Assume a default route is configured and no more-specific matching route exists.",
      "options": [
        "Forward the packet to the default route",
        "Send the packet back to the source",
        "Broadcast the packet",
        "Store the packet in memory"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Forward the packet to the default route."
    },
    {
      "id": "net-096",
      "chapter": "protocoale",
      "type": "single",
      "question": "If a router separates a DHCP server from its clients, the clients will: Assume no DHCP relay is configured on the router.",
      "options": [
        "Immediately lose connectivity to all segments",
        "Be unable to obtain their leases from the server",
        "Immediately lose connectivity to the local segment",
        "Receive an immediate renewal"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Be unable to obtain their leases from the server."
    },
    {
      "id": "net-097",
      "chapter": "protocoale",
      "type": "single",
      "question": "IP routers on the Internet forward traffic using the IP layer of the TCP/IP suite. Is TCP/IP the correct suite in this statement?",
      "options": [
        "HTTP",
        "FTP",
        "SNMP",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: No change is needed."
    },
    {
      "id": "net-098",
      "chapter": "echipamente",
      "type": "single",
      "question": "“Dynamic routing” is fault tolerant. What is correct? Assume an alternate usable path exists and the routing protocol converges after failure.",
      "options": [
        "Static routing",
        "Default route",
        "Least cost routing",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: No change is needed."
    },
    {
      "id": "net-099",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is an example of a Layer 3 device that connects multiple computers and networks?",
      "options": [
        "Packet",
        "Repeater",
        "Switch",
        "Router"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Router."
    },
    {
      "id": "net-100",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which metric does Routing Information Protocol (RIP) use to determine the least costly route?",
      "options": [
        "Delay",
        "Host ID",
        "Hop count",
        "Interface"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Hop count."
    },
    {
      "id": "net-101",
      "chapter": "protocoale",
      "type": "single",
      "question": "Quality of Service (QoS) statements. Which variant is correct?",
      "options": [
        "Defines priority traffic – True; controls bandwidth – True; assigns protocols dynamically – False",
        "All statements are True",
        "Defines priority – False; controls bandwidth – False; assigns protocols dynamically – True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "Quality of Service classifies and prioritizes time-sensitive traffic such as video conferencing during congestion."
    },
    {
      "id": "net-102",
      "chapter": "echipamente",
      "type": "single",
      "question": "________ is a route that must be manually defined on each router.",
      "options": [
        "Static",
        "Dynamic",
        "Persistent",
        "Global"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Static."
    },
    {
      "id": "net-103",
      "chapter": "echipamente",
      "type": "single",
      "question": "What feature within Windows allows the server to act as a router?",
      "options": [
        "IPSec",
        "DHCP",
        "IP forwarding",
        "RDC"
      ],
      "correct": 2,
      "explanation": "The Windows Server Remote Access role includes Routing and Remote Access functionality, which can provide software routing."
    },
    {
      "id": "net-104",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which type of serial WAN communication uses a clock signal to synchronize sender and receiver?",
      "options": [
        "Static route",
        "Dynamic route",
        "PPTP route",
        "Synchronous serial communication"
      ],
      "correct": 3,
      "explanation": "Synchronous serial links use clocking. Point-to-point describes a topology and does not itself imply a particular clocking method."
    },
    {
      "id": "net-105",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which classic distance-vector routing protocol uses hop count as its metric?",
      "options": [
        "RIP",
        "OSPF",
        "BGP",
        "IGMP"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: RIP."
    },
    {
      "id": "net-106",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which link-state routing protocol computes shortest paths using Dijkstra’s algorithm?",
      "options": [
        "RIP",
        "OSPF",
        "BGP",
        "IGMP"
      ],
      "correct": 1,
      "explanation": "OSPF is a link-state routing protocol. RIP is a distance-vector protocol; NAT is not a routing protocol."
    },
    {
      "id": "net-107",
      "chapter": "echipamente",
      "type": "single",
      "question": "When a packet traverses a network, each router is a ____________.",
      "options": [
        "Jump point",
        "CSU/DSU",
        "Jump switch",
        "Hop"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Hop."
    },
    {
      "id": "net-108",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A cable that meets the 1000BaseT standard has a maximum length of:",
      "options": [
        "100 m",
        "250 m",
        "500 m",
        "1,000 m"
      ],
      "correct": 0,
      "explanation": "The maximum standard 1000BASE-T copper channel length is 100 meters, including patch leads."
    },
    {
      "id": "net-109",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Attenuation in a wireless network signal is a result of:",
      "options": [
        "Number of wireless nodes connected",
        "Distance from the access point",
        "Interference from cellular phones",
        "Encryption of the signal"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Distance from the access point."
    },
    {
      "id": "net-110",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the maximum cable length for a single Cat5 UTP cable run?",
      "options": [
        "285 feet / 86.87 meters",
        "328 feet / 99.97 meters",
        "432 feet / 131.67 meters",
        "600 feet / 182.88 meters"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 328 feet / 99.97 meters."
    },
    {
      "id": "net-111",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which cable type transmits data the greatest distance?",
      "options": [
        "Multi-mode fiber",
        "Single-mode fiber",
        "Cat5e",
        "Cat6"
      ],
      "correct": 1,
      "explanation": "Single-mode fiber supports the longest typical link distances among these media because it has much lower modal dispersion than multimode fiber."
    },
    {
      "id": "net-112",
      "chapter": "infrastructura",
      "type": "single",
      "question": "To directly connect the Ethernet NICs of two computers, you should use a: Assume the interfaces do not support Auto MDI-X.",
      "options": [
        "Crossover cable",
        "Straight cable",
        "Rollover cable",
        "Coaxial cable"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Crossover cable."
    },
    {
      "id": "net-113",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the minimum cabling requirement for a 100BaseTX network?",
      "options": [
        "Category 3 UTP cable",
        "Category 5 UTP cable",
        "Category 6 UTP cable",
        "Multimode fiber cable"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Category 5 UTP cable."
    },
    {
      "id": "net-114",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which feature of Category 5e STP cable reduces external interference?",
      "options": [
        "Crosstalk",
        "Shielding",
        "Length",
        "Twisting"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Shielding."
    },
    {
      "id": "net-115",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A home office cable needs to support at least 300 Mbps. What is the least expensive option that meets this requirement?",
      "options": [
        "Cat3",
        "Cat5",
        "Cat5e",
        "Cat6"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Cat5e."
    },
    {
      "id": "net-116",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The type of connector used on a 100BaseT Ethernet cable is:",
      "options": [
        "RJ-11",
        "RJ-45",
        "TNC",
        "BNC"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: RJ-45."
    },
    {
      "id": "net-117",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "What are two characteristics of fiber optic cable? Choose two.",
      "options": [
        "Conducts electricity",
        "Requires metal conduit",
        "Supports splicing",
        "Carries data as light rather than electrical current"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Fiber supports splicing and optical transmission. Connector polishing is required only by some termination methods, not every fiber connector."
    },
    {
      "id": "net-118",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You need to run Ethernet drops where interference exists. Which cable type should you use?",
      "options": [
        "STP Cat5e",
        "UTP Cat5e",
        "Cat3",
        "UTP Cat6"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: STP Cat5e."
    },
    {
      "id": "net-119",
      "chapter": "infrastructura",
      "type": "single",
      "question": "When a signal degrades as it runs through a wire, you have:",
      "options": [
        "Degradation",
        "Attenuation",
        "Crossover",
        "Resistance"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Attenuation."
    },
    {
      "id": "net-120",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What does X.25 use at its DTE device?",
      "options": [
        "Telco incoming router",
        "Packet switcher",
        "Analog modem",
        "PAD"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: PAD."
    },
    {
      "id": "net-121",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of the following represents a MAC address?",
      "options": [
        "GV:ZC:KK:DK:FZ:CA",
        "255.255.255.0",
        "05:35:AB:6E:A1:25",
        "127.0.0.1"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: 05:35:AB:6E:A1:25."
    },
    {
      "id": "net-122",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is the correct order of the OSI model layers?",
      "options": [
        "Physical, Data Link, Network, Transport, Session, Presentation, Application",
        "Application, Presentation, Session, Transport, Network, Data Link, Physical",
        "Physical, Network, Data Link, Transport, Session, Presentation, Application",
        "Data Link, Physical, Network, Transport, Application, Session, Presentation"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Physical, Data Link, Network, Transport, Session, Presentation, Application."
    },
    {
      "id": "net-123",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In which OSI layer does routing occur?",
      "options": [
        "Transport",
        "Network",
        "Data Link",
        "Physical"
      ],
      "correct": 1,
      "explanation": "Routers normally forward IP packets at OSI Layer 3, the Network layer, rather than Layer 2."
    },
    {
      "id": "net-124",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol is a transport layer protocol?",
      "options": [
        "FTP",
        "IP",
        "UDP",
        "ASCII"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: UDP."
    },
    {
      "id": "net-125",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol is responsible for automatically assigning IP addresses?",
      "options": [
        "HTTP",
        "DHCP",
        "DNS",
        "WINS"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: DHCP."
    },
    {
      "id": "net-126",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "At what layer in the OSI model are hardware addresses referenced?",
      "options": [
        "Network",
        "Application",
        "Data Link",
        "Physical"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Data Link."
    },
    {
      "id": "net-127",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "According to the OSI model, encryption takes place on the transport layer. What is correct instead?",
      "options": [
        "Presentation",
        "Network",
        "Application",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Presentation."
    },
    {
      "id": "net-128",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each protocol to its description.",
      "dragItems": [
        {
          "id": "a",
          "text": "UDP"
        },
        {
          "id": "b",
          "text": "TCP"
        },
        {
          "id": "c",
          "text": "ARP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Connectionless / best-effort delivery",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Connection-oriented / reliable, ordered byte stream",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Resolves an IPv4 address to a MAC address on the local link",
          "correctItemId": "c"
        }
      ],
      "explanation": "UDP is connectionless and does not supply TCP-style reliability. TCP supplies a reliable ordered byte stream with retransmission and error detection, but a permanent outage can still fail a connection. ARP maps IPv4 addresses to link-layer addresses locally."
    },
    {
      "id": "net-129",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each OSI layer to its description.",
      "dragItems": [
        {
          "id": "a",
          "text": "Application"
        },
        {
          "id": "b",
          "text": "Session"
        },
        {
          "id": "c",
          "text": "Network"
        },
        {
          "id": "d",
          "text": "Data Link"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Provides services to user applications",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Controls the dialogue between systems",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Handles path determination",
          "correctItemId": "c"
        },
        {
          "id": "z4",
          "label": "Checks frames (CRC)",
          "correctItemId": "d"
        }
      ],
      "explanation": "Asocierile corecte: Application → Provides services to user applications; Session → Controls the dialogue between systems; Network → Handles path determination; Data Link → Checks frames (CRC)."
    },
    {
      "id": "net-130",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "OSI statements. Which variant is correct?",
      "options": [
        "HTTP/TELNET/FTP/SMTP operate on Layer 7 – True; Layer 4 controls dialogue – False; Layer 3 controls routing – True",
        "All statements are True",
        "All statements are False",
        "Layer 4 controls dialogue – True; Layer 3 controls routing – False"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: HTTP/TELNET/FTP/SMTP operate on Layer 7 – True; Layer 4 controls dialogue – False; Layer 3 controls routing – True."
    },
    {
      "id": "net-131",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer in the OSI model covers routing between networks?",
      "options": [
        "Physical",
        "Data Link",
        "Network",
        "Transport"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Network."
    },
    {
      "id": "net-132",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "_____________ is used to send packets from one network to another network.",
      "options": [
        "Routing",
        "Transport",
        "BGP",
        "Encapsulation"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Routing."
    },
    {
      "id": "net-133",
      "chapter": "protocoale",
      "type": "single",
      "question": "The protocol that maps IP addresses to MAC addresses is:",
      "options": [
        "IMAP",
        "DHCP",
        "RIP",
        "UDP",
        "ARP"
      ],
      "correct": 4,
      "explanation": "Răspunsul corect: ARP."
    },
    {
      "id": "net-134",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of these is an application layer protocol?",
      "options": [
        "TCP",
        "FTP",
        "IP",
        "UDP"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: FTP."
    },
    {
      "id": "net-135",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "After enabling Windows Firewall, you can no longer access websites. Which two TCP ports should you add exceptions for? Choose two. Assume outbound standard HTTP and HTTPS connections are blocked.",
      "options": [
        "Port 21",
        "Port 23",
        "Port 25",
        "Port 80",
        "Port 443"
      ],
      "correct": [
        3,
        4
      ],
      "explanation": "Răspunsurile corecte: Port 80; Port 443."
    },
    {
      "id": "net-136",
      "chapter": "protocoale",
      "type": "single",
      "question": "TCP/IP model statements. Which variant is correct?",
      "options": [
        "The four-layer TCP/IP model has four layers: True; its application layer roughly covers OSI layers 5–7: True; its transport and Internet layers correspond to OSI layers 4 and 3, respectively: True",
        "All three statements are False",
        "TCP/IP application corresponds only to OSI layer 4",
        "TCP/IP Internet corresponds to OSI layer 7"
      ],
      "correct": 0,
      "explanation": "In the common four-layer model: application maps roughly to OSI 5–7, transport to 4, Internet to 3, and network access to 1–2. Some teaching models split network access into two layers."
    },
    {
      "id": "net-137",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each service to its TCP port.",
      "dragItems": [
        {
          "id": "a",
          "text": "SMTP"
        },
        {
          "id": "b",
          "text": "FTP"
        },
        {
          "id": "c",
          "text": "HTTPS"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Port 25",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Port 21",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Port 443",
          "correctItemId": "c"
        }
      ],
      "explanation": "Asocierile corecte: SMTP → Port 25; FTP → Port 21; HTTPS → Port 443."
    },
    {
      "id": "net-138",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to connect to an FTP server to download a file?",
      "options": [
        "nslookup",
        "Ssh",
        "telnet",
        "Ftp"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Ftp."
    },
    {
      "id": "net-139",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The default subnet mask for a Class B network is:",
      "options": [
        "0.0.0.255",
        "0.0.255.255",
        "255.0.0.0",
        "255.255.0.0"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: 255.255.0.0."
    },
    {
      "id": "net-140",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which network does the IP address 220.100.100.100 belong to? Use historical classful addressing, without a separately specified subnet mask.",
      "options": [
        "220.100.100.0/24",
        "220.100.100.1/24",
        "255.255.255.0/24",
        "255.255.255.1/24"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 220.100.100.0/24."
    },
    {
      "id": "net-141",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which subnet mask is valid?",
      "options": [
        "255.255.255.240",
        "255.255.255.228",
        "255.255.255.164",
        "255.255.255.245"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 255.255.255.240."
    },
    {
      "id": "net-142",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the default subnet mask for a Class C Internet network?",
      "options": [
        "255.255.255.252",
        "255.255.255.240",
        "255.255.255.192",
        "255.255.255.0"
      ],
      "correct": 3,
      "explanation": "The historical default mask for a Class C IPv4 network is 255.255.255.0 (/24). Actual subnetting requires a specified prefix or host/subnet requirement."
    },
    {
      "id": "net-143",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of the following is a public IP address?",
      "options": [
        "10.156.89.1",
        "68.24.78.221",
        "172.16.152.48",
        "192.168.25.101"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 68.24.78.221."
    },
    {
      "id": "net-144",
      "chapter": "infrastructura",
      "type": "single",
      "question": "To which IP configuration does the CIDR notation 192.168.1.1/25 refer?",
      "options": [
        "192.168.1.1 255.255.255.64",
        "192.168.1.1 255.255.255.1",
        "192.168.1.1 255.255.255.32",
        "192.168.1.1 255.255.255.256",
        "192.168.1.1 255.255.255.128"
      ],
      "correct": 4,
      "explanation": "Răspunsul corect: 192.168.1.1 255.255.255.128."
    },
    {
      "id": "net-145",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The default gateway address identifies the:",
      "options": [
        "Device that will connect the computer to the local network",
        "Device that will connect the computer to a remote network",
        "Server that will provide name services",
        "Server that will authenticate the user"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Device that will connect the computer to a remote network."
    },
    {
      "id": "net-146",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv4 multicast addresses range from 192.168.0.0 to 192.168.255.255. What is correct instead?",
      "options": [
        "127.0.0.0 to 127.255.255.255",
        "172.16.0.0 to 172.31.255.255",
        "224.0.0.0 to 239.255.255.255",
        "No change is needed"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: 224.0.0.0 to 239.255.255.255."
    },
    {
      "id": "net-147",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The loopback address of your computer is 127.0.0.1. What is correct?",
      "options": [
        "10.0.1.1",
        "169.254.0.5",
        "192.168.1.1",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: No change is needed."
    },
    {
      "id": "net-148",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of these is a public address space?",
      "options": [
        "192.168.0.0/16",
        "197.16.0.0/16",
        "10.0.0.0/8",
        "172.16.0.0/12"
      ],
      "correct": 1,
      "explanation": "197.16.0.0/16 is not an RFC 1918 private range. The other three options are private IPv4 ranges. Public allocation alone does not guarantee reachability."
    },
    {
      "id": "net-149",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv4 address statements. Which variant is correct?",
      "options": [
        "IPv4 has 64 bits – True; octets are 8-bit fields – True; octet values are 0–256 – True",
        "IPv4 has 64 bits – False; octets are 8-bit fields – True; octet values are 0–256 – False",
        "IPv4 has 32 bits – False; octets are 16-bit fields – True; octet values are 0–256 – True",
        "All statements are False"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: IPv4 has 64 bits – False; octets are 8-bit fields – True; octet values are 0–256 – False."
    },
    {
      "id": "net-150",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Each IPv4 address consists of a MAC address and data-link layer address. What is correct instead?",
      "options": [
        "Network ID and a host ID",
        "DNS record and a default route",
        "64-bit binary number divided into octets",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Network ID and a host ID."
    },
    {
      "id": "net-151",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each IP address to its IPv4 address class.",
      "dragItems": [
        {
          "id": "a",
          "text": "64.123.12.1"
        },
        {
          "id": "b",
          "text": "133.234.23.2"
        },
        {
          "id": "c",
          "text": "201.111.22.3"
        },
        {
          "id": "d",
          "text": "224.100.20.3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class A",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Class B",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Class C",
          "correctItemId": "c"
        },
        {
          "id": "z4",
          "label": "Class D",
          "correctItemId": "d"
        }
      ],
      "explanation": "Asocierile corecte: 64.123.12.1 → Class A; 133.234.23.2 → Class B; 201.111.22.3 → Class C; 224.100.20.3 → Class D."
    },
    {
      "id": "net-152",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each IPv4 address type to its definition.",
      "dragItems": [
        {
          "id": "a",
          "text": "Multicast"
        },
        {
          "id": "b",
          "text": "Broadcast"
        },
        {
          "id": "c",
          "text": "Unicast"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "One-to-many",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "To everyone on a subnet",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "One-to-one",
          "correctItemId": "c"
        }
      ],
      "explanation": "Asocierile corecte: Multicast → One-to-many; Broadcast → To everyone on a subnet; Unicast → One-to-one."
    },
    {
      "id": "net-153",
      "chapter": "echipamente",
      "type": "single",
      "question": "Dynamic routing statements. Which variant is correct?",
      "options": [
        "Learns networks automatically – True; removes routes automatically – True; selects best route using metrics – True",
        "Only the first statement is True",
        "Only the second statement is True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Learns networks automatically – True; removes routes automatically – True; selects best route using metrics – True."
    },
    {
      "id": "net-154",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each address range to its address type.",
      "dragItems": [
        {
          "id": "a",
          "text": "127.0.0.0–127.255.255.255"
        },
        {
          "id": "b",
          "text": "192.168.0.0–192.168.255.255"
        },
        {
          "id": "c",
          "text": "224.0.0.0–239.255.255.255"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Loopback",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Private",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Multicast",
          "correctItemId": "c"
        }
      ],
      "explanation": "Asocierile corecte: 127.0.0.0–127.255.255.255 → Loopback; 192.168.0.0–192.168.255.255 → Private; 224.0.0.0–239.255.255.255 → Multicast."
    },
    {
      "id": "net-155",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "The ipconfig command will:",
      "options": [
        "Configure routers",
        "Configure DHCP clients",
        "Display a client's address",
        "Display a client's broadcast mode"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Display a client's address."
    },
    {
      "id": "net-156",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to release the IP configuration handed out by a DHCP server?",
      "options": [
        "ipconfig /renew",
        "ipconfig /releasedns",
        "ipconfig /savestatic",
        "ipconfig /release"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: ipconfig /release."
    },
    {
      "id": "net-157",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to reacquire IP configuration from a DHCP server?",
      "options": [
        "ipconfig /renew",
        "ipconfig /releasedns",
        "ipconfig /savestatic",
        "ipconfig /release"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: ipconfig /renew."
    },
    {
      "id": "net-158",
      "chapter": "protocoale",
      "type": "single",
      "question": "List the four steps for a client to get an IP address from a DHCP server in the correct order.",
      "options": [
        "Discovery, offering, request, acknowledge",
        "Request, offering, discovery, acknowledge",
        "Discovery, request, offering, acknowledge"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Discovery, offering, request, acknowledge."
    },
    {
      "id": "net-159",
      "chapter": "protocoale",
      "type": "single",
      "question": "What protocol automatically configures IP configuration for a client?",
      "options": [
        "DNS",
        "DHCP",
        "WINS",
        "FTP"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: DHCP."
    },
    {
      "id": "net-160",
      "chapter": "protocoale",
      "type": "single",
      "question": "Teredo tunneling is a protocol that:",
      "options": [
        "Translates IPv4 to IPv6",
        "Allows IPv6 connectivity through IPv4 devices",
        "Provides VPN security",
        "Dynamically allocates IPv6 addresses"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Allows IPv6 connectivity through IPv4 devices."
    },
    {
      "id": "net-161",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv6 statements. Which variant is correct? This asks about the historical, deprecated IPv6 site-local prefix, not a recommended current deployment.",
      "options": [
        "0:0:0:0:0:0:0:1 is loopback – True; FEC0::9C5A is site-local – True; FE80::F856:02AA is link-local – True",
        "Only loopback is True",
        "Only link-local is True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 0:0:0:0:0:0:0:1 is loopback – True; FEC0::9C5A is site-local – True; FE80::F856:02AA is link-local – True."
    },
    {
      "id": "net-162",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of these represents the IPv6 loopback address?",
      "options": [
        "127.0.0.1",
        "192.168.0.1",
        "FEC0:A8C0::AA01",
        "::1"
      ],
      "correct": 3,
      "explanation": "::1 is the IPv6 loopback address. It identifies the local host."
    },
    {
      "id": "net-163",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of these addresses is a multicast address?",
      "options": [
        "127.0.0.1",
        "169.254.0.1",
        "192.168.0.1",
        "224.0.0.1"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: 224.0.0.1."
    },
    {
      "id": "net-164",
      "chapter": "infrastructura",
      "type": "single",
      "question": "How many bits are there in an IPv6 address?",
      "options": [
        "32",
        "64",
        "128",
        "256"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: 128."
    },
    {
      "id": "net-165",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv6 address validity. Which variant is correct?",
      "options": [
        "21DA:D3:0:2F3B:2AA:FF:FE28:9C5A – True; FE80::2AA:FF:FE28:9C5A – True; 21DA:02AA:::FF:FE28:9C5A – False",
        "All three are valid",
        "Only the last one is valid",
        "All are invalid"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 21DA:D3:0:2F3B:2AA:FF:FE28:9C5A – True; FE80::2AA:FF:FE28:9C5A – True; 21DA:02AA:::FF:FE28:9C5A – False."
    },
    {
      "id": "net-166",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv6 general statements. Which variant is correct?",
      "options": [
        "IPv6 addresses are 64-bit – True; divided into 8-bit blocks – True; represented by dotted-decimal notation – True",
        "IPv6 addresses are 64-bit – False; divided into 8-bit blocks – False; represented by dotted-decimal notation – False",
        "Only dotted-decimal notation is True",
        "Only 8-bit blocks are True"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: IPv6 addresses are 64-bit – False; divided into 8-bit blocks – False; represented by dotted-decimal notation – False."
    },
    {
      "id": "net-167",
      "chapter": "protocoale",
      "type": "single",
      "question": "The default port used for SMTP is:",
      "options": [
        "23",
        "25",
        "80",
        "8080"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 25."
    },
    {
      "id": "net-168",
      "chapter": "protocoale",
      "type": "single",
      "question": "The default port used for Telnet is:",
      "options": [
        "23",
        "25",
        "80",
        "8080"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 23."
    },
    {
      "id": "net-169",
      "chapter": "protocoale",
      "type": "single",
      "question": "All session data is encrypted between all machines while using Telnet. What is correct instead?",
      "options": [
        "Not encrypted",
        "Encrypted between any Windows machines",
        "Encrypted only to any non-Windows machines",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Not encrypted."
    },
    {
      "id": "net-170",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command displays the ports that your computer is listening for?",
      "options": [
        "nslookup",
        "nbtstat",
        "ping",
        "netstat"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: netstat."
    },
    {
      "id": "net-171",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of these ports does DHCP use?",
      "options": [
        "80",
        "67",
        "23",
        "500"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 67."
    },
    {
      "id": "net-172",
      "chapter": "protocoale",
      "type": "single",
      "question": "What port does DNS use?",
      "options": [
        "443",
        "389",
        "51",
        "53"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: 53."
    },
    {
      "id": "net-173",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which listed tool sends DNS queries to test name resolution and shows the DNS server it is querying?",
      "options": [
        "TELNET",
        "NSLOOKUP",
        "PATHPING",
        "NETSTAT"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: NSLOOKUP."
    },
    {
      "id": "net-174",
      "chapter": "protocoale",
      "type": "single",
      "question": "A service that resolves NetBIOS names to IP addresses is:",
      "options": [
        "Domain Name Service (DNS)",
        "Internet Service Provider (ISP)",
        "Address Resolution Protocol (ARP)",
        "Windows Internet Name Service (WINS)"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Windows Internet Name Service (WINS)."
    },
    {
      "id": "net-175",
      "chapter": "protocoale",
      "type": "single",
      "question": "What type of DNS record maps host names to addresses?",
      "options": [
        "Mail Exchanger (MX) DNS record",
        "Service (SRV) DNS record",
        "Host (A) DNS record",
        "Canonical (CNAME) DNS record"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Host (A) DNS record."
    },
    {
      "id": "net-176",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You can ping a server by IP address but not by FQDN. Why?",
      "options": [
        "PING is improperly configured",
        "The DNS is not resolving",
        "The DHCP server is offline",
        "NSLOOKUP is stopped"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: The DNS is not resolving."
    },
    {
      "id": "net-177",
      "chapter": "protocoale",
      "type": "single",
      "question": "A secondary zone is the first DNS zone to which all updates are written. What is correct instead?",
      "options": [
        "Primary zone",
        "Stub zone",
        "Conditional forwarding zone",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Primary zone."
    },
    {
      "id": "net-178",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following uses pointer records and A records?",
      "options": [
        "IDS",
        "DNS Server",
        "NAT Server",
        "IPS"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: DNS Server."
    },
    {
      "id": "net-179",
      "chapter": "protocoale",
      "type": "single",
      "question": "The top-level domain of www.adventureworks.com is:",
      "options": [
        "Www",
        "Adventureworks",
        "Adventureworks.com",
        "Com"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Com."
    },
    {
      "id": "net-180",
      "chapter": "protocoale",
      "type": "single",
      "question": "What type of record does DNS use to find a mail service?",
      "options": [
        "Service (SRV) DNS record",
        "Canonical (CNAME) DNS record",
        "Mail Exchanger (MX) DNS record",
        "Host (A) DNS record"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Mail Exchanger (MX) DNS record."
    },
    {
      "id": "net-181",
      "chapter": "protocoale",
      "type": "single",
      "question": "An ARP table is used to associate IP addresses with host names. What is correct instead?",
      "options": [
        "MAC addresses",
        "HomeGroup membership",
        "Preferred routers",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: MAC addresses."
    },
    {
      "id": "net-182",
      "chapter": "protocoale",
      "type": "single",
      "question": "The host name of the FQDN mail.exchange.corp.nwtraders.com is:",
      "options": [
        "Corp",
        "Com",
        "Nwtraders",
        "Exchange",
        "Mail"
      ],
      "correct": 4,
      "explanation": "Răspunsul corect: Mail."
    },
    {
      "id": "net-183",
      "chapter": "protocoale",
      "type": "single",
      "question": "The service that resolves FQDNs to IP addresses is:",
      "options": [
        "Windows Internet Name Service (WINS)",
        "Domain Name Service (DNS)",
        "Internet Service Provider (ISP)",
        "Address Resolution Protocol (ARP)"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Domain Name Service (DNS)."
    },
    {
      "id": "net-184",
      "chapter": "protocoale",
      "type": "single",
      "question": "The process of replicating a zone file to multiple DNS servers is called zone replication. What is correct instead?",
      "options": [
        "Zone transfer",
        "Zone synchronization",
        "Start of authority",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Zone transfer."
    },
    {
      "id": "net-185",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which DNS record type specifies the host that is the authority for a given domain?",
      "options": [
        "NS",
        "MX",
        "CNAME",
        "SOA"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: SOA."
    },
    {
      "id": "net-186",
      "chapter": "protocoale",
      "type": "single",
      "question": "What DNS record type specifies an alias name of another address record?",
      "options": [
        "MX",
        "CNAME",
        "NS",
        "SOA"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: CNAME."
    },
    {
      "id": "net-187",
      "chapter": "protocoale",
      "type": "single",
      "question": "The NTP value in a resource record indicates how long DNS servers cache information. What is correct instead?",
      "options": [
        "TTL",
        "GPS",
        "SOA RR",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: TTL."
    },
    {
      "id": "net-188",
      "chapter": "protocoale",
      "type": "single",
      "question": "DNS query statements. Which variant is correct?",
      "options": [
        "A recursive resolver may contact other servers on behalf of the client; iterative responses can contain referrals; a resolver may start at root servers when it has no relevant cache or forwarder",
        "Only clients may contact root DNS servers",
        "An iterative reply must always contain the final answer",
        "DNS never uses caching"
      ],
      "correct": 0,
      "explanation": "A recursive resolver performs the work for its client. It can follow iterative referrals from root to TLD and authoritative servers, subject to cache and forwarding configuration."
    },
    {
      "id": "net-189",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "The ping tool is used to: Choose two.",
      "options": [
        "Determine the network portion of a host address",
        "Self-test a host's own network interface",
        "Determine whether a host is reachable",
        "Manage a host's session when UDP is used"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "Răspunsurile corecte: Self-test a host's own network interface; Determine whether a host is reachable."
    },
    {
      "id": "net-190",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which of the following are features of DHCP? Choose two.",
      "options": [
        "IP address resolution to canonical names",
        "Secure shell connections",
        "Address reservation",
        "Network file transfer",
        "IP address exclusion"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "Răspunsurile corecte: Address reservation; IP address exclusion."
    },
    {
      "id": "net-191",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "The command-line tool used to list a host's active incoming connections is:",
      "options": [
        "NETSTAT",
        "IPCONFIG",
        "NSLOOKUP",
        "PING"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: NETSTAT."
    },
    {
      "id": "net-192",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "A computer with IP address 169.254.0.1 cannot access the network. Which service should you confirm is available?",
      "options": [
        "WINS",
        "DNS",
        "DHCP",
        "TFTP"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: DHCP."
    },
    {
      "id": "net-193",
      "chapter": "protocoale",
      "type": "single",
      "question": "When a client's DHCP-issued address expires, the client will: Assume the lease has expired without a successful renewal; the client must stop using that leased address.",
      "options": [
        "Select a new address and request approval from the DHCP server",
        "Require manual configuration with a static IP address",
        "Attempt to obtain a new address by broadcasting",
        "Continue to use the address until notified to stop"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Attempt to obtain a new address by broadcasting."
    },
    {
      "id": "net-194",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Internet Key Exchange (IKE) is responsible for which two functions? Choose two.",
      "options": [
        "Establishing network speed parameters",
        "Verifying the client's patch level",
        "Negotiating algorithms to use",
        "Exchanging key information"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Răspunsurile corecte: Negotiating algorithms to use; Exchanging key information."
    },
    {
      "id": "net-195",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command is used to verify that a server is connected to the network?",
      "options": [
        "IPCONFIG",
        "ROUTE",
        "PING",
        "CHECK"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: PING."
    },
    {
      "id": "net-196",
      "chapter": "echipamente",
      "type": "single",
      "question": "To protect a network when it is connected to the Internet, you should use a:",
      "options": [
        "Bridge",
        "Firewall",
        "Switch",
        "Router"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Firewall."
    },
    {
      "id": "net-197",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which service masks internal IP addresses from outside the network?",
      "options": [
        "DHCP",
        "WINS",
        "NAT",
        "DNS"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: NAT."
    },
    {
      "id": "net-198",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Tracert is used to:",
      "options": [
        "Manage routing tables dynamically",
        "Manage session-oriented connections between nodes",
        "Report the route taken by packets across an IP network",
        "Report the shortest route between different networks"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Report the route taken by packets across an IP network."
    },
    {
      "id": "net-199",
      "chapter": "protocoale",
      "type": "single",
      "question": "A school network uses DHCP. Settings are manual and websites do not work. Which changes are needed?",
      "options": [
        "Set IP address to manual and DNS to manual",
        "Obtain IP address automatically and obtain DNS server address automatically",
        "Only change the subnet mask",
        "Only disable DNS"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Obtain IP address automatically and obtain DNS server address automatically."
    },
    {
      "id": "net-200",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "For which two reasons should you use IPsec between computers? Choose two.",
      "options": [
        "Data compression",
        "Data integrity",
        "Data redundancy",
        "Data confidentiality"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "Răspunsurile corecte: Data integrity; Data confidentiality."
    },
    {
      "id": "net-201",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which address indicates that a router's DHCP service is NOT functioning?",
      "options": [
        "169.254.1.15",
        "172.16.1.15",
        "192.168.1.15",
        "10.19.1.15"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 169.254.1.15."
    },
    {
      "id": "net-202",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A public-facing web server must be protected from the internal network. What should you do?",
      "options": [
        "Set the web server in a perimeter network",
        "Block access on ports 80 and 443 on the web server",
        "Configure the firewall to block ports 80 and 443",
        "Set the web server IP address within the LAN"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Set the web server in a perimeter network."
    },
    {
      "id": "net-203",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "A computer has IP address 169.254.48.97 and cannot connect to resources. What should you do next?",
      "options": [
        "Flush the DNS server cache",
        "Reset the user's password",
        "Check router routing tables",
        "Verify that the DHCP service is available"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Verify that the DHCP service is available."
    },
    {
      "id": "net-204",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which listed protocol protects web traffic in transit using TLS?",
      "options": [
        "SNMP",
        "HTTPS",
        "TFTP",
        "HTTP"
      ],
      "correct": 1,
      "explanation": "HTTPS is HTTP over TLS. It protects web traffic, not every IP packet or every Internet application."
    },
    {
      "id": "net-205",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which Microsoft network service can establish a connection to a corporate LAN without user action?",
      "options": [
        "VPN",
        "Remote Desktop",
        "DirectAccess",
        "NAP"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: DirectAccess."
    },
    {
      "id": "net-206",
      "chapter": "protocoale",
      "type": "single",
      "question": "A Windows IPv4 client with APIPA enabled cannot obtain a DHCP lease. Which prefix contains its automatically selected link-local address?",
      "options": [
        "127.0.0.0–127.0.0.255",
        "169.254.0.0/16",
        "192.168.100.0–192.168.100.255",
        "No change is needed"
      ],
      "correct": 1,
      "explanation": "IPv4 link-local uses 169.254.0.0/16. Automatically selected host addresses exclude the first and last /24: 169.254.1.0 through 169.254.254.255."
    },
    {
      "id": "net-207",
      "chapter": "infrastructura",
      "type": "single",
      "question": "POTS, most ISDN lines, and switched T1 lines are examples of Message Switching. What is correct instead?",
      "options": [
        "Circuit Switching",
        "Packet Switching",
        "FDDI Switching",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Circuit Switching."
    },
    {
      "id": "net-208",
      "chapter": "protocoale",
      "type": "single",
      "question": "IPsec statements. Which variant is correct?",
      "options": [
        "Can secure communications between two machines – True; between two networks – True; traffic is always encrypted – False",
        "All statements are True",
        "Only the first statement is True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Can secure communications between two machines – True; between two networks – True; traffic is always encrypted – False."
    },
    {
      "id": "net-209",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Tracert statements. Which variant is correct?",
      "options": [
        "Displays router addresses traversed – True; determines packet loss – False; displays routers for all active connections – False",
        "All statements are True",
        "Only packet loss is True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Displays router addresses traversed – True; determines packet loss – False; displays routers for all active connections – False."
    },
    {
      "id": "net-210",
      "chapter": "protocoale",
      "type": "single",
      "question": "What protocol is used with L2TP to provide encryption?",
      "options": [
        "IPsec",
        "MPPE",
        "HTTPS",
        "MS-CHAP"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: IPsec."
    },
    {
      "id": "net-211",
      "chapter": "protocoale",
      "type": "single",
      "question": "A Windows DHCP server in an Active Directory domain has a configured active scope but is not authorized in AD. Which administrative action is missing?",
      "options": [
        "Register the scope",
        "Register the server",
        "Authorize the server",
        "Register the clients"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Authorize the server."
    },
    {
      "id": "net-212",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "A computer has address 169.254.32.23 and mask 255.255.0.0 but cannot connect to local file servers. What is most likely the problem?",
      "options": [
        "It cannot communicate with a DHCP server",
        "DNS servers are incorrect or down",
        "NetBIOS over TCP/IP is not enabled",
        "The network card is not connected properly"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: It cannot communicate with a DHCP server."
    },
    {
      "id": "net-213",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPsec-related protocol negotiates security associations and derives keying material?",
      "options": [
        "IKE (Internet Key Exchange)",
        "AH",
        "EP",
        "MPPE"
      ],
      "correct": 0,
      "explanation": "IKE negotiates IPsec security associations and keying material. A security association (SA) records negotiated security parameters; it is not the key-exchange protocol."
    },
    {
      "id": "net-214",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPSec component provides connectionless integrity and data authentication but not confidentiality?",
      "options": [
        "SA",
        "AH",
        "ESP",
        "MPPE"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: AH."
    },
    {
      "id": "net-215",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPSec component includes the most security, including confidentiality?",
      "options": [
        "SA",
        "AH",
        "ESP",
        "MPPE"
      ],
      "correct": 2,
      "explanation": "IPsec ESP can provide encryption, integrity and origin authentication. AH does not provide confidentiality."
    },
    {
      "id": "net-216",
      "chapter": "protocoale",
      "type": "single",
      "question": "What service on a Windows network translates between NetBIOS/computer names and IP addresses?",
      "options": [
        "DNS",
        "WINS",
        "DHCP",
        "LDAP"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: WINS."
    },
    {
      "id": "net-217",
      "chapter": "protocoale",
      "type": "single",
      "question": "What provides name resolution between domain names and IP addresses?",
      "options": [
        "DHCP",
        "DNS",
        "ARP",
        "RPC"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: DNS."
    },
    {
      "id": "net-218",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which term describes controlled access to an organization’s private resources by authorized external partners?",
      "options": [
        "Intranet",
        "Extranet",
        "Internet",
        "DMZ"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Extranet."
    },
    {
      "id": "net-219",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to display and modify the network configuration of a local computer?",
      "options": [
        "Netsh",
        "netstat",
        "telnet",
        "nbtstat"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Netsh."
    },
    {
      "id": "net-220",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command is used to add static routes to a Windows computer?",
      "options": [
        "nslookup",
        "telnet",
        "route",
        "nbtstat"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: route."
    },
    {
      "id": "net-221",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to display the routing table on a local system?",
      "options": [
        "route display",
        "route table",
        "route local",
        "route print"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: route print."
    },
    {
      "id": "net-222",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to display the MAC address on a system?",
      "options": [
        "ipconfig /all",
        "Pathping -m",
        "route /showmac",
        "nbtstat -r"
      ],
      "correct": 0,
      "explanation": "ipconfig /all displays detailed Windows network configuration including each adapter’s physical (MAC) address."
    },
    {
      "id": "net-223",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to retrieve or update your DHCP assigned configuration?",
      "options": [
        "ipconfig /flushdns",
        "ipconfig /all",
        "ipconfig /release",
        "ipconfig /renew"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: ipconfig /renew."
    },
    {
      "id": "net-224",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to register the computer’s name and IP address with the nearest DNS server?",
      "options": [
        "ipconfig /renew",
        "ipconfig /renew all",
        "ipconfig /flushdns",
        "ipconfig /registerdns"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: ipconfig /registerdns."
    },
    {
      "id": "net-225",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command displays Ethernet statistics?",
      "options": [
        "netstat -e",
        "netstat -x",
        "netstat -q",
        "netstat -t"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: netstat -e."
    },
    {
      "id": "net-226",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What option do you use to ping constantly until you stop it?",
      "options": [
        "ping -t <host>",
        "ping -q <host>",
        "ping -r <host>",
        "ping -s <host>"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: ping -t <host>."
    },
    {
      "id": "net-227",
      "chapter": "protocoale",
      "type": "single",
      "question": "What server is used to translate host names to IP addresses?",
      "options": [
        "DNS",
        "WINS",
        "HOSTS",
        "DHCP"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: DNS."
    },
    {
      "id": "net-228",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command can you use to connect to a mail server so that you can test SMTP?",
      "options": [
        "Ftp",
        "nslookup",
        "telnet",
        "nbtstat"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: telnet."
    },
    {
      "id": "net-229",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "CompanyPro plans to migrate several servers to cloud-based virtual machines. You need to identify the administrative responsibilities that will be reduced after the planned migration. Which two responsibilities will be reduced? Choose two.",
      "options": [
        "Backing up application data",
        "Managing permissions to shared documents",
        "Updating server operating systems",
        "Replacing failed server hardware",
        "Managing physical server security"
      ],
      "correct": [
        3,
        4
      ],
      "explanation": "Răspunsurile corecte: Replacing failed server hardware; Managing physical server security."
    },
    {
      "id": "net-230",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "An organization needs to move its infrastructure completely off-premises. Where should they locate their data center?",
      "options": [
        "A public cloud",
        "A private cloud",
        "A virtual machine",
        "A hybrid cloud"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: A public cloud."
    },
    {
      "id": "net-231",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "You are configuring remote access for dial-in clients. You need to configure a solution that enables them to connect through standard phone lines without having access to the Internet. Which role should you install?",
      "options": [
        "Multipoint Services",
        "Network Policy and Access Services",
        "Remote Access",
        "Remote Desktop Services"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Remote Access."
    },
    {
      "id": "net-232",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "You use the ____________ to connect to a terminal server",
      "options": [
        "Remote Desktop Connection (RDC)",
        "Remote Desktop Protocol (RDP)",
        "Remote Session Call (RSC)",
        "Remote NetBIOS Connection (RNC)"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Remote Desktop Connection (RDC)."
    },
    {
      "id": "net-233",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What zone is used to publish external websites for an organization?",
      "options": [
        "Intranet",
        "Exanet",
        "Internetwork",
        "DMZ"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: DMZ."
    },
    {
      "id": "net-234",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is the primary purpose of a perimeter network?",
      "options": [
        "To act as a hidden location to deploy network clients",
        "To act as a secure location for deploying highly sensitive network servers",
        "To provide a buffer area between a private intranet and the public Internet",
        "To monitor traffic between routed subnets in a private LAN"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: To provide a buffer area between a private intranet and the public Internet."
    },
    {
      "id": "net-235",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "A perimeter design uses a NAT gateway at the boundary and a public-facing service on its isolated segment. Which TWO listed components serve those roles?",
      "options": [
        "NAT server",
        "Database server",
        "Secure file server",
        "DHCP server",
        "Public web server"
      ],
      "correct": [
        0,
        4
      ],
      "explanation": "A NAT gateway can operate at the perimeter boundary and a public web server can reside in a DMZ. NAT alone is not a firewall, and gateway placement is a design choice, not a universal DMZ requirement."
    },
    {
      "id": "net-236",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "What are two characteristics of VLANs? Choose two.",
      "options": [
        "VLANs act as though they are on the same LAN regardless of physical location",
        "A VLAN can logically address packets by using IP",
        "A VLAN compartmentalizes a network and isolates traffic",
        "A single switch can service only a single VLAN"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Răspunsurile corecte: VLANs act as though they are on the same LAN regardless of physical location; A VLAN compartmentalizes a network and isolates traffic."
    },
    {
      "id": "net-237",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "What are three advantages of VLANs? Choose three.",
      "options": [
        "They can logically address packets by using IP",
        "They divide a switched network into separate broadcast domains",
        "They compartmentalize a network and isolate traffic",
        "They are efficient because a single switch can implement only a single VLAN",
        "They act as though they are on the same LAN regardless of physical location"
      ],
      "correct": [
        1,
        2,
        4
      ],
      "explanation": "VLANs isolate Layer 2 broadcast domains and permit logical grouping across trunk-connected switches. Routing is needed between VLANs, not merely because the same VLAN spans switches."
    },
    {
      "id": "net-238",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "What are two advantages of using DSL for WAN connections? Choose two.",
      "options": [
        "DSL bypasses the need to use an ISP to connect to the Internet",
        "DSL supports higher bandwidth than cable modems and ISDN",
        "DSL provides a cost-effective way for small office/home office connections to the Internet",
        "DSL is the preferred method for WAN point-to-point links in an enterprise network",
        "DSL is implemented using standard telephone company service lines"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "Răspunsurile corecte: DSL provides a cost-effective way for small office/home office connections to the Internet; DSL is implemented using standard telephone company service lines."
    },
    {
      "id": "net-239",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "You need to configure a VPN connection between two offices. You want to maximize the connection speed. Which connection should you use? Assume the cable plan offers a higher advertised speed than the other listed plans.",
      "options": [
        "ISDN",
        "Cable Modem",
        "T1",
        "DSL"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Cable Modem."
    },
    {
      "id": "net-240",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which connectivity option for wide area networks (WANs) is most readily available in most geographic areas? Consider legacy connectivity where an analog telephone line is available but broadband is not.",
      "options": [
        "Leased line",
        "ISDN",
        "T1",
        "Dial-up"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Dial-up."
    },
    {
      "id": "net-241",
      "chapter": "infrastructura",
      "type": "single",
      "question": "POTS, ISDN, and. T1 use which type of switching?",
      "options": [
        "Packet",
        "Circuit"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Circuit."
    },
    {
      "id": "net-242",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which listed Wi-Fi standard has a maximum nominal PHY rate of 54 Mbps and operates only in the 2.4 GHz band?",
      "options": [
        "802.11a",
        "802.11g",
        "802.11n"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 802.11g."
    },
    {
      "id": "net-243",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the maximum theoretical PHY rate of 802.11n with four spatial streams, 40 MHz channels and a short guard interval?",
      "options": [
        "10 Mbps",
        "11-128 Mbps",
        "600 Mbps",
        "No change is needed"
      ],
      "correct": 2,
      "explanation": "802.11n can reach a nominal PHY rate of 600 Mbps in this configuration. Real throughput is lower."
    },
    {
      "id": "net-244",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What happens when an 802.11a node broadcasts within the range of an 802.11g access point?",
      "options": [
        "The access point transmits, but the node is unable to receive",
        "A connection occurs",
        "Both the node and the access point are unable to transmit",
        "The node transmits, but the access point is unable to receive"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: The node transmits, but the access point is unable to receive."
    },
    {
      "id": "net-245",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What does an SSID identify in a Wi-Fi network?",
      "options": [
        "The default administrator account",
        "The wireless network name",
        "The default communication protocol",
        "A WAN encryption protocol"
      ],
      "correct": 1,
      "explanation": "An SSID is the wireless network name. It may be broadcast, but broadcasting is not required."
    },
    {
      "id": "net-246",
      "chapter": "infrastructura",
      "type": "single",
      "question": "If an 802.11g Internet connection has connectivity problems, what may be the cause?",
      "options": [
        "A cordless phone",
        "A cellular phone",
        "Incandescent lights",
        "Electromagnetic interference (EMI)"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: A cordless phone."
    },
    {
      "id": "net-247",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which is an example of external interference that can degrade the transmission quality of a UTP cable segment?",
      "options": [
        "Wireless access points",
        "Crosstalk",
        "Large electric motors",
        "Cell phones"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Large electric motors."
    },
    {
      "id": "net-248",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which physical network topology provides fault-tolerant communication by providing redundant communication paths?",
      "options": [
        "Bus",
        "Ring",
        "Star",
        "Mesh"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Mesh."
    },
    {
      "id": "net-249",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "All devices on your company network connect to the same network switch. This is an example of a physical star topology. What is correct?",
      "options": [
        "Ring",
        "Bus",
        "Mesh",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "Connecting devices to one central switch is a physical star topology, regardless of the type of devices at the leaves."
    },
    {
      "id": "net-250",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A switched 1000BASE-T network has individual point-to-point links from endpoints to a central switch. Which listed topology best describes this arrangement?",
      "options": [
        "Mesh",
        "Ring",
        "Bus",
        "Star"
      ],
      "correct": 3,
      "explanation": "A switched Ethernet star has separate point-to-point links. A shared logical bus describes classic hub/repeater Ethernet, not a switched full-duplex LAN."
    },
    {
      "id": "net-251",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which access method is used in a physical ring topology?",
      "options": [
        "Collision",
        "Token passing",
        "Avoidance",
        "Polling"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Token passing."
    },
    {
      "id": "net-252",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is the most common central device used today to connect computers to a network?",
      "options": [
        "Hub",
        "Switch",
        "SOHO router",
        "VPN router"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Switch."
    },
    {
      "id": "net-253",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which is not a routing protocol?",
      "options": [
        "EIGRP",
        "RIP",
        "OSPF",
        "TCP"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: TCP."
    },
    {
      "id": "net-254",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "A routed school network is designed to use a dynamic routing protocol. One router has that protocol disabled and lacks a route to the email subnet. Which TWO listed actions inspect the problem and restore the intended design?",
      "options": [
        "Enable dynamic routing",
        "Look in the router's NAT table",
        "Enable multicast",
        "Look in the router's routing table"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Răspunsurile corecte: Enable dynamic routing; Look in the router's routing table."
    },
    {
      "id": "net-255",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which TWO listed terms describe address translation and its many-to-one form for 15 private IPv4 computers sharing one public IPv4 address?",
      "options": [
        "Static routing",
        "NAT",
        "PAT / NAPT (many private hosts share one public IPv4 address)",
        "RIP"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "NAT is the broader translation function; PAT/NAPT multiplexes connections using port numbers. Port forwarding is inbound mapping and is not a synonym for outbound PAT."
    },
    {
      "id": "net-256",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the most common cable used today?",
      "options": [
        "UTP",
        "STP",
        "Coaxial",
        "Fiber"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: UTP."
    },
    {
      "id": "net-257",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are two characteristics of wired Ethernet network topology? Choose two.",
      "options": [
        "It uses tokens to avoid collisions on the network",
        "It is typically employed using twisted pair or fiber optic media",
        "It uses network adapters physically encoded with an IP address",
        "It can negotiate different transmission speeds"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "Răspunsurile corecte: It is typically employed using twisted pair or fiber optic media; It can negotiate different transmission speeds."
    },
    {
      "id": "net-258",
      "chapter": "infrastructura",
      "type": "single",
      "question": "If you are making a crossover cable and one end is 568A, what should the other end be?",
      "options": [
        "568A",
        "568B",
        "568C",
        "BOGB"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 568B."
    },
    {
      "id": "net-259",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is a justification for using STP cable instead of UTP cable to wire a network expansion?",
      "options": [
        "You are routing cables through an area with high external interference",
        "You want to minimize the costs relating to the new installation",
        "You need to reduce attenuation",
        "You need the cable to be as light and flexible as possible"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: You are routing cables through an area with high external interference."
    },
    {
      "id": "net-260",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which media type is least susceptible to external interference including EMI and RFI?",
      "options": [
        "Fiber optic",
        "STP",
        "UTP",
        "Wireless"
      ],
      "correct": 0,
      "explanation": "Fiber transmits light rather than electrical signals and is not affected by electromagnetic interference along the optical link."
    },
    {
      "id": "net-261",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You need to install a network cable between two locations that are six miles from each other. What should you use?",
      "options": [
        "Multi-mode fiber",
        "Single-mode fiber",
        "Cat5e",
        "Cat6"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Single-mode fiber."
    },
    {
      "id": "net-262",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You need to run four Ethernet network drops. Each drop is approximately 125 feet/38.1 meters. An interference exists along the path of each drop. You need to ensure that interference is reduced. Which cable type should you use? Assume properly grounded shielded cabling and suitable connectors.",
      "options": [
        "STP Cat5e",
        "UTPCat5e",
        "Cat3",
        "UTPCat6"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: STP Cat5e."
    },
    {
      "id": "net-263",
      "chapter": "protocoale",
      "type": "single",
      "question": "How many layers does the TCP/IP model have?",
      "options": [
        "3",
        "4",
        "6",
        "7"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 4."
    },
    {
      "id": "net-264",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer in the OSI model is included in the TCP/IP model?",
      "options": [
        "Physical",
        "Data Link",
        "Transport",
        "Application"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Transport."
    },
    {
      "id": "net-265",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What model is used to describe how data communication occurs between hosts?",
      "options": [
        "Server-centric model",
        "Workgroup model",
        "Peer-to-peer model",
        "OSI reference model"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: OSI reference model."
    },
    {
      "id": "net-266",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "An ICMP ping message is sent at the application layer of the OSI model. What is correct instead?",
      "options": [
        "Network",
        "Transport",
        "Data-link",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Network."
    },
    {
      "id": "net-267",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer in the OSI model covers HTTP, FTP, and RDC?",
      "options": [
        "Physical",
        "Session",
        "Application",
        "Presentation"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Application."
    },
    {
      "id": "net-268",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "Which two functions are implemented at the application layer of the OSI model? Choose two.",
      "options": [
        "Remote file services",
        "Data encryption/decryption",
        "Data compression",
        "Directory services"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Răspunsurile corecte: Remote file services; Directory services."
    },
    {
      "id": "net-269",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What layer in the OSI model is used to encrypt data? Use the traditional conceptual OSI classification, not a claim that all real implementations operate only at that layer.",
      "options": [
        "Physical",
        "Session",
        "Application",
        "Presentation"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Presentation."
    },
    {
      "id": "net-270",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Encryption takes place at what layer of the OSI Model? Use the traditional conceptual OSI classification, not a claim that all real implementations operate only at that layer.",
      "options": [
        "7",
        "6",
        "4"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 6."
    },
    {
      "id": "net-271",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "POP3 is in what layer of the OSI model?",
      "options": [
        "7",
        "4",
        "2"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 7."
    },
    {
      "id": "net-272",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer of the OSI model includes VLANs?",
      "options": [
        "Physical",
        "Data Link",
        "Network",
        "Transport"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Data Link."
    },
    {
      "id": "net-273",
      "chapter": "protocoale",
      "type": "single",
      "question": "NetBIOS protocol is what layer of the OSI model? Consider the NetBIOS session service specifically.",
      "options": [
        "Network",
        "Session",
        "Transport"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Session."
    },
    {
      "id": "net-274",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer in the OSI model is used to verify that data was delivered without error? Assume TCP, rather than every possible transport protocol.",
      "options": [
        "Physical",
        "Data Link",
        "Network",
        "Transport"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Transport."
    },
    {
      "id": "net-275",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol is appropriate for reliable delivery of a video file where all bytes must arrive in order?",
      "options": [
        "TCP",
        "UDP",
        "FTP",
        "RDC"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: TCP."
    },
    {
      "id": "net-276",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which type of switch can provide a layer 3 function?",
      "options": [
        "Managed switch",
        "Multi layer switch",
        "Unmanaged switch"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Multi layer switch."
    },
    {
      "id": "net-277",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is a similarity between Layer 2 and Layer 3 switches?",
      "options": [
        "Both provide a high level of security to the network",
        "Both use logical addressing to forward transmissions",
        "Both forward packets onto the network",
        "Both allow the implementation of VLANs"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Both allow the implementation of VLANs."
    },
    {
      "id": "net-278",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "What is the purpose of a Media Access Control (MAC) address? Choose two.",
      "options": [
        "Identify the destination interface for frame delivery on the local link",
        "Identify a network interface at the data-link layer",
        "Manage permissions for shared network resources",
        "Provide a routing address on a local area network (LAN)"
      ],
      "correct": [
        1,
        0
      ],
      "explanation": "MAC addresses identify interfaces for local Layer 2 delivery. IP addresses, not MAC addresses, support end-to-end Internet routing."
    },
    {
      "id": "net-279",
      "chapter": "protocoale",
      "type": "single",
      "question": "At which OSI layer is ICMP normally classified?",
      "options": [
        "2",
        "4",
        "3"
      ],
      "correct": 2,
      "explanation": "ICMP is classified with IP at Layer 3. ARP resolves IPv4 addresses to link-layer addresses and should not be combined with ICMP as an unqualified Layer 3 statement."
    },
    {
      "id": "net-280",
      "chapter": "protocoale",
      "type": "single",
      "question": "TCP/IP and IPX/SPX are known as _________ stacks.",
      "options": [
        "Protocols",
        "Services",
        "Layers",
        "Lenses"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Protocols."
    },
    {
      "id": "net-281",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the advantage of UDP over TCP?",
      "options": [
        "Less Overhead - Faster Performance",
        "Older - Larger pool of compatible hardware",
        "TCP is not IPv6 compatible UDP is",
        "UDP can operate at Layer 1"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Less Overhead - Faster Performance."
    },
    {
      "id": "net-282",
      "chapter": "protocoale",
      "type": "single",
      "question": "___ protocol provides reliable, ordered delivery Reliability does not guarantee successful delivery during a permanent network outage.",
      "options": [
        "TCP",
        "UDP"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: TCP."
    },
    {
      "id": "net-283",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of the following is a public address?",
      "options": [
        "10.1.1.1",
        "178.16.1.1",
        "192.168.1.1"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: 178.16.1.1."
    },
    {
      "id": "net-284",
      "chapter": "protocoale",
      "type": "single",
      "question": "What ports are defined from 49,152 through 65,535?",
      "options": [
        "Well-known ports",
        "Registered ports",
        "Dynamic ports",
        "Sliding ports"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Dynamic ports."
    },
    {
      "id": "net-285",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "A server only needs direct IPv4 communication with devices on its local subnet. Which TWO IPv4 configuration values are required?",
      "options": [
        "Default gateway",
        "Mac address",
        "IP address",
        "Primary DNS server",
        "Subnet mask"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "An IPv4 address and subnet mask identify the host and its local subnet. A gateway is needed for off-subnet traffic; DNS is needed for name resolution, not basic same-subnet IP communication."
    },
    {
      "id": "net-286",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which prefix is reserved for IPv6 link-local unicast addresses?",
      "options": [
        "FEC0:",
        "fe80::/10",
        "FFF:"
      ],
      "correct": 1,
      "explanation": "IPv6 link-local unicast uses fe80::/10; it is not IPv6 APIPA."
    },
    {
      "id": "net-287",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which is a IPv4 to IPv6 tunneling protocol?",
      "options": [
        "DHCP",
        "RDP",
        "Teredo"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: Teredo."
    },
    {
      "id": "net-288",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which port categories include inbound ports of HTTP, HTTPS, FTP, and DNS?",
      "options": [
        "Well-known ports",
        "Registered ports",
        "Dynamic ports",
        "Private ports"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: Well-known ports."
    },
    {
      "id": "net-289",
      "chapter": "protocoale",
      "type": "single",
      "question": "What information is contained in a client computer's HOSTS file?",
      "options": [
        "NetBIOS name to IP address mappings",
        "A list of local DNS Servers",
        "FQDN to IP address mapping",
        "A list of Internet and root DNS servers"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: FQDN to IP address mapping."
    },
    {
      "id": "net-290",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which listed action recognizes a request for the local computer’s own hostname without contacting a DNS server?",
      "options": [
        "The client checks the LMHOSTS file for an entry to the name",
        "The client checks its HOSTS file for an entry to the name",
        "The client checks to see if the name being resolved is its own name"
      ],
      "correct": 2,
      "explanation": "A local hostname can be resolved locally. Actual resolver order varies by operating system and configuration; this is not a universal first step for every DNS request."
    },
    {
      "id": "net-291",
      "chapter": "protocoale",
      "type": "single",
      "question": "What type of DNS resource record maps an IP address to a fully qualified domain name (FQDN)?",
      "options": [
        "CNAME",
        "PTR",
        "AAAA",
        "A"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: PTR."
    },
    {
      "id": "net-292",
      "chapter": "protocoale",
      "type": "single",
      "question": "_____ query is when the DNS server sends request to the root server? Assume an uncached iterative query made by a recursive resolver.",
      "options": [
        "Advanced",
        "Iterative",
        "Complex"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: Iterative."
    },
    {
      "id": "net-293",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "You need to configure DHCPServ with scopes to support both subnets. What needs to be done on the other subnet? Choose two.",
      "options": [
        "Configure the router to support DHCP messages and BOOTP messages",
        "Deploy a DHCP relay in the other subnet",
        "Reconfigure both subnets with the same set of addresses",
        "Deploy a NAT Server"
      ],
      "correct": [
        1,
        0
      ],
      "explanation": "Răspunsurile corecte: Deploy a DHCP relay in the other subnet; Configure the router to support DHCP messages and BOOTP messages."
    },
    {
      "id": "net-294",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Your home computer is having problems accessing the Internet. You suspect that your Internet router's DHCP service is not functioning, so you check your computer's IP address. Which address indicates that your router's DHCP service is NOT functioning?",
      "options": [
        "169.254.1.15",
        "172.16.1.15",
        "192.168.1.15",
        "10.19.1.15"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: 169.254.1.15."
    },
    {
      "id": "net-295",
      "chapter": "protocoale",
      "type": "single",
      "question": "You deploy a server running Windows Server 2016 and install Remote Access Server. What do you need to configure to access the Internet and navigate multiple web sites?",
      "options": [
        "DHCP",
        "NAT",
        "WAP",
        "VPN"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: NAT."
    },
    {
      "id": "net-296",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "You are a network administrator at a small business. An employee is not able to access any websites. No other employees are having this problem. All computers are on the same intranet. You need to troubleshoot the problem. Which three actions should you complete? Choose three.",
      "options": [
        "Check the affected computer’s DNS and local firewall/proxy configuration",
        "Contact the internet service provider",
        "Check the employee’s network adapter to verify that it is working",
        "Check to see if the router is working properly",
        "Determine whether the employee’s computer has a valid IP address"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "When only one computer is affected, check its adapter, IP configuration, and local DNS/firewall/proxy settings before investigating a shared ISP outage."
    },
    {
      "id": "net-297",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "You are a network administrator at a small business. One morning at the start of business, you realize that no employees at the company can access external websites. However, all employees have the same intranet connected by a single router. You need to troubleshoot the problem. Which two actions should you complete? Choose two.",
      "options": [
        "Check the router for proper physical connectivity",
        "Check that each computer has a valid IP address",
        "Contact the internet service provider",
        "Check for bad network adapters on individual computers"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "When all clients lose external access, check shared router connectivity and the ISP/upstream service. These are the two shared-path checks among the listed options."
    },
    {
      "id": "net-298",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "A computer is connected to a switch through a network patch panel by using copper cable. The computer is getting lower-than-expected data speeds. Which two actions should you perform to identify the issue? Choose two.",
      "options": [
        "Test the data speed of the cable",
        "Use an optical time-domain reflectometer (OTDR) to test the line",
        "Search for broken wires in the cable by using a cable tester",
        "Tone the line from Unit A to Unit B"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Răspunsurile corecte: Test the data speed of the cable; Search for broken wires in the cable by using a cable tester."
    },
    {
      "id": "net-299",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The fiber network connection between Building A and Building B is 550 meters. There is attenuation on the line. Which tool should you use to test this?",
      "options": [
        "Multimeter",
        "Time-domain reflectometer (TDR)",
        "Toner",
        "Optical time-domain reflectometer (OTDR)"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Optical time-domain reflectometer (OTDR)."
    },
    {
      "id": "net-300",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command shows the public IP information for a certain domain name?",
      "options": [
        "netstat",
        "nslookup",
        "tracert"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: nslookup."
    },
    {
      "id": "net-301",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "On a Windows computer, which utility should you use to determine whether your Domain Name System (DNS) service is properly resolving fully qualified domain names (FQDNs) to IP addresses?",
      "options": [
        "netstat",
        "nslookup",
        "nbtstat",
        "ipconfig"
      ],
      "correct": 1,
      "explanation": "Răspunsul corect: nslookup."
    },
    {
      "id": "net-302",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "___ is the command you run to view your IP information on a Windows PC?",
      "options": [
        "Ifconfig",
        "Netconfig",
        "ipconfig"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: ipconfig."
    },
    {
      "id": "net-303",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command should you use to force a client computer to renew its address lease from a DHCP server?",
      "options": [
        "Pathping",
        "ipconfig /renew",
        "netstat",
        "Netsh"
      ],
      "correct": 1,
      "explanation": "On Windows, ipconfig /renew requests renewal of DHCP-assigned IPv4 configuration. ipconfig without a switch only displays configuration."
    },
    {
      "id": "net-304",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "A user reports that she cannot connect to network resources from a computer on the company network. The user was able to connect to the network resources yesterday. You verify that the user's computer is properly physically connected to the network. You discover that the computer's IP address is 169.254.48.97. You need to restore access to network resources. What should you do next?",
      "options": [
        "Flush the cache on the DNS server",
        "Reset the user's password on the server",
        "Check your router's current routing tables",
        "Verify that the DHCP service is available"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: Verify that the DHCP service is available."
    },
    {
      "id": "net-305",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command shows all ports and incoming connects?",
      "options": [
        "netstat",
        "nslookup",
        "tracert"
      ],
      "correct": 0,
      "explanation": "Răspunsul corect: netstat."
    },
    {
      "id": "net-306",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You are setting up a network computer game. You need to open up ports on your firewall so your friends can join the network. Which command displays the ports that your computer is listening for?",
      "options": [
        "nslookup",
        "nbtstat",
        "ping",
        "netstat"
      ],
      "correct": 3,
      "explanation": "Răspunsul corect: netstat."
    },
    {
      "id": "net-307",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command shows the hops or routers along a certain route?",
      "options": [
        "netstat",
        "nslookup",
        "tracert"
      ],
      "correct": 2,
      "explanation": "Răspunsul corect: tracert."
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which TCP/IP layer contains TCP?",
      "options": [
        "Application",
        "Network Access",
        "Transport",
        "Internet"
      ],
      "correct": 2,
      "explanation": "TCP is a transport-layer protocol that provides an ordered, reliable byte stream between endpoints.",
      "id": "net-308"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What is the first phase in a standard network-troubleshooting process?",
      "options": [
        "Run every possible test",
        "Identify every user before asking questions",
        "Identify the problem",
        "Replace the router"
      ],
      "correct": 2,
      "explanation": "Start by identifying and defining the problem. Questioning users, gathering symptoms and determining scope are activities within that first phase.",
      "id": "net-309"
    },
    {
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "ping can test IP reachability, subject to ICMP filtering.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "tracert is the standard Linux command for tracing a route.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "host performs DNS lookups.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "netstat can show listening ports and active connections when called with appropriate options.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Linux generally uses traceroute or tracepath; tracert is the Windows command. ping tests ICMP reachability, host queries DNS and netstat reports connection information (ss is a common modern alternative).",
      "id": "net-310"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "A Layer 2 switch acts as a multiport bridge.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A Layer 2 switch forwards frames using an IP routing table.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A switch normally floods an unknown-unicast frame to other forwarding ports in the same VLAN.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Layer 2 switches learn source MAC addresses and forward using MAC tables. Unknown unicast is flooded within the VLAN, excluding the incoming port.",
      "id": "net-311"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "A firewall can be a dedicated hardware appliance.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A firewall can be implemented in software.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A network firewall is a room that protects servers from fire.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A network firewall enforces traffic rules and may be implemented in hardware, software or both. A fire-resistant room is a different physical-safety measure.",
      "id": "net-312"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "A traditional secondary DNS zone obtains records from another authoritative DNS server by zone transfer.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "AAAA records map hostnames to IPv4 addresses.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "On a normally configured Windows host, local HOSTS entries are checked before a fresh DNS lookup.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "AAAA records map names to IPv6; A records map names to IPv4. Secondary zones replicate authoritative data. Local name-resolution ordering can depend on operating-system configuration.",
      "id": "net-313"
    },
    {
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which two named transition mechanisms carry IPv6 over IPv4? Choose two.",
      "options": [
        "A generic Ethernet bridge",
        "ISATAP",
        "Teredo",
        "A VLAN"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "ISATAP and Teredo are IPv6 transition mechanisms over IPv4; Teredo uses UDP encapsulation. GRE can also carry IPv6, so it was removed as an ambiguous third correct option.",
      "id": "net-314"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which Windows command shows detailed adapter information including DHCP status, DHCP server and DNS servers?",
      "options": [
        "ipconfig",
        "ping -d",
        "ping",
        "ipconfig /all"
      ],
      "correct": 3,
      "explanation": "ipconfig /all displays the full network configuration. Bare ipconfig shows a shorter summary.",
      "id": "net-315"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which item is exactly a second-level domain directly beneath the .com top-level domain?",
      "options": [
        "edu",
        "gmetrix.com",
        "support.microsoft.com",
        "www.gmetrix.com"
      ],
      "correct": 1,
      "explanation": "gmetrix is the second-level label under com. www.gmetrix.com and support.microsoft.com contain an additional third-level label.",
      "id": "net-316"
    },
    {
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each legacy access technology to its description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "DSL"
        },
        {
          "id": "i2",
          "text": "ISDN BRI"
        },
        {
          "id": "i3",
          "text": "Cable modem"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Uses shared cable-TV broadband access",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Uses telephone copper pairs to reach provider equipment",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Provides two 64-kbps B channels",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Cable broadband commonly shares segment capacity, DSL uses telephone copper, and basic-rate ISDN has two 64-kbps bearer channels.",
      "id": "net-317"
    },
    {
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each network service to its primary role.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Remote Access Server"
        },
        {
          "id": "i2",
          "text": "DHCP"
        },
        {
          "id": "i3",
          "text": "Firewall"
        },
        {
          "id": "i4",
          "text": "NAT"
        },
        {
          "id": "i5",
          "text": "VPN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Allows or blocks packets",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Authenticates remote users",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Distributes IP configuration",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Translates private source addresses for Internet access",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Carries private communications across a public network",
          "correctItemId": "i5"
        }
      ],
      "explanation": "Firewalls enforce rules; remote-access services authenticate clients; DHCP supplies configuration; NAT translates addresses; VPNs carry protected private traffic.",
      "id": "net-318"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "A router interconnects separate IP networks.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "VLAN membership is normally configured on switch ports.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Source NAT can translate a private source address to a public address.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Routers connect networks, switches normally establish VLAN port membership and NAT translates addresses. A router can route between VLANs, but that is different from configuring switch-port membership.",
      "id": "net-319"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "Ordinary HTTP websites use TCP port 25 by default.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "HTTPS normally uses port 443.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "HTTP normally uses port 80.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Port 25 is SMTP. The conventional defaults are 80 for HTTP and 443 for HTTPS; HTTP/3 uses UDP 443.",
      "id": "net-320"
    },
    {
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which classic coaxial Ethernet topology requires termination at both ends of its backbone?",
      "options": [
        "Bus",
        "Ring",
        "Mesh",
        "Star"
      ],
      "correct": 0,
      "explanation": "A coaxial bus backbone needs termination at both ends to prevent signal reflections. Mesh does not have this requirement.",
      "id": "net-321"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "A home router supplies both IP and DNS settings through DHCP. Select the two client settings needed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Obtain an IP address automatically"
        },
        {
          "id": "i2",
          "text": "Obtain DNS server address automatically"
        },
        {
          "id": "i3",
          "text": "Manually assign a random IP address"
        },
        {
          "id": "i4",
          "text": "Disable DNS"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "IP-address setting",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "DNS setting",
          "correctItemId": "i2"
        }
      ],
      "explanation": "The client must request an IP lease and accept the DNS servers supplied in DHCP options. These settings follow directly from the stated requirement; no screenshot is needed.",
      "id": "net-322"
    },
    {
      "chapter": "depanare-unelte",
      "type": "drag_drop",
      "question": "Match each Windows ping command or option to its behavior.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ping -l <size> <host>"
        },
        {
          "id": "i2",
          "text": "ping 127.0.0.1"
        },
        {
          "id": "i3",
          "text": "ping -t <host>"
        },
        {
          "id": "i4",
          "text": "ping -n <count> <host>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Sets the number of echo requests",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Pings continuously until stopped",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Sends the default four requests to loopback",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Sets the ICMP data-buffer size",
          "correctItemId": "i1"
        }
      ],
      "explanation": "On Windows, -n sets count, -t repeats, -l sets buffer size and 127.0.0.1 is IPv4 loopback.",
      "id": "net-323"
    },
    {
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match the minimum listed category commonly taught for each Ethernet rate.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Cat5e"
        },
        {
          "id": "i2",
          "text": "Cat5"
        },
        {
          "id": "i3",
          "text": "Cat2"
        },
        {
          "id": "i4",
          "text": "Cat3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1000BASE-T, using the conventional Cat5e deployment minimum",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "10BASE-T",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "100BASE-TX",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Introductory deployment guidance commonly pairs 1000BASE-T with Cat5e, 10BASE-T with Cat3 and 100BASE-TX with Cat5. Properly qualified legacy Cat5 can sometimes support gigabit, so this is not an exclusive speed capability claim.",
      "id": "net-324"
    },
    {
      "chapter": "protocoale",
      "type": "multiple",
      "question": "A router uses 192.168.1.100/24. Which two unused addresses can be assigned to another host on that subnet? Choose two.",
      "options": [
        "192.168.100.1",
        "192.168.1.100",
        "192.168.1.5",
        "192.168.1.255",
        "192.168.1.254",
        "192.168.0.10"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "Valid host addresses are 192.168.1.1–254, excluding addresses already used. .100 is the router and .255 is the subnet broadcast.",
      "id": "net-325"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which broadband technology uses a telephone copper pair to reach equipment at the telephone provider?",
      "options": [
        "Cable",
        "ISDN",
        "WAN as a specific access technology",
        "DSL"
      ],
      "correct": 3,
      "explanation": "DSL uses telephone copper to connect to provider DSL equipment. WAN is a network scope, not the name of this specific access technology.",
      "id": "net-326"
    },
    {
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "In the conceptual OSI model, which three communication relationships are recognized? Choose three.",
      "options": [
        "Any nonadjacent local layer directly",
        "A logical peer layer on another host",
        "No interlayer communication",
        "The immediately lower local layer",
        "All higher local layers directly",
        "The immediately higher local layer"
      ],
      "correct": [
        1,
        3,
        5
      ],
      "explanation": "A layer uses the service of the adjacent lower layer and supplies services to the adjacent upper layer. Peer-layer protocols define logical communication between corresponding layers on remote systems.",
      "id": "net-327"
    },
    {
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "Which three OSI layers map to the TCP/IP Application layer? Choose three.",
      "options": [
        "Network",
        "Session",
        "Presentation",
        "Physical",
        "Data Link",
        "Application",
        "Transport"
      ],
      "correct": [
        1,
        2,
        5
      ],
      "explanation": "The TCP/IP Application layer covers functions represented by the OSI Application, Presentation and Session layers.",
      "id": "net-328"
    },
    {
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match the IPv4 ranges to their classifications.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Public address space"
        },
        {
          "id": "i2",
          "text": "Multicast address space"
        },
        {
          "id": "i3",
          "text": "Private address space"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "192.168.0.0–192.168.255.255",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "224.0.0.0–239.255.255.255",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "75.0.0.0–75.255.255.255",
          "correctItemId": "i1"
        }
      ],
      "explanation": "192.168/16 is RFC1918 private space, 224/4 is multicast and the listed 75/8 range is public unicast space (not proof that every individual address is assigned).",
      "id": "net-329"
    },
    {
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Assume traditional Ethernet ports with no Auto MDI-X. Choose cable wiring for these connections.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Straight-through"
        },
        {
          "id": "i2",
          "text": "Rollover"
        },
        {
          "id": "i3",
          "text": "Crossover"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Computer NIC to hub",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Hub to switch",
          "correctItemId": "i3"
        }
      ],
      "explanation": "A conventional computer NIC uses MDI and a hub/switch port uses MDI-X, so NIC-to-hub is straight-through. Hub-to-switch connects two MDI-X ports and requires crossover without Auto MDI-X.",
      "id": "net-330"
    },
    {
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is a major weakness of a classic bus topology?",
      "options": [
        "Its backbone is a single point of failure",
        "Every endpoint is an independent router",
        "It requires several radio cards at every node",
        "It always uses one central switch"
      ],
      "correct": 0,
      "explanation": "Damage to the shared backbone or its termination can disrupt the whole classic bus segment.",
      "id": "net-331"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPv4 destination prefix denotes a default route?",
      "options": [
        "255.255.255.255/32",
        "127.0.0.1/32",
        "0.0.0.0/0",
        "1.1.1.1/32"
      ],
      "correct": 2,
      "explanation": "The prefix /0 matches every IPv4 destination. A more-specific matching route is preferred when available.",
      "id": "net-332"
    },
    {
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which statement best describes a basic peer-to-peer workgroup?",
      "options": [
        "It requires Active Directory",
        "Peers can share resources without a dedicated central server",
        "It requires domain single sign-on",
        "It requires RADIUS"
      ],
      "correct": 1,
      "explanation": "In a peer-to-peer workgroup, individual machines can share resources and manage access without a dedicated directory server. “Ten devices or fewer” is guidance, not a defining technical limit.",
      "id": "net-333"
    },
    {
      "chapter": "echipamente",
      "type": "single",
      "question": "What is a virtual machine?",
      "options": [
        "An authentication-only server",
        "A smart thermostat",
        "A software-defined computer that runs a guest operating system on virtual hardware",
        "Cloud file storage"
      ],
      "correct": 2,
      "explanation": "A hypervisor presents virtual CPU, memory, storage and networking to a guest OS. Multiple VMs can share a physical host, but multiple OSes are not part of the definition of one VM.",
      "id": "net-334"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which tool checks the wire map of a newly terminated copper Ethernet cable?",
      "options": [
        "Multimeter",
        "TDR only",
        "Cable tester",
        "Toner only"
      ],
      "correct": 2,
      "explanation": "A cable tester checks continuity, pin mapping and wiring faults. A toner locates a cable; a TDR estimates distances to impedance faults.",
      "id": "net-335"
    },
    {
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two fields can a basic packet-filtering firewall inspect? Choose two.",
      "options": [
        "Transport ports",
        "Image colors",
        "User account display names",
        "IP protocol number"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Basic packet filters can inspect IP addresses, protocol identifiers and TCP/UDP ports. Advanced firewalls can additionally inspect applications and identities.",
      "id": "net-336"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which link mode permits simultaneous sending and receiving?",
      "options": [
        "Simplex",
        "Full duplex",
        "Half duplex",
        "Gigabit as a duplex mode"
      ],
      "correct": 1,
      "explanation": "Full duplex supports simultaneous bidirectional communication. Gigabit specifies a data rate, not the definition of a duplex mode.",
      "id": "net-337"
    },
    {
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "Which two are conventional dedicated digital leased-line services? Choose two.",
      "options": [
        "T1",
        "Dial-up",
        "Ordinary residential cable broadband",
        "E1"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "T1 and E1 are conventional dedicated digital circuits. Dial-up is switched, and ordinary residential cable is shared broadband. DSL is not universally a leased-line service.",
      "id": "net-338"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which wireless mode connects peers directly without an access point?",
      "options": [
        "Peer-to-peer Ethernet",
        "Bridged infrastructure",
        "Ad hoc",
        "Infrastructure"
      ],
      "correct": 2,
      "explanation": "An ad hoc Wi-Fi network does not rely on a centralized access point. Infrastructure mode does.",
      "id": "net-339"
    },
    {
      "chapter": "echipamente",
      "type": "single",
      "question": "Which hypervisor type runs directly on host hardware rather than as an application inside a host OS?",
      "options": [
        "Type III",
        "Type II",
        "Type I",
        "Type IV"
      ],
      "correct": 2,
      "explanation": "A Type I hypervisor runs on bare metal. A Type II hypervisor is hosted by an operating system.",
      "id": "net-340"
    },
    {
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each service to its conventional server port.",
      "dragItems": [
        {
          "id": "i1",
          "text": "HTTPS"
        },
        {
          "id": "i2",
          "text": "SMTP"
        },
        {
          "id": "i3",
          "text": "FTP control"
        },
        {
          "id": "i4",
          "text": "DNS"
        },
        {
          "id": "i5",
          "text": "SSH"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "443",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "21",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "25",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "53",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "22",
          "correctItemId": "i5"
        }
      ],
      "explanation": "The conventional ports are HTTPS 443, FTP control 21, SMTP 25, DNS 53 and SSH 22. DNS uses both UDP and TCP.",
      "id": "net-341"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You will be late to a customer appointment. What is the best immediate response?",
      "options": [
        "Offer an unapproved discount",
        "Wait until arrival before explaining",
        "Cancel without notice",
        "Call promptly and explain the delay with an updated arrival estimate"
      ],
      "correct": 3,
      "explanation": "Timely communication lets the customer adjust plans and maintains professional expectations.",
      "id": "net-342"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which tool measures electrical voltage, current and resistance?",
      "options": [
        "Toner",
        "Multimeter",
        "OTDR",
        "TDR"
      ],
      "correct": 1,
      "explanation": "A multimeter measures electrical quantities. OTDR and TDR locate faults using signal reflections in optical and electrical media respectively.",
      "id": "net-343"
    },
    {
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two packet-header fields can basic firewall rules use? Choose two.",
      "options": [
        "IP addresses",
        "User display names",
        "Desktop application titles",
        "Transport ports"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Basic packet-filtering rules can use source/destination IP addresses and ports. IP protocol number is another valid field; identities and application awareness require additional mechanisms.",
      "id": "net-344"
    },
    {
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "Some cordless phones can interfere with Wi-Fi in the same frequency band.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Fluorescent-light equipment can generate electromagnetic interference.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Microwave ovens are primarily a source of 2.4-GHz Wi-Fi interference, rather than the typical explanation for wired-link failures.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Radio devices can contend or interfere in overlapping bands, and electrical lighting equipment can emit EMI. Microwave ovens are especially associated with 2.4-GHz wireless interference.",
      "id": "net-345"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "On a Cisco-style routing table, what is the administrative distance of a directly connected route?",
      "options": [
        "0",
        "255",
        "1",
        "120"
      ],
      "correct": 0,
      "explanation": "A directly connected route has administrative distance 0. Static routes normally default to 1 and RIP routes to 120 on Cisco platforms.",
      "id": "net-346"
    },
    {
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which two statements about RIP are true? Choose two.",
      "options": [
        "A reachable route can have at most 15 hops",
        "It scales efficiently without limit",
        "It uses hop count as its routing metric",
        "Every change is broadcast instantly to every router"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "RIP uses hop count; metric 16 is unreachable. Periodic and triggered updates still require convergence time, so changes are not instantaneous.",
      "id": "net-347"
    },
    {
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two statements about legacy Internet Explorer security zones are true on a machine without restrictive policy? Choose two.",
      "options": [
        "There are four standard security zones",
        "Adding a site to a zone always blocks it",
        "Local Intranet and Trusted Sites must always have identical settings",
        "Restricted Sites security settings can be customized where policy permits",
        "Zones are managed only in Windows Firewall"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "The standard zones are Internet, Local Intranet, Trusted Sites and Restricted Sites. Zone settings are managed through Internet Options and may be constrained by policy, not by Windows Firewall.",
      "id": "net-348"
    },
    {
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "A failure of one spoke cable in a simple star normally affects only that endpoint’s link.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A central connection point can simplify adding endpoints.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Failure of the sole central device leaves all endpoint communication unaffected.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A star isolates most spoke failures, but its sole central device is a single point of failure unless redundancy is added.",
      "id": "net-349"
    },
    {
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "A single home computer securely connects to the company intranet over the Internet. Classify the connection.",
      "dragItems": [
        {
          "id": "i1",
          "text": "VPN"
        },
        {
          "id": "i2",
          "text": "GRE alone"
        },
        {
          "id": "i3",
          "text": "Host-to-site"
        },
        {
          "id": "i4",
          "text": "Site-to-site"
        },
        {
          "id": "i5",
          "text": "Host-to-host"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Protected connection technology",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "VPN connection type",
          "correctItemId": "i3"
        }
      ],
      "explanation": "A remote individual host connecting to a company VPN gateway uses a host-to-site (remote-access) VPN. GRE alone does not provide encryption.",
      "id": "net-350"
    },
    {
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match the protocol data unit to its conventional OSI layer.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Transport"
        },
        {
          "id": "i2",
          "text": "Application"
        },
        {
          "id": "i3",
          "text": "Network"
        },
        {
          "id": "i4",
          "text": "Session"
        },
        {
          "id": "i5",
          "text": "Presentation"
        },
        {
          "id": "i6",
          "text": "Physical"
        },
        {
          "id": "i7",
          "text": "Data Link"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Bit",
          "correctItemId": "i6"
        },
        {
          "id": "z2",
          "label": "Frame",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Packet",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "TCP segment",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Physical transmits bits; Data Link handles frames; Network handles packets; TCP at Transport handles segments.",
      "id": "net-351"
    },
    {
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "dhcp -release is the standard Windows command to release a DHCP lease.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "dhcp -renew is the standard Windows command to renew a DHCP lease.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "ipconfig /release releases the current DHCP IPv4 lease.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "ipconfig /renew requests renewal of DHCP configuration.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Windows uses ipconfig /release and ipconfig /renew for these DHCP operations, not dhcp -release/-renew.",
      "id": "net-352"
    },
    {
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match these decimal data rates.",
      "dragItems": [
        {
          "id": "i1",
          "text": "1 Gbps"
        },
        {
          "id": "i2",
          "text": "10 Mbps"
        },
        {
          "id": "i3",
          "text": "1000 Kbps"
        },
        {
          "id": "i4",
          "text": "1 Kbps"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1 Mbps",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "1,000 bits per second",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "1,000 megabits per second",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "10,000,000 bits per second",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Networking rates normally use decimal prefixes: kilo=1000, mega=1,000,000 and giga=1,000,000,000 bits per second. b is bits, not bytes.",
      "id": "net-353"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "Match each DNS need to a record type.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A"
        },
        {
          "id": "i2",
          "text": "CNAME"
        },
        {
          "id": "i3",
          "text": "PTR"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Create an alias for a canonical hostname",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Resolve an address back to a hostname",
          "correctItemId": "i3"
        }
      ],
      "explanation": "CNAME creates a name alias. PTR records in reverse zones map addresses to domain names. A maps names to IPv4 addresses.",
      "id": "net-354"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which is the strongest Wi-Fi security option among these listed legacy choices?",
      "options": [
        "RADIUS alone",
        "WEP",
        "WPA2 with AES-CCMP",
        "Original WPA with TKIP"
      ],
      "correct": 2,
      "explanation": "Among these choices, WPA2 using AES-CCMP is strongest. RADIUS is an authentication service, not an encryption scheme. WPA3 is newer but is not among the choices.",
      "id": "net-355"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "IP itself is connection-oriented and guarantees reliable delivery.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "TCP provides a connection-oriented reliable ordered byte stream.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "UDP is connectionless and does not itself guarantee delivery or ordering.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "IP is best-effort. TCP provides retransmission and ordering, while UDP supplies datagrams without built-in delivery or ordering guarantees. TCP cannot overcome a permanent network outage.",
      "id": "net-356"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the nominal line rate of an E1 circuit with 32 time slots?",
      "options": [
        "2.048 Mbps",
        "34.368 Mbps",
        "44.736 Mbps",
        "1.544 Mbps"
      ],
      "correct": 0,
      "explanation": "32 × 64 kbps = 2.048 Mbps gross line rate. Some time slots are used for framing or signaling rather than user payload.",
      "id": "net-357"
    },
    {
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each conventional WAN service to its nominal rate.",
      "dragItems": [
        {
          "id": "i1",
          "text": "56 kbps"
        },
        {
          "id": "i2",
          "text": "128 kbps"
        },
        {
          "id": "i3",
          "text": "1.544 Mbps"
        },
        {
          "id": "i4",
          "text": "2.048 Mbps"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Analog dial-up maximum downstream under suitable conditions",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "E1 gross line rate",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "ISDN BRI two-channel bearer rate",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "T1 gross line rate",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Dial-up is conventionally up to 56 kbps downstream, ISDN BRI has two 64-kbps B channels, E1 is 2.048 Mbps and T1 is 1.544 Mbps gross. T1 user-channel payload is 1.536 Mbps.",
      "id": "net-358"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "A CNAME record can only ever be created by a person manually typing it.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "DNS can map hostnames to IP addresses.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "LMHOSTS is the normal file for mapping arbitrary DNS FQDNs to IP addresses.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "CNAME records may be provisioned by people or automation. DNS resolves names; LMHOSTS maps legacy NetBIOS names, while HOSTS maps hostnames locally.",
      "id": "net-359"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
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
          "label": "Firewalls can only be installed on individual endpoints.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Firewalls can be hardware appliances or software.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Basic packet filters primarily identify users by account name.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Firewalls can protect hosts or network boundaries. Basic packet filters use network/transport header fields; identity-aware products can add user-based policy.",
      "id": "net-360"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "Complete the descriptions of a network-connected smart thermostat.",
      "dragItems": [
        {
          "id": "i1",
          "text": "An app"
        },
        {
          "id": "i2",
          "text": "A printed wall chart"
        },
        {
          "id": "i3",
          "text": "An IP address on its IP interface"
        },
        {
          "id": "i4",
          "text": "A personal account on every device"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "How a user may remotely control the thermostat",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Addressing required for the thermostat’s direct IP interface",
          "correctItemId": "i3"
        }
      ],
      "explanation": "A smart thermostat can be controlled by an app. Direct IP interfaces need IP addressing, but some IoT endpoints use non-IP links through a gateway, so not every IoT device must have its own IP address.",
      "id": "net-361"
    },
    {
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "Which three listed commands can help diagnose networking on Linux when installed? Choose three.",
      "options": [
        "ip",
        "netbios",
        "ping",
        "ipconfig",
        "netstat"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "ip examines interfaces/routes, ping tests ICMP reachability and netstat examines connections and listeners. ipconfig is a Windows command; ss is a common modern replacement for netstat.",
      "id": "net-362"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which DNS server is authoritative for the complete set of records in a particular zone?",
      "options": [
        "An authoritative primary or secondary server for that zone",
        "Every root server for all Internet hosts",
        "Every recursive cache for all Internet hosts",
        "DNSSEC as a server type"
      ],
      "correct": 0,
      "explanation": "Authoritative servers hold their zones’ records. Root DNS servers hold root-zone delegation information, not a complete table of every Internet hostname and address.",
      "id": "net-363"
    },
    {
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "A compatible single-band 802.11ac access point runs at 5GHz with legacy modes enabled. Which two legacy standards can use that band? Choose two.",
      "options": [
        "802.11n with 5GHz support",
        "802.11b",
        "802.11a",
        "802.11g"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "802.11a uses 5GHz, and compatible 802.11n radios can use 5GHz. 802.11b/g use 2.4GHz. Compatibility also requires that the AP enable those modes.",
      "id": "net-364"
    },
    {
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What topology connects devices in a closed loop with each device linked to its two neighbors?",
      "options": [
        "Ring",
        "Diamond as a standard topology category",
        "Star",
        "Full mesh"
      ],
      "correct": 0,
      "explanation": "A ring is a closed loop. A star has a central node; full mesh connects each node to every other node.",
      "id": "net-365"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which IEEE family defines wireless LAN standards?",
      "options": [
        "802.11",
        "802.5",
        "802.2",
        "802.3"
      ],
      "correct": 0,
      "explanation": "IEEE 802.11 defines wireless LAN technology. IEEE 802.3 defines Ethernet.",
      "id": "net-366"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Using historical default classful masks, what is the smallest listed class with room for 750 hosts on one network?",
      "options": [
        "Class C",
        "Class B",
        "Class D",
        "Class A"
      ],
      "correct": 1,
      "explanation": "A default Class C /24 has 254 ordinary host addresses; a Class B /16 has enough. Modern design uses CIDR: a /22 can fit 750 ordinary hosts.",
      "id": "net-367"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which is the private Class A network under historical classful addressing?",
      "options": [
        "192.168.1.0",
        "100.10.1.0",
        "172.168.0.1",
        "10.0.0.0"
      ],
      "correct": 3,
      "explanation": "10.0.0.0/8 is the RFC1918 private Class A block. 192.168/16 is private but historically Class C; the other choices do not identify a private Class A block.",
      "id": "net-368"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPv6 address type delivers a packet to all members of a selected group?",
      "options": [
        "Broadcast",
        "Singlecast",
        "Anycast",
        "Multicast"
      ],
      "correct": 3,
      "explanation": "IPv6 multicast targets members of a group. Anycast targets one instance, typically the nearest by routing; IPv6 does not use broadcast.",
      "id": "net-369"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the correctly compressed form of this IPv6 address?",
      "options": [
        "2001:4860:0:2001:0:0:0:68",
        "21:486::21:::68",
        "2001:4860::::68",
        "2001:4860:0:2001::68"
      ],
      "correct": 3,
      "explanation": "Drop leading zeroes in each group and replace the longest contiguous run of all-zero groups once with ::. The address still expands to eight 16-bit groups.",
      "code": "2001:4860:0000:2001:0000:0000:0000:0068",
      "id": "net-370"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which legacy Windows file maps NetBIOS names to IPv4 addresses?",
      "options": [
        "HOSTS",
        "WINS",
        "LMHOSTS",
        "DNS"
      ],
      "correct": 2,
      "explanation": "LMHOSTS is a local file for NetBIOS name mappings. WINS is a service, and HOSTS is used for hostname mappings.",
      "id": "net-371"
    },
    {
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two publicly reachable server roles commonly belong on a perimeter segment rather than the trusted internal LAN? Choose two.",
      "options": [
        "Public mail gateway",
        "Internal file server",
        "Public web server",
        "Internal print server"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Public web services and mail gateways need controlled external reachability. Internal file and print servers should not ordinarily be directly exposed to the Internet.",
      "id": "net-372"
    },
    {
      "id": "net-373",
      "chapter": "echipamente",
      "type": "single",
      "question": "In Hyper-V, which virtual switch permits VM-to-VM and VM-to-host communication, but no external-network access?",
      "options": [
        "Internal",
        "Endpoint",
        "Private",
        "External"
      ],
      "correct": 0,
      "explanation": "An internal switch includes the host and its VMs. A private switch excludes the host; an external switch connects to a physical network."
    },
    {
      "id": "net-374",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each function to the four-layer TCP/IP model.",
      "explanation": "Network Access handles local framing, Internet handles IP, Transport includes TCP segmentation, and application protocols can provide TLS encryption. Encryption can also exist at other layers.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Network Access"
        },
        {
          "id": "i2",
          "text": "Application"
        },
        {
          "id": "i3",
          "text": "Transport"
        },
        {
          "id": "i4",
          "text": "Internet"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Adds physical MAC addressing to frames",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Uses IP addressing for packets",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Segments an application data stream",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Provides application-layer encryption such as TLS",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-375",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which two listed protocols are used to send and retrieve email? Choose two.",
      "options": [
        "SMTP",
        "SSH",
        "FTP",
        "IMAP"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "SMTP sends email and IMAP retrieves/manages mailbox messages. These choices are protocol names, not port numbers."
    },
    {
      "id": "net-376",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "An OTDR tests optical fiber; a TDR tests electrical cable reflections. A toner traces copper. A multimeter can check basic continuity/voltage, but cannot certify Ethernet performance.",
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
          "label": "A conventional electrical TDR is the appropriate tool for finding breaks in optical fiber.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A tone generator and probe can trace a copper cable through a wall.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A multimeter alone can certify Ethernet cable performance at its rated network speed.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-377",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which Linux DNS utility can query root name-server records, for example with dig . NS?",
      "options": [
        "nslookup",
        "host",
        "dnslookup",
        "dig"
      ],
      "correct": 3,
      "explanation": "dig can query the root zone NS records and display the answering DNS server. Thirteen root-server names correspond to many anycast instances."
    },
    {
      "id": "net-378",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In the conventional OSI teaching model, which layer is associated with data representation and encryption?",
      "options": [
        "Presentation",
        "Data Link",
        "Application",
        "Session"
      ],
      "correct": 0,
      "explanation": "The presentation layer is conventionally associated with encoding, compression and encryption. Actual security protocols can operate at multiple layers."
    },
    {
      "id": "net-379",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "The screenshot shows cached DNS records. A single website fails on this computer but works on another device. Choose the command that displays this cache and the command that clears it.",
      "explanation": "ipconfig /displaydns displays the resolver cache; /flushdns clears it. Flushing may help stale-cache problems but does not guarantee that all website failures are resolved.",
      "image": "assets/networking/pdf-007-dns-cache.png",
      "imageAlt": "dns cache",
      "dragItems": [
        {
          "id": "i1",
          "text": "ipconfig /displaydns"
        },
        {
          "id": "i2",
          "text": "ipconfig /flushdns"
        },
        {
          "id": "i3",
          "text": "ipconfig /release"
        },
        {
          "id": "i4",
          "text": "netstat -a"
        },
        {
          "id": "i5",
          "text": "tracert"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display cached DNS records",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Clear the local DNS resolver cache",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-380",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which three are switch-port roles or configurations?",
      "options": [
        "Access",
        "Unmanaged",
        "Voice access",
        "Trunk",
        "Managed"
      ],
      "correct": [
        0,
        2,
        3
      ],
      "explanation": "Access and trunk are port modes. An access port can additionally be configured for a voice VLAN. Managed/unmanaged describes switch management capability, not port roles."
    },
    {
      "id": "net-381",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Every node connects directly to every other node. Which physical topology is this?",
      "options": [
        "Star",
        "Full mesh",
        "Ring",
        "Diamond"
      ],
      "correct": 1,
      "explanation": "A full mesh supplies a direct connection between every pair of nodes."
    },
    {
      "id": "net-382",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which twisted-pair category can support 10GBASE-T for up to approximately 55 metres under suitable installation conditions?",
      "options": [
        "Cat6a",
        "Cat7",
        "Cat5",
        "Cat6"
      ],
      "correct": 3,
      "explanation": "Cat6 can support 10GBASE-T at reduced distances, commonly up to 55 m, depending on alien crosstalk and installation. Cat6a supports the full 100 m channel."
    },
    {
      "id": "net-383",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Complete the statements about wireless network arrangements. Disabling SSID broadcast is not a replacement for WPA2/WPA3 authentication.",
      "explanation": "Ad hoc operates between peers; infrastructure uses an AP. Suppressing SSID broadcasts does not prevent discovery by a knowledgeable attacker.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Ad hoc"
        },
        {
          "id": "i2",
          "text": "Infrastructure"
        },
        {
          "id": "i3",
          "text": "SSID broadcast"
        },
        {
          "id": "i4",
          "text": "WPA encryption"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Wi-Fi peers communicate directly without an access point",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Mode without centralized access-point control",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Mode controlled by a wireless access point",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Setting that can hide the network name from ordinary beacon listings",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-384",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "At which OSI layer does TCP operate?",
      "options": [
        "Layer 2",
        "Layer 4",
        "Layer 1",
        "Layer 3"
      ],
      "correct": 1,
      "explanation": "TCP is a transport-layer protocol, conventionally OSI Layer 4."
    },
    {
      "id": "net-385",
      "chapter": "infrastructura",
      "type": "single",
      "question": "For a home-office wired channel no longer than 100 m, which listed option is normally the least expensive that supports 1 Gbps Ethernet?",
      "options": [
        "Coaxial",
        "Cat3",
        "Fiber optic",
        "Cat5e"
      ],
      "correct": 3,
      "explanation": "Cat5e supports 1000BASE-T over a compliant channel up to 100 m and is ordinarily cheaper than fiber for this scenario."
    },
    {
      "id": "net-386",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each address to its historical IPv4 class. Modern routing uses CIDR.",
      "explanation": "Historically the first octet identifies A (1–126), B (128–191), C (192–223), or D multicast (224–239).",
      "dragItems": [
        {
          "id": "i1",
          "text": "10.123.12.1"
        },
        {
          "id": "i2",
          "text": "199.11.221.4"
        },
        {
          "id": "i3",
          "text": "130.34.3.223"
        },
        {
          "id": "i4",
          "text": "224.2.200.35"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class A",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Class B",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Class C",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Class D",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-387",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which NAT mechanism lets multiple private hosts share one public IPv4 address by translating transport port numbers?",
      "options": [
        "PAT",
        "Dynamic NAT without port translation",
        "Static one-to-one NAT",
        "One-to-one mapping"
      ],
      "correct": 0,
      "explanation": "PAT, also called NAPT or NAT overload, distinguishes connections using port numbers."
    },
    {
      "id": "net-388",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "A friend cannot reach the Louvre website. Identify the command shown and the Windows command that combines route discovery with packet-loss statistics.",
      "explanation": "tracert discovers hops. pathping combines tracing and longer-duration loss measurements. The screenshot itself is a tracert output.",
      "image": "assets/networking/pdf-008-tracert-louvre.png",
      "imageAlt": "tracert louvre",
      "dragItems": [
        {
          "id": "i1",
          "text": "tracert"
        },
        {
          "id": "i2",
          "text": "pathping"
        },
        {
          "id": "i3",
          "text": "ping"
        },
        {
          "id": "i4",
          "text": "nslookup"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Tool that generated the screenshot",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Tool for hops and per-hop packet-loss statistics",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-389",
      "chapter": "infrastructura",
      "type": "single",
      "question": "How many T1/DS1 tributaries are multiplexed into a T3/DS3?",
      "options": [
        "28",
        "2",
        "3",
        "16"
      ],
      "correct": 0,
      "explanation": "A DS3 carries 28 DS1 tributaries; the T3 line rate includes multiplexing overhead."
    },
    {
      "id": "net-390",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Multilayer switches combine MAC-based switching and IP-based routing.",
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
          "label": "Layer 2 switches forward Ethernet frames using MAC addresses.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A Layer 3 switch can also perform Layer 2 MAC-based switching.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A Layer 3 switch uses IP addresses when routing.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-391",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two statements accurately describe ordinary Layer 2 switching? Choose two.",
      "options": [
        "Store-and-forward is always the lowest-latency forwarding method.",
        "A switch uses a learned MAC-address table to decide where to forward known unicast frames.",
        "An unknown-unicast frame is normally flooded to other forwarding ports in the same VLAN.",
        "A switch is faster than a hub under every conceivable condition.",
        "A Layer 2 switch normally forwards frames using an IP routing table."
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "Layer 2 switches learn source MAC addresses and use the MAC table to forward known unicasts. Unknown unicasts are flooded within the VLAN, excluding the ingress port."
    },
    {
      "id": "net-392",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In the common introductory OSI grouping, which lower three layers are classified as the network-support/hardware-oriented layers?",
      "options": [
        "Layers 3–7",
        "Layers 4–7",
        "Layers 1–2 only",
        "Layers 1–3"
      ],
      "correct": 3,
      "explanation": "The physical, data link and network layers are often grouped as network-support layers. This is a teaching convention; implementations are not strictly hardware or software."
    },
    {
      "id": "net-393",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each networking function to its conventional OSI layer.",
      "explanation": "The model separates local link framing, routing, transport, sessions, representation and application network services. A word processor itself is not an OSI application-layer protocol.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Application"
        },
        {
          "id": "i2",
          "text": "Data Link"
        },
        {
          "id": "i3",
          "text": "Network"
        },
        {
          "id": "i4",
          "text": "Physical"
        },
        {
          "id": "i5",
          "text": "Presentation"
        },
        {
          "id": "i6",
          "text": "Session"
        },
        {
          "id": "i7",
          "text": "Transport"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Frames and MAC addressing",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "TCP reliable delivery or UDP best-effort transport",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Manages separate dialogs/sessions",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "Logical IP routing",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Voltage, connectors and signalling",
          "correctItemId": "i4"
        },
        {
          "id": "z6",
          "label": "Network services exposed to applications",
          "correctItemId": "i1"
        },
        {
          "id": "z7",
          "label": "Data formats such as character encoding and images",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "net-394",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "Identify the address tested in the screenshot and its IPv6 equivalent.",
      "explanation": "127.0.0.1 is IPv4 loopback; ::1 is IPv6 loopback.",
      "image": "assets/networking/pdf-009-ping-loopback.png",
      "imageAlt": "ping loopback",
      "dragItems": [
        {
          "id": "i1",
          "text": "Loopback"
        },
        {
          "id": "i2",
          "text": "Default gateway"
        },
        {
          "id": "i3",
          "text": "Broadcast"
        },
        {
          "id": "i4",
          "text": "::1"
        },
        {
          "id": "i5",
          "text": "ff02::1"
        },
        {
          "id": "i6",
          "text": "fe80::1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "127.0.0.1 is a",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Equivalent IPv6 loopback address",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-395",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which three are conventional LAN-switch forwarding methods?",
      "options": [
        "ARPA mapping",
        "Store-and-forward",
        "Cut-through",
        "Fragment-free",
        "Routing",
        "Packet switching"
      ],
      "correct": [
        1,
        2,
        3
      ],
      "explanation": "Store-and-forward buffers the entire frame; cut-through starts early; fragment-free waits through the first 64 bytes."
    },
    {
      "id": "net-396",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Ethernet framing and signalling are defined primarily at which part of the OSI model?",
      "options": [
        "WAN application protocols",
        "Routing",
        "Transport",
        "Physical and data link (LAN technologies)"
      ],
      "correct": 3,
      "explanation": "Ethernet spans Layer 1 signalling/media and Layer 2 framing/MAC addressing."
    },
    {
      "id": "net-397",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each tunneling protocol to its conventional control port.",
      "explanation": "SSTP uses TLS over TCP 443. PPTP uses TCP 1723 for control and GRE for tunneled data. L2TP uses UDP 1701; PPTP is not UDP 1723.",
      "dragItems": [
        {
          "id": "i1",
          "text": "L2TP"
        },
        {
          "id": "i2",
          "text": "PPP"
        },
        {
          "id": "i3",
          "text": "SSTP"
        },
        {
          "id": "i4",
          "text": "PPTP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "TCP 443",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "TCP 1723",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "UDP 1701",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-398",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Dynamic NAT uses a pool; PAT can multiplex many clients behind one public IPv4 address. Static one-to-one NAT creates fixed address mappings.",
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
          "label": "Dynamic NAT can translate private addresses using a pool of public addresses.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "PAT requires at least two public IPv4 addresses.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Static one-to-one NAT assigns a separate public address to each simultaneously mapped private address.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-399",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "Which two listed access technologies are commonly used for residential Internet connections?",
      "options": [
        "Cable modem",
        "ISDN",
        "T1",
        "DSL",
        "E1"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Cable broadband and DSL are common residential access technologies. Availability varies by location; fiber and cellular are also common but are not listed."
    },
    {
      "id": "net-400",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which type of switch is normally plug-and-play without user configuration?",
      "options": [
        "Virtual",
        "Unmanaged",
        "Multilayer",
        "Managed"
      ],
      "correct": 1,
      "explanation": "An unmanaged switch operates without a management interface for configuring VLANs, policies or other advanced features."
    },
    {
      "id": "net-401",
      "chapter": "protocoale",
      "type": "single",
      "question": "Is the statement correct: AAAA records map hostnames to 128-bit IPv6 addresses?",
      "options": [
        "No change is needed",
        "They map to IPv4 addresses",
        "The record type is A",
        "IPv6 addresses have 32 bits"
      ],
      "correct": 0,
      "explanation": "AAAA records contain IPv6 addresses; A records contain IPv4 addresses."
    },
    {
      "id": "net-402",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match the addresses to their historical IPv4 classes.",
      "explanation": "Class D is multicast (224–239); the historical Class E range begins at 240. Ordinary routing now uses CIDR.",
      "dragItems": [
        {
          "id": "i1",
          "text": "100.100.1.1"
        },
        {
          "id": "i2",
          "text": "241.241.241.241"
        },
        {
          "id": "i3",
          "text": "170.100.1.5"
        },
        {
          "id": "i4",
          "text": "224.0.0.2"
        },
        {
          "id": "i5",
          "text": "198.126.1.55"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class A",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Class B",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Class C",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Class D",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Class E",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-403",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each Wi-Fi standard to the listed representative radio characteristics. Rates are theoretical PHY rates, not guaranteed application throughput.",
      "explanation": "802.11ac can exceed 1.3 Gbps in other configurations; that value is a representative rate, not the absolute standard maximum.",
      "dragItems": [
        {
          "id": "i1",
          "text": "802.11a"
        },
        {
          "id": "i2",
          "text": "802.11b"
        },
        {
          "id": "i3",
          "text": "802.11ac"
        },
        {
          "id": "i4",
          "text": "802.11n"
        },
        {
          "id": "i5",
          "text": "802.11g"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "2.4 or 5 GHz; up to 600 Mbps",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "5 GHz; 54 Mbps",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "5 GHz; 1.3 Gbps for a common three-stream configuration",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "2.4 GHz; 11 Mbps",
          "correctItemId": "i2"
        },
        {
          "id": "z5",
          "label": "2.4 GHz; 54 Mbps",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "net-404",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Match each description to the appropriate networking component.",
      "explanation": "Ethernet includes physical signalling and data-link framing. Routers interconnect IP networks; switches perform MAC-based forwarding. Translating arbitrary different protocols would require a gateway, not necessarily an IP router.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Layer 2 switch"
        },
        {
          "id": "i2",
          "text": "Router"
        },
        {
          "id": "i3",
          "text": "Network interface card"
        },
        {
          "id": "i4",
          "text": "Ethernet physical signalling"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Physical-layer signalling used by Ethernet",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Routes packets between separate IP networks",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Forwards Ethernet frames using MAC addresses",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-405",
      "chapter": "depanare-unelte",
      "type": "drag_drop",
      "question": "Match each media issue to its description.",
      "explanation": "Collisions concern shared half-duplex Ethernet; crosstalk is coupled interference; attenuation is distance-related loss. Two unrelated radio broadcasts on the same channel are more precisely co-channel interference.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Traffic collisions"
        },
        {
          "id": "i2",
          "text": "Attenuation"
        },
        {
          "id": "i3",
          "text": "Crosstalk"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Simultaneous transmissions on a shared half-duplex Ethernet segment",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Unwanted coupling of one nearby signal into another circuit",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Gradual loss of signal strength over distance",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-406",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "Identify the command whose output is shown, then restrict its output to TCP connections and listeners.",
      "explanation": "netstat -a shows active connections and listeners; on Windows -p tcp restricts the protocol to TCP.",
      "image": "assets/networking/pdf-010-netstat.png",
      "imageAlt": "netstat",
      "dragItems": [
        {
          "id": "i1",
          "text": "netstat -a"
        },
        {
          "id": "i2",
          "text": "netstat -a -p tcp"
        },
        {
          "id": "i3",
          "text": "ipconfig /all"
        },
        {
          "id": "i4",
          "text": "tracert"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display connections and listening endpoints",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Show only the TCP protocol",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-407",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "Count router hops from the source network to the destination network shown. Then choose a routing protocol that uses hop count as its metric.",
      "explanation": "The diagram contains four routers between the end networks. RIP uses hop count; OSPF uses a cost metric.",
      "image": "assets/networking/pdf-011-router-hops.png",
      "imageAlt": "router hops",
      "dragItems": [
        {
          "id": "i1",
          "text": "3"
        },
        {
          "id": "i2",
          "text": "4"
        },
        {
          "id": "i3",
          "text": "5"
        },
        {
          "id": "i4",
          "text": "RIP"
        },
        {
          "id": "i5",
          "text": "OSPF"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Number of routers traversed",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Protocol using hop count",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-408",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each network type to its purpose.",
      "explanation": "An intranet is internal; an extranet grants selected outside parties access; the Internet is the global interconnection.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Extranet"
        },
        {
          "id": "i2",
          "text": "Internet"
        },
        {
          "id": "i3",
          "text": "Intranet"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Global interconnection of networks",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Private organizational network",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Controlled partner/customer access to selected organizational services",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-409",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which listed address is a global-unicast IPv6 address rather than multicast, loopback, or a documentation prefix?",
      "options": [
        "::1",
        "2001:db8::",
        "2003:dead:beef:4dad:23:46:bb:101",
        "ff00::"
      ],
      "correct": 2,
      "explanation": "::1 is loopback, 2001:db8::/32 is reserved for documentation, and ff00::/8 is multicast. Being in global-unicast space does not by itself prove an address is allocated or reachable."
    },
    {
      "id": "net-410",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which device gives each ordinary Ethernet port its own collision domain and supports full-duplex operation with a compatible endpoint?",
      "options": [
        "Router only",
        "Repeater",
        "Hub",
        "Switch"
      ],
      "correct": 3,
      "explanation": "Switch ports separate collision domains. Full-duplex links do not use CSMA/CD collisions."
    },
    {
      "id": "net-411",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which route type is manually configured by an administrator?",
      "options": [
        "Dynamic",
        "Static",
        "Automatically learned",
        "Broadcast"
      ],
      "correct": 1,
      "explanation": "Static routes are configured manually; dynamic protocols learn routes from neighbors."
    },
    {
      "id": "net-412",
      "chapter": "protocoale",
      "type": "single",
      "question": "Assume a current Microsoft Edge configuration that upgrades eligible domain-only navigations to secure URLs. Which protocol is attempted for an eligible public site?",
      "options": [
        "FTP",
        "HTTPS",
        "HTTP only",
        "UDP as a URL scheme"
      ],
      "correct": 1,
      "explanation": "HTTPS uses TLS to secure HTTP. Upgrade behavior depends on the Edge version, configuration and site; older configurations may initially use HTTP."
    },
    {
      "id": "net-413",
      "chapter": "protocoale",
      "type": "single",
      "question": "A server has only fe80::260:8ff:fec0:98d%4 as its IPv6 address. Why is that insufficient for direct global IPv6 communication?",
      "options": [
        "It is a logic-link address",
        "It is malformed",
        "It is necessarily a public address",
        "It is link-local and not forwarded beyond the local link"
      ],
      "correct": 3,
      "explanation": "fe80::/10 is link-local. A suitable globally routable address and working routing are needed for ordinary global IPv6 access. %4 is a Windows interface zone identifier."
    },
    {
      "id": "net-414",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "TCP port 3389 is open on a scanned server. Which service is conventionally associated with it?",
      "options": [
        "DNS",
        "Remote Desktop Services",
        "WINS",
        "RRAS only"
      ],
      "correct": 1,
      "explanation": "RDP conventionally uses port 3389. An open port suggests but does not conclusively prove the identity or security of the listening application."
    },
    {
      "id": "net-415",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "The client shown is 10.1.3.105/24 and must reach servers on 192.168.1.0/24 through a router. Select the missing setting and the required on-link gateway subnet.",
      "explanation": "The default gateway is blank. A normal IPv4 gateway must be reachable on the local 10.1.3.0/24 link. Its exact assigned host address cannot be inferred from the screenshot.",
      "image": "assets/networking/pdf-028-ipconfig-no-gateway.png",
      "imageAlt": "ipconfig no gateway",
      "dragItems": [
        {
          "id": "i1",
          "text": "No default gateway is configured"
        },
        {
          "id": "i2",
          "text": "The DNS address is missing"
        },
        {
          "id": "i3",
          "text": "10.1.3.0/24"
        },
        {
          "id": "i4",
          "text": "192.168.1.0/24"
        },
        {
          "id": "i5",
          "text": "255.255.255.0/24"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Problem visible in the screenshot",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Subnet containing the client-side router address",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-416",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Identify the cable wiring and its conventional use on legacy Ethernet ports without Auto MDI-X.",
      "explanation": "The pairs cross between ends. Legacy same-type ports such as switch-to-switch use a crossover cable; Auto MDI-X can remove that requirement on modern equipment.",
      "image": "assets/networking/pdf-029-crossover-cable.png",
      "imageAlt": "crossover cable",
      "dragItems": [
        {
          "id": "i1",
          "text": "Crossover"
        },
        {
          "id": "i2",
          "text": "Rollover"
        },
        {
          "id": "i3",
          "text": "Straight-through"
        },
        {
          "id": "i4",
          "text": "Switch to switch"
        },
        {
          "id": "i5",
          "text": "Switch to computer"
        },
        {
          "id": "i6",
          "text": "Router Ethernet to switch"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Wiring",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Conventional use",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-417",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "Label the network areas shown.",
      "explanation": "A is the external Internet, B is the internal corporate network and C provides externally reachable perimeter services.",
      "image": "assets/networking/pdf-030-perimeter-network.png",
      "imageAlt": "perimeter network",
      "dragItems": [
        {
          "id": "i1",
          "text": "Internet"
        },
        {
          "id": "i2",
          "text": "Intranet"
        },
        {
          "id": "i3",
          "text": "Extranet / perimeter services"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Area A",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Area B",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Area C",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-418",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Identify the topology and count the links among these four routers.",
      "explanation": "A full mesh with four nodes has 4×3/2 = 6 undirected links.",
      "image": "assets/networking/pdf-031-mesh-routers.png",
      "imageAlt": "mesh routers",
      "dragItems": [
        {
          "id": "i1",
          "text": "Mesh"
        },
        {
          "id": "i2",
          "text": "Star"
        },
        {
          "id": "i3",
          "text": "Bus"
        },
        {
          "id": "i4",
          "text": "4"
        },
        {
          "id": "i5",
          "text": "6"
        },
        {
          "id": "i6",
          "text": "3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Physical topology",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Router-to-router links",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "net-419",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Identify the physical topology of the hub network shown and a technology historically using it.",
      "explanation": "The spokes meet at a central hub, creating a physical star. A hub still shares one logical collision domain.",
      "image": "assets/networking/pdf-033-star-hub.png",
      "imageAlt": "star hub",
      "dragItems": [
        {
          "id": "i1",
          "text": "Bus"
        },
        {
          "id": "i2",
          "text": "Mesh"
        },
        {
          "id": "i3",
          "text": "Star"
        },
        {
          "id": "i4",
          "text": "Hub-based twisted-pair Ethernet"
        },
        {
          "id": "i5",
          "text": "FDDI"
        },
        {
          "id": "i6",
          "text": "Internet backbone"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Physical topology",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Example technology",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-420",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "The client uses 10.1.13.5 with mask 255.255.255.0. Identify the shown gateway problem and the appropriate fix.",
      "explanation": "For 10.1.13.0/24, 10.1.13.255 is broadcast and cannot be the normal unicast gateway. Use the assigned router address on that subnet; the exact address is not supplied.",
      "image": "assets/networking/pdf-050-ipconfig-broadcast-gateway.png",
      "imageAlt": "ipconfig broadcast gateway",
      "dragItems": [
        {
          "id": "i1",
          "text": "The gateway is the subnet broadcast address"
        },
        {
          "id": "i2",
          "text": "The gateway is a usable router host address"
        },
        {
          "id": "i3",
          "text": "Replace the gateway with the actual on-link router host address"
        },
        {
          "id": "i4",
          "text": "Change the mask arbitrarily"
        },
        {
          "id": "i5",
          "text": "Enable DHCP regardless of policy"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Problem",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Fix",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-421",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "Identify the physical topology and the best listed device upgrade for this shared hub-based LAN.",
      "explanation": "The layout is star/hierarchical star. Replacing hubs with switches separates collision domains and enables suitable full-duplex links.",
      "image": "assets/networking/pdf-034-hub-switch-lan.png",
      "imageAlt": "hub switch lan",
      "dragItems": [
        {
          "id": "i1",
          "text": "Mesh"
        },
        {
          "id": "i2",
          "text": "Star"
        },
        {
          "id": "i3",
          "text": "Bus"
        },
        {
          "id": "i4",
          "text": "Replace the hub with a switch"
        },
        {
          "id": "i5",
          "text": "Replace every copper cable with fiber"
        },
        {
          "id": "i6",
          "text": "Replace the hub with a router only"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Topology",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Appropriate upgrade",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-422",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "What are two characteristics of switches? (Choose 2.)",
      "explanation": "Switches learn destination MAC locations and can use full-duplex links. Broadcasts and unknown unicasts may be flooded, but known unicasts are not sent to every port.",
      "options": [
        "Switches identify the intended destination of the data that they receive.",
        "Switches are capable of sending and receiving data at the same time.",
        "Switches send each frame to all of the computers that are connected to them.",
        "Switches cause more data collisions than hubs."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "net-423",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is a feature of the Teredo tunneling protocol?",
      "explanation": "Teredo carries IPv6 packets over an IPv4 infrastructure, including many NAT scenarios. Tunneling does not itself provide VPN encryption.",
      "options": [
        "It enables the passing of IPv6 traffic through IPv4 networks.",
        "It dynamically allocates IPv6 addresses.",
        "It provides VPN security.",
        "It translates IPv4 traffic to IPv6 traffic."
      ],
      "correct": 0
    },
    {
      "id": "net-424",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement about switches, select True or False.\nNote: You will receive partial credit for each correct selection.",
      "explanation": "A known unicast is forwarded toward its learned destination. Unknown unicasts and broadcasts are flooded within the VLAN, except back to their incoming port. Broadcasts are not restricted to an uplink.",
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
          "label": "A switch forwards a known unicast frame to its learned destination port.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A switch floods an unknown unicast within the same VLAN, excluding the ingress port.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A switch sends broadcasts only to its uplink port.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-425",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Move each VPN term from the list on the left to the correct definition on the right.\nNote: You will receive partial credit for each correct answer.\n\n : Allows a remote user to connect to a private network from anywhere on the internet\n : Securely connects two portions of a private network or two private networks\n : Creates an unencrypted connection between two network devices",
      "explanation": "An SSL/TLS VPN supports remote-user access. Site-to-site connects networks. L2TP provides tunneling but no encryption by itself; it is commonly paired with IPsec.",
      "dragItems": [
        {
          "id": "i1",
          "text": "SSL VPN"
        },
        {
          "id": "i2",
          "text": "Layer 2 Tunneling Protocol"
        },
        {
          "id": "i3",
          "text": "Site-to-Site VPN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Allows a remote user to connect to a private network from anywhere on the internet",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Securely connects two portions of a private network or two private networks",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Creates an unencrypted connection between two network devices",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-426",
      "chapter": "protocoale",
      "type": "single",
      "question": "You need to configure a router to enable internal clients with private IPv4 addresses to\naccess the internet and navigate to multiple websites.\nWhat should you configure?",
      "explanation": "NAT translates private IPv4 addresses to a public address; PAT/NAT overload can allow many clients to share that address.",
      "options": [
        "WAP",
        "DHCP",
        "NAT",
        "VPN"
      ],
      "correct": 2
    },
    {
      "id": "net-427",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Move the appropriate TCP port numbers from the list on the left to the correct services\non the right.\nNote: You will receive partial credit for each correct answer.\n\n : SMTP\n : FTP\n : HTTPS",
      "explanation": "SMTP normally uses TCP 25 for server-to-server transfer, FTP control uses TCP 21 and HTTPS uses TCP 443.",
      "dragItems": [
        {
          "id": "i1",
          "text": "21"
        },
        {
          "id": "i2",
          "text": "25"
        },
        {
          "id": "i3",
          "text": "53"
        },
        {
          "id": "i4",
          "text": "80"
        },
        {
          "id": "i5",
          "text": "443"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SMTP",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "FTP",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "HTTPS",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "net-428",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "You are studying for finals in the student lounge. When your laptop is connected to the\nwireless network, access to the internet is slow. When you connect to the network by\nusing an Ethernet cable, you can no longer access the internet. You run the ipconfig\n/all command. The results are shown in the image.\n\nEvaluate the image and complete the statements by selecting the correct option from each\ndrop-down list.\n\nThe IP address of the wireless adapter is configured \n[1]\n\nThe IP address of the Ethernet adapter is configured \n[2]",
      "explanation": "The wireless adapter has a lease, DHCP server and 192.168.11.48 address. Ethernet shows 169.254.143.166 with no gateway, indicating an APIPA fallback after DHCP failure.",
      "dragItems": [
        {
          "id": "i1",
          "text": "By DHCP"
        },
        {
          "id": "i2",
          "text": "Manually with a static address"
        },
        {
          "id": "i3",
          "text": "Automatically with APIPA after DHCP failed"
        },
        {
          "id": "i4",
          "text": "By DNS name lookup"
        },
        {
          "id": "i5",
          "text": "By DHCP"
        },
        {
          "id": "i6",
          "text": "Manually with a static address"
        },
        {
          "id": "i7",
          "text": "By DNS name lookup"
        },
        {
          "id": "i8",
          "text": "Automatically with APIPA after DHCP failed"
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
      ],
      "image": "assets/networking/pdf-096-ipconfig-all.png"
    },
    {
      "id": "net-429",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which hardware is required to properly connect a LAN to a WAN?",
      "explanation": "A router forwards packets between separate IP networks, providing the LAN-to-WAN boundary.",
      "options": [
        "Stand-alone access point",
        "Router",
        "Transceiver",
        "Layer 2 switch"
      ],
      "correct": 1
    },
    {
      "id": "net-430",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "In Linux, which command-line tool should you use to list a host's active incoming\nconnections?",
      "explanation": "netstat lists network connections and listening sockets. On modern Linux, ss is the common replacement. host and dig query DNS, and ip addr lists interface addresses.",
      "options": [
        "host",
        "dig",
        "ip addr",
        "netstat"
      ],
      "correct": 3
    },
    {
      "id": "net-431",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You are a network support technician. The company president reports that his wired\nnetwork printer is not working. To test the line, you need to know where the jack is\nplugged into the patch panel. However, there are no labels in the main distribution\nframe (MDF), you discover a bundle of 35 cables.\n\nWhich tool should you use to isolate the correct cable?",
      "explanation": "A toner and probe trace a specific cable through an unlabeled bundle. A basic continuity tester does not identify the cable remotely by tone.",
      "options": [
        "Toner",
        "Cable tester",
        "Multimeter",
        "Time-domain reflectometer (TDR)"
      ],
      "correct": 0
    },
    {
      "id": "net-432",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each statement about using a Type 2 hypervisor and virtual machines, select True or\nFalse.\nNote: You will receive partial credit for each correct selection.",
      "explanation": "Guest VMs can reboot independently. Restarting the physical host disrupts its running VMs, and restarting one guest does not require rebooting the host.",
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
          "label": "If you reboot one virtual machine, all the other virtual machines on the server reboot at the same time.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "You can reboot the host machine without it having any effect on the other virtual machines on the same physical server.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "If you need to reboot one virtual machine, you must first reboot the physical server.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-433",
      "chapter": "protocoale",
      "type": "single",
      "question": "In addition to switching, which feature is specific to a multilayer switch?",
      "explanation": "A multilayer switch can route at Layer 3, in addition to switching frames at Layer 2.",
      "options": [
        "Provides Layer 3 routing functions",
        "Bridges traffic between different physical topologies",
        "Translates between various network protocols",
        "Manages addresses for client computers"
      ],
      "correct": 0
    },
    {
      "id": "net-434",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You are a network administrator. Employees in the finance department are complaining\nabout slow data speeds while accessing the company network. One of the computers in the\ndepartment shows the connection is only 100Mbps, but the line should be 1000Mbps.\n\nWhich network hardware tool should you use to determine whether a cable is capable of\n1000Mbps full-duplex transmission?",
      "explanation": "Use a cable certifier or qualifying cable tester rated for the target link. It can verify that the installed cabling supports Gigabit operation; a basic continuity-only tester is insufficient.",
      "options": [
        "Multimeter",
        "Gigabit-rated cable certifier/qualifying tester",
        "Time-domain reflectometer only",
        "Toner"
      ],
      "correct": 1
    },
    {
      "id": "net-435",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You need to run four Ethernet network drops on your company’s manufacturing floor. Each\ndrop is approximately 125 feet/38 meters. Each drop passes near heavy manufacturing\nequipment.\n\nYou need to ensure that interference is reduced.\n\nWhich cable type should you use?",
      "explanation": "Shielded twisted pair helps reduce electromagnetic interference near heavy machinery when installed and grounded correctly. The 38m runs are within normal Ethernet copper distance limits.",
      "options": [
        "UTP Cat6",
        "UTP Cat5e",
        "Cat3",
        "STP Cat5e"
      ],
      "correct": 3
    },
    {
      "id": "net-436",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Your company's computers exchange data through a set of routed private Wi-Fi networks at\na single geographic location.\n\nWhat type of network is this is an example of?",
      "explanation": "A private internal organizational network is an intranet, regardless of whether its access links use Wi-Fi.",
      "options": [
        "Intranet",
        "Perimeter",
        "Extranet",
        "Internet"
      ],
      "correct": 0
    },
    {
      "id": "net-437",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "Remote users need to connect to your network through a server running Windows Server\nthat is deployed on your perimeter network.\nFor each statement, select True or False.\nNote: You will receive partial credit for each correct selection.",
      "explanation": "A VPN can secure remote access across the Internet. The server does not need the same Internet-access technology as the client. A compatible Windows Server remote-access deployment can support appropriately configured Always On VPN clients.",
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
          "label": "You can use a VPN to enable users to make a secure connection to your network through the Internet.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If users connect to the Internet through dial-up connections, the server must also connect through a dial-up connection.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "You can use RAS Gateway to configure a VPN connection for Windows 10 clients that is active whenever the client connects to the Internet.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-438",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "The shown trace targets 173.194.75.105 (use the address in the screenshot). Complete the statements.",
      "explanation": "The trace reaches its target on hop 13 and reports Trace complete. A timeout at an intermediate hop does not by itself mean the end-to-end path failed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Repeater"
        },
        {
          "id": "i2",
          "text": "Patch panel"
        },
        {
          "id": "i3",
          "text": "Router"
        },
        {
          "id": "i4",
          "text": "Hub"
        },
        {
          "id": "i5",
          "text": "Unsuccessfully"
        },
        {
          "id": "i6",
          "text": "Without reaching the destination"
        },
        {
          "id": "i7",
          "text": "Successfully"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Each intermediate forwarding hop normally represents a",
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
          "label": "The trace reached its target",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7"
          ]
        }
      ],
      "image": "assets/networking/pdf-097-tracert.png"
    },
    {
      "id": "net-439",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is the top-level domain of ftp.sunsetweb.org?",
      "explanation": "org is the rightmost DNS label and therefore the top-level domain. ftp is a host label and sunsetweb is the registered-domain label.",
      "options": [
        "ftp",
        "sunsetweb",
        "sunsetweb.org",
        "org"
      ],
      "correct": 3
    },
    {
      "id": "net-440",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol operates at the transport layer of the TCP model?",
      "explanation": "UDP is a transport-layer protocol. IP and IGMP operate at the Internet layer, while FTP is an application-layer protocol.",
      "options": [
        "IGMP",
        "FTP",
        "UDP",
        "IP"
      ],
      "correct": 2
    },
    {
      "id": "net-441",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about the Internet of Things (IoT), select True or False.",
      "explanation": "IP-capable IoT endpoints use IP addressing and can exchange data automatically without continuous human interaction. Network-controlled thermostats and lights are typical examples; some non-IP sensors communicate through gateways instead.",
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
          "label": "IP-capable IoT endpoints use IP addresses.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "IoT devices require continuous human interaction to communicate.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A smart thermostat and a network-controlled lightbulb are IoT examples.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-442",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "What are two purposes of the ping utility? (Choose 2.)",
      "explanation": "ICMP Echo can test a host's loopback/interface stack and whether a remote host responds. A hostname may be resolved before pinging, but ping is not primarily a DNS lookup or port-scanning utility.",
      "options": [
        "To search for duplicate addresses",
        "To resolve host names to IP addresses",
        "To self-test a host's own network interface",
        "To scan for open host firewall ports",
        "To determine whether a host is reachable"
      ],
      "correct": [
        2,
        4
      ]
    },
    {
      "id": "net-443",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which protocol does the ping utility use to test communication with a remote host?",
      "explanation": "ping uses ICMP Echo Request and Echo Reply for IPv4, or the corresponding ICMPv6 messages for IPv6.",
      "options": [
        "HTTP",
        "SNMP",
        "ICMP",
        "BOOTP",
        "OSPF"
      ],
      "correct": 2
    },
    {
      "id": "net-444",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which wireless authentication method provides the highest level of security?",
      "explanation": "Of these listed historical options, WPA2 provides stronger protection than WEP and original WPA. WPS is a provisioning method, not a stronger encryption protocol. WPA3 would be preferred when available but is not listed.",
      "options": [
        "Wi-Fi Protected Access (WPA)",
        "Wired Equivalent Privacy (WEP)",
        "Wi-Fi Protected Access 2 (WPA2)",
        "WPS authentication"
      ],
      "correct": 2
    },
    {
      "id": "net-445",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "You are a network support technician at an internet service provider (ISP). You receive\na call from a customer indicating that they cannot access the internet.\nYou need to troubleshoot the problem.\n\nWhich three actions should you complete first? (Choose 3.)",
      "explanation": "Check modem status indicators, test the service line and restart the modem when appropriate. Updating the OS or deleting hosts is not an initial diagnosis of lost ISP connectivity.",
      "options": [
        "Ask the customer to restart the modem.",
        "Perform a line test to check connectivity between the ISP and the customer.",
        "Ask the customer to update the operating system to the latest version.",
        "Ask the customer to check for the appropriate status lights on the modem.",
        "Ask the customer to delete the hosts file.",
        "Log in to the customer's computer remotely."
      ],
      "correct": [
        0,
        1,
        3
      ]
    },
    {
      "id": "net-446",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which network topology is the internet designed around?",
      "explanation": "The Internet interconnects many networks with redundant alternate paths, forming a partial-mesh architecture rather than one central star or ring.",
      "options": [
        "Ring",
        "Mesh",
        "Bus",
        "Star"
      ],
      "correct": 1
    },
    {
      "id": "net-447",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which routing option is fault tolerant?",
      "explanation": "Dynamic routing protocols can learn a new path when a link fails. Static/default routes do not inherently discover alternate routes automatically.",
      "options": [
        "The default route",
        "Static routing",
        "Dynamic routing",
        "Least-cost routing"
      ],
      "correct": 2
    },
    {
      "id": "net-448",
      "chapter": "protocoale",
      "type": "single",
      "question": "Beyond its standard Layer 2 capabilities, what additional function is a key characteristic of a Layer 3 switch?",
      "explanation": "Layer 3 switches route packets between IP subnets/VLANs as well as switching frames within a VLAN.",
      "options": [
        "Assigns dynamic IP addresses to network devices.",
        "Forwards data frames based only on the destination MAC address.",
        "Performs routing of packets between different VLANs or subnets.",
        "Authenticates users before granting network acces"
      ],
      "correct": 2
    },
    {
      "id": "net-449",
      "chapter": "protocoale",
      "type": "single",
      "question": "What protocol is used within switches specifically to prevent network loops by managing redundant paths?",
      "explanation": "STP blocks selected redundant Layer 2 paths to prevent switching loops while retaining backup paths.",
      "options": [
        "Dynamic Host Configuration Protocol (DHCP)",
        "Spanning Tree Protocol (STP)",
        "Network Address Translation (NAT)",
        "Remote Desktop Protocol (RDP)"
      ],
      "correct": 1
    },
    {
      "id": "net-450",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Select two statements that accurately describe the operation of a network switch.",
      "explanation": "Switches learn MAC-to-port mappings and support full-duplex communication. They do not flood all known unicast traffic or combine all ports into one collision domain.",
      "options": [
        "Switches use a MAC address table to determine the specific port for forwarding data.",
        "Switches operate in full-duplex mode, allowing simultaneous transmission and reception.",
        "Switches forward all incoming traffic to every connected port.",
        "Switches operate within a single, large collision domain."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "net-451",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "When comparing switches to hubs, what are two key advantages that switches provide?",
      "explanation": "A switch gives each port a separate collision domain and filters frames by MAC address, unlike a repeating hub.",
      "options": [
        "Switches create a separate collision domain for each port.",
        "Switches forward frames based on the destination IP address.",
        "Switches operate only in half-duplex mode.",
        "Switches intelligently filter traffic based on MAC addresses, unlike hubs."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "net-452",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about switch operations, select True or False.",
      "explanation": "Known unicasts follow the learned port. Unknown destinations and broadcasts are flooded within the VLAN except the ingress port, not only over trunk links.",
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
          "label": "A switch forwards a frame to a specific port based on its MAC address table.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If the destination MAC is unknown, a switch floods the frame to all ports (except the source).",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A switch forwards broadcast frames only to other switches via trunk ports.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-453",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement comparing network devices and features, select True or False.",
      "explanation": "Layer 3 switches can route; hubs share a collision domain. Managed switches expose administrative settings that unmanaged switches do not.",
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
          "label": "A Layer 3 switch is capable of routing, while a Layer 2 switch is not.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A hub reduces collisions by creating a separate collision domain for each port.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A managed switch provides configuration options, while an unmanaged switch does not.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-454",
      "chapter": "echipamente",
      "type": "single",
      "question": "You need a device to connect multiple computers within a LAN. The device must support remote configuration and offer superior performance by minimizing collision domains. Which device fits these requirements?",
      "explanation": "A managed switch provides LAN switching with separate per-port collision domains and administrative configuration.",
      "options": [
        "Hub",
        "Unmanaged switch",
        "Router",
        "Managed switch"
      ],
      "correct": 3
    },
    {
      "id": "net-455",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which network device is primarily responsible for forwarding packets between different networks and uses a routing table to determine the best path for the data?",
      "explanation": "A router uses Layer 3 destination addresses and a routing table to forward packets between networks.",
      "options": [
        "Layer 2 Switch",
        "Hub",
        "Router",
        "Repeater"
      ],
      "correct": 2
    },
    {
      "id": "net-456",
      "chapter": "protocoale",
      "type": "single",
      "question": "What network device is essential for linking a local area network (LAN) to a wide area network (WAN), such as the internet?",
      "explanation": "Routers connect separate IP networks, including a LAN and an Internet/WAN connection.",
      "options": [
        "Router",
        "Hub",
        "Layer 2 switch",
        "Unmanaged switch"
      ],
      "correct": 0
    },
    {
      "id": "net-457",
      "chapter": "infrastructura",
      "type": "single",
      "question": "According to the exam objectives, which of the following is classified as a characteristic of a wide area network (WAN)?",
      "explanation": "Cellular systems provide wide-area wireless connectivity. A WLAN and VLAN normally describe local networks.",
      "options": [
        "VLANs",
        "Wireless LAN",
        "Cellular (3G, 4G, 5G)",
        "Perimeter networks"
      ],
      "correct": 2
    },
    {
      "id": "net-458",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is a primary benefit of using dynamic routing protocols compared to static routing?",
      "explanation": "Dynamic protocols exchange route information and adapt forwarding tables when topology changes.",
      "options": [
        "It automatically configures client IP addresses.",
        "It automatically updates routing tables in response to network topology changes.",
        "It segments the network into smaller broadcast domains.",
        "It guarantees no configuration is required."
      ],
      "correct": 1
    },
    {
      "id": "net-459",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which router feature is used to prioritize network traffic to ensure that time-sensitive data, like streaming video, is not delayed?",
      "explanation": "QoS classifies and prioritizes delay-sensitive traffic; it does not create bandwidth or guarantee zero delay.",
      "options": [
        "Network Address Translation (NAT)",
        "Port forwarding",
        "Quality of Service (QoS)",
        "Default routes"
      ],
      "correct": 2
    },
    {
      "id": "net-460",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which statement accurately describes how entries are added or modified in a router's static routing table?",
      "explanation": "Static routes are configured manually rather than learned through a routing protocol.",
      "options": [
        "By an administrator manually entering the route information.",
        "By a dynamic routing protocol, such as OSPF or EIGRP.",
        "By the router automatically learning from adjacent devices.",
        "By the switch to which the router is connected."
      ],
      "correct": 0
    },
    {
      "id": "net-461",
      "chapter": "echipamente",
      "type": "single",
      "question": "In a router's configuration, what type of route is used to forward all packets that do not match any specific entry in the routing table?",
      "explanation": "A default route is the fallback when no more-specific route matches, such as 0.0.0.0/0 for IPv4.",
      "options": [
        "A dynamic route",
        "A default route",
        "A directly connected route",
        "A port forwarding rule"
      ],
      "correct": 1
    },
    {
      "id": "net-462",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is a key advantage of implementing dynamic routing?",
      "explanation": "Dynamic routing exchanges reachability information and can adapt to link failures or topology changes.",
      "options": [
        "It simplifies network configuration for client devices.",
        "It eliminates all network bottlenecks.",
        "It allows routers to automatically share route information and adapt to changes.",
        "It uses a HOSTS file for name resolution."
      ],
      "correct": 2
    },
    {
      "id": "net-463",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the function of port forwarding on a router?",
      "explanation": "Port forwarding maps a WAN address/port to a selected internal host and port.",
      "options": [
        "To automatically assign IP addresses to devices on the LAN.",
        "To prioritize specific types of network traffic, like voice or video.",
        "To direct incoming traffic from the WAN to a specific device on the LAN based on the port number.",
        "o prevent network loops from occurring."
      ],
      "correct": 2
    },
    {
      "id": "net-464",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A network must be installed in a factory environment near heavy machinery, which produces significant electromagnetic interference (EMI). Which cable type should be selected to best protect the data signals from this interference?",
      "explanation": "Properly installed shielding reduces EMI pickup near industrial equipment.",
      "options": [
        "UTP (Unshielded Twisted Pair) CAT5e.",
        "UTP (Unshielded Twisted Pair) CAT6.",
        "STP (Shielded Twisted Pair) CAT5e.",
        "UTP (Unshielded Twisted Pair) CAT3."
      ],
      "correct": 2
    },
    {
      "id": "net-465",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which type of physical cabling is known for its immunity to EMI and is used for the highest speeds over the longest distances, such as connecting buildings?",
      "explanation": "Fiber carries light rather than electrical signals, giving EMI immunity and long-distance/high-speed options.",
      "options": [
        "Fiber optic cabling.",
        "Shielded CAT7 cabling.",
        "Unshielded CAT6 cabling.",
        "Crossover CAT5e cabling."
      ],
      "correct": 0
    },
    {
      "id": "net-466",
      "chapter": "infrastructura",
      "type": "single",
      "question": "An installation requires a network connection spanning 8 kilometers. Which physical media type is designed to support this segment length?",
      "explanation": "Single-mode fiber supports kilometer-scale links using suitable optics. Typical multimode Ethernet links are much shorter.",
      "options": [
        "Unshielded Twisted Pair (CAT6).",
        "Single-mode fiber optic cable.",
        "Shielded Twisted Pair (CAT5e).",
        "Multi-mode fiber optic cable."
      ],
      "correct": 1
    },
    {
      "id": "net-467",
      "chapter": "echipamente",
      "type": "single",
      "question": "What specific configuration of twisted-pair cable is used to connect dissimilar devices, such as a computer to a network switch's standard port?",
      "explanation": "In legacy Ethernet without auto-MDI-X, a computer-to-switch link uses straight-through wiring.",
      "options": [
        "A crossover cable configuration.",
        "A straight-through cable configuration.",
        "A shielded (STP) cable configuration.",
        "A fiber optic cable configuration."
      ],
      "correct": 1
    },
    {
      "id": "net-468",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the primary reason to select Shielded Twisted Pair (STP) over Unshielded Twisted Pair (UTP) cabling for a network installation?",
      "explanation": "STP shielding reduces interference. It is not chosen because it is the cheapest option or the longest-distance medium.",
      "options": [
        "The cabling path is susceptible to significant electromagnetic interference.",
        "The installation requires the absolute longest possible media segment length.",
        "The installation budget requires the most inexpensive cabling option available.",
        "The cable must be installed in a plenum-rated ceiling space alongside power lines."
      ],
      "correct": 0
    },
    {
      "id": "net-469",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is the specific purpose of using a crossover cable configuration, as opposed to a straight-through configuration?",
      "explanation": "Legacy like-to-like Ethernet ports without auto-MDI-X require transmit/receive pairs crossed. Modern ports often adapt automatically.",
      "options": [
        "Connect a computer to a normal switch port",
        "Connect two legacy switches without auto-MDI-X",
        "Achieve higher speed than straight-through wiring",
        "Protect against high crosstalk"
      ],
      "correct": 1
    },
    {
      "id": "net-470",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which networking medium is inherently immune to electromagnetic interference (EMI) because it transmits data using light pulses instead of electrical signals?",
      "explanation": "Fiber transmits light and does not pick up electromagnetic interference like electrical copper conductors.",
      "options": [
        "Unshielded Twisted Pair (UTP) cable.",
        "Fiber optic cable.",
        "Shielded Twisted Pair (STP) cable.",
        "Wireless (802.11) signal transmission."
      ],
      "correct": 1
    },
    {
      "id": "net-471",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What type of interference occurs when the signal from one wire in a twisted-pair cable bleeds over and affects the signal on an adjacent wire within the same cable?",
      "explanation": "Crosstalk is unwanted coupling between nearby wire pairs; twisting and correct termination reduce it.",
      "options": [
        "Electromagnetic interference (EMI).",
        "Radio frequency interference (RFI).",
        "Crosstalk.",
        "Signal interception."
      ],
      "correct": 2
    },
    {
      "id": "net-472",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "A switch that allows for configuration of features like VLANs and port security is known as a \n[1]\n switch.",
      "explanation": "Managed switches expose configuration such as VLAN membership, monitoring and port security.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Repeater"
        },
        {
          "id": "i2",
          "text": "Managed"
        },
        {
          "id": "i3",
          "text": "Unmanaged"
        },
        {
          "id": "i4",
          "text": "Passive"
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
        }
      ]
    },
    {
      "id": "net-473",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "On a router, the \n[1]\n feature is used to prioritize specific types of network traffic, such as voice or video.",
      "explanation": "QoS prioritizes selected traffic classes such as voice/video to reduce their delay under congestion.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Quality of Service (QoS)"
        },
        {
          "id": "i2",
          "text": "Network Address Translation (NAT)"
        },
        {
          "id": "i3",
          "text": "Port Address Translation (PAT)"
        },
        {
          "id": "i4",
          "text": "Domain Name System (DNS)"
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
        }
      ]
    },
    {
      "id": "net-474",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For two legacy like Ethernet ports WITHOUT auto-MDI-X, which cable configuration crosses transmit/receive pairs?",
      "explanation": "Traditional like-to-like Ethernet ports require crossed transmit/receive pairs unless auto-MDI-X is supported.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Straight-through"
        },
        {
          "id": "i2",
          "text": "Rollover"
        },
        {
          "id": "i3",
          "text": "Coaxial"
        },
        {
          "id": "i4",
          "text": "Crossover"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Cable configuration for these legacy like ports",
          "correctItemId": "i4",
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
      "id": "net-475",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "A \n[1]\n port on a switch is configured to carry traffic for only one specific VLAN to an end device like a computer.",
      "explanation": "An access port normally carries one untagged data VLAN to an endpoint, unlike a multi-VLAN trunk.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Console"
        },
        {
          "id": "i2",
          "text": "Uplink"
        },
        {
          "id": "i3",
          "text": "Access"
        },
        {
          "id": "i4",
          "text": "Trunk"
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
      "id": "net-476",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "The protocol used by switches to prevent loops in a network with redundant paths is called the [\n[1]",
      "explanation": "STP blocks redundant Layer 2 paths to prevent bridging loops.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Internet Control Message Protocol (ICMP)"
        },
        {
          "id": "i2",
          "text": "Spanning Tree Protocol (STP)"
        },
        {
          "id": "i3",
          "text": "Address Resolution Protocol (ARP)"
        },
        {
          "id": "i4",
          "text": "Simple Mail Transfer Protocol (SMTP)"
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
        }
      ]
    },
    {
      "id": "net-477",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Drag the characteristic to the correct network device it describes.\n\nHub:  , \n\nSwitch:  ,",
      "explanation": "Hubs repeat bits in one shared half-duplex collision domain. Switches learn MAC ports and isolate collision domains per port.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Uses a MAC table to forward frames."
        },
        {
          "id": "i2",
          "text": "Operates in half-duplex by default."
        },
        {
          "id": "i3",
          "text": "Creates a single collision domain."
        },
        {
          "id": "i4",
          "text": "Creates a separate collision domain per port."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Hub: duplex mode",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Hub: collision behavior",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Switch: forwarding method",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Switch: collision behavior",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-478",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Match the routing table concept to its correct description.\n\nStatic routing: \n\nDynamic routing: \n\nDefault route:",
      "explanation": "Static routes are manual, dynamic routes are learned, and a default route handles destinations without a more-specific match.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A route that is manually entered by an administrator."
        },
        {
          "id": "i2",
          "text": "A route learned automatically from other routers."
        },
        {
          "id": "i3",
          "text": "A \"catch-all\" route for traffic with no specific match."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Static routing",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Dynamic routing",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Default route",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-479",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match the cable type to its main characteristic.\n\nFiber optic: \n\nSTP (Shielded Twisted Pair): \n\nUTP (Unshielded Twisted Pair):",
      "explanation": "Fiber uses light, STP uses shielding, and UTP relies on twisting without a conductive shield.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Uses a foil or braid to reduce EMI."
        },
        {
          "id": "i2",
          "text": "Immune to electromagnetic interference (EMI)."
        },
        {
          "id": "i3",
          "text": "Is susceptible to EMI and cross-talk."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Fiber optic",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "STP",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "UTP",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-480",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Drag the switch function to the OSI layer where it primarily operates.\n\nLayer 2 Switch: \n\nLayer 3 Switch:",
      "explanation": "Layer 2 forwarding uses MAC addresses; Layer 3 routing uses IP networks.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Performs routing based on IP addresses."
        },
        {
          "id": "i2",
          "text": "Forwards frames based on MAC addresses."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Layer 2 switch",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Layer 3 switch",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-481",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Match the cable configuration to its standard use case.\n\nStraight-through: \n\nCrossover:",
      "explanation": "Straight-through links unlike Ethernet port types; crossover links traditional like port types. Modern auto-MDI-X can remove this distinction.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Connecting a computer to a switch."
        },
        {
          "id": "i2",
          "text": "Connecting one legacy switch to another without auto-MDI-X."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Straight-through",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Crossover",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-482",
      "chapter": "protocoale",
      "type": "single",
      "question": "From the following options, identify a protocol that functions at the Transport layer of the TCP/IP model.",
      "explanation": "UDP is a transport protocol. HTTP/FTP are application protocols and IP is an Internet-layer protocol.",
      "options": [
        "HTTP (Hypertext Transfer Protocol)",
        "IP (Internet Protocol)",
        "FTP (File Transfer Protocol)",
        "UDP (User Datagram Protocol)"
      ],
      "correct": 3
    },
    {
      "id": "net-483",
      "chapter": "protocoale",
      "type": "single",
      "question": "At which layer of the OSI model does the physical MAC address primarily operate?",
      "explanation": "Ethernet MAC addressing operates at OSI Layer 2, the Data Link layer.",
      "options": [
        "The Network layer (Layer 3)",
        "The Application layer (Layer 7)",
        "The Data Link layer (Layer 2)",
        "The Transport layer (Layer 4)"
      ],
      "correct": 2
    },
    {
      "id": "net-484",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match the protocol from the list to its primary function or characteristic. Not all protocols will be used.\n\n : Provides a connectionless, best-effort transport service.\n : Establishes a connection and guarantees packet delivery.\n : Discovers the MAC address associated with a specific IP address.",
      "explanation": "UDP is connectionless. TCP provides an ordered reliable byte stream or reports failure; ARP resolves IPv4 neighbors to MAC addresses.",
      "dragItems": [
        {
          "id": "i1",
          "text": "TCP"
        },
        {
          "id": "i2",
          "text": "ICMP"
        },
        {
          "id": "i3",
          "text": "ARP"
        },
        {
          "id": "i4",
          "text": "UDP"
        },
        {
          "id": "i5",
          "text": "IGMP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Provides a connectionless, best-effort transport service.",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Establishes a connection and guarantees packet delivery.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Discovers the MAC address associated with a specific IP address.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-485",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "For each statement about network protocols, select True or False.\nNote: You will receive partial credit for each correct selection.",
      "explanation": "ping uses ICMP. IGMP manages multicast membership, not DHCP allocation. DNS resolves FQDNs; ARP resolves local IPv4-to-MAC mappings.",
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
          "label": "The `ping` utility uses ICMP to test host reachability.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "IGMP is used to manage dynamic IP address allocation.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "ARP is used to resolve fully qualified domain names (FQDNs) to IP addresses.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-486",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match the private IPv4 address class to its designated address range. Not all options will be used.\n\n : 10.0.0.0 - 10.255.255.255\n : 172.16.0.0 - 172.31.255.255\n : 192.168.0.0 - 192.168.255.255",
      "explanation": "The RFC1918 ranges are 10/8, 172.16/12 and 192.168/16. The class labels are historical shorthand; modern routing uses CIDR.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Class A Private"
        },
        {
          "id": "i2",
          "text": "Class B Private"
        },
        {
          "id": "i3",
          "text": "Class C Private"
        },
        {
          "id": "i4",
          "text": "Class E (Experimental)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "10.0.0.0 - 10.255.255.255",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "172.16.0.0 - 172.31.255.255",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "192.168.0.0 - 192.168.255.255",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-487",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which networking service is responsible for translating private, non-routable IP addresses into a single public, routable IP address, often using port numbers?",
      "explanation": "PAT multiplexes many internal connections through one public IPv4 address by tracking transport ports.",
      "options": [
        "DHCP (Dynamic Host Configuration Protocol)",
        "DNS (Domain Name System)",
        "PAT (Port Address Translation)",
        "WINS (Windows Internet Name Service)"
      ],
      "correct": 2
    },
    {
      "id": "net-488",
      "chapter": "protocoale",
      "type": "single",
      "question": "What are the two fundamental components that make up an IPv4 address?",
      "explanation": "An IPv4 prefix/mask divides the 32-bit address into a network portion and a host portion.",
      "options": [
        "A network identifier and a host identifier.",
        "A 64-bit hexadecimal number.",
        "A physical address and a logical address.",
        "A socket and a default gateway."
      ],
      "correct": 0
    },
    {
      "id": "net-489",
      "chapter": "protocoale",
      "type": "single",
      "question": "What service is responsible for dynamically assigning IPv4 address configurations, including an IP address, subnet mask, and default gateway, to clients on a network?",
      "explanation": "DHCP leases addressing information and options such as mask, gateway and DNS servers.",
      "options": [
        "DHCP (Dynamic Host Configuration Protocol)",
        "DNS (Domain Name System)",
        "NAT (Network Address Translation)",
        "RDP (Remote Desktop Protocol)"
      ],
      "correct": 0
    },
    {
      "id": "net-490",
      "chapter": "protocoale",
      "type": "single",
      "question": "In IPv6, what type of address is used for communication only within a single, local network segment and is not intended to be routed?",
      "explanation": "IPv6 link-local addresses, normally fe80::/10, are restricted to the local link and not forwarded by routers.",
      "options": [
        "A global address",
        "A link-local address",
        "An anycast address",
        "A tunnel-broker address"
      ],
      "correct": 1
    },
    {
      "id": "net-491",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary purpose of a tunneling protocol like Teredo in the context of IPv4 and IPv6 coexistence?",
      "explanation": "Teredo encapsulates IPv6 in IPv4 UDP; encapsulation is not the same as address translation or VPN encryption.",
      "options": [
        "To allow IPv6 packets to be transmitted over an IPv4 network infrastructure.",
        "To dynamically assign public IPv6 addresses to clients.",
        "To translate IPv6 packet headers directly into IPv4 packet headers.",
        "To create an encrypted, secure link between two private networks."
      ],
      "correct": 0
    },
    {
      "id": "net-492",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPv6 transition method involves a single host or router running both the IPv4 and IPv6 protocol stacks simultaneously?",
      "explanation": "Dual stack operates both IP versions natively on the same host/router.",
      "options": [
        "A dual IP stack configuration.",
        "A Teredo tunneling configuration.",
        "A 6to4 tunneling configuration.",
        "A DNS AAAA record query."
      ],
      "correct": 0
    },
    {
      "id": "net-493",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following correctly identifies the IPv6 loopback address, used for testing the local network stack?",
      "explanation": "::1 is IPv6 loopback. 127.0.0.1 is IPv4 loopback and fe80:: is link-local.",
      "options": [
        "::1",
        "FE80::1",
        "FF02::1",
        "127.0.0.1"
      ],
      "correct": 0
    },
    {
      "id": "net-494",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which option is the shortest correctly compressed form of FE80:0000:0000:0000:0200:00FF:FE00:0001?",
      "explanation": "Remove leading zeros within groups and replace the longest zero run with one ::. The second option is also valid but not maximally compressed.",
      "options": [
        "FE80::200:FF:FE00:1",
        "FE80:0:0:0:200:FF:FE00:1",
        "FE80::0200::FE00:0001",
        "FE80:200:FF:FE00:1"
      ],
      "correct": 0
    },
    {
      "id": "net-495",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which well-known port is used by the Remote Desktop Protocol (RDP) for remote access to Windows computers?",
      "explanation": "RDP commonly uses port 3389 (TCP and, in supported versions, UDP).",
      "options": [
        "80",
        "143 (IMAP)",
        "22 (SSH)",
        "3389"
      ],
      "correct": 3
    },
    {
      "id": "net-496",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about name resolution, select True or False.",
      "explanation": "HOSTS provides static mappings. MX identifies mail exchangers, not IPv6 addresses. WINS dynamically registers/resolves legacy NetBIOS names.",
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
          "label": "A HOSTS file provides static (manual) name resolution.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "An 'MX' record in DNS is used to map a name to an IPv6 address.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "WINS (Windows Internet Name Service) is a dynamic name resolution service.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-497",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "Complete the two DNS address-record statements.",
      "explanation": "A maps a hostname to an IPv4 address; AAAA maps it to an IPv6 address.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A"
        },
        {
          "id": "i2",
          "text": "AAAA"
        },
        {
          "id": "i3",
          "text": "MX"
        },
        {
          "id": "i4",
          "text": "CNAME"
        },
        {
          "id": "i5",
          "text": "A"
        },
        {
          "id": "i6",
          "text": "MX"
        },
        {
          "id": "i7",
          "text": "CNAME"
        },
        {
          "id": "i8",
          "text": "AAAA"
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
      ],
      "code": "Hostname to IPv4: [1]\nHostname to IPv6: [2]"
    },
    {
      "id": "net-498",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which network service is responsible for name resolution using 'A' records (hostname-to-IP) and 'PTR' records (IP-to-hostname)?",
      "explanation": "DNS uses A/AAAA for address records and PTR for reverse name lookups.",
      "options": [
        "NAT (Network Address Translation)",
        "DHCP (Dynamic Host Configuration Protocol)",
        "DNS (Domain Name System)",
        "IDS (Intrusion Detection System)"
      ],
      "correct": 2
    },
    {
      "id": "net-499",
      "chapter": "protocoale",
      "type": "single",
      "question": "In the DNS name resolution process, what type of resource record is used to specify the mail exchange server for a domain?",
      "explanation": "MX records identify mail servers responsible for a domain's mail delivery.",
      "options": [
        "A (Address) record",
        "CNAME (Canonical Name) record",
        "SOA (Start of Authority) record",
        "MX (Mail Exchanger) record"
      ],
      "correct": 3
    },
    {
      "id": "net-500",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which type of DNS record is used to create an alias, mapping one hostname to another (e.g., 'www.company.com' to 'server1.company.com')?",
      "explanation": "CNAME aliases one DNS name to another canonical name rather than directly storing an IP address.",
      "options": [
        "A (Address) record",
        "MX (Mail Exchanger) record",
        "CNAME (Canonical Name) record",
        "SOA (Start of Authority) record"
      ],
      "correct": 2
    },
    {
      "id": "net-501",
      "chapter": "protocoale",
      "type": "single",
      "question": "A small business has many internal devices using private IP addresses but only one public IP address from their ISP. Which service is required to allow all devices to share this single public IP for internet access?",
      "explanation": "NAT with PAT/NAT overload allows many private clients to share one public IPv4 address.",
      "options": [
        "NAT (Network Address Translation)",
        "DHCP (Dynamic Host Configuration Protocol)",
        "DNS (Domain Name System)",
        "Static Routing"
      ],
      "correct": 0
    },
    {
      "id": "net-502",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about networking services, select True or False.",
      "explanation": "Firewalls filter traffic. DHCP assigns configuration rather than translating addresses. Basic dynamic NAT makes temporary one-to-one mappings from a public pool, unlike PAT.",
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
          "label": "A firewall is a service used to filter traffic between networks.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "DHCP is used to translate private IP addresses into public IP addresses.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Dynamic NAT (Network Address Translation) maps one private IP to one public IP.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-503",
      "chapter": "protocoale",
      "type": "single",
      "question": "A Windows computer is configured for DHCP but fails to contact the DHCP server. Which of the following IP addresses indicates that the computer has assigned itself an APIPA (Automatic Private IP Addressing) address?",
      "explanation": "169.254.0.0/16 is IPv4 link-local/APIPA. A Windows DHCP fallback address commonly lies in this range.",
      "options": [
        "10.1.10.1",
        "172.16.10.1",
        "169.254.10.1",
        "192.168.10.1"
      ],
      "correct": 2
    },
    {
      "id": "net-504",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You are troubleshooting a connection issue on a Windows PC and suspect it has failed to get an address from the DHCP server. Which command-line tool would you use to check the computer's current IP address, subnet mask, and default gateway?",
      "explanation": "ipconfig displays local IP configuration, including masks and gateways.",
      "options": [
        "ping",
        "ipconfig",
        "tracert",
        "nslookup"
      ],
      "correct": 1
    },
    {
      "id": "net-505",
      "chapter": "protocoale",
      "type": "single",
      "question": "At its normal T1 renewal time, before its lease expires, what does a DHCP client first try to do?",
      "explanation": "A DHCP client normally requests renewal of its current lease before expiry at T1, then rebinding at T2. After actual expiration it must stop using the lease and begin acquisition again.",
      "options": [
        "The client stops all network communication immediately.",
        "The client tries to request a new lease for the same IP address.",
        "The client assigns itself a new random IP address.",
        "The client sends a broadcast to find a new DHCP server."
      ],
      "correct": 1
    },
    {
      "id": "net-506",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which Windows command-line tool is used to display the route a packet takes to reach a destination host and measure packet loss at each hop?",
      "explanation": "pathping combines route discovery with repeated probing to estimate loss along the path; ICMP filtering can affect intermediate results.",
      "options": [
        "pathping",
        "nslookup",
        "netstat",
        "ipconfig"
      ],
      "correct": 0
    },
    {
      "id": "net-507",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which layer of the OSI model is responsible for logical addressing (IP addresses) and determining the best path for data to travel across networks?",
      "explanation": "Layer 3 supplies logical IP addressing and routing between networks.",
      "options": [
        "Layer 2 (Data Link)",
        "Layer 3 (Network)",
        "Layer 4 (Transport)",
        "Layer 7 (Application)"
      ],
      "correct": 1
    },
    {
      "id": "net-508",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Move the OSI layer from the list on the left to match its primary device or address type on the right.\n\n : Switch\n : Router\n : Hub",
      "explanation": "A conventional switch forwards frames, a router forwards IP packets and a hub repeats physical signals.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Physical (Layer 1)"
        },
        {
          "id": "i2",
          "text": "Data Link (Layer 2)"
        },
        {
          "id": "i3",
          "text": "Network (Layer 3)"
        },
        {
          "id": "i4",
          "text": "Transport (Layer 4)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Switch",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Router",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Hub",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-509",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about the OSI model layers, select True or False.",
      "explanation": "MAC addressing is Layer 2; TCP is Layer 4 and physical signaling/cabling is Layer 1.",
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
          "label": "A MAC address is used at the Network layer (Layer 3).",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "TCP (Transmission Control Protocol) operates at the Transport layer (Layer 4).",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The Physical layer (Layer 1) defines standards for cabling and electrical signals.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-510",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "Complete the statements by selecting the correct OSI layer from each drop-down list.\n\nThe layer that formats data for the screen and handles encryption is the [\n[1]\n] layer.\nThe layer that provides services directly to the end-user's software is the [\n[2]\n] layer.",
      "explanation": "In the OSI conceptual model, presentation handles representation/encoding and encryption, while application provides services to software. Real protocols can span these conceptual boundaries.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Presentation (Layer 6)"
        },
        {
          "id": "i2",
          "text": "Application (Layer 7)"
        },
        {
          "id": "i3",
          "text": "Transport (Layer 4)"
        },
        {
          "id": "i4",
          "text": "Network (Layer 3)"
        },
        {
          "id": "i5",
          "text": "Presentation (Layer 6)"
        },
        {
          "id": "i6",
          "text": "Transport (Layer 4)"
        },
        {
          "id": "i7",
          "text": "Network (Layer 3)"
        },
        {
          "id": "i8",
          "text": "Application (Layer 7)"
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
      "id": "net-511",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which two statements accurately describe key attributes of modern wired local area networks (LANs) typically utilizing Ethernet standards? (Choose two)",
      "explanation": "Ethernet uses copper/fiber and commonly negotiates link speed. MAC addresses are not IP addresses and modern Ethernet does not rely on token passing.",
      "options": [
        "Network devices rely solely on Token Passing to manage access control.",
        "Network Interface Cards (NICs) have their physical address (MAC) programmed with an IP address by the manufacturer.",
        "It commonly operates over physical media such as twisted pair or fiber optic cabling.",
        "The connection speed is often subject to an auto-negotiation process between devices."
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "net-512",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which specific type of network appliance is designed to link devices within a local network segment, offers the highest efficiency for data transfer, and includes features for **remote configuration** and management?",
      "explanation": "A managed switch adds remote configuration and administrative controls to efficient LAN forwarding.",
      "options": [
        "Network Repeater (Hub)",
        "Network Layer 3 Device (Router)",
        "Basic Layer 2 Device (Unmanaged switch)",
        "Advanced Layer 2/3 Device (Managed switch)"
      ],
      "correct": 3
    },
    {
      "id": "net-513",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match the following Virtual Private Network (VPN) types or protocols to their correct operational descriptions.\n\n : Designed to enable individual remote users to access a private network over the internet.\n : Used to establish a secure, permanent encrypted link between two distinct private networks, such as branch offices.\n : A tunneling protocol that, when used alone, typically creates a basic, unencrypted path between network endpoints.",
      "explanation": "Remote-access VPN connects users, site-to-site connects networks, and L2TP alone supplies no encryption.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Remote Access VPN (SSL/TLS or IPsec)"
        },
        {
          "id": "i2",
          "text": "Site-to-Site VPN"
        },
        {
          "id": "i3",
          "text": "Layer 2 Tunneling Protocol (L2TP)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Designed to enable individual remote users to access a private network over the internet.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Used to establish a secure, permanent encrypted link between two distinct private networks, such as branch offices.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A tunneling protocol that, when used alone, typically creates a basic, unencrypted path between network endpoints.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-514",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A new permanent network link must be established between two sites separated by a distance of approximately ten kilometers (six miles). Considering this requirement for extended distance, which type of physical media is the most appropriate choice?",
      "explanation": "Single-mode fiber with appropriate optics supports a 10km link; ordinary twisted pair and most multimode links do not.",
      "options": [
        "Multi-mode",
        "Single-mode",
        "Cat5e",
        "Cat6"
      ],
      "correct": 1
    },
    {
      "id": "net-515",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary function of a Virtual Private Network (VPN) technology, as utilized for remote access?",
      "explanation": "A secure VPN creates a protected logical path over an untrusted network; implementations can use IPsec, TLS or other supported mechanisms.",
      "options": [
        "Offers enhanced security features exclusively for designated endpoint computing devices.",
        "Guarantees cryptographic protection using only the Internet Protocol Security (IPSec) protocol.",
        "Establishes a confidential communication pathway across an unsecure, public networking infrastructure.",
        "Secures data exchange between components located strictly within a single, dedicated private network."
      ],
      "correct": 2
    },
    {
      "id": "net-516",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "A company is planning to shift several of its current servers to virtual machines hosted in a public cloud environment. Which two administrative duties, typically associated with owning and managing physical infrastructure, will be delegated to the cloud provider, thereby reducing the local IT team's workload? (Select two.)",
      "explanation": "For cloud-hosted infrastructure VMs, the provider manages physical repairs and data-center security. The customer usually still manages guest OS patches, access and application data backups.",
      "options": [
        "Handling replacements and repairs for any physical server component failures.",
        "Supervising access rights for users to shared network files and folders.",
        "Maintaining the physical security and environmental controls of the server data center.",
        "Applying patches and managing updates for the server's core operating system software.",
        "Executing routine data backup procedures for application-specific information."
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "net-517",
      "chapter": "protocoale",
      "type": "single",
      "question": "When reviewing wireless network security protocols, which of the following encryption types is widely recognized as the least secure and most vulnerable to hacking tools and unauthorized decryption?",
      "explanation": "WEP has fundamental cryptographic weaknesses and should not be used; choose modern supported WPA2/WPA3 protection instead.",
      "options": [
        "WEP",
        "WPA2",
        "WPA-PSK",
        "WPA-AES"
      ],
      "correct": 0
    },
    {
      "id": "net-518",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "You are the network administrator for a small enterprise where all internal intranet access is functioning correctly, but no employees can reach external websites. Given that the network uses a single router for internet connectivity, which two initial steps are most critical for diagnosing this specific lack of external access? (Select two.)",
      "explanation": "Because internal access works across the organization, first check the common WAN link and ISP status rather than assume every client NIC failed.",
      "options": [
        "Verify that the internet-facing ports of the router have active, working physical connections.",
        "Inspect individual workstations for faults within their network interface cards (NICs).",
        "Confirm that every client computer has been assigned a valid internal IP address.",
        "Initiate contact with the external Internet Service Provider (ISP) to report a service outage."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "net-519",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "When preparing a computer to host a network game, you must identify which ports are currently active or being monitored for incoming connections before configuring the firewall. Which command-line utility displays the established connections and the specific TCP/UDP ports that the local machine is currently **listening** on?",
      "explanation": "netstat -an displays numeric active connections and listening TCP/UDP endpoints. UDP sockets are listed without TCP-style listening states.",
      "options": [
        "ping",
        "nslookup",
        "nbtstat",
        "netstat"
      ],
      "correct": 3
    },
    {
      "id": "net-520",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each statement about client-server networks, select True or False.",
      "explanation": "Client-server systems centralize administration; not every client must share resources or keep a separate account on every machine when directory identities are used.",
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
          "label": "A client-server network has centralized administration.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A client-server network requires each computer to share its resources.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A client-server network requires users to have a user account on every computer they need to use.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-521",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "Complete the sentences by selecting the correct option from each drop-down list.\n\n\n[1]\n is a vast computer network linking smaller computer networks worldwide.\n\n[2]\n is a network that allows secure collaboration between a company and a supplier or partner.\n\n[3]\n is a private network that is accessible only to a company's employees.",
      "explanation": "The Internet is global/public, an extranet grants selected partner access and an intranet serves internal staff.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Intranet"
        },
        {
          "id": "i2",
          "text": "PAN"
        },
        {
          "id": "i3",
          "text": "Internet"
        },
        {
          "id": "i4",
          "text": "Extranet"
        },
        {
          "id": "i5",
          "text": "PAN"
        },
        {
          "id": "i6",
          "text": "Extranet"
        },
        {
          "id": "i7",
          "text": "Internet"
        },
        {
          "id": "i8",
          "text": "Intranet"
        },
        {
          "id": "i9",
          "text": "Intranet"
        },
        {
          "id": "i10",
          "text": "Internet"
        },
        {
          "id": "i11",
          "text": "Extranet"
        },
        {
          "id": "i12",
          "text": "PAN"
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
      "id": "net-522",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each statement about hypervisors, select True or False.",
      "explanation": "Type 1 runs on hardware; Type 2 is hosted on an OS. Bare-metal means Type 1.",
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
          "label": "A Type 1 hypervisor runs directly on system hardware.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A Type 2 hypervisor runs directly on system hardware.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A Type 1 hypervisor is also known as a bare-metal hypervisor.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-523",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which network element uses a tunneling protocol to encapsulate data for transmission?",
      "explanation": "VPN tunneling encapsulates traffic across another network. VLAN tagging and NAT are different functions.",
      "options": [
        "VLAN",
        "Internet",
        "VPN",
        "NAT"
      ],
      "correct": 2
    },
    {
      "id": "net-524",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is a VPN?",
      "explanation": "A secure VPN creates a protected logical private connection across a public/untrusted network.",
      "options": [
        "A communication tunnel between VLANs",
        "A virtual network within your local area network (LAN)",
        "A personal network for your use only",
        "A secure private connection over a public network"
      ],
      "correct": 3
    },
    {
      "id": "net-525",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement about wide area networks (WANs), select True or False.",
      "explanation": "The Internet spans wide areas. Intranet describes private organizational use, not geographic scale; a WAN is not confined to one city.",
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
          "label": "The internet is a WAN.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "An intranet is a WAN.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "All devices connected to a WAN must be located within the same city.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-526",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is a cause of concern about wireless network security?",
      "explanation": "Radio signals can extend beyond physical premises and be intercepted, so authentication/encryption are essential.",
      "options": [
        "Frequency modulation issues",
        "The radio broadcast access method",
        "Inability to encrypt transmissions",
        "The potential for cross-talk"
      ],
      "correct": 1
    },
    {
      "id": "net-527",
      "chapter": "protocoale",
      "type": "single",
      "question": "On a wireless router, what is an SSID?",
      "explanation": "SSID is the wireless network's identifier/name; it is not a secret authentication credential.",
      "options": [
        "The broadcast ID",
        "A WAN encryption protocol",
        "The default communication protocol",
        "The default administrator account"
      ],
      "correct": 0
    },
    {
      "id": "net-528",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Move the appropriate protocols from the list on the left to the correct descriptions on the right. You may use each protocol once or not at all.\n : Connectionless, message-based protocol with best-effort service\n : Connection-oriented protocol with guaranteed service\n : Resolves a MAC address to an IP address",
      "explanation": "UDP is connectionless, TCP provides reliable ordered transport or reports failure, and ARP resolves a local IPv4 address to a MAC address. The source reversed ARP's direction; that definition is corrected.",
      "dragItems": [
        {
          "id": "i1",
          "text": "TCP"
        },
        {
          "id": "i2",
          "text": "ICMP"
        },
        {
          "id": "i3",
          "text": "ARP"
        },
        {
          "id": "i4",
          "text": "UDP"
        },
        {
          "id": "i5",
          "text": "IGMP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Connectionless best-effort transport",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Connection-oriented reliable transport",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Resolves a local IPv4 address to its MAC address",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-529",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which option represents an IPv6 loopback address?",
      "explanation": "::1 is IPv6 loopback; :: is the unspecified address and fe80:: is link-local.",
      "options": [
        "FF00::127",
        "::",
        "::1",
        "FE80::127"
      ],
      "correct": 2
    },
    {
      "id": "net-530",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You ping a server by using the fully qualified domain name (FQDN) and do not receive a response. You then ping the same server by using its IP address and receive a response.\n\nWhy do you receive a response on the second attempt but not on the first attempt?",
      "explanation": "IP connectivity succeeds but name-based access fails, pointing first to DNS/name-resolution configuration.",
      "options": [
        "The DNS is not resolving.",
        "NSLOOKUP is stopped.",
        "PING is improperly configured.",
        "The DHCP server is offline."
      ],
      "correct": 0
    },
    {
      "id": "net-531",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Identify two accurate descriptions of Virtual Local Area Networks (VLANs) from the list below. (Choose 2.)",
      "explanation": "A VLAN defines a logical Layer 2 broadcast domain across properly interconnected switches. It segments a network but does not assign IP addresses.",
      "options": [
        "Devices assigned to the same VLAN communicate as if they are on the same physical link, regardless of their actual geographic separation.",
        "A network switch is technically restricted to hosting only one unique VLAN configuration at a time.",
        "The primary function of a VLAN is to assign logical IP addresses to individual data packets.",
        "VLANs divide a physical network into multiple logical segments, effectively isolating broadcast domains and traffic."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "net-532",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which statement best describes the main function of a perimeter network (also known as a DMZ)?",
      "explanation": "A DMZ/perimeter network separates exposed services from the trusted internal network and untrusted exterior.",
      "options": [
        "To create a security buffer that serves as an intermediate zone between the trusted internal network and an untrusted external network.",
        "To provide a concealed environment specifically for hosting internal end-user workstations.",
        "To analyze and filter data traffic occurring exclusively between different departments within a private LAN.",
        "To serve as the primary secure vault for storing the organization's most critical and highly sensitive internal databases."
      ],
      "correct": 0
    },
    {
      "id": "net-533",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is a primary benefit of implementing Virtual Local Area Networks (VLANs)?",
      "explanation": "Splitting a physical network into VLANs reduces the hosts in each broadcast domain; it increases the number of separate broadcast domains.",
      "options": [
        "To artificially expand the pool of available Media Access Control (MAC) addresses.",
        "To decrease the total count of separate broadcast domains within the infrastructure.",
        "To generate additional IP addresses for network assignment.",
        "To limit the number of devices participating in a single broadcast domain, thereby reducing congestion."
      ],
      "correct": 3
    },
    {
      "id": "net-534",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "Identify two defining features of a mesh network architecture from the options provided. (Choose 2.)",
      "explanation": "Full mesh directly connects every node pair and provides alternate paths. Its link count/cost grow quickly, so it is not the cheapest or easiest-to-scale design.",
      "options": [
        "It is widely considered the most scalable solution for networks containing a massive number of endpoints.",
        "In a full configuration, each distinct node maintains a direct physical link to every other node in the system.",
        "It is a budget-friendly option that utilizes significantly less cabling infrastructure than Star or Ring topologies.",
        "It provides exceptional fault tolerance and reliability ensuring data delivery even if a link fails, due to multiple redundant paths."
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "id": "net-535",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which network configuration is designed with multiple connections between nodes to ensure that data can still be transmitted via an alternate route if a specific link fails?",
      "explanation": "Mesh links provide alternate paths when individual links fail, subject to sufficient connectivity and suitable routing.",
      "options": [
        "Star",
        "Bus",
        "Mesh",
        "Ring"
      ],
      "correct": 2
    },
    {
      "id": "net-536",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which specific interface configuration is required to carry traffic for multiple VLANs across a single physical link between two network switches?",
      "explanation": "An 802.1Q trunk carries multiple VLANs over one physical inter-switch link.",
      "options": [
        "WAN port",
        "Virtual port",
        "LAN port",
        "Trunk port"
      ],
      "correct": 3
    },
    {
      "id": "net-537",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Assign each of the provided IP addresses to its corresponding IPv4 Class range.\n : Class A\n : Class B\n : Class C\n : Class D",
      "explanation": "Historic first-octet ranges are A 1-126, B 128-191, C 192-223 and D 224-239.",
      "dragItems": [
        {
          "id": "i1",
          "text": "133.234.23.2"
        },
        {
          "id": "i2",
          "text": "224.100.20.3"
        },
        {
          "id": "i3",
          "text": "201.111.22.3"
        },
        {
          "id": "i4",
          "text": "64.123.12.1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class A",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Class B",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Class C",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Class D",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-538",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A network link using a 550-meter fiber optic cable is suspected of experiencing significant signal attenuation. Which specialized instrument should be used to precisely measure the length and locate the fault in this fiber segment?",
      "explanation": "An OTDR measures optical reflections/loss to estimate fiber length and locate faults. Copper TDRs are not fiber instruments.",
      "options": [
        "Multimeter",
        "Toner",
        "Optical time-domain reflectometer (OTDR)",
        "Time-domain reflectometer (TDR)"
      ],
      "correct": 2
    },
    {
      "id": "net-539",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "A workstation connected to the network via a standard copper cable is experiencing severely degraded data transmission performance. Given that the issue is likely physical layer damage, select two corrective actions to diagnose the cause. (Choose 2.)",
      "explanation": "Measure negotiated performance and test copper wire map/continuity. OTDR is for fiber and a toner locates cable rather than certifying data performance.",
      "options": [
        "Employ specialized equipment to measure the actual throughput and negotiated link speed of the cable run.",
        "Use an Optical Time-Domain Reflectometer (OTDR) to analyze signal loss along the copper line.",
        "Utilize a tone generator and probe to physically locate and identify the correct cable within a bundled group.",
        "Inspect the copper cable using a specialized tester to verify wire continuity and correct pinout termination."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "net-540",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "When working on a Windows system, which command-line utility is specifically designed to query DNS servers and verify the translation of hostnames into IP addresses?",
      "explanation": "nslookup queries DNS servers and tests hostname/address resolution.",
      "options": [
        "nbtstat",
        "nslookup",
        "netstat",
        "ipconfig"
      ],
      "correct": 1
    },
    {
      "id": "net-541",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which type of network is strictly private to an organization and is typically used for internal communication and resource sharing among employees only?",
      "explanation": "An intranet provides private organizational resources; an extranet extends selected resources to authorized external parties.",
      "options": [
        "The Extranet",
        "The Intranet",
        "The Internet",
        "A Public Switched Network"
      ],
      "correct": 1
    },
    {
      "id": "net-542",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In a network environment, which transmission method sends a single packet of data from one source specifically to all other connected nodes in the same network segment?",
      "explanation": "Broadcast delivers traffic to all hosts within the relevant broadcast domain rather than one destination or a subscribed group.",
      "options": [
        "Unicast",
        "Multicast",
        "Anycast",
        "Broadcast"
      ],
      "correct": 3
    },
    {
      "id": "net-543",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which software component is directly responsible for creating, running, and managing virtual machines (VMs) on a physical host server?",
      "explanation": "A hypervisor allocates physical resources and manages virtual machine execution and isolation.",
      "options": [
        "The Hypervisor",
        "The Virtual Switch",
        "The Guest Operating System",
        "The BIOS"
      ],
      "correct": 0
    },
    {
      "id": "net-544",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Is the following statement True or False? A Virtual Private Network (VPN) creates a secure, encrypted tunnel over a public network to allow remote users to access the corporate network safely.",
      "explanation": "A properly configured VPN creates an encrypted tunnel across an untrusted network for protected remote access.",
      "options": [
        "False",
        "True"
      ],
      "correct": 1
    },
    {
      "id": "net-545",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In which network model does every connected computer have equal status, acting as both a server and a client without centralized administration?",
      "explanation": "Peer-to-peer systems let devices share resources directly without a mandatory central server or domain controller.",
      "options": [
        "Client-Server",
        "Domain-based",
        "Peer-to-Peer (P2P)",
        "Active Directory"
      ],
      "correct": 2
    },
    {
      "id": "net-546",
      "chapter": "protocoale",
      "type": "single",
      "question": "In a virtualized environment, which specific component allows multiple virtual machines to communicate with each other and with the physical network, similar to a physical Layer 2 device?",
      "explanation": "A virtual switch forwards Layer 2 traffic between virtual network adapters and, when connected, the physical network.",
      "options": [
        "Virtual Network Interface Card (vNIC)",
        "Virtual Switch (vSwitch)",
        "Virtual Router",
        "Hypervisor Console"
      ],
      "correct": 1
    },
    {
      "id": "net-547",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "For each of the following statements regarding wireless networking characteristics and security, select Yes if the statement is true and No if the statement is false.",
      "explanation": "Bluetooth is normally short-range. WPA2 is stronger than WEP, and obstacles can attenuate or reflect wireless signals.",
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
          "label": "Bluetooth is typically used for long-range Wide Area Network (WAN) connections.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "WPA2 provides stronger encryption for wireless networks than WEP.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Wireless signals can be degraded by physical obstacles like concrete walls.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-548",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Using drag and drop, match each network topology description with its corresponding name.\n\nAll nodes connect to a central hub or switch: \nEvery node is connected to every other node: \nNodes are connected in a continuous closed loop: \nAll nodes share a single central communication line:",
      "explanation": "Star uses a central device, full mesh links every pair, ring forms a loop, and bus uses a shared backbone.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Mesh"
        },
        {
          "id": "i2",
          "text": "Star"
        },
        {
          "id": "i3",
          "text": "Bus"
        },
        {
          "id": "i4",
          "text": "Ring"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "All nodes connect to a central hub or switch:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Every node is connected to every other node:",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Nodes are connected in a continuous closed loop:",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "All nodes share a single central communication line:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-549",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "Your organization requires a secure method for employees to access internal file servers from public Wi-Fi locations.\n\nUse the dropdown menus to complete each statement.\n\nThe technology used to provide an encrypted path over the public internet is a ....... \n[1]\n\n\nTo specifically control the desktop of a remote server as if you were sitting in front of it, you would use ....... \n[2]",
      "explanation": "A VPN protects network traffic in a tunnel. Remote Desktop presents a remote computer's interactive desktop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Remote Desktop"
        },
        {
          "id": "i2",
          "text": "Proxy server"
        },
        {
          "id": "i3",
          "text": "DNS"
        },
        {
          "id": "i4",
          "text": "VPN"
        },
        {
          "id": "i5",
          "text": "Proxy server"
        },
        {
          "id": "i6",
          "text": "DNS"
        },
        {
          "id": "i7",
          "text": "Remote Desktop"
        },
        {
          "id": "i8",
          "text": "VPN"
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
      "id": "net-550",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary purpose of implementing a Perimeter Network (DMZ) within a corporate infrastructure?",
      "explanation": "A DMZ separates public-facing services from the trusted internal network using controlled traffic boundaries.",
      "options": [
        "To increase the speed of the internal local area network.",
        "To provide a buffer zone that hosts public-facing services while protecting the internal network.",
        "To allow all external traffic to bypass the corporate firewall for better performance.",
        "To strictly manage the assignment of internal IP addresses via DHCP."
      ],
      "correct": 1
    },
    {
      "id": "net-551",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which Wide Area Network (WAN) technology utilizes high-frequency signals transmitted over existing copper telephone lines while allowing simultaneous voice and data usage?",
      "explanation": "DSL carries digital data at frequencies above ordinary voice over copper telephone lines, with suitable filtering.",
      "options": [
        "Cable Broadband",
        "Satellite Link",
        "Digital Subscriber Line (DSL)",
        "Cellular 5G"
      ],
      "correct": 2
    },
    {
      "id": "net-552",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Using drag and drop, match each IEEE 802.11 wireless standard with its native operating frequency band.\n\n802.11a: \n802.11b: \n802.11g: \n802.11n:",
      "explanation": "802.11a uses 5 GHz; b and g use 2.4 GHz; 802.11n supports either band, depending on the device.",
      "dragItems": [
        {
          "id": "i1",
          "text": "2.4 GHz only"
        },
        {
          "id": "i2",
          "text": "5 GHz only"
        },
        {
          "id": "i3",
          "text": "Both 2.4 GHz and 5 GHz"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "802.11a:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "802.11b:",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "802.11g:",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "802.11n:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-553",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each of the following statements regarding Virtual LANs (VLANs) and network segmentation, select Yes if the statement is true and No if the statement is false.",
      "explanation": "VLANs logically group ports and users, split broadcast domains, and require routing for inter-VLAN communication.",
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
          "label": "A VLAN can group users together based on their function rather than their physical location.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "VLANs increase the size of a single broadcast domain across the entire switch.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Communication between different VLANs requires a Layer 3 routing device.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-554",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "You are configuring a new wireless router for a small office and need to ensure maximum security.\n\nUse the dropdown menus to complete each statement.\n\nThe most secure encryption standard currently available for modern Wi-Fi networks is ....... \n[1]\n\n\nTo authenticate individual users via a central server instead of a shared password, you should implement ....... \n[2]",
      "explanation": "WPA3 is the newer Wi-Fi security generation. Enterprise authentication uses 802.1X and an authentication service such as RADIUS rather than a shared personal password.",
      "dragItems": [
        {
          "id": "i1",
          "text": "WEP"
        },
        {
          "id": "i2",
          "text": "WPA"
        },
        {
          "id": "i3",
          "text": "WPA3"
        },
        {
          "id": "i4",
          "text": "WPA2"
        },
        {
          "id": "i5",
          "text": "Open authentication"
        },
        {
          "id": "i6",
          "text": "WPA3-Enterprise (802.1X/RADIUS)"
        },
        {
          "id": "i7",
          "text": "WPA3-Personal (SAE)"
        },
        {
          "id": "i8",
          "text": "WEP shared key"
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
      "id": "net-555",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which type of network device is primarily designed to connect everyday \"Internet of Things\" (IoT) appliances to a local network, often using low-power protocols?",
      "explanation": "An IoT gateway bridges low-power device protocols and IP networks and can aggregate device traffic.",
      "options": [
        "Core Switch",
        "IoT Gateway",
        "Enterprise Router",
        "Patch Panel"
      ],
      "correct": 1
    },
    {
      "id": "net-556",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which term refers to the actual path that data signals take as they travel across the network media, regardless of how the cables are physically laid out?",
      "explanation": "Logical topology describes data flow, whereas physical topology describes physical cabling and device placement.",
      "options": [
        "Physical Topology",
        "Logical Topology",
        "Infrastructure Mode",
        "Mesh Connectivity"
      ],
      "correct": 1
    },
    {
      "id": "net-557",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each of the following statements regarding Cloud Computing models, select Yes if the statement is true and No if the statement is false.",
      "explanation": "Public clouds share provider infrastructure; private clouds offer dedicated control but do not automatically guarantee superior security. IaaS exposes infrastructure rather than only finished software.",
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
          "label": "A public cloud is owned and operated by a third-party provider and shares infrastructure among customers.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A private cloud automatically guarantees the highest security regardless of configuration or administration.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "IaaS supplies only finished end-user applications and no infrastructure resources.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-558",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "You are designing a high-redundancy network for a critical data center.\n\nUse the dropdown menus to complete each statement.\n\nThe topology where every node is connected to every other node, providing the most fault tolerance, is a ....... \n[1]\n\n\nIf you only connect some nodes to others to save on costs while maintaining some redundancy, you are using a ....... \n[2]",
      "explanation": "Full mesh links every pair of nodes; partial mesh adds selected redundant links at lower cost.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Star"
        },
        {
          "id": "i2",
          "text": "Unidirectional ring"
        },
        {
          "id": "i3",
          "text": "Full mesh"
        },
        {
          "id": "i4",
          "text": "Partial mesh"
        },
        {
          "id": "i5",
          "text": "Unidirectional ring"
        },
        {
          "id": "i6",
          "text": "Partial mesh"
        },
        {
          "id": "i7",
          "text": "Full mesh"
        },
        {
          "id": "i8",
          "text": "Star"
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
      "id": "net-559",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which data transmission type is used when a streaming server sends a single video feed to a specific group of interested subscribers rather than the entire network?",
      "explanation": "Multicast delivers traffic to members of a destination group rather than every host in the broadcast domain.",
      "options": [
        "Unicast",
        "Anycast",
        "Broadcast",
        "Multicast"
      ],
      "correct": 3
    },
    {
      "id": "net-560",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which type of network allows authorized external users, such as vendors or business partners, to access specific parts of an organization's internal network without granting them full access?",
      "explanation": "An extranet offers controlled access to selected organizational resources for authorized partners or customers.",
      "options": [
        "The Intranet",
        "A Virtual Private Network (VPN)",
        "The Extranet",
        "A Local Area Network (LAN)"
      ],
      "correct": 2
    },
    {
      "id": "net-561",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "You are setting up wireless connections for different scenarios. Use the dropdown menus to identify the wireless network mode described.\n\nTwo laptops connecting directly to each other to transfer a file without using a router is known as ....... \n[1]\n\n\nConnecting your smartphone to a coffee shop's Wi-Fi router to access the internet is known as ....... \n[2]",
      "explanation": "Ad hoc Wi-Fi connects peers directly; infrastructure mode uses an access point.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Infrastructure mode"
        },
        {
          "id": "i2",
          "text": "Monitor mode"
        },
        {
          "id": "i3",
          "text": "Ad hoc mode"
        },
        {
          "id": "i4",
          "text": "Monitor mode"
        },
        {
          "id": "i5",
          "text": "Infrastructure mode"
        },
        {
          "id": "i6",
          "text": "Ad hoc mode"
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
      "id": "net-562",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each of the following statements regarding Internet of Things (IoT) devices, select Yes if the statement is true and No if the statement is false.",
      "explanation": "Many IoT devices use IP networking, are not limited to servers, and require security measures such as replacing weak default credentials.",
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
          "label": "IoT devices, such as smart thermostats, often require IP addresses to communicate over a network.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "IoT devices are strictly defined as high-performance servers used for data processing.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Security is a major concern for IoT devices because many have weak default passwords.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-563",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Using drag and drop, match the virtualization concept with its correct description.\n\nType 1 Hypervisor: \nType 2 Hypervisor: \nVirtual Machine (VM):",
      "explanation": "Type 1 hypervisors run on hardware, Type 2 hypervisors run on a host OS, and a VM is a virtualized computer.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A software-based computer that runs an operating system."
        },
        {
          "id": "i2",
          "text": "Installs as an application on top of an existing host OS (e.g., VMware Workstation)."
        },
        {
          "id": "i3",
          "text": "Installs directly on the bare-metal hardware (e.g., Microsoft Hyper-V, ESXi)."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Type 1 Hypervisor:",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Type 2 Hypervisor:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Virtual Machine (VM):",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-564",
      "chapter": "echipamente",
      "type": "single",
      "question": "Where is the most secure location to place a public-facing web server so that it is accessible from the internet but isolated from the sensitive internal corporate network?",
      "explanation": "A properly firewalled DMZ makes the public service reachable without placing it directly in the trusted internal network.",
      "options": [
        "Inside the Secure Internal VLAN",
        "In the Demilitarized Zone (DMZ)",
        "On the Administrative Management Network",
        "Connected directly to the Core Switch without a firewall"
      ],
      "correct": 1
    },
    {
      "id": "net-565",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which Wide Area Network (WAN) connection type is typically used in rural or remote locations where no other cabling infrastructure exists, but often suffers from high latency due to signal travel distance?",
      "explanation": "Satellite links can serve remote sites without terrestrial cabling. Geostationary systems have especially high propagation latency; low-Earth-orbit systems have less.",
      "options": [
        "Fiber to the Home (FTTH)",
        "Cable Broadband",
        "Satellite Internet",
        "Digital Subscriber Line (DSL)"
      ],
      "correct": 2
    },
    {
      "id": "net-566",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Using drag and drop, match the wireless security standard with its description.\n\nWEP: \nWPA2: \nWPA3:",
      "explanation": "WEP is obsolete, WPA2 supports AES-CCMP, and WPA3-Personal introduces SAE for password-based authentication.",
      "dragItems": [
        {
          "id": "i1",
          "text": "The newest and most secure standard, introducing Simultaneous Authentication of Equals (SAE)."
        },
        {
          "id": "i2",
          "text": "An obsolete and highly vulnerable protocol that uses a static encryption key."
        },
        {
          "id": "i3",
          "text": "A standard that introduced AES encryption and is currently the most widely supported secure protocol."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "WEP:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "WPA2:",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "WPA3:",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-567",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "You are identifying different types of networks based on their geographical scope. Use the dropdown menus to complete each statement.\n\nA Bluetooth connection between a smartphone and a wireless headset is an example of a ....... \n[1]\n\n\nA network that connects multiple office buildings across different cities or countries is known as a ....... \n[2]",
      "explanation": "A personal area network covers nearby personal devices; a wide area network joins geographically separated sites.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Intranet"
        },
        {
          "id": "i2",
          "text": "PAN"
        },
        {
          "id": "i3",
          "text": "Internet"
        },
        {
          "id": "i4",
          "text": "Extranet"
        },
        {
          "id": "i5",
          "text": "WAN"
        },
        {
          "id": "i6",
          "text": "PAN"
        },
        {
          "id": "i7",
          "text": "LAN"
        },
        {
          "id": "i8",
          "text": "MAN"
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
      "id": "net-568",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which cellular network generation represented a major shift towards an all-IP network architecture, offering significantly higher data speeds and support for high-definition video streaming (often marketed as LTE)?",
      "explanation": "4G systems, including LTE and LTE-Advanced, moved mobile networking toward high-speed all-IP service architectures.",
      "options": [
        "2G",
        "3G",
        "4G",
        "1G"
      ],
      "correct": 2
    },
    {
      "id": "net-569",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Using drag and drop, match the Bluetooth Power Class with its typical maximum effective range.\n\nClass 1: \nClass 2: \nClass 3:",
      "explanation": "These are traditional nominal Class 1, 2, and 3 ranges. Actual Bluetooth range also depends on the PHY, antennas, obstacles, and receiver sensitivity.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Approximately 1 meter (Short range)"
        },
        {
          "id": "i2",
          "text": "Approximately 100 meters (Long range)"
        },
        {
          "id": "i3",
          "text": "Approximately 10 meters (Standard mobile range)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class 1:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Class 2:",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Class 3:",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-570",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "For each of the following statements regarding wireless signal interference, select Yes if the statement is true and No if the statement is false.",
      "explanation": "The 2.4 GHz band is crowded, metal can obstruct signals, and adding co-channel access points may increase contention rather than throughput.",
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
          "label": "The 2.4 GHz frequency band is generally more crowded and prone to interference than the 5 GHz band.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Physical obstacles made of metal (like filing cabinets) can reflect or block Wi-Fi signals.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Adding more Access Points on the exact same channel in a small area will always improve network speed.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-571",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "Identify the network topology characteristics using the dropdown menus.\n\nA topology where a central device failure disrupts the entire network is a ....... \n[1]\n\n\nA topology where data travels in one direction and a break in the cable affects all nodes is a ....... \n[2]",
      "explanation": "A single central-device star depends on that device. A simple unprotected unidirectional ring depends on the continuity of the loop.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Unidirectional ring"
        },
        {
          "id": "i2",
          "text": "Star"
        },
        {
          "id": "i3",
          "text": "Full mesh"
        },
        {
          "id": "i4",
          "text": "Partial mesh"
        },
        {
          "id": "i5",
          "text": "Unidirectional ring"
        },
        {
          "id": "i6",
          "text": "Full mesh"
        },
        {
          "id": "i7",
          "text": "Partial mesh"
        },
        {
          "id": "i8",
          "text": "Star"
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
      "id": "net-572",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which broadband internet connection type typically operates on a shared bandwidth model, meaning that internet speeds may decrease during peak usage hours when many neighbors are online?",
      "explanation": "Cable subscribers commonly share a neighborhood access segment, so peak-hour congestion can reduce throughput. Other access technologies can also have shared upstream bottlenecks.",
      "options": [
        "Cable Internet",
        "Dedicated Leased Line",
        "Digital Subscriber Line (DSL)",
        "Fiber to the Premises (FTTP)"
      ],
      "correct": 0
    },
    {
      "id": "net-573",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which major advantage does a Client-Server network model offer over a Peer-to-Peer model, especially in organizations with more than 10 computers?",
      "explanation": "Client-server networks centralize authentication, policy, resource administration, and security management.",
      "options": [
        "Lower initial hardware cost",
        "Decentralized data storage",
        "Centralized administration and security",
        "No requirement for a specialized operating system"
      ],
      "correct": 2
    },
    {
      "id": "net-574",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Using drag and drop, match the Cloud Service Model with the level of control it provides to the customer.\n\nSaaS (Software as a Service): \nIaaS (Infrastructure as a Service): \nPaaS (Platform as a Service):",
      "explanation": "SaaS supplies applications, IaaS supplies infrastructure managed by the customer above the hardware layer, and PaaS supplies an application platform with provider-managed runtime infrastructure.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Provides a framework for developers to build apps, managing the OS but not the hardware."
        },
        {
          "id": "i2",
          "text": "Provides the highest level of control, giving access to virtual hardware, storage, and networking."
        },
        {
          "id": "i3",
          "text": "Provides fully functional end-user applications; the user manages almost nothing."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SaaS (Software as a Service):",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "IaaS (Infrastructure as a Service):",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "PaaS (Platform as a Service):",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-575",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each of the following statements regarding Remote Access methods, select Yes if the statement is true and No if the statement is false.",
      "explanation": "Remote Desktop can redirect audio, files, printers, and other data in addition to input and screen updates. VPNs can be site-to-site, and Always On VPN can connect automatically.",
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
          "label": "A Remote Desktop connection transmits only keystrokes and mouse clicks to the server and receives screen updates back.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "VPNs are only used to connect individual employees to the office; they cannot connect two different office sites together.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Always-on VPNs can automatically establish a secure connection whenever an internet connection is detected.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-576",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Compare the characteristics of LANs and WANs using the dropdown menus.\n\nA network that typically offers higher bandwidth and lower latency is a ....... \n[1]\n\n\nA network that relies on leased telecommunication lines provided by an ISP is a ....... \n[2]",
      "explanation": "LANs usually provide low-latency local communication; WANs connect distant networks using provider infrastructure.",
      "dragItems": [
        {
          "id": "i1",
          "text": "LAN"
        },
        {
          "id": "i2",
          "text": "PAN"
        },
        {
          "id": "i3",
          "text": "MAN"
        },
        {
          "id": "i4",
          "text": "WAN"
        },
        {
          "id": "i5",
          "text": "PAN"
        },
        {
          "id": "i6",
          "text": "LAN"
        },
        {
          "id": "i7",
          "text": "MAN"
        },
        {
          "id": "i8",
          "text": "WAN"
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
      "id": "net-577",
      "chapter": "protocoale",
      "type": "single",
      "question": "In legacy Ethernet networks using hubs, what is the primary function of the CSMA/CD (Carrier Sense Multiple Access with Collision Detection) protocol?",
      "explanation": "Half-duplex Ethernet uses collision detection and randomized backoff before retrying. Modern switched full-duplex Ethernet does not use CSMA/CD.",
      "options": [
        "To encrypt data packets before transmission.",
        "To manage data collisions by forcing devices to wait a random time before retransmitting.",
        "To ensure that wireless signals do not interfere with wired signals.",
        "To assign IP addresses dynamically to all connected devices."
      ],
      "correct": 1
    },
    {
      "id": "net-578",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Using drag and drop, match the network component or characteristic with the specific topology it is most required for.\n\nTerminator: \nToken: \nCentral Hub/Switch:",
      "explanation": "Traditional coaxial bus Ethernet needs terminators, Token Ring uses token access, and star networks connect to a central device.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Star Topology"
        },
        {
          "id": "i2",
          "text": "Ring Topology"
        },
        {
          "id": "i3",
          "text": "Bus Topology"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Terminator:",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Token:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Central Hub/Switch:",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-579",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "For each of the following statements regarding topology fault tolerance, select Yes if the statement is true and No if the statement is false.",
      "explanation": "A broken shared bus can disrupt the segment, one star access cable normally affects only its host, and full mesh provides many alternate paths.",
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
          "label": "In a Bus topology, a break anywhere in the main cable typically causes the entire network to fail.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "In a Star topology, if one workstation cable breaks, the entire network goes down.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A Full Mesh topology offers the highest level of redundancy because every node is connected to every other node.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-580",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which hybrid topology is created when multiple Star topology networks are connected together via a main backbone cable (often creating a \"Star of Stars\")?",
      "explanation": "A tree topology connects multiple star segments in a hierarchy or through a backbone.",
      "options": [
        "Tree Topology",
        "Ring Topology",
        "Full Mesh Topology",
        "Point-to-Point Topology"
      ],
      "correct": 0
    },
    {
      "id": "net-581",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Using drag and drop, match the access method description with the correct protocol.\n\n\"Listen before talking\" on wired networks: \n\"Listen before talking\" on wireless networks: \nDeterministic passing of a data frame:",
      "explanation": "Legacy half-duplex Ethernet detects collisions, Wi-Fi attempts to avoid them, and token passing grants transmission permission in turn.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Token Passing"
        },
        {
          "id": "i2",
          "text": "CSMA/CD"
        },
        {
          "id": "i3",
          "text": "CSMA/CA"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "\"Listen before talking\" on wired networks:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "\"Listen before talking\" on wireless networks:",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Deterministic passing of a data frame:",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-582",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each of the following statements regarding network access control, select Yes if the statement is true and No if the statement is false.",
      "explanation": "CSMA/CD uses contention and cannot promise a transmission time. Token access is deterministic, while Wi-Fi uses collision avoidance.",
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
          "label": "Ethernet using CSMA/CD is considered a deterministic access method because you can guarantee when a device will transmit.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Token Ring is a deterministic method because a device must possess the token to transmit data.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "CSMA/CA is used in wireless networks to avoid collisions because collisions cannot be easily detected in the air.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-583",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "You are analyzing the cost versus redundancy of Mesh networks. Use the dropdown menus to complete each statement.\n\nA topology where every device connects to every other device, offering 100% redundancy but high cost, is a ....... \n[1]\n\n\nA topology where devices connect to only a few other key devices to balance cost and redundancy is a ....... \n[2]",
      "explanation": "Full mesh maximizes pairwise connections but cannot guarantee immunity from every failure. Partial mesh balances link cost and alternate paths.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Unidirectional ring"
        },
        {
          "id": "i2",
          "text": "Full mesh"
        },
        {
          "id": "i3",
          "text": "Partial mesh"
        },
        {
          "id": "i4",
          "text": "Star"
        },
        {
          "id": "i5",
          "text": "Partial mesh"
        },
        {
          "id": "i6",
          "text": "Full mesh"
        },
        {
          "id": "i7",
          "text": "Star"
        },
        {
          "id": "i8",
          "text": "Unidirectional ring"
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
      "id": "net-584",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which simple topology consists of a dedicated link between exactly two devices (e.g., a router connected directly to another router), providing the highest bandwidth for that specific link?",
      "explanation": "A point-to-point topology dedicates a link to two endpoints, without guaranteeing a particular absolute bandwidth.",
      "options": [
        "Bus",
        "Star",
        "Point-to-Point",
        "Multipoint"
      ],
      "correct": 2
    },
    {
      "id": "net-585",
      "chapter": "protocoale",
      "type": "single",
      "question": "In a CSMA/CD network domain, what happens immediately after a collision is detected by two transmitting devices?",
      "explanation": "After signaling the collision and stopping the frame, Ethernet stations use a randomized binary exponential backoff before retrying.",
      "options": [
        "The switch reboots automatically.",
        "Both devices stop transmitting and wait for a random period of time (backoff algorithm).",
        "The device with the higher IP address continues to transmit.",
        "The data is automatically rerouted to a backup cable."
      ],
      "correct": 1
    },
    {
      "id": "net-586",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary purpose of the OSI Model?",
      "explanation": "The OSI reference model standardizes networking functions and interfaces to support interoperability and troubleshooting.",
      "options": [
        "To manage IP addressing on a local network",
        "To enable interoperability between different hardware and software manufacturers",
        "To encrypt data for secure web browsing",
        "To provide a physical connection between devices"
      ],
      "correct": 1
    },
    {
      "id": "net-587",
      "chapter": "protocoale",
      "type": "single",
      "question": "In the OSI model, what is the term used to describe the process where each layer adds its own control information to the data as it moves from Layer 7 down to Layer 1?",
      "explanation": "Encapsulation adds layer-specific headers and sometimes trailers as data moves down the protocol stack.",
      "options": [
        "Segmentation",
        "Multiplexing",
        "Encapsulation",
        "Decapsulation"
      ],
      "correct": 2
    },
    {
      "id": "net-588",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which layer of the OSI model acts as the direct interface between software applications and network services?",
      "explanation": "The Application layer supplies network services closest to user applications.",
      "options": [
        "Transport Layer (Layer 4)",
        "Application Layer (Layer 7)",
        "Presentation Layer (Layer 6)",
        "Data Link Layer (Layer 2)"
      ],
      "correct": 1
    },
    {
      "id": "net-589",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which Application Layer protocol translates human-readable domain names into numerical IP addresses necessary for routing?",
      "explanation": "DNS resolves names to records including IPv4 A and IPv6 AAAA addresses.",
      "options": [
        "HTTP",
        "SMTP",
        "FTP",
        "DNS"
      ],
      "correct": 3
    },
    {
      "id": "net-590",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol is utilized for the bidirectional transfer of files between a client and a server?",
      "explanation": "FTP is specifically designed for file transfer between clients and servers, although ordinary FTP does not encrypt credentials or content.",
      "options": [
        "FTP",
        "HTTPS",
        "SMTP",
        "SSH"
      ],
      "correct": 0
    },
    {
      "id": "net-591",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary function of the Presentation Layer (Layer 6) in the OSI model?",
      "explanation": "The Presentation layer conceptually handles representation, translation, compression, and encryption.",
      "options": [
        "Establishing and maintaining communication sessions",
        "Routing packets between different networks",
        "Data translation, formatting, encryption, and compression",
        "Delivering data locally using MAC addresses"
      ],
      "correct": 2
    },
    {
      "id": "net-592",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following formats or protocols is NOT typically associated with the Presentation Layer?",
      "explanation": "MAC addressing belongs to local-link delivery at the Data Link layer rather than data representation at the Presentation layer.",
      "options": [
        "SSL/TLS",
        "ASCII/EBCDIC",
        "JPEG/MPEG",
        "MAC addresses"
      ],
      "correct": 3
    },
    {
      "id": "net-593",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer establishes, maintains, synchronizes, and terminates dialogues between communicating applications?",
      "explanation": "The Session layer conceptually establishes, manages, synchronizes, and terminates application dialogues.",
      "options": [
        "Transport Layer",
        "Network Layer",
        "Session Layer",
        "Application Layer"
      ],
      "correct": 2
    },
    {
      "id": "net-594",
      "chapter": "protocoale",
      "type": "single",
      "question": "What type of communication mode, managed by the Session Layer, allows data transmission in both directions, but not simultaneously?",
      "explanation": "Half-duplex communication supports both directions but only one at a time; full duplex permits simultaneous transmission.",
      "options": [
        "Simplex",
        "Half-Duplex",
        "Full-Duplex",
        "Multiplex"
      ],
      "correct": 1
    },
    {
      "id": "net-595",
      "chapter": "protocoale",
      "type": "single",
      "question": "The Session Layer can insert checkpoints into a data stream. What is the main purpose of this synchronization?",
      "explanation": "Checkpoints provide known recovery positions so an interrupted dialogue can resume without restarting all work.",
      "options": [
        "To convert logical IP addresses to physical MAC addresses",
        "To resume communication from the last valid checkpoint if the session fails",
        "To encrypt the data stream at regular intervals",
        "To increase the overall bandwidth of the network connection"
      ],
      "correct": 1
    },
    {
      "id": "net-596",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which layer is responsible for the reliable, end-to-end delivery of data, utilizing segmentation, flow control, and error correction?",
      "explanation": "The Transport layer can provide reliable end-to-end delivery, sequencing, and flow control, as TCP does. Not every transport protocol offers these guarantees.",
      "options": [
        "Network Layer",
        "Data Link Layer",
        "Physical Layer",
        "Transport Layer"
      ],
      "correct": 3
    },
    {
      "id": "net-597",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the name of the Protocol Data Unit (PDU) at the Transport Layer when the TCP protocol is used?",
      "explanation": "A TCP transport PDU is called a segment; network packets and link frames are different encapsulation levels.",
      "options": [
        "Packet",
        "Segment",
        "Frame",
        "Bit"
      ],
      "correct": 1
    },
    {
      "id": "net-598",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which Transport Layer protocol is connectionless, fast, and does not guarantee data delivery, making it ideal for streaming video or online gaming?",
      "explanation": "UDP sends connectionless datagrams without built-in delivery, ordering, or retransmission guarantees, reducing transport overhead for suitable applications.",
      "options": [
        "TCP",
        "HTTP",
        "IP",
        "UDP"
      ],
      "correct": 3
    },
    {
      "id": "net-599",
      "chapter": "protocoale",
      "type": "single",
      "question": "How does the Transport Layer ensure that multiple applications can use the network connection simultaneously?",
      "explanation": "Transport ports distinguish application endpoints and enable multiplexing and demultiplexing traffic.",
      "options": [
        "By assigning a unique MAC address to each application",
        "By using port numbers for multiplexing and demultiplexing",
        "By routing packets through different physical paths",
        "By compressing the data before transmission"
      ],
      "correct": 1
    },
    {
      "id": "net-600",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer is responsible for routing packets across different networks from the source system to the destination system?",
      "explanation": "The Network layer handles logical addressing and routing between networks.",
      "options": [
        "Data Link Layer",
        "Transport Layer",
        "Network Layer",
        "Physical Layer"
      ],
      "correct": 2
    },
    {
      "id": "net-601",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following devices operates primarily at the Network Layer to determine the best path for data using routing tables?",
      "explanation": "A router selects next hops using Layer 3 routing information; ordinary switches and bridges primarily forward link-layer frames.",
      "options": [
        "Router",
        "Switch",
        "Hub",
        "Bridge"
      ],
      "correct": 0
    },
    {
      "id": "net-602",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which protocol operates at the Network Layer to diagnose network problems, such as reporting errors or testing connectivity with the Ping command?",
      "explanation": "ICMP carries IP control/error messages and supports Echo Request/Reply used by ping.",
      "options": [
        "TCP",
        "ICMP",
        "ARP",
        "HTTP"
      ],
      "correct": 1
    },
    {
      "id": "net-603",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary addressing mechanism used at the Network Layer?",
      "explanation": "The Network layer uses logical addresses such as IPv4 and IPv6; MAC addresses identify link-layer endpoints.",
      "options": [
        "Port numbers",
        "Domain names",
        "Logical IP addresses",
        "Physical MAC addresses"
      ],
      "correct": 2
    },
    {
      "id": "net-604",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer frames data for delivery across a local link and provides link-specific error detection?",
      "explanation": "The Data Link layer frames traffic for a local link and can detect errors; Ethernet error detection does not itself guarantee retransmission or reliable delivery.",
      "options": [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Presentation Layer"
      ],
      "correct": 1
    },
    {
      "id": "net-605",
      "chapter": "protocoale",
      "type": "single",
      "question": "The Data Link Layer is divided into two sub-layers. What are they?",
      "explanation": "The IEEE 802 architecture distinguishes Logical Link Control and Media Access Control sublayers.",
      "options": [
        "Carrier Sense (CS) and Collision Detection (CD)",
        "Transmission Control (TC) and User Datagram (UD)",
        "Network Control Protocol (NCP) and Link Control Protocol (LCP)",
        "Logical Link Control (LLC) and Media Access Control (MAC)"
      ],
      "correct": 3
    },
    {
      "id": "net-606",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the Protocol Data Unit (PDU) at the Data Link Layer called?",
      "explanation": "The link-layer PDU is a frame, containing a payload and link-specific control information.",
      "options": [
        "Packet",
        "Datagram",
        "Segment",
        "Frame"
      ],
      "correct": 3
    },
    {
      "id": "net-607",
      "chapter": "protocoale",
      "type": "single",
      "question": "How does the Data Link Layer typically detect errors in transmitted data within a local network?",
      "explanation": "An Ethernet frame's FCS contains a CRC used to detect many transmission errors; detection is distinct from correction or retransmission.",
      "options": [
        "By requesting a 3-way handshake before transmission",
        "By analyzing the IP header checksum",
        "By using a Cyclic Redundancy Check (CRC) in the frame trailer",
        "By sending ICMP echo requests"
      ],
      "correct": 2
    },
    {
      "id": "net-608",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer is responsible for transmitting raw bits over a physical medium, such as copper cables, optical fibers, or radio waves?",
      "explanation": "The Physical layer encodes and transmits bit signals over the medium.",
      "options": [
        "Transport Layer",
        "Network Layer",
        "Data Link Layer",
        "Physical Layer"
      ],
      "correct": 3
    },
    {
      "id": "net-609",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following devices functions at the Physical Layer by simply repeating an incoming signal out to all other ports?",
      "explanation": "A hub repeats physical signals to the other ports without learning MAC addresses or routing IP packets.",
      "options": [
        "Hub",
        "Switch",
        "Router",
        "Firewall"
      ],
      "correct": 0
    },
    {
      "id": "net-610",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the length of a conventional Ethernet EUI-48 MAC address?",
      "explanation": "The conventional Ethernet MAC address is 48 bits, usually displayed as six hexadecimal octets. Other identifier formats also exist.",
      "options": [
        "32 bits",
        "64 bits",
        "48 bits",
        "128 bits"
      ],
      "correct": 2
    },
    {
      "id": "net-611",
      "chapter": "protocoale",
      "type": "single",
      "question": "The first 24 bits (OUI) of a MAC address are used to identify what?",
      "explanation": "For a universally administered EUI-48 address, the traditional 24-bit OUI identifies the assigned organization, usually the manufacturer.",
      "options": [
        "The routing protocol being used",
        "The specific serial number of the device",
        "The IP network the device belongs to",
        "The manufacturer of the network interface card"
      ],
      "correct": 3
    },
    {
      "id": "net-612",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol is used to resolve a known logical IP address into its corresponding physical MAC address on a local network?",
      "explanation": "ARP resolves an on-link IPv4 address to a link-layer address. IPv6 uses Neighbor Discovery instead.",
      "options": [
        "DNS",
        "DHCP",
        "ARP",
        "NAT"
      ],
      "correct": 2
    },
    {
      "id": "net-613",
      "chapter": "protocoale",
      "type": "single",
      "question": "How many layers are in the conventional TCP/IP reference model (not the five-layer teaching variation)?",
      "explanation": "The conventional TCP/IP reference model has four layers; a common teaching variation separates the link layer into two and uses five.",
      "options": [
        "5 layers",
        "4 layers",
        "6 layers",
        "7 layers"
      ],
      "correct": 1
    },
    {
      "id": "net-614",
      "chapter": "protocoale",
      "type": "single",
      "question": "In the TCP/IP model, which layer combines the functions of the OSI model's Application, Presentation, and Session layers?",
      "explanation": "TCP/IP combines the OSI upper three layers into its Application layer.",
      "options": [
        "Transport Layer",
        "Internet Layer",
        "Application Layer",
        "Network Interface Layer"
      ],
      "correct": 2
    },
    {
      "id": "net-615",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the main purpose of the TCP 3-way handshake?",
      "explanation": "SYN, SYN-ACK, and ACK establish a TCP connection and synchronize sequence numbers before ordinary data exchange.",
      "options": [
        "To convert analog signals into digital data",
        "To establish a reliable, connection-oriented session before transmitting data",
        "To route packets through the fastest available path",
        "To translate a domain name into an IP address"
      ],
      "correct": 1
    },
    {
      "id": "net-616",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following is a primary characteristic of the Transmission Control Protocol (TCP)?",
      "explanation": "TCP provides an ordered reliable byte stream through sequencing, acknowledgments, and retransmission; an unrecoverable connection failure is reported rather than an absolute promise of delivery.",
      "options": [
        "It operates at the Internet layer.",
        "It provides an ordered, reliable byte stream using acknowledgments and retransmissions, or reports connection failure.",
        "It is connectionless.",
        "It avoids error checking to run faster than UDP."
      ],
      "correct": 1
    },
    {
      "id": "net-617",
      "chapter": "protocoale",
      "type": "single",
      "question": "In the TCP/IP model, which layer is responsible for managing routing and IP addressing to ensure packets reach their correct destination?",
      "explanation": "The Internet layer uses IP addressing and routing to carry packets between networks.",
      "options": [
        "Application Layer",
        "Transport Layer",
        "Internet Layer",
        "Network Interface Layer"
      ],
      "correct": 2
    },
    {
      "id": "net-618",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which TCP mechanism prevents a fast sender from overflowing a slower receiver by using the advertised receive window?",
      "explanation": "Flow control protects receiver buffers using the advertised receive window; congestion control is the separate mechanism that responds to network congestion.",
      "options": [
        "Multiplexing",
        "Encapsulation",
        "Flow control",
        "Error detection"
      ],
      "correct": 2
    },
    {
      "id": "net-619",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following protocols belongs to the Internet Layer of the TCP/IP model?",
      "explanation": "IPv4 is an Internet-layer protocol. TCP is transport, HTTP application, and Ethernet link/network-interface technology.",
      "options": [
        "HTTP",
        "IPv4",
        "Ethernet",
        "TCP"
      ],
      "correct": 1
    },
    {
      "id": "net-620",
      "chapter": "protocoale",
      "type": "single",
      "question": "What mainly distinguishes a MAC address from an IP address?",
      "explanation": "MAC addresses identify local-link interfaces and IP addresses provide logical routing identity. MAC addresses can be locally changed or randomized, so permanence is not guaranteed.",
      "options": [
        "MAC addresses are assigned by DHCP and IP addresses are always factory-fixed.",
        "MAC addresses perform global IP routing.",
        "Ethernet MAC addresses are 32 bits and IPv4 addresses are 48 bits.",
        "MAC addresses identify link-layer interfaces, while IP addresses provide logical network-layer addressing; either may change."
      ],
      "correct": 3
    },
    {
      "id": "net-621",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol operates at the Application Layer to securely access and control network devices or servers remotely?",
      "explanation": "SSH provides encrypted remote login and management at the Application layer.",
      "options": [
        "FTP",
        "SSH",
        "SMTP",
        "POP3"
      ],
      "correct": 1
    },
    {
      "id": "net-622",
      "chapter": "protocoale",
      "type": "single",
      "question": "At the Transport Layer, what does TCP use to verify that all packets have been correctly received in the proper sequence?",
      "explanation": "Sequence numbers and acknowledgments let TCP track received byte ranges, restore ordering, and retransmit missing data.",
      "options": [
        "Sequence numbers and Acknowledgments (ACKs)",
        "Subnet masks and Default gateways",
        "MAC addresses and ARP tables",
        "Port forwarding rules"
      ],
      "correct": 0
    },
    {
      "id": "net-623",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following pairs correctly matches the OSI layer to its corresponding Protocol Data Unit (PDU)?",
      "explanation": "Network-layer traffic is encapsulated in packets; link traffic uses frames and the Physical layer carries bits.",
      "options": [
        "Transport Layer - Frame",
        "Physical Layer - Datagram",
        "Network Layer - Packet",
        "Data Link Layer - Segment"
      ],
      "correct": 2
    },
    {
      "id": "net-624",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "If a network engineer is diagnosing an issue with a cut or damaged fiber optic cable, at which OSI layer is the problem occurring?",
      "explanation": "A damaged fiber affects the physical transmission medium and is a Layer 1 fault.",
      "options": [
        "Physical Layer",
        "Data Link Layer",
        "Transport Layer",
        "Network Layer"
      ],
      "correct": 0
    },
    {
      "id": "net-625",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which TCP/IP layer handles the encoding of data for transmission over specific physical media, such as Ethernet or Wi-Fi?",
      "explanation": "The TCP/IP Network Interface layer handles link framing and the medium-specific delivery mechanisms associated with Ethernet or Wi-Fi.",
      "options": [
        "Internet Layer",
        "Network Interface Layer",
        "Transport Layer",
        "Application Layer"
      ],
      "correct": 1
    }
  ]
};
