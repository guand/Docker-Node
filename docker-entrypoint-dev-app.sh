#!/bin/sh

DOCKER_FIRST_RUN_COMPLETE="DOCKER_FIRST_RUN_COMPLETE"
if [ ! -e $DOCKER_FIRST_RUN_COMPLETE ]; then
	knex migrate:rollback
    echo "-- First run --"
    knex migrate:latest
    touch $DOCKER_FIRST_RUN_COMPLETE
fi

npm run dev