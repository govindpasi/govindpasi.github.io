import logo from "./logo.svg";
import "./App.css";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  CardFooter,
  VStack,
  Circle,
  Link,
  HStack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaPhoneSquareAlt,
  FaHeart,
  FaHamburger,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiGmail,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { MdDownload } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import GitHubCalendar from "react-github-calendar";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useMediaQuery } from "@chakra-ui/react"
const big = require("./assests/bigbasket.com.png");
const sephora = require("./assests/sephora.com.png");
const spotify = require("./assests/spotify.com.png");
const govind_profile = require("./assests/govind_profile.jpg");
const govind_resume = require("./assests/Govind-Pasi-Resume.pdf");
function App() {
  const { isOpen, onToggle } = useDisclosure();

  const [isLaptop] = useMediaQuery("(min-width: 512px)") 

  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    if(isOpen){

      let timerId =setTimeout(() => {
          onToggle();
          clearTimeout(timerId);
      }, 1000);
    }
  };

  useEffect(()=>{

    if(isOpen){
      onToggle()
    }

  },[isLaptop])

  return (
    <div className="App">
      <Box
        className="main-wrapper"
        bgImage={"linear-gradient(#f5f5f5, #f5f5f5);"}
      >
        <Box
          id="nav-menu"
          pos={"sticky"}
          top={"0"}
          zIndex={"10"}
          boxShadow={"rgba(0, 0, 0, 0.05) 0px 3px 9px -1px;"}
        >
          <Flex
            justify={"space-between"}
            alignItems={"center"}
            bg={"white"}
            p={"10px 25px"}
          >
            <Box>
              <Heading color={"#1B3C65"} fontSize={"xl"}>
               {isLaptop ? "Govind" : "GP"}
              </Heading>
            </Box>
            <Box>
              <ButtonGroup
                spacing={"10px"}
                alignItems={"center"}
                className="nav-btn-grp"
              >
                <Button
                  onClick={() => handleClick(home)}
                  className="nav-link home"
                  bg={"transparent"}
                  size={{ md: "sm", sm: "xs" }}
                  p={"8px 15px"}
                  color={"#1B3C65"}
                  borderRadius={"0"}
                  _hover={{ borderBottom: "2px solid #1B3C65" }}
                >
                  Home
                </Button>
                <Button
                  onClick={() => handleClick(about)}
                  className="nav-link about"
                  bg={"transparent"}
                  size={{ md: "sm", sm: "xs" }}
                  p={"8px 15px"}
                  color={"#1B3C65"}
                  borderRadius={"0"}
                  _hover={{ borderBottom: "2px solid #1B3C65" }}
                >
                  About
                </Button>
                <Button
                  onClick={() => handleClick(skills)}
                  className="nav-link skills"
                  bg={"transparent"}
                  size={{ md: "sm", sm: "xs" }}
                  p={"8px 15px"}
                  color={"#1B3C65"}
                  borderRadius={"0"}
                  _hover={{ borderBottom: "2px solid #1B3C65" }}
                >
                  Skills
                </Button>
                <Button
                  onClick={() => handleClick(projects)}
                  className="nav-link projects"
                  bg={"transparent"}
                  size={{ md: "sm", sm: "xs" }}
                  p={"8px 15px"}
                  color={"#1B3C65"}
                  borderRadius={"0"}
                  _hover={{ borderBottom: "2px solid #1B3C65" }}
                >
                  Projects
                </Button>
                <Button
                  onClick={() => handleClick(contacts)}
                  className="nav-link contact"
                  bg={"transparent"}
                  size={{ md: "sm", sm: "xs" }}
                  p={"8px 15px"}
                  color={"#1B3C65"}
                  borderRadius={"0"}
                  _hover={{ borderBottom: "2px solid #1B3C65" }}
                >
                  Contact
                </Button>
                <Button
                  className="nav-link resume"
                  as={"a"}
                  variant={"outline"}
                  borderRadius={"50"}
                  _hover={{ bg: "white", color: "#1B3C65" }}
                  size={"xs"}
                  href={govind_resume}
                  rel="noreferrer"
                  download={govind_resume}
                >
                  Resume
                </Button>
                <Icon
                  onClick={onToggle}
                  as={isOpen ? GrClose : GiHamburgerMenu}
                  display={"none"}
                  id="menu-btn"
                />
              </ButtonGroup>
              <Collapse  in={isOpen} animateOpacity >
                <Box
                  
                  pos={"absolute"}
                  right={"0"}
                  width={"100%"}
                  p="40px"
                  color="white"
                  mt="2"
                  bg="white"
                  shadow="md"
                >
                  <VStack>
                    <Button
                      onClick={() => handleClick(home)}
                      className="nav-link home"
                      bg={"transparent"}
                      size={{ md: "sm", sm: "xs" }}
                      p={"8px 15px"}
                      color={"#1B3C65"}
                      borderRadius={"0"}
                      _hover={{ borderBottom: "2px solid #1B3C65" }}
                    >
                      Home
                    </Button>
                    <Button
                      onClick={() => handleClick(about)}
                      className="nav-link about"
                      bg={"transparent"}
                      size={{ md: "sm", sm: "xs" }}
                      p={"8px 15px"}
                      color={"#1B3C65"}
                      borderRadius={"0"}
                      _hover={{ borderBottom: "2px solid #1B3C65" }}
                    >
                      About
                    </Button>
                    <Button
                      onClick={() => handleClick(skills)}
                      className="nav-link skills"
                      bg={"transparent"}
                      size={{ md: "sm", sm: "xs" }}
                      p={"8px 15px"}
                      color={"#1B3C65"}
                      borderRadius={"0"}
                      _hover={{ borderBottom: "2px solid #1B3C65" }}
                    >
                      Skills
                    </Button>
                    <Button
                      onClick={() => handleClick(projects)}
                      className="nav-link projects"
                      bg={"transparent"}
                      size={{ md: "sm", sm: "xs" }}
                      p={"8px 15px"}
                      color={"#1B3C65"}
                      borderRadius={"0"}
                      _hover={{ borderBottom: "2px solid #1B3C65" }}
                    >
                      Projects
                    </Button>
                    <Button
                      onClick={() => handleClick(contacts)}
                      className="nav-link contact"
                      bg={"transparent"}
                      size={{ md: "sm", sm: "xs" }}
                      p={"8px 15px"}
                      color={"#1B3C65"}
                      borderRadius={"0"}
                      _hover={{ borderBottom: "2px solid #1B3C65" }}
                    >
                      Contact
                    </Button>
                    <Button
                      id="resume-button-1"
                      as={"a"}
                      variant={"outline"}
                      borderRadius={"50"}
                      _hover={{ bg: "white", color: "#1B3C65" }}
                      size={"xs"}
                      href={govind_resume}
                      rel="noreferrer"
                      target="_blank"
                      download={govind_resume}
                    >
                      Resume
                    </Button>
                  </VStack>
                </Box>
              </Collapse>
            </Box>
          </Flex>
        </Box>
        {/* <Divider py={'10px'}/> */}
        <Box
          ref={home}
          id="home"
          className="content-wrapper"
          m={"15px"}
          mt={isOpen ? "23%" : "15px"}
        >
          <Box  >
            <Flex columnGap={"10px"}>
              <Box h={"300px"} flex={"1"}>
                <Container h={"100%"}>
                  <Stack
                    direction={"column"}
                    spacing={"5"}
                    alignItems={"flex-start"}
                    h={"100%"}
                    justify={"center"}
                  >
                    <HStack gap={"10px"}>
                      <Heading as={"h3"} fontSize={"lg"} id="user-detail-name">
                        Hi,
                      </Heading>
                      <Image
                        width={"2.5rem"}
                        src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                      />
                    </HStack>

                    <Heading
                      fontSize={"1.8rem"}
                      colorScheme={"#1B3C65"}
                      id="user-detail-name"
                    >
                      My name is Govind Pasi
                    </Heading>
                    <Text className="intro" minH={"1.5rem"}>
                      <Typewriter
                        words={["I am a Full Stack Developer."]}
                        loop
                      />
                    </Text>
                    <ButtonGroup spacing={"5"}>
                      <Button
                        id="resume-button-2"
                        as={"a"}
                        variant={"outline"}
                        borderRadius={"0"}
                        _hover={{ bg: "white", color: "#1B3C65" }}
                        size={"xs"}
                        href={govind_resume}
                        target="_blank"
                        rel="noreferrer"
                        rightIcon={<MdDownload/>}
                        download={govind_resume}

                      >
                        Resume
                      </Button>
                      <Button
                        as={"a"}
                        variant={"outline"}
                        borderRadius={"0"}
                        _hover={{ bg: "white", color: "#1B3C65" }}
                        size={"xs"}
                        href={'https://drive.google.com/file/d/1zqeXUijXBtj_Y8BkkUlNEaADcOj723VJ/view?usp=sharing'}
                        rel="noreferrer"
                        target="_blank"
                        rightIcon={<AiFillEye/>}
                        
                      >
                        Resume
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Container>
              </Box>
              <Box h={"300px"} flex={"1"}>
                <Flex justify={"center"} alignItems={"center"} h={"100%"}>
                  <Image
                    className="home-img"
                    src={govind_profile}
                    alt="Govind Pasi"
                    width={"16rem"}
                    clipPath={"circle()"}
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Divider colorScheme="twitter" my={"10px"} />
          <section  ref={about} id="about">
          <Center>
            <Heading
              fontSize={"2xl"}
              color={"#1B3C65"}
              my={"20px"}
              textTransform={"uppercase"}
            >
              About Me
            </Heading>
          </Center>
          <Box
           
            
            class="about section"
            boxShadow={
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
            }
          >
            <Container p={"20px 10px"} maxW="100%" bg={"white"}>
              <Stack direction={"row"} alignItems={"center"} spacing={"4"}>
                <Image
                  src="https://static.vecteezy.com/system/resources/previews/004/865/921/original/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
                  w={"30%"}
                />

                <Stack borderRadius={"8"} p={"1rem"} bg={"gray.100"}>
                  <Text>Hello I'm Govind Pasi</Text>
                  <p id="user-detail-intro">
                    "Highly motivated Full Stack Developer with a strong
                    foundation in programming principles, experience working
                    with various technologies, and hands-on experience in
                    building responsive web applications using HTML, CSS,
                    JavaScript, and popular libraries such as React.
                  </p>
                  <p>
                    {" "}
                    Skilled in back-end development using Node.js and NoSQL
                    databases such as MongoDB. Strong communication and
                    problem-solving skills with a passion for continuous
                    learning and growth.
                  </p>
                  <p>
                    {" "}
                    Seeking an opportunity to apply and expand my knowledge in a
                    dynamic and challenging environment."
                  </p>
                </Stack>
              </Stack>
            </Container>
          </Box>
          </section>
          <Divider colorScheme="twitter" my={"10px"} />
          <section  ref={skills} id="skills">
          <Center>
            <Heading
              fontSize={"2xl"}
              color={"#1B3C65"}
              my={"20px"}
              textTransform={"uppercase"}
            >
              Skills
            </Heading>
          </Center>
          <Box
           
            
            boxShadow={
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
            }
          >
            <Container p={"20px 10px"} maxW="100%" bg={"white"}>
              <Grid
                templateColumns={{
                  lg: "repeat(8,1fr)",
                  md: "repeat(6,1fr)",
                  sm: "repeat(3,1fr)",
                  base: "repeat(2,1fr)",
                }}
                gap={"20px"}
              >
                <GridItem>
                  <Card>
                    <CardBody p={"10px"}>
                      <Icon
                        className="skills-card-img"
                        as={FaHtml5}
                        boxSize={"100%"}
                        color={"#e44d26"}
                      />
                      <Stack direction={"column"} alignItems={"center"}>
                        <Text className="skills-card-name">HTML5</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody p={"10px"}>
                      <Icon
                        className="skills-card-img"
                        as={FaCss3Alt}
                        boxSize={"100%"}
                        color={"#196db1"}
                      />
                      <Stack direction={"column"} alignItems={"center"}>
                        <Text className="skills-card-name">CSS3</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody p={"10px"}>
                      <Icon
                        className="skills-card-img"
                        as={FaReact}
                        boxSize={"100%"}
                        color={"#5ccfee"}
                      />
                      <Stack direction={"column"} alignItems={"center"}>
                        <Text className="skills-card-name">React</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody p={"10px"}>
                      <Icon
                        className="skills-card-img"
                        as={FaGithub}
                        boxSize={"100%"}
                        color={"black"}
                      />
                      <Stack direction={"column"} alignItems={"center"}>
                        <Text className="skills-card-name">Git/Github</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody p={"10px"}>
                      <Icon
                        className="skills-card-img"
                        as={SiMongodb}
                        boxSize={"100%"}
                        color={"#008d42"}
                      />
                      <Stack direction={"column"} alignItems={"center"}>
                        <Text className="skills-card-name">MongoDb</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody p={"10px"}>
                      <Icon
                        className="skills-card-img"
                        as={SiJavascript}
                        boxSize={"100%"}
                        color={"#e8d349"}
                      />
                      <Stack direction={"column"} alignItems={"center"}>
                        <Text className="skills-card-name">Javascript</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody p={"10px"}>
                      <Icon
                        className="skills-card-img"
                        as={SiNodedotjs}
                        boxSize={"100%"}
                        color={"#8db73d"}
                      />
                      <Stack direction={"column"} alignItems={"center"}>
                        <Text className="skills-card-name">NodeJs</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card>
                    <CardBody p={"10px"}>
                      <Icon
                        className="skills-card-img"
                        as={SiExpress}
                        boxSize={"100%"}
                        color={"black"}
                      />
                      <Stack direction={"column"} alignItems={"center"}>
                        <Text className="skills-card-name">Express</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
              </Grid>
            </Container>
          </Box>
          </section>
          <Divider colorScheme="twitter" my={"10px"} />
          <section  ref={projects} id="projects">
          <Center>
            <Heading
              fontSize={"2xl"}
              color={"#1B3C65"}
              my={"20px"}
              textTransform={"uppercase"}
            >
              Projects
            </Heading>
          </Center>
          {/* projects section */}
          <Box
           
            
            boxShadow={
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
            }
          >
            <Container p={"20px 10px"} maxW="100%" bg={"white"}>
              <Stack direction={"column"} spacing={"10"}>
                <Card
                  className="project-card"
                  direction={"row"}
                  p={"1rem"}
                  columnGap={"1.5rem"}
                >
                  <Image
                    flex={"1"}
                    src={spotify}
                    w={"30%"}
                    border={"1px solid"}
                    borderRadius={"lg"}
                  />
                  <Stack flex={"2"}>
                    <CardBody>
                      <Heading as={"h3"} fontSize={"lg"} className="project-title">
                        Spotify.com
                      </Heading>
                      <Text className="project-description">Spotify - Web Player: Music for everyone</Text>
                      <Heading as={"h5"} fontSize={"md"}>
                        Teck Stack
                      </Heading>
                      <Text fontSize={"sm"} className="project-tech-stack">
                        HTML | CSS | Javascript | React | Redux | Spotify Web
                        API
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <ButtonGroup spacing={"5"}>
                        <Button
                          className="project-github-link"
                          as={"a"}
                          variant={"outline"}
                          _hover={{ bg: "white", color: "#1B3C65" }}
                          size={"xs"}
                          href="https://github.com/thisiskmv/Spotify-Clone"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          className="project-deployed-link"
                          as={"a"}
                          variant={"outline"}
                          _hover={{ bg: "white", color: "#1B3C65" }}
                          size={"xs"}
                          href="https://spotify-two-virid.vercel.app/"
                          target="_blank"
                        >
                          View
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Stack>
                </Card>
                <Card
                  className="project-card"
                  direction={"row"}
                  p={"1rem"}
                  columnGap={"1.5rem"}
                >
                  <Image
                    flex={"1"}
                    src={sephora}
                    w={"30%"}
                    border={"1px solid"}
                    borderRadius={"lg"}
                  />
                  <Stack flex={"2"}>
                    <CardBody>
                      <Heading as={"h3"} fontSize={"lg"} className="project-title">
                        Sephora.com
                      </Heading>
                      <Text className="project-description">
                        Sephora: Makeup, Skincare, Fragrance, Hair & Beauty
                        Products
                      </Text>
                      <Heading as={"h5"} fontSize={"md"}>
                        Teck Stack
                      </Heading>
                      <Text fontSize={"sm"} className="project-tech-stack">HTML | CSS | Javascript</Text>
                    </CardBody>
                    <CardFooter>
                      <ButtonGroup spacing={"5"}>
                        <Button
                          className="project-github-link"
                          as={"a"}
                          variant={"outline"}
                          _hover={{ bg: "white", color: "#1B3C65" }}
                          size={"xs"}
                          href="https://github.com/kunalgoyat999/sephoraClone"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          className="project-deployed-link"
                          as={"a"}
                          variant={"outline"}
                          _hover={{ bg: "white", color: "#1B3C65" }}
                          size={"xs"}
                          href="  https://creative-dieffenbachia-eb1778.netlify.app/"
                          target="_blank"
                        >
                          View
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Stack>
                </Card>
                <Card
                  className="project-card"
                  direction={"row"}
                  p={"1rem"}
                  columnGap={"1.5rem"}
                >
                  <Image
                    flex={"1"}
                    src={big}
                    w={"30%"}
                    border={"1px solid"}
                    borderRadius={"lg"}
                  />
                  <Stack flex={"2"}>
                    <CardBody>
                      <Heading as={"h3"} fontSize={"lg"} className="project-title">
                        Bigbasket.com
                      </Heading>
                      <Text className="project-description">
                        Largest Online Grocery Store - bigbasket: A TATA
                        Enterprise
                      </Text>
                      <Heading as={"h5"} fontSize={"md"}>
                        Teck Stack
                      </Heading>
                      <Text fontSize={"sm"} className="project-tech-stack">HTML | CSS | Javascript | Bootstrap | Fontawesome</Text>
                    </CardBody>
                    <CardFooter>
                      <ButtonGroup spacing={"5"}>
                        <Button
                          className="project-github-link"
                          as={"a"}
                          variant={"outline"}
                          _hover={{ bg: "white", color: "#1B3C65" }}
                          size={"xs"}
                          href="https://github.com/kunalgoyat999/bigbasket"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          className="project-deployed-link"
                          as={"a"}
                          variant={"outline"}
                          _hover={{ bg: "white", color: "#1B3C65" }}
                          size={"xs"}
                          href="https://dreamy-peony-b35dcc.netlify.app/"
                          target="_blank"
                        >
                          View
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Stack>
                </Card>
              </Stack>
            </Container>
          </Box>
          </section>
          <Divider colorScheme="twitter" my={"10px"} />
          <section ref={contacts}  id="contact">
          <Center>
            <Heading
              fontSize={"2xl"}
              color={"#1B3C65"}
              my={"20px"}
              textTransform={"uppercase"}
            >
              Contact Me
            </Heading>
          </Center>
          <Box
            
           
            boxShadow={
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
            }
          >
            <Container p={"60px 10px"} maxW="100%" bg={"white"}>
              <Stack
                direction={{ md: "row", sm: "column", base: "column" }}
                alignItems={"center"}
              >
                <VStack flex={"1"}>
                  <Icon as={FaLinkedin} color={"blue"} />
                  <Heading as={"h3"} fontSize={"sm"}>
                    <HStack>
                      <Link
                        id="contact-linkedin"
                        href="https://www.linkedin.com/in/govindpasi/"
                        isExternal
                      >
                        {" "}
                        govindpasi
                      </Link>
                      <FiExternalLink />
                    </HStack>
                  </Heading>
                </VStack>
                <VStack flex={"1"}>
                  <Icon as={FaGithub} />
                  <Heading as={"h3"} fontSize={"sm"}>
                    <HStack>
                      <Link
                        id="contact-github"
                        href="https://github.com/govindpasi"
                        isExternal
                      >
                        {" "}
                        govindpasi
                      </Link>
                      <FiExternalLink />
                    </HStack>
                  </Heading>
                </VStack>
                <VStack flex={"1"}>
                  <Icon as={SiGmail} color={"red"} />
                  <Heading as={"h3"} fontSize={"sm"} >
                    <Link
                      id="contact-email"
                      href="mailto:govind.pasi94@gmail.com"
                      isExternal
                    >
                      govind.pasi94@gmail.com
                    </Link>
                  </Heading>
                </VStack>
                <VStack flex={"1"}>
                  <Icon as={FaPhoneSquareAlt} color={"green"} />
                  <Heading as={"h3"} fontSize={"sm"} >
                    <Link
                      id="contact-phone"
                      href="tel:+917990750446"
                      isExternal
                    >
                      7990750446
                    </Link>
                  </Heading>
                </VStack>
              </Stack>
            </Container>
          </Box>
          </section>
          <Divider colorScheme="black" my={"10px"} />
          <Center>
            <Heading
              fontSize={"2xl"}
              color={"#1B3C65"}
              my={"20px"}
              textTransform={"uppercase"}
            >
              Github Stats
            </Heading>
          </Center>
          <Box
            id="github-stats"
            boxShadow={
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
            }
          >
            <Container p={"20px 10px"} maxW="100%" bg={"white"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"0.9em"}
                py={"1rem"}
              >
                <GitHubCalendar
                  username="govindpasi"
                  year={"2023"}
                  colorScheme="light"
                  style={{
                    borderRadius: "5px",
                    border: "1px solid #1B3C65",
                    padding: "10px 15px",
                  }}
                />
              </Box>
              <Divider colorScheme="black" my={"10px"} />
              <Grid
                templateColumns={{
                  md: "repeat(2,1fr)",
                  sm: "1fr",
                  base: "1fr",
                }}
                alignItems={"center"}
                gap={"1rem"}
              >
                <Image
                  width={{ sm: "100%", base: "100%" }}
                  id="github-stats-card"
                  src=" https://github-readme-stats.vercel.app/api?username=govindpasi&show_icons=true&locale=en"
                />
                <Image
                  width={{ sm: "100%", base: "100%" }}
                  id="github-streak-stats"
                  src=" https://github-readme-streak-stats.herokuapp.com/?user=govindpasi"
                />
              </Grid>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"0.9em"}
                py={"1rem"}
              >
               <Image
                  id="github-top-langs"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=govindpasi&layout=compact&bg_color=FFFFFF00&hide_border=true&text_color=6d6b6b&title_color=6d6b6b"
                />
              </Box>
            </Container>
          </Box>
          <Divider colorScheme="black" my={"10px"} />
        </Box>
      </Box>
      <Box bg={"#1B3C65"} color={"white"} py={".5rem"}>
        <Center>
          <Text fontSize={".6rem"}>Made with ❤️ by Govind Pasi</Text>
        </Center>
      </Box>
    </div>
  );
}

export default App;
