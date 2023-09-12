"use client";

import {SearchManufacturer} from "@/components/index";

const SearchBar = () => {
    const handleSearch = () => {}


    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searbar__item">
                <SearchManufacturer />
            </div>
        </form>
    )
}

export default SearchBar