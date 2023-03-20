import renderHTML, {
  readHTMLFile,
} from "../../../src/utils/smtp/methods/renderHTML";
import fs from "fs";
describe("Testing the template renderer", () => {
  it("Should call the callback function", (done) => {
    const readFileSpy = jest.spyOn(fs, "readFile");

    readHTMLFile("templates/dummy.html", async () => {
      done();
    });

    expect(readFileSpy).toHaveBeenCalled();
  });

  it("should reject with a string", async () => {
    await expect(
      renderHTML("src/utils/smtp/templates/dummy.html", {
        url: `google.com`,
      })
    ).rejects.toContain("ENOENT");
  
  });
});
