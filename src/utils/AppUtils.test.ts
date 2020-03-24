import { getAppColor } from "utils/AppUtils";
/* eslint-disable @typescript-eslint/camelcase */
import { MockApps } from "mocks/MockApps";
import { getAppAvatarUrl, getAppShortName } from "utils/AppUtils";

describe("AppUtils", function() {
  describe("getAppAvatarUrl", function() {
    it("without parameters, returns null", function() {
      expect(getAppAvatarUrl()).toBeNull();
    });

    it("with 'undefined', returns null", function() {
      expect(getAppAvatarUrl(undefined)).toBeNull();
    });

    it("with 'null', returns null", function() {
      expect(getAppAvatarUrl(null)).toBeNull();
    });

    it("with app.avatar_url, returns avatar_url", function() {
      const app = MockApps[0];
      const expected = "http://localhost/logo.png";
      app.avatar_url = expected;

      const result = getAppAvatarUrl(app);

      expect(result).toBe(expected);
    });
  });

  describe("getAppShortName", function() {
    it("without parameters, returns '-'", function() {
      expect(getAppShortName()).toBe("-");
    });

    it("with 'undefined', returns '-'", function() {
      expect(getAppShortName(undefined)).toBe("-");
    });

    it("without 'null', returns '-'", function() {
      expect(getAppShortName(null)).toBe("-");
    });

    it("return app.title[0] as uppercase", function() {
      const app = MockApps[0];
      app.title = "test-app";

      expect(getAppShortName(app)).toBe("T");
    });
  });

  describe("getAppColor", function() {
    it("without parameters, returns 'skeleton'", function() {
      expect(getAppColor()).toBe("skeleton");
    });

    it("with 'undefined', returns 'skeleton'", function() {
      expect(getAppColor(undefined)).toBe("skeleton");
    });

    it("with 'null', returns 'skeleton'", function() {
      expect(getAppColor(null)).toBe("skeleton");
    });

    it("with app.owner.account_type = 'user', returns 'primary'", function() {
      const app = MockApps[0];
      app.owner.account_type = "user";

      expect(getAppColor(app)).toBe("primary");
    });

    it("with app.owner.account_type = 'organization', returns 'secondary'", function() {
      const app = MockApps[0];
      app.owner.account_type = "organization";

      expect(getAppColor(app)).toBe("secondary");
    });
  });
});
