**What are the NS IP addresses for Google, Facebook and Tesla**

* Google:
dns: www.google .com.
IPV 4address: 142.250.179.132

* Facebook:
dns: www.facebook.com
IPV 4: 157.240.217.35

* Tesla:
dns name:www. Tesla.com
IPV4: 199.66.11.62
---

**“Breakdown the following RFC 1918 IPv4 address range into exactly 4subnetwork with no address left over.”**
**10.10.10.0**
**192.168.0.0**
**172.168.1.0**


10.10.10.0 - class A
4 subnets = 2^2
subnet mask = 255.0.0.0
in binary, subnet mask=11111111.00000000.00000000.00000000
picking 2 from the host bits = 11111111.11000000.00000000.00000000
10.10.10.0 in binary is = 00010010.00010010.00010010.00000000
with new 1's in host ip=00010010.11010010.00010010.00000000
in decimal= 10.202.10.0(/10)
subnets = 10.10.10.0, 10.138.10.0, 10.74.10.0, 10.202.10.0

192.168.0.0 - class C
4 subnets = 2^2
subnet mask = 255.255.255.0
in  binary = 11111111.11111111.11111111.00000000
picking 2 host bits = 11111111.11111111.11111111.11000000
ie = 255.255.255.192
subnets = 192.168.0.0, 192.168.0.64, 192.168.0.128, 192.168.0.192

172.168.1.0 - class B
4 subnets = 2^2
subnet mask = 255.255.0.0
in binary, subnet mask = 11111111.11111111.0.0
picking two from the host bits = 11111111.11111111.11000000.00000000
172.168.1.0 in binary = 10101100.10101000.00000001.0
subnets = 172.168.1.0, 172.168.129.0, 172.168.65.0,172.168.193.0