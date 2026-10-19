import Image from "next/image";
import s from "./PreviewImage.module.scss";

const PreviewImage = ({ src, liveUrl, title, loading = "eager" }) => {
  const titleText = `View live preview of ${title}`;

  return (
    <a
      className={s.previewImg}
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={titleText}
      aria-label={titleText}
    >
      <Image src={src} alt="" width={628} height={435} loading={loading} />
    </a>
  );
};

export default PreviewImage;
