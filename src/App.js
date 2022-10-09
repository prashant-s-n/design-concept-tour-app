import logo from './logo.svg';
import productLogo from './assets/logo.png';
import contributorLogo from './assets/contributor.png'
import './App.css';
import { Avatar, 
        Badge, 
        Image, 
        Heading, 
        Container,
        Stack, 
        Box, 
        Text, 
        HStack, 
        List, 
        ListIcon, 
        ListItem 
    } from '@chakra-ui/react'
import {FcInfo, FcPlus} from 'react-icons/fc';


function App() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Image 
            src={productLogo}
            style={{"height":"75px", "width":"80px","display":"inline", "textAlign":"center", "marginLeft":"auto", "marginRight":"auto"}}
          />
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            YPedia <br />
            <Text as={'span'} color={'blue.500'}>
              Product Design
            </Text>
          </Heading>

          <HStack>
            <Stack>
            <Avatar name='Prashant Nalli' src="https://avatars.githubusercontent.com/u/12883211?s=400&u=834077c85519b9fa68875dd1bb151a48241fd50d&v=4" />
            </Stack>
            <Stack>
              <Badge size={'sm'} width={'fit-content'}>
                Prashant N
              </Badge>
              <Text fontSize={'13px'}>
                <a href="https://github.com/prashant-s-n">Github Profile</a>
              </Text>
            </Stack>
          </HStack>
          
          <Text>
            YPedia is a small application for an exercise to demonstrate
            problem solving when Product Design challenges are approached. I will be developing
            few solutions (mostly UI widgets / components in Chakra UI) to address problem statements
            while designing/redesigning a product.

           
          </Text>
          
          <Heading>
            Summary of the current Project
          </Heading>
          <Text>
            Assuming that our current product deals with mid-size Travel/Tourism related transactions. There are
            few problem statements which we can address to improvise both functionaly and operationally.


          </Text>
          <List spacing={3}>
              <ListItem>
                <ListIcon as={FcPlus} color='green.500' />
                <Badge>UX enhancement</Badge> 
                A cost prediction widget consisting of itinerary wise breakdown. 
                
                
              </ListItem>
              <ListItem>
                <ListIcon as={FcPlus} color='green.500' />
                <Badge>Upselling</Badge> 
                An additional CTA (Call To Action) attracting nearby touring locations.
                
              </ListItem>
              <ListItem>
                
                <ListIcon as={FcPlus} color='green.500' />
                <Badge>Elaboration</Badge> 
                A widget classifying dining options along with the charges if it is
                exclusive of the package.
                
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={FcPlus} color='green.500' />
                <Badge>Customer Retention</Badge> 
                An enhancement to wishlist functionality which would increase the engagement rate 
                with the product.
                
              </ListItem>
            </List> 
        </Stack>
      </Container>
    </>
  );
}

export default App;
