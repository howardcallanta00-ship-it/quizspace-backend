module.exports = {
    id: 'howard-networking-three',
    title: 'Networking 3',
    desc: 'IPv4/IPv6 addressing, subnetting, ICMP.',
    user: 'howard',
    questions: [
        {
            id: 1,
            text: "An IPv4 address is composed of how many total bits?",
            options: ["16", "64", "32", "128"],
            correct: 2
        },
        {
            id: 2,
            text: "Which component of an IPv4 address identifies the specific device on a network?",
            options: ["Network portion", "Subnet mask", "Prefix length", "Host portion"],
            correct: 3
        },
        {
            id: 3,
            type: 'identification',
            text: "What is the term for the number of bits set to 1 in a subnet mask, expressed using slash notation?",
            answer: ["prefix length", "prefix"]
        },
        {
            id: 4,
            text: "In a Logical AND operation, which combination of bits produces a result of 1?",
            options: ["1 AND 0", "0 AND 0", "1 AND 1", "0 AND 1"],
            correct: 2
        },
        {
            id: 5,
            text: "To find the network address from a host IP address, which operation is performed bit by bit against the subnet mask?",
            options: ["Logical OR", "Logical XOR", "Logical NOT", "Logical AND"],
            correct: 3
        },
        {
            id: 6,
            text: "In an IPv4 network, the broadcast address is characterized by which pattern in the host bits?",
            options: ["Alternating 1s and 0s", "All 0s", "All 1s", "A single 1 followed by all 0s"],
            correct: 2
        },
        {
            id: 7,
            text: "What pattern do the host bits follow in a network address?",
            options: ["All 1s", "All 0s", "All 0s except the last bit", "All 1s except the first bit"],
            correct: 1
        },
        {
            id: 8,
            text: "Which transmission type sends a packet to a single, specific destination IP address?",
            options: ["Broadcast", "Multicast", "Anycast", "Unicast"],
            correct: 3
        },
        {
            id: 9,
            text: "Which transmission type delivers a packet to all devices within a network segment?",
            options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
            correct: 2
        },
        {
            id: 10,
            text: "Multicast transmissions send packets to which type of destination?",
            options: ["A single host address", "A multicast address group", "All addresses in a subnet", "The default gateway only"],
            correct: 1
        },
        {
            id: 11,
            text: "Which of the following private IPv4 address ranges is associated with the /8 prefix?",
            options: ["192.168.0.0", "172.16.0.0", "10.0.0.0", "169.254.0.0"],
            correct: 2
        },
        {
            id: 12,
            text: "The private address range 172.16.0.0/12 spans up to which ending address?",
            options: ["172.255.255.255", "172.16.255.255", "172.31.255.255", "172.32.255.255"],
            correct: 2
        },
        {
            id: 13,
            text: "Which statement best describes public IPv4 addresses?",
            options: ["Used only within a single organization's internal network", "Globally routed between ISP routers", "Assigned automatically when no DHCP server is found", "Reserved for loopback testing"],
            correct: 1
        },
        {
            id: 14,
            text: "Which address block is reserved for loopback testing to verify that TCP/IP is operational?",
            options: ["169.254.0.0/16", "192.168.0.0/16", "127.0.0.0/8", "10.0.0.0/8"],
            correct: 2
        },
        {
            id: 15,
            text: "A device that cannot reach a DHCP server will self-assign an address from which range?",
            options: ["10.0.0.0/8", "127.0.0.0/8", "172.16.0.0/12", "169.254.0.0/16"],
            correct: 3
        },
        {
            id: 16,
            text: "According to legacy classful addressing, which class covers the range 128.0.0.0/16 through 191.255.0.0/16?",
            options: ["Class A", "Class C", "Class B", "Class D"],
            correct: 2
        },
        {
            id: 17,
            text: "Which legacy address class was designated for multicast use?",
            options: ["Class B", "Class E", "Class C", "Class D"],
            correct: 3
        },
        {
            id: 18,
            text: "Which device is described as the only one capable of stopping broadcast traffic from propagating?",
            options: ["Switch", "Hub", "Router", "Access point"],
            correct: 2
        },
        {
            id: 19,
            text: "What does a switch do with a broadcast frame it receives?",
            options: ["Drops it immediately", "Forwards it only to the destination MAC address", "Sends it out all interfaces except the one it was received on", "Stores it and waits for acknowledgment"],
            correct: 2
        },
        {
            id: 20,
            text: "What is the purpose of subnetting a network?",
            options: ["To increase the broadcast domain size", "To assign public addresses to private hosts", "To create smaller broadcast domains", "To eliminate the need for subnet masks"],
            correct: 2
        },
        {
            id: 21,
            text: "Which of the following is NOT listed as a reason for segmenting a network?",
            options: ["Reduces overall network traffic", "Improves performance", "Eliminates the need for routing protocols", "Segments by location, group, function, or device type"],
            correct: 2
        },
        {
            id: 22,
            text: "What entity manages and allocates blocks of IPv4 addresses to Regional Internet Registries?",
            options: ["IEEE", "IANA", "IETF", "ISP"],
            correct: 1
        },
        {
            id: 23,
            text: "How many Regional Internet Registries (RIRs) does IANA distribute address blocks to?",
            options: ["Three", "Four", "Six", "Five"],
            correct: 3
        },
        {
            id: 24,
            text: "What is the primary function of Network Address Translation (NAT)?",
            options: ["Converts subnet masks into prefix lengths", "Translates private IPv4 addresses into public IPv4 addresses", "Assigns loopback addresses to internal hosts", "Converts classful addresses to classless addresses"],
            correct: 1
        },
        {
            id: 25,
            text: "NAT is typically enabled on which network device?",
            options: ["Core switch", "DNS server", "Edge router", "Access layer hub"],
            correct: 2
        },
        {
            id: 26,
            type: 'identification',
            text: "What does VLSM stand for?",
            answer: ["variable length subnet masking", "variable length subnet mask"]
        },
        {
            id: 27,
            text: "What is the stated purpose of VLSM?",
            options: ["To simplify broadcast domain management", "To replace NAT in private networks", "To prevent address waste by enabling subnetting of a subnet", "To convert IPv4 addresses to IPv6 format"],
            correct: 2
        },
        {
            id: 28,
            text: "When implementing VLSM, which subnet should be addressed first?",
            options: ["The subnet with the fewest hosts", "The subnet closest to the router", "The subnet with the most hosts", "Any subnet in alphabetical order"],
            correct: 2
        },
        {
            id: 29,
            text: "IPv6 was developed primarily to address which limitation of IPv4?",
            options: ["Slow routing speeds", "Incompatibility with wireless networks", "Exhaustion of available addresses", "Lack of broadcast support"],
            correct: 2
        },
        {
            id: 30,
            text: "How many bits make up an IPv6 address?",
            options: ["32", "256", "64", "128"],
            correct: 3
        },
        {
            id: 31,
            text: "What is a 'hextet' in the context of IPv6?",
            options: ["A 32-bit segment of an IPv6 address", "An unofficial term for a 16-bit segment represented by four hex digits", "The official IETF name for an IPv6 octet", "A group of eight hexadecimal values"],
            correct: 1
        },
        {
            id: 32,
            text: "According to IPv6 representation Rule 1, what may be omitted from any hextet?",
            options: ["Trailing zeros", "The colon separator", "Leading zeros", "Repeated digits"],
            correct: 2
        },
        {
            id: 33,
            text: "In IPv6 notation, a double colon (::) may be used to replace which of the following?",
            options: ["Any single hextet containing mixed values", "A contiguous string of one or more all-zero hextets, used only once in an address", "Any two adjacent hextets regardless of their values", "The interface ID portion of the address only"],
            correct: 1
        },
        {
            id: 34,
            text: "Which IPv6 address type is functionally similar to a public IPv4 address in that it is globally unique and internet-routable?",
            options: ["Link-local Address", "Unique Local Address", "Global Unicast Address", "Anycast Address"],
            correct: 2
        },
        {
            id: 35,
            text: "Which IPv6 address type is required on every IPv6-enabled device and is used only for communication on the same local link?",
            options: ["Global Unicast Address", "Loopback Address", "Unique Local Address", "Link-local Address"],
            correct: 3
        },
        {
            id: 36,
            type: 'identification',
            text: "What is the IPv6 loopback address?",
            answer: ["::1/128", "::1"]
        },
        {
            id: 37,
            type: 'identification',
            text: "What is the IPv6 unspecified address?",
            answer: ["::/128", "::"]
        },
        {
            id: 38,
            text: "The Unique Local Address range in IPv6 spans from which prefix to which prefix?",
            options: ["fe80::/10 to febf::/10", "fc00::/7 to fdff::/7", "ff00::/8 to ffff::/8", "2000::/3 to 3fff::/3"],
            correct: 1
        },
        {
            id: 39,
            text: "Which IPv6 address type allows a packet to be routed to the nearest device sharing that address?",
            options: ["Multicast", "Unicast", "Broadcast", "Anycast"],
            correct: 3
        },
        {
            id: 40,
            text: "In an IPv6 Global Unicast Address, what is the name of the portion assigned by the ISP to the customer?",
            options: ["Interface ID", "Subnet ID", "Global Routing Prefix", "Hextet Block"],
            correct: 2
        },
        {
            id: 41,
            text: "Which portion of an IPv6 GUA sits between the Global Routing Prefix and the Interface ID?",
            options: ["Host segment", "Subnet ID", "Network prefix", "Link-local block"],
            correct: 1
        },
        {
            id: 42,
            text: "What is the recommended size of the Interface ID in an IPv6 GUA?",
            options: ["32 bits", "128 bits", "48 bits", "64 bits"],
            correct: 3
        },
        {
            id: 43,
            text: "Which GUA configuration method allows a device to configure its own address using ICMPv6 Router Advertisement messages without any DHCPv6 server?",
            options: ["Stateful DHCPv6", "EUI-64 manual assignment", "SLAAC", "SLAAC with Stateless DHCPv6"],
            correct: 2
        },
        {
            id: 44,
            text: "Which configuration method provides a GUA via SLAAC but uses a stateless DHCPv6 server to supply additional information such as DNS addresses?",
            options: ["SLAAC only", "Stateful DHCPv6", "SLAAC with Stateless DHCPv6", "NDP Router Advertisement only"],
            correct: 2
        },
        {
            id: 45,
            text: "Under Stateful DHCPv6, what information does the device receive from the server?",
            options: ["Only the prefix length", "GUA, prefix length, and DNS addresses", "Only the GUA and default gateway", "MAC address and subnet mask"],
            correct: 1
        },
        {
            id: 46,
            text: "In the EUI-64 process for generating an IPv6 Interface ID, what is inserted into the MAC address?",
            options: ["0000 in the first half", "ffff at the end of the address", "fffe in the middle of the 48-bit MAC address", "The subnet ID of the network"],
            correct: 2
        },
        {
            id: 47,
            text: "Besides EUI-64, what is the other method a device may use to generate its Interface ID?",
            options: ["Copying the last 64 bits of the subnet mask", "Using a randomly generated 64-bit number", "Deriving it from the IPv4 address", "Requesting it from a stateful DHCPv6 server"],
            correct: 1
        },
        {
            id: 48,
            text: "Which IPv6 multicast address represents the all-nodes multicast group?",
            options: ["ff02::2", "ff00::1", "ff02::1", "ff01::2"],
            correct: 2
        },
        {
            id: 49,
            text: "Which IPv6 multicast address is joined exclusively by IPv6 routers?",
            options: ["ff02::1", "ff02::2", "ff00::2", "ff01::1"],
            correct: 1
        },
        {
            id: 50,
            type: 'identification',
            text: "What is the prefix used for all assigned IPv6 multicast addresses?",
            answer: ["ff00::/8", "ff00::"]
        },
        {
            id: 51,
            text: "Which coexistence mechanism encapsulates an IPv6 packet inside an IPv4 packet for transport across an IPv4 network?",
            options: ["Dual stack", "NAT64", "Translation", "Tunneling"],
            correct: 3
        },
        {
            id: 52,
            text: "Which coexistence mechanism runs both IPv4 and IPv6 protocol stacks simultaneously on the same device?",
            options: ["Tunneling", "Translation", "NAT64", "Dual stack"],
            correct: 3
        },
        {
            id: 53,
            text: "NAT64 enables communication between which two types of devices?",
            options: ["IPv4-only and IPv4-only devices across different ISPs", "IPv6-enabled devices and IPv4-enabled devices", "Dual-stack devices and tunneling endpoints", "Link-local devices and global unicast devices"],
            correct: 1
        },
        {
            id: 54,
            text: "Which ICMP message type is used to test whether a host is reachable?",
            options: ["Time Exceeded", "Destination Unreachable", "Echo Request and Echo Reply", "Router Advertisement"],
            correct: 2
        },
        {
            id: 55,
            text: "What condition triggers an ICMP Time Exceeded message?",
            options: ["The subnet mask is misconfigured", "The TTL in IPv4 or Hop Limit in IPv6 reaches zero", "A duplicate IP address is detected on the network", "A packet exceeds the maximum transmission unit"],
            correct: 1
        },
        {
            id: 56,
            text: "Which NDP message is sent by hosts to discover IPv6 routers on the local link?",
            options: ["Neighbor Advertisement (NA)", "Neighbor Solicitation (NS)", "Router Solicitation (RS)", "Router Advertisement (RA)"],
            correct: 2
        },
        {
            id: 57,
            text: "Which NDP message is sent by routers to provide addressing information to hosts?",
            options: ["Router Solicitation (RS)", "Neighbor Solicitation (NS)", "Neighbor Advertisement (NA)", "Router Advertisement (RA)"],
            correct: 3
        },
        {
            id: 58,
            text: "Which NDP message is used for both address resolution and Duplicate Address Detection?",
            options: ["Router Advertisement (RA)", "Neighbor Solicitation (NS)", "Router Solicitation (RS)", "Neighbor Advertisement (NA)"],
            correct: 1
        },
        {
            id: 59,
            text: "What information does a Neighbor Advertisement (NA) message provide in response to a Neighbor Solicitation?",
            options: ["The IPv6 prefix and default gateway", "The DNS server address", "The MAC address of the target, or confirmation that an address is already in use", "The router's global unicast address"],
            correct: 2
        },
        {
            id: 60,
            text: "Which connectivity testing utility provides a list of intermediate hops between two hosts by using the Time Exceeded ICMP message?",
            options: ["Ping", "NSLookup", "Traceroute", "ARP"],
            correct: 2
        },
        {
            id: 61,
            text: "What specific metric does the Ping utility report when testing connectivity between two hosts?",
            options: ["Number of hops to the destination", "Round-trip time", "TTL remaining at the destination", "Packet size and fragmentation offset"],
            correct: 1
        },
        {
            id: 62,
            text: "A host has the IPv4 address 192.168.10.5 with a subnet mask of 255.255.255.0. Applying a logical AND, what is the resulting network address?",
            options: ["192.168.10.255", "192.168.0.0", "192.168.10.0", "255.255.255.5"],
            correct: 2
        }
    ]
};