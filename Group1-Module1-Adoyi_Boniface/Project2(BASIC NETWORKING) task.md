# NS Adresses for Faceboook, Google and Tesla.

## NS Addresses for Google;

Name: www.google.com
Addresses: 2c0f:fb50:4003:802::2004 (IPv6)
216.58.223.228 (IPv4)

## NS Addresses for Facebook;

Name: facebook.com
Addresses: 2a03:2880:f138:83:face:b00c:0:25de (IPv6)
102.132.101.35 (IPv4)

## NS Addresses for Tesla;

Name: www.tesla.com
Addresses: 2a02:26f0:e0:597::700 (IPv6)
2a02:26f0:e0:590::700 (IPv6)
23.207.212.28 (IPv4)

# Subnetting

## 1. Subnetting 10.10.10.0 into 4 Subnets

Original Network Id: 10.10.10.0/8

10.10.10.0 is a Class A IPv4 Address and the default subnet mask in decimal is 255.0.0.0.
To create 4 subnets from 10.10.10.0 we will need to borrow 2 bits from the host portion.

### Subnetting Table for Class A IPv4 Address

|   Subnet    |  1  |  2  |  4  |  8  | 16  | 32  | 64  | 128 | 256 |
| :---------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|    Host     | 256 | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |
| Subnet Mask | /8  | /9  | /10 | /11 | /12 | /13 | /14 | /15 | /16 |

from the subnetting table above, to have 4 subnets, we will use a Host block size of 64 and a subnet mask of /10.
By Computing with a 64 block size and /10 subnet mask, we have the Network ID, Host ID Range, Usable Host and Broadcast ID
as shown in the table Below:

### 4 Subnets Generated from 10.10.10.0

| Subnet Number | Network ID | Subnet Mask |      Host ID Range      | Number of Usable Host | Broadcast ID |
| :-----------: | :--------: | :---------: | :---------------------: | :-------------------: | :----------: |
|       1       |  10.0.0.0  |     /10     |  10.1.0.0 - 10.62.0.0   |          62           |  10.63.0.0   |
|       2       | 10.64.0.0  |     /10     | 10.65.0.0 - 10.126.0.0  |          62           |  10.127.0.0  |
|       3       | 10.128.0.0 |     /10     | 10.129.0.0 - 10.190.0.0 |          62           |  10.191.0.0  |
|       4       | 10.192.0.0 |     /10     | 10.193.0.0 - 10.254.0.0 |          62           |  10.255.0.0  |

All 4 Subnets will have thesame subnet mask which is 255.192.0.0 (/10).

## 2. Subnetting 192.68.10.0 into 4 Subnets

Original Network Id: 192.168.0.0/16

192.168.0.0 is a Class C IPv4 Address and the default subnet mask in decimal is 255.255.255.0 but because it is a RFC 1918 Private IP,
the default subnet mask is (/16) i.e 255.255.0.0.
To create 4 subnets from 192.168.0.0 we will need to borrow 2 bits from the host portion.

### Subnetting Table for Class C IPv4 Address

|   Subnet    |  1  |  2  |  4  |  8  | 16  | 32  | 64  | 128 | 256 |
| :---------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|    Host     | 256 | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |
| Subnet Mask | /16 | /17 | /18 | /19 | /20 | /21 | /22 | /23 | /24 |

from the subnetting table above, to have 4 subnets, we will use a Host block size of 64 and a subnet mask of /26.
By Computing with a 64 block size and /26 subnet mask, we have the Network ID, Host ID Range, Usable Host and Broadcast ID
as shown in the table Below:

### 4 Subnets Generated from 192.168.0.0

| Subnet Number |  Network ID   | Subnet Mask |         Host ID Range         | Number of Usable Host | Broadcast ID  |
| :-----------: | :-----------: | :---------: | :---------------------------: | :-------------------: | :-----------: |
|       1       |  192.168.0.0  |     /18     |  192.168.1.0 - 192.168.62.0   |          62           | 192.168.63.0  |
|       2       | 192.168.64.0  |     /18     | 192.168.65.0 - 192.168.126.0  |          62           | 192.168.127.0 |
|       3       | 192.168.128.0 |     /18     | 192.168.129.0 - 192.168.190.0 |          62           | 192.168.191.0 |
|       4       | 192.168.192.0 |     /18     | 192.168.193.0 - 192.168.254.0 |          62           | 192.168.255.0 |

All 4 Subnets will have thesame subnet mask which is 255.255.192.0 (/18).

## 3. Subnetting 172.68.1.0 into 4 Subnets

#### Note: 172.68.1.0 does not fall under the RFC 1918 IPv4 Range.

But it can be resolved as a Public IPv4 Address as:

Original Network Id: 172.168.1.0/16

172.168.1.0 is a Class B IPv4 Address and the default subnet mask in decimal is 255.255.0.0.
To create 4 subnets from 172.168.1.0 we will need to borrow 2 bits from the host portion.

### Subnetting Table for Class C IPv4 Address

|   Subnet    |  1  |  2  |  4  |  8  | 16  | 32  | 64  | 128 | 256 |
| :---------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|    Host     | 256 | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |
| Subnet Mask | /16 | /17 | /18 | /19 | /20 | /21 | /22 | /23 | /24 |

from the subnetting table above, to have 4 subnets, we will use a Host block size of 64 and a subnet mask of /18.
By Computing with a 64 block size and /18 subnet mask, we have the Network ID, Host ID Range, Usable Host and Broadcast ID
as shown in the table Below:

### 4 Subnets Generated from 172.168.1.0

| Subnet Number |  Network ID   | Subnet Mask |         Host ID Range         | Number of Usable Host | Broadcast ID  |
| :-----------: | :-----------: | :---------: | :---------------------------: | :-------------------: | :-----------: |
|       1       |  172.168.0.0  |     /18     |  172.168.1.0 - 172.168.62.0   |          62           | 172.168.63.0  |
|       2       | 172.168.64.0  |     /18     | 172.168.65.0 - 172.168.126.0  |          62           | 172.168.127.0 |
|       3       | 172.168.128.0 |     /18     | 172.168.129.0 - 172.168.190.0 |          62           | 172.168.191.0 |
|       4       | 172.168.192.0 |     /18     | 172.168.193.0 - 172.168.254.0 |          62           | 172.168.255.0 |

All 4 Subnets will have thesame subnet mask which is 255.255.192.0 (/18).
