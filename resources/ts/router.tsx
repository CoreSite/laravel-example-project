import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import LayoutHome from "./components/layout/LayoutHome";
import LayoutPosts from "./components/layout/LayoutPosts";

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Route exact={true} path="/" component={LayoutHome} />
            <Route path="/blog" component={LayoutPosts} />
        </React.Fragment>
    </Router>,
    document.getElementById("root")
);
