import { useState, useEffect } from "react";
import content from "../../data/content.json";

const useContent = () => {
  const [contentData, setContentData] = useState(content);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const fetchData = async () => {
        try {
          const response = await fetch("http://your-home-server-ip:8080/content.json");
          const data = await response.json();
          setContentData(data);
        } catch (error) {
          console.error("Error fetching content:", error);
        }
      };

      fetchData();
    }
  }, []);

  return contentData;
};

export default useContent;