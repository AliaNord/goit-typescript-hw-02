import { GalleryItem } from "../types";
import s from "./ImageCard.module.css";
import { onClickHandler } from "./ImageCard.types";

type Props = {
  item: GalleryItem;
  onClick: onClickHandler;
}

const ImageCard: React.FC<Props> = ({ item, onClick }) => {
  return (
    <li className={s.card}>
      <img
        src={item.urls.small}
        alt={item.slug}
        onClick={(): void => onClick(item.urls.regular)}
        style={{ cursor: "pointer" }}
      />
    </li>
  );
};

export default ImageCard;
