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
    photo_id = Column(Integer, primary_key=True, autoincrement=True)
    item_name = Column(Text, nullable=False)
    created_at = Column(DATETIME, FetchedValue())
    updated_at = Column(DATETIME, FetchedValue())


class Item(BaseModel):
    """
    Item model.
    """
    photo_id: int
    item_name: str
    created_at: datetime
    updated_at: datetime


class ItemCreate(BaseModel):
    """
    Item create
    """
    item_name: str