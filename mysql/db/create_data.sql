CREATE TABLE dish_dining.photo_info
(
    photo_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    photo_per int(11),
    photo_info VARCHAR(16000),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON
    UPDATE CURRENT_TIMESTAMP
);



--photo_img LONGBLOB,

-- サンプルレコード作成
INSERT INTO dish_dining.photo_info
    ( -- columns to insert data into
    photo_per
    )
VALUES
    ( -- first row: values for the columns in the list above
        30
),
    ( -- second row: values for the columns in the list above
        50
),
    ( -- third row: values for the columns in the list above
        80
);
