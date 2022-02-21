import { Text, TextProps } from "./Themed";

export const Title: React.FC<TextProps> = ({ style, ...otherProps }) => {
    return (
      <Text
        style={[{ fontFamily: "OpenSans_700Bold", fontSize: 18 }, style]}
        {...otherProps}
      />
    );
  };