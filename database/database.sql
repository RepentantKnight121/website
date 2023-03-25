CREATE DATABASE coffee_website;

\c coffee_website;

CREATE TABLE coffee_category (
    coffee_category_id VARCHAR(20),
    coffee_category_name        VARCHAR(100),
    PRIMARY KEY(coffee_category_id)
);

CREATE TABLE coffee_info (
    coffee_id             VARCHAR(20), 
    coffee_category_id    VARCHAR(50),
    coffee_name           VARCHAR(50),
    coffee_image          BYTEA,
    coffee_price          BIGINT,
    coffee_ingredient     VARCHAR(100),
    coffee_characteristic VARCHAR(700),
    coffee_shelf_life     VARCHAR(100),
    coffee_mass           VARCHAR(100),
    coffee_instructions   VARCHAR(700),
    coffee_detail         VARCHAR(700),
    PRIMARY KEY(coffee_id),
    CONSTRAINT fk_coffee_category_for_coffee_info FOREIGN KEY(coffee_category_id)
        REFERENCES coffee_category(coffee_category_id)
);

CREATE TABLE storage (
    coffee_id VARCHAR(20),
    amount BIGINT CHECK (amount > 0 AND amount <= 1000),
    CONSTRAINT fk_storage_coffee_id FOREIGN KEY(coffee_id)
        REFERENCES coffee_info(coffee_id)
);

CREATE TABLE customer_info (
    customer_id   VARCHAR(20),
    customer_name VARCHAR(60),
    phone_number  VARCHAR(14),
    email         VARCHAR(80),
    address       VARCHAR(400),
    PRIMARY KEY(customer_id)
);

CREATE TABLE discount (
    discount_code_id VARCHAR(20),
    event_name       VARCHAR(200),
    discount_percent REAL,
    PRIMARY KEY(discount_code_id)
);

CREATE TABLE bill_info (
    bill_id          VARCHAR(20),
    customer_id      VARCHAR(60),
    discount_code_id VARCHAR(20),
    address          VARCHAR(400),
    payment_time     DATE,
    PRIMARY KEY(bill_id),
    CONSTRAINT fk_customer FOREIGN KEY(customer_id)
        REFERENCES customer_info(customer_id),
    CONSTRAINT fk_discount FOREIGN KEY(discount_code_id)
        REFERENCES discount(discount_code_id)
);

CREATE TABLE bill_detail (
    bill_detail_id VARCHAR(20),
    bill_id        VARCHAR(20),
    coffee_id      VARCHAR(20) UNIQUE,
    amount         BIGINT,
    PRIMARY KEY(bill_detail_id),
    CONSTRAINT fk_coffee_for_bill_detail FOREIGN KEY(coffee_id)
        REFERENCES coffee_info(coffee_id),
    CONSTRAINT fk_bill_id_for_bill_detail FOREIGN KEY(bill_id)
        REFERENCES bill_info(bill_id)
);

CREATE TABLE account (
    account_id          VARCHAR(20),
    account_username    VARCHAR(100),
    account_password    VARCHAR(100),
    account_displayname VARCHAR(100),
    email               VARCHAR(100),
    PRIMARY KEY(account_id)
);

\i insert_values.sql
