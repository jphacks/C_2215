"""
model.
"""
from datetime import datetime

from pydantic import BaseModel
from sqlalchemy import Column, DATETIME, FetchedValue, Integer, Text

from src.app.db import base


class ItemsTable(base):
    """
    table.
    """
    __tablename__ = 'items'
    photo_id = Column('photo_id', Integer, primary_key=True, autoincrement=True)
    photo_per = Column('photo_per', Integer)
    created_at = Column('created_at', DATETIME, FetchedValue())
    updated_at = Column('updated_at', DATETIME, FetchedValue())


class Item(BaseModel):
    """
    Item model.
    """
    photo_id: int
    photo_per: int
    created_at: datetime
    updated_at: datetime


class ItemCreate(BaseModel):
    """
    Item create
    """
    photo_per: int