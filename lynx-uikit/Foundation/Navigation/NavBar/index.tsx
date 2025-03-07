import "./styles.css";
import backIcon from "../assets/back.png";

interface NavBarProps {
  onBack?: () => void;
  onFavorite?: () => void;
  title?: string;
}

export default function NavBar({ onBack, title }: NavBarProps) {
  return (
    <view className="nav-bar">
      <view className="left" >
        {/* <ChevronLeft className="left-icon" /> */}
        <image className="left-icon" src={backIcon} bindtap={onBack} />
      </view>
      <text className="nav-title">{title}</text>
    </view>
  );
}
