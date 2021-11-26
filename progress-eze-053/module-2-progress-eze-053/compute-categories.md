## Categorize the various computing service into different service models.

There are four types of service models in cloud computing they are

- Infastructure as a Service
- Platform as a Service
- SAAS - Software as a Service
- Function as a Service

Cloud services including Azure services, AWS services or Google's services generally fall into these categories: IaaS, PaaS, or SAAS FaaS. 

Infrastructure-as-a-Service (IaaS) lets us provision individual VMs along with the associated networking and storage components. Then we can deploy whatever software and applications we want onto those VMs. This model is the closest to a traditional on-premises environment, except that CSP's (cloud service providers) manages the infrastructure. 

Platform-as-a-Service (PaaS) provides a managed hosting environment, where you can deploy your application without needing to manage VMs or networking resources.

Software-as-a-Service (SAAS) is a cloud-based software delivery model in which the cloud provider develops and maintains cloud application software, provides automatic software updates, and makes software available to its customers via the internet on a pay-as-you-go basis. The public cloud provider manages all the hardware and traditional software, including middleware, application software, and security.

Functions-as-a-Service (FaaS) goes even further in removing the need to worry about the hosting environment. In a FaaS model, we simply deploy our code and the service automatically runs it.

I will be categorizing the following compute services into these four service models. The compute services includes:
- VMs  (E2, VM, etc.) 
- Platforms (AppEngine, ElasticBeanStalk, etc.)
- Functions (Lambda, Google/Azure functions)

- VM's: Virtual machines which are called EC2 on AWS platform and called VM on Azure platform is Infrastructure as a Service because on a virtual machine we are able to manage all operations that takes place in it and also what software is installed in it. 

- Platforms like Azure's App Service, Google's App Engine and AWS ElasticBeanStalk in cloud computing is a PaaS, Platform as a Service model because they provide a platform for developers to build scalable applications on these cloud service provider's platform. 

- Functions referred to as Azure functions on azure, google function on google and lambda function on AWS is a  Functions-as-a-Service (FaaS) because it removes the need to worry about the hosting environment. In a FaaS model, we simply deploy our code and the service automatically runs it. 