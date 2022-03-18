DROP TABLE IF EXISTS task;

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    name VARCHAR (35) NOT NULL,
    description VARCHAR(200) NOT NULL,
    priority INTEGER(1) NOT NULL,
    deadline DATE NOT NULL,
    status INTEGER(1) DEFAULT 0 NOT NULL,
    today BOOLEAN
);
