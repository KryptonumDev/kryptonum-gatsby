import React from "react";
import styled from "styled-components";
import { toPlainText } from '@portabletext/react';
import { Clock } from "./Icons";
import { Clamp } from "../../utils/functions";

const readingTime = (text) => {
  const countWords = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === '') {
      return 0;
    }
    const words = trimmedText.split(/\s+/);
    return words.length;
  };
  const plainText = toPlainText(text);
  const words = countWords(plainText);
  const averageReadingSpeedWordsPerMinute = 200;
  const readingTime = Math.ceil(words / averageReadingSpeedWordsPerMinute);
  return readingTime;
};

const ReadingTime = ({ content }) => {
  return (
    <Wrapper>
      <Clock />
      <span>{readingTime(content)} min. czytania</span>
    </Wrapper>
  );
}

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${Clamp(16, 22, 20)};

`

export default ReadingTime;