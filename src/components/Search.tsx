import axios from "axios";
import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        axios.get(`https://restcountries.com/v3.1/name/?fullText=true`);
    };
    return (
        <div className="grow p-2 sm:p-4 lg:p-8 max-w-screen-md mx-auto">
            <div className="flex flex-col justify-evenly items-center min-h-[50%]">
                <form
                    action=""
                    className="w-full text-center grid grid-cols-5"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="p-3 pl-4 col-span-4 border"
                        type="search"
                        placeholder="type the name of the country here"
                    />
                    <button
                        type="submit"
                        className="bg-[#81c9f1] translate-x-[-5px] rounded-lg text-white p-2 flex items-center justify-center"
                    >
                        <FaSearch className="" />
                    </button>
                </form>
                <div></div>
            </div>
        </div>
    );
};

export default Search;
