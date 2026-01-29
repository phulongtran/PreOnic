import { Container, Row, Col } from "react-bootstrap";
import "./Stats.css";

function Stats() {
  return (
    <section className="stats-section">
      <Container>
        <Row className="stats-wrapper align-items-center">
          {/* LEFT */}
          <Col md={6} className="stats-left">
            <h2>
              Thúc đẩy minh bạch trong <br />
              <span>Nông nghiệp hiện đại</span>
            </h2>

            <p>
              PreOnic sử dụng phân tích dữ liệu tiên tiến và các hợp đồng
              cam kết trực tiếp để ổn định chuỗi cung ứng thực phẩm,
              đảm bảo thu nhập công bằng cho mọi thành phần tham gia.
            </p>

            <Row className="stats-numbers">
              <Col xs={6}>
                <h3>12.5k+</h3>
                <span>Tấn sản lượng</span>
              </Col>
              <Col xs={6}>
                <h3>4.2k</h3>
                <span>Nông dân tham gia</span>
              </Col>
              <Col xs={6}>
                <h3>$45M</h3>
                <span>Giá trị giao dịch</span>
              </Col>
              <Col xs={6}>
                <h3>100%</h3>
                <span>Truy xuất nguồn gốc</span>
              </Col>
            </Row>
          </Col>

          {/* RIGHT */}
          <Col md={6} className="stats-right">
            <div className="dashboard-card">
              <img
                src="/BD.png"
                alt="Dashboard"
                className="dashboard-img"
              />

              <div className="floating-card">
                📊 <br />
                Phân tích thị trường <br />
                thời gian thực cho <br />
                giá tốt nhất
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Stats;
