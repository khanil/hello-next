import Header from '../components/Header';

const DefaultLayout = ({ children }) => (
  <div className="layout_default">
    <Header />
    {children}

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>

    <style jsx>{`
      .layout_default {
        margin: 0 auto 15px;
        padding: 0 25px;
        max-width: 1280px;
      }
    `}</style>
  </div>
);

export default DefaultLayout;
