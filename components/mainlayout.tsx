import { Fragment, ReactNode } from "react";
import Layout from "./layout";
type LayoutProps = {
    children: ReactNode;
  };
function MainLayout({children}:LayoutProps){
    return <Fragment>
        <Layout/>
        <main>{children}</main>
    </Fragment>
}

export default MainLayout;