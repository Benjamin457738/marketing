import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Deposit from "layouts/deposit"
import Referral from "layouts/referral"

// @mui icons
import Icon from "@mui/material/Icon";
import Withdraw from "layouts/withdraw";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Deposit",
    key: "deposit",
    icon: <Icon fontSize="small">payment</Icon>,
    route: "/deposit",
    component: <Deposit/>,
  },
  {
    type: "collapse",
    name: "Withdraw",
    key: "withdraw",
    icon: <Icon fontSize="small">payments</Icon>,
    route: "/withdraw",
    component: <Withdraw/>,
  },
  {
    type: "collapse",
    name: "Referral",
    key: "referral",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/referral",
    component: <Referral />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
