export interface TaskCardProps {
  title: string;
  description: string;
  status: "Open" | "Progress" | "Completed" | "Verifying";
  creator: string;
  reward: number;
  currency: string;
  usdEquivalent: number;
  tags: string[];
  rating: number;
  dueDate: string;
}

export interface TaskType {
    id:number;
    title:string,
    description:string,
    reward:string,
    creator:string,
    claimer:string,
    completer:string,
    status:"Created" | "InProgress" | "Verifying" | "Completed",
    
}
