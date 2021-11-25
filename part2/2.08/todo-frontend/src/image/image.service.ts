import axios from "axios";

export const loadImage = async (): Promise<string> => {
  const response = await axios.get("/api/image", {
    responseType: "arraybuffer",
  });
  return Buffer.from(response.data, "binary").toString("base64");
};
