import { Inter } from "next/font/google";

import Navbar from "../../ui/navbar";
import Layout from "..";

const inter = Inter({ subsets: ["latin"] });

const WebsiteLayout = ({
  children,
  showNavbar,
}: {
  children: React.ReactNode;
  showNavbar: boolean;
}) => {
  return (
    <Layout>
      {showNavbar && <Navbar />}
      <main className={`pt-14 ${inter.className}`}>{children}</main>
    </Layout>
  );
};

export default WebsiteLayout;
