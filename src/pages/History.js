import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TrendingCard from "../components/TrendingCard";
import { StyledTrending } from "./Trending";
import Skeleton from "../skeletons/TrendingSkeleton";
import { getHistory } from "../reducers/history";

const History = ({ nopad }) => {
  const dispatch = useDispatch();
  const { isFetching, videos } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  if (isFetching) {
    return <Skeleton />;
  }

  return (
    <StyledTrending nopad={nopad}>
      <h2>历史记录</h2>

      {!isFetching && !videos.length && (
        <p className="secondary">
          您观看的视频将显示在此处
        </p>
      )}

      {videos.map((video) => (
        <Link key={video.id} to={`/watch/${video.id}`}>
          <TrendingCard video={video} />
        </Link>
      ))}
    </StyledTrending>
  );
};

export default History;
