## TCP/IP MODEL

TCP/IP stands for Transmission Control Protocol/Internet Protocol and is a suite of communication protocols used to interconnect network devices on the internet. TCP defines how applications can create channels of communication across a network. And also, the IP defines how to address and route each packet to make sure it reaches the right destination. TCP/IP specifies how data is exchanged over the internet by providing end-to-end communications that identify how it should be broken into packets, addressed, transmitted, routed and received at the destination.
TCP/IP uses the client-server model of communication in which a user or machine (a client) is provided a service, like sending a webpage, by another computer (a server) in the network.

# HOW THE TCP/IP WORK

Collectively, the TCP/IP suite of protocols is classified as stateless, which means each client request is considered new because it is unrelated to previous requests. Being stateless frees up network paths so they can be used continuously. TCP/IP uses the client-server model of communication in which a user or machine (a client) is provided a service, like sending a webpage, by another computer (a server) in the network. TCP/IP uses the client-server model of communication in which a user or machine (a client) is provided a service, like sending a webpage, by another computer (a server) in the network.


TCP/IP and OSI models are the most widely used communication networking protocols. The main similarity is in the way they are constructed as both use layers, although TCP/IP consists of just four layers, while the OSI model consists of the following seven layers.

# THE FOUR LAYERS OF THE TCP/IP MODEL

* Application layer
* Transport layer
* Network layer
* Physical layer



One of the TCP/IP layered process similar to the OSI model is the Application layer. The Application layer of the TCP/IP model performs the same tasks in the upper layer of the OSI model, which are; Application, Presentation and the Session layers. Although those tasks may vary depending on the data received.

# APPLICATION LAYER
The application layer is the highest abstraction layer of the TCP/IP model that provides the interfaces and protocols needed by the users.This layer performs the functions of top three layers of the OSI model: Application, Presentation and Session Layer. It is responsible for node-to-node communication and controls user-interface specifications. Some of the protocols present in this layer are: HTTP, HTTPS, FTP(File Transfer Protocol), TFTP(Trivial File Transfer Protocol)Telnet, SSH, SMTP(Simple Mail Transfer Protocol), SNMP(Simple Network Management Protocol), NTP, DNS(Domain Naming System,DHCP(Dynamic Host Configuration Protocol), NFS, X Window.

* HTTP and HTTPS: HTTP stands for Hypertext transfer protocol. It is used by the World Wide Web to manage communications between web browsers and servers. HTTPS stands for HTTP-Secure. It is a combination of HTTP with SSL(Secure Socket Layer).It is efficient in cases where the browser need to fill out forms, sign in, authenticate and carry out bank transactions.

* SSH: SSH stands for Secure Shell. It is a terminal emulations software similar to Telnet. The reason SSH is more preferred is because of its ability to maintain the encrypted connection. It sets up a secure session over a TCP/IP connection.

* NTP: NTP stands for Network Time Protocol. It is used to synchronize the clocks on our computer to one standard time source. It is very useful in situations like bank transactions. Assume the following situation without the presence of NTP. Suppose you carry out a transaction, where your computer reads the time at 2:30 PM while the server records it at 2:28 PM. The server can crash very badly if it’s out of sync.

# FUNCTIONS OF THE APPLICATION LAYER
* It facilitates the user to use the services of the network.
* It is used to develop network-based applications.
* It is also concerned with error handling and recovery of the message as a whole.
* It provides user services like user login, naming network devices, formatting messages, and e-mails, transfer of files  etc.
