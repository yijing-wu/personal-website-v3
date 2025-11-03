import { myNavy } from "../styles/colors";
import { Text } from "../components/atoms";
function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: myNavy, textAlign: "center" }}>
        <Text
          style={{
            fontFamily: "SFMono-Regular",
            fontSize: 12,
            textAlign: "center",
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          {"© 2025 Yijing Wu. All rights reserved."}
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
