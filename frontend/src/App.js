import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Investor from "./pages/user/Investor";
import MarketFunds from "./pages/user/MarketFunds";
import Funds from "./pages/user/Funds";
import InvestorLetter from "./pages/user/InvestorLetter";
import OurImpact from "./pages/user/OurImpact";
import Insights from "./pages/user/Insights";
import PublicFund from "./pages/user/PublicFund";
import NewsArticle from "./pages/user/NewsArticle";
import Contact from "./pages/user/Contact";
import BlogDetails from "./pages/user/BlogDetails";
import Disclaimer from "./pages/user/Disclaimer";
import PrivateMarket from "./pages/user/PrivateMarket";
import Disclosure from "./pages/user/Disclosure";
import PrivacyPolicy from "./pages/user/PrivacyPolicy";
import Career from "./pages/user/Career";
import Startup from "./pages/user/Startup";
import NRIInvestor from "./pages/user/NRIInvestor";
import FamilyOffice from "./pages/user/FamilyOffice";
import LeaderPortfolio from "./pages/user/LeaderPortfolio";
import Videos from "./pages/user/Videos";
import Login from "./pages/admin/Login";
import AdminRoutes from "./routes/AdminRoutes";
import DashBoard from "./pages/admin/Dashboard";
import AddFactsheetPresentation from "./pages/admin/FactsheetPresentation/AddFactsheetPresentation";
import FactsheetPresentation from "./pages/admin/FactsheetPresentation/FactsheetPresentation";
import FundNumber from "./pages/admin/FundNumber/FundNumber";
import AddFundNumber from "./pages/admin/FundNumber/AddFundNumber";
import EditFundNumber from "./pages/admin/FundNumber/EditFundNumber";
import FundCompanyPortfolio from "./pages/admin/FundCompanyPortfolio/FundCompanyPortfolio";
import SvgComponent from "./pages/user/svgcomponent";
import AddFundCompanyPortfolio from "./pages/admin/FundCompanyPortfolio/AddFundCompanyPortfolio";
import EditFundCompanyPortfolio from "./pages/admin/FundCompanyPortfolio/EditFundCompanyPortfolio";
import News from "./pages/admin/News/News";
import AddNews from "./pages/admin/News/AddNews";
import EditNews from "./pages/admin/News/EditNews";
import NewsCategory from "./pages/admin/NewsCategory/NewsCategory";
import AddNewsCategory from "./pages/admin/NewsCategory/AddNewsCategory";
import EditNewsCategory from "./pages/admin/NewsCategory/EditNewsCategory";
import InvestorLett from "./pages/admin/InvestorLett/InvestorLett";
import AddInvestorLett from "./pages/admin/InvestorLett/AddInvestorLett";
import EditInvestorLett from "./pages/admin/InvestorLett/EditInvestorLett";
import Team from "./pages/admin/Team/Team";
import AddTeam from "./pages/admin/Team/AddTeam";
import EditTeam from "./pages/admin/Team/EditTeam";
import ContactUs from "./pages/admin/ContactUs";
import FactSheetForm from "./pages/admin/FactSheetForm";
import PresentationForm from "./pages/admin/PresentationForm";
import GatewaySvg from "./components/GatewaySvg";
import EditFactsheetPresentation from "./pages/admin/FactsheetPresentation/EditFactsheetPresentation";

function App() {
  return (
    // <Router basename="/piperserica-frontend">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/foreign-investor" element={<Investor />} />
        <Route path="/nri-investor" element={<NRIInvestor />} />
        <Route
          path="/family-office-and-indian-investor"
          element={<FamilyOffice />}
        />
        <Route path="/startup-founder-entrepreneur" element={<Startup />} />
        <Route path="/careers" element={<Career />}></Route>
        <Route path="/public-market-funds" element={<MarketFunds />}></Route>
        <Route path="/private-market-funds" element={<PrivateMarket />}></Route>
        {/* <Route path="/private-market" element={<MarketFunds />}></Route> */}
        <Route path="/investor-letters" element={<InvestorLetter />}></Route>
        <Route path="/our-impact" element={<OurImpact />}></Route>
        <Route path="/Insights" element={<Insights />}></Route>
        <Route
          path="/public-market/piper-serica-nemero-uno-india-fund"
          element={<PublicFund />}
        ></Route>
        <Route path="/news-and-more" element={<NewsArticle />}></Route>

        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog-details" element={<BlogDetails />}></Route>
        <Route path="/disclaimer" element={<Disclaimer />}></Route>
        <Route path="/disclosure" element={<Disclosure />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route
          path="/public-market/piper-serica-leader-portfolio"
          element={<LeaderPortfolio />}
        ></Route>
        <Route
          path="/private-market/piper-serica-angel-fund"
          element={<Funds />}
        ></Route>

        <Route path="/svg" element={<SvgComponent />} />

        <Route path="/gateway" element={<GatewaySvg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route
            path="add/factsheet-presentation"
            element={<AddFactsheetPresentation />}
          />
          <Route
            path="edit/factsheet-presentation/:id"
            element={<EditFactsheetPresentation />}
          />
          <Route
            path="factsheet-presentation"
            element={<FactsheetPresentation />}
          />

          <Route path="fund-number" element={<FundNumber />} />
          <Route path="add/fund-number" element={<AddFundNumber />} />
          <Route path="edit/fund-number/:id" element={<EditFundNumber />} />

          <Route path="company" element={<FundCompanyPortfolio />} />
          <Route path="add/company" element={<AddFundCompanyPortfolio />} />
          <Route
            path="edit/company/:id"
            element={<EditFundCompanyPortfolio />}
          />

          <Route path="news" element={<News />} />
          <Route path="add/news" element={<AddNews />} />
          <Route path="edit/news/:id" element={<EditNews />} />

          <Route path="news-category" element={<NewsCategory />} />
          <Route path="add/news-category" element={<AddNewsCategory />} />
          <Route path="edit/news-category/:id" element={<EditNewsCategory />} />

          <Route path="investor-letter" element={<InvestorLett />} />
          <Route path="add/investor-letter" element={<AddInvestorLett />} />
          <Route
            path="edit/investor-letter/:id"
            element={<EditInvestorLett />}
          />

          <Route path="team" element={<Team />} />
          <Route path="add/team" element={<AddTeam />} />
          <Route path="edit/team/:id" element={<EditTeam />} />

          <Route path="contact-us" element={<ContactUs />} />

          <Route path="factsheet-form" element={<FactSheetForm />} />

          <Route path="presentation-form" element={<PresentationForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
