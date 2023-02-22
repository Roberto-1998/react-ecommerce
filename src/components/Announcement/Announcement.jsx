import { useTranslation } from "react-i18next";
import { Container } from "./Announcement.styled";

const Announcement = () => {
  const [t] = useTranslation("announcement");

  return (
    <Container>
      <p className="animate__animated animate__flash animate__repeat-3 animate__delay-1s animate__slow	">
        {t("text")}
      </p>
    </Container>
  );
};

export default Announcement;
