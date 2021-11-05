# NS IP addresss 

  FACEBOOK : 102.132.101.35

  GOOGLE :   216.58.223.206 

  TESLA :    199.66.11.62


# RFC 1918 IPV4 ADDRESS RANGE

### First : 10.10.10.0

Since we were not given a subnet mask we use a default value of 255.0.0.0 also known as prefix lenghth value of /8 (because it is
a class A network)

converting to binary ;

10.10.10.0  becomes  00001010.00001010.00001010.00000000

255.0.0.0   becomes  11111111.00000000.00000000.00000000

		             |Network|| Host                   |

Network ip : 10.0.0.0/8

to find amount of bits borrowed to be able to create 4 subnets we use;

2^x = n where n = number of required subnet, x = number of bits borrowed

for this range n = 4, hence x = 2 (from inputing value of n in eq)

if we borrow 2 bits from the host we have;

00001010.'00'000000.00000000.00000000

|Network    | | Host                 |

The next step is to find every unique binary combination for those two bit places to
create the subnets

0 => 00000000

64 => 01000000

128 => 10000000

192 => 11000000

next to get subnet mask value of the 4 subnets add amount of bits 
borrowed to prifix length 

subnetmask = 8+2=10 or /10
 

The 4 subnets are;

### 10.0.0.0/10

### 10.64.0.0/10

### 10.128.0.0/10

### 10.192.0.0/10


### Second : 192.168.0.0

Since we were not given a subnet mask we use a default value of 255.255.255.0 also known
as prefix lenghth value of /24 (because it is
a class C network)

converting to binary ;

192.168.0.0  becomes     11000000.10101000.00000000.00000000

255.255.255.0   becomes  11111111.11111111.11111111.00000000

		                 |    Network              || Host  |

Network ip :  192.168.0.0/24

to find amount of bits borrowed to be able to create 4 subnets we use;

2^x = n where n = number of required subnet, x = number of bits borrowed

for this range n = 4, hence x = 2 (from inputing value of n in eq)

if we borrow 2 bits from the host we have;

11000000.10101000.00000000.'00'000000

|     Network                 || Host                 |

The next step is to find every unique binary combination for those two bit places to
create the subnets

0 => 00000000

64 => 01000000

128 => 10000000

192 => 11000000

next to get subnet mask value of the 4 subnets add amount of bits 
borrowed to prifix length 

subnetmask = 24+2 = 26 or /26
 

The 4 subnets are;

### 192.168.0.0/26

### 192.168.0.64/26

### 192.168.0.128/26

### 192.168.0.192/26



### Third : 172.168.1.0

since we were not given a subnet mask we use a default value of 255.255.0.0 also known
as prefix lenghth value of /16 (because it is
a class B network)

converting to binary ;

172.168.1.0  becomes   10101100.10101000.00000001.00000000

255.255.0.0   becomes  11111111.11111111.00000000.00000000

		               |Network        | | Host                |

Network ip :  172.0.0.0/16

to find amount of bits borrowed to be able to create 4 subnets we use;

2^x = n where n = number of required subnet, x = number of bits borrowed

for this range n = 4, hence x = 2 (from inputing value of n in eq)

if we borrow 2 bits from the host we have;

10101100.00000000.'00'000000.00000000

|Network             || Host                 |

The next step is to find every unique binary combination for those two bit places to
create the subnets

0 => 00000000

64 => 01000000

128 => 10000000

192 => 11000000

next to get subnet mask value of the 4 subnets add amount of bits 
borrowed to prifix length 

subnetmask = 16+2=18 or /18
 

The 4 subnets are;

### 172.168.0.0/18

### 172.168.64.0/18

### 172.168.128.0/18

### 172.168.192.0/18



        


