import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const bettingOptions = ["0-12", "2 to 1", "Even/Odd", "Red/Black", "1-6", "4-9", "7-12"];

const RouletteTable = () => {
  const [bets, setBets] = useState({});

  const handleDrop = (event, option) => {
    event.preventDefault();
    const jetonValue = event.dataTransfer.getData("text");
    setBets((prev) => ({ ...prev, [option]: (prev[option] || 0) + parseInt(jetonValue) }));
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <Box display="flex" justifyContent="center" p={4}>
      {bettingOptions.map((option) => (
        <Box key={option} onDrop={(event) => handleDrop(event, option)} onDragOver={allowDrop} w="100px" h="50px" bg="gray.200" m={1} display="flex" alignItems="center" justifyContent="center" borderRadius="md">
          <Text fontSize="sm">{option}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default RouletteTable;
