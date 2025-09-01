import Image from "next/image";
import s from "./PreviewImage.module.scss";

const PreviewImage = ({ src, liveUrl, title }) => {
  return (
    <a
      className={s.previewImg}
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`View ${title}`}
    >
      <Image src={src} alt={title} width={628} height={435} />
    </a>
  );
};

export default PreviewImage;
