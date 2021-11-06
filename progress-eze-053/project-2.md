## What are the NS IP addresses for Google, Facebook and Tesla? 
- Google      - 216.58.223.206
- Facebook    - 102.132.101.35
- Tesla       - 199.66.11.62

## Breakdown the following RFC 1918 IPv4 address range into exactly 4 subnetwork with no address left over.”
 - 10.10.10.0
 - 192.168.0.0
 - 172.168.1.0

 ###### Solution
There are 5 classes of IP Address A, B, C, D & E. IP addresses from the first three classes (A, B and C) can be used for host addresses. The other two classes are used for other purposes – class D for multicast and class E for experimental purposes.

Classes of IP addresses are:

![IP Address Classes Range](https://603168-1953132-raikfcquaxqncofqfm.stackpathdns.com/wp-content/images/classes_of_ip_addresses.jpg)

- 10.10.10.0 is a class A IP Address

           10.       /   10.10.0
    (network part)       (host part)

default subnet mask of Class A IP address = 255.0.0.0 or /8 using the slash notation
Converting the IP Address to binary I have:
 - 10.10.10.0 = 00001010 . 00001010 . 00001010 . 00000000 
 - 255.0.0.0  = 11111111 . 00000000 . 00000000 . 00000000

formular:
2^x = number of subnets
Since I need to create 4 subnet 
2^2 = 4
Since i need only 4 subnets, i need 2^2 subnet bits. In this case, this means that i will take two bits from the host part.
Taking two zeros from the host part of the subnet mask. I have

255.0.0.0   = 11111111.00000000.00000000.00000000
255.64.0.0  = 11111111.01000000.00000000.00000000
255.128.0.0 = 11111111.10000000.00000000.00000000
255.192.0.0 = 11111111.11000000.00000000.00000000 

The 4 subnets of IP Address 10.10.10.0 are:
 - 10.0.0.0/10
 - 10.64.0.0/10
 - 10.128.0.0/10
 - 10.192.0.0/10


 ### Second IP Address:  - 192.168.0.0

From the image diagram above
192.168.0.0 is a class C IP Address

       192.168.0     /        0
    (network part)       (host part)

default subnet mask of Class C IP address = 255.255.255.0 or /24 using the slash notation
Converting the IP Address to binary I have:
 - 192.168.0.0     = 11000000 . 10101000 . 00000000 . 00000000 
 - 255.255.255.0  = 11111111 . 11111111 . 11111111 . 00000000

formular:
2^x = number of subnets
Since I need to create 4 subnet 
2^2 = 4
Since i need only 4 subnets, i need 2^2 subnet bits. In this case, this means that i will take two bits from the host part.
Taking two zeros from the host part of the subnet mask. I have

255.255.255.0   = 11111111.11111111.11111111.00000000
255.255.255.64  = 11111111.11111111.11111111.01000000
255.255.255.128 = 11111111.11111111.11111111.10000000
255.255.255.192 = 11111111.11111111.11111111.11000000 

The 4 subnets of IP Address 192.168.0.0 are:
 - 192.168.0.0/26
 - 192.168.0.64/26
 - 192.168.0.128/26
 - 192.168.0.192/26


 ### Third IP Address:  - 172.168.1.0

From the image diagram above
1172.168.1.0 is a class B IP Address

       172.168     /        1.0
    (network part)       (host part)

default subnet mask of Class B IP address = 255.255.0.0 or /16 using the slash notation
Converting the IP Address to binary I have:
 - 172.168.1.0     = 10101100 . 10101000 . 1 . 00000000 
 - 255.255.0.0     = 11111111 . 11111111 . 00000000 . 00000000

formular:
2^x = number of subnets
Since I need to create 4 subnet 
2^2 = 4
Since i need only 4 subnets, i need 2^2 subnet bits. In this case, this means that i will take two bits from the host part.
Taking two zeros from the host part of the subnet mask. I have

255.255.0.0   = 11111111.11111111.00000000.00000000
255.255.64.0  = 11111111.11111111.01000000.00000000
255.255.128.0 = 11111111.11111111.10000000.00000000
255.255.192.0 = 11111111.11111111.11000000.00000000

The 4 subnets of IP Address  172.168.1.0 are:
 -  172.168.0.0/18
 -  172.168.64.0/18
 -  172.168.168.0/18
 -  172.168.192.0/18
