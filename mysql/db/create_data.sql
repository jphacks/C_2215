CREATE TABLE fastapi.items
(
    photo_id INTEGER PRIMARY KEY
    AUTO_INCREMENT,
    photo_per INT(11),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON
    UPDATE CURRENT_TIMESTAMP
);


-- サンプルレコード作成
INSERT INTO fastapi.items
    ( -- columns to insert data into
    photo_per
    )
VALUES
    ( -- first row: values for the columns in the list above
        11
),
    ( -- second row: values for the columns in the list above
        12
),
    ( -- third row: values for the columns in the list above
        13
);
