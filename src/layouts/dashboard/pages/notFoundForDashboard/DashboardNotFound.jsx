import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const DashboardNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="default">
          <Link to="/dashboard/orders">Back to orders</Link>
        </Button>
      }
    />
  );
};

export default DashboardNotFound;
