"use client"
import {BaseButtonProps} from "@/types";
import Image from "next/image";

const BaseButton = ({title, containerStyles, textStyles, rightIcon, handleClick, btnType}: BaseButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={() => handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} alt={'icon'}
                           fill className="object-contain" />
                </div>
            )}
        </button>
    );
};

export default BaseButton
