import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../landing-fonts";
import BgStringsBackground from "./decor/BgStringsBackground";

type SideEstate = {
  image: string;
  price: string;
  title: string;
  location: string;
  facts: string[];
};

const SIDE_ESTATES: SideEstate[] = [
  {
    image: "/landing/chelsea-heights.jpg",
    price: "$4.2M",
    title: "Chelsea Heights Penthouse",
    location: "London, UK",
    facts: ["3 Bed", "2 Bath", "2,100 sqft"],
  },
  {
    image: "/landing/uluwatu-villa.jpg",
    price: "$2.8M",
    title: "Uluwatu Cliffside Villa",
    location: "Bali, Indonesia",
    facts: ["4 Bed", "5 Bath", "4,500 sqft"],
  },
];

function LocationPinIcon() {
  return (
    <svg width="10" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C7.6 2 4 5.6 4 10c0 5.6 6.6 11.3 7 11.6.3.3.7.3 1 0 .4-.3 7-6 7-11.6 0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  );
}

export default function FeaturedEstatesSection() {
  return (
    <section id="featured-estates" className="relative w-full overflow-hidden bg-[#fcf9f8]">
      <BgStringsBackground />
      <div className="relative mx-auto max-w-[1280px] px-8 py-16 md:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[1.4px] text-[#be4d00]">Curated Selection</p>
            <h2 className={`${montserrat.className} text-[24px] font-semibold text-[#00261b] sm:text-[32px] md:text-[40px]`}>
              Featured Legacy Estates
            </h2>
          </div>
          <div className="hidden items-center gap-4 sm:flex" aria-hidden="true">
            <span className="flex size-12 items-center justify-center rounded-full border-2 border-[#c0c8c3] text-[#c0c8c3]">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M7 1 1 6l6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="flex size-12 items-center justify-center rounded-full bg-[#be4d00] text-white">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1 1l6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Link
            href="/property"
            className="group relative col-span-1 h-[420px] overflow-hidden rounded-2xl shadow-[0px_20px_40px_0px_rgba(26,26,26,0.08)] lg:col-span-8 lg:h-[600px]"
          >
            <Image
              src="/hotel/hotel-dusk-pool.jpg"
              alt="The Sandstone Valleys"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 sm:gap-3 sm:p-6 md:p-10">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="rounded-full bg-[rgba(254,214,91,0.9)] px-3 py-1.5 text-xs font-semibold tracking-[0.7px] text-[#0f1621] sm:text-sm">
                  Featured Exclusive
                </span>
                <span className="rounded-full bg-[rgba(229,226,225,0.9)] px-3 py-1.5 text-xs font-semibold tracking-[0.7px] text-[#0f1621] sm:text-sm">
                  Airport Residential
                </span>
              </div>
              <h3 className={`${montserrat.className} pt-1 text-[20px] font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-[28px] md:text-[40px]`}>
                The Sandstone Valleys
              </h3>
              <p className="hidden max-w-[576px] text-sm text-white/90 sm:block sm:text-base">
                A masterfully carved sanctuary where ancient geological beauty meets 21st-century architectural
                precision.
              </p>
              <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="flex flex-wrap gap-4 text-sm text-white sm:gap-6 sm:text-base">
                  <span>8 Beds</span>
                  <span>12 Baths</span>
                  <span>12,400 sqft</span>
                </div>
                <span className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-2.5 text-sm text-[#06090e]">
                  View details
                </span>
              </div>
            </div>
          </Link>

          <div className="col-span-1 flex flex-col gap-6 lg:col-span-4">
            {SIDE_ESTATES.map((estate) => (
              <Link
                href="/property"
                key={estate.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_20px_40px_0px_rgba(26,26,26,0.08)]"
              >
                <div className="relative h-[200px] shrink-0 overflow-hidden lg:h-[256px]">
                  <Image
                    src={estate.image}
                    alt={estate.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 rounded-xl bg-white/90 px-3 py-1 text-base font-bold text-[#00261b] backdrop-blur">
                    {estate.price}
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-6">
                  <h4 className={`${montserrat.className} text-2xl font-semibold text-[#00261b]`}>{estate.title}</h4>
                  <p className="flex items-center gap-1 text-base text-[#414944]">
                    <LocationPinIcon />
                    {estate.location}
                  </p>
                  <div className="flex gap-4 pt-3">
                    {estate.facts.map((fact) => (
                      <span key={fact} className="text-sm font-semibold tracking-[0.7px] text-[#717974]">
                        {fact}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
