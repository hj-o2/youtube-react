import { useEffect, useContext } from "react";

import { Layout } from "../components/Layout/Layout";
import { fetchPopularData } from "../apis/index";
import { Store } from "../store/index";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import VideoGridItem from "../components/VideoGrid/VideoGridItem";

export const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log("data", res);
      setGlobalState({
        type: "SET_POPULAR",
        payload: { poplar: res.data.items },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <Layout>
        <VideoGrid>
          {globalState.popular &&
            globalState.popular.map((popular) => {
              return (
                <VideoGridItem
                  id={popular.map}
                  key={popular.id}
                  src={popular.snippet.thumbnails.standard.url}
                  title={popular.snippet.title}
                />
              );
            })}
        </VideoGrid>
      </Layout>
      Top
    </Layout>
  );
};
