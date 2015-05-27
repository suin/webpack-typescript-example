watch:
	./node_modules/.bin/webpack --watch

bootstrap:
	npm install
	./node_modules/.bin/tsd reinstall -so

build:
	./node_modules/.bin/webpack --config webpack-build.config.js -p

clean:
	rm public/javascripts/bundle.*

destroy:
	rm -rf node_modules typings
