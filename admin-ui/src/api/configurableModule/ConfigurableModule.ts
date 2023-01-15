import { Subscription } from "../subscription/Subscription";

export type ConfigurableModule = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  subscriptionsConfigModules?: Array<Subscription>;
  updatedAt: Date;
};
