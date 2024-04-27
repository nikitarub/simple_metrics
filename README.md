# simple_metrics
Простой пример отправки и обработки метрик


## Запуск:

### Веб-приложение:


В первом терминале
```
cd client
npm i
npm start
```

 
### Сервер-метрики:

Во втором терминале 

- Linux / MacOS

```
cd metrics_server
pip install -r requirements.txt
sh start.sh
```

- Windows (Cmd)
```
cd metrics_server
pip install -r requirements.txt
start.cmd
```

- Windows (PowerShell)
```
cd metrics_server
pip install -r requirements.txt
./start.cmd
```
