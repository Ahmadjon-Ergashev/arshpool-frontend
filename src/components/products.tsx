"use client";

import { cn } from "@/lib/utils";
import product from "public/images/temp-product.png";
import { use, useEffect, useRef, useState } from "react";

const data = [
  {
    id: 0,
    name: "Product 1",
    description: "Description 1",
    price: "$100",
    image: product.src,
  },
  {
    id: 1,
    name: "Product 2",
    description: "Description 2",
    price: "$200",
    image: product.src,
  },
  {
    id: 2,
    name: "Product 3",
    description: "Description 3",
    price: "$300",
    image: product.src,
  },
  {
    id: 3,
    name: "Product 4",
    description: "Description 4",
    price: "$300",
    image: product.src,
  },
  {
    id: 4,
    name: "Product 5",
    description: "Description 5",
    price: "$300",
    image: product.src,
  },
  {
    id: 5,
    name: "Product 6",
    description: "Description 6",
    price: "$300",
    image: product.src,
  },
  {
    id: 6,
    name: "Product 7",
    description: "Description 7",
    price: "$300",
    image: product.src,
  },
];

const generateStyles = (
  width: number,
  cardWidth: number,
  count: number
): React.CSSProperties[] => {
  const styles: React.CSSProperties[] = [];
  if (count === 2) {
    return [{}, {}];
  }
  let zIndex = 1;
  let blur = -Math.floor(count / 2);
  let left = -cardWidth * Math.abs(blur) * .075;
  const center = width / 2;
  for (let i = 0; i < count; i++) {
    styles.push({
      minWidth: `${cardWidth}px`,
      width: `${cardWidth}px`,
      left: `${left}px`,
      zIndex: Math.abs(zIndex++),
      scale: `${100 - Math.abs(blur) * 15}%`,
      background: `${
        i + 1 === Math.ceil(count / 2)
          ? "white"
          : "linear-gradient(45deg, #fff, #e3f6ff)"
      }`,
      filter: `blur(${Math.abs(blur++)}px)`,
    });
    left += (center - cardWidth / 2) / (Math.ceil(count / 2) - 1) + cardWidth * .075;

    if (zIndex == Math.ceil(count / 2)) {
      zIndex = -zIndex;
    }
  }
  return styles;
};
export default function Products(): React.ReactElement {
  const container = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(500);
  const [cardWidth, setCardWidth] = useState(450);
  const [styles, setStyles] = useState(
    generateStyles(containerWidth, cardWidth, data.length)
  );

  useEffect(() => {
    setContainerWidth(container.current?.clientWidth ?? 1440);
  }, [container.current?.clientWidth]);
  useEffect(() => {
    setStyles(generateStyles(containerWidth, cardWidth, data.length));
  }, [cardWidth, containerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(container.current?.clientWidth ?? 1440);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(container);
  }, [container.current]);

  useEffect(() => {
    switch (true){
      case containerWidth < 550:
        setCardWidth(containerWidth - 100);
        break;
      case containerWidth < 900:
        setCardWidth(350);
        break;
      case containerWidth < 1350:
        setCardWidth(400);
        break;
      default:
        setCardWidth(450);
    }
  }, [containerWidth]);

  const onChangeHandler = (orientation: "left" | "right") => {
    if (orientation === "left") {
      const newStyles = styles.slice(1, styles.length).concat(styles[0]);
      setStyles(newStyles);
    } else {
      const newStyles = styles
        .slice(styles.length - 1, styles.length)
        .concat(styles.slice(0, styles.length - 1));
      setStyles(newStyles);
    }
  };
  return (
    <div className="container mt-16 h-52 relative" ref={container}>
      {data.map((product, index) => (
        <Product
          key={index}
          {...product}
          style={styles.at(index) ?? {}}
          onChangeHandler={() =>
            onChangeHandler(
              parseInt(
                styles.at(index)?.left?.toString().split("px")[0] ?? "0"
              ) <
                containerWidth / 2 - 225
                ? "left"
                : "right"
            )
          }
        />
      ))}
    </div>
  );
}

type ProductType = {
  style: React.CSSProperties;
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  onChangeHandler: () => void;
};

function Product(props: ProductType): React.ReactElement {
  const { style, id, name, description, price, image, onChangeHandler } = props;
  return (
    <div
      style={style}
      onClick={() => onChangeHandler()}
      className={cn(
        "flex max-sm:h-50 gap-7 p-4 rounded-3xl bg-white border shadow-xl cursor-pointer absolute select-none top-0 transition-all duration-500"
      )}
    >
      <img src={image} alt={name} className="max-sm:h-32 w-auto" />
      <div className="flex flex-col justify-center">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
