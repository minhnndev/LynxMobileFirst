import "./styles.scss";
import type { ReactNode } from "@lynx-js/react";
import type { CSSProperties } from "@lynx-js/types";

import SafeArea from "../SafeArea/index.jsx";

function Page({
  children,
  style,
}: {
  children: ReactNode;
  title?: string;
  style?: CSSProperties;
}) {
  return (
    <SafeArea style={style}>
      <view class="page-container">{children}</view>
    </SafeArea>
  );
}

export default Page;
