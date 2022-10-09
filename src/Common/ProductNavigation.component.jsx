import { Stack, VStack, Image, HStack, Text } from "@chakra-ui/react";

function ProductNavigation(props) {
    return (
        <>
            <VStack
                bg={'#FFFFFF'}
                boxShadow={'0px 1px 3px #CCCCCC'}
                padding={'10px'}
                textAlign={'left'}
            >
                <HStack
                    align={'left'}
                    textAlign={'left'}
                >
                <Stack>
                    <Image
                        src="logo.png"
                        width={'50px'}
                    />
                </Stack>
                <Stack
                    spacing={'0.1'}
                >
                    <Text color='blue.500' fontWeight={'700'}>YPedia</Text>
                    <Text>{props.moduleName}</Text>
                </Stack>
                </HStack>
            </VStack>
        </>
    )
}

export default ProductNavigation;