import { test, expect } from "@playwright/test";
import "./mod1.js";

test("top-level-await", function () {
  throw new Error("error");
});
