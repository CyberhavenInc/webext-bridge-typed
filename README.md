# WORK IN PROGRESS
## Introduction

I believe that this type of library should be strongly typed. Additionally, I want message callables to be generated from TypeScript event types (see the example below). This represents a significant shift in API usage, so I decided to fork it.

## Usage
```typescript
import { createBridge } from "webext-bridge-typed"

type EventsMap = {
	upload: (file: string) => void;
	downliad: (file: string) => void;
}

const bridge = createBridge<EventsMap>();

// strongly typed
bridge.upload(...);
bridge.onUpload((file) => {...})
```