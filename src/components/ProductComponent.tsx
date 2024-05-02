import { useTranslation } from "react-i18next";

interface ProductComponentProps {
  title: string;
  description: string;
  img: string;
}

const ProductComponent = ({ title, description, img }: ProductComponentProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-3">{t(title)}</h1>
      <p>{t(description)}</p>
      <div className="mx-auto mt-6">
        <img src={img} alt="" className="w-full rounded-3xl" />
      </div>
      <div className="mt-4">
        <button onClick={() => changeLanguage("en")} className="mr-2">English</button>
        <button onClick={() => changeLanguage("fr")} className="mr-2">French</button>
        <button onClick={() => changeLanguage("it")}>Italian</button>
      </div>
    </div>
  );
};

export default ProductComponent;
