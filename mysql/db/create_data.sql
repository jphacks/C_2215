CREATE TABLE fastapi.items
(
    id INT NOT NULL
    AUTO_INCREMENT,
    item_name text NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON
    UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY
    (id)
);

-- サンプルレコード作成
INSERT INTO fastapi.items
    ( -- columns to insert data into
    item_name
    )
VALUES
    ( -- first row: values for the columns in the list above
        'item1'
),
    ( -- second row: values for the columns in the list above
        'item2'
),
    ( -- third row: values for the columns in the list above
        'item3'
);