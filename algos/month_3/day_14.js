const { type } = require("express/lib/response");

const object1 = {
    closedCreditMemos: [],
    closedDeliveryOrders: [],
    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],
    openCreditMemos: [],
    openDeliveryOrders: [
        {
            id: 123,
            type: "delivery",
            gateCode: "#2552",
        },
        {
            id: 153,
            type: "delivery",
            instructions: "Place in secure delivery box.",
        },
    ],
    openPickupOrders: [
        {
            id: 123,
            type: "pickup",
        },
    ],
    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays(object) { 
    let result = []
    for (const key in object) {
        const element = object[key];
        for (const key of element) {
            if (Element.hasOwnProperty.call(id, type)) {
            const element = object[key];
            result.push(element)
        }
    }
    return result
}
}
console.log(flattenObjectOfArrays(object1))



// * 
//   Create a function to determine the max amount of
//   servings that can be made based on a recipe and
//   available ingredients.
//   Input:
//     - recipe object where keys are ingredient names
//       and values are unit required (int)
//     - available ingredients object where keys are ingredient
//       names and values are unit available (int)
//   Output:
//     int (max servings)
//   Side note (not needed for solution): Realistically, the values
//   would be an object as well with the keys: unit (unit of measure), and amount.
//   If the available ingredient was stored in a different unit,
//   a conversion table would be needed to convert units of measure.
// */

// const recipe1 = {
//     "organic fat": 99,
//     "broccoli seeds": 1,
//     okra: 1,
//     potato: 1,
//     spicy: 5,
//     "gourmet memes": 4200,
// };

// const available1 = {
//     "organic fat": 990,
//     "broccoli seeds": 1,
//     okra: 10,
//     potato: 10,
//     spicy: 50,
//     "gourmet memes": 42000,
//     sugar: 9001,
//     spice: 5,
//     "everything nice": 1,
//     "triple point water": 5,
// };
// const expected1 = 1;
// // because only 1 broccoli seeds is available and that is the limiting ingredient

// // same as available1, except broccoli seeds has 10.
// const available2 = { ...available1, ["broccoli seeds"]: 10 };
// const expected2 = 10;

// // same as available1 except broccoli seeds key is deleted.
// const available3 = { ...available1 };
// delete available3["broccoli seeds"];
// const expected3 = 0; // broccoli seeds key doesn't exist in available ingredients

// /**
//  * Determines how many servings can be made of the given recipe.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @typedef {string} IngredientName
//  * @typedef {number} Quantity
//  * @typedef {Object<IngredientName, Quantity>} Ingredients
//  * @param {Ingredients} recipe
//  * @param {Ingredients} available
//  * @returns {number} Max servings of the recipe that can be made.
//  */
// function getMaxServings(recipe, available) {}