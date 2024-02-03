import Image from "next/image";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "Portfolio Page",
  description: "Portfolio Page for Next App",
};

const PortfolioPage = () => {
  return (
    <div>
      <div>PROJECTS</div>
      <div>Portfolio</div>
      <p>Posts can be viewed only if
            logged in (logged in by default for demo), but only admin can
            create/update/delete posts.
          </p>
          <p>
            (If you like to see for yourself use: username = John, password =
            password)
          </p>
    </div>
  );
};

export default PortfolioPage;
