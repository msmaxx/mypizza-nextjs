import Head from "./Head";

import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div>
            <Head title="MyPizza"/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;