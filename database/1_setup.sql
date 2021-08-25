CREATE TABLE IF NOT EXISTS  posts (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    pseudonym varchar(100),
    text varchar(500) NOT NULL,
    date date DEFAULT CURRENT_DATE
);