import { School } from "../school/School";
import { User } from "../user/User";

export type Staf = {
  createdAt: Date;
  id: string;
  school?: Array<School>;
  updatedAt: Date;
  user?: User;
};
