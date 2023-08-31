-- author table
CREATE TABLE Author (
    id INT IDENTITY(1,1) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL
);

-- post table
CREATE TABLE Post (
    id INT IDENTITY(1,1) PRIMARY KEY,
    version INT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    published_on DATETIME2 NOT NULL,
    updated_on DATETIME2,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Author(id)
);

-- comment table
CREATE TABLE Comment (
    name VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    published_on DATETIME2 NOT NULL,
    updated_on DATETIME2,
    post INT NOT NULL,
    FOREIGN KEY (post) REFERENCES Post(id)
);


-- Insert dummy data into Author table
INSERT INTO Author (first_name, last_name, email, username)
VALUES
    ('John', 'Doe', 'john@example.com', 'johndoe'),
    ('Jane', 'Smith', 'jane@example.com', 'janesmith');

-- Insert dummy data into Post table
INSERT INTO Post (version, title, content, published_on, updated_on, author_id)
VALUES
    (1, 'First Post', 'This is the content of the first post.', GETDATE(), NULL, 1),
    (1, 'Second Post', 'This is the content of the second post.', GETDATE(), NULL, 2);

-- Insert dummy data into Comment table
INSERT INTO Comment (name, content, published_on, updated_on, post)
VALUES
    ('Alice', 'Great post!', GETDATE(), NULL, 1),
    ('Bob', 'I enjoyed reading this.', GETDATE(), NULL, 1),
    ('Charlie', 'Looking forward to more posts!', GETDATE(), NULL, 2);
