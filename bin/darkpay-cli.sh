#!/bin/bash
if (( $# == 0 )); then
    echo "usage: service command params..."
    echo ""
    echo "example: darkpay-cli.sh darkpayd1 help"
    exit
elif (( $# == 1 )); then
    SERVICE="$1"
    shift
    echo ">>> docker-compose exec $SERVICE /opt/darkpay/bin/darkpay-cli help"
    docker-compose exec "$SERVICE" /opt/darkpay/bin/darkpay-cli help
else
    SERVICE="$1"
    shift
    echo ">>> docker-compose exec $SERVICE /opt/darkpay/bin/darkpay-cli $@"
    docker-compose exec "$SERVICE" /opt/darkpay/bin/darkpay-cli "$@"
fi

