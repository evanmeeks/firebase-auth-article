import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
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

import "./Reset.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Reset Password</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              mb="3"
            />
            <Button
              onClick={() => sendPasswordReset(email)}
              colorScheme={"blue"}
              variant={"solid"}
              width="100%"
            >
              Send password reset email
            </Button>
          </FormControl>

          <Stack spacing={6}>
            <VStack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Flex
                alignItems="center"
                flexWrap="wrap"
                flexDirection="column"
                width="100%"
              >
                <Link color={"blue.500"}>
                  <RouterLink to="/">Back to Sign In</RouterLink>
                </Link>
              </Flex>
            </VStack>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default Reset;
