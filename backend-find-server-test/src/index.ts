import { SERVERS, TIMEOUT } from "./contants";
import { findServer } from "./utils";

findServer(SERVERS, TIMEOUT)
  .then((server) => console.log(`Online server: ${server.url}`))
  .catch((err) => console.error(err.message));
