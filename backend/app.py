#!/usr/bin/env python

import asyncio
import http
import signal
import sys
import time
import websockets
import threading
import datetime, time
import ssl

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

async def health_check(path, request_headers):
    if path == "/healthz":
        return http.HTTPStatus.OK, [], b"OK\n"
    if path == "/inemuri":
        loop = asyncio.get_running_loop()
        loop.call_later(1, time.sleep, 10)
        return http.HTTPStatus.OK, [], b"Sleeping for 10s\n"
    if path == "/seppuku":
        loop = asyncio.get_running_loop()
        loop.call_later(1, sys.exit, 69)
        return http.HTTPStatus.OK, [], b"Terminating\n"


async def main():
    # Set the stop condition when receiving SIGTERM.
    loop = asyncio.get_running_loop()
    stop = loop.create_future()
    loop.add_signal_handler(signal.SIGTERM, stop.set_result, None)

    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ssl_cert = "/etc/letsencrypt/live/hy1dra.com/fullchain.pem"
    ssl_key = "/etc/letsencrypt/live/hy1dra.com/privkey.pem"

    ssl_context.load_cert_chain(ssl_cert, keyfile=ssl_key)

    async with websockets.serve(
        echo,
        host="",
        port=8765,
        process_request=health_check,
        ssl=ssl_context
    ):
        await stop


if __name__ == "__main__":
    asyncio.run(main())