#!/bin/bash
echo "Stopping existing app..."
pkill node || echo "Node.js process not running"
