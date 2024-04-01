"use client"

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Head from "next/head";
import Link from 'next/link';
import Loading from "@/components/loading";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay of 3 seconds before routing to /main
    const timeout = setTimeout(() => {
      router.push("/main");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []); // Run the effect only once on component mount

  return (
    <>
      <Head>
        <title>WONK | Launching Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loading />
    </>
  );
}
