import { Stack, Container, Box, VStack, Image, HStack, Text, Icon, Flex, Spacer } from "@chakra-ui/react";
import { FcApproval, FcAutomotive, FcMoneyTransfer } from 'react-icons/fc';
import { AiFillPhone, AiOutlineCar, AiOutlineCoffee, AiOutlineFileProtect, AiOutlineFire, AiOutlineMobile, AiOutlinePhone, AiOutlineSmile, AiOutlineSolution, AiOutlineUsergroupAdd, AiOutlineWifi, AiOutlineZhihu } from 'react-icons/ai'
import { useState } from "react";
function FeatureChooser(props) {
    let total = props.total;
    let setTotal = props.setTotal;
    const valueAddedServices = [
        {
            id: 7,
            iconName: AiOutlineSolution,
            serviceName: 'Paperwork',
            serviceDescription: 'Visa/Passport charges',
            cost: 100.00
        },
        {
            id: 1,
            iconName: AiOutlineCar,
            serviceName: 'Vehicle',
            serviceDescription: 'Lease Private Vehicle',
            cost: 100.50
        },
        {
            id: 2,
            iconName: AiOutlinePhone,
            serviceName: 'Support',
            serviceDescription: '24/7 Customer Support',
            cost: 49.99
        },
        {
            id: 3,
            iconName: AiOutlineCoffee,
            serviceName: 'Beverages',
            serviceDescription: 'Tea, Coffee during Travel',
            cost: 50.00
        },
        {
            id: 4,
            iconName: AiOutlineMobile,
            serviceName: 'Sim Card',
            serviceDescription: 'Sim-card on pre-arrival',
            cost: 20.00
        },
        {
            id: 5,
            iconName: AiOutlineUsergroupAdd,
            serviceName: 'Assistance',
            serviceDescription: 'Dedicated Tour Guide',
            cost: 120.00
        },
        {
            id: 6,
            iconName: AiOutlineWifi,
            serviceName: 'Wi-fi',
            serviceDescription: 'Extended Wi-fi usage',
            cost: 80.00
        },
        {
            id: 8,
            iconName: AiOutlineZhihu,
            serviceName: 'Translator',
            serviceDescription: 'Translator service',
            cost: 150.00
        },
        {
            id: 9,
            iconName: AiOutlineFire,
            serviceName: 'Campfire',
            serviceDescription: 'Campfire arrangement',
            cost: 70.00
        },
        {
            id: 10,
            iconName: AiOutlineFileProtect,
            serviceName: 'Insurance',
            serviceDescription: 'Health Insurance',
            cost: 25.00
        },
    ]
    let [services, setService] = useState(valueAddedServices);
    let [selectedValueAddedServices, setSelectedValueAddedServices] = useState([]);
    

    function selectValueAddedService(vasId) {
        
        let valueAddedService = services.filter(service => service.id == vasId);
        console.log(valueAddedService)
        let vasValue = valueAddedService[0].cost;
        
        let totalValue = total + vasValue;
        setTotal(totalValue)

        if(selectedValueAddedServices.length > 0) {
            setSelectedValueAddedServices([
                ...selectedValueAddedServices,
                ...valueAddedService
            ])    
        } else {
            setSelectedValueAddedServices([
                ...valueAddedService
            ])
        }

        services.map((service, index) => {
            if(service.id == vasId) {
                let newService = services.splice(index,1);
                setService([
                    ...services
                ])
            }
        })
    }

    return (
            
            <>
            <Container
                w={'25%'}
                p={'0'}
            >
            <VStack
            p={'2'}
             >
                <HStack
                    marginTop={'10px'}
                    gap={'1'}
                    spacing={'1'}
                    w={'100%'}
                    wrap={'wrap'}
                >
            {services.map((service) => {
                return (
                    <Stack
                        border={'1px solid #EEEEEE'}
                        p={'15px'}
                        borderRadius={'10px'}
                        maxWidth={'150px'}
                        minWidth={'150px'}

                        cursor={'pointer'}
                        _hover={{
                            'background': '#1a365d',
                            'color': '#FFFFFF'
                        }}
                        onClick={() => selectValueAddedService(service.id)}
                    >
                        <Flex
                            gap={'2'}
                        >
                            <Icon as={service.iconName}
                                fontSize={'35px'}
                                style={{ 'marginTop': '' }} />
                            <Spacer
                                size={'10'} />


                            <Text
                                textAlign={'right'}
                            >
                                {service.serviceName}<br />

                                <Text
                                    fontSize={'10px'}
                                >
                                    $ {service.cost}
                                </Text>
                            </Text>


                        </Flex>
                    </Stack>
                );
            })}

                </HStack>

            </VStack>
            <br/>
            <VStack>
                <FcMoneyTransfer
                    fontSize={'30px'}
                />
                <Text>
                    Total : $ {total}
                </Text>
                {selectedValueAddedServices.map((vas) => {
                    return (
                        <Box w={'100%'} bg={'gray.100'} wrap={'nowrap'}
                        p={'10px'} borderRadius={'5px'}
                        >
                            <Flex
                                gap={'3'}
                            >
                                <Icon as={vas.iconName}
                                    fontSize={'35px'}
                                    style={{ 'marginTop': '' }} />
                                
                                <Text>
                                    {vas.serviceName}   
                                    <Text fontSize={'13px'}>
                                        {vas.serviceDescription}
                                    </Text>
                                    <Text>
                                        $ {vas.cost}
                                    </Text>
                                </Text>
                                
                                
                            </Flex>
                            
                        </Box>
                    );
                })}
            </VStack>
        </Container>
        
        </>
        
    );
}

export default FeatureChooser;