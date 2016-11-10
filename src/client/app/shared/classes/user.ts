export interface User {
    _id: string;
    name: string;
    role: string;
    password: string;
    token: string;
    email: string;
    description: string;
    facebook: {
        _id: string;
        token: string;
        email: string;
        name: string;
    };
    avatar: string;
    attributes: {
        height: string;
        weight: string;
        gender: string;
        age: string;
    };
    publication: {
        title: string;
        date: string;
        content: string;
    };
    diets: {
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
        },
    };
}


