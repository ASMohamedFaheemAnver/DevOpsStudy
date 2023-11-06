const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("Should response", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET /mode", () => {
  it("Should return server mode", async () => {
    const res = await request(app).get("/mode");
    expect(res.body.mode).toBeDefined();
    expect(res.statusCode).toBe(200);
  });
});

describe("GET /hash", () => {
  it("Should return a hash", async () => {
    const res = await request(app).get("/hash");
    expect(res.body.hash).toBeDefined();
    expect(res.statusCode).toBe(200);
  });
});
