import React from "react";
import styles from "./Flow.module.css";
import FlowSidebar from "../FlowSidebar/FlowSidebar";
import FlowStartFlag from "../../../assets/icons/flow-start-icon.svg";
import BubbleCard from "../BubbleCard/BubbleCard";
import BubbleText from "../../../assets/icons/bubble-text-icon.svg";
import BubbleImage from "../../../assets/icons/bubble-image-icon.svg";
import BubbleVideo from "../../../assets/icons/bubble-video-icon.svg";
import BubbleGif from "../../../assets/icons/bubble-gif-icon.svg";
import InputFlowCard from "../InputCard/InputFlowCard/InputFlowCard";
import InputButtonCard from "../InputCard/InputButtonCard/InputButtonCard";

const Flow = () => {
  return (
    <div className={styles.flowWrapper}>
      <div className={styles.sidebarConatiner}>
        <FlowSidebar />
      </div>
      <div className={styles.flowContainer}>
        <div className={styles.flowStart}>
          <img src={FlowStartFlag} alt="flow start flag" />
          <p>Start</p>
        </div>
        <div className={styles.formFlows}>
          <BubbleCard
            logoType={BubbleText}
            title={"Text"}
            type={"bubble"}
            placeholder={"Click here to edit"}
          />
          <BubbleCard
            logoType={BubbleImage}
            title={"Image"}
            type={"bubble"}
            placeholder={"Click to add link"}
          />
          <BubbleCard
            logoType={BubbleVideo}
            title={"Video"}
            type={"bubble"}
            placeholder={"Click to add link"}
          />
          <BubbleCard
            logoType={BubbleGif}
            title={"GIF"}
            type={"bubble"}
            placeholder={"Click to add link"}
          />
          <InputFlowCard />
          <InputButtonCard />
        </div>
      </div>
    </div>
  );
};

export default Flow;
