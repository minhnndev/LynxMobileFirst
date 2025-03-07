import "./styles.css";
import { useNavigate } from "react-router";

import { Page } from "../../../lynx-uikit/Foundation/index.js";

import BSContent from "../../components/BSContent.jsx";

function Details() {
  const navigate = useNavigate();
  return (
    <Page>
      <text className="Title" bindtap={() => navigate("/")}>
        Details
      </text>
      <BSContent />
    </Page>
  );
}

export default Details;
