import {EventHandler} from "react";

export interface BaseButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: EventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}