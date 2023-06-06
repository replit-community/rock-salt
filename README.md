# Rock Salt

[![Try with Replit Badge](https://replit.com/badge?caption=Try%20with%20Replit)](https://replit.com/@replit-community-dev/rock-salt)

Rock solid password hashing library

-   Built with Typescript
-   Extremely light weight
-   Only native dependencies (crypto)

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
