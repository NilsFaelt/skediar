import Styles from "./kontakteOss.module.css";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

const KontaktaOss = () => {
  return (
    <div className={Styles.container}>
      <ChatBubbleOvalLeftIcon className={Styles.icon} />
      <p>Kontakt oss</p>
    </div>
  );
};

export default KontaktaOss;
