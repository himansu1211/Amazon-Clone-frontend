# Amazon Frontend Clone

A React-based frontend application that replicates the core features and user interface of Amazon.com. This project demonstrates modern web development practices using React, React Router, and custom CSS styling.

## Features

- **Home Page**: Product listings with search functionality
- **User Authentication**: Sign in and sign up pages
- **Account Management**: User account dashboard with address and orders management
- **Shopping Cart**: Add, remove, and manage cart items
- **Checkout Process**: Multi-step checkout with address selection, payment, and order summary
- **Responsive Design**: Mobile-friendly interface using Bootstrap and custom CSS
- **Amazon Typography**: Custom Amazon fonts (Ember, Bookerly) for authentic branding

## Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.7.0
- **Styling**: Bootstrap CSS, Custom CSS
- **Build Tool**: Create React App
- **Testing**: Jest, React Testing Library

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd amazon-frontend-master
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── account/         # Account-related components
│   ├── cart/            # Shopping cart components
│   ├── checkout/        # Checkout flow components
│   ├── footer/          # Footer components
│   ├── home/            # Home page components
│   └── navbar/          # Navigation components
├── pages/               # Page-level components
│   ├── account/         # Account pages
│   ├── auth/            # Authentication pages
│   ├── cart/            # Cart page
│   ├── checkout/        # Checkout page
│   └── Home.jsx         # Home page
├── static/              # Static assets
│   ├── css/             # Stylesheets
│   └── images/          # Image assets
├── amazon_typefaces/    # Amazon custom fonts
└── App.js               # Main app component
```

## Routes

- `/` - Home page
- `/ap/signin` - Sign in page
- `/ap/register` - Sign up page
- `/gp/account` - Account dashboard
- `/gp/account/address` - Address management
- `/gp/account/address/add` - Add new address
- `/gp/account/orders` - Orders history
- `/gp/cart` - Shopping cart
- `/gp/checkout` - Checkout process

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational purposes only and is not affiliated with Amazon.com. See the [LICENSE](LICENSE) file for details.
