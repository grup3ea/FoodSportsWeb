export interface  Routine {
  _id: string;
  title: string;
  description: string;
  days: {
    title: string;
    exercises: {
      name: string;
      description: string;
      img: string;
      weight: string;
      distance: string;
      reps: string;
      series: string;
    },
  };
}
