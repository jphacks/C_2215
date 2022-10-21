from fastapi import FastAPI
import uvicorn

from src.app.db import session
from src.app.model import ItemCreate, photo_info

app = FastAPI()

@app.get("/")
def get_root():
    return {"message": "Hello World"}



@app.get("/photo")
def get_photo_info():
    """
    get all items
    :return:
    """
    photo = session.query(photo_info).all()
    return photo

@app.get("/items/{_id}")
def get_item(_id: int):
    """
    get an item.
    :param _id:
    :return:
    """
    item = session.query(photo_info).filter(photo_info.photo_id == _id).first()
    return item

# @app.post("/items")
# def create_item(item: ItemCreate):
#     """
#     create an item
#     :param item:
#     :return:
#     """
#     item_ = photo_info(item_name=item.item_name)
#     session.add(item_)
#     session.commit()
#     item = session.query(photo_info) \
#         .filter(photo_info.item_name == item.item_name) \
#         .first()
#     return item

# @app.put("/items/{_id}")
# def update_item(item: ItemCreate, _id: int):
#     """

#     :param item:
#     :param _id:
#     :return:
#     """
#     target_item: photo_info = session.query(photo_info) \
#         .filter(photo_info.photo_id == _id) \
#         .first()
#     target_item.item_name = item.item_name
#     session.commit()
#     new_item = session.query(photo_info) \
#         .filter(photo_info.photo_id == _id) \
#         .first()
#     return new_item

# @app.delete("/items/{_id}")
# def delete_item(_id: int):
#     """
#     delete item.
#     :return: 
#     """
#     item = session.query(photo_info).filter(photo_info.photo_id == _id).first()
#     session.delete(item)
#     session.commit()
#     return item






# #-----------------------------------------------

# @app.get("/items")
# def get_items():
#     """
#     get all items
#     :return:
#     """
#     items = session.query(ItemsTable).all()
#     return items

# @app.get("/items/{_id}")
# def get_item(_id: int):
#     """
#     get an item.
#     :param _id:
#     :return:
#     """
#     item = session.query(ItemsTable).filter(ItemsTable.id == _id).first()
#     return item

# @app.post("/items")
# def create_item(item: ItemCreate):
#     """
#     create an item
#     :param item:
#     :return:
#     """
#     item_ = ItemsTable(item_name=item.item_name)
#     session.add(item_)
#     session.commit()
#     item = session.query(ItemsTable) \
#         .filter(ItemsTable.item_name == item.item_name) \
#         .first()
#     return item

# @app.put("/items/{_id}")
# def update_item(item: ItemCreate, _id: int):
#     """

#     :param item:
#     :param _id:
#     :return:
#     """
#     target_item: ItemsTable = session.query(ItemsTable) \
#         .filter(ItemsTable.id == _id) \
#         .first()
#     target_item.item_name = item.item_name
#     session.commit()
#     new_item = session.query(ItemsTable) \
#         .filter(ItemsTable.id == _id) \
#         .first()
#     return new_item

# @app.delete("/items/{_id}")
# def delete_item(_id: int):
#     """
#     delete item.
#     :return: 
#     """
#     item = session.query(ItemsTable).filter(ItemsTable.id == _id).first()
#     session.delete(item)
#     session.commit()
#     return item
