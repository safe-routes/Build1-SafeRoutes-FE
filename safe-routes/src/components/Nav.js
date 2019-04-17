import React from "react";
import { Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";

const Nav = props => {
  return (
    <Menu mode="horizontal">
      <Menu.Item onClick={() => props.history.push("/account-landing")}>
        <Icon type="home" />
        Home
      </Menu.Item>
      <Menu.Item onClick={() => props.history.push("/account")}>
        <Icon type="setting" />
        Account
      </Menu.Item>
      <Menu.Item onClick={() => props.history.push("/map")}>
        <Icon type="dashboard" /> Map
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(Nav);
