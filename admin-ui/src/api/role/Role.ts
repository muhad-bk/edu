import { Permission } from "../permission/Permission";
import { School } from "../school/School";

export type Role = {
  createdAt: Date;
  id: string;
  name: string | null;
  permissions?: Array<Permission>;
  school?: Array<School>;
  updatedAt: Date;
};
