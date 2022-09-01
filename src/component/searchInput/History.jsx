import React from 'react'
import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";
import { setHistory } from "../../store/slices/save";

const HistoryContainerSt = styled.div`
  ${'' /* display: none; */}
  position: absolute;
  top: 40px;
  width: 20rem;
  background-color: #fff;
  margin-top: 0.5rem;
  padding: 0.5rem 1.5rem 1rem;
  box-shadow: 1px 1px 5px #ccc;
`

const HistoryTitleContainerSt = styled.div`
  width: 100%;
  display: flex;
`

const TitleSt = styled.span`
  line-height: 1.5;
  padding-left: 0.5rem;
  font-size: 16px;
`

const IconSt = styled.div`
  margin-left: 0.2rem;
  display: flex;
  align-items: center;
`

const HistoryListContainerSt = styled.ul`
  padding: 0.5rem 0.5rem 0rem;
  padding-right: 1rem;
  border-bottom: 1px solid black;
  overflow: hidden;
`

const KeywordListSt = styled.li`
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const KeywordSt = styled.span`
  font-size: 18px;
  font-weight: 400;
`

export default function History() {

  // console.log('keyword', keywords)

  return (
    <HistoryContainerSt>
        <HistoryTitleContainerSt>
          <TitleSt>Recent Keyword</TitleSt>
          <IconSt><BiTimeFive /></IconSt>
        </HistoryTitleContainerSt>

        <HistoryListContainerSt>
              <KeywordListSt>
                <KeywordSt>{ setHistory }</KeywordSt>
              </KeywordListSt>
        </HistoryListContainerSt> 
    </HistoryContainerSt>
  );
};
