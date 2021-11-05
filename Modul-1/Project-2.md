# NS IP ADDRESSES 

  GOOGLE: 216.58.223.206

  FACEBOOK: 102.132.101.35

  TESLA: 199.66.11.62


# RFC 1918 IPV4 ADDRESS RANGE 

## (1) 10.10.10.0 

Since we were not given a subnet mask the default value is going to be used (255.0.0.0) Also know ask class a subnet mask value 

Converting to binary: 

10.10.10.0 becomes  00001010.00001010.00001010.00000000

255.0.0.0  becomes  11111111.00000000.0000000.00000000

                    
                    |Network||Host                     |

 Network IP : 10.0.0/8 

 To find the amount of bits borrowed to be able to create 4 subnets we use; 

 2^x = n where n = number of required subnet, x = number of bits borrowed 

 for this range n = 4, hence x = 2 (from inputing value of n in eq) 

 If we borrow 2 bits from the host we have; 

 00001010 '00'000000.00000000.00000000

 |Network    | |Host                  |

 The next step is find every unique binary combination for those 2 bits to create the subnets 

 0 = 00000000

 64 = 01000000

 128 = 10000000

 192 = 11000000

 Next is to get the subnet mask value of the subnets and add amounts of bits borrowed to the prefix lenght

 Subnet mask = 8+2= 10 or /10

 Therefore the 4 subnets are;

 10.0.0.0/10

 10.64.0.0/10

 10.128.0.0/10

 10.192.0.0/10


 ## (2) 192.168.0.0


Since we were not given a subnet mask the default value is going to be used (255.0.0.0) Also know ask class a subnet mask value 

Coverting to binary; 

192.168.0.0  becomes    11000000.10101000.00000000.00000000

255.255.255.0 becomes   11111111.11111111.11111111.00000000

                        | Network                | |Host   |

Network IP: 192.168.0.0/24

To find the amount of bits borrowed so as to create the subnets, we use the formular used in the previous calculations  

11000000.10101000.00000000.'00'000000

|Network                      ||Host |

The next step is find every unique binary combination for those 2 bits to create the subnets 

0 = 00000000

64 = 01000000

128 = 10000000

192 = 11000000

Next is to get the subnet mask value of the subnets and add amounts of bits borrowed to the prefix lenght

Subnetmask = 24+2 =26 or /26 


The 4 subnets are:

## 192.168.0.0/26

## 192.168.0.64/26

## 192.168.0.128/26

## 192.168.0.192/26


# (3) 172.168.1.0

Since we were not given a subnet mask the default value is going to be used (255.0.0.0) Also know ask class a subnet mask value 

255.255.0.0

Converting to binary 

172.168.1.0  becomes  10101100.10101000.00000001.00000000

255.255.0.0  becomes   11111111.11111111.00000000.00000000

                       |Network        ||Host             |

Network IP: 172.168.0.0/16 

To find the amount of bits borrowed so as to create the subnets, we use the formular used in the previous calculations

11111111.11111111.'00'000000.00000000

|Network             ||Host          |

The next step is find every unique binary combination for those 2 bits to create the subnets

0 = 00000000

64 = 01000000

128 = 10000000

192 = 11000000

Next is to get the subnet mask value of the subnets and add amounts of bits borrowed to the prefix lenght

Subnets mask = 16+2 = 18 or /18

The 4 subnets:

## 172.168.0.0/18

## 172.168.64.0/18

## 172.168.128.0/18

## 172.168.192.0/18
