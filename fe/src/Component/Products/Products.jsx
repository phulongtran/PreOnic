import { Container, Row, Col, Card, Button, ProgressBar } from "react-bootstrap";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Thanh long ruột đỏ",
    location: "HTX Hòa Bình, Long An",
    progress: 75,
    harvest: "Tháng 10/2025",
    tag: "GLOBALGAP",
    image: "/PD1.jpg"
  },
  {
    id: 2,
    name: "Cam Vinh",
    location: "Xã Minh Hợp, Quỳ Hợp, Nghệ An",
    progress: 40,
    harvest: "Tháng 12/2025",
    tag: "VIETGAP",
    image: "/PD2.jpg"
  },
  {
    id: 3,
    name: "Bưởi da xanh",
    location: "Nhà vườn Sông Tiền, Bến Tre",
    progress: 92,
    harvest: "Tháng 09/2025",
    tag: "HỮU CƠ",
    image: "/PD3.jpg"
  }
];

function Products() {
  return (
    <section className="products-section">
      <Container>
        {/* HEADER */}
        <div className="products-header">
          <div>
            <h2>Mùa vụ đang mở đăng ký</h2>
            <p>Cơ hội đầu tư và bao tiêu sản phẩm chất lượng cao</p>
          </div>
          <a href="/" className="view-all">
            Xem tất cả →
          </a>
        </div>

        {/* PRODUCTS */}
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="product-card">
                {/* IMAGE */}
                <div className="product-img-wrapper">
                  <Card.Img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                  <span className="product-badge">{product.tag}</span>
                </div>

                {/* CONTENT */}
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>

                  <p className="product-location">
                    📍 {product.location}
                  </p>

                  {/* PROGRESS */}
                  <div className="progress-label">
                    <span>TIẾN ĐỘ BAO TIÊU</span>
                    <span>{product.progress}%</span>
                  </div>

                  {/* ❗ KHÔNG set variant → để CSS override */}
                  <ProgressBar
                    now={product.progress}
                    className="custom-progress"
                  />

                  <small className="text-muted d-block mt-2">
                    Dự kiến thu hoạch: {product.harvest}
                  </small>

                  {/* BUTTON */}
                  <Button className="w-100 mt-3 btn-register">
                    Đăng ký bao tiêu
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Products;
