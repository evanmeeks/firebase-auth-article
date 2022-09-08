import React, { useEffect, useState } from "react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  signInWithGit,
} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleIcon } from "./icons/GoogleIcon";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import {
  Button,
  Center,
  Box,
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
  //
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/git-auth",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Flex
            border="1px solid #ccc"
            borderRadius="xl"
            boxShadow="18px"
            justifyContent="flex-end"
            alignItems="center"
            top="25vh"
            mb="20vh"
            left="38%"
            flexWrap="wrap"
            p="20px"
            flexDirection="column"
          >
            <RouteLink to="resume" color="blue.500">
              <Box fontSize={["1.75rem"]} color="blue.500">
                Evan Meeks Resume
              </Box>
            </RouteLink>
            <Flex fontSize="2xl">
              <a
                as="a"
                href="mailto:evan.meeks@gmail.com"
                fontSize="xl"
                color="green.500"
              >
                evan.meeks@gmail.com
              </a>
            </Flex>
            <Box fontSize="xl" color="blue.500">
              512-518-8920
            </Box>
          </Flex>
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
              <Button
                onClick={signInWithGit}
                colorScheme={"white"}
                variant={"outline"}
                color="blue.500"
                leftIcon={
                  <svg
                    height="22"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="22"
                    data-view-component="true"
                    class="octicon octicon-mark-github v-align-middle"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                }
                width="100%"
              >
                Sign In with GitHub
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
