import puppeteer from "puppeteer";
import { fork } from "child_process";
// const childProcess = require("child_process");

jest.setTimeout(30000);

describe("появление подсказки", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    server = await fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test("открытие страницы", async () => {
    await page.goto(baseUrl);

    await page.waitForSelector("body");
  });

  test("проверка на показ кнопки", async () => {
    await page.goto(baseUrl);

    await page.waitForSelector(".btn");
  });

  test("тест на добавление класса tooltip-wrapper", async () => {
    await page.goto(baseUrl);

    const button = await page.$(".btn");

    await button.click();

    await page.waitForSelector(".tooltip-wrapper");
  }, 30000);
});
