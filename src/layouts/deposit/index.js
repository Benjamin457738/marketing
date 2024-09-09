// @mui material components
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

function Deposit() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox py={3}>
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
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Deposit;
