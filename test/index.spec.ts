import { expect } from "chai";
import { randomBytes } from "crypto";
import * as execa from "execa";

describe("publishable", () => {
  let packagePath: string;

  context("when package is publishable", () => {
    it("should exit with 0", async () => {
      await execa(".build/src/index.js", ["test/fixtures/publishable-package"]);
    });
  });

  context("when package is not publishable", () => {
    it("should exit with 1", async () => {
      let caught = false;

      try {
        await execa(".build/src/index.js", ["test/fixtures/not-publishable-package"]);
      } catch (e) {
        caught = true;
        expect(e.code).to.be.eq(1);
      }

      expect(caught).to.be.eq(true);
    });
  });

  context("when failed to read package.json", () => {
    it("should exit with 2", async () => {
      let caught = false;

      try {
        await execa(".build/src/index.js", ["this-is-not-exists-path"]);
      } catch (e) {
        caught = true;
        expect(e.code).to.be.eq(2);
      }

      expect(caught).to.be.eq(true);
    });
  });
});
