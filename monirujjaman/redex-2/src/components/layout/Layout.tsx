import Header from "../header/Header";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
