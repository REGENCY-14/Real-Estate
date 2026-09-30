"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { montserrat } from "@/app/home/landing-fonts";
import { MATERIAL_SWATCHES, type MaterialSwatch } from "@/lib/artisanShowcase";

const TILE_SPANS = ["lg:col-span-8", "lg:col-span-4", "lg:col-span-4", "lg:col-span-8"];

function MaterialTile({ material, spanClassName }: { material: MaterialSwatch; spanClassName: string }) {
  return (
    <div className={`relative h-[240px] overflow-hidden rounded-2xl sm:h-[280px] lg:row-span-1 lg:h-full ${spanClassName}`}>
      <Image src={material.image} alt={material.name} fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 lg:opacity-0 lg:hover:opacity-100">
        <span className="rounded-full bg-black/60 px-4 py-1.5 text-base font-semibold text-white sm:px-5 sm:text-lg lg:px-6 lg:py-2 lg:text-2xl">
          {material.name}
        </span>
      </div>
    </div>
  );
}

export default function MaterialShowcaseSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#121212] via-[#606060] to-[#666] py-16 md:py-24 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 sm:px-8 lg:gap-16 lg:px-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex flex-col gap-4 sm:flex-1">
            <h2 className={`${montserrat.className} text-[24px] font-semibold text-white sm:text-[32px] lg:text-[40px]`}>
              The Texture of Quality
            </h2>
            <p className="max-w-[672px] text-sm text-white/50 sm:text-base lg:text-lg">
              Our procurement process begins at the source. From the veins of Tuscan quarries to the sustainable
              teak forests of Southeast Asia, we select materials that age with dignity.
            </p>
          </div>
          <div className="sm:flex sm:flex-1 sm:justify-end">
            <button
              type="button"
              onClick={() => toast.success("More material stories are on the way.")}
              className="rounded-2xl border border-white px-4 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              View all
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[800px] lg:grid-cols-12 lg:grid-rows-2">
          {MATERIAL_SWATCHES.map((material, index) => (
            <MaterialTile key={material.id} material={material} spanClassName={TILE_SPANS[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}
