import { Stack, VStack, Image, HStack, Text } from "@chakra-ui/react";

function ProductFooter(props) {
    return (
        <>
            <VStack
                bg={'#FFFFFF'}
                boxShadow={'0px 1px 3px #CCCCCC'}
                padding={'10px'}
                textAlign={'left'}
            >
               <Text>
                    YPedia &copy; All Rights Reserved. 2022
                </Text> 
            </VStack>
        </>
    )
}

export default ProductFooter;