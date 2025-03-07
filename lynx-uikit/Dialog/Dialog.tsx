import React from "react";
import { type ReactElement, useEffect, useState } from "@lynx-js/react";

import "./Dialog.css";

interface DialogProps {
  show?: boolean;
  children: ReactElement;
}

function Dialog(props: DialogProps) {
  const { show = true, children } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [displayContainer, setDisplayContainer] = useState<boolean>(false);

  const maskStyle = visible ? { opacity: 0.6 } : { opacity: 0.0 };

  const contentStyle = visible
    ? {
        opacity: 1,
        transform: "translateY(0%)",
        transition: "opacity 0.3s, transform 0.3s",
      }
    : {
        opacity: 0,
        transform: "translateY(100%)",
        transition: "opacity 0.3s, transform 0.3s",
      };

  useEffect(() => {
    if (show) {
      setDisplayContainer(true);
      setTimeout(() => {
        setVisible(true);
      }, 50);
    } else if (visible) {
      setVisible(false);
      setTimeout(() => {
        setDisplayContainer(false);
      }, 300);
    }
  }, [show]);

  return (
    <view
      className="dialog-container"
      style={{
        visibility: displayContainer ? "visible" : "hidden",
        position: "fixed",
        justifyContent: "flex-end",
      }}
    >
      <view
        className="dialog-mask"
        native-interaction-enabled
        style={maskStyle}
      />
      <view className="dialog-content" style={contentStyle}>
        {children}
      </view>
    </view>
  );
}

export default Dialog;
