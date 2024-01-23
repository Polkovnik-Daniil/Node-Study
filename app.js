const {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} = require("node:worker_threads");

console.log("\n", `__filename:\t${__filename}`, "\n", `__dirname:\t${__dirname}`, "\n");

if (isMainThread) {
  setEnvironmentData("value", "World!");
  const worker = new Worker(__filename);
} else {
  console.log(getEnvironmentData("value")); // Печатает 'World!'.
}
