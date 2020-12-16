function sleep(time) {
  const start = new Date();
  while (new Date() - start < time) {
    // do nothing && block the main thread 😈
  }
}

console.log("BRB");
sleep(5000); // blocking
console.log("OK i'm back!");
