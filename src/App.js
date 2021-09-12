import { useEffect } from "react";
import Home from "./Components/Home";
import { TOKEN, SITE_LANG } from "./constants/constants";
import { getCookie } from "./Cookie/useCookies";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "./routes/routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import User from "./Components/User";
function App() {
  const token = getCookie(TOKEN);
  useEffect(() => {
    const lan = localStorage.getItem(SITE_LANG);
    if (lan) {
      localStorage.setItem(SITE_LANG, lan);
    } else {
      localStorage.setItem(SITE_LANG, "uz");
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return token ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route path="/login" exact component={Login} />
          {token ? (
            <Home>
              <Route path="/user" exact component={User}/>
              {routes.map((item) => (
                <ProtectedRoute
                  key={item.key}
                  path={item.path}
                  exact
                  component={item.component}
                />
              ))}
            </Home>
          ) : (
            <Redirect to="/dashboard" />
          )}
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
