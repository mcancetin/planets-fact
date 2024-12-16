"use client";

import { use, useState } from "react";
import Link from "next/link";

import Button from "@/components/button";
import data from "@/data/data.json";

type PageProps = {
  params: Promise<{ planet: string }>;
};

export default function Page({ params }: PageProps) {
  const [type, setType] = useState("planet");

  const planet = use(params).planet;
  const planetData = data.find(
    (item) => item.name.toLocaleLowerCase() === planet.toLowerCase(),
  );

  return (
    <div className="grid items-center md:mt-36 md:grid-cols-[1fr_350px]">
      <div className="mb-32 mt-36">
        {/* {(type === "planet" || type === "geology") && (
          <Image
            className="mx-auto"
            src={planetData?.images.planet as string}
            alt=""
            width={558}
            height={558}
          />
        )}

        {type === "geology" && (
          <Image
            className="-m-16 mx-auto h-[] w-[163px]"
            src={planetData?.images.geology as string}
            alt=""
            width={163}
            height={198}
          />
        )}
        {type === "internal" && (
          <Image
            className="mx-auto"
            src={planetData?.images.internal as string}
            alt=""
            width={558}
            height={558}
          />
        )} */}
      </div>

      <div className="flex items-center justify-between md:block">
        <div className="max-w-[340px] text-center">
          <div>
            <h1 className="heading-2 pb-4 uppercase">{planet}</h1>
            <p className="pb-6 text-body">{planetData?.overview.content}</p>
          </div>

          <div className="pb-10 text-body text-white/50">
            <span>Source : </span>
            <Link
              className="underline"
              href={planetData?.overview.source as string}
            >
              Wikipedia
            </Link>
          </div>
        </div>

        <div className="hidden flex-col gap-3 md:flex">
          {["Overview", "Internal Structure", "Surface Geology"].map(
            (label, index) => {
              const buttonType =
                label === "Overview"
                  ? "planet"
                  : label === "Internal Structure"
                    ? "internal"
                    : "geology";

              return (
                <Button
                  key={label}
                  number={`0${index + 1}`}
                  label={label}
                  planet={planet}
                  isActive={type === buttonType}
                  onClick={() => setType(buttonType)}
                />
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}