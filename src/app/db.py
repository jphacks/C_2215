"""
create db transaction
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

host: str = 'localhost'
port: int = 3306
db_name: str = 'dish_dining'
user = 'root'
password = 'nosetaku'

uri = f'mysql://{user}:{password}@{host}:{port}/{db_name}?charset=utf8'
engine = create_engine(uri, encoding='utf8', echo=True)

session = scoped_session(
    sessionmaker(
        autocommit=False,
        autoflush=False,
        bind=engine)
)

base = declarative_base()
base.query = session.query_property()

"""
nutfes.info@gmail.com
gidaifes
~.
"""
