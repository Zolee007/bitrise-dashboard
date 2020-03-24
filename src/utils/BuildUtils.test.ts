import { getBuildStatusColor } from "./BuildUtils";
import { MockBuilds } from "mocks/MockBuilds";

describe("BuildUtils", function() {
  describe("getBuildStatusColor", function() {
    it("without parameters, returns 'gray'", function() {
      expect(getBuildStatusColor()).toBe("gray");
    });

    it("with 'undefined', returns 'gray'", function() {
      expect(getBuildStatusColor(undefined)).toBe("gray");
    });

    it("with 'null', returns 'gray'", function() {
      expect(getBuildStatusColor(null)).toBe("gray");
    });

    it("with build.status = '1', returns 'green'", function() {
      const build = MockBuilds[0];
      build.status = 1;

      expect(getBuildStatusColor(build)).toBe("green");
    });

    it("with build.status = '2', returns 'red'", function() {
      const build = MockBuilds[0];
      build.status = 2;

      expect(getBuildStatusColor(build)).toBe("red");
    });

    it("with build.status = '3', returns 'orange'", function() {
      const build = MockBuilds[0];
      build.status = 3;

      expect(getBuildStatusColor(build)).toBe("orange");
    });

    it("with build.status = '4', returns 'orange'", function() {
      const build = MockBuilds[0];
      build.status = 4;

      expect(getBuildStatusColor(build)).toBe("orange");
    });
  });
});
