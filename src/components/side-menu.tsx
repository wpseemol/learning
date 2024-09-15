import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SideMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div>
            <button
                className="w-fit ml-[50rem] block"
                onClick={() => {
                    setIsOpen((prev) => !prev);
                    setIsAnimating(true);
                }}>
                open
            </button>

            {isAnimating && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: isOpen ? 0 : '-100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg"
                    onAnimationComplete={() => {
                        if (!isOpen) setIsAnimating(false);
                    }}>
                    <ul className="p-4">
                        <li>some text 1</li>
                        <li>some text 2</li>
                        <li>some text 3</li>
                        <li>some text 4</li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
}
