import { BrowserRouter as Router } from "react-router-dom";
import logo from "../logo.svg";
import { Links } from "../01-lazyload/components/Links/Links";
import { LinksMatch } from "../01-lazyload/components/LinksMatch/LinksMatch";
import { Suspense } from "react";
import { Spinner } from "../01-lazyload/components/Spinner/Spinner";

export const Navigation = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <Links />
          </nav>

          <LinksMatch />
        </div>
      </Router>
    </Suspense>
  );
};
