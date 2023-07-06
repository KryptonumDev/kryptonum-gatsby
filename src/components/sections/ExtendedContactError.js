import React from "react"
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import { Error, Mail, Tel } from "../atoms/Icons";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Button from "../atoms/Button";

export default function ErrorSend({ resend }) {
  return (
    <Wrapper>
      <div className="text-part">
        <h2>
          <Error /> Jakiś serwer ma czkawkę
        </h2>
        <ReactMarkdown>
          Już go **namierzamy**, a Ciebie prosimy:
          wyślij formularz jeszcze raz lub
          spróbuj za jakiś czas
        </ReactMarkdown>
        <Button onClick={resend} theme="primary">
          Spróbuj ponownie
        </Button>
        <ReactMarkdown>
          Problem się **powtarza**? Skontaktuj się z nami telefonicznie lub mailowo
        </ReactMarkdown>
        <div className="flex">
          <div>
            <Tel /> <span>+48 793 272 020</span>
          </div>
          <div>
            <Mail /> <span>michal@kryptonum.eu</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .text-part{
    display: grid;
    gap: 32px;
    margin: 80px auto 0 auto;
    width: fit-content;

    @media (max-width: 999px) {
      padding-left: 0;
      margin: 0 0 80px 0;
    }
  }
  
  h2{
    font-size: ${Clamp(28, 30, 30)};
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    margin: 0 auto;
    color: #EE6470;


    @media (max-width: 480px) {
      flex-direction: column;
      text-align: center;
    }

    svg{
      width: 48px;
      height: 48px;
    }
  }

  button{
    width: fit-content;
    margin: 0 auto 32px auto;
  }

  p{
    font-size: ${Clamp(16, 22, 22)};
    max-width: 520px;
    text-align: center;
  }

  .flex{
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;

    >div{
      display: flex;
      align-items: center;
      gap: 8px;

      svg{
        width: 32px;
        height: 32px;

        path{
          stroke-width: 1px;
        }
      }
    }
  }
`