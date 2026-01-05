import { useState } from "react";
import "./Users.scss";
import { useUsers } from "./useUsers";
import UsersTable from "./UsersTable";
import UsersFilter from "./UsersFilter";
import UserCardIcon from "../../assets/usercard.svg?react";
import ActiveUsercon from "../../assets/activeuser.svg?react";
import UserWithLoanIcon from "../../assets/userwithloan.svg?react";
import UserSavingsIcon from "../../assets/userwithsaving.svg?react";

const Users = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const {
    loading,
    users,
    allUsers,
    filters,
    updateFilters,
    resetFilters,
    currentPage,
    totalPages,
    setCurrentPage,
  } = useUsers(itemsPerPage);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="users">
      <h1 className="users__title">Users</h1>

      {/* Stats */}
      <div className="users__stats">
        <div className="stat-card">
          <UserCardIcon />
          <p className="stat-card__label">Users</p>
          <h3 className="stat-card__value">{allUsers.length}</h3>
        </div>
        <div className="stat-card">
          <ActiveUsercon />
          <p className="stat-card__label">Active Users</p>
          <h3 className="stat-card__value">
            {allUsers.filter(u => u.status === "Active").length}
          </h3>
        </div>
        <div className="stat-card">
          <UserWithLoanIcon />
          <p className="stat-card__label">Users with Loans</p>
          <h3 className="stat-card__value">
            {allUsers.filter(u => u.hasLoan).length}
          </h3>
        </div>
        <div className="stat-card">
          <UserSavingsIcon />
          <p className="stat-card__label">Users with Savings</p>
          <h3 className="stat-card__value">
            {allUsers.filter(u => u.hasSavings).length}
          </h3>
        </div>
      </div>

      <div className="users__table-wrapper">
        <UsersTable
          users={users}
          onToggleFilter={() => setShowFilter(prev => !prev)}
        />

        {showFilter && (
          <UsersFilter
            users={allUsers}
            filters={filters}
            onChange={updateFilters}
            onReset={() => {
              resetFilters();
              setShowFilter(false);
            }}
            onClose={() => setShowFilter(false)}
          />
        )}

      </div>

      {/* Pagination */}
      <div className="users__pagination">
        <div className="pagination__info">
          Showing{" "}
          <select
            className="pagination__select"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>{" "}
          out of {allUsers.length}
        </div>

        <div className="pagination__controls">
          <button
            className="pagination__arrow"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            aria-label="Previous page"
          >
            ‹
          </button>

          <div className="pagination__numbers">
            {/* First 3 pages */}
            {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={currentPage === page ? 'active' : ''}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            {/* Ellipsis if there's a gap */}
            {totalPages > 5 && <span className="pagination__dots">...</span>}

            {/* Last 2 pages */}
            {totalPages > 3 &&
              [totalPages - 1, totalPages]
                .filter(page => page > 3)
                .map(page => (
                  <button
                    key={page}
                    className={currentPage === page ? 'active' : ''}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
          </div>
          <button
            className="pagination__arrow"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            aria-label="Next page"
          >
            <span className="pagination__arrow-icon">            ›</span>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;