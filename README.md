
# Senior Backend Coding Exercise

## Overview

This repository contains a legacy codebase for handling user orders. Your task is to **refactor** the legacy code using **NestJS** and implement a **Repository Pattern** with an **in-memory** data store. The refactored solution should follow clean architecture principles, emphasizing separation of concerns and modular design. You should also implement **DTO validation** for incoming requests.

## Project Structure

Here’s a breakdown of the updated folder structure:

```
src/
│
├── order/
│   ├── application/                # (Empty, ready for application services)
│   ├── domain/                     # Domain layer
│   │   ├── order.ts                # Order entity/model
│   │   └── order.repository.ts     # Repository interface for order
│   ├── infrastructure/             # Infrastructure layer
│   │   ├── legacy-order.controller.js  # Legacy controller you need to refactor
│   │   ├── order.module.ts         # NestJS module for order
│   └── main.ts                     # Entry point of the application
│
├── test/                           # Jest configuration and tests (if applicable)
│
├── .eslintc.js                     # Linting configuration
├── .prettierrc                     # Code formatting configuration
├── nest-cli.json                   # NestJS CLI configuration
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.build.json             # Build configuration
└── README.md                       # You are here
```

## Task

You are provided with a legacy controller (`legacy-order.controller.js`) that handles user orders. The task is to **refactor** this codebase into a more modular structure, applying the **Repository Pattern** and using **DTO validation** to validate incoming requests.

### Key Requirements:

- **Refactor the `legacy-order.controller.js`:**
  - Modularize the code by separating concerns, making it clean and maintainable.
  - Apply a **Repository Pattern** to abstract data access, ensuring the repository is implemented with an **in-memory** data store.
  - Implement **DTO validation** to validate incoming request data for creating or modifying orders.

### Modular Architecture:

The solution should follow a **modular architecture**:
- **Domain layer** (entities and repository interfaces).
- **Application layer** (business logic and services).
- **Infrastructure layer** (controllers and repository implementations).

### Time Limit:

The exercise should **not take more than 20 minutes** to complete.

## Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/Seedifyfund/senior-backend-coding-exercise.git
cd senior-backend-coding-exercise
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Application

```bash
npm run start
```

The application will run on `http://localhost:3000`.

## Files of Interest

### Legacy Code:
- `src/order/infrastructure/legacy-order.controller.js`: This is the legacy controller you will be refactoring.

### Refactored Code (to be created):
- Refactor the legacy controller, applying the repository pattern, DTO validation, and separating business logic into appropriate layers.

## What We Are Looking For

- Clean, **modular code** using **NestJS**.
- Implementation of a **Repository Pattern** with an **in-memory** repository.
- Proper **DTO validation** for incoming request data.
- Demonstration of clear **separation of concerns** between the layers (domain, application, infrastructure).

### Time Estimate:

The exercise should take approximately **20 minutes** to complete.
