"use client"

import React, { useState, useEffect } from 'react';



interface TypewriterProps {
    text: string;
    typingDelay?: number;
    erasingDelay?: number;
    newTextDelay?: number;
    bg?: string; // Background color
    fg?: string; // Foreground color (text color)
}

const Typewriter: React.FC<TypewriterProps> = ({
    text,
    typingDelay = 150,
    erasingDelay = 100,
    newTextDelay = 2000,
    bg = 'white', // Default background color
    fg = 'black', // Default foreground color
}) => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        let timer: number;

        if (isTyping) {
            if (textIndex < text.length) {
                timer = window.setTimeout(() => {
                    setDisplayText((prev) => prev + text.charAt(textIndex));
                    setTextIndex(textIndex + 1);
                }, typingDelay);
            } else {
                timer = window.setTimeout(() => setIsTyping(false), newTextDelay);
            }
        } else {
            if (textIndex > 0) {
                timer = window.setTimeout(() => {
                    setDisplayText((prev) => prev.slice(0, -1));
                    setTextIndex(textIndex - 1);
                }, erasingDelay);
            } else {
                timer = window.setTimeout(() => setIsTyping(true), newTextDelay);
            }
        }

        return () => clearTimeout(timer); // Cleanup timeout
    }, [textIndex, isTyping, text, typingDelay, erasingDelay, newTextDelay]);

    return (
        <div className="speech-bubble" style={{ backgroundColor: bg, color: fg }}>
            <span>{displayText}</span>
            <span className="cursor">|</span>
            <style jsx>{`
                .speech-bubble {
                    position: relative;
                    top: 200px;
                    left: -12%;
                    display: inline-block;
                    padding: 40px;
                    background-color: ${bg};
                    color: ${fg};
                    border-radius: 20px;
                    max-width: 60%;
                    margin: 20px;
                    font-size: 1.1rem;
                    box-shadow: -10px 10px 5px 2px rgba(0,0,0,1);
                    border: 4px double white;
                    font-family: "Amaranth", sans-serif !important;

                }
                
                .speech-bubble::after {
                    content: "";
                    position: absolute;
                    bottom: -40px;
                    left: 50%;
                    border: solid transparent;
                    border-width: 35px;
                    border-top-color: ${bg};
                    border-bottom-width: 0; /* Add border-bottom-width property */
                    border-bottom-color: white; /* Set color for the border bottom */
                    transform: translateX(-50%);
                }


                
                @media screen and (max-width: 768px) {
                    .speech-bubble {
                        top: 100px; /* Reduce the top property when screen size decreases */
                    }
                }

                @media (orientation: portrait) {
                    .speech-bubble {
                        top: 50px; /* Reduce the top property when screen size decreases */
                    }
                }

                
                @media (orientation: landscape) {
                    .speech-bubble {
                        top: 150px; /* Reduce the top property when screen size decreases */
                    }
                }


            
      `}</style>
        </div>
    );
};

export default Typewriter;
