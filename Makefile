all: dev
	$(info Running Development Build(default))
	

dev: backend-dev frontend-dev
prod: backend-prod frontend-prod

backend-dev:
	cd backend; \
	npm run dev&
frontend-dev:
	cd frontend; \
	npm run dev&
backend-prod:
	cd backend; \
	npm run start&
frontend-prod:
	cd frontend; \
	npm run build; \
	npm run start&

clean:
	killall node
