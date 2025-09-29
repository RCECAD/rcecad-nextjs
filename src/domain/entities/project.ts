import type { Hydraulic } from "./hydraulic";
import type { User } from "./user";

export type Project = {
  id: string;
  name: string;
  businessName: string;
  riverBasinName: string;
  city: string;
  state: string;
  engineerName: string;
  user: Pick<User, "id">;
  hydraulic: Partial<Pick<Hydraulic, "id">>;
};

import type { HydraulicInput, ProjectInput } from "@/lib/validators";

export type ProjectWithHydraulic = Omit<ProjectInput, "userId"> & {
  hydraulic?: HydraulicInput | null;
};
