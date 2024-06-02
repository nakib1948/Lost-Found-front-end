import { Box, Divider, List, Stack, Typography } from "@mui/material";
import * as React from "react";
import Link from "next/link";
import { getUserInfo } from "@/services/authService";
import logo from "@/assets/lost_found-logo.png";
import Image from "next/image";
import SideBarItem from "./sidebarModule";
import { drawerItems } from "@/utils/drawerData";
import { Role } from "@/types/common";
const Sidebar = () => {
  const [role, setRole] = React.useState("");
  React.useEffect(() => {
    const user = getUserInfo();
    setRole(user.role.toLowerCase());
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
       
        gap={1}
        alignItems="center"
        sx={{
          py: 1,
          mt: 3,
          ml:1
        }}
        component={Link}
        href="/"
      >
        <Image src={logo} width={40} height={40} alt="logo" />
        <Typography variant="h6" component="h1">
          Lost and Found
        </Typography>
      </Stack>
      <Divider />
      <List  sx={{mt:2}}>
        {drawerItems(role as Role).map((item:any, index:number) => (
          <SideBarItem key={index} item={item} index={0} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
