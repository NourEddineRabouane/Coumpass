import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="grow p-2 sm:p-4 lg:p-8 max-w-screen-md mx-auto">
            <div className="flex flex-col justify-evenly min-h-[50%] mt-12">
                <h1
                    className="text-[clamp(2rem,3cqw,3rem)]
              font-bold uppercase text-center tracking-wide "
                >
                    Explore the World with Country Insights
                </h1>
                <p className="text-center leading-loose text-[clamp(1rem,3cqw,1.2rem)] text-gray-500">
                    Discover detailled information about every country on Earth.
                    From population statistics to cultural highlights, get the
                    data you need in one place.
                </p>
            </div>
            <div className="text-center m-4">
                <Link to="/search" className="">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        Explore now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
