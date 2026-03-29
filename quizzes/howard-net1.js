module.exports = {
    id: 'howard-networking-one',
    title: 'Networking 1',
    desc: 'Network fundamentals, protocols, switch config, security',
    user: 'howard',   // Only shown to Howard
    questions: [
        {
            id: 1,
            text: "Which of the following best describes an end device in a network?",
            options: ["A device that regenerates and retransmits data signals between networks", "A device where a message originates from or is received", "A device that maintains information about pathways in a network", "A device that interconnects multiple local area networks"],
            correct: 1
        },
        {
            id: 2,
            text: "A company sets up a server that allows employees to store and retrieve shared documents. What type of server is this?",
            options: ["Email server", "Web server", "File server", "Proxy server"],
            correct: 2
        },
        {
            id: 3,
            text: "Which of the following is a disadvantage of a peer-to-peer network?",
            options: ["It requires expensive centralized hardware", "It is difficult to set up initially", "It does not scale well and performs more slowly", "It requires a dedicated server for every client"],
            correct: 2
        },
        {
            id: 4,
            text: "In a peer-to-peer network, what is true about the role of a device?",
            options: ["Each device can only function as a server", "Each device can only function as a client", "A device can function as both a client and a server", "Devices must alternate roles on a scheduled basis"],
            correct: 2
        },
        {
            id: 5,
            text: "Which intermediary network device is primarily responsible for filtering traffic based on security rules?",
            options: ["Switch", "Wireless access point", "Router", "Firewall"],
            correct: 3
        },
        {
            id: 6,
            text: "Which type of network media transmits data using pulses of light?",
            options: ["Copper wire", "Wireless transmission", "Fiber-optic cable", "Coaxial cable"],
            correct: 2
        },
        {
            id: 7,
            text: "What does a Network Interface Card (NIC) provide?",
            options: ["A logical addressing scheme for routing packets across networks", "The physical connection to the network at an end device", "The pathway for electromagnetic wave transmission", "Centralized management of network security policies"],
            correct: 1
        },
        {
            id: 8,
            text: "Which topology diagram shows the physical location of devices and cable installation?",
            options: ["Logical topology", "Hybrid topology", "Physical topology", "Star topology"],
            correct: 2
        },
        {
            id: 9,
            text: "A logical topology diagram would most likely display which of the following?",
            options: ["The physical placement of cables in a building", "The type of media used for each connection", "Device ports, addressing schemes, and logical connections", "The geographical spread of a wide area network"],
            correct: 2
        },
        {
            id: 10,
            text: "A business connects several computers within a single office floor with high-speed bandwidth, administered by one IT team. This is best described as a:",
            options: ["WAN", "LAN", "Extranet", "SOHO network"],
            correct: 1
        },
        {
            id: 11,
            text: "What distinguishes a WAN from a LAN in terms of administration?",
            options: ["WANs are always administered by a single organization", "WANs are typically administered by service providers", "LANs span wider geographical areas than WANs", "LANs require more complex routing protocols than WANs"],
            correct: 1
        },
        {
            id: 12,
            text: "A contractor working for a partner company needs secure access to an organization's internal resources. Which network type is designed for this purpose?",
            options: ["Intranet", "Extranet", "Public cloud", "LAN"],
            correct: 1
        },
        {
            id: 13,
            text: "Which characteristic of network architecture ensures the network can add new users without degrading performance for existing users?",
            options: ["Fault tolerance", "Quality of Service", "Scalability", "Security"],
            correct: 2
        },
        {
            id: 14,
            text: "Fault tolerance in a network architecture is best achieved by:",
            options: ["Encrypting all data transmissions", "Prioritizing voice and video traffic over data", "Maintaining multiple paths so failures affect fewer devices", "Assigning static IP addresses to all end devices"],
            correct: 2
        },
        {
            id: 15,
            text: "Which network architecture characteristic is primarily responsible for ensuring that voice and live video are delivered reliably to all users?",
            options: ["Fault tolerance", "Scalability", "Security", "Quality of Service"],
            correct: 3
        },
        {
            id: 16,
            text: "Which of the following correctly lists the three goals of network security?",
            options: ["Confidentiality, scalability, and integrity", "Confidentiality, integrity, and availability", "Availability, fault tolerance, and encryption", "Integrity, routing, and authentication"],
            correct: 1
        },
        {
            id: 17,
            text: "A hospital network ensures that patient records cannot be read by unauthorized personnel. Which security goal does this represent?",
            options: ["Availability", "Integrity", "Confidentiality", "Scalability"],
            correct: 2
        },
        {
            id: 18,
            text: "Which security goal ensures that data has not been altered while being transmitted across a network?",
            options: ["Confidentiality", "Availability", "Fault tolerance", "Integrity"],
            correct: 3
        },
        {
            id: 19,
            text: "Which of the following is classified as an external security threat?",
            options: ["An employee accidentally misconfiguring a server", "A stolen laptop belonging to a staff member", "A denial of service attack from outside the organization", "A malicious insider accessing restricted files"],
            correct: 2
        },
        {
            id: 20,
            text: "Which of the following is classified as an internal security threat?",
            options: ["Zero-day attacks launched from remote actors", "Identity theft performed by external hackers", "Adware installed through malicious downloads", "Accidental misuse of systems by employees"],
            correct: 3
        },
        {
            id: 21,
            text: "A home user wants basic protection against malicious software and unauthorized network access. Which solutions are most appropriate?",
            options: ["Dedicated firewall systems and VPNs", "Intrusion Prevention Systems and ACLs", "Antivirus/antispyware software and firewall filtering", "Access Control Lists and dedicated firewall systems"],
            correct: 2
        },
        {
            id: 22,
            text: "Which security solution is specifically designed for large networks to create secure tunnels for remote access?",
            options: ["Antispyware software", "Virtual Private Network (VPN)", "Firewall filtering", "Antivirus software"],
            correct: 1
        },
        {
            id: 23,
            text: "What does the BYOD trend allow users to do?",
            options: ["Access corporate networks using only company-issued hardware", "Use personal devices such as laptops and smartphones to access information", "Bring dedicated servers into a home office environment", "Bypass standard security protocols using personal credentials"],
            correct: 1
        },
        {
            id: 24,
            text: "Which of the following cloud types is built to meet the specific needs of a particular industry such as healthcare?",
            options: ["Public cloud", "Private cloud", "Hybrid cloud", "Custom cloud"],
            correct: 3
        },
        {
            id: 25,
            text: "A government agency deploys its own cloud infrastructure intended exclusively for internal use. Which cloud type does this describe?",
            options: ["Public cloud", "Custom cloud", "Hybrid cloud", "Private cloud"],
            correct: 3
        },
        {
            id: 26,
            text: "Which of the following is NOT listed as a type of cloud in the document?",
            options: ["Public cloud", "Community cloud", "Private cloud", "Hybrid cloud"],
            correct: 1
        },
        {
            id: 27,
            text: "What is the primary focus area of the CCNA certification?",
            options: ["Hardware assembly, cable installation, and physical network design", "IP foundation, security, wireless, virtualization, automation, and network programmability", "Database management, cloud storage, and application development", "Operating system configuration, server management, and desktop support"],
            correct: 1
        },
        {
            id: 28,
            text: "Which component of an operating system manages how hardware resources are used to meet software requirements?",
            options: ["Shell", "Hardware", "Kernel", "CLI"],
            correct: 2
        },
        {
            id: 29,
            text: "A network technician connects a laptop directly to a Cisco switch using a cable to perform the initial configuration. Which access method is being used?",
            options: ["Telnet", "SSH", "Console", "SVI"],
            correct: 2
        },
        {
            id: 30,
            text: "Which access method establishes a secure remote CLI connection to a network device over a network?",
            options: ["Console", "Telnet", "AUX", "SSH"],
            correct: 3
        },
        {
            id: 31,
            text: "What is the key security difference between SSH and Telnet?",
            options: ["SSH uses a graphical interface while Telnet uses a command line", "SSH establishes a secure connection while Telnet establishes an insecure one", "Telnet requires physical access while SSH does not", "SSH is only available on routers while Telnet works on switches"],
            correct: 1
        },
        {
            id: 32,
            text: "Which command mode on a Cisco device is identified by the '>' symbol and provides access to only basic monitoring commands?",
            options: ["Privileged EXEC Mode", "Global Configuration Mode", "Interface Configuration Mode", "User EXEC Mode"],
            correct: 3
        },
        {
            id: 33,
            text: "A technician needs full access to all device commands and features on a Cisco switch. Which mode must they enter?",
            options: ["User EXEC Mode", "Line Configuration Mode", "Privileged EXEC Mode", "Interface Configuration Mode"],
            correct: 2
        },
        {
            id: 34,
            text: "Which configuration mode is used to set parameters for a specific switch port or router interface?",
            options: ["Global Configuration Mode", "Line Configuration Mode", "Interface Configuration Mode", "User EXEC Mode"],
            correct: 2
        },
        {
            id: 35,
            text: "Where is the startup-config file stored on a Cisco device?",
            options: ["RAM", "Flash memory", "ROM", "NVRAM"],
            correct: 3
        },
        {
            id: 36,
            text: "Which configuration file reflects the current active configuration and immediately affects device operation?",
            options: ["startup-config stored in NVRAM", "running-config stored in RAM", "startup-config stored in RAM", "running-config stored in NVRAM"],
            correct: 1
        },
        {
            id: 37,
            text: "What is the purpose of a Switch Virtual Interface (SVI)?",
            options: ["To physically connect a switch to fiber-optic media", "To encrypt all traffic passing through the switch", "To provide a means to remotely manage a switch", "To define the logical topology of the network"],
            correct: 2
        },
        {
            id: 38,
            type: 'identification',
            text: "What global configuration command is used to encrypt all plaintext passwords in a Cisco device's configuration files?",
            answer: ["service password-encryption"]
        },
        {
            id: 39,
            text: "What is the purpose of a 'banner motd' on a network device?",
            options: ["To display the device's current IP address upon login", "To warn unauthorized personnel against attempting to access the device", "To provide a summary of available configuration commands", "To log all console access attempts to a remote server"],
            correct: 1
        },
        {
            id: 40,
            text: "In command syntax documentation, what do square brackets [ ] indicate?",
            options: ["A required element that must be entered", "A keyword that must be typed exactly as shown", "An argument where the user supplies a value", "An optional element in the command"],
            correct: 3
        },
        {
            id: 41,
            text: "In command syntax documentation, what do braces { } indicate?",
            options: ["An optional element in the command", "A required element that must be entered", "A keyword displayed in bold text", "An argument shown in italic text"],
            correct: 1
        },
        {
            id: 42,
            text: "Which element of communication serves as the media that provides the path for a message to travel?",
            options: ["Source", "Destination", "Encoding", "Channel"],
            correct: 3
        },
        {
            id: 43,
            text: "A network device receives data too quickly and signals the sender to slow down. Which protocol requirement does this represent?",
            options: ["Message encoding", "Message delivery options", "Flow control", "Response timeout"],
            correct: 2
        },
        {
            id: 44,
            text: "Which message delivery option sends data from one device to all devices on the network?",
            options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
            correct: 2
        },
        {
            id: 45,
            text: "Which message delivery option is described as 'one-to-many, typically not all'?",
            options: ["Unicast", "Broadcast", "Anycast", "Multicast"],
            correct: 3
        },
        {
            id: 46,
            text: "Which message delivery option is limited to IPv4 only?",
            options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
            correct: 2
        },
        {
            id: 47,
            text: "What type of protocol enables routers to exchange route information and select the best paths?",
            options: ["Network Communications protocols", "Service Discovery protocols", "Network Security protocols", "Routing protocols"],
            correct: 3
        },
        {
            id: 48,
            text: "Which protocol type is used for the automatic detection of devices or services on a network?",
            options: ["Routing protocols", "Service Discovery protocols", "Network Security protocols", "Network Communications protocols"],
            correct: 1
        },
        {
            id: 49,
            type: 'identification',
            text: "What term describes the process of converting information into another acceptable form for transmission?",
            answer: ["encoding"]
        },
        {
            id: 50,
            text: "What is a protocol suite?",
            options: ["A single protocol that handles all aspects of network communication", "A hardware device that manages multiple network protocols simultaneously", "A group of inter-related protocols necessary to perform a communication function", "A software application that converts between different protocol formats"],
            correct: 2
        },
        {
            id: 51,
            text: "Which of the following is a key reason open standards are important for network protocols?",
            options: ["They restrict competition to ensure consistent product quality", "They allow only certified vendors to develop compliant products", "They encourage interoperability, competition, and innovation", "They eliminate the need for proprietary networking hardware"],
            correct: 2
        },
        {
            id: 52,
            text: "At which layers does the TCP/IP suite operate?",
            options: ["Physical, data link, and network layers", "Application, transport, and internet layers, with network access for Ethernet and WLAN", "Session, presentation, and application layers only", "Transport, network, and data link layers"],
            correct: 1
        },
        {
            id: 53,
            text: "Why is the TCP/IP protocol suite considered a standard for the internet?",
            options: ["It is proprietary and tightly controlled by a single vendor", "It is an open standard that ensures interoperability", "It operates exclusively at the physical layer", "It was mandated by government regulation for all networks"],
            correct: 1
        },
        {
            id: 54,
            text: "Which of the following is NOT listed as a function of network protocols?",
            options: ["Addressing", "Reliability", "Load balancing", "Error detection"],
            correct: 2
        },
        {
            id: 55,
            text: "An intermediary network device receives a weakened data signal over a long cable run and restores it before forwarding. Which role of intermediary devices does this describe?",
            options: ["Maintaining information about pathways in the network", "Notifying other devices of errors and communication failures", "Regenerating and retransmitting data signals", "Providing physical connections for end devices"],
            correct: 2
        }
    ]
};