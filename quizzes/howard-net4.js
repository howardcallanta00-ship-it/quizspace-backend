module.exports = {
    id: 'howard-networking-four',
    title: 'Networking 4',
    desc: 'Transport layer, TCP/UDP, Security',
    user: 'howard',
    questions: [
        {
            id: 1,
            text: "Which layer of the OSI model is responsible for logical communication between applications on different hosts?",
            options: ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"],
            correct: 2
        },
        {
            id: 2,
            text: "What is the primary purpose of segmentation at the Transport Layer?",
            options: ["To encrypt data before transmission", "To divide data into smaller pieces for transport by lower network layers", "To assign IP addresses to devices", "To compress data for faster delivery"],
            correct: 1
        },
        {
            id: 3,
            text: "Which of the following is NOT listed as a Transport Layer responsibility?",
            options: ["Tracking individual conversations", "Adding header information", "Assigning MAC addresses", "Reassembling segments"],
            correct: 2
        },
        {
            id: 4,
            text: "How does multiplexing benefit network communication?",
            options: ["It encrypts multiple data streams simultaneously", "It allows different communication conversations to be interleaved on the same network", "It increases the physical bandwidth of a network link", "It assigns unique IP addresses to each conversation"],
            correct: 1
        },
        {
            id: 5,
            text: "Which transport protocol provides reliability and flow control?",
            options: ["UDP", "IP", "ICMP", "TCP"],
            correct: 3
        },
        {
            id: 6,
            text: "Which of the following best describes UDP's delivery behavior?",
            options: ["It guarantees delivery through acknowledgment", "It sequences all packets before delivery", "It provides best-effort delivery with no acknowledgment", "It retransmits lost segments automatically"],
            correct: 2
        },
        {
            id: 7,
            text: "When UDP receives data segments out of order, how does it handle them?",
            options: ["It reorders them using sequence numbers", "It requests retransmission of missing segments", "It reconstructs data in the order it is received", "It buffers them until all segments arrive"],
            correct: 2
        },
        {
            id: 8,
            text: "Which TCP operation ensures that data arriving out of order is properly handled?",
            options: ["Flow control", "Sequencing of data", "Checksum verification", "Port assignment"],
            correct: 1
        },
        {
            id: 9,
            text: "A TCP sender transmits segments but does not receive acknowledgment. What does TCP do next?",
            options: ["Drops the unacknowledged data permanently", "Retransmits the unacknowledged data after a timeout period", "Sends a RST flag to reset the connection", "Switches to UDP for the remainder of the session"],
            correct: 1
        },
        {
            id: 10,
            text: "What does it mean for TCP to be described as a 'stateful protocol'?",
            options: ["It assigns static IP addresses to hosts", "It keeps track of the state of the communication session", "It stores all transmitted data in a server-side database", "It maintains a record of all port numbers used"],
            correct: 1
        },
        {
            id: 11,
            text: "What distinguishes a connection-oriented protocol from a connectionless one?",
            options: ["Connection-oriented protocols use fewer header fields", "Connection-oriented protocols negotiate and establish a session before forwarding traffic", "Connectionless protocols provide more reliable delivery", "Connection-oriented protocols do not use port numbers"],
            correct: 1
        },
        {
            id: 12,
            text: "Which TCP header field is used for data reassembly?",
            options: ["Window size", "Checksum", "Sequence Number", "Control bits"],
            correct: 2
        },
        {
            id: 13,
            text: "What does the Acknowledgment Number field in a TCP header indicate?",
            options: ["The total length of the TCP segment", "The port number of the destination application", "The data received and the next byte expected", "The number of retransmissions attempted"],
            correct: 2
        },
        {
            id: 14,
            text: "How many bits make up the TCP Window Size field?",
            options: ["4 bits", "32 bits", "8 bits", "16 bits"],
            correct: 3
        },
        {
            id: 15,
            text: "What is the purpose of the TCP Header Length field?",
            options: ["Specifies the total size of the payload", "Indicates the length of the TCP segment header", "Records the number of segments in a conversation", "Defines the maximum window size allowed"],
            correct: 1
        },
        {
            id: 16,
            text: "Which TCP header field is used for error checking?",
            options: ["Acknowledgment Number", "Control bits", "Checksum", "Header Length"],
            correct: 2
        },
        {
            id: 17,
            text: "How many bytes does a UDP header require?",
            options: ["16 bytes", "20 bytes", "8 bytes", "4 bytes"],
            correct: 2
        },
        {
            id: 18,
            text: "Which of the following is NOT a field in the UDP header?",
            options: ["Source Port", "Sequence Number", "Length", "Checksum"],
            correct: 1
        },
        {
            id: 19,
            text: "Which type of application is most appropriately served by UDP rather than TCP?",
            options: ["File download requiring data integrity", "Email transmission requiring acknowledgment", "Live video streaming and VoIP", "Secure web browsing"],
            correct: 2
        },
        {
            id: 20,
            text: "DNS uses UDP because it falls into which category of applications?",
            options: ["Applications requiring guaranteed delivery", "Simple request and reply applications", "Applications requiring session establishment", "Applications with large data payloads"],
            correct: 1
        },
        {
            id: 21,
            text: "What is a socket, as defined in the context of networking?",
            options: ["A physical port on a network switch", "The combination of an IP address and a port number", "A dedicated channel between two routers", "The unique identifier of a network interface card"],
            correct: 1
        },
        {
            id: 22,
            text: "Which port number range is reserved for well-known services?",
            options: ["1,024 to 49,151", "49,152 to 65,535", "0 to 1,023", "1,000 to 5,000"],
            correct: 2
        },
        {
            id: 23,
            text: "A system administrator notices a connection using port 50,000. Which category does this port fall into?",
            options: ["Well-known port", "Registered port", "Private/Dynamic port", "Reserved IANA port"],
            correct: 2
        },
        {
            id: 24,
            text: "Who assigns Registered Ports to specific processes?",
            options: ["IEEE", "ISO", "IANA", "ITU"],
            correct: 2
        },
        {
            id: 25,
            text: "During the TCP Three-Way Handshake, what occurs in Step 2?",
            options: ["The client sends a SYN to the server", "The server acknowledges and requests a server-to-client session", "The client acknowledges the server-to-client session", "The server sends data to the client"],
            correct: 1
        },
        {
            id: 26,
            text: "Which TCP control flag is used to synchronize sequence numbers?",
            options: ["ACK", "RST", "FIN", "SYN"],
            correct: 3
        },
        {
            id: 27,
            text: "A TCP segment is received indicating there is no more data from the sender. Which flag was set?",
            options: ["PSH", "URG", "FIN", "RST"],
            correct: 2
        },
        {
            id: 28,
            text: "Which flag would a device set to abruptly terminate a TCP connection?",
            options: ["FIN", "SYN", "ACK", "RST"],
            correct: 3
        },
        {
            id: 29,
            text: "What is the role of the Application Layer in the OSI model?",
            options: ["Routes packets between networks", "Provides the interface between applications and the underlying network", "Manages physical transmission of bits", "Handles encryption and decryption exclusively"],
            correct: 1
        },
        {
            id: 30,
            text: "Which of the following is a function of the Presentation Layer?",
            options: ["Establishing and maintaining dialogs", "Routing packets to their destination", "Compressing and encrypting data", "Tracking communication sessions"],
            correct: 2
        },
        {
            id: 31,
            text: "Which layer handles the creation and maintenance of dialogs between communicating systems?",
            options: ["Transport Layer", "Application Layer", "Presentation Layer", "Session Layer"],
            correct: 3
        },
        {
            id: 32,
            text: "Which DNS record type maps a hostname to an IPv6 address?",
            options: ["A", "MX", "NS", "AAAA"],
            correct: 3
        },
        {
            id: 33,
            text: "What does a DNS MX record specify?",
            options: ["An end device's IPv4 address", "The authoritative name server", "A mail exchange record", "An end device's IPv6 address"],
            correct: 2
        },
        {
            id: 34,
            text: "During the DHCP process, which message does a client broadcast first to locate available servers?",
            options: ["DHCPOFFER", "DHCPACK", "DHCPREQUEST", "DHCPDISCOVER"],
            correct: 3
        },
        {
            id: 35,
            text: "In the DHCP process, what is the purpose of the DHCPACK message?",
            options: ["The client requests an IP address", "The server offers a lease to the client", "The server finalizes and acknowledges the lease", "The client identifies its preferred server"],
            correct: 2
        },
        {
            id: 36,
            text: "Which FTP port is used for control traffic such as commands and replies?",
            options: ["Port 20", "Port 23", "Port 80", "Port 21"],
            correct: 3
        },
        {
            id: 37,
            text: "What distinguishes FTP Port 20 from Port 21?",
            options: ["Port 20 handles authentication; Port 21 handles file browsing", "Port 20 is used for actual data transfer; Port 21 is for control traffic", "Port 20 is encrypted; Port 21 is not", "Port 20 handles directory listing; Port 21 handles uploads only"],
            correct: 1
        },
        {
            id: 38,
            text: "Which of the following best describes the Server Message Block (SMB) protocol?",
            options: ["A connectionless protocol for quick file lookups", "A client/server request-response protocol where clients establish long-term connections", "A protocol exclusively used for email retrieval", "A protocol that assigns IP addresses dynamically"],
            correct: 1
        },
        {
            id: 39,
            text: "Which of the following is NOT listed as one of the four types of threats after a threat actor gains network access?",
            options: ["Information Theft", "Identity Theft", "Hardware Malfunction", "Disruption of Service"],
            correct: 2
        },
        {
            id: 40,
            text: "A company uses default router passwords and has misconfigured internet services. Which vulnerability category does this represent?",
            options: ["Technological Vulnerability", "Physical Vulnerability", "Security Policy Vulnerability", "Configuration Vulnerability"],
            correct: 3
        },
        {
            id: 41,
            text: "Which of the following is an example of a Technological Vulnerability?",
            options: ["Easily guessed passwords on system accounts", "Lack of a written security policy", "TCP/IP protocol weaknesses", "Unsecured user accounts"],
            correct: 2
        },
        {
            id: 42,
            text: "Voltage spikes and brownouts are examples of which class of physical threat?",
            options: ["Hardware threats", "Electrical threats", "Environmental threats", "Maintenance threats"],
            correct: 1
        },
        {
            id: 43,
            text: "A data center experiences extreme humidity levels damaging its equipment. Which physical threat class does this represent?",
            options: ["Maintenance threats", "Electrical threats", "Hardware threats", "Environmental threats"],
            correct: 3
        },
        {
            id: 44,
            text: "Poor handling of electrical components causing electrostatic discharge falls under which physical threat class?",
            options: ["Hardware threats", "Environmental threats", "Maintenance threats", "Electrical threats"],
            correct: 2
        },
        {
            id: 45,
            text: "Which type of malware replicates by inserting copies of itself into other programs?",
            options: ["Trojan Horse", "Worm", "Virus", "Spyware"],
            correct: 2
        },
        {
            id: 46,
            text: "What distinguishes a worm from a virus in terms of propagation?",
            options: ["Worms require a host program; viruses do not", "Viruses spread through user interaction; worms replicate independently", "Worms only affect email attachments; viruses affect executables", "Viruses are standalone; worms require a host file"],
            correct: 1
        },
        {
            id: 47,
            text: "A user opens an email attachment that appears legitimate but installs malicious software. The malware does not self-replicate. Which type is this?",
            options: ["Virus", "Worm", "Trojan Horse", "Rootkit"],
            correct: 2
        },
        {
            id: 48,
            text: "Which network attack category focuses on the discovery and mapping of systems and vulnerabilities?",
            options: ["Access attacks", "Denial of Service attacks", "Reconnaissance attacks", "Malware attacks"],
            correct: 2
        },
        {
            id: 49,
            text: "A threat actor uses brute force methods to gain entry to a system. Which type of access attack is this?",
            options: ["Port redirection", "Trust exploitation", "Man-in-the-middle", "Password attack"],
            correct: 3
        },
        {
            id: 50,
            text: "In a man-in-the-middle attack, where is the threat actor positioned?",
            options: ["Outside the network perimeter monitoring traffic remotely", "Between two legitimate communicating entities", "Inside a server's operating system", "On the same subnet as the DNS server only"],
            correct: 1
        },
        {
            id: 51,
            text: "What is the key difference between a DoS attack and a DDoS attack?",
            options: ["DoS targets servers; DDoS targets routers only", "DDoS originates from multiple coordinated sources; DoS does not", "DoS uses encrypted traffic; DDoS uses plaintext", "DDoS only affects wireless networks"],
            correct: 1
        },
        {
            id: 52,
            text: "What is a botnet in the context of DDoS attacks?",
            options: ["A group of firewalls defending against attacks", "A set of IPS sensors monitoring network traffic", "A network of infected hosts used to launch coordinated attacks", "A cluster of DNS servers responding to requests"],
            correct: 2
        },
        {
            id: 53,
            text: "Which component is NOT listed as part of the Defense-in-Depth approach?",
            options: ["VPN", "IPS", "AAA Server", "NAT Device"],
            correct: 3
        },
        {
            id: 54,
            text: "Which backup consideration specifies that copies should be moved to an approved offsite location?",
            options: ["Frequency", "Validation", "Security", "Storage"],
            correct: 3
        },
        {
            id: 55,
            text: "In the AAA framework, what does 'Accounting' refer to?",
            options: ["Verifying who is allowed to access the network", "Defining what actions a user is permitted to perform", "Making a record of what actions were performed", "Encrypting credentials before transmission"],
            correct: 2
        },
        {
            id: 56,
            text: "Which firewall type filters traffic based on specific URLs or keywords?",
            options: ["Packet filtering", "Stateful packet inspection", "Application filtering", "URL filtering"],
            correct: 3
        },
        {
            id: 57,
            text: "How does Stateful Packet Inspection (SPI) determine whether to allow incoming packets?",
            options: ["By checking whether packets match a list of approved MAC addresses", "By verifying that incoming packets are legitimate responses to internal requests", "By filtering based on TCP port numbers", "By inspecting payload content for malware signatures"],
            correct: 1
        },
        {
            id: 58,
            text: "According to the document, what is the minimum recommended password length?",
            options: ["Six characters", "Ten characters", "Eight characters", "Twelve characters"],
            correct: 2
        },
        {
            id: 59,
            text: "What does the Cisco IOS command 'service password-encryption' accomplish?",
            options: ["Sets a minimum length for all passwords", "Blocks repeated failed login attempts", "Encrypts plaintext passwords", "Disables access after a period of inactivity"],
            correct: 2
        },
        {
            id: 60,
            text: "Which Cisco IOS command is used to deter brute-force login attacks?",
            options: ["exec-timeout", "security passwords min-length", "service password-encryption", "login block-for"],
            correct: 3
        },
        {
            id: 61,
            text: "What does the 'exec-timeout' command do on a Cisco device?",
            options: ["Sets the maximum number of login attempts", "Encrypts session credentials", "Disables inactive privileged EXEC mode access", "Blocks unauthorized port access"],
            correct: 2
        },
        {
            id: 62,
            text: "Which factor is NOT listed as a device selection consideration for small network design?",
            options: ["Cost", "Vendor reputation", "Expandability", "Operating system features and services"],
            correct: 1
        },
        {
            id: 63,
            text: "How is redundancy achieved in small network design according to the document?",
            options: ["By using stronger encryption algorithms", "By installing duplicate equipment or duplicate network links", "By increasing the number of registered port numbers", "By adding more authentication servers"],
            correct: 1
        },
        {
            id: 64,
            text: "Which protocol is used to send email?",
            options: ["IMAP", "POP3", "FTP", "SMTP"],
            correct: 3
        },
        {
            id: 65,
            text: "A network administrator needs to retrieve email from a server. Which two protocols could be used?",
            options: ["SMTP and FTP", "POP3 or IMAP", "DNS and DHCP", "SSH and Telnet"],
            correct: 1
        },
        {
            id: 66,
            text: "Which protocol provides encrypted remote access to a device, as opposed to its unencrypted counterpart?",
            options: ["Telnet", "HTTP", "SSH", "FTP"],
            correct: 2
        },
        {
            id: 67,
            text: "When using Cisco IOS ping, what does a period (.) in the output indicate?",
            options: ["Successful receipt of an echo reply", "The router responded with a destination unreachable error", "Time expired waiting for an echo reply", "The packet was dropped by a firewall"],
            correct: 2
        },
        {
            id: 68,
            text: "What does an exclamation mark (!) in Cisco IOS ping output confirm?",
            options: ["A Layer 2 address resolution error", "Successful Layer 3 connectivity via echo reply", "A routing table lookup failure", "A duplicate packet was detected"],
            correct: 1
        },
        {
            id: 69,
            text: "Which Cisco show command provides a summary of key information for all network interfaces?",
            options: ["show running-config", "show cdp neighbors", "show ip route", "show ip interface brief"],
            correct: 3
        },
        {
            id: 70,
            text: "What information does the 'show cdp neighbors' command provide?",
            options: ["Current active routing protocols", "Interface error rates and status", "Identifiers, addresses, port identifiers, capabilities, and platform of neighbor devices", "A summary of all ACL entries applied to interfaces"],
            correct: 2
        }
    ]
};