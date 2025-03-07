import "./styles.css";
import { useCallback, useState } from "@lynx-js/react";
import { useNavigate } from "react-router";

import { Page } from "../../../lynx-uikit/Foundation/index.js";

import arrow from "../../assets/arrow.png";
import reactLynxLogo from "../../assets/react-logo.png";

import { i18n } from "../../i18n/i18n.js";
import { Dialog } from "../../../lynx-uikit/index.js";
import BSContent from "../../components/BSContent.jsx";

function Home() {
  const navigate = useNavigate();
  const [locale, setLocale] = useState("en");
  const [open, setOpen] = useState<boolean>(false);

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

  const onPressChangeLanguage = useCallback(async () => {
    const nextLocale = getNextLocale(locale);
    await i18n.changeLanguage(nextLocale);
    setLocale(nextLocale);
  }, [locale]);

  const onPressToDetail = () => {
    navigate("/details");
  };

  return (
    <Page>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo">
            <image src={reactLynxLogo} className="Logo--react" />
          </view>
          <text className="Title">
            {i18n.t("hello")}, {i18n.t("world")}
          </text>
          <view style={{ display: "flex", gap: 12, flexDirection: "row" }}>
            <text bindtap={onPressChangeLanguage} className="Button">
              Change Language
            </text>

            <text bindtap={onPressToDetail} className="Button">
              To details
            </text>
          </view>
          <image src={arrow} className="Arrow" bindtap={handleOpen} />
        </view>
        <Dialog show={open}>
          <BSContent onPress={handleDismissed} />
        </Dialog>
      </view>
    </Page>
  );
}

export default Home;
