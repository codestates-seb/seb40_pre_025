import { useSelector } from "react-redux";
import Head from 'next/head'

export default function Home() {
  // const testState = useSelector((state) => state);
  // console.log(testState);
  return (
    <Head>
        <title>Stack Overflow - Where Developers Learn, Share, & Build Careers</title>
        <meta name="description" content="Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers." />
        <link rel="icon" href="/Stack_Overflow_icon.svg.png" />
      </Head>
  );
}
