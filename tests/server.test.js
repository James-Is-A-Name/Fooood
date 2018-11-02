const request = require("supertest");
const cheerio = require("cheerio");

jest.mock("../db", () => ({
  getAllDishes: () =>
    Promise.resolve([
      {
        name: "Spag bol",
        items: [
          { id: 0, name: "pasta" },
          { id: 1, name: "meat" },
          { id: 2, name: "tomato" }
        ]
      },
      {
        name: "Steak",
        items: [{ id: 0, name: "steak" }]
      },
      {
        name: "Chicken n rice",
        items: [{ id: 5, name: "chicken" }, { id: 6, name: "rice" }]
      },
      {
        name: "Breakfast",
        items: [
          { id: 8, name: "cereal" },
          { id: 9, name: "milk" },
          { id: 10, name: "SUGAR!!!!" }
        ]
      }
    ]),
  getIngredients: () =>
    Promise.resolve([
      { id: 0, name: "Carrot" },
      { id: 1, name: "potato" },
      { id: 2, name: "tomato" },
      { id: 3, name: "beans" },
      { id: 4, name: "leeks" },
      { id: 5, name: "beef" },
      { id: 6, name: "lamb" },
      { id: 7, name: "more beef" },
      { id: 8, name: "pasta" },
      { id: 9, name: "fancy pasta" },
      { id: 10, name: "rice" }
    ])
}));
//   {
//   getUser: id =>
//     Promise.resolve({ id: id, name: "test user", email: "test@user.nz" }),
//   getUsers: () =>
//     Promise.resolve([
//       { id: 2, name: "test user 2", email: "test2@user.nz" },
//       { id: 4, name: "test user 4", email: "test4@user.nz" }
//     ])
// }

const server = require("../server");

test("test home route /", () => {
  return request(server)
    .get("/")
    .expect(200)
    .then(res => {
      const $ = cheerio.load(res.text);
      const firstHeader = $("h1")
        .first()
        .text();
      expect(firstHeader).toBe("Website Name Thing");
    })
    .catch(err => expect(err).toBeNull());
});

test("test ingredeints list", () => {
  return request(server)
    .get("/")
    .expect(200)
    .then(res => {
      const $ = cheerio.load(res.text);
      const ingredientsList = $("h5")
        .first()
        .text();
      expect(ingredientsList).toBe("Carrot");
    })
    .catch(err => expect(err).toBeNull());
});
