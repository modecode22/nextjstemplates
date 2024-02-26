import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const HeroMarquee = () => {
  return (
    <Marquee
      key={"Hero"}
      autoFill
      gradient
      gradientColor="var(--dark-900)"
      className="border-x h-24 border-dark-700"
    >
        <Link
          target="_blank"
          href="https://nextjs.org"
          title="nextjs"
          className="flex duration-75 w-40  transition-colors border-collapse h-24 hover:bg-primary-500/10 justify-center  border-x border-dark-700 items-center  "
        >
          <Image
            className="w-2/3 p-3 grayscale"
            height={15}
            width={30}
            src="/next.svg"
            alt="next js logo"
          />
        </Link>
        <Link
          target="_blank"
          href="https://astro.build"
          title="astrojs"
          className="flex duration-75 w-40  transition-colors border-collapse h-24 hover:bg-primary-500/10 justify-center  border-x border-dark-700 items-center  "
        >
          <Image
            className="w-2/3 p-3 grayscale"
            height={15}
            width={30}
            src="/astro.svg"
            alt="astro js logo"
          />
        </Link>
        <Link
          target="_blank"
          href="https://tailwindcss.com"
          title="tailwind css"
          className="flex duration-75 w-40  transition-colors border-collapse h-24 hover:bg-primary-500/10 justify-center  border-x border-dark-700 items-center  "
        >
          <Image
            className="w-2/3 p-3 grayscale"
            height={15}
            width={30}
            src="/tailwind.svg"
            alt="tailwind css logo"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.typescriptlang.org"
          title="typescript"
          className="flex duration-75 w-40  transition-colors border-collapse h-24 hover:bg-primary-500/10 justify-center  border-x border-dark-700 items-center  "
        >
          <Image
            className="w-2/3 p-3 grayscale"
            height={15}
            width={30}
            src="/ts.svg"
            alt="typescript logo"
            />
        </Link>
    </Marquee>
  );
};

export default HeroMarquee;
