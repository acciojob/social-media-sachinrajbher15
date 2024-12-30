import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import UserPosts from "./UserPostsPage";
import NotificationsPage from "./NotificationsPage";
import UsersPage from "./UsersPage";
import EditPost from "./EditPost";
import ViewPost from "./ViewPost";
import AuthorPosts from "./AuthorPosts";
import "./../styles/App.css";
import { PostProvider } from "../redux/PostContext";

const App = () => {
  return (
    <PostProvider>
      <Router>
        <div className="app-container">
          <header className="header-container">
            <h1>GenZ</h1> 
            {/* <h1 className="heading"><span className="large-text">ThinkPost</span> – A space for thoughts and posts.</h1>*/}
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user-posts">Posts</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
              </ul>
              <button className="button">Refresh Notifications</button>
            </nav>
          </header>

          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/user-posts">
              <UserPosts />
            </Route>
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/notifications">
              <NotificationsPage />
            </Route>
            <Route path="/view-post/:postId">
              <ViewPost />
            </Route>
            <Route path="/edit-post/:id" component={EditPost} />
            <Route path="/author-posts/:authorName" component={AuthorPosts} /> {/* Route for author posts */}
          </Switch>
        </div>
      </Router>
    </PostProvider>
  );
};

export default App;
