-- Insert users data with correct column names (name instead of username)

INSERT INTO users (id, name, email) VALUES
(1, 'John Doe', 'john@example.com'),
(2, 'Jane Smith', 'jane@example.com'),
(3, 'Alice Jones', 'alice@example.com'),
(7, 'John Doe', 'john@example2.com');


-- Insert orders data

INSERT INTO orders (user_id, product_name, quantity) VALUES
(1, 'Laptop', 1),
(2, 'Keyboard', 1),
(3, 'Monitor', 1);


-- Insert some data into sample_table
INSERT INTO sample_table (name, description) VALUES
('Sample 1', 'First sample record'),
('Sample 2', 'Second sample record'),
('Sample 3', 'Third sample record');




