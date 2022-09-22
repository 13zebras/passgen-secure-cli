import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import chalk from "chalk";

const savePassword = (password) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.appendFile(
    "/home/tom/.local/share/password.txt",
    password + os.EOL,
    "utf8",
    () => {
      console.log(chalk.blue("Password saved to passwords.txt"));
    }
  );
  // fs.open(path.join(__dirname, "../", "password.txt"), "a", 666, (e, id) => {
  //   fs.write(id, password + os.EOL, null, "utf-8", () => {
  //     fs.close(id, () => {
  //       console.log(chalk.blue("Password saved to passwords.txt"));
  //     });
  //   });
  // });
};

export default savePassword;
