const app = require("../app");
const Post = require("../model/post.model");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeAll((done) => {
  mongoose.connect("mongodb://localhost:27017/test",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

afterAll((done) => {
    mongoose.disconnect(() => done())
});



test("GET /posts", async () => {
  const post = await Post.create(
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  );

 const response = await supertest(app).get("/posts")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(100);
      // Check data
      expect(response.body[0].userId).toBe(post.userId);
      expect(response.body[0].id).toBe(post.id);
      expect(response.body[0].title).toBe(post.title);
      expect(response.body[0].body).toBe(post.body);
    });
});
