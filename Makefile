pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

.PHONY: test
test:
	pushd ../..; JASMINE_CONFIG_PATH="src/template/test/jasmine.js" PATTERN_NAME="TEMPLATE" make test; popd
