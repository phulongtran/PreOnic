import "./FarmerDashboard.css";

export default function FarmerDashboard() {
  return (
    <div className="fd-wrapper">
      {/* SIDEBAR */}
      <aside className="fd-sidebar">
        <div className="fd-logo">
          🌱 PreOnic <span>Nông dân</span>
        </div>

        <nav>
          <div className="fd-item active">Mùa vụ của tôi</div>
          <div className="fd-item">Hợp đồng</div>
          <div className="fd-item">Đơn hàng</div>
          <div className="fd-item">Tài chính</div>
          <div className="fd-item">Thông tin thị trường</div>
        </nav>

        <button className="fd-create">+ Mùa vụ mới</button>
      </aside>

      {/* MAIN */}
      <main className="fd-main">
        {/* HEADER */}
        <header className="fd-header">
          <div>
            <h1>Chào mừng trở lại, Johnathan!</h1>
            <p>
              Dưới đây là tổng kết các cánh đồng và cam kết hôm nay, ngày 12 tháng 6.
            </p>
          </div>

          <div className="fd-search">
            🔍 <input placeholder="Tìm kiếm mùa vụ, hợp đồng..." />
          </div>
        </header>

        {/* STATS */}
        <section className="fd-stats">
          <div className="fd-card">
            <span>Tổng giá trị hợp đồng</span>
            <h3>$42,850.00</h3>
            <small className="green">+12% so với tháng trước</small>
          </div>

          <div className="fd-card">
            <span>Chuyến hàng sắp tới</span>
            <h3>6 Chuyến</h3>
            <small>Tiếp theo: 8:00 AM</small>
          </div>

          <div className="fd-card">
            <span>Sức khỏe cây trồng</span>
            <h3>94%</h3>
            <small>Điều kiện tốt</small>
          </div>
        </section>

        {/* SEASON OVERVIEW */}
        <section className="fd-section">
          <div className="fd-section-header">
            <h2>Tổng quan mùa vụ</h2>
            <span className="link">Xem tất cả</span>
          </div>

          <div className="fd-season">
            <div>
              <strong>🌽 Ngô hữu cơ – Lô phía Bắc</strong>
              <p>Mục tiêu thu hoạch: 7/2024</p>
              <div className="progress">
                <div style={{ width: "75%" }}></div>
              </div>
            </div>

            <div>
              <strong>🫘 Đậu nành – Cánh đồng phía Nam</strong>
              <p>Mục tiêu thu hoạch: 10/2024</p>
              <div className="progress">
                <div style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTRACT TABLE */}
        <section className="fd-section">
          <h2>Cam kết đang hoạt động</h2>

          <table className="fd-table">
            <thead>
              <tr>
                <th>Đối tác</th>
                <th>Nông sản</th>
                <th>Giá trị</th>
                <th>Ngày giao</th>
                <th>Trạng thái</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>WholeFoods Coop</td>
                <td>Ngô hữu cơ</td>
                <td>$12,400</td>
                <td>15/08/2024</td>
                <td>
                  <span className="badge green">Sắp giao</span>
                </td>
              </tr>

              <tr>
                <td>Midwest Processing</td>
                <td>Đậu nành</td>
                <td>$30,450</td>
                <td>02/09/2024</td>
                <td>
                  <span className="badge yellow">Thanh toán một phần</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
