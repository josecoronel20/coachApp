export type ExerciseHistory = {
    date: string;
    weight: number;
    sets: number[];
}

export type Exercise = {
    exercise: string;
    sets: number[];
    range:[number,number];
    weight: number;
    coachNotes: string | null;
    athleteNotes: string | null;
    exerciseHistory: ExerciseHistory[];
}

export type WorkoutDay = Exercise[];

export type WorkoutPlan = WorkoutDay[];
