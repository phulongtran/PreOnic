import "./FloatingAuth.css";
import { FaBuilding, FaSeedling } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FloatingAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="floating-auth">
      {/* DOANH NGHIỆP */}
      <button
        className="auth-btn auth-enterprise"
        title="Doanh nghiệp"
        onClick={() => navigate("/enterprise")}
      >
        <FaBuilding />
      </button>

      {/* NÔNG DÂN (làm sau) */}
      <button
         className="auth-btn auth-farmer"
         title="Nông dân"
          onClick={() => navigate("/farmer")}
      >
        <FaSeedling />
      </button>
    </div>
  );
};

export default FloatingAuth;
