import fastify from "fastify";

const server = fastify({
  logger: true
})

server.listen(3000, function (err, address) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
})