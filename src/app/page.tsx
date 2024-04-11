"use client";

import { Avatar, Box, Card, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import GradientCard from "./components/gradient-card/gradient-card";

export default function Home() {
  return (
    <Box pt={5}>
      <GradientCard />
    </Box>
  );
}
