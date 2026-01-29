import { Container, Button } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-content">
          <span className="hero-badge">NÔNG NGHIỆP BỀN VỮNG 4.0</span>

          <h1 className="hero-title">
            Đảm Bảo Vụ Mùa,
            <br />
            <span className="highlight">Kết Nối Tương Lai</span>
          </h1>

          <p className="hero-desc">
            Tham gia cuộc cách mạng nông nghiệp số. Cam kết bao tiêu nông sản
            chất lượng cao và hỗ trợ canh tác bền vững trực tiếp thông qua
            sàn giao dịch minh bạch của chúng tôi.
          </p>

          <div className="hero-actions">
            <Button variant="success" size="lg">
              Khám phá ngay →
            </Button>

            <Button variant="outline-light" size="lg">
              Đăng ký bán nông sản
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
