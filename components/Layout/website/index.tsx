import { Inter } from "next/font/google";

import Navbar from "./navbar";
import Layout from "..";

const inter = Inter({ subsets: ["latin"] });

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Navbar />
      <main className={`pt-14 ${inter.className}`}>{children}</main>
    </Layout>
  );
};

export default WebsiteLayout;
