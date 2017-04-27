# ecommerce-backend

An E-Commerce Backend (RESTful) API.

Built with Postgresql and express. Building it with a single store in mind but with the ability to be reused for future e-commerce projects.

Currently, most of the backend templates offered are for blogs. I decided to create an easy to install and configure store backend.

By focusing on the a few core functionality and isolating them, I aim to give developers the freedom to hack around the main app without breaking anything vital.

Products - Shopping Bag - Checkout

## Postgres tables design

### Product Information
 - (Needs to have standard fields that contain  product information and a unique product_id, probably numeric that can be used to establish relationships to items in shopping cart and completed orders.)

### Store Categories
 - (These categories should contain the product IDs that will be displayed within a particular category.)

### Shopping Carts
 - ( a unique ID associated with each website visitor, likely a session ID; can be set during  the first visit to website and use this same id to identify the user’s activity across Customer Accounts, Live Chat, Completed Orders, Abandoned Carts, Reviews, etc—even before the customer records for them.)

### Completed Orders
 - (This should contain order summary data, order total, tax rate, amount received, customer id and so on. This would relate back to Customer Accounts using customer_id. It also relates to Order Items by order_id, which should be unique on this table.)

### Order Items
 - (After a transaction is complete you’ll need to move each line item from your shopping cart table into Order Items, as well as creating a single record in Completed Orders. Those should relate to each other by a unique order_id and the products in Order Items should related to Product Information by product_id. You’ll also want a customer_id if this is to connect back to a unique customer account.)

### Customer Accounts
 - (Could shove all of this information into completed orders)

### Addons
 - We also have many other tables that are related to specific capabilities like Reviews, Customer Q&A, Recommended Products, Live Chat, Feedback, Surveys, etc which may or may not be relevant.
