import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";
function Footer() {
  return (
    <div className="row mt-10 mb-3">
      <div className="col-lg-8 text-left">
        {" "}
        <p>© 2022-2023 Liquid leverage</p>{" "}
      </div>
      <div className="col-lg-4">
        <TwitterIcon className="icon icon-first mr-3" />
        <ArticleIcon className="icon icon-second" />
      </div>
    </div>
  );
}

export default Footer;
