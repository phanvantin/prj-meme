
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Header from "./components/header/header";
import routes from "./config-router";
import {actFetchMeAsync} from './store/auth/actions'
import { actGetCategoryAsync} from './store/categories/action'

function App() {
  const isHeader = useRouteMatch(['/register', '/login'])
  // const isHeader = useSelector(state => state.isHeader)
  const userid = useSelector(state=>state.Auth.userid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetCategoryAsync())
  },[dispatch])
  useEffect(() => {
    dispatch(actFetchMeAsync(userid))
  },[dispatch,userid])
  function showRouter(routes) {
    let xhtml = null;
    if(routes.length >0) {
        xhtml = routes.map((route, index) => {
        return (<Route key={index} exact={route.exact} path={route.path} component={route.main}/> );
      });
    }
    return <Switch>{xhtml}</Switch>;
  }
  return (
    <div className="App">
      { 
      !isHeader &&
      <Header/>
      }
      <div id="container">{showRouter(routes)}</div>
    </div>
  );
}

export default App;
