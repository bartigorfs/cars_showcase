import {EventHandler} from "react";

export interface BaseButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: EventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerProps{
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}