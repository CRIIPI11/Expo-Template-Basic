# Basic Expo-Template with RNE UI

This template is intended to increase productivity and lower setup time when creating a new Expo project. It comes pre-configured with useful libraries for UI, state management, and utilities.

## Table of Contents


- [Basic Expo-Template with RNE UI](#basic-expo-template-with-rne-ui)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Configuration](#configuration)
    - [Customizing UI Components](#customizing-ui-components)
    - [State Management with Zustand](#state-management-with-zustand)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Features

- **React Native Elements**: Main UI library with pre-modified components for a unique look.
- **Zustand**: Lightweight and fast state management library.
- **Expo Image**: Enhanced image handling over the default React Native Image component.
- **FlashList**: High-performance list rendering for large datasets.
- **React Native MMKV**: Efficient storage solution over of Async Storage.

## Getting Started

Follow these instructions to get your project up and running.

### Prerequisites

No specific prerequisites are needed beyond the standard Expo environment.

### Installation

1. **Create New Expo App With Template**

   ```bash
   npx create-expo-app --template https://github.com/CRIIPI11/Expo-Template-Basic.git
   ```

## Configuration

### Customizing UI Components

The template includes color palettes and pre-modified components from **React Native Elements** to provide a unique starting point. You can further customize these components:

- Navigate to the `app/_layout.tsx` file.
- Locate the `components` object inside the `theme` variable at line [22]
  
   ```JSON
   const theme = createTheme({
   lightColors: {...},
   darkColors: {...},
   components: {...},
  });
  ```
- Modify the colors, component styles and props as needed. (If you want to include and extra color name or prop, make sure you add properly add them in the `themed.d.ts` to avoid ts error)

For more detail information about custom styling please visit [React Native Elements Customization Overview](https://reactnativeelements.com/docs/customizing)

### State Management with Zustand

State management is handled by **Zustand**:

- Use thhe `zustand/` directory to add store files

For more detail information visit [Zustand Official Docs](https://zustand.docs.pmnd.rs/getting-started/introduction)

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository.
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`).
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the branch (`git push origin feature/AmazingFeature`).
5. **Open** a Pull Request.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native Elements](https://reactnativeelements.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)
- [FlashList](https://shopify.github.io/flash-list/)
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)
