# React Application with Global State Management

This repository contains a simple React application built with Vite. The app demonstrates global state management using the Context API, with functionality to increment a counter and showcase React's hot module replacement (HMR).

## Features

- **Global State Management**: The application uses the Context API to manage a global state across components.
- **Vite Integration**: Leverages Vite for fast development and hot module replacement.
- **TypeScript Support**: Written in TypeScript for enhanced type safety.

## Table of Contents

1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies using [pnpm](https://pnpm.io):

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:5173`.

## Project Structure

```
.
├── src
│   ├── App.tsx
│   ├── context
│   │   ├── global.context.tsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── index.tsx
│   ├── App.css
├── vite.config.ts
├── package.json
└── README.md
```

### Key Files

- **`index.tsx`**: Entry point of the application where the root component is rendered.
- **`App.tsx`**: Main component that displays the counter functionality.
- **`global.context.tsx`**: Contains the implementation of the global context and provider.

## Usage

### Counter Functionality

The app includes a button to increment a counter stored in the global context. The current count is displayed dynamically on the button.

### Editing the App

To see hot module replacement in action, modify the `App.tsx` file. The changes will be reflected in the browser without a full reload.

## How to Use Global Context

The `global.context.tsx` file defines a `GlobalProvider` that wraps the app and provides access to the global state.

- **Provider**:
  Wrap your application with `GlobalProvider` in `index.tsx`:

  ```tsx
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
  ```

- **Context Hook**:
  Use the `useGlobalContext` hook to access the state and updater function:
  ```tsx
  const { value, setValue } = useGlobalContext();
  ```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
