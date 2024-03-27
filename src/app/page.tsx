import Image from "next/image";
import Head from "next/head";
import styles from "../styles/animation.module.css"; // Import the CSS module

export default function Home() {
  return (
    <>
      <Head>
        <title>WONK | Launching Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('/background.png')`}}> {/* Apply background image styling directly to main */}
        <div className={`text-center p-4 ${styles.logoContainer}`}> {/* Apply animation class */}
          <div className="logo-container">
            <Image
              src="/logo.png" // Make sure the logo path is correct
              alt="WONK Logo"
              width={200} // Increased size
              height={200} // Increased size
              className="drop-shadow-xl mx-auto" // Center the logo horizontally
              priority
            />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mt-5">WONK on Solana</h1>
          <hr className="border-black my-2" />
          <p className="text-xl lg:text-3xl">Launching Soon</p> {/* Increased text size */}
        </div>

        <div className={`mt-8 ${styles.FollowUsContainer}`}>
          <a href="https://twitter.com/yourtwitterhandle" className="follow-button inline-flex items-center px-4 py-2 bg-white rounded-full text-black border border-black font-semibold" target="_blank" rel="noopener noreferrer">
            Follow us on
            <Image src="/x-logo-black.png" alt="Twitter" width={20} height={20} className="ml-2" />
          </a>
        </div>

      </main>
    </>
  );
}
