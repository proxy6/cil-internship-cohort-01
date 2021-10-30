### Describe any layered process you are familiar with to the OSI model. 

#### The TCP/IP Model.
The TCP/IP model, or otherwise sometimes referred to as the internet protocol suite, is a set of communication protocols used for the majority of networks, for example, both the internet and private networks.
The TCP/IP model is quite similar to the OSI model, the main difference between the two models is that the OSI model has seven layers, whereas the TCP/IP model has just four layers. The OSI model translates to the TCP/IP model as follows. 
TCP/IP consists of four layers, not seven.

From top to bottom:
 1. The application layer.
 2. The transport layer. 
 3. The internet layer.
 4. The network access layer.

TCP/IP combines several OSI layers into a single layer. This is the case for the application, presentation, and session layers. These are combined into a single application layer in the TCP/IP model. Similarly, the bottom two layers of the OSI model, the physical and data link layers, are combined into a single network layer in the TCP/IP model. In the TCP/IP model, each pair of equivalent layers between the sender and receiver sites is designed to operate with a particular protocol transmission unit, PTU.

1. The application layer is the scope within which applications, or processes, create user data and communicate this data to other applications on another or the same host. The applications make use of the services provided by the underlying lower layers, especially the transport layer which provides reliable or unreliable pipes to other processes.his is the layer in which all application protocols, such as SMTP, FTP, SSH, HTTP, operate. Processes are addressed via ports which essentially represent services.
2. The transport layer performs host-to-host communications on either the local network or remote networks separated by routers. The Transmission Control Protocol provides flow-control, connection establishment, and reliable transmission of data.
3. The internet layer exchanges datagrams across network boundaries. This layer defines the addressing and routing structures used for the TCP/IP protocol suite. The primary protocol in this scope is the Internet Protocol, which defines IP addresses. Its function in routing is to transport datagrams to the next host, functioning as an IP router, that has the connectivity to a network closer to the final data destination.
4. The Network Access layer of the TCP/IP model corresponds with the Data Link and Physical layers of the OSI reference model. It defines the protocols and hardware required to connect a host to a physical network and to deliver data across it. Packets from the Internet layer are sent down the Network Access layer for delivery within the physical network. The destination can be another host in the network, itself, or a router for further forwarding.