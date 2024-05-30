"use client";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import Loading from "@/Components/Loading/Loading";
import { useGetClaimItemQuery } from "@/redux/api/claimApi";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
const ClaimRequest = () => {
  const { data, isLoading, refetch } = useGetClaimItemQuery(undefined);
  
  const columns = [
    { field: "itemName", headerName: "Item", flex: 1 },
    { field: "category", headerName: "category", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "location", headerName: "location", flex: 1 },
    { field: "status", headerName: "status", flex: 1 },
];
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box marginTop={-5}>
        <HeaderSection title="Your claim request" subTitle=""/>
        <DataGrid sx={{mt:2}} hideFooterPagination rows={data?.data} columns={columns}  getRowId={(row) => row.id}/>
    </Box>
  );
};

export default ClaimRequest;
