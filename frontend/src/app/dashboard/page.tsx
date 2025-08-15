"use client";
import { useCoachStore } from "@/store/coachStore";
import React, { useEffect } from "react";

const DashboardPage = () => {
  const { coachInfo, setCoachInfo, athletesInfo, setAthletesInfo } =
    useCoachStore();

  useEffect(() => {
    setCoachInfo({
      id: "abc",
      name: "Juan Perez",
      email: "juan.perez@gmail.com",
    });

    setAthletesInfo([
    {
      id: "abc",
      coachId: "abc",
      paymentDate: "2025-01-01",
      name: "Juan Perez",
      email: "juan.perez@gmail.com",
      phone: "1234567890",
      workoutPlan: [
        [
          {
            exercise: "Bench Press",
            sets: [8, 8, 8],
            range: [8, 10],
            weight: 100,
            coachNotes: "cuiado con el codo",
            athleteNotes: "me molesta el hombro en el momento que bajo y espero unos segundos para volver a subir",
            exerciseHistory: [
              { date: "2025-01-01", weight: 100, sets: [8, 8, 8] },
              { date: "2025-01-02", weight: 100, sets: [10, 9, 8] },
              { date: "2025-01-03", weight: 100, sets: [12, 10, 10] },
            ],
          },
          {
            exercise: "Squat",
            sets: [8, 8, 8],
            range: [8, 10],
            weight: 150,
            coachNotes: "cuiado con el codo",
            athleteNotes: "me molesta la rodilla",
            exerciseHistory: [],
          },

          {
            exercise: "Squat",
            sets: [8, 8, 8],
            range: [8, 10],
            weight: 150,
            coachNotes: "cuiado con el codo",
            athleteNotes: "me molesta la cadera",
            exerciseHistory: [],
          },
        ],
        [
          {
            exercise: "Deadlift",
            sets: [8, 8, 8],
            range: [8, 10],
            weight: 150,
            coachNotes: "cuiado con el codo",
            athleteNotes: null,
            exerciseHistory: [
              { date: "2025-01-01", weight: 150, sets: [8, 8, 8] },
              { date: "2025-01-02", weight: 150, sets: [10, 9, 8] },
              { date: "2025-01-03", weight: 150, sets: [12, 10, 10] },
            ],
          },
        ],
      ],
    },
    {
      id: "def",
      coachId: "abc",
      paymentDate: "2025-08-10",
      name: "Matias Perez",
      email: "juan.perez@gmail.com",
      phone: "1234567890",
      workoutPlan: [
        [
          {
            exercise: "Bench Press",
            sets: [8, 8, 8],
            range: [8, 10],
            weight: 100,
            coachNotes: "cuiado con el codo",
            athleteNotes: "me molesta la pata",
            exerciseHistory: [
              { date: "2025-01-01", weight: 100, sets: [8, 8, 8] },
              { date: "2025-01-02", weight: 100, sets: [10, 9, 8] },
              { date: "2025-01-03", weight: 100, sets: [12, 10, 10] },
            ],
          },
          {
            exercise: "Squat",
            sets: [8, 8, 8],
            range: [8, 10],
            weight: 150,
            coachNotes: "cuiado con el codo",
            athleteNotes: "me molesta el tobillo",
            exerciseHistory: [],
          },

          {
            exercise: "Squat",
            sets: [8, 8, 8],
            range: [8, 10],
            weight: 150,
            coachNotes: "cuiado con el codo",
            athleteNotes: "me molesta el pubis",
            exerciseHistory: [],
          },
        ],
        [
          {
            exercise: "Deadlift",
            sets: [8, 8, 8],
            range: [8, 11],
            weight: 150,
            coachNotes: "cuiado con la lumbar",
            athleteNotes: null,
            exerciseHistory: [
              { date: "2025-01-01", weight: 150, sets: [8, 8, 8] },
              { date: "2025-01-02", weight: 150, sets: [10, 9, 8] },
              { date: "2025-01-03", weight: 150, sets: [12, 10, 11] },
            ],
          },
        ],
      ],
    },
  ]);
  }, []);

  if (!coachInfo || !athletesInfo) {
    return <div>Loading...</div>;
  }
  return <div>page</div>;
};

export default DashboardPage;
