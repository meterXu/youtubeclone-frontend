import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TrendingCard from "../components/TrendingCard";
import { StyledTrending } from "./Trending";
import Skeleton from "../skeletons/TrendingSkeleton";
import { getLikedVideos } from "../reducers/likedVideo";

const LikedVideos = () => {
  const dispatch = useDispatch();
  const { isFetching, videos } = useSelector((state) => state.likedVideo);

  useEffect(() => {
    dispatch(getLikedVideos());
  }, [dispatch]);

  if (isFetching) {
    return <Skeleton />;
  }

  return (
    <StyledTrending>
      <h2>喜欢的影片</h2>

      {videos?.length === 0 && (
        <p className="secondary">
          您喜欢的视频将显示在此处
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

export default LikedVideos;
