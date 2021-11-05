# TCP/IP MODEL
TCP/IP has layered process similar to the OSI model. It is a more defined process, and it defines how a specific computer should be connected to the internet, and how you can transmit data between them. It is specifically designed as a model to offer highly reliable and end-to-end byte stream over an unreliable internetwork.

## How does TCP/IP work?
It uses client-server model of communication in which the client (user) is provided a service, like sending a webpage, by another computer (a server) in the network.

Collectively, the TCP/IP suite of protocols is classified as stateless, which means each client request is considered new because it is unrelated to previous requests. The transport layer is an exception because it’s stateful. It transmits a single message, and its connection remains in place until all the packets in a message have been received and reassembled at the destination.  

Compared to the 7 layered process of the OSI Model, the TCP/IP model has 4 layered processes.

## Here are the 4 layers of the TCP/IP model:
**1.  The application layer:** 

This is Responsible for how a data or information appears. It also provides applications with data exchange that are standardized. It makes use of protocols such as HTTP, FTP. This layer is a combination of the application, presentation and session layer in the OSI model.

**2.	The transport layer:** 

It is responsible for maintaining end-to-end communications across the network. It handles communications between hosts and provides flow control, multiplexing and reliability. The transport protocols include TCP and UDP. It is also equivalent to the transport layer in the OSI model.


**3.	The network layer:** 

This is also called the internet layer, it deals with packets and connects independent networks to transport the packets across network boundaries. The network layer protocols are IP and the ICMP, which is used for error reporting. This also performs the same functions as that of the network layer in the OSI Model.

**4.	The physical layer:** 

It consists of protocols that operate only to link the network component that interconnects nodes or hosts in the network. The protocols in this lowest layer include Ethernet for local area networks and ARP. It also consists of the media e.g. cable, fibre. It is also known as the network interface layer or data link layer. It is the combination of the physical layer and data link layer in the OSI model.
