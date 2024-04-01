
"use client"
import { useState } from "react";
import { CopyIcon, Cross1Icon } from "@radix-ui/react-icons";
import styles from "../styles/animation.module.css";

export function PresetShare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const walletAddress = "rsUXy4z6bTVB8eZ9qbRf11f37oEwPgwZExTDRxCqXrL";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="font_knewave bg-black text-white py-3 px-6 rounded-lg">
        Copy Wallet Address
      </button>
      {isModalOpen && (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${styles.animation_modal}`} onClick={closeModal}>
          <div className="bg-black text-white p-8 rounded-lg relative" onClick={stopPropagation}>
            <button className="absolute top-2 right-2" onClick={closeModal}>
              <Cross1Icon className="w-6 h-6 mr-3 mt-2" />
            </button>
            <h2 className="font_amaranth_sm text-xl font-bold mb-4">Send SOL to:</h2>
            <input
              type="text"
              value={walletAddress}
              readOnly
              className="bg-black text-white border border-gray-400 rounded-md px-4 py-2 mb-4 w-full"
              onClick={stopPropagation}
            />
            <button className="bg-white hover:bg-slate-800 text-black font-bold py-3 px-6 rounded-lg" onClick={handleCopy}>
              <CopyIcon/>
            </button>
          </div>
        </div>
      )}
      {isCopied && (
        <div className={`font_amaranth_sm fixed top-0 left-0 right-0 bg-black text-white text-center py-2 animate-notification ${styles.animate_notification}`}>
          Wallet address copied to clipboard!
        </div>
      )}
    </div>
  );
}
