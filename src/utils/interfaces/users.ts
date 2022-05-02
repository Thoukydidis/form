export interface UsersResponse {
  id: number;
  name: string;
  email: string;
  gender: "male" | "female";
  status: "active" | "inactive";
}
