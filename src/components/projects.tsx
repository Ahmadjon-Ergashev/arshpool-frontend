import { useTranslations } from "next-intl";
import tcmPhoto from "public/images/projects/tcm-project.png";
import tcmVideoCover from "public/images/projects/tcm-project-video-cover.png";
import { PlaySvg, RBReverceRoundedSvg, StairSVG } from "./icons";

export default function Projects(): React.ReactElement {
  const t = useTranslations("landing.projects");

  return (
    <div className="container mt-16 max-md:mt-10" id='about'>
      <div className="mx-auto">
        <h3 className="text-center text-xl max-md:text-xs text-[#989898] uppercase">
          {t("subtitle")}
        </h3>
        <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl max-md:text-2xl mt-5 max-md:mt-2 text-center">
          {t("title")}
        </h2>
      </div>
      <TCMProject />
    </div>
  );
}

function TCMProject(): React.ReactElement {
  const t = useTranslations("landing.projects");
  return (
    <div className="w-full flex max-md:flex-col gap-10 max-xl:gap-5 mt-16 max-md:mt-10">
      <div
        className="w-3/4 max-md:w-full xl:h-[650px] lg:h-[550px] md:h-[450px] sm:h-[350px] max-sm:h-[225px] bg-cover rounded-4xl max-md:rounded-2xl flex items-end z-0"
        style={{ backgroundImage: `url(${tcmPhoto.src})` }}
      >
        <div className="w-3/5 h-1/2 relative flex flex-col justify-between max-sm:pt-6 sm:pt-9 md:pt-11 lg:pt-14 lg:pb-4 xl:pt-16">
          <StairSVG className="absolute h-full -bottom-0.5 -left-0.5 -z-10" />
          <span className="w-fit max-sm:text-xs sm:text-sm md:text-base xl:text-xl rounded-full border-black px-5 py-1.5 max-md:px-1 max-md:py-0.5 md:border sm:ml-2 xl:ml-6">
            {t("TCM.fountain")}
          </span>
          <p className="w-full font-medium max-sm:text-2xl sm:text-4xl md:text-[44px] lg:text-[54px] xl:text-6xl sm:ml-2 xl:ml-6">
            Tashkent <br />
          </p>
          <p className="w-full font-medium max-sm:text-2xl sm:text-4xl md:text-[44px] lg:text-[54px] xl:text-6xl sm:ml-2 xl:ml-6">
            CityMall Summit
          </p>
        </div>
      </div>
      <div className="w-1/4 max-md:w-full xl:h-[650px] lg:h-[550px] md:h-[450px] sm:h-[350px] max-sm:h-[100px] flex flex-col max-md:flex-row gap-10 max-xl:gap-3">
        <div
          className="w-full max-md:w-[calc(50%-6px)] max-sm:h-[100px] sm:h-[150px] md:h-2/5
                        xl:px-11 xl:py-9 lg:py-9 md:px-5 md:py-5 max-xl:px-4 max-md:py-3
                        flex flex-col justify-between bg-gradient-to-tr from-[#8AB2EE] to-[#C3D7FF]
                        rounded-4xl max-md:rounded-2xl"
        >
          <p className="max-sm:text-sm lg:text-base xl:text-lg font-medium uppercase">
            {t("TCM.styleTitle")}
          </p>
          <p className="max-xs:text-xs min-[350px]:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium">
            {t("TCM.style")}
          </p>
        </div>
        <div
          className="w-full max-md:w-[calc(50%-6px)] max-sm:h-[100px] sm:h-[150px] md:h-3/5
                    xl:p-[2.75rem_2.25rem] xl:py-9 lg:py-9 max-xl:px-6 max-lg:py-5
                    rounded-4xl max-md:rounded-2xl flex lg:items-end relative"
          style={{ backgroundImage: `url(${tcmVideoCover.src})` }}
        >
          <RBReverceRoundedSvg className="absolute -bottom-0.5 -right-0.5" />
          <h3 className="max-xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-white md:w-2/3">
            {t("TCM.presTitle")}
          </h3>
          <PlaySvg className="h-1/4 max-md:h-2/5 absolute bottom-2 right-2 cursor-pointer group hover:scale-110 transition-all duration-300 hover:drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
}
