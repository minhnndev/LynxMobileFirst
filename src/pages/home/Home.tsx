import "./Home.css";
import { useCallback, useState } from "@lynx-js/react";

import arrow from "../../assets/arrow.png";
import lynxLogo from "../../assets/lynx-logo.png";
import reactLynxLogo from "../../assets/react-logo.png";

import { i18n } from "../../i18n/i18n.js";
import { Dialog } from "../../../lynx-uikit/index.js";
import BSContent from "../../components/BSContent.jsx";

function Home() {
  const [alterLogo, setAlterLogo] = useState(false);
  const [locale, setLocale] = useState("en");
  const [open, setOpen] = useState<boolean>(true);

  const handleDismissed = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getNextLocale = (locale: string) => {
    const locales = ["en", "vn-VN"];
    const index = locales.indexOf(locale);
    return locales[(index + 1) % locales.length];
  };

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  const onPressChangeLanguage = useCallback(async () => {
    const nextLocale = getNextLocale(locale);
    await i18n.changeLanguage(nextLocale);
    setLocale(nextLocale);
  }, [locale]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={reactLynxLogo} className="Logo--react" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <text className="content">
            {i18n.t("hello")}, {i18n.t("world")}
          </text>
          <text bindtap={onPressChangeLanguage} className="btn">
            Change Language
          </text>
          <image src={arrow} className="Arrow" bindtap={handleOpen} />
        </view>
        <Dialog show={open}>
          <BSContent onPress={handleDismissed} />
        </Dialog>
      </view>
    </view>
  );
}

export default Home;
