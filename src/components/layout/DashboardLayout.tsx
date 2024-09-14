import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import { Button, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useDispatch } from "react-redux";
import { logtout } from "../../redux/features/auth/authSlice";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logtout());
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Topbar />
      <Layout>
        <Header>
          <Button style={{backgroundColor: "white"}} onClick={handleLogout}>Logout</Button> 
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
