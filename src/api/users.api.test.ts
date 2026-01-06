import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import type { User } from "../types/user";

vi.stubGlobal("import.meta", {
  env: {
    VITE_USERS_API: "https://example.com/users",
  },
});

vi.mock("axios");

import { fetchUsers } from "./users.api";

const mockedAxios = axios as unknown as {
  get: ReturnType<typeof vi.fn>;
};


const mockUsers: User[] = [
  {
    id: "1",
    fullName: "John Doe",
    phone: "1234567890",
    email: "john@example.com",
    bvn: "12345678901",
    gender: "Male",
    maritalStatus: "Single",
    dateJoined: "2024-01-01",

    children: "None",
        organization: "Lendsqr",
    residence: "Apartment",
    education: {
      level: "B.Sc",
      employmentStatus: "Employed",
      sector: "FinTech",
      duration: "2 years",
      officeEmail: "john@company.com",
      income: "200000",
      loanRepayment: "40000",
    },
    socials: {
      twitter: "@john",
      facebook: "john.doe",
      instagram: "@john",
    },
    guarantors: [
      {
        fullName: "Jane Doe",
        phone: "0987654321",
        email: "jane@example.com",
        relationship: "Sister",
      },
    ],
    tier: 2,
    balance: 200000,
    account: {
      number: "1234567890",
      bank: "Access Bank",
    },
    status: "Active",
    hasLoan: true,
    hasSavings: false,
  },
];


describe("fetchUsers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns users when API succeeds", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });

    const result = await fetchUsers();

    expect(mockedAxios.get).toHaveBeenCalledOnce();
    expect(result).toEqual(mockUsers);
  });

  it("throws when API fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchUsers()).rejects.toThrow("Network error");
  });
});
