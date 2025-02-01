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
    <div className="container mt-16 px-14">
      <h2 className="text-5xl font-bold text-center mt-5">FAQ</h2>
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 gap-4 mt-16"
      >
        {ids.map((id) => (
          <AccordionItem
            value={`item-` + id}
            key={id}
            className="w-full rounded-3xl bg-[#dbebee7f] px-10 py-3 cursor-pointer hover:scale-[102%] hover:shadow-md transition-all duration-500 ease-in-out select-none"
          >
            <AccordionTrigger className="hover:no-underline text-2xl font-medium data-[state=open]:text-xl data-[state=open]:font-bold">
              <div className="flex items-center">
                <span className="font-bold text-4xl w-20">
                  {id}
                </span>
                {t(`questions.${id}.question`)}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-20 text-[20px]">
              {t(`questions.${id}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
