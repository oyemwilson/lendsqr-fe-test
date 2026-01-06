import { useState, useEffect } from "react";
import type { User } from "../../types/user";
import type { UserFilters } from "./useUsers";

type Props = {
  users: User[];
  filters: UserFilters;
  onChange: (next: UserFilters) => void;
  onReset: () => void;
  onClose: () => void;
};

const UsersFilter = ({ users, filters, onChange, onReset, onClose }: Props) => {
  const [draft, setDraft] = useState<UserFilters>(filters);

  const orgOptions = Array.from(
    new Set(users.map(u => u.organization).filter(Boolean))
  );

  useEffect(() => {
    setDraft(filters);
  }, [filters]);

  return (
    <div className="filter">
      <div className="filter__field">
        <label>Organization</label>
        <select
          value={draft.organization}
          onChange={e =>
            setDraft(d => ({ ...d, organization: e.target.value }))
          }
        >
          <option value="">Select</option>
          {orgOptions.map(org => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className="filter__field">
        <label>Username</label>
        <input
          placeholder="User"
          value={draft.username}
          onChange={e => setDraft(d => ({ ...d, username: e.target.value }))}
        />
      </div>

      <div className="filter__field">
        <label>Email</label>
        <input
          placeholder="Email"
          value={draft.email}
          onChange={e => setDraft(d => ({ ...d, email: e.target.value }))}
        />
      </div>

      <div className="filter__field">
        <label>Date</label>
        <input
          type="date"
          value={draft.date}
          onChange={e => setDraft(d => ({ ...d, date: e.target.value }))}
        />
      </div>

      <div className="filter__field">
        <label>Phone Number</label>
        <input
          placeholder="Phone Number"
          value={draft.phone}
          onChange={e => setDraft(d => ({ ...d, phone: e.target.value }))}
        />
      </div>

      <div className="filter__field">
        <label>Status</label>
        <select
          value={draft.status}
          onChange={e => setDraft(d => ({ ...d, status: e.target.value }))}
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>
      </div>

      <div className="filter__actions">
        <button
          className="btn btn--outline"
          onClick={() => {
            setDraft(filters);
            onReset();
            onClose();
          }}
        >
          Reset
        </button>

        <button
          className="btn btn--primary"
          onClick={() => {
            onChange(draft);
            onClose();
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default UsersFilter;
