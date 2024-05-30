import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarItem = ({ item }: any) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem disablePadding
      sx={{
        ... (pathname === linkPath ? {
            borderRight:"3px solid #4a536b",
            "& svg":{
                color:"#4a536b"
            }
        }:{})

      }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarItem;
