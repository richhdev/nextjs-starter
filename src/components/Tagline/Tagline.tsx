import { useState, useEffect } from "react";
import { ff, fz } from "@/theme";
import Text from "@/components/Text";

const Tagline = (props: { text: string }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    let currentText: string;
    let interval: NodeJS.Timeout | null;

    function typeWriter(text: string) {
      if (i <= text.length) {
        currentText = text.substring(0, i++);
        setTypedText(currentText);
        interval = setTimeout(() => {
          typeWriter(text);
        }, randomInteger(1, 200));
      }
    }

    typeWriter(props.text);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [props.text]);

  return (
    <Text ff={ff.mono} fz={fz.h1Responsive}>
      {typedText}
    </Text>
  );
};

export default Tagline;

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
