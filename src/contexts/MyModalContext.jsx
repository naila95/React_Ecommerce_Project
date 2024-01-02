import React from "react";
import { Button, Modal } from "antd";
import { createContext } from "react";

export const MyModalContext = createContext();

function MyModalProvider({ children }) {
  const [Component, setComponent] = React.useState(null);
  const [ComponentProps, setProps] = React.useState({
    open: false,
  });

  function setMyModal({ Component: newComponent, ...newProps }) {
    if (!newProps.width) newProps.width = 500;

    if (newProps.open === true) {
      setComponent(newComponent);
    } else {
      ComponentProps.className = "";
      setComponent(null);
    }

    setProps({
      ...ComponentProps,
      ...newProps,
    });
  }
  function handleClose() {
    setComponent(null);
    if (ComponentProps.forceToStay !== true) {
      setProps({ ...ComponentProps, open: false });
    }
  }
  return (
    <MyModalContext.Provider value={{ Component, ComponentProps, setMyModal }}>
      {children}
      {Component && ComponentProps?.open === true ? (
        <Modal
          // closable={false}
          {...ComponentProps}
          open={ComponentProps?.open}
          width={ComponentProps.width}
          okType="default"
          okText="Save"
          footer={null}
          onCancel={ComponentProps?.handleClose ?? handleClose}
        >
          {Component}
        </Modal>
      ) : null}
    </MyModalContext.Provider>
  );
}
export default MyModalProvider;
