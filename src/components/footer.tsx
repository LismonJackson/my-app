// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="text-center p-6 bg-black text-white mt-auto">
      <img src="/logo.png" alt="Logo" className="mx-auto mb-8" width={400} height={400} />
      <h3 className="fontdiner_md text-5xl font-bold mb-4">WONK</h3>
      <p className="font_amaranth_Esm_w_200 mb-8 text-lg">Go and help us spread the word, we need more Wonkers!</p>
      <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
