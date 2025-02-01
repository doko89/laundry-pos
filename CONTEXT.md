```markdown
# Laundry POS Application Documentation

## Overview
This document provides a structured explanation of the Laundry POS application, including user roles, features, workflows, and the technology stack used. The application supports two user roles: **Administrator** and **Owner (Pemilik Laundry)**. Each role has specific functionalities tailored to their responsibilities. The application also includes features like Bluetooth thermal printing, unique Order IDs, and MySQL database integration.

---

## Tech Stack
The application will be built using the following technologies:

### Frontend
- **Framework**: React.js (for building a responsive and dynamic user interface)
- **Styling**: Tailwind CSS (for utility-first CSS styling)
- **State Management**: Redux or Context API (for managing global state)
- **Bluetooth Printing**: React Native Bluetooth Escpos Printer (for thermal printing functionality)

### Backend
- **Framework**: Node.js with Express.js (for building the RESTful API)
- **Authentication**: JSON Web Tokens (JWT) (for secure user authentication)
- **Database**: MySQL (for data storage and management)
- **ORM**: Sequelize (for database interaction and management)
- **File Storage**: Multer (for handling file uploads like laundry logos)

### Mobile (Optional for Bluetooth Printing)
- **Framework**: React Native (if Bluetooth printing is implemented on mobile devices)
- **Bluetooth Library**: React Native Bluetooth Escpos Printer (for thermal printing functionality)

### Development Tools
- **Version Control**: Git (with GitHub or GitLab for collaboration)
- **Package Manager**: npm or Yarn
- **Environment Management**: dotenv (for managing environment variables)
- **API Testing**: Postman (for testing API endpoints)
- **Linting**: ESLint (for code quality and consistency)
- **Formatting**: Prettier (for code formatting)

---

## User Roles and Features

### 1. Administrator
#### Login Page
- Users enter their credentials to access the dashboard.

#### Dashboard
- **Total Members**: Displays the total number of laundry owners subscribed to the service.
- **List of Laundry Kiosks**: Shows all laundry kiosks using the application.

#### Right Menu
- **Dashboard**: Navigates back to the main dashboard.
- **Kios Laundry**:
  - **List of Subscribed Kiosks**: Displays kiosks that have subscribed to the service.
  - **Actions**:
    - **Extend Service**: Options to extend service for 1 month or 1 year.
    - **Suspend**: Temporarily suspend a kiosk's service.
    - **Delete**: Permanently remove a kiosk from the service.
- **Logout**: Log out of the application (located in the bottom sidebar).

---

### 2. Owner (Pemilik Laundry)
#### Login Page
- Users enter their credentials to access the dashboard.

#### Dashboard
- **Total Revenue**: Displays total revenue in Rupiah.
- **Total Orders**: Shows the total number of orders.
- **Order List**: Displays a list of orders with the following actions:
  - **View Order**: View details of a specific order.
  - **Update Order Status**: Change the status of an order (e.g., Diproses, Selesai).
  - **Update Payment Status**: Change the payment status (e.g., Belum Dibayar, Sudah Dibayar).
  - **Print**: Print transaction details using a Bluetooth thermal printer.
  - **Delete Order**: Remove an order from the list.

#### Left Sidebar
- **Dashboard**: Navigates back to the main dashboard.
- **Customer**: Manage customer information.
- **Pekerja**: Manage worker information.
- **Layanan**: Manage laundry services offered.
- **Pembukuan**:
  - **Expense Tracking**: Record and track expenses.
  - **Revenue Data**: Display revenue data.
- **Laporan**: Generate and view reports.
- **Logout**: Log out of the application (located in the bottom sidebar).

#### Right Avatar
- **Akun**: Update profile photo, name, and password.
- **Laundry**: Update laundry name and logo used for printing.

---

### 3. Pekerja (Worker)
#### Login Page
- Users enter their credentials to access the dashboard.

#### Dashboard
- **Daily Revenue**: Displays daily revenue in Rupiah.
- **Total Orders**: Shows the total number of orders.
- **Order List**: Displays a list of orders with the following actions:
  - **View Order**: View details of a specific order.
  - **Print**: Print transaction details using a Bluetooth thermal printer.
  - **Update Order Status**: Change the status of an order (e.g., Diproses, Selesai).
  - **Update Payment Status**: Change the payment status (e.g., Belum Dibayar, Sudah Dibayar).

#### Left Sidebar
- **Dashboard**: Navigates back to the main dashboard.
- **Customer**: Manage customer information.
- **Layanan**: Manage laundry services offered.
- **Pembukuan**: View bookkeeping data.
- **Laporan**: Generate and view reports.
- **Logout**: Log out of the application (located in the bottom sidebar).

---

## Additional Features

### 1. Print Transaction
- **Bluetooth Thermal Printer (58mm)**:
  - Implement functionality to print transaction receipts using a Bluetooth thermal printer.
  - Ensure the printout includes:
    - **Order ID**
    - **Laundry Name and Logo**
    - **Order Details**
    - **Total Amount**
    - **Payment Status**

### 2. Order ID
- **Order ID**: Assign a unique Order ID to each transaction to facilitate easy search and tracking within the application.

---

## Database
- **MySQL**: Use MySQL as the database management system. Ensure the database schema is designed to support all functionalities, including:
  - User roles (Administrator, Owner, Pekerja)
  - Orders
  - Services
  - Customers
  - Workers
  - Bookkeeping (exclusive to Owner role)

---

## Bookkeeping
- **Owner Only**: The bookkeeping feature is exclusive to the Owner role, allowing them to:
  - Track expenses.
  - View revenue data.

---

## Implementation Notes
1. **Security**:
   - Implement secure authentication and authorization mechanisms.
   - Ensure users can only access features relevant to their role.
2. **User Interface**:
   - Design an intuitive and user-friendly interface.
3. **Testing**:
   - Conduct thorough testing to ensure all features work as expected.
   - Handle edge cases gracefully.
4. **Bluetooth Printing**:
   - Ensure compatibility with 58mm thermal printers.
   - Test printing functionality across different devices.
5. **Order ID**:
   - Generate unique Order IDs for each transaction.
   - Implement a search feature to find orders by Order ID.

---

## Conclusion
This document provides a comprehensive overview of the Laundry POS application's structure, features, and technology stack. By following this guide, developers can implement a robust and efficient system tailored to the needs of administrators, owners, and workers in the laundry business.
```