FROM python:latest

WORKDIR /fast_api_app/src

COPY requirements.txt .
# コンテナ内で必要なパッケージをインストール
RUN pip install --no-cache-dir --trusted-host pypi.python.org -r requirements.txt

COPY app/main.py ./app/
COPY app/model.py ./app/
COPY app/db.py ./app/

ENV PYTHONPATH /fast_api_app

EXPOSE 8080
# FastAPIを8080ポートで待機
WORKDIR /fast_api_app/src/app
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]