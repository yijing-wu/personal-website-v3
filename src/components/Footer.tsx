import { myNavy } from "../styles/colors";
import { Text } from "../components/atoms";

function FooterMeta() {
  const year = new Date().getFullYear();
  return (
    <Text
      style={{
        fontFamily: "SFMono-Regular",
        fontSize: 12,
        textAlign: "center",
      }}
    >
      {`\u00a9 ${year} Yijing Wu. All rights reserved.`}
    </Text>
  );
}

function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: myNavy, textAlign: "center" }}>
        <div style={{ paddingTop: 6, paddingBottom: 30 }}>
          <FooterMeta />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
