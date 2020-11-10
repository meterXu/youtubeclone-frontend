import React from "react";
import { useSelector } from "react-redux";

const ChannelTabAbout = () => {
  const { channelDescription: about } = useSelector(
    (state) => state.profile.data
  );

  return <p>{about ? about : "没有任何简介"}</p>;
};

export default ChannelTabAbout;
