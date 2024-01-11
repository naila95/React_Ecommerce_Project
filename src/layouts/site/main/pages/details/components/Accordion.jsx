import React from "react";
import { Collapse } from "antd";

const Accordion = () => {
  const text = `
  Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
`;
  const text2 = `Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum`;
  const text3 = `At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum.
  `;
  const items = [
    {
      key: "1",
      label: "Product Details",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Additional Information",
      children: <p>{text2}</p>,
    },
    {
      key: "3",
      label: "Customer Reviews ",
      children: <p>{text3}</p>,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse
      style={{ backgroundColor: "white", border: "none" }}
      bordered="true"
      size="large"
      items={items}
      onChange={onChange}
    />
  );
};

export default Accordion;
