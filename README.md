# E-commerce Application

A modern and fully responsive e-commerce application built with React, TypeScript, and Redux Toolkit. The app features an infinite product list, advanced cart management, and seamless search functionality.

## Features

- **Infinite Scrolling Product List**: Dynamically loads more products as the user scrolls down.
- **Cart Management**: Allows users to add, remove, and update product quantities, with data persisted between sessions.
- **Product Search**: Provides search functionality with debounced user input for optimal performance.
- **Mobile Responsive**: A fully responsive design that works well on all screen sizes, from mobile to desktop.
- **Testing**: Includes unit tests for critical functionality like the cart and product listing.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
- **State Management**:
  - Redux Toolkit
  - RTK Query (for data fetching)
  - Redux Persist (for cart persistence)
- **Styling**:
  - Tailwind CSS
- **Scrolling & Intersection Handling**:
  - React Intersection Observer
- **Testing Framework**:
  - Jest

## Implementation Details

### State Management

- **Redux Toolkit**: Used to manage the global application state, such as product data and cart information.
- **RTK Query**: Simplifies data fetching from an API with built-in caching and optimized re-fetching strategies.
- **Redux Persist**: Ensures that the cart’s contents are saved between sessions, using local storage.

### UI/UX Features

- **Responsive Grid Layout**: The product list is displayed in a grid format, adapting seamlessly to different screen sizes.
- **Loading Indicators**: Displayed during product loading and cart operations for better user experience.
- **Quantity Management in Cart**: Users can increase or decrease the quantity of each product in their cart, with validation to ensure proper limits.
- **Search Functionality**: Integrated with a debounce mechanism to prevent excessive API calls while searching for products.

### Performance

- **Efficient Infinite Scroll**: Uses the React Intersection Observer to efficiently implement infinite scrolling, reducing performance bottlenecks.
- **Optimized Rendering**: Memoized callbacks and components are used to minimize unnecessary re-renders, ensuring smooth UI performance.
- **State & Component Optimization**: Proper React hooks and Redux slices have been implemented to ensure state management and component interactions are optimized.

### Testing

- **Unit Testing**: Key components like the cart and product slice have been thoroughly tested using Jest.
- **Component Testing**: React components are tested to ensure they function correctly in isolation.
- **Integration Testing**: Focused on testing the interaction between key features, such as adding items to the cart and verifying product persistence.

## Getting Started

To get started with the project, follow the steps below.

### Prerequisites

Ensure you have **Node.js** installed on your machine. You can install it from [Node.js official site](https://nodejs.org/).

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/Shazzadhossensunny/ecommerce-product-listing
   \`\`\`

2. Navigate into the project directory:

   \`\`\`bash
   cd ecommerce-product-listing
   \`\`\`

3. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

### Running the Development Server

Start the development server and open your browser :

\`\`\`bash
npm run dev
\`\`\`

### Running Tests

To run unit and integration tests:

\`\`\`bash
npm test
\`\`\`
