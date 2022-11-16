// https://www.npmjs.com/package/sink-test
import sinkTest from "sink-test";
const { start, sink } = sinkTest;

sink("my module", function (test, ok, before, after, assert) {
	before(function () {
		// run this before every test
	});

	after(function () {
		// run this after every test
	});

	test("should have foo", 2, function () {
		ok(true, "this is basically true");
		ok(1 == 1, "also true for you math majors");
	});
});

sink("another module", function (test, ok, b, a) {
	test("a failure", 1, function () {
		ok(1 == 2, "should fail");
	});
});

start();
