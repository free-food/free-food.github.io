.PHONY: dev preview down

dev:
	docker compose up dev

preview:
	docker compose up preview

down:
	docker compose down
