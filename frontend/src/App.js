import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import ButtonAppBar from "./component/header";

import Main from "./pages/main/main";
import TextGenerator from "./pages/text_generator/text_generator";
import RawResponseGenerator from "./pages/raw_chatgpt/raw_chatgpt";
import UrlScraper from "./pages/url_scraper/url_scraper";
import SocialMediaTool from "./pages/social_media_tool/social_media_tool";
import GoogleAds from "./pages/google_ads/google_ads";
import OnAudit from "./pages/on_audit/on_audit";
import ImageCompressor from "./pages/image_compressor/image_compressor";
import ImageKeyword from "./pages/image_keyword/image_keyword";

function App() {
  return (
    <>
      <ButtonAppBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
