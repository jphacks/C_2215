FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7
#RUN mkdir /api
#ADD . /api
WORKDIR /api
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y libgl1-mesa-dev
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install python-dotenv
RUN pip install google-api-python-client
RUN pip install fastapi
RUN pip install uvicorn[standard]
RUN pip install pydantic
RUN pip install starlette
RUN pip install opencv-python
RUN pip install opencv-contrib-python
