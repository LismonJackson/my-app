import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/main.module.css"; // Import the CSS module
import Header from "@/components/header";
import Footer from "@/components/footer";
import Slide from "@/components/slide";
import Typewriter from "@/components/typewriter";
import TokenDistributionChart from "@/components/tokenDistributionChart";
import { PresetShare } from "@/components/presetShare";
import animations from "../../styles/animation.module.css"
import Divider from "@/components/divider";

export default function Page() {

  const isPortrait = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(orientation: portrait)").matches;
    }
    return false;
  };


  return (
    <>
      <Head>
        <title>WONK | Launching Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col min-h-screen">

        <main>

          {/* First Section */}
          <section className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center py-8 md:py-12" style={{ backgroundImage: `url('/newGreenGradientbg.png')` }}>
            <div className={`text-center ${animations.logoContainer}`}>
              <Image src="/logo.png" alt="Logo" className="drop-shadow-2xl mx-auto" width={400} height={400} />
              <h1 className={`fontdiner_xl text-white font-bold mt-5`}>$WONK</h1>
              {/* <button className={`bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl mt-4 px-6 py-3 bg-sky-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition duration-300`}>Buy $WONK</button> */}
              <button className={`${styles.button_1_style} text-2xl mt-4 px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition duration-300`}>Coming Soon!</button>
            </div>
          </section>

          <Slide />
          {/* Second Section */}
          <section className={`bg-cover bg-center flex justify-center items-center ${styles.portraitResponsive}`} style={{ background: `url('/newGreenGradientbg.png')` }}>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className={`flex flex-col md:mr-10 justify-center items-center  ${styles.Image_responsiveMode_1}`}>
                <Typewriter fg="white" bg="black" text="Launch date... WEN???" />
                <Image src="/wonkwithgun.png" alt="Logo" className={`mx-auto ${styles.imageShadow}`} width={850} height={850} />
              </div>
              <div className="md:ml-10 md:mt-20 max-w-md md:pt-10 lg:pt-0 p-4 md:p-0 text-center md:text-left"> {/* Added text-center and md:text-left classes */}
                <h2 className="fontdiner_lg text-white text-4xl md:text-6xl font-bold mb-5">SUPPLY</h2>
                <p className="font_amaranth_sm text-white text-base md:text-lg">
                  As the anticipation for the launch of WONK coin on Solana intensifies, one thing we know for sure is its total token supply: a staggering 1,000,000,000. But with its launch date still shrouded in mystery, the burning question remains: when will this tidal wave of WONK tokens hit the market?</p>
              </div>
            </div>
          </section>
          
          <Divider />
          {/* Third Section */}
          <section className="min-h-screen bg-cover bg-center flex justify-center items-center py-8 md:py-12" style={{ backgroundImage: `url('/newGreenGradientbg.png')`, minHeight: '100vh', height: 'auto' }}>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:mr-10 md:mt-20 max-w-md md:pt-10 lg:pt-0 p-4 md:p-0 text-center md:text-left">
                <h2 className="fontdiner_md text-white text-4xl md:text-6xl font-bold mb-5">Tokenomics</h2>
                <p className="font_amaranth_sm text-white text-base md:text-lg">
                The token distribution model allocates 50% to presale and the remaining 50% to the liquidity pool (LP).All proceeds from the presale are directed to the LP, ensuring liquidity, and subsequently, the LP tokens are burnt. This approach optimizes resource utilization while upholding transparency and security within the ecosystem.</p>
                <button className="font_amaranth_Esm_w_200 mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition duration-300">
                  <a href="#sec6" className="block w-full h-full">
                    Learn More
                  </a>
                </button>              </div>
              <div className={`flex flex-col w-72 md:ml-10  justify-center items-center  ${styles.Image_responsiveMode_2}`}>
                {typeof window == 'undefined' && <TokenDistributionChart />}
              </div>
            </div>
          </section>

          <Slide />
          {/* Fourth Section */}
          <section className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center py-8 md:py-12" style={{ background: `url('/newGreenGradientbg.png')` }}>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className={`flex flex-col md:mr-10 justify-center items-center ${styles.Image_responsiveMode_1}`}>
                <Image src="/handshake.png" alt="Logo" className={`mx-auto ${styles.imageShadow}`} width={600} height={600} />
              </div>
              <div className="md:ml-10 md:mt-20 max-w-md md:pt-10 lg:pt-0 p-4 md:p-0 text-center md:text-left">
                <h2 className="fontdiner_md text-white text-4xl md:text-6xl font-bold mb-5">COMMUNITY</h2>
                <p className="font_amaranth_sm text-white text-base md:text-lg">
                Want to connect with fellow Wonk Token enthusiasts? Join our Discord community! Get involved in discussions, stay updated on news, and be part of our growing community.                </p>
                {/* <button className="font_knewave mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition duration-300">Join Discord</button> */}
              </div>
            </div>
          </section>

          <Divider />
          {/* Fifth Section */}

          <section className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center py-8 md:py-12" style={{ background: `url('/newGreenGradientbg.png')` }}>
            <div className="container mx-auto px-4 md:px-8 items-center text-center">
              <h2 className="fontdiner_lg text-white text-4xl md:text-6xl font-bold my-20">ROADMAP</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black bg-opacity-80 rounded-lg p-6 text-white text-center">
                  <h3 className="font_amaranth_md text-lg md:text-xl font-bold mb-4">PHASE 1</h3>
                  <p className={`font_amaranth_Esm_b_200  md:text-lg text-left ${styles.font_white}`}>
                    <strong>- Presale:</strong> In the presale phase, we will offer early access to our token to a select group of investors, providing them with exclusive benefits and incentives.
                    <br /><br />
                    <strong>- Launch:</strong> The launch phase will mark the official release of our token to the public, accompanied by extensive marketing efforts and community engagement initiatives.
                    <br /><br />
                    <strong>- Build a community of like-minded wonkers:</strong> During this phase, we will actively foster a strong and supportive community around our project, encouraging collaboration and participation.
                  </p>
                </div>
                <div className="bg-black bg-opacity-80 rounded-lg p-6 text-white text-center">
                  <h3 className="font_amaranth_md text-lg md:text-xl font-bold mb-4">PHASE 2</h3>
                  <p className={`font_amaranth_Esm_b_200  md:text-lg text-left ${styles.font_white}`}>
                    <strong>- Marketing:</strong> Phase 2 will focus on implementing comprehensive marketing strategies to increase awareness, adoption, and usage of our token.
                    <br /><br />
                    <strong>- Ride the Bull & Enjoy the Rodeo:</strong> During this phase, we will navigate the ups and downs of the market with resilience and optimism, capitalizing on opportunities and overcoming challenges.
                  </p>
                </div>
                <div className="bg-black bg-opacity-80 rounded-lg p-6 text-white text-center">
                  <h3 className="font_amaranth_md text-lg md:text-xl font-bold mb-4">PHASE 3</h3>
                  <p className={`font_amaranth_Esm_b_200  md:text-lg text-left ${styles.font_white}`}>
                    <strong>- Be the biggest cat Solana has ever seen:</strong> Phase 3 will be dedicated to establishing our project as a dominant force within the Solana ecosystem, achieving significant growth and impact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Slide />

          {/* Sixth Section */}
          <section id="sec6" className="min-h-screen bg-cover bg-center flex justify-center items-center py-8 md:py-12" style={{ backgroundImage: `url('/newGreenGradientbg.png')` }}>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className={`flex flex-col md:mr-10 justify-center items-center ${styles.Image_responsiveMode_1}`}>
                <Image src="/coins.png" alt="Logo" className={`mx-auto ${styles.imageShadow}`} width={600} height={600} />
              </div>
              <div className="md:ml-10 md:mt-20 max-w-md md:pt-10 lg:pt-0 p-4 md:p-0 text-center md:text-left">
                <div className="bg-black bg-opacity-80 rounded-lg p-8 text-white">
                  <h1 className="font_amaranth_md text-3xl md:text-4xl font-bold mb-10">PRESALE INFO</h1>
                  <p className={`font_amaranth_Esm_b_200 text-lg md:text-xl mb-2  ${styles.font_white}`}><strong>⚬ Minimum contribution:</strong> 0.5 SOL</p>
                  <p className={`font_amaranth_Esm_b_200 text-lg md:text-xl mb-2  ${styles.font_white}`}><strong>⚬ Presale Duration:</strong> 24 hours</p>
                  <p className={`font_amaranth_Esm_b_200 text-lg md:text-xl mb-6  ${styles.font_white}`}><strong>⚬ Hard cap:</strong> 500 SOL</p>
                  <p className={`font_amaranth_Esm_b_200 text-lg md:text-xl mb-8  ${styles.font_white}`}><strong>Launch takes place 24 hours after the presale ends, exact time will be random to avoid token snipers that could potentially pump and dump the price action.</strong></p>
                  <PresetShare></PresetShare>
                </div>
              </div>
            </div>
          </section>






        </main>
        <Footer />
      </div>
    </>
  );
}
