start: 
	docker start vue-app

stop:
	docker stop vue-app

up:
	docker run -v $(PWD):/app -v /app/node_modules -p 3001:3000 -d --name vue-app vue-app
# docker run -p 3000:3000 -d --name vue-app vue-app

destroy: stop
	docker rm vue-app

bash:
	docker exec -it vue-app /bin/sh

build:
	docker build -t vue-app . 

restart: stop start