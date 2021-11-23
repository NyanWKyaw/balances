PROJECT=balances

build:
	@echo "Building project..."
	npm ci

build_image:build
	@echo "Building docker image"
	docker build -t ${PROJECT} .
	
.DELETE_ON_ERROR:
.PHONY: build build-image
