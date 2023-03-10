import { Stack, Container, Box, VStack, Image, HStack, Text, Icon, Flex, Spacer, Center } from "@chakra-ui/react";
import { FcApproval, FcAutomotive, FcMoneyTransfer } from 'react-icons/fc';
import { AiFillPhone, AiOutlineCar, AiOutlineCoffee, AiOutlineFileProtect, AiOutlineFire, AiOutlineMobile, AiOutlinePhone, AiOutlineSmile, AiOutlineSolution, AiOutlineUsergroupAdd, AiOutlineWifi, AiOutlineZhihu } from 'react-icons/ai'
import { useState } from "react";
import { BsMoon, BsPersonBadge, BsSun} from 'react-icons/bs';
import { HiOutlineSelector} from 'react-icons/hi';
import { MdChildCare} from 'react-icons/md';
function InitialOptions(props) {
    

    return (
            
            <>
            <Container
                
                minW={'100%'}
                p={'0'}
                bg={'blanchedalmond'}
            >
            <VStack
                p={'3'}
                
             >
                <Flex
                    gap={'3'}
                    alignContent={'center'}
                    align={'center'}
                    textAlign={'center'}
                >
                    <Box
                        justifyContent={'normal'}
                        textAlign={'center'}
                        p={'5'}
                        bg={'white'}
                        borderRadius={'5px'}
                    >
                        <Flex
                            gap={'3'}
                        >
                            <BsSun
                                fontSize={'20px'}
                                marginLeft={'auto'}
                                marginRight={'auto'}
                            />
                        
                        <Text>
                            4 Days
                        </Text>
                        <HiOutlineSelector
                            fontSize={'20px'}
                            style={{
                                "verticalAlign":"middle"
                            }}
                        />
                        </Flex> 
                    </Box>

                    <Box
                        justifyContent={'normal'}
                        textAlign={'center'}
                        p={'5'}
                        bg={'black'}
                        color={'white'}
                        borderRadius={'5px'}
                    >
                        <Flex
                            gap={'3'}
                        >
                            <BsMoon
                                fontSize={'20px'}
                                marginLeft={'auto'}
                                marginRight={'auto'}
                            />
                        
                        <Text>
                            5 Nights
                        </Text>
                        <HiOutlineSelector
                            fontSize={'20px'}
                            style={{
                                "verticalAlign":"middle"
                            }}
                        />
                        </Flex> 
                    </Box>

                    <Box
                        justifyContent={'normal'}
                        textAlign={'center'}
                        p={'5'}
                        bg={'white'}
                        borderRadius={'5px'}
                    >
                        <Flex
                            gap={'3'}
                        >
                            <BsPersonBadge
                                fontSize={'20px'}
                                marginLeft={'auto'}
                                marginRight={'auto'}
                            />
                        
                        <Text>
                            2 Adults
                        </Text>
                        <HiOutlineSelector
                            fontSize={'20px'}
                            style={{
                                "verticalAlign":"middle"
                            }}
                        />
                        </Flex> 
                    </Box>

                    <Box
                        justifyContent={'normal'}
                        textAlign={'center'}
                        p={'5'}
                        bg={'white'}
                        borderRadius={'5px'}
                    >
                        <Flex
                            gap={'3'}
                        >
                            <MdChildCare
                                fontSize={'20px'}
                                marginLeft={'auto'}
                                marginRight={'auto'}
                            />
                        
                        <Text>
                            1 Child
                        </Text>
                        <HiOutlineSelector
                            fontSize={'20px'}
                            style={{
                                "verticalAlign":"middle"
                            }}
                        />
                        </Flex> 
                    </Box>
                    
                </Flex>
            </VStack>
        </Container>
        
        </>
        
    );
}

export default InitialOptions;