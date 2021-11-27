## Comparison between AWS Storage and Databases
There are four main AWS storage services: 
- Elastic Block Storage (EBS)
- Simple Storage Service (S3)
- Elastic File System (EFS) 
- Glacier

Simply put, EBS is just like our harddrive, S3 is specifically designed for storing files, EFS is an Amazon-built Cloud-based file system and Glacier is a backup and cold-storage solution.

- Elastic Block Storage: Block storage simply refers to storage that acts like a harddrive. EBS is the most versatile of Amazon storage offerings. We can connect an EBS volume to an EC2 instance, and our instances will treat it just like they do their onboard storage, only the storage won't disappear when the instances do. EBS is considered elastic because it's easy to add new blocks or even increase the size of our current blocks. 

- Simple Storage Service: Simple Storage Service is an object-based storage system. The harddrive in our computer comes with a file system installed which creates a hierarchy of folders inside of which we can store our files, and each file has a unique name and location within the file system. But in object-based storage, we do away with the folders, and instead only have files stored as objects. These objects contain both the data we want to store as well as metadata about the object, information that is very easy and fast to look up and read. Object storage works really well for storing media files, such as images, videos, or sound files, but isn't as good for storing data or files that will need to be updated frequently. 

- Elastic File System: Elastic File System is a file system developed by Amazon for use on EBS. Unlike other file systems, which are not designed with the Cloud in mind, EFS makes it easy to mount a single volume to multiple EC2 instances. 

- Glaciers:  Glacier is primarily a data-backup service. It is really really cheap to store our data on Glacier, but it's harder, slower, and more expensive to upload it or download it. This makes it ideal for data that users don't need to necessarily have access to but which we don't want to throw away yet. Data on Glacier is backed up in multiple places by Amazon, so we don't have to worry about our data ever being lost. Amazon encrypts it so that only we can read it.

#### DATABASES
A database is a great way to store structure data as well as an engine that lets us write code to query that data, read it and write it, and do analytics on it. There are four important AWS databases services: RDS, Aurora, DynamoDB, and ElastiCache. 

- Amazon RDS stands for Relational Database Service. As the name suggests, this gives us an easy and Amazon-managed way to run common relational databases, like MySQL or PostgreSQL. In relational databases, data is stored in tables, and there is a query language, that's the SQL part, for writing and reading data as well as comparing chunks of data to each other. Amazon RDS offers an easy way to manage our databases. 

- Amazon Aurora is a MySQL-compatible database that Amazon has designed from the ground up to work on their Cloud servers. It's much faster and more reliable than running MySQL through EC2 or RDS but also more expensive. We can only spin up large databases, meaning that Aurora is most appropriate for large production-ready applications, not for applications that are small, need to be run locally, because it's a Cloud-only software, or are currently in testing.

- DynamoDB is, like Aurora, an Amazon-created Cloud-based database, however, unlike Aurora or RDS, Dynamo is a NoSQL database. This means that we can create document-based databases, which don't require the rigidity of datatypes that SQL requires. 

- ElastiCache: While the other database options store data in longterm storage, such as harddrives or solid-state disks, ElastiCache works with two databases that store information in memory. Memory is very fast to access but is not persistent, making it good for some applications but not for longterm data storage. The most frequent use of these kinds of databases is to cache information from our storage that we know we'll need access to. This will speed up the access time. Another common use is for caching HTML generated by our app. This way, our app doesn't have to regenerate the page each time a new person loads it, if nothing has changed, and users will experience a much faster website. ElastiCache works with either Redis or Memcached, two different in-memory database systems.