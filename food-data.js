export const foods = [
    {
        name: 'Yogurt',
        serving: '150 g',
        nutrition: getNutrition(160, 0, 4, 5, 21), 
    },
    {
        name: 'White Bread',
        serving: '1 slice (43 g)',
        nutrition: getNutrition(110, 1, 4, 1, 2)
    },
    {
        name: 'Cheddar Cheese',
        serving: '1 oz',
        nutrition: getNutrition(120, 0, 6, 10, 0)
    }
];

function getNutrition(calories, fiber, protein, fat, sugar) {
    return { 
        calories,
        fiber,
        protein,
        fat,
        sugar
    };
}

