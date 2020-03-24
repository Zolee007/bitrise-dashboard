import { DefaultUser } from "./../mocks/MockUser";
import { signOut, isSignedIn, currentUser } from "services/AuthService";
import { authenticate, token } from "./AuthService";

const testToken = "test-token";

describe("AuthService", function() {
  beforeEach(function() {
    localStorage.clear();
  });

  describe("authenticate", function() {
    it("saves token and clears user", function() {
      authenticate(testToken);

      expect(localStorage.getItem("bitrise.token")).toBe(testToken);
      expect(localStorage.getItem("bitrise.user")).toBeNull();
    });
  });

  describe("signOut", function() {
    beforeEach(function() {
      localStorage.setItem("bitrise.token", testToken);
      localStorage.setItem("bitrise.user", "u");
    });

    it("clears user", function() {
      signOut();

      expect(localStorage.getItem("bitrise.token")).toBe(testToken);
      expect(localStorage.getItem("bitrise.user")).toBeNull();
    });

    it("with 'false', clears user", function() {
      signOut(false);

      expect(localStorage.getItem("bitrise.token")).toBe(testToken);
      expect(localStorage.getItem("bitrise.user")).toBeNull();
    });

    it("with 'true', clears user and token", function() {
      signOut(true);

      expect(localStorage.getItem("bitrise.token")).toBeNull();
      expect(localStorage.getItem("bitrise.user")).toBeNull();
    });
  });

  describe("token", function() {
    it("returns empty string", function() {
      expect(token()).toBe("");
    });

    it("returns token", function() {
      localStorage.setItem("bitrise.token", testToken);

      expect(token()).toBe(testToken);
    });
  });

  describe("isSignedIn", function() {
    it("returns true", function() {
      localStorage.setItem("bitrise.token", testToken);
      localStorage.setItem("bitrise.user", JSON.stringify(DefaultUser));

      expect(isSignedIn()).toBe(true);
    });

    it("returns false", function() {
      localStorage.setItem("bitrise.token", testToken);

      expect(isSignedIn()).toBe(false);
    });

    it("returns false", function() {
      localStorage.setItem("bitrise.user", JSON.stringify(DefaultUser));

      expect(isSignedIn()).toBe(false);
    });

    it("returns false", function() {
      expect(isSignedIn()).toBe(false);
    });
  });

  describe("currentUser", function() {
    it("returns null", function() {
      expect(currentUser()).toBeNull();
    });

    it("returns user", function() {
      localStorage.setItem("bitrise.user", JSON.stringify(DefaultUser));

      expect(currentUser()).toStrictEqual(DefaultUser);
    });
  });
});
