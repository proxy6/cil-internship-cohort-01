### Name: Adebola Oluwabusayo Jonathan
### Email: jonathanadebola@gmail.com
### Candidate ID: 044

### Task 1:

What are the NS IP addresses for Google, Facebook and Tesla? Breakdown the following RFC 1918 IPv4 address range into exactly 4 subnets with no address left over.

**Answer**
Google Address (google.com): 216.58.223.238
Facebook Address (facebook.com): 102.132.101.35
Tesla Address (tesla.com): 199.66.11.62

### Task 2:
“Breakdown the following RFC 1918 IPv4 address range into exactly 4 subnetwork with no address left over.”
10.10.10.0
192.168.0.0
172.168.1.0


## 192.168.0.0

|Subnet | Network ID   | Subnet Mask | Host IP Range                 | No. of Usable Hosts | Broadcast ID  |
|-------|--------------|-------------|-------------------------------|---------------------|---------------|
|1      | `192.168.0.0`|  /26        | 192.168.0.1-192.168.0.62      | 62                  | 192.168.0.63  |
|2      | 192.168.0.64 |  /26        | 192.168.0.65-192.168.0.126    | 62                  | 192.168.0.127 |
|3      | 192.168.0.128|  /26        | 192.168.0.129-192.168.0.190   | 62                  | 192.168.0.191 |
|4      | 192.168.0.192|  /26        | 192.168.0.193-192.168.0.254   | 62                  | 192.168.0.255 |

## 10.10.10.0

| Subnet | Network ID    | Subnet Mask | Host IP Range               | No. of Usable Hosts| Broadcast ID |
|--------|---------------|-------------|-----------------------------|--------------------|--------------|
|1       | `10.10.10.0`  |  /26        | 10.10.10.1-10.10.10.62      | 62                 | 10.10.10.63  |
|2       | 10.10.10.64   |  /26        | 10.10.10.65-10.10.10.126    | 62                 | 10.10.10.127 |
|3       | 10.10.10.128  |  /26        | 10.10.10.129-10.10.10.190   | 62                 | 10.10.10.191 |
|4       | 10.10.10.192  |  /26        | 10.10.10.193-10.10.10.254   | 62                 | 10.10.10.255 |