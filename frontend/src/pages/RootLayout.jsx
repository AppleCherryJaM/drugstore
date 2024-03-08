import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
return <>
  <Header />
  <h1>Root Page</h1>
  <Outlet />
</>
}

export default RootLayout;