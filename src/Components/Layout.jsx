import React from "react";
import "./component.css";

export const Layout = props => (
  <section>
    <div className="layout">{props.children}</div>
  </section>
);
