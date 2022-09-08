/* eslint-disable react/prop-types */
import React from "react";
import { Button, Text, Box, VStack, Flex } from "@chakra-ui/react";

import axios from "axios";

const TermsAndConditions = ({
  handleNextPage,
  goBackPage,
  subCategory,
  documentURI,
}) => {
  const [loading, setLoading] = React.useState(true);
  const [documentSrc, setDocumentSrc] = React.useState();
  const [dimensions, setDimensions] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const URI = documentURI;
    axios
      .get(URI)
      .then((response) => {
        if (response.status !== 200) setDocumentSrc("404.html");
        else {
          const body = response.data;
          setDocumentSrc(body);
        }
      })
      .catch(() => {
        setDocumentSrc("404.html");
      });
  }, [documentURI]);

  React.useLayoutEffect(() => {
    const root = document.querySelector("#document-root");
    setDimensions({ x: root.clientWidth - 20, y: root.clientHeight / 2 });
  }, [dimensions.x, dimensions.y]);

  return (
    <>
      <VStack flexDirection="row">
        <Text
          fontSize="28px"
          color="brand.secondary.500"
          mt={0}
          fontWeight="bold"
          mr={4}
        >
          New Appointment:
        </Text>
        <Text fontSize="2xl" ml="11px" mt={0}>
          {subCategory?.name}
        </Text>
      </VStack>
      <VStack
        alignItems="flex-end"
        justifyContent="flex-end"
        flexDirection="row-reverse"
        flexWrap="wrap"
        alignContent="center"
        m="auto"
      >
        <Flex
          justifyContent="space-around"
          alignItems="flex-end"
          alignContent="flex-start"
          flexDirection="column"
        >
          <Box
            id="document-root"
            style={{ height: 480, width: 670, overflow: "hidden" }}
            className={`p-2 overflow-y-auto rounded-xl border-purple-600 border-2 bg-white ${
              !loading ? "opacity-100" : "opacity-0"
            }`}
          >
            {documentSrc && (
              <embed
                src={documentSrc}
                onLoad={() => setLoading(false)}
                onLoadedData={() => setLoading(false)}
                width={650}
                height={460}
              />
            )}
          </Box>
          <Flex flexDirection="row-reverse" pt={4} mr={1}>
            <Button
              variant="secondary"
              size="lg"
              text="I Agree"
              onClick={handleNextPage}
            >
              I Agree
            </Button>
            <Button
              mr="28px"
              size="lg"
              variant="kioskDefault"
              text="Cancel"
              onClick={goBackPage}
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default TermsAndConditions;
