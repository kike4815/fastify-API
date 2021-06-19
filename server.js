const fastify = require("fastify")({ logger: true });

fastify.register(require("./routes/index"));
fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "fastify-api",
    },
  },
});

const start = async () => {
  try {
    const listen = await fastify.listen(3000);
    console.log({ listen });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
