// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import MDTypography from "components/MDTypography";
import { Card } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Balance"
                count="$1,900"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Profit"
                count="$2,300"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="store"
                title="Profit+"
                count="34"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Referrals"
                count="+91"
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="Matrix II Sales Counts"
                  description={
                    <>
                      increase in month sales counts.
                    </>
                  }
                  date="Real-time updates"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card item lg={8} sx={{ height: "95%" }}>
                <MDTypography component="div" variant="button" color="dark" fontWeight="bold" padding="50px">
                  <h2 style={{"text-align":"center"}}>Currently User Matrix : {}</h2><br/><hr/><br/>
                  <h2 style={{"text-align":"center"}}>Matrix Price Update</h2><br/>
                  <h3 style={{"text-align":"center","color":"black"}}>Matrix II :${}</h3><br/>
                  <h3 style={{"text-align":"center","color":"black"}}>Matrix ECN :${}</h3><br/>
                  <h3 style={{"text-align":"center","color":"black"}}>Matrix Boost :${}</h3><br/>
                  <h3 style={{"text-align":"center","color":"black"}}>Double Matrix :${}</h3><br/>
                  <h4 style={{"text-align":"center","color":"gray"}}>When users buy 1,000 one of matrices, the price of the matrix increases by $0.5</h4>                  
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

export default Dashboard;
