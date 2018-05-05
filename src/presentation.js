// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, CodePane, Fill, Fit } from "spectacle";

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
          ({ title, type, examples, heading }, i) =>
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
              examples &&
              examples.map(example => (
                <Slide key={example} transition={["fade"]} bgColor="tertiary">
                  <div
                    style={{
                      height: "10000px",
                      width: "10000px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Fit>
                      <Heading size={3} textColor="secondary">
                        {title}
                      </Heading>
                    </Fit>

                    {example && (
                      <Fill>
                        <CodePane
                          lang="markup"
                          theme="light"
                          source={example}
                          margin="20px auto"
                          overflow="overflow"
                        />
                      </Fill>
                    )}
                  </div>
                </Slide>
              ))
            )
        )}
      </Deck>
    );
  }
}
