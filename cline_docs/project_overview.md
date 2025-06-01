# Project Overview: MyProject - Postman Clone

## Introduction

This project is a mobile application that clones the functionality of Postman, a popular API development and testing tool. The application is built using React Native with Expo as the development framework, allowing for cross-platform development for iOS and Android.

## Technologies Used

- **React Native**: Core framework for building the mobile application
- **Expo**: Development platform for React Native
- **Expo Router**: For navigation and routing
- **React Navigation**: For drawer navigation and other navigation patterns
- **NativeWind/Tailwind CSS**: For styling components
- **i18next**: For internationalization (supporting English and Vietnamese)
- **TypeScript**: For type-safe code

## Project Architecture

The project follows a structured approach to code organization:

1. **Atomic Design Pattern** for component organization:
   - UI components (basic building blocks)
   - Molecules (reusable component combinations)
   - Organisms (larger, more complex components)
   - Layouts (page structures)

2. **Directory Structure**:
   - `/app`: Contains the main screens and navigation structure using Expo Router
   - `/components`: UI components organized by the Atomic Design pattern
   - `/assets`: Images, fonts, and other static resources
   - `/constants`: Application constants like colors
   - `/hooks`: Custom React hooks
   - `/lib`: Utility functions and enums
   - `/locales`: Internationalization files
   - `/model`: Data models for the application entities
   - `/readme`: Documentation about various parts of the application

## Core Features

1. **API Request Management**:
   - Creating and organizing HTTP requests
   - Supporting different HTTP methods (GET, POST, PUT, DELETE, etc.)
   - Managing request headers, body, and authentication

2. **Collection Organization**:
   - Hierarchical structure with Collections, Folders, and Requests
   - Collections can contain multiple folders and requests
   - Folders can contain multiple requests
   - Requests can belong directly to collections without being in a folder

3. **Navigation**:
   - Drawer navigation for accessing different sections of the app
   - Workspace management
   - History tracking
   - Environment settings

## Current Development Status

The application is under development with some components already implemented:
- Drawer navigation structure is partially complete
- Collection management UI components are being developed
- Basic request models are defined

Some parts that need further development:
- Completing the collection drawer functionality
- Implementing request execution
- Adding history tracking
- Setting up environment management

## Extension Points

The application is designed to be extendable, with clear separation of concerns through the component structure and data models. Future enhancements could include:
- Request response visualization
- Environment variable management
- Team collaboration features
- Request automation
