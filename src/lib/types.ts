export type Role = "user" | "team";

export const CATEGORIES = ["Hardware", "Networking", "Software", "User Auth", "Audio / Video", "Other"] as const;
export type TicketCategory = (typeof CATEGORIES)[number];

export const STATUSES = ["New", "In Progress", "Resolved"] as const;
export type TicketStatus = (typeof STATUSES)[number];

export const PRIORITIES = ["Low", "Medium", "High", "Critical"] as const;
export type TicketPriority = (typeof PRIORITIES)[number];

export interface Ticket {
  id: string;
  subject: string;
  department: string;
  category: TicketCategory;
  status: TicketStatus;
  priority?: TicketPriority;
  comment: string;
  requesterId: string;
  requesterName: string;
  createdAt: string;
  updatedAt: string;
}

export interface TicketInput {
  subject: string;
  department: string;
  category: TicketCategory;
  comment: string;
  priority?: TicketPriority;
}

export interface Session {
  userId: string;
  name: string;
  email: string;
  role: Role;
}
