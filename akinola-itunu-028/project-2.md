# What are the ip addresses for Google, Facebook and Tesla?
 
1. Google maintains the IP addresses 8.8.8.8 and 8.8.4.4 as the primary and secondary DNS 
2. Facebook maintains the IP address 129.134.31.12
3. While Tesla's IP address is  199.66.11.62

# Breakdown the following RCF 1918 IPv4 address range into exactly 4 subnets with no address left over.
1. 10.10.10.0
2. 192.168.00
3. 172.168.10

### 10.10.10.0
Address    10.10.10.0       00001010.00001010.00001010.00000000
Network    0.0.0.0/4        00000000.00000000.00000000.00000000  Class A
Broadcast  255.255.255.0    11111111.11111111.11111111.00000000
First IP   0.0.0.1          0000 0000.00000000.00000000.00000001
Last IP    15.255.255.254   0000 1111.11111111.11111111.11111110
Hosts/Net  254/65536        nnnn hhhh.hhhhhhhh.hhhhhhhh.hhhhhhhh

### 192.168.00
Address   192.168.0.0       11000000.10101000.00000000.00000000
Network   192.168.0.0/30    11000000.10101000.00000000.00000000   Class B
Netmask   255.255.255.252   11111111.11111111.11111111.11111100
First IP  192.168.0.1       11000000.10101000.00000000.00000001
Last IP   192.168.0.2       11000000.10101000.00000000.11111110
Hosts/Net 2/16384           nnnnnnnn.nnnnnnnn.nnnnnnnn.hhhhhhhh   

### 172.168.10
Address   172.168.0.0       11000000.10101000.00000000.00000000
Network   172.168.0.0/28    11000000.10101000.00000000.00000000   Class C
Netmask   255.255.255.240   11111111.11111111.11111111.11110000
First IP  172.168.0.1       11000000.10101000.00000000.00000001
Last IP   172.168.0.14      11000000.10101000.00000000.11111110
Hosts/Net 14/16             nnnnnnnn.nnnnnnnn.nnnnnnnn.hhhhhhhh   


