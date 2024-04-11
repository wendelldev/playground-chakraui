import { BsBarChart } from "react-icons/bs";
import { SidenavItem } from "./sidenav-items/sidenav-items";
import { BiChalkboard, BiMap } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import SidenavContainer from "./sidenav-container/sidenav-container";
import Sidenav from "./sidenav";
import Header from "../header/header";

export default function SideNavComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems: SidenavItem[] = [
    { icon: BsBarChart, label: "Dashboard", to: "/" },
    { icon: BiChalkboard, label: "Sign-In", to: "/auth/signin" },
    { icon: BiMap, label: "Sign-Up", to: "/auth/signup" },
    { icon: FiSettings, label: "Settings", to: "settings" },
  ];

  return (
    <SidenavContainer sidenav={<Sidenav navItems={navItems} />}>
      <main>
        <div className="App">
          <Header />
          {children}
        </div>
      </main>
    </SidenavContainer>
  );
}
