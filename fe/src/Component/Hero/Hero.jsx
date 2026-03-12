import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Vanhomc8.jpg)`
      }}
    >
      <div className="hero-content">

        <div className="hero-text">

          <span className="hero-badge">
            NÔNG NGHIỆP BỀN VỮNG 4.0
          </span>

          <h1>Đảm Bảo Vụ Mùa,</h1>

          <h1 className="highlight">
            Kết Nối Tương Lai
          </h1>

          <p>
            Tham gia cuộc cách mạng nông nghiệp số. Cam kết bao tiêu
            nông sản chất lượng cao và hỗ trợ canh tác bền vững.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Khám phá ngay →
            </button>

            <button className="btn-outline">
              Đăng ký bán nông sản
            </button>

          </div>

        </div>

      </div>

      <h1 className="hero-brand">PreOnic</h1>

    </section>
  );
}

export default Hero;