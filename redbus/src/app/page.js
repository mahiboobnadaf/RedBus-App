import Image from "next/image";
import Header from "./components/Header"
import Mainbody from './components/Mainbody';
import Offers from "./components/Offers";


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Mainbody />
      <Offers />
    </>
  );
}
