import { Metadata } from "next";
import Link from "next/link";
import First from "../_components/page";
export const metadata : Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <First />
      <p><Link href={'/services'}>Go to services page</Link></p>
      <p><Link href={'/profile'}>Go to profile page</Link></p>
    </>
  );
}
