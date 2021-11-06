
# Telecommunication Management Network (TMN) Model

The TMN Refernce Model refers to a set of standards by the International Telecommunications Union (ITU-T) for the specification of a Telecommunications Management Network (hence, the acronym TMN). TMN covers a wide range of topics related to the principles for how to manage telecommunication networks. The topics are formally described in standards that vendors should adhere to.

The management of wireless telecommunication networks today uses a combination of the Telecommunication Management Network (TMN) and OSI standards. The OSI model is well accepted in managing most IP-based network elements. The TMN model provides the basic set of principles for a layered architecture and the management functional areas. The OSI model provides the management framework for the managing system and the management system.

The commercial importance of TMN is limited and is, in fact, decreasing. Nevertheless, TMN is widely established as a reference framework that provides a clear and widely accepted terminology for management related topics.

# The TMN Reference Model

The TMN hierarchy, is a reference model that specifies a set of management layers that build on top of each other and address different abstractions of the management space. In practice, those layers are not always clearly separated in the systems that implement the corresponding functionality. However, as a reference, the layer concept is invaluable. 

According to the TMN reference model, management systems are categorized to the following layers that perform specific functions and have a specific scope:

* Element Management Layer

* Network Management Layer

* Service Management Layer

* Business Management Layer

* Network Elements Layer

## Element Management Layer

This layer deals with the management of the functions of a network element and its also responsible for management of network elements on an individual or collective basis. Examples of these functions are detection of equipment errors, environmental conditions such as power consumption and temperature, resource measurement such as CPU, disk, and message queue utilization, and software upgrades.

## Network Management Layer

This layer provides a wider view of the network within which the connections are deployed and managed and its also responsible for the management, including coordination of activity, of a network view. The hierarchical grouping of switching systems can be used for the definition of layer-networks, where groups of nodes at one layer appear as a single node for the upper layer. Examples of the role of this layer are to configure the network topology, establish routing and signaling paths, and aggregating fault and measurement conditions across the network.

## Service Management Layer

Its the environment where the service logic is implemented and the network resources are utilised for providing services. The service control and management mechanisms are deployed through interfaces that facilitate communication with adjacent administrative domains and management systems. This layer is concerned with the aspects of the network that can be experienced by the users of the network. Examples of these network aspects are the Quality of Service (QoS)/Quality of Experience (QoE), accounting, user management, and so forth.

## Business Management Layer

It deals with the business-oriented relationships between stakeholders and owners of different portions of the infrastructure. It focuses on the overall strategic management growth and evolution of the network. This layer is not strictly defined since it is supposed to accommodate functions that correspond to the business aspects of service deployment.

## Network Elements Layer

Its an architectural concept that represents telecommunication equipment (or groups/parts of telecommunication equipment) and supports equipment or any item or groups of items considered belonging to the telecommunications environment that performs network element functions (NEFs)

</br>
It is obvious that TMN focus is not business management. TMN instead focuses on defining technically and conceptually the role of the devices, their configuration and monitoring, the configuration and monitoring of the network as a whole and finally the configuration and monitoring of services.
