import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import fetchPictures from "../../apiService/pictures";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { Gallery, PictureResponse } from "../types";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [pictures, setPictures] = useState<Gallery>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<string>("");

  const handleSubmit = (value: string): void => {
    setSearchValue(value);
    setPictures([]);
    setPage(1);
  };
  const openModal = (imageUrl: string): void => {
    setCurrentImg(imageUrl);
    setIsOpen(true);
  };
  const closeModal = (): void => {
    setIsOpen(false);
    setCurrentImg("");
  };
  const onClick = (): void => {
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    const getPictures = async (): Promise<void> => {
      if (!searchValue) {
        return;
      }
      try {
        setIsLoading(true);
        setIsError(false);
        const res: PictureResponse = await fetchPictures(searchValue, page, 12);
        setPictures((prev) => [...prev, ...res.results]);
        setTotal(res.total_pages);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPictures();
  }, [searchValue, page]);
  console.log(pictures);
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      <ImageGallery gallery={pictures} onClick={openModal} />
      {isLoading && <Loader />}
      {pictures.length !== 0 && total > page && !isLoading && (
        <LoadMoreBtn onClick={onClick} />
      )}
      <Toaster />
      <ImageModal
        isOpen={isOpen}
        onCloseClick={closeModal}
        imageUrl={currentImg}
      />
    </>
  );
}

export default App;
