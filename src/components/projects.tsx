import { useTranslations } from "next-intl";
import tcmPhoto from "public/images/projects/tcm-project.png";
import tcmVideoCover from "public/images/projects/tcm-project-video-cover.png";
import { PlaySvg, RBReverceRoundedSvg, StairSVG } from "./icons";

export default function Projects(): React.ReactElement {
  const t = useTranslations("landing.projects");

  return (
    <div className="container mt-16">
      <div className="mx-auto">
        <h3 className="text-center text-xl text-[#989898] uppercase">
          {t("subtitle")}
        </h3>
        <h2 className="font-bold text-5xl mt-5 text-center">{t("title")}</h2>
      </div>
      <TCMProject />
    </div>
  );
}

function TCMProject(): React.ReactElement {
  const t = useTranslations("landing.projects");
  return (
    <div className="w-full flex max-md:flex-col gap-10 max-xl:gap-5 2xl:h-[650px] xl:h-[580px] lg:h-[500px] md:h-[400px] max-md:h-[650px] mt-16">
      <div
        className="w-3/4 max-md:w-full h-full bg-cover rounded-t-4xl rounded-br-4xl flex items-end z-0"
        style={{ backgroundImage: `url(${tcmPhoto.src})` }}
      >
        <div className="w-1/2 min-w-72 relative">
          <StairSVG className="absolute w-full -bottom-0.5 -left-0.5 -z-10" />
          <span className="text-xl rounded-full border border-black px-5 py-1.5 ml-5">{t("TCM.fountain")}</span>
          <p className="font-medium text-6xl leading-[1.45] mt-5 ml-4">
            Tashkent <br />
            CityMall Summit
          </p>
        </div>
      </div>
      <div className="w-1/4 max-md:w-full h-full max-md:h-[600px] flex flex-col max-md:flex-row gap-10 max-xl:gap-5">
        <div className="w-full h-2/5 max-md:w-1/2 max-md:h-full px-11 py-9 flex flex-col justify-between bg-gradient-to-tr from-[#8AB2EE] to-[#C3D7FF] rounded-4xl">
          <p className="text-lg font-medium uppercase">{t("TCM.styleTitle")}</p>
          <p className="text-4xl font-medium">{t("TCM.style")}</p>
        </div>
        <div
          className="w-full h-3/5 max-md:w-1/2 max-md:h-full px-11 py-9 rounded-4xl flex items-end relative"
          style={{ backgroundImage: `url(${tcmVideoCover.src})` }}
        >
          <RBReverceRoundedSvg className="absolute -bottom-0.5 -right-0.5" />
          <h3 className="text-4xl font-medium text-white">
            {t("TCM.presTitle")}
          </h3>
          <PlaySvg className="h-1/4 absolute bottom-2 right-2 cursor-pointer group hover:scale-110 transition-all duration-300 hover:drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
}
