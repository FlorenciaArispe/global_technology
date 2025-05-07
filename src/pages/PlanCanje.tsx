import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Text,
    Image,
    Divider,
    VStack,
    HStack,
    Icon,
  } from "@chakra-ui/react";
  import { ChevronRightIcon, InfoIcon } from "@chakra-ui/icons";
  
  const PlanCanje = () => {
    return (
      <Box w="100%" px={4} mt={{ base: "65px", md: "80px" }} maxW="900px" mx="auto">
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb={4}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/plan-canje">Plan Canje</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
  
        <Heading size="md" mb={4}>Plan Canje</Heading>
  
        <Image src="/images/plan-canje.png" alt="Plan Canje" w="100%" objectFit="cover" mb={6} />
  
        <Heading textAlign="center" size="lg" mb={2}>
          Tomamos tu iPhone usado como parte de pago
        </Heading>
  
        <Text fontSize="md" textAlign="center" mb={10}>
          Se realiza de forma presencial para poder chequear el estado del equipo y así darte una cotización estimada.
        </Text>

<VStack align="start" spacing={12} mb={8}>
  <VStack align="start" spacing={2}>
    <HStack spacing={4} align="center">
      <Box
        bg="#efebe5"
        color="gray.900"
        rounded="full"
        w="50px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="xl"
        fontWeight="bold"
      >
        1
      </Box>
      <Heading size="sm">PASO 1</Heading>
    </HStack>
    <Text mt={2}>
      Envíanos fotos y videos del equipo, junto con la condición de la batería. Te decimos el precio al que te lo tomamos.
    </Text>
  </VStack>

  <VStack align="start" spacing={2}>
    <HStack spacing={4} align="center">
      <Box
        bg="#efebe5"
        color="gray.900"
        rounded="full"
        w="50px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="lg"
        fontWeight="bold"
      >
        2
      </Box>
      <Heading size="sm">PASO 2</Heading>
    </HStack>
    <Text mt={2}>
      Podés elegir cualquiera de los equipos que tengamos, tanto sellados como usados premium.
    </Text>
  </VStack>

  <VStack align="start" spacing={2}>
    <HStack spacing={4} align="center">
      <Box
        bg="#efebe5"
        color="gray.900"
        rounded="full"
        w="50px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="lg"
        fontWeight="bold"
      >
        3
      </Box>
      <Heading size="sm">PASO 3</Heading>
    </HStack>
    <Text mt={2}>
      Con la suma de la cotización del tuyo más la diferencia, que puede ser en cualquier medio de pago, te llevás tu iPhone nuevo.
    </Text>
  </VStack>
</VStack>


  
        <Divider mb={6} />

        <VStack align="start" spacing={4} mb={16}>
          <HStack align="start">
            <Icon as={InfoIcon} color="blue.500" mt={1} />
            <Box bg="gray.50" p={3} rounded="md" border="1px solid" borderColor="gray.200">
              <Text>
                El valor del equipo dependerá de la condición en la que esté, tanto a nivel estético (rayones, marcas, etc.)
                como de la condición de la batería.
              </Text>
            </Box>
          </HStack>
          <HStack align="start">
            <Icon as={InfoIcon} color="blue.500" mt={1} />
            <Box bg="gray.50" p={3} rounded="md" border="1px solid" borderColor="gray.200">
              <Text>
                Antes de hacer el cambio deberás realizar el respaldo iCloud para no perder los datos y evitar demoras
                al pasarlos. Igualmente podemos ayudarte con el proceso al venir a hacer el canje.
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    );
  };
  
  export default PlanCanje;
  