import React from "react";
import { motion } from "framer-motion";
import "./HighlightText.css";

type HighlightTextProps = {
    children: React.ReactNode;
}

const HighlightText: React.FC<HighlightTextProps> = ({ children }) => {
    return (
        <span className="highlight">
            {children}
            <motion.span
                initial={{ scaleX: 0}}
                animate={{ scaleX: 1}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="marker"
            />
        </span>
    );
};

export default HighlightText;