import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserDetails from "./UserDetails";
import * as storage from "../../utils/storage";

const mockUser = {
    id: "LSQ123456",
    fullName: "John Doe",
    balance: 200000,
    tier: 2,
    phone: "+2341234567890",
    email: "johndoe@example.com",
    bvn: "12345678901",
    gender: "Male",
    maritalStatus: "Single",
    children: "None",
    residence: "Parent's Apartment",
    account: {
        number: "1234567890",
        bank: "GTBank",
    },
    education: {
        level: "B.Sc",
        employmentStatus: "Employed",
        sector: "FinTech",
        duration: "2 years",
        officeEmail: "john@company.com",
        income: "200000 - 400000",
        loanRepayment: "40000",
    },
    socials: {
        twitter: "@johndoe",
        facebook: "John Doe",
        instagram: "@johndoe",
    },
    guarantors: [
        {
            fullName: "Jane Doe",
            phone: "+2349876543210",
            email: "jane@example.com",
            relationship: "Sister",
        },
    ],
};

describe("UserDetails Page", () => {
    test("Positive: renders user details when user exists", () => {
        vi.spyOn(storage, "getUser").mockReturnValue(mockUser as any);

        render(
            <MemoryRouter>
                <UserDetails />
            </MemoryRouter>
        );

        expect(screen.getByRole("heading", { name: /john doe/i })).toBeInTheDocument();
        expect(screen.getByText(/LSQ123456/i)).toBeInTheDocument();
        const balance = document.querySelector(".user-card__stat strong");
        expect(balance).toHaveTextContent("₦200,000");


    });

    test("Negative: redirects when no user exists", () => {
        vi.spyOn(storage, "getUser").mockReturnValue(null);

        render(
            <MemoryRouter>
                <UserDetails />
            </MemoryRouter>
        );

        expect(screen.queryByText(/john doe/i)).not.toBeInTheDocument();
    });
});
