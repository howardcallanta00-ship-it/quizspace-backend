module.exports = {
    id: 'howard-networking-two',
    title: 'Networking 2',
    desc: 'Physical layer, Data Link layer, Ethernet, IP, routing',
    user: 'howard',
    questions: [
        {
            id: 1,
            text: "What is the primary role of the Physical Layer in network communication?",
            options: ["Assigns IP addresses to network devices", "Encodes frames as signals and transports bits across network media", "Manages logical connections between applications", "Handles error correction for data packets"],
            correct: 1
        },
        {
            id: 2,
            text: "Which of the following is NOT one of the three functional areas addressed by Physical Layer standards?",
            options: ["Physical Components", "Encoding", "Routing", "Signaling"],
            correct: 2
        },
        {
            id: 3,
            text: "A network engineer wants to measure how much usable data was transferred over a connection after accounting for protocol overhead. Which metric should they use?",
            options: ["Bandwidth", "Throughput", "Latency", "Goodput"],
            correct: 3
        },
        {
            id: 4,
            text: "Which formula correctly represents Goodput?",
            options: ["Goodput = Bandwidth − Latency", "Goodput = Throughput + Traffic Overhead", "Goodput = Throughput − Traffic Overhead", "Goodput = Bandwidth × Throughput"],
            correct: 2
        },
        {
            id: 5,
            text: "Which organizations are responsible for governing Physical Layer standards?",
            options: ["IETF, W3C, ICANN, and OASIS", "ISO, EIA/TIA, ITU-T, ANSI, and IEEE", "IEEE, IANA, RFC, and ISO", "ANSI, W3C, ITU-T, and ICANN"],
            correct: 1
        },
        {
            id: 6,
            text: "What distinguishes Shielded Twisted Pair (STP) from Unshielded Twisted Pair (UTP)?",
            options: ["STP uses fiber optic strands instead of copper wires", "STP has braided or foil shields for better noise protection", "STP supports only half-duplex communication", "STP uses a single conductor rather than four wire pairs"],
            correct: 1
        },
        {
            id: 7,
            text: "Which copper cabling type consists of a copper conductor, plastic insulation, woven copper braid or foil, and an outer jacket?",
            options: ["UTP", "STP", "Coaxial Cable", "Fiber Optic"],
            correct: 2
        },
        {
            id: 8,
            text: "What are the two main limitations of copper cabling?",
            options: ["High cost and low flexibility", "Attenuation and interference", "Low bandwidth and high latency", "Incompatibility with RJ-45 connectors"],
            correct: 1
        },
        {
            id: 9,
            text: "A technician needs to connect two switches directly to each other using copper cabling. Which wiring standard should be used?",
            options: ["Ethernet Straight-through", "Rollover", "Ethernet Crossover", "T568B on both ends"],
            correct: 2
        },
        {
            id: 10,
            text: "Which UTP wiring standard is Cisco proprietary and used to connect a host's serial port to a router or switch console port?",
            options: ["Ethernet Straight-through", "Ethernet Crossover", "T568A", "Rollover"],
            correct: 3
        },
        {
            id: 11,
            text: "What is the maximum distance that Multimode Fiber (MMF) supports when running at 10 Gbps?",
            options: ["100 meters", "275 meters", "550 meters", "1000 meters"],
            correct: 2
        },
        {
            id: 12,
            text: "What light source do Single-Mode Fiber cables use?",
            options: ["LEDs", "Lasers", "Infrared diodes", "Microwave emitters"],
            correct: 1
        },
        {
            id: 13,
            text: "A technician picks up a fiber optic cable with an orange jacket. What type of fiber is this most likely?",
            options: ["Single-Mode Fiber", "Shielded Twisted Pair", "Multimode Fiber", "Coaxial Cable"],
            correct: 2
        },
        {
            id: 14,
            text: "Which wireless standard is specifically designed for low data-rate, low power IoT applications?",
            options: ["Wi-Fi (IEEE 802.11)", "Bluetooth (IEEE 802.15)", "WiMAX (IEEE 802.16)", "Zigbee (IEEE 802.15.4)"],
            correct: 3
        },
        {
            id: 15,
            text: "Which wireless standard provides broadband wireless access?",
            options: ["Zigbee (IEEE 802.15.4)", "WiMAX (IEEE 802.16)", "Wi-Fi (IEEE 802.11)", "Bluetooth (IEEE 802.15)"],
            correct: 1
        },
        {
            id: 16,
            text: "In the binary numbering system, how many bits make up one octet?",
            options: ["4", "16", "32", "8"],
            correct: 3
        },
        {
            id: 17,
            text: "What is a hextet in the context of IPv6 addressing?",
            options: ["A group of 8 hexadecimal characters representing 32 bits", "A group of 4 hexadecimal characters representing 16 bits", "A group of 6 hexadecimal characters representing 24 bits", "A group of 2 hexadecimal characters representing 8 bits"],
            correct: 1
        },
        {
            id: 18,
            text: "Which sublayer of the Data Link Layer is responsible for communicating between networking software and hardware?",
            options: ["Media Access Control (MAC)", "Physical Coding Sublayer (PCS)", "Logical Link Control (LLC)", "Network Interface Control (NIC)"],
            correct: 2
        },
        {
            id: 19,
            text: "Which topology type is NOT listed among the standard LAN topologies?",
            options: ["Star", "Ring", "Bus", "Mesh"],
            correct: 3
        },
        {
            id: 20,
            text: "What access control method does CSMA/CD apply to?",
            options: ["Token Ring", "WLANs", "Legacy Ethernet", "Fiber Optic networks"],
            correct: 2
        },
        {
            id: 21,
            text: "A wireless network allows only one device to transmit at a time. Which duplex mode does this describe?",
            options: ["Full-duplex", "Half-duplex", "Auto-duplex", "Controlled-duplex"],
            correct: 1
        },
        {
            id: 22,
            text: "Which of the following is NOT listed as a field in a Data Link Frame?",
            options: ["Frame Start and Stop", "Error Detection", "TTL (Time to Live)", "Control"],
            correct: 2
        },
        {
            id: 23,
            text: "How many hexadecimal digits make up a MAC address?",
            options: ["6", "8", "16", "12"],
            correct: 3
        },
        {
            id: 24,
            type: 'identification',
            text: "What is the broadcast MAC address used to send a frame to all devices on a local network?",
            answer: ["ff-ff-ff-ff-ff-ff", "ffffffffffff", "FF:FF:FF:FF:FF:FF"]
        },
        {
            id: 25,
            text: "A switch receives a frame destined for a MAC address not in its MAC address table. What does the switch do?",
            options: ["Drops the frame and sends an error notification", "Forwards the frame only to the default gateway", "Floods the frame out all ports except the incoming one", "Stores the frame until the address is learned"],
            correct: 2
        },
        {
            id: 26,
            text: "When a switch receives a frame, what does it do with the source MAC address?",
            options: ["Ignores it and only processes the destination address", "Adds it along with the incoming port number to its MAC address table if not already present", "Forwards it to the router for ARP resolution", "Uses it to determine the VLAN assignment"],
            correct: 1
        },
        {
            id: 27,
            text: "Which switch forwarding method checks for errors using a CRC before forwarding a frame?",
            options: ["Cut-through switching", "Port-based switching", "Store-and-forward switching", "Shared Memory switching"],
            correct: 2
        },
        {
            id: 28,
            text: "What is the key advantage of cut-through switching compared to store-and-forward switching?",
            options: ["It performs full error checking before forwarding", "It supports higher bandwidth on all ports", "It results in lower latency", "It uses shared memory buffering"],
            correct: 2
        },
        {
            id: 29,
            text: "What does the Auto-MDIX feature on a switch do?",
            options: ["Assigns IP addresses automatically to switch ports", "Automatically detects and configures the required cable type for an interface", "Encrypts traffic between switch ports", "Balances traffic load across multiple uplinks"],
            correct: 1
        },
        {
            id: 30,
            text: "Which characteristic of IP means it does not establish a connection with the destination before sending a packet?",
            options: ["Best Effort", "Media Independent", "Connectionless", "Fragmentation"],
            correct: 2
        },
        {
            id: 31,
            text: "Which IP characteristic means delivery of a packet is not guaranteed?",
            options: ["Connectionless", "Media Independent", "Fragmentation", "Best Effort"],
            correct: 3
        },
        {
            id: 32,
            type: 'identification',
            text: "What IPv4 loopback address does a host use to send traffic to itself?",
            answer: ["127.0.0.1"]
        },
        {
            id: 33,
            text: "Which type of route in a router's routing table is automatically added when an interface is active and has an address configured?",
            options: ["Default Route", "Static Route", "Directly Connected", "Dynamic Route"],
            correct: 2
        },
        {
            id: 34,
            text: "What happens when a packet's destination does not match any specific entry in a router's routing table?",
            options: ["The packet is dropped immediately", "The packet is sent back to the source", "The packet is forwarded according to the default route", "The router requests a new ARP entry"],
            correct: 2
        },
        {
            id: 35,
            text: "What is the MTU in the context of the Network Layer?",
            options: ["The minimum size of a transport layer segment", "The maximum size of the PDU that the network layer can pass onwards", "The maximum number of hops a packet can travel", "The minimum bandwidth required for a connection"],
            correct: 1
        },
        {
            id: 36,
            text: "What is one major limitation of IPv4 that IPv6 is designed to address?",
            options: ["IPv4 does not support wireless networks", "IPv4 addresses are 64 bits, causing routing inefficiencies", "IPv4 is experiencing address depletion", "IPv4 cannot be used with Ethernet"],
            correct: 2
        },
        {
            id: 37,
            text: "How large is an IPv6 address in bits?",
            options: ["32", "64", "128", "256"],
            correct: 2
        },
        {
            id: 38,
            text: "What is a key structural difference between the IPv6 header and the IPv4 header?",
            options: ["The IPv6 header includes a Fragment Offset field", "The IPv6 header is fixed at 40 bytes and removed fields like Fragment Offset and Header Checksum", "The IPv6 header is variable in length depending on options", "The IPv6 header includes a TTL field identical to IPv4"],
            correct: 1
        },
        {
            id: 39,
            text: "Does IPv6 perform packet fragmentation?",
            options: ["Yes, at every router along the path", "Yes, but only at the source device", "No, IPv6 does not fragment packets", "Only when the packet exceeds 1500 bytes"],
            correct: 2
        },
        {
            id: 40,
            text: "What protocol does IPv4 use to associate an IP address with a MAC address?",
            options: ["ICMP", "DNS", "ARP", "DHCP"],
            correct: 2
        },
        {
            id: 41,
            text: "A device needs to send a frame to a destination on a remote network. Whose MAC address is used as the destination in the frame?",
            options: ["The destination host's MAC address", "The DNS server's MAC address", "The default gateway's MAC address", "The source device's own MAC address"],
            correct: 2
        },
        {
            id: 42,
            text: "What type of attack involves a threat actor sending spoofed ARP replies to poison the ARP cache?",
            options: ["MAC Flooding", "ARP Spoofing", "IP Spoofing", "VLAN Hopping"],
            correct: 1
        },
        {
            id: 43,
            type: 'identification',
            text: "Which command displays the ARP table on a Windows PC?",
            answer: ["arp -a", "arp –a"]
        },
        {
            id: 44,
            type: 'identification',
            text: "Which command displays the ARP table on a Cisco router?",
            answer: ["show ip arp"]
        },
        {
            id: 45,
            text: "Which ICMPv6 message types are used for device-to-device address resolution in IPv6 Neighbor Discovery?",
            options: ["Router Solicitation and Router Advertisement", "Echo Request and Echo Reply", "Neighbor Solicitation and Neighbor Advertisement", "Redirect and Destination Unreachable"],
            correct: 2
        },
        {
            id: 46,
            text: "Which IPv6 Neighbor Discovery message types are used for router discovery between devices and routers?",
            options: ["Neighbor Solicitation and Neighbor Advertisement", "Router Solicitation and Router Advertisement", "ARP Request and ARP Reply", "Echo Request and Router Advertisement"],
            correct: 1
        },
        {
            id: 47,
            type: 'identification',
            text: "What command must be issued to activate a router interface after assigning an IP address?",
            answer: ["no shutdown"]
        },
        {
            id: 48,
            text: "For a host to communicate with its default gateway, what must be true about their IP addresses?",
            options: ["They must belong to different subnets", "They must use the same MAC address prefix", "They must be on the same network", "The gateway must always have a lower IP address than the host"],
            correct: 2
        },
        {
            id: 49,
            type: 'identification',
            text: "What command configures a switch's default gateway so it can be managed from a remote network?",
            answer: ["ip default-gateway"]
        },
        {
            id: 50,
            text: "Which command displays a summary of all interfaces, their IP addresses, and their current status on a Cisco router?",
            options: ["show interfaces", "show ip route", "show ip interface brief", "show running-config"],
            correct: 2
        }
    ]
};