# Describe any layered process you are familiar with similar to the OSI model

## Transmission Control Protocol and the Internet Protocol Model (TCI/IP)

The TCI/IP Model helps you to determine how a specific computer should be connected to the internet and how data should be transmitted between them. It helps to create a virtual network when multiple computer networks are connected together. The purpose of TCP/IP model is to allow communication over large distances.

**TCP Characteristics**:

- Support for a flexible TCP/IP architecture
- Adding more system to a network is easy.
- In TCP IP protocols suite, the network remains intact until the source, and destination machines were functioning properly.
- TCP is a connection-oriented protocol.
- TCP offers reliability and ensures that data which arrives out of sequence should put back into order.
- TCP allows you to implement flow control, so sender never overpowers a receiver with data.

### Four Layers of TCP/IP model

TCP/IP is a layered server architecture system in which each layer is defined according to a specific function to perform. The functionality of the TCP IP model is divided into four layers, and each includes specific protocols. All these four TCP IP layers work collaboratively to transmit the data from one layer to another. The four layers include:

- Application Layer
- Transport Layer
- Internet Layer
- Network Interface

![TCP/IP](Images\tcp_1.jpg)

#### Application Layer

Application layer interacts with an application program, which is the highest level of OSI model. Application layer interacts with software applications to implement a communicating component. The interpretation of data by the application program is always outside the scope of the OSI model. Example of the application layer is an application such as file transfer, email, remote login, etc.

Application layer helps you to identify communication partners, determining resource availability, and synchronizing communication. It allows users to log on to a remote host. This layer provides various e-mail services and offers distributed database sources and access for global information about various objects and services.

#### Transport Layer

Transport layer builds on the network layer in order to provide data transport from a process on a source system machine to a process on a destination system. It is hosted using single or multiple networks, and also maintains the quality of service functions.

It divides the message received from the session layer into segments and numbers them to make a sequence. Transport layer makes sure that the message is delivered to the correct process on the destination machine. It also makes sure that the entire message arrives without any error else it should be retransmitted.

#### Internet Layer

It is also known as a network layer. The main work of this layer is to send the packets from any network, and any computer still they reach the destination irrespective of the route they take.

The Internet layer offers the functional and procedural method for transferring variable length data sequences from one node to another with the help of various networks. Layer management protocols that belong to the network layer include routing protocols, multicast group management, and network-layer address assignment.

#### Network Interface Layer

This layer is also called a network access layer. It helps you to define details of how data should be sent using the network. A network layer is a combination of the data line and defined in the article of OSI reference model. This layer defines how the data should be sent physically through the network. This layer is responsible for the transmission of the data between two devices on the same network.

### Common TCP/IP Protocols

#### TCP

Transmission Control Protocol is an internet protocol suite which breaks up the message into TCP Segments and reassembling them at the receiving side.

#### IP

An Internet Protocol address that is also known as an IP address is a numerical label. It is assigned to each device that is connected to a computer network which uses the IP for communication.

#### HTTP

The Hypertext Transfer Protocol is a foundation of the World Wide Web. It is used for transferring webpages and other such resources from the HTTP server or web server to the web client or the HTTP client.

#### SMTP

SMTP stands for Simple mail transfer protocol. This protocol supports the e-mail is known as a simple mail transfer protocol. This protocol helps you to send the data to another e-mail address.

#### DNS

DNS stands for Domain Name System. An IP address that is used to identify the connection of a host to the internet uniquely. However, users prefer to use names instead of addresses for that DNS.

### Advantages of the TCP/IP model

- It helps you to establish/set up a connection between different types of computers.
- It operates independently of the operating system.
- It supports many routing-protocols.

### Disadvantages of the TCP/IP model

- Replacing protocol in TCP/IP is not easy.
- It has no clear separation from its services, interfaces, and protocols.
- TCP/IP is a complicated model to set up and manage.
