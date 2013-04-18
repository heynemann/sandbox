compile:
	@./node_modules/.bin/coffee -c pq/*.coffee

test: compile
	@./node_modules/.bin/vows -spec --cover-plain

setup:
	@npm install .
