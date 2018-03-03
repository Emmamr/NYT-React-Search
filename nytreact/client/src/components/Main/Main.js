import React from "react";
import "./Main.css";

const Main = props => (
    <div>
        <div className="site-feature"><img src="/images/nytbanner.jpg" alt="newspaper" className="media-fluid" /></div>
        <div className="container article-container" {...props}></div>
    </div>
)

export default Main;