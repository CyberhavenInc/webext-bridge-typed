import { createBridge } from "../../src/create-bridge";

type EventsMap = {
  upload: (file: string) => void;
};

export const events = createBridge<EventsMap>();
