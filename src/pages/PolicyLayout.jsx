import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { policyData } from "./policyData";
import { NavLink } from "react-router-dom";
import {
  FaUserShield,
  FaFileContract,
  FaUndoAlt,
  FaDonate,
  FaExclamationTriangle,
  FaChild
} from "react-icons/fa";
import "./Policy.css";

const iconMap = {
  privacy: <FaUserShield />,
  terms: <FaFileContract />,
  refund: <FaUndoAlt />,
  donation: <FaDonate />,
  disclaimer: <FaExclamationTriangle />,
  child: <FaChild />
};

export default function PolicyLayout() {
  const { policyType } = useParams();
  const policy = policyData[policyType];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [policyType]);

  if (!policy) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Policy not found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="policy-hero">
        <h1>
          {iconMap[policy.icon]} {policy.title}
        </h1>
        <p>VeyonicRise Social Foundation – Policies & Guidelines</p>
      </div>

      <div className="policy-page">
        <div className="policy-sidebar">
         <NavLink to="/policies/privacy">Privacy Policy</NavLink>
<NavLink to="/policies/terms">Terms & Conditions</NavLink>
<NavLink to="/policies/refund">Refund Policy</NavLink>
<NavLink to="/policies/donation">Donation Policy</NavLink>
<NavLink to="/policies/disclaimer">Disclaimer</NavLink>
<NavLink to="/policies/child">Child Protection Policy</NavLink>
        </div>

        <div className="policy-content">
          {policy.sections.map((sec, i) => (
            <div className="policy-card" key={i}>
              <h3>{sec.heading}</h3>
              <p>{sec.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}