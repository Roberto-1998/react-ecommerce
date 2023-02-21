import { Container } from "./Announcement.styled";

const Announcement = () => {
  return (
    <Container>
      <p className="animate__animated animate__flash animate__repeat-3 animate__delay-1s animate__slow	">
        Super Deal! Free Shipping on Orders Over $50
      </p>
    </Container>
  );
};

export default Announcement;
