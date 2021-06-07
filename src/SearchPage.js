import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./AllCss/SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
        channel="Coat of Many Colours"
        verified
        subs="25K"
        noOfVideos={385}
        description="Let's introduce you to the world of colours.Let's introduce you to the world of colours.Let's introduce you to the world of colours."
      />
      <hr />

      <VideoRow
        views="5k"
        subs="1k "
        description="How should you style colour red? what shade of red suits your SKIN? Find out in this video"
        timestamp="1 day ago"
        channel="Coat of Many Colors"
        title="Let's style you in Red!"
        image="https://images.unsplash.com/photo-1514388614019-c755c395185c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      />

      <VideoRow
        views="5k"
        subs="1k "
        description="How should you style colour red? what shade of red suits your SKIN? Find out in this video"
        timestamp="1 day ago"
        channel="Coat of Many Colors"
        title="Let's style you in Red!"
        image="https://images.unsplash.com/photo-1514388614019-c755c395185c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      />

      <VideoRow
        views="5k"
        subs="1k "
        description="How should you style colour red? what shade of red suits your SKIN? Find out in this video"
        timestamp="1 day ago"
        channel="Coat of Many Colors"
        title="Let's style you in Red!"
        image="https://images.unsplash.com/photo-1445197138520-6099f1c07aa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
      />

      <VideoRow
        views="5k"
        subs="1k "
        description="How should you style colour red? what shade of red suits your SKIN? Find out in this video"
        timestamp="1 day ago"
        channel="Coat of Many Colors"
        title="Let's style you in Red!"
        image="https://images.unsplash.com/photo-1485081791449-31e80b36c854?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      />

      <VideoRow
        views="5k"
        subs="1k "
        description="How should you style colour red? what shade of red suits your SKIN? Find out in this video"
        timestamp="1 day ago"
        channel="Coat of Many Colors"
        title="Let's style you in Red!"
        image="https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      />
    </div>
  );
}

export default SearchPage;
