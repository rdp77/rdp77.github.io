import React from "react";
import Loader from "@/components/loader";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import Cursor from "@/components/cursor";

interface TemplateProps {
    children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({children}) => {
    return (
        <>
            <Loader></Loader>
            <div className="container">
                <Menu></Menu>
                <div className="wrapper">
                    {children}
                </div>
                <Footer></Footer>
                <div className="line top"></div>
                <div className="line bottom"></div>
                <div className="line left"></div>
                <div className="line right"></div>
                <Cursor></Cursor>
            </div>
        </>
    );
}

export default Template;