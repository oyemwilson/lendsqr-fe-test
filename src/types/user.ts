export interface User {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residence: string;
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    income: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: Guarantor[];
  tier: 1 | 2 | 3;
  balance: number;
  account: {
    number: string;
    bank: string;
  };
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  organization: "Lendsqr" | "Irorun" | "Lendstar",
  hasLoan: boolean;
  hasSavings: boolean;
}

export interface Guarantor {
  fullName: string;
  phone: string;
  email: string;
  relationship: string;
}
