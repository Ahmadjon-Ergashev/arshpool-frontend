import { useTranslations } from "next-intl";


export default function Partners(): React.ReactElement {
    const t = useTranslations("landing.partners");
    return (
        <div className="container mt-16">
            <p className="text-center text-xl text-[#989898] uppercase">{t("description")}</p>
            <h2 className="text-5xl font-bold text-center mt-5">{t("title")}</h2>
            <div className="grid grid-cols-4 gap-4 mt-16">
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-semibold">Partner 1</h3>
                    <p>Partner 1 description</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-semibold">Partner 2</h3>
                    <p>Partner 2 description</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-semibold">Partner 3</h3>
                    <p>Partner 3 description</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-semibold">Partner 4</h3>
                    <p>Partner 4 description</p>
                </div>
            </div>
        </div>
    )
}