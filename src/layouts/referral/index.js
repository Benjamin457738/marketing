// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Table
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from "@mui/material";
import MDTypography from "components/MDTypography";
import Clipboard from "components/MDCopliboard";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function createData(
 useremail,
 friendemail,
 date
) {
  return { useremail, friendemail, date };
}

const rows = [
  createData('aaa@aaa.com', 'bbb@bbb.com', '2024-9-10'),
  createData('aaa@aaa.com', 'ccc@bbb.com', '2024-9-10'),
  createData('aaa@aaa.com', 'ddd@bbb.com', '2024-9-10')

];

function Referral() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Card item lg={8} sx={{ height: "100%" }}>
              <MDTypography component="div" variant="button" color="text" fontWeight="light" padding="50px">
              <h1>Share Private-Marketing with  friends</h1><br/>
               <h4>Refer friends to Private-Marketing and receive to update high level Matrix</h4><br/>
               <li>If you refer 10 friends to Private-Marketing, you can active Matrix ECN</li>
               <li>If you refer 25 friends to Private-Marketing, you can active Matrix Boost</li>
               <li>If you refer 50 friends to Private-Marketing, you can active Double Matrix and  Dubai vacation (Visa + Hotel + Tickets)</li>
               <Clipboard/>
              </MDTypography>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      <MDBox mt={5.5}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <TableContainer component={Paper} lg={10}>
              <Table sx={{minWidth: 650 }} size="small" aria-label="a dense table">
                <TableBody>
                  <TableRow>
                    <TableCell><h3>User Email</h3></TableCell>
                    <TableCell align="right"><h3>Friend Email</h3></TableCell>
                    <TableCell align="right"><h3>Referral Date</h3></TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" px={50}>
                        {row.useremail}
                      </TableCell>
                      <TableCell align="right">{row.friendemail}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Referral;
