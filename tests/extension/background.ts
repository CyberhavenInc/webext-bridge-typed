import { events } from "./context";

events.onUpload((file) => {
  console.log("File upload received", file);
});
