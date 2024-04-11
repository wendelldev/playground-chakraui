"use client";

import { ChakraProvider, IconButton } from "@chakra-ui/react";
import SidenavProvider from "./components/sidenav/sidenav-context/sidenav-context";
import SideNavComponent from "./components/sidenav/sidenav-component";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <SidenavProvider>
        <SideNavComponent>{children}</SideNavComponent>
      </SidenavProvider>
    </ChakraProvider>
  );
}
