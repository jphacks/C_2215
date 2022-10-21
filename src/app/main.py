from fastapi import FastAPI
import uvicorn

from src.app.db import session
from src.app.model import ItemCreate, ItemsTable

app = FastAPI()

@app.get("/")
def get_root():
    return {"message": "Hello World"}


@app.get("/items")
def get_items():
    """
    get all items
    :return:
    """
    items = session.query(ItemsTable).all()
    return items

@app.get("/items/{_id}")
def get_item(_id: int):
    """
    get an item.
    :param _id:
    :return:
    """
    item = session.query(ItemsTable).filter(ItemsTable.photo_id == _id).first()
    return item

@app.post("/items")
def create_item(item: ItemCreate):
    """
    create an item
    :param item:
    :return:
    """
    item_ = ItemsTable(item_name=item.item_name)
    session.add(item_)
    session.commit()
    item = session.query(ItemsTable) \
        .filter(ItemsTable.item_name == item.item_name) \
        .first()
    return item

@app.put("/items/{_id}")
def update_item(item: ItemCreate, _id: int):
    """

    :param item:
    :param _id:
    :return:
    """
    target_item: ItemsTable = session.query(ItemsTable) \
        .filter(ItemsTable.photo_id == _id) \
        .first()
    target_item.item_name = item.item_name
    session.commit()
    new_item = session.query(ItemsTable) \
        .filter(ItemsTable.photo_id == _id) \
        .first()
    return new_item

@app.delete("/items/{_id}")
def delete_item(_id: int):
    """
    delete item.
    :return: 
    """
    item = session.query(ItemsTable).filter(ItemsTable.photo_id == _id).first()
    session.delete(item)
    session.commit()
    return item
