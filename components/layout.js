import Head from "next/head";
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="">
      {/* The tab header */}
      <Head>
        <title>E commerce</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>

      {/* The page body */}
      <div className="px-2.5">
        {/* Page navigation */}
        <div className=""> 
          <Navigation/>
        </div>
        {/* The body of the web page , changes depending on the component or web page content */}
        <div className="">
          {props.children}
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
