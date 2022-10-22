from fastapi import Depends, FastAPI
import uvicorn
from sqlalchemy.orm import Session
from db import SessionLocal
from model import ItemsTable

app = FastAPI()

def get_db(): # リクエスト時にSessionLocalを作成し完了したら終了する
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

@app.get("/")
def get_root():
    return {"message": "Hello World"}


@app.get("/items")
def get_items(db: Session = Depends(get_db)):
    """
    get all items
    """
    return db.query(ItemsTable).all()

@app.get("/items/{_id}")
def get_item(db: Session = Depends(get_db)):
    """
    get all items
    """
    item = db.query(ItemsTable).filter(ItemsTable.photo_id == _id).first()
    return {item.photo_per}

# @app.get("/items/{_id}")
# def get_item(_id: int):
#     """
#     get an item.
#     :param _id:
#     :return:
#     """
#     item = session.query(ItemsTable).filter(ItemsTable.photo_id == _id).first()
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
#         .filter(ItemsTable.photo_id == _id) \
#         .first()
#     target_item.item_name = item.item_name
#     session.commit()
#     new_item = session.query(ItemsTable) \
#         .filter(ItemsTable.photo_id == _id) \
#         .first()
#     return new_item

# @app.delete("/items/{_id}")
# def delete_item(_id: int):
#     """
#     delete item.
#     :return: 
#     """
#     item = session.query(ItemsTable).filter(ItemsTable.photo_id == _id).first()
#     session.delete(item)
#     session.commit()
#     return item
