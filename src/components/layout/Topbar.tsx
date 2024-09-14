import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { Home, PlusCircle, List, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Topbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed) => setCollapsed(collapsed)}
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/dashboard" className="font-extrabold text-lg flex">
          <Home />Dashboard
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 4rem)",
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          style={{ flexGrow: 1 }}
        >
          <Menu.Item key="/dashboard/donations" icon={<List />}>
            <Link to="/dashboard/donations">All Donations</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/create-donation" icon={<PlusCircle />}>
            <Link to="/dashboard/create-donation">Create Donation</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/create-testimonial" icon={<Star />}>
            <Link to="/dashboard/create-testimonial">Create Testimonial</Link>
          </Menu.Item>
        </Menu>
        <Menu
          theme="dark"
          mode="inline"
          style={{ borderTop: "1px solid #444" }}
        >
          <Menu.Item key="/" icon={<Home />}>
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};

export default Topbar;
