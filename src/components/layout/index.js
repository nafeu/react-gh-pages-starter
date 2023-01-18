import React from 'react';
import './index.css';

const Layout = ({ section, children }) => (
  <div className={`layout-${section}`}>
    {children}
  </div>
)

export default Layout;
