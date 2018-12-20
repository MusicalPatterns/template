commit:
	set -e; ../../node_modules/@musical-patterns/cli/bin/commit.sh

.PHONY: lint
lint:
	set -e; pushd ../..; make lint DIR="src/template"; popd

pull:
	set -e; ../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	set -e; ../../node_modules/@musical-patterns/cli/bin/push.sh

ship:
	set -e; pushd ../..; make ship PATTERN="template"; popd

.PHONY: test
test:
	set -e; pushd ../..; make test JASMINE_CONFIG_PATH="src/template/test/jasmine.js" PATTERN_NAME="TEMPLATE"; popd

update:
	set -e; pushd ../..; make update PATTERN="template"; popd
