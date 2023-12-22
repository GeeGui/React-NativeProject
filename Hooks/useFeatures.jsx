import { useEffect, useState } from "react";

const useFeatures = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = require("../FakeData/fakeFeature.json");
      setFeatures(data.feat);
    };

    fetchData();
  }, []);

  return [features];
};

export default useFeatures;
