import React from "react"
import DecorativeHeading from "../../atoms/DecorativeHeading";

export default function Hero({ data: { hero_Heading, hero_Subheading, hero_Img } }) {
  return (
    <section>
      <DecorativeHeading type='h1'>Tym razem zmieniamy reguły gry</DecorativeHeading>
    </section>
  )
}