MAKEFLAGS += --no-print-directory --always-make

commit:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/commit.sh

lint:
	@set -e; pushd ../..; make lint DIR="src/template"; popd

pull:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/push.sh

ship:
	@set -e; pushd ../..; make ship PATTERN="template"; popd

test:
	@set -e; pushd ../..; make test JASMINE_CONFIG_PATH="src/template/test/jasmine.js" PATTERN="template"; popd

update:
	@set -e; pushd ../..; make update PATTERN="template"; popd
