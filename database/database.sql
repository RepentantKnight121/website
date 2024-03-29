CREATE DATABASE coffee_website;

\c coffee_website;

CREATE TABLE coffee_category (
    coffee_category_id    VARCHAR(20) NOT NULL,
    coffee_category_name  VARCHAR(100),
    PRIMARY KEY(coffee_category_id)
);

CREATE TABLE coffee_info (
    coffee_id             VARCHAR(20) NOT NULL,
    coffee_category_id    VARCHAR(50) NOT NULL,
    coffee_name           VARCHAR(50),
    coffee_image          BYTEA,
    coffee_price          BIGINT,
    coffee_detail         VARCHAR(700),
    PRIMARY KEY(coffee_id),
    CONSTRAINT fk_coffee_category_for_coffee_info FOREIGN KEY(coffee_category_id)
        REFERENCES coffee_category(coffee_category_id)
);

CREATE TABLE coffee_storage (
    coffee_id VARCHAR(20) UNIQUE NOT NULL,
    coffee_amount BIGINT CHECK (coffee_amount > 0 AND coffee_amount <= 1000),
    CONSTRAINT fk_storage_for_coffee_info FOREIGN KEY(coffee_id)
        REFERENCES coffee_info(coffee_id)
);

CREATE TABLE account (
    account_username    VARCHAR(100) NOT NULL,
    account_password    VARCHAR(100),
    account_displayname VARCHAR(100),
    account_email       VARCHAR(100),
    account_permission  INT NOT NULL,
    PRIMARY KEY(account_username)
);

CREATE TABLE customer_info (
    customer_id            VARCHAR(20) NOT NULL,
    account_username       VARCHAR(20),
    customer_name          VARCHAR(60),
    customer_phone_number  VARCHAR(14),
    customer_email         VARCHAR(80),
    customer_address       VARCHAR(400),
    PRIMARY KEY(customer_id),
    CONSTRAINT fk_account_username_for_customer_id
        FOREIGN KEY (account_username)
        REFERENCES account(account_username)
);

CREATE TABLE discount (
    discount_id         VARCHAR(20) NOT NULL,
    discount_event_name VARCHAR(200),
    discount_percent    REAL,
    PRIMARY KEY(discount_id)
);

CREATE TABLE bill_info (
    bill_id          VARCHAR(20) NOT NULL,
    customer_id      VARCHAR(60) NOT NULL,
    discount_id      VARCHAR(20) NOT NULL,
    customer_address VARCHAR(400),
    payment_time     DATE,
    PRIMARY KEY(bill_id),
    CONSTRAINT fk_customer_for_bill_info FOREIGN KEY(customer_id)
        REFERENCES customer_info(customer_id),
    CONSTRAINT fk_discount_for_bill_info FOREIGN KEY(discount_id)
        REFERENCES discount(discount_id)
);

CREATE TABLE bill_detail (
    bill_detail_id VARCHAR(20) NOT NULL,
    bill_id        VARCHAR(20) NOT NULL,
    coffee_id      VARCHAR(20),
    bill_amount    BIGINT CHECK (bill_amount > 0),
    PRIMARY KEY(bill_detail_id),
    CONSTRAINT fk_coffee_id_for_bill_detail FOREIGN KEY(coffee_id)
        REFERENCES coffee_info(coffee_id),
    CONSTRAINT fk_bill_id_for_bill_detail FOREIGN KEY(bill_id)
        REFERENCES bill_info(bill_id)
);

\i insert_values.sql
