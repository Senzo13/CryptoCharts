import fs from "fs";
import handlebars from "handlebars";
import { renderHTML } from "../../../src/utils/smtp/methods/renderHTML";

jest.mock("fs", () => ({
  readFile: jest.fn((path, options, callback) =>
    callback(null, "template html here")
  ),
}));

jest.mock("handlebars", () => ({
  compile: jest.fn((html) => (data) => data),
}));

describe("renderHTML", () => {
  it("should render the given template with the given data", async () => {
    const template = "template.html";
    const data = { foo: "bar" };

    const html = await renderHTML(template, data);
    
    

    expect(html).toBe(data);
    expect(fs.readFile).toHaveBeenCalledWith(
      `templates/${template}`,
      { encoding: "utf-8" },
      expect.any(Function)
    );
    expect(handlebars.compile).toHaveBeenCalledWith("template html here");
  });

  it("should reject with an error if reading the template file fails", async () => {
    const template = "template.html";
    const data = { foo: "bar" };

    (fs.readFile as unknown as jest.Mock).mockImplementationOnce((path, options, callback) =>
      callback(new Error("read file error"))
    );

    await expect(renderHTML(template, data)).rejects.toEqual("read file error");
  });
});
