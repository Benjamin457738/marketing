// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ComplexStatisticsCardProfit from "examples/Cards/StatisticsCards/ComplexStatisticsCardProfit";
import ComplexStatisticsCardProfitRate from "examples/Cards/StatisticsCards/ComplexStatisticsCardProfitRate";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import MDTypography from "components/MDTypography";
import { Card } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDUpdate from "components/MDUpdate";
import MDSwitch from "components/MDSwitch";
import reportsLineChartDataMatrixECN from "./data/reportsLineChartDataMatrixECN";
import reportsLineChartDataMatrixBoost from "./data/reportsLineChartDataMatrixBoost";
import reportsLineChartDataDoubleMatrix from "./data/reportsLineChartDataDoubleMatrix";

function Dashboard() {
  const { sales } = reportsLineChartData;
  const { salesTwo } = reportsLineChartDataMatrixECN;
  const { salesThree } = reportsLineChartDataMatrixBoost;
  const { salesFour } = reportsLineChartDataDoubleMatrix;


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
              <ComplexStatisticsCardProfit
                color="primary"
                icon="leaderboard"
                title="Profit"
                count="$2,300"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCardProfitRate
                color="error"
                icon="store"
                title="Profit+"
                count="$34"
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
        <MDSwitch/>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
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
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="primary"
                  title="Matrix ECN Sales Counts"
                  description={
                    <>
                      increase in month sales counts.
                    </>
                  }
                  date="Real-time updates"
                  chart={salesTwo}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="warning"
                  title="Matrix Boost Sales Counts"
                  description={
                    <>
                      increase in month sales counts.
                    </>
                  }
                  date="Real-time updates"
                  chart={salesThree}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="error"
                  title="Double Matrix Sales Counts"
                  description={
                    <>
                      increase in month sales counts.
                    </>
                  }
                  date="Real-time updates"
                  chart={salesFour}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Card item lg={10} sx={{ height: "95%" }}>
                <MDTypography component="div" variant="button" color="dark" fontWeight="bold" padding="50px">
                  <MDUpdate />
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
