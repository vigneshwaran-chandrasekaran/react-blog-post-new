import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BlogsList from "./components/BlogsList";
import EditBlogPost from "./components/EditBlogPost";
import CreateBlogPost from "./components/CreateBlogPost";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/edit/:id">
            <EditBlogPost />
          </Route>
          <Route path="/add">
            <div className="row d-flex justify-content-center">
              <div className="col-4">
                <CreateBlogPost />
              </div>
            </div>
          </Route>
          <Route path="/">
            <BlogsList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
