import ImageCard from "../ImageCard/ImageCard";
import { Gallery, GalleryItem } from "../types";
import s from "./ImageGallery.module.css";

type Props = {
  gallery: Gallery;
  onClick: (imageUrl: string) => void
}

const ImageGallery: React.FC<Props> = ({ gallery, onClick }) => {
  return (
    <ul className={s.list}>
      {gallery.map((item: GalleryItem) => (
        <ImageCard key={item.id} onClick={onClick} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
