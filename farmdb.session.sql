CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(4, 2),
    quantity INT DEFAULT 0
);

CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    address VARCHAR(255)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- @block

INSERT INTO products (name, category, price, quantity)
VALUES
('Tomatoes', 'Vegetables', 2.50, 100),
('Milk', 'Dairy', 3.00, 50),
('Eggs', 'Poultry', 4.20, 200);

INSERT INTO customers (name, email, phone, address)
VALUES
('Alice Johnson', 'alice@example.com', '555-1234', '123 Farm Lane'),
('Bob Smith', 'bob@example.com', '555-5678', '456 Country Rd');

-- @block

SELECT * FROM products;