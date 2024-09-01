import axios from "axios";
import { PictureResponse } from "../components/types";

const fetchPictures = async (searchValue: string, page = 1, per_page = 5): Promise<PictureResponse> => {
  const accessKey = "mKl4HWZDm9TQAX7hIWMXYsezaqscAetuYufJQcGi1yA";
  const res = await axios.get<PictureResponse>("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: searchValue,
      page,
      per_page,
    },
  });
  console.log(res.data);
  
  return res.data;
};

export default fetchPictures;

