COFFEE=./node_modules/.bin/coffee
VOWS=./node_modules/.bin/vows

compile:
	@${COFFEE} --join ./pq/pq.js --compile pq/*.coffee

tests: compile
	@${VOWS} -spec --cover-plain

debug: compile
	@node debug ${VOWS} -spec --cover-plain

setup:
	@npm install .
