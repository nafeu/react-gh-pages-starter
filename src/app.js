import { Routes, Route } from "react-router-dom";

import './app.css';

import About from './components/pages/about';
import Dashboard from './components/pages/dashboard';
import Footer from './components/footer';
import Home from './components/pages/home';
import Layout from './components/layout';
import Logo from './components/logo';
import Navigation from './components/navigation';
import NoMatch from './components/pages/no-match';

const App = () => {
  const pages = [
    {
      name: 'Home',
      path: '/',
      element: <Home />
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      name: 'About',
      path: '/about',
      element: <About />
    },
    {
      name: null,
      hidden: true,
      path: '*',
      element: <NoMatch />
    }
  ]

  return (
    <div className="app">
      <Layout section="top">
        <Logo />
        <Navigation pages={pages} />
      </Layout>
      <Layout section="middle">
        <Routes>
          {pages.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
      <Layout section="bottom">
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
