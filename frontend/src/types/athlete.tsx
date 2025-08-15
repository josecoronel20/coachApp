import { WorkoutPlan } from "./workoutPlan";

export type Athlete = {
    id: string;
    coachId: string;
    paymentDate: string;
    name: string;
    email?: string;
    phone: string;
    workoutPlan: WorkoutPlan;
}