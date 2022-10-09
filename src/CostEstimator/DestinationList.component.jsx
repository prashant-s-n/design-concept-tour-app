import { Stack, VStack, Image, HStack, Text, Icon, Flex, Spacer, Heading, Box, useControllableState } from "@chakra-ui/react";
import { FcAddColumn, FcAutomotive, FcCurrencyExchange, FcInfo, FcLikePlaceholder } from 'react-icons/fc';
import { AiFillPhone, AiOutlineCar, AiOutlineCoffee, AiOutlineDollar, AiOutlineMobile, AiOutlinePhone, AiOutlineSmile, AiOutlineSolution, AiOutlineUsergroupAdd, AiOutlineWifi } from 'react-icons/ai'
import { useState } from "react";
function DestinationList(props) {
    let total = props.total;
    let setTotal = props.setTotal;
    const destinationsList = [
        {
            id : 1,
            destinationName : 'Agra',
            country : 'India',
            baseCost : 1500,
            imagePath : 'destinations/taj-mahal.jpeg',
            places: [
                'Taj Mahal',
                'Agra Fort',
                'Tomb of Itimad-ud-Daulah',
                'Mother Teresa Missionaries of Charity',
                'Agra Art Gallery'
            ],
            visitors : '1,0000'
        },
        {
            id : 2,
            destinationName : 'Assam',
            country : 'India',
            baseCost : 15000,
            imagePath : 'destinations/assam.jpg',
            places: [
                'Kaziranga National Park',
                'Orang National Park',
                'kamakhya Temples',
                'Panimoor Falls'
            ],
            visitors : '1,0000'
        },
        {
            id : 3,
            destinationName : 'Venice',
            country : 'Italy',
            baseCost : 150000,
            imagePath : 'destinations/venice.jpeg',
            places: [
                'St. Mark"s Basilica',
                "Piazza San Marco (St. Mark's Square)",
                'Canal Grande',
                'Ponte di Rialto (Rialto Bridge)'
            ],
            visitors : '50000'
        },
        {
            id : 4,
            destinationName : 'Paris',
            country : 'France',
            baseCost : 250000,
            imagePath : 'destinations/paris.jpeg',
            places: [
                'Musee Rodin',
                'Eiffel Tower',
                'Palace of Versailles'
                
            ],
            visitors : '21,00000'
        },
        {
            id : 5,
            destinationName : 'Great Wall of China',
            country : 'China',
            baseCost : 2000,
            imagePath : 'destinations/great-wall.jpeg',
            places: [
                'Great Wall of China',
                
                
            ],
            visitors : '100000'
        },
        {
            id : 6,
            destinationName : 'Abu Simbel',
            country : 'Egypt',
            baseCost : 1000,
            imagePath : 'destinations/egypt.jpeg',
            places: [
                'Abu Simbel',
                'Pyramids of Giza'
                
            ],
            visitors : '100000'
        }
    ]

    let [destinations, setDestinations] = useState(destinationsList);
    let [currentDestination, setCurrentDestination] =   useControllableState({defaultValue: destinations[0]});
    

    async function changeCurrentDestinationSelection(destinationId) {
        let currentDestinationDetails = destinations.filter(destination => destination.id == destinationId)
        setCurrentDestination(currentDestinationDetails);
    }

    return (
        <>
            <HStack
                p={'15px'}
                alignItems={'flex-start'}
                gap={'3'}
                width={'73%'}
            >
                
                <Stack
                    maxW={'100vh'}   
                    width={'100%'}                 
                    
                    textAlign={'left'}
                    p={'0'}
                >
                    
                    <Stack
                        style={{
                            'height':'300px',
                            'backgroundImage':`url(/${currentDestination.imagePath})`,
                            'backgroundPosition':'60% 40%',
                            'backgroundSize':'100%',
                            'borderRadius':'5px'
                        }}
                    />
                    <VStack>
                    
                    
                    <Stack
                        w={'50vh'}
                        bg={'blue.900'}
                        p={'4'}
                        marginTop={'-20%'}
                        opacity={'90%'}
                        borderRadius={'5px'}
                        color={'white'}
                        boxShadow={`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                        0 12.5px 10px rgba(0, 0, 0, 0.06),
                        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                        0 100px 80px rgba(0, 0, 0, 0.12)`}
                    >
                        <Text fontSize={'13px'}>
                            BASE FARE AMOUNT
                            <Text color={'blue.100'} fontSize={'10px'}>
                                Includes minimum charge for the Tour package, consists of
                                airline fares, baggage costs, fee to Embassy, commission to 
                                the agents etc.
                            </Text>
                        </Text>
                        <Text fontSize={'25px'}>$ {currentDestination.baseCost}</Text>
                        {total > 0 && 
                            <>
                                <Text fontSize={'13px'}>
                                    VAS Amount
                                    <Text color={'blue.100'} fontSize={'10px'}>
                                        Refer to the left most section to view the
                                        breakdown of the VAS charges.
                                    </Text>
                                </Text>
                                
                                <Text fontSize={'25px'}>$ {total.toFixed(2)}</Text>

                                <Text fontSize={'13px'}>
                                    Total Amount
                                    <Text color={'blue.100'} fontSize={'10px'}>
                                        Base amount + VAS charges
                                    </Text>
                                </Text>
                                
                                <Text fontSize={'25px'}>$ {total + currentDestination.baseCost}</Text>
                            </>
                        }
                    </Stack>
                    </VStack>
                    <HStack>
                        <Stack
                            textAlign={'center'}
                            bg='white'
                            p={'10'}
                        >
                            <Heading
                            textTransform={'uppercase'}
                            color={'blue.700'}
                        >
                            {currentDestination.destinationName}
                        </Heading>
                        <Text>
                            {currentDestination.country}
                        </Text>
                        </Stack>
                        <Stack
                            
                            p={'10'}
                        >
                            <Text fontSize={'14px'}>
                                <Text fontSize='12px' color={'gray.700'}>
                                    Places to visit : 
                                </Text>
                                {currentDestination.places.join(',')}
                            </Text>
                            <Text fontSize={'14px'}>
                                <Text fontSize='12px' color={'gray.700'}>
                                    Base cost : 
                                </Text>
                                $ {currentDestination.baseCost}
                            </Text>
                            <Text fontSize={'14px'}>
                                <Text fontSize='12px' color={'gray.700'}>
                                    Approx Visitors
                                </Text>
                                {currentDestination.visitors} people
                            </Text>
                        </Stack>
                        
                        
                    </HStack>

                    
                    
                    
                </Stack>
                <Stack>

                {destinations.map((destination) => {
                    return (
                        
                            <VStack
                                w={'200px'}
                                key={destination.id}
                                bg={currentDestination.id ==destination.id ? 'blue.900' : 'blue.100'}
                                color={currentDestination.id ==destination.id ? 'blue.100' : 'blue.900'}
                                p={'0px'}
                                borderRadius={'10px'}
                                cursor={'pointer'}
                                _hover={{
                                    'background':'#f9f9f9',
                                    'color': '#555555'
                                }}
                                onClick={() => setCurrentDestination(destination)}
                            >  
                               
                                
                                <Flex 
                                    w={'100%'}
                                    padding={'10px'}
                                    
                                >
                                    
                                    <Text fontSize={'14px'}>
                                        {destination.destinationName}
                                         
                                        <Text fontSize={'10px'} color={currentDestination.id ==destination.id ? 'blue.100' : 'blue.700'}>
                                            <Text fontSize={'10px'}>Annual Visitors</Text>
                                            {destination.visitors}
                                        </Text>
                                        <Text fontSize={'12px'}>
                                            <Text fontSize={'10px'}>Estimated Package Cost</Text>
                                            $ {destination.baseCost + total}
                                        </Text>
                                        {/*
                                        <Text fontSize={'10px'}>
                                            {destination.places.length > 0 && 'Places to visit ' + destination.places.join(',')}
                                        </Text> */}
                                        
                                    </Text>
                                    
                                    
                                    
                                </Flex>
                                
                            </VStack>
                        
                    )
                })}
                </Stack>
            </HStack>
        </>
    );
}

export default DestinationList;