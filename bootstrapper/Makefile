SHELL         := /bin/bash -euo pipefail
.DEFAULT_GOAL := all
parentDir     ?= ../..
PROJECT_DIR   := $(parentDir)/accounts

all: build

build:
	./build.sh

run:
	npm start

.DELETE_ON_ERROR:
.PHONY: all build
