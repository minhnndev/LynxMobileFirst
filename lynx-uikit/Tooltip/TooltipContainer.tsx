import type { ReactNode } from "@lynx-js/react";

interface TooltipContainerProps {
  children: ReactNode;
  handleLayoutChange: (e: any) => void;
}

function TooltipContainer({
  children,
  handleLayoutChange,
}: TooltipContainerProps) {
  return (
    <view
      main-thread:bindlayoutchange={handleLayoutChange}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        color: "white",
        background: "#222",
        borderRadius: "4px",
        padding: "4px",
      }}
    >
      {children}
    </view>
  );
}

export default TooltipContainer;
