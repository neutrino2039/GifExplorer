#!/bin/bash

ENV=$1
COMMAND=$2

if [[ "$ENV" != "dev" && "$ENV" != "prod" ]]; then
  echo "Usage: ./run.sh [dev|prod] [up|rebuild]"
  exit 1
fi

COMPOSE_FILE="docker-compose.$ENV.yml"

case "$COMMAND" in
  up)
    echo "Starting $ENV environment..."
    docker-compose -f $COMPOSE_FILE up --build
    ;;
  rebuild)
    echo "Rebuilding $ENV environment..."
    docker-compose -f $COMPOSE_FILE down
    docker-compose -f $COMPOSE_FILE up --build
    ;;
  *)
    echo "Unknown command. Use: up or rebuild"
    exit 1
    ;;
esac
