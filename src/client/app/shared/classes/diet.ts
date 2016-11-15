export interface Diet {
  _id: string;
  title: string;
  description: string;
  days: {
    title: string;
    meals: {
      title: string;
      submeal: {
        title: string;
        description: string;
        amount: {
          unit: string;
          quantity: string;
        },
        nutritional: {
          kcal: string;
          proteins: string;
          carbohidrates: string;
          fats: string;
          vitamins: string;
        },
      },
    },
  };
}



