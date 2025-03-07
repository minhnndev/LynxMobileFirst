import "./styles.css";
import type { ReactNode } from "@lynx-js/react";
import type { CSSProperties } from "@lynx-js/types";
import { useNavigate } from "react-router";

import SafeArea from "../SafeArea/index.jsx";
import NavBar from "../Navigation/NavBar/index.jsx";

function Page({
  children,
  style,
}: {
  children: ReactNode;
  title?: string;
  style?: CSSProperties;
}) {
  const navigate = useNavigate();
  return (
    <SafeArea style={style}>
      <view class="page-container">
        <NavBar onBack={() => navigate('/')} />
        {children}
      </view>
    </SafeArea>
  );
}

export default Page;
