import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  VStack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import { GoogleIcon } from "./icons/GoogleIcon";

import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <Flex minH={"100vh"} minW="100vw" align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Create Account</Heading>
          <Text fontStyle="italic" fontSize={"lg"} color={"gray.600"}>
            To get your caeer orgainzed in a snap 🫰
          </Text>
          +
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="full-name">
              <FormLabel>Full Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="full-name"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <VStack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  width="100%"
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={register}
                >
                  Register
                </Button>
                <Button
                  leftIcon={<GoogleIcon />}
                  width="100%"
                  color="blue.500"
                  variant="outline"
                  onClick={signInWithGoogle}
                >
                  Register with Google
                </Button>

                <div>
                  Already have an account?{" "}
                  <Link color="blue.500">
                    <RouteLink to="/">Login</RouteLink>
                  </Link>{" "}
                  now.
                </div>
              </VStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Register;
