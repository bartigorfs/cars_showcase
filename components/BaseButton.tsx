"use client"

import Image from "next/image";
import {BaseButtonProps} from "@/types";

const BaseButton = ({
    isDisabled,
    btnType,
    containerStyles,
    textStyles,
    title,
    scrollId,
    rightIcon,
    handleClick
}: BaseButtonProps) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        console.log(element);
        element?.scrollIntoView({ behavior: "smooth"});
    };

    return (
    <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={scrollId ? () => scrollToSection(scrollId) : handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <Image
                    src={rightIcon}
                    alt="arrow_left"
                    fill
                    className="object-contain"
                />
                </div>
            )}
            </button>
            );
        }

export default BaseButton;