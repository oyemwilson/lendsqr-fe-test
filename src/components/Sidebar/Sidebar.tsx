import "./sidebar.scss"
import HomeIcon from "../../assets/home.svg?react";
import UsersIcon from "../../assets/users.svg?react";
import GaurantorIcon from "../../assets/gaurantor.svg?react";
import LoanIcon from "../../assets/loan.svg?react";
import DecisionIcon from "../../assets/decision.svg?react";
import PiggybankIcon from "../../assets/piggybank.svg?react";
import LoanrequestIcon from "../../assets/loanrequest.svg?react";
import UsercheckIcon from "../../assets/usercheck.svg?react";
import UsertimesIcon from "../../assets/user-times.svg?react";
import BriefcaseIcon from "../../assets/briefcase.svg?react";
import BankIcon from "../../assets/bank.svg?react";
import CoinIcon from "../../assets/coins.svg?react";
import TransactionIcon from "../../assets/transaction.svg?react";
import GalaxyIcon from "../../assets/galaxy.svg?react";
import UserSettingIcon from "../../assets/usersetting.svg?react";
import ScrollIcon from "../../assets/scroll.svg?react";
import ChartIcon from "../../assets/chart.svg?react";
import SlidersIcon from "../../assets/sliders.svg?react";
import HumidityIcon from "../../assets/humidity.svg?react";
import ClipboardIcon from "../../assets/clipboard.svg?react";
import ArrowBottomIcon from "../../assets/arrowbottom.svg?react";
import SystemIcon from "../../assets/system.svg?react";
import LogoutIcon from "../../assets/logout.svg?react";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ open, onClose }: SidebarProps) => {
  return (
    <>
      <aside className={`sidebar ${open ? "sidebar__open" : ""}`}>
        <div className="sidebar__org">
          <BriefcaseIcon className="sidebar__icon" />
          <span>Switch Organization</span>
          <ArrowBottomIcon />
        </div>

        <nav className="sidebar__nav">
          <a className="sidebar__link">
            <HomeIcon className="sidebar__icon" />
            <span>Dashboard</span>
          </a>


          <p className="sidebar__section">CUSTOMERS</p>
          <a className="sidebar__link active">
            <UsersIcon className="sidebar__icon" />
            <span>Users</span>
          </a>
          <a className="sidebar__link">
            <GaurantorIcon className="sidebar__icon" />
            <span>Guarantors</span>
          </a>
          <a className="sidebar__link">
            <LoanIcon className="sidebar__icon" />
            <span>Loans</span>
          </a>
          <a className="sidebar__link">
            <DecisionIcon className="sidebar__icon" />
            <span>Decision Models</span>
          </a>
          <a className="sidebar__link">
            <PiggybankIcon className="sidebar__icon" />
            <span>Savings</span>
          </a>
          <a className="sidebar__link">
            <LoanrequestIcon className="sidebar__icon" />
            <span>Loan Requests</span>
          </a>
          <a className="sidebar__link">
            <UsercheckIcon className="sidebar__icon" />
            <span>Whitelist</span>
          </a>
          <a className="sidebar__link">
            <UsertimesIcon className="sidebar__icon" />
            <span>Karma</span>
          </a>

          <p className="sidebar__section">BUSINESSES</p>
          <a className="sidebar__link">
            <BriefcaseIcon className="sidebar__icon" />
            <span>Organization</span>
          </a>
          <a className="sidebar__link">
            <LoanrequestIcon className="sidebar__icon" />
            <span>Loan Products</span>
          </a>
          <a className="sidebar__link">
            <BankIcon className="sidebar__icon" />
            <span>Savings Products</span>
          </a>
          <a className="sidebar__link">
            <CoinIcon className="sidebar__icon" />
            <span>Fees and Charges</span>
          </a>
          <a className="sidebar__link">
            <TransactionIcon className="sidebar__icon" />
            <span>Transactions</span>
          </a>
          <a className="sidebar__link">
            <GalaxyIcon className="sidebar__icon" />
            <span>Services</span>
          </a>
          <a className="sidebar__link">
            <UserSettingIcon className="sidebar__icon" />
            <span>Service Account</span>
          </a>
          <a className="sidebar__link">
            <ScrollIcon className="sidebar__icon" />
            <span>Settlements</span>
          </a>
          <a className="sidebar__link">
            <ChartIcon className="sidebar__icon" />
            <span>Reports</span>
          </a>

          <p className="sidebar__section">SETTINGS</p>
          <a className="sidebar__link">
            <SlidersIcon className="sidebar__icon" />
            <span>Preferences</span>
          </a>
          <a className="sidebar__link">
            <HumidityIcon className="sidebar__icon" />
            <span>Fees and Pricing</span>
          </a>
          <a className="sidebar__link">
            <ClipboardIcon className="sidebar__icon" />
            <span>Audit Logs</span>
          </a>
          <a className="sidebar__link">
            <SystemIcon className="sidebar__icon" />
            <span>System Messages</span>
          </a>
        </nav>
        <div className="sidebar__bottom">
          <div className="sidebar__divider" />
          <a className="sidebar__link sidebar__logout">
            <LogoutIcon />
            <span>Logout</span>
          </a>
          <p className="sidebar__version">v1.2.0</p>
        </div>
      </aside>
      {open && <div className="sidebar__overlay" onClick={onClose} />}
    </>
  );
};

export default Sidebar;