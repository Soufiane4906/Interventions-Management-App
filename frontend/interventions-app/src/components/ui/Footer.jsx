import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//materail ui



const Footer = () => {
  return (
    <div>
      {/* /.content-wrapper */}
      <footer className="main-footer">
        <strong>
          Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.2.0
        </div>
      </footer>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
    </div>
  );
};

export default Footer;
