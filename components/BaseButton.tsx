"use client"
import Image from 'next/image'
import {BaseButtonProps} from "@/types";

const BaseButton = ({title, containerStyles, handleClick, btnType}: BaseButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    );
};

export default BaseButton
