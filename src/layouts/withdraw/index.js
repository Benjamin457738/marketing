// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from "@mui/material";
import MDTypography from "components/MDTypography";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Withdraw() {

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
                <Card item lg={8} sx={{ height: "100%" }}>
                  <MDTypography  component="div" variant="button" color="text" fontWeight="light" padding="50px">
                    Matrix 2:{}
                    M
                  </MDTypography>
                </Card>
            </Grid>
          </Grid>
        </MDBox>
    </DashboardLayout>
  );
}

export default Withdraw;
