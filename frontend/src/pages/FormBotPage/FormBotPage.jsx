import React, { useEffect, useState, useRef } from "react";
import styles from "./FormBotPage.module.css";
import VideoPlayerCard from "../../components/FormBotComponents/BubbleComponents/VideoPlayer/VideoPlayer";
import ImageViewer from "../../components/FormBotComponents/BubbleComponents/ImageViewer/ImageViewer";
import BubbleText from "../../components/FormBotComponents/BubbleComponents/BubbleText/BubbleText";
import ButtonInput from "../../components/FormBotComponents/InputComponents/ButtonInput/ButtonInput";
import DateInput from "../../components/FormBotComponents/InputComponents/DateInput/DateInput";
import RatingInput from "../../components/FormBotComponents/InputComponents/RatingInput/RatingInput";
import TextInput from "../../components/FormBotComponents/InputComponents/TextInput/TextInput";
import BotIcon from "../../components/FormBotComponents/BubbleComponents/BotIcon/BotIcon";
import { getFormBot } from "../../api/form";
import { toast } from "react-toastify";

const FormBotPage = () => {
  const [formFlow, setFormFlow] = useState([]);
  const [theme, setTheme] = useState("#FFFFFF");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInputType, setIsInputType] = useState(false);
  const scrollRef = useRef();
  const formId = "66a82f40a408a4de8b66626a";

  useEffect(() => {
    getForm(formId);
  }, []);

  const getForm = async (formId) => {
    try {
      const response = await getFormBot(formId);

      if (response.success || response.status === 200) {
        const { flow, theme } = response?.data?.data;
        console.log(flow, theme);
        setFormFlow(flow);
        setTheme(theme);
      } else {
        toast.error("Please try again");
      }
    } catch (error) {
      toast.error(
        "An error occurred during fetching folders. Please try again later."
      );
    }
  };

  useEffect(() => {
    if (!isInputType) {
      const interval = setInterval(() => {
        if (currentIndex < formFlow.length) {
          const currentItem = formFlow[currentIndex];
          if (currentItem.bubbleOrInput === "bubble") {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          } else if (currentItem.bubbleOrInput === "input") {
            setIsInputType(true);
          }
        }
      }, 1000);
      handleScrollToBottom();
      return () => clearInterval(interval);
    }
  }, [currentIndex, formFlow, isInputType]);

  const handleScrollToBottom = () => {
    scrollRef.current.scrollIntoView();
  };

  const handleUserInput = () => {
    setIsInputType(false);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className={styles.formBotWrapper} style={{ background: theme }}>
      <div className={styles.chatContainer}>
        {formFlow.slice(0, currentIndex + 1).map((item, index) => {
          const { type, data } = item.content;
          const title = item.title;
          if (item.bubbleOrInput === "bubble") {
            return (
              <div key={index} className={styles.bubbleContainer}>
                <BotIcon />
                <div className={styles.bubbleContent}>
                  {(() => {
                    switch (type) {
                      case "text":
                        return <BubbleText text={data} />;
                      case "image":
                      case "gif":
                        return <ImageViewer src={data} />;
                      case "video":
                        return <VideoPlayerCard src={data} />;
                      default:
                        return null;
                    }
                  })()}
                </div>
              </div>
            );
          } else if (item.bubbleOrInput === "input") {
            switch (type) {
              case "text":
                return (
                  <TextInput
                    key={index}
                    title={title}
                    type="text"
                    placeholder={"Enter your text"}
                    onUserInput={handleUserInput}
                  />
                );
              case "number":
                return (
                  <TextInput
                    key={index}
                    title={title}
                    type="number"
                    placeholder={"Enter a number"}
                    onUserInput={handleUserInput}
                  />
                );
              case "email":
                return (
                  <TextInput
                    key={index}
                    title={title}
                    type="email"
                    placeholder={"Enter your email"}
                    onUserInput={handleUserInput}
                  />
                );
              case "phone":
                return (
                  <TextInput
                    key={index}
                    title={title}
                    type="tel"
                    placeholder={"Enter your phone"}
                    onUserInput={handleUserInput}
                  />
                );

              case "date":
                return (
                  <DateInput
                    key={index}
                    title={title}
                    onUserInput={handleUserInput}
                  />
                );
              case "rating":
                return (
                  <RatingInput
                    key={index}
                    title={title}
                    onUserInput={handleUserInput}
                  />
                );
              case "button":
                return (
                  <ButtonInput
                    key={index}
                    title={title}
                    data={data}
                    onUserInput={handleUserInput}
                  />
                );
              default:
                return null;
            }
          } else {
            return null;
          }
        })}
        <div ref={scrollRef}></div>
      </div>
    </div>
  );
};

export default FormBotPage;
