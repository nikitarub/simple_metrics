from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time
import os


description = """
Простой сервис сохранения метрик
"""


app = FastAPI(
    title="Metrics server API",
    description=description,
    version="0.0.1"
)

origins = [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://0.0.0.0:3000",
    # "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World!"}


class Metric(BaseModel):
    key: str
    value: Union[str, None] = None


def write_metrics(metric: Metric, metrics_filepath="metrics.csv"):
    ok_flag = False
    try:
        if not os.path.exists(metrics_filepath):
            with open(metrics_filepath, "w") as f:
                header = "server_time;key;value\n"
                f.write(header)
        with open(metrics_filepath, "a") as f:
            metrics_string = f"{time.time()};{metric.key};{metric.value}\n"
            f.write(metrics_string)
            ok_flag = True
    except Exception as e:
        print("ERROR: ", e)
    finally:
        return ok_flag

@app.post("/send/")
async def root(metric: Metric):
    print("metric: ", metric)
    ok_flag = write_metrics(metric)
    return {"ok_flag": ok_flag}
