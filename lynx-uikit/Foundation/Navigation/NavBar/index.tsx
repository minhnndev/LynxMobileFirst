import "./styles.scss";

import backIcon from "./assets/back.png";

interface NavBarProps {
  onBack?: () => void;
  onFavorite?: () => void;
  title?: string;
}

export default function NavBar({ onBack, title }: NavBarProps) {
  return (
    <view className="nav-bar">
      <image className="left-icon" src={backIcon} bindtap={onBack} />
      <text className="nav-title">{title}</text>
    </view>
  );
}
