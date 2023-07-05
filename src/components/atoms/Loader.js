import React from "react"
import styled, { keyframes } from "styled-components"

export default function Loader() {
  return (
    <Wrapper>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </Wrapper>
  )
}

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`
const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

const Wrapper = styled.div`
position: fixed;
z-index: 17;
inset: 0;
background-color: #00000090;

.lds-ellipsis {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: ${ldsEllipsis1} 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: ${ldsEllipsis2} 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: ${ldsEllipsis2} 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: ${ldsEllipsis3} 0.6s infinite;
}


`