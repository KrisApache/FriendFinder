// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var profileArray = [
    {
        Name: "Spiderman",
        profImage: "spiderman.com",
        scores: [5, 3, 4, 2, 5, 1, 4, 2, 3, 5]
    },
    {
        Name: "IronMan",
        profImage: "ironman.com",
        scores: [5, 2, 4, 2, 3, 4, 4, 1, 3, 1]
    },
    {
        Name: "Thanos",
        profImage: "thanos.com",
        scores: [1, 3, 3, 2, 2, 1, 4, 3, 3, 4]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = profileArray;
