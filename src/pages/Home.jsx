import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import PGCard from "../components/PGCard";

const categories = [
  { title: "For Boys", img: "/boys.jpg" },
  { title: "For Girls", img: "/girls.jpg" },
  { title: "For Students", img: "/students.jpg" },
];

const features = [
  {
    heading: "Comfortable Living Spaces",
    paragraph:
      "Our PG accommodations are designed to provide you with the utmost comfort and convenience.",
    illustration: "/comfort-living2.png",
  },
  {
    heading: "Prime Locations",
    paragraph:
      "Located in the heart of the city, our PG facilities offer easy access to public transportation..",
    illustration: "/prime-location2.png",
  },
  {
    heading: "Affordable Pricing",
    paragraph: "We offer competitive pricing without compromising on quality.",
    illustration: "/affordable-pricing.png",
  },
  {
    heading: "Safety and Security",
    paragraph:
      "Your safety is our priority. Our PG facilities are equipped with 24/7 security, CCTV surveillance...",
    illustration: "/safety-security.png",
  },
];

const pgdetails = [
  {
    price: "7500",
    address: "Sector 5, Saltlake City, Kolkata",
    tags: ["for boys", "AC rooms"],
    pg_name: "Sunny Stay PG",
    facility: "Food, WIFI, Laundry...+8",
    img: "/pg1.jpeg",
  },
  {
    price: "6800",
    address: "New Town, Action Area 1, Kolkata",
    tags: ["for girls", "all preferred"],
    pg_name: "Pearl PG",
    facility: "Food, Geyser, 24x7 Security...+7",
    img: "/pg2.jpg",
  },
  {
    price: "6200",
    address: "Ballygunge Place, Kolkata",
    tags: ["for boys", "non-AC rooms"],
    pg_name: "Ballygunge PG",
    facility: "WIFI, Study Table,...+5",
    img: "/pg3.jpg",
  },
  {
    price: "7000",
    address: "Gariahat, Kolkata",
    tags: ["for girls", "all preferred"],
    pg_name: "Serene Living PG",
    facility: "Food, AC, Housekeeping...+6",
    img: "/pg4.jpg",
  },
];

const Home = () => {
  return (
    <section className="relative">
      <Navbar />
      <main className="min-h-screen">
        {/* hero section */}
        <section className="hero section">
          <h1 className="text-center my-20 text-5xl font-light text-black">
            find a <span className="text-blue-700">home</span> away from home
          </h1>
          <div className="w-full lg:w-1/2 mx-auto flex justify-between items-center my-10 rounded-[2rem] border border-black">
            <form className="max-w-lg">
              <div className="w-full flex flex-col sm:flex-row flex-1 justify-between h-full mx-5">
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center"
                  type="button"
                >
                  Location{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative hidden sm:flex items-center">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full text-sm text-gray-900 focus:outline-none"
                    placeholder="Search location..."
                    required
                  />
                </div>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center"
                  type="button"
                >
                  Occupancy type{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center"
                  type="button"
                >
                  Budget{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <button
              type="button"
              className="block h-[2.5rem] sm:h-full w-[10rem] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 sm:py-2.5 text-center me-1 my-1"
            >
              Search
            </button>
          </div>
          <h2 className="text-center sm:text-left font-semibold text-2xl ml-20">
            Find PG & Hostel in <span className="text-blue-700">Kolkata</span>
          </h2>
          <div className="w-[90%] mx-auto mt-4 flex justify-center sm:justify-start items-center flex-wrap gap-6">
            {categories.map((cat, index) => (
              <Card key={index} title={cat.title} image={cat.img} />
            ))}
          </div>
        </section>
        {/* features 1 */}
        <section className="section w-full bg-gray-200">
          <div className="w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 text-center">
            {features.map((feat, index) => (
              <div key={index} className="flex flex-col items-center gap-y-2">
                <img src={feat.illustration} alt="" className="size-36" />
                <h1 className="text-blue-700 font-semibold text-2xl text-nowrap">
                  {feat.heading}
                </h1>
                <p>{feat.paragraph}</p>
              </div>
            ))}
          </div>
        </section>
        {/* pg cards */}
        <section className="section">
          <div className="w-full flex justify-between items-end">
            <h2 className="text-center sm:text-left font-semibold text-4xl">
              Featured PGs in <span className="text-blue-700">Kolkata</span>
            </h2>
            <span className="text-blue-700 flex items-center cursor-pointer rounded-md">
              Explore more{" "}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </span>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
            {pgdetails.map((detail, index) => (
              <PGCard
                key={index}
                price={detail.price}
                address={detail.address}
                tags={detail.tags}
                pgName={detail.pg_name}
                facility={detail.facility}
                img_link={detail.img}
              />
            ))}
          </div>
        </section>
        {/* features 2 */}
        <section className="section w-full py-10 flex justify-around items-center capitalize text-2xl text-center text-white bg-gray-800">
          <div>
            <h1 className="font-semibold text-3xl">1k+</h1>
            <p>properties</p>
          </div>
          <div>
            <h1 className="font-semibold text-3xl">20+</h1>
            <p>cities</p>
          </div>
          <div>
            <h1 className="font-semibold text-3xl">10k+</h1>
            <p>users</p>
          </div>
        </section>
        {/* collections */}
        <section className="section flex flex-col items-center gap-y-10">
          <h2 className="text-center font-semibold text-4xl">
            Our <span className="text-blue-700">Handpicked Collections</span>
          </h2>
          <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="grid gap-8">
              <div
                className="w-full relative group cursor-pointer rounded-md"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${"/prof.jpeg"})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "15rem",
                  width: "100%",
                }}
              >
                <h1 className="absolute bottom-0 flex items-center mx-4 my-3 text-2xl font-semibold text-white">
                  For professionals
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-all ease-in-out opacity-[-1] group-hover:opacity-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </h1>
              </div>
              <div
                className="w-full relative group cursor-pointer rounded-md"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${"/meals.jpg"})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "15rem",
                  width: "100%",
                }}
              >
                <h1 className="absolute bottom-0 flex items-center mx-4 my-3 text-2xl font-semibold text-white">
                  Meals Included
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-all ease-in-out opacity-[-1] group-hover:opacity-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </h1>
              </div>
            </div>
            <div className="grid gap-8">
              <div
                className="w-full relative group cursor-pointer rounded-md"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${"/wifi.jpg"})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "15rem",
                  width: "100%",
                }}
              >
                <h1 className="absolute bottom-0 flex items-center mx-4 my-3 text-2xl font-semibold text-white">
                  WIFI Included
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-all ease-in-out opacity-[-1] group-hover:opacity-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </h1>
              </div>
              <div
                className="w-full relative group cursor-pointer rounded-md"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${"/students2.jpg"})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "15rem",
                  width: "100%",
                }}
              >
                <h1 className="absolute bottom-0 flex items-center mx-4 my-3 text-2xl font-semibold text-white">
                  For Students
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-all ease-in-out opacity-[-1] group-hover:opacity-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </h1>
              </div>
            </div>
            <div className="grid gap-8">
              <div
                className="w-full relative group cursor-pointer rounded-md"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${"/budget-friendly.jpg"})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "15rem",
                  width: "100%",
                }}
              >
                <h1 className="absolute bottom-0 flex items-center mx-4 my-3 text-2xl font-semibold text-white">
                  Budget Friendly
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-all ease-in-out opacity-[-1] group-hover:opacity-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </h1>
              </div>
              <div
                className="w-full relative group cursor-pointer rounded-md"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${"/single-room.jpg"})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "15rem",
                  width: "100%",
                }}
              >
                <h1 className="absolute bottom-0 flex items-center mx-4 my-3 text-2xl font-semibold text-white">
                  Single Rooms
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-all ease-in-out opacity-[-1] group-hover:opacity-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* faq */}
        <section className="section text-center">
          <h1 className="text-5xl font-bold capitalize">
            how can we <span className="text-blue-700">help</span> you ?
          </h1>
          <p className="w-2/3 mx-auto text-xl mt-6">
            Here are a few of the questions we get the most. If you don&apos;t
            see what&apos;s on your mind, reach out to us anytime on phone,
            chat, or email.
          </p>
          <form className="max-w-2xl mx-auto mt-6">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search..."
                required
              />
            </div>
            <p className="text-md mt-4">
              You can also browse the topics below to find what you are looking
              for.
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
