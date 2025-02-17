"use client";

import { GallaryType } from "@/types/gallary";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


function generateStyles(count: number, cols: number): React.CSSProperties[] {
  const random = () => Math.floor(Math.random() * 20) - 10;
  const styles = [];
  const gap = cols === 2 ? "0.25rem" : cols === 3 ? "1rem" : "0.9375rem";

  let availableWidth = 100;
  for (let i = 1; i <= count; i++) {
    if (i % cols === 0) {
      styles.push({ width: `calc(${availableWidth}% - ${gap})` });
      availableWidth = 100;
      continue;
    }
    const width = availableWidth / (cols - ((i % cols) - 1)) + random();
    styles.push({ width: `calc(${width}% - ${gap})` });
    availableWidth -= width;
  }
  return styles;
}

export default function GallaryGrid({
  gallary,
  locale,
}: {
  gallary: GallaryType;
  locale: "uz" | "ru";
}): React.ReactElement {
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(min-width: 768px)");
  const isLarge = useMediaQuery("(min-width: 1280px)");

  const [styles, setStyles] = useState<React.CSSProperties[]>([]);
  const [modalState, setModalState] = useState({ open: false, image: "" });

  useEffect(() => {
    if (isLarge) {
      setStyles(generateStyles(gallary.images.length, 4));
    } else if (isMedium) {
      setStyles(generateStyles(gallary.images.length, 3));
    } else {
      setStyles(generateStyles(gallary.images.length, 2));
    }
  }, [isSmall, isMedium, isLarge]);

  return (
    <div id={gallary.id}>
      <h1 className="font-semibold xl:text-4xl md:text-3xl max-md:text-2xl py-2">{gallary[`name_${locale}`]}</h1>
      <p className="xl:text-2xl md:xl max-md:text-lg">{gallary[`description_${locale}`]}</p>
      <div className="flex flex-wrap xl:gap-5 md:gap-4 max-md:gap-2 mt-4">
        {gallary.images.map((image, inx) => (
          <Image
            src={image.source}
            alt={image.id}
            key={image.id}
            width={900}
            height={600}
            className={cn(
              "rounded-xl xl:h-[300px] md:h-[200px] h-[150px] object-cover w-1/4"
            )}
            style={styles[inx]}
            onClick={() => setModalState({ open: true, image: image.source })}
          />
        ))}
      </div>
      <div
        className={cn("fixed inset-0 bg-black/70 z-50", {
          hidden: !modalState.open,
        })}
        onClick={() => setModalState({ open: false, image: "" })}
      >
        <div className="flex justify-center items-center h-full">
          {modalState.image && (
            <Image
              src={modalState.image}
              alt="Arshpool Building"
              width={900}
              height={600}
              loading="lazy"
              className="cursor-pointer h-[95%] w-[95%] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
