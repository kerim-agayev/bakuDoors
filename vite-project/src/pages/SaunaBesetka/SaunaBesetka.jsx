
import Saunalar2 from "/saunaFile/saunaPhoto.jpg";
import Pavillion2 from "/besetka.jpg";
import { useTranslation } from "react-i18next";
import Main from "../../components/main/Main";

function SaunaBesetka() {
  const { t } = useTranslation();
  const a = t("saunatik");
  const b = t("pavilion");
  const aLink = "sauna";
  const bLink = "besetka";

  const text = {
    a: a,
    b: b,
  };
  const link = {
    aLink: aLink,
    bLink: bLink,
  };
  const imgPhoto = {
    img1: Saunalar2,
    img2: Pavillion2,
  };
  return (
    <>
  
<Main text={text} link = {link} imgPhoto={imgPhoto}/>
    </>
  );
}

export default SaunaBesetka;
