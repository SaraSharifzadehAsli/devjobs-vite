interface Requirements {
  content: string;
  items: string[];
}

interface Role {
  content: string;
  items: string[];
}

export interface IJobItem {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Role;
}

type IJobItems = IJobItem[];

// interface IJobItems {
//   jobItems: JobItem[];
// }

export default IJobItems;
