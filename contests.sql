
DROP TABLE contests;

CREATE TABLE contests (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    thumbnail TEXT,
    author TEXT NOT NULL,
    description TEXT NOT NULL,
    tags TEXT,
    designs INTEGER,
    days INTEGER
);

INSERT INTO contests (title, author, description, tags, designs, days)
VALUES (
    'Billboard',
    'john ldq',
    'We are an independent Insurance Agency at sells both personal and commercial/business insurance. We are targeting bo...',
    'Guaranteed, Signage, Accounting & Financial',
    0,
    4
);

INSERT INTO contests (title, author, description, tags, designs, days)
VALUES (
    'Mosaic Solutions',
    'john dq',
    'We are a Property Management System software for high end resort owners...',
    'Guaranteed, Blind, Logo design',
    0,
    4
);

INSERT INTO contests (title, author, description, tags, designs, days)
VALUES (
    'Mosaic Solutions',
    'john dq',
    'We are a Property Management System software for high end resort owners...',
    'Guaranteed, Blind, Logo design',
    0,
    4
);
