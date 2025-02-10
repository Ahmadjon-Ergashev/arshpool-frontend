import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faq(): React.ReactElement {
  const t = useTranslations("landing.FAQ");
  const ids = ["01", "02", "03"];
  return (
    <div className="container mt-20 max-sm:mt-4 xl:px-14 md:px-8 max-sm:px-4">
      <h2 className="xl:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl font-bold text-center mt-5">FAQ</h2>
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 gap-4 mt-16 max-sm:mt-6"
      >
        {ids.map((id) => (
          <AccordionItem
            value={`item-` + id}
            key={id}
            className="w-full rounded-3xl bg-[#dbebee7f] px-10 py-3 max-sm:px-4 max-sm:py-1 cursor-pointer hover:scale-[102%] hover:shadow-md transition-all duration-500 ease-in-out select-none"
          >
            <AccordionTrigger className="hover:no-underline lg:text-2xl md:text-xl sm:text-lg max-sm:text-base font-medium  data-[state=open]:font-bold">
              <div className="flex items-center">
                <span className="font-bold xl:text-4xl md:text-3xl sm:text-2xl max-sm:text-xl w-20 max-sm:gap-2">
                  {id}
                </span>
                {t(`questions.${id}.question`)}
              </div>
            </AccordionTrigger>
            <AccordionContent className="xl:pl-20 md:pl-10 max-sm:pl-4 xl:text-[20px] md:text-base max-sm:text-sm">
              {t(`questions.${id}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
