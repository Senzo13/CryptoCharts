import fs from "fs";
import handlebars from "handlebars";
export const readHTMLFile = function (
  path: string,
  callback: (err: string, html?: string) => void
) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      callback(err.message);
    } else {
      callback(null, html);
    }
  });
};

export const renderHTML = (template, data): Promise<string> =>
  new Promise((resolve, reject) => {
    readHTMLFile(`templates/${template}`, (err: string, html?: string) => {
      if (err) {
        return reject(err);
      }
      const template: HandlebarsTemplateDelegate<unknown> =
        handlebars.compile(html);

      resolve(template(data));
    });
  });


export default renderHTML;
