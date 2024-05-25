
import GroupIcon from "@mui/icons-material/Group";;
import { Role } from "@/types/common";
import { ROLE } from "@/constants/role";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import LockResetIcon from '@mui/icons-material/LockReset';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
export const drawerItems = (role: Role) => {
  const roleData: any = [];

  switch (role) {
    case ROLE.USER:
      roleData.push(
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: AccountCircleIcon,
        },
        {
          title: "Claim Requests",
          path: `${role}/claim-request`,
          icon: GroupIcon,
        },
        {
          title: "Lost Items",
          path: `${role}/lost-item`,
          icon: ContentPasteSearchIcon,
        },
        {
          title: "Found Items",
          path: `${role}/found-item`,
          icon: InventoryIcon,
        },
        {
          title: "Change Password",
          path: `${role}/change-password`,
          icon: LockResetIcon,
        },
        {
          title: "Edit Profile",
          path: `${role}/edit-profile`,
          icon: EditIcon,
        },
      );
      break;
    case ROLE.ADMIN:
      roleData.push(
        {
          title: "Manage User",
          path: `${role}`,
          icon: ManageAccountsIcon,
        },
        {
          title: "Dashboard",
          path: `${role}/dashboard`,
          icon: GroupIcon,
        },
      );
      break;

    default:
      break;
  }

  return roleData;
};