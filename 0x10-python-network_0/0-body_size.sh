#!/bin/bash
# Sends a request to a URL and displays the size in bytes
curl -s "$1" | wc -c
