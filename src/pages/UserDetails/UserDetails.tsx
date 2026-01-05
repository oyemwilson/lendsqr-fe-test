import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../../utils/storage";
import "./UserDetails.scss";
import AvatarIcon from "../../assets/avatar.svg?react";
import ArrowBackIcon from "../../assets/backarrow.svg?react";

const renderStars = (tier: number) => {
  const safeTier = Math.min(Math.max(tier || 0, 0), 3); // clamp 0–3
  return "★".repeat(safeTier) + "☆".repeat(3 - safeTier);
};
const formatNaira = (value: any) => {
  if (value === null || value === undefined || value === "") return "—";

  const clean = (v: string) => v.replace(/[₦,]/g, "").trim();

  const format = (num: number) =>
    `₦${num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  // Number
  if (typeof value === "number" && !isNaN(value)) {
    return format(value);
  }

  // String
  if (typeof value === "string") {
    // Range: "200000 - 400000"
    if (value.includes("-")) {
      const parts = value.split("-").map(p => clean(p));
      const nums = parts.map(p => Number(p)).filter(n => !isNaN(n));

      if (nums.length === 2) {
        return `${format(nums[0])} - ${format(nums[1])}`;
      }
    }

    const num = Number(clean(value));
    if (!isNaN(num)) {
      return format(num);
    }
  }

  return value;
};


const UserDetails = () => {
  const user = getUser();

  if (!user) return <Navigate to="/users" />;

  return (
    <div className="user-details">
      <button className="back-btn" onClick={() => history.back()}>
        <ArrowBackIcon /> Back to Users
      </button>
      {/* Top Bar */}
      <div className="user-details__top">
        <div className="details-header" >
          Users Details
        </div>

        <div className="actions">
          <button className="danger">Blacklist User</button>
          <button className="success">Activate User</button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="user-card">
        <div>
          <div className="user-card__left">
            <div className="avatar"><AvatarIcon /></div>
            <div>
              <h2>{user.fullName}</h2>
              <p className="muted">{user.id}</p>
            </div>
          </div>

          <div className="user-card__stat">
            <p>User's Tier</p>
            <div className="stars">{renderStars(user.tier)}</div>

          </div>

          <div className="user-card__stat">

            <strong>{formatNaira(user.balance)}</strong>
            <p className="muted">{user.account.number}/{user.account.bank}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"].map(tab => (
          <button key={tab} className={tab === "General Details" ? "active" : ""}>
            {tab}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="details-card">
        <Section title="Personal Information">
          <Item label="Full Name" value={user.fullName} />
          <Item label="Phone Number" value={user.phone} />
          <Item label="Email Address" value={user.email} />
          <Item label="BVN" value={user.bvn} />
          <Item label="Gender" value={user.gender} />
          <Item label="Marital Status" value={user.maritalStatus} />
          <Item label="Children" value={user.children} />
          <Item label="Type of Residence" value={user.residence} />
        </Section>

        <Section title="Education and Employment" grid4>
          <Item label="Level of Education" value={user.education.level} />
          <Item label="Employment Status" value={user.education.employmentStatus} />
          <Item label="Sector of Employment" value={user.education.sector} />
          <Item label="Duration of Employment" value={user.education.duration} />
          <Item label="Office Email" value={user.education.officeEmail} />
          <Item label="Monthly Income" value={formatNaira(user.education.income)} />
          <Item label="Loan Repayment" value={formatNaira(user.education.loanRepayment)} />
        </Section>

        <Section title="Socials" grid4>
          <Item label="Twitter" value={user.socials.twitter} />
          <Item label="Facebook" value={user.socials.facebook} />
          <Item label="Instagram" value={user.socials.instagram} />
        </Section>

        <Section title="Guarantor" grid4>
          {user.guarantors.map((g, i) => (
            <div key={i} className="guarantor-block">
              <div className="guarantor-inner">
                <Item label="Full Name" value={g.fullName} />
                <Item label="Phone Number" value={g.phone} />
                <Item label="Email Address" value={g.email} />
                <Item label="Relationship" value={g.relationship} />
              </div>
            </div>
          ))}
        </Section>


      </div>
    </div>
  );
};

export default UserDetails;

/* Helpers */
const Section = ({ title, children, grid4 }: { title: string; children: React.ReactNode; grid4?: boolean }) => (
  <div className="section">
    <h3>{title}</h3>
    <div className={grid4 ? "grid grid-4" : "grid"}>{children}</div>
  </div>
);

const Item = ({ label, value }: { label: string; value: any }) => (
  <div className="item">
    <span>{label}</span>
    <strong>{value || "—"}</strong>
  </div>
);
