import chalk from "chalk";

let secondForText = Math.round(Math.random() * 14999);

console.clear()

console.log(chalk.red("             Be Ready     "));
console.log(chalk.blue("When text appears in the screen,"));
console.log(
  chalk.blue("Click enter (or write something not includes 'err' and enter it)")
);

console.log(chalk.green("..."));

let input = "err";

setTimeout(() => {
  console.clear();
  console.log(chalk.green(chalk.bold("CLICK!!!!")));
  const start = Date.now();
  input = prompt("!!");

  if (input !== "err") {
    const end = Date.now();
    console.log(chalk.bold("Okey, just wait for results..."));
    console.clear();
    console.log(chalk.green(`You clicked enter in ${end - start} ms`));
    console.log(chalk.blue("Your score is:"));
    console.log(
      chalk.green(
        end - start === 0
          ? "You are cheating >:("
          : end - start < 150
          ? "Perfect!"
          : end - start < 350
          ? "Good!"
          : end - start < 500
          ? "Medium"
          : "Bad :("
      )
    );
  }
}, secondForText);
