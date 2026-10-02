import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata : Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <p><Link href={'/services'}>Go to services page</Link></p>
      <p><Link href={'/profile'}>Go to profile page</Link></p>
    </>
  );
}
