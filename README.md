# Rock Salt

Rock solid password hashing library

-   Built with Typescript
-   Only native dependencies (crypto)
-   Extremely light weight

## Installation

```bash
npm i @replit-community/rock-salt
```

## Usage

```ts
import RockSalt from "@replit-community/rock-salt";

const salt = RockSalt.generateSalt();
const hashedPassword = RockSalt.hash("My Password", salt);
if (RockSalt.compare("My Password", hashedPassword)) {
    console.log("User authenticated");
}
```

It's that simple.
