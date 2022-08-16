#!/usr/bin/env python

import asyncio
import time
import websockets
import threading
import datetime, time
import ssl
import pathlib

isDevelopment = True

async def echo(websocket):
    then = datetime.datetime.now() + datetime.timedelta(seconds=10)
    while then > datetime.datetime.now():
        await websocket.send(datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')[:-3])
        time.sleep(0.05)

def set_interval(func, sec):
    def func_wrapper():
        set_interval(func, sec) 
        func()  
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t

async def main():
    # Set the stop condition when receiving SIGTERM.
    loop = asyncio.get_running_loop()
    stop = loop.create_future()

    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    localhost_pem = pathlib.Path("/etc/letsencrypt/live/hy1dra.com/fullchain.pem").with_name("fullchain.pem")
    ssl_context.load_cert_chain(localhost_pem)

    async with websockets.serve(
        echo,
        host="localhost",
        port=8765,
        ssl=ssl_context
    ):
        await stop


if __name__ == "__main__":
    asyncio.run(main())