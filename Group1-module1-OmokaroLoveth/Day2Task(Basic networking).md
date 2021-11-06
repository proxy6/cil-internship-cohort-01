# First part of the Day2 Task

## The Name server IP address for Google, Telsa and Facebook are written below

I used nslookup on my windows 10 command prompt to find the ip addresses.

## Google

Name:    www.google.com

Addresses: 216.58.223.228

## Telsa

Name:    sicweb02.genetsis.com

Address:  82.144.105.81

Aliases:  www.telsa.com

## Facebook

Name:    star-mini.c10r.facebook.com

Addresses: 102.132.101.35

Aliases:  www.facebook.com


</br>

# Second part of the Day 2 Task

Breaking down the following RFC 1918 IPv4 address range into exactly four subnets

10.10.10.0

192.168.0.0

172.168.1.0

## For 10.10.10.0

Since no subnet mask was given, I assumed a /26 subnet mask in order for it to be divivded into exactly four parts.

* 10.10.10.0 - 10.10.10.63 (the exact subnet is 10.10.10.0)

* 10.10.10.64 - 10.10.10.127 (the exact subnet is 10.10.10.64)

* 10.10.10.128 - 10.10.10.191 (the exact subnet is 10.10.10.128)

* 10.10.10.192 - 10.10.10.255 (the exact subnet is 10.10.10.192)

## For 192.168.0.0

Using a /26 subnet mask

* 192.168.0.0 - 192.168.0.63 (the exact subnet is 192.168.0.0)

* 192.168.0.64 - 192.168.0.127 (the exact subnet is 192.168.0.64)

* 192.168.0.128 - 192.168.0.191 (the exact subnet is 192.168.0.128)

* 192.168.0.192 - 192.168.0.255 (the exact subnet is 192.168.0.192)

</br>

Using /18 subnet mask

* 192.168.0.0 - 192.168.63.0 (the exact subnet is 192.168.0.0)

* 192.168.64.0 - 192.168.127.0 (the exact subnet is 192.168.64.0)

* 192.168.128.0 - 192.168.191.0 (the exact subnet is 192.168.128.0)

* 192.168.192.0 - 192.168.192.0 (the exact subnet is 192.168.192.0)

</br>

## For 172.168.1.0

Since no subnet mask was given, I used /26 as the subnet mask

* 172.168.1.0 - 172.168.1.63 (the exact subnet is 172.168.1.0)

* 172.168.1.64 - 172.168.1.127 (the exact subnet is 172.168.1.64)

* 172.168.1.128 - 172.168.1.191 (the exact subnet is 172.168.1.128)

* 172.168.1.192 - 172.168.1.255 (the exact subnet is 172.168.1.192)
