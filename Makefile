all: dev
	$(info Running Development Build(default))
	

dev: backend-dev facial-recog-dev frontend-dev
prod: backend-prod frontend-prod

backend-dev:
	cd backend; \
	npm run dev&
frontend-dev:
	cd frontend; \
	npm run dev&
facial-recog-dev:
	cd facial-recognition; \
	python3 app.py&
backend-prod:
	cd backend; \
	npm run start&
frontend-prod:
	cd frontend; \
	npm run build; \
	npm run start&
facial-recog-prod:
	cd facial-recognition; \
	flask run&

clean:
	killall node \
	killall flask
