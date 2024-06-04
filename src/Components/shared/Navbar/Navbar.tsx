"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import navlogo from "@/assets/lost_found-logo.png";
import Image from "next/image";
import { useGetMYProfileQuery } from "@/redux/api/userApi";
import Link from "next/link";
import { getUserInfo, removeUser } from "@/services/authService";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { tokenKey } from "@/constants/tokenKey";
import { deleteCookies } from "@/services/deleteCookies";
function Navbar() {
  const { data, isLoading, refetch } = useGetMYProfileQuery(undefined);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const user = getUserInfo();
  const router = useRouter();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    removeUser();
    deleteCookies(tokenKey);
    router.push("/");
    router.refresh();
  };

  return (
    <AppBar position="static" sx={{ background: "#46344E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem component={Link} href="/">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem component={Link} href="/allLostItem">
                <Typography textAlign="center">Lost Items</Typography>
              </MenuItem>
              <MenuItem component={Link} href="/allfounditem">
                <Typography textAlign="center">Found Items</Typography>
              </MenuItem>
              {user?.role && (
                <MenuItem
                  component={Link}
                  href={`/dashboard/${user?.role.toLowerCase()}/profile`}
                >
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Box component={Link} href="/" sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <Image src={navlogo} alt="nav-logo" height={35} width={50} />
          </Box>

          <Box
            gap={5}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Typography
              component={Link}
              href="/"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              href="/allLostItem"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Lost Items
            </Typography>
            <Typography
              component={Link}
              href="/allfounditem"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Found Items
            </Typography>
            {user?.role && (
              <Typography
                component={Link}
                href={`/dashboard/${user?.role.toLowerCase()}/profile`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Dashboard
              </Typography>
            )}
          </Box>
          {user ? (
            <>
              {!isLoading && (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={data?.data.image} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <Typography component={Link} href="/" textAlign="center">
                        Home
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
