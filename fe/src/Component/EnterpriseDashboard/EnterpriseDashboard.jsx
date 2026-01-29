import "./EnterpriseDashboard.css";

export default function EnterpriseDashboard() {
  return (
    <div className="ed-layout">
      {/* SIDEBAR */}
      <aside className="ed-sidebar">
        <div className="logo">🌱 PreOnic</div>
        <nav>
          <button className="active">Tổng quan</button>
          <button>Nông dân</button>
          <button>Hợp đồng</button>
          <button>Kho bãi</button>
        </nav>
        <button className="create-btn">+ Tạo đơn hàng mới</button>
      </aside>

      {/* MAIN */}
      <main className="ed-main">
        <h1>Tổng quan Doanh nghiệp</h1>

        {/* STATS */}
        <section className="stats">
          <div className="stat">
            <b>14,500</b>
            <span>Tấn cam kết</span>
            <small className="up">+12.5%</small>
          </div>
          <div className="stat">
            <b>124</b>
            <span>Hợp đồng</span>
            <small className="up">+5%</small>
          </div>
          <div className="stat">
            <b>92%</b>
            <span>Ổn định nguồn cung</span>
            <small className="down">-2.3%</small>
          </div>
          <div className="stat">
            <b>18</b>
            <span>Chờ phê duyệt</span>
          </div>
        </section>

        {/* GRID */}
        <section className="grid">
        {/* FARMER */}
        <div className="card farmer">
         <h3>Mạng lưới nông dân</h3>

        <div className="farmer-image">
        <img src="/farmerDasB.jpg" alt="farmer" />
        <span className="badge">
      <span className="dot"></span>
      1,240 nông dân đã xác thực
    </span>
  </div>
</div>


          {/* APPROVAL */}
          <div className="card approval">
            <h3>Phê duyệt hợp đồng</h3>

            <div className="approval-item">
              <div>
                <b>Hợp tác xã Valley</b>
                <p>500 tấn</p>
              </div>
              <div className="actions">
                <button className="approve">Duyệt</button>
                <button className="view">Xem lại</button>
              </div>
            </div>

            <div className="approval-item">
              <div>
                <b>Farm Fresh</b>
                <p>1,200 tấn</p>
              </div>
              <div className="actions">
                <button className="approve">Duyệt</button>
                <button className="view">Xem lại</button>
              </div>
            </div>
          </div>

          {/* CHART */}
          <div className="card chart">
            <h3>So sánh giá</h3>

            <div className="bars">
              {[40, 55, 50, 65, 70, 60, 75, 80, 68, 72, 60, 66].map(
                (value, index) => (
                  <div className="bar-wrapper" key={index}>
                    <div className="bar" style={{ height: `${value}%` }} />
                    <small>T{index + 1}</small>
                  </div>
                )
              )}
            </div>
          </div>

          {/* CIRCLE */}
          <div className="card circle">
            <h3>Sự ổn định chuỗi cung ứng</h3>
            <div className="circle-chart">92%</div>
          </div>
        </section>

        {/* TABLE */}
        <section className="card table">
          <h3>Mạng lưới nông dân đã xác thực</h3>
          <table>
            <thead>
              <tr>
                <th>Nông dân</th>
                <th>Loại nông sản</th>
                <th>Diện tích</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thomas Miller</td>
                <td>Ngô vàng</td>
                <td>450 mẫu</td>
                <td className="ok">Đã xác thực</td>
              </tr>
              <tr>
                <td>Sarah Jenkins</td>
                <td>Đậu nành</td>
                <td>320 mẫu</td>
                <td className="ok">Đã xác thực</td>
              </tr>
              <tr>
                <td>Alex Brown</td>
                <td>Cam</td>
                <td>280 mẫu</td>
                <td className="ok">Đã xác thực</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
