// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, CodePane } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import content from "./content";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {content.map(
          ({ title, type, example, heading }, i) =>
            type === "TITLE" ? (
              <Slide key={i} transition={["zoom"]} bgColor="primary">
                <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                  {title}
                </Heading>
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                  {heading}
                </Text>
              </Slide>
            ) : (
              <Slide key={i} transition={["fade"]} bgColor="tertiary">
                <Heading size={1} textColor="secondary" margin="">
                  {title}
                </Heading>

                <CodePane
                  lang="markup"
                  theme="light"
                  source={example}
                  margin="20px auto"
                  overflow="overflow"
                />
              </Slide>
            )
        )}
      </Deck>
    );
  }
}
