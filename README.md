## Introduction

I believe that this type of library should be strongly typed. Additionally, I want message callables to be generated from TypeScript event types (see the example below). This represents a significant shift in API usage, so I decided to fork it.

# Install
```bash
npm install @cyberhaven/webext-bridge-typed

# or via yarn
yarn add @cyberhaven/webext-bridge-typed
```

## Usage
```typescript
import { createBridge } from "webext-bridge-typed"

type EventsMap = {
	upload: (file: string) => void;
	download: (file: string, open = false) => void;
}

const bridge = createBridge<EventsMap>();

// In content script (or background)
bridge.upload('test.txt');

// In background
bridge.onUpload((file) => {
	console.log('Upload occured', file);
})
```