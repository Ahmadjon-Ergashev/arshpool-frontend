"use client";
import Image from "next/image";
import { ImageType } from "@/types/product";

import "keen-slider/keen-slider.min.css";
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import { MutableRefObject } from "react";

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function ProductSlider({
  images,
}: {
  images: ImageType[];
}): React.ReactElement {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 10
    },
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 3,
        spacing: 20,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <div className="w-1/3 max-lg:w-full">
      <div ref={sliderRef} className="keen-slider mb-5">
        {images.map((image) => (
          <div
            key={image.id}
            className="keen-slider__slide w-full h-96 rounded-3xl"
          >
            <Image
              src={image.source}
              alt="Product Picture"
              className="w-full h-full object-cover"
              width={800}
              height={445}
            />
          </div>
        ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {images.map((image) => (
          <div
            key={image.id}
            className="keen-slider__slide rounded-3xl max-xl:h-28 h-36"
          >
            <Image
              src={image.source}
              alt="Product Picture"
              className="w-full h-full object-cover"
              width={255}
              height={140}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
