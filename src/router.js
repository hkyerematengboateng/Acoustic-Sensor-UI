import { Route, BrowserRouter as Router, Routes ,Outlet} from "react-router-dom";
import LayoutPage from "./pages/layout/LayoutPage";
import ResultPage from "./pages/ResultPage"
// import ResultAnalytics from './pages/ResultAnalytic';
import NoPageFound from "./pages/NoPageFound";
import React  from "react";
function router() {
    return (
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Layout redirectPath="/">
                  <LayoutPage />
                </Layout>
              }
            >
                <Route index element={<ResultPage />} />
                <Route path="results" exact element={<ResultPage/>} />
                {/* <Route path="analytics" exact element={<ResultAnalytics />}/> */}
                <Route path="*" element={<NoPageFound />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
  const Layout = ({ redirectPath = "/", children }) => {
    return children ? children : <Outlet />;
  };
  
export default router
