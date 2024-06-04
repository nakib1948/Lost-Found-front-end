"use client";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import {
  useGetAllUserQuery,
  useUpdateStatusMutation,
} from "@/redux/api/userApi";
import { Box, Button, IconButton, Typography } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "sonner";
import Loading from "@/Components/Loading/Loading";

const ManageUsers = () => {
  const { data, isLoading, refetch } = useGetAllUserQuery(undefined);
  const [updateStatus, { isLoading: updating }] = useUpdateStatusMutation();
  const handleDelete = async (id: string, status: string) => {
    const updateData = {
      id,
      status,
    };

    try {
      const updateResponse = await updateStatus(updateData);
      if (updateResponse.data.success) {
        toast.success(updateResponse.data.message);
      }
      refetch();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <>
            {row.isDeleted === "block" ? (
              <IconButton
                onClick={() => {
                  handleDelete(row.id, "unblock");
                }}
              >
                <BlockIcon sx={{ color: "green" }} />
                <Typography>unblock</Typography>
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  handleDelete(row.id, "block");
                }}
              >
                <BlockIcon sx={{ color: "red" }} />
                <Typography>block</Typography>
              </IconButton>
            )}
          </>
        );
      },
    },
  ];

  return (
    <Box>
      <HeaderSection title="Manage User" subTitle="" />
      {isLoading ? (
        <Loading />
      ) : (
        <DataGrid
          sx={{ mt: 2 }}
          hideFooterPagination
          rows={data?.data}
          columns={columns}
        />
      )}
    </Box>
  );
};

export default ManageUsers;
