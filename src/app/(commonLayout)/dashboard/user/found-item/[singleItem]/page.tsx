"use client";
import React, { useState } from "react";
import Loading from "@/Components/Loading/Loading";
import {
  useGetSingleProductClaimQuery,
  useUpdateClaimStatusMutation,
} from "@/redux/api/claimApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ProofCard from "./component/ProofCard";
import { toast } from "sonner";

const SingleItem = ({ params }: { params: { singleItem: string } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const { data, isLoading, refetch } = useGetSingleProductClaimQuery(
    params.singleItem
  );
  const [updateClaimStatus, { isLoading: updating }] =
    useUpdateClaimStatusMutation();

  if (isLoading) {
    return <Loading />;
  }
  const handleChangeStatus = async (id: string) => {
    const data = {
      id,
      foundItemId: params.singleItem,
    };
    try {
      const updateResponse = await updateClaimStatus(data);
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
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "abc",
      headerName: "Proof",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <>
            <Button
              onClick={() => {
                setSelectedRow(row);
                setIsModalOpen(true);
              }}
            >
              See Proof
            </Button>
          </>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Stack direction="row" alignItems="center" justifyContent="center">
            {!data.data.checkStatus.length ? (
              <Button
                onClick={() => handleChangeStatus(row.id)}
                aria-label="approve"
              >
                <CheckCircleIcon /> approve
              </Button>
            ) : (
              <Typography variant="body2">{row.status}</Typography>
            )}
          </Stack>
        );
      },
    },
  ];

  return (
    <div>
      <DataGrid rows={data?.data?.data} columns={columns} hideFooterPagination />
      {selectedRow && (
        <ProofCard
          open={isModalOpen}
          setOpen={setIsModalOpen}
          data={selectedRow}
        />
      )}
    </div>
  );
};

export default SingleItem;
