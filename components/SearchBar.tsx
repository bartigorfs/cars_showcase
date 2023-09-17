"use client";

import {SearchManufacturer} from "@/components/index";
import React, {useState} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({buttonClasses}: { buttonClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${buttonClasses}`}>
        <Image src="/magnifying-glass.svg" alt="Magnifying glass" width={40} height={40} className="object-contain"/>
    </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };


    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname, { scroll: false })
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton buttonClasses="sm:hidden"/>
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt="Car model" />
                <input type="text"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Tiguan"
                className="searchbar__input"
                />
                <SearchButton buttonClasses="sm:hidden"/>
            </div>
            <SearchButton buttonClasses="max-sm:hidden"/>
        </form>
    )
}

export default SearchBar