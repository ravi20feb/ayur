import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/banner";
import OrganicFeature from "./components/organicFeature";
import Products from "./components/products";
import Benefit from "./components/benefit";
import Buynow from "./components/buynow";
import Rewies from "./components/review";
import Questions from "./components/faq";
import GridSection from "./components/img_grid";


export default function Home() {
  return (
    <>
      <Banner />
      <OrganicFeature />
      <Products />
      <Benefit />
      <Buynow />
      <GridSection />
      <Rewies />
      <Questions />
      
    </>
  );
}
