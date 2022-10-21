"""
model.
"""
from datetime import datetime

from pydantic import BaseModel
from sqlalchemy import Column, DATETIME, FetchedValue, Integer, Text ,LargeBinary

from src.app.db import base


class photo_info(base):
    """
    photo_info.
    """
    __tablename__ = 'photo_info'
    photo_id = Column(Integer, primary_key=True, autoincrement=True)
    photo_per = Column(Integer)
    photo_img = Column(LargeBinary(length=(2**32)-1))
    created_at = Column(DATETIME, FetchedValue())
    updated_at = Column(DATETIME, FetchedValue())


class Item(BaseModel):
    """
    Item model.
    """
    photo_id: int
    photo_per:int
    photo_img:str
    created_at: datetime
    updated_at: datetime


class ItemCreate(BaseModel):
    """
    Item create
    """
    photo_per: int

#----------------------------------------------



class ItemsTable(base):
    """
    table.
    """
    __tablename__ = 'items'
    id = Column(Integer, primary_key=True, autoincrement=True)
    item_name = Column(Text, nullable=False)
    created_at = Column(DATETIME, FetchedValue())
    updated_at = Column(DATETIME, FetchedValue())


class Item(BaseModel):
    """
    Item model.
    """
    id: int
    item_name: str
    created_at: datetime
    updated_at: datetime


class ItemCreate(BaseModel):
    """
    Item create
    """
    item_name: str