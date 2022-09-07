import React, { useEffect, useState } from "react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleIcon } from "./icons/GoogleIcon";

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  VStack,
  FormLabel,
  Text,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <VStack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Button
                onClick={() => logInWithEmailAndPassword(email, password)}
                bg={"blue.400"}
                color={"white"}
                width="100%"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
              <Button
                onClick={signInWithGoogle}
                colorScheme={"white"}
                variant={"outline"}
                color="blue.500"
                leftIcon={<GoogleIcon />}
                width="100%"
              >
                Sign In With Google
              </Button>
              <Flex
                alignItems="center"
                flexWrap="wrap"
                flexDirection="column"
                width="100%"
              >
                <Link color={"blue.500"}>
                  <RouteLink to="/reset">Forgot password?</RouteLink>
                </Link>
                <Text>
                  Don't have an account?{" "}
                  <Link color={"blue.500"}>
                    <RouteLink to="/register">Register</RouteLink> now.
                  </Link>
                </Text>
              </Flex>
            </VStack>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default Login;
