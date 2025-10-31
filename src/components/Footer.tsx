import { myMilkYellow, myNavy } from "../MyLibrary/MyColors";
import { Text } from "../MyLibrary";

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
          {"Inspired by "}
          <a
            href={"https://github.com/bchiang7/v4"}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: myMilkYellow,
            }}
          >
            Brittany Chiang
          </a>
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
