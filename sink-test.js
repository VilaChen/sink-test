let sinkList = [];
const testList = [];
let allPass = true;
let bFun = [];
let aFun = [];

const sink = (name, fn) => {
	sinkList.push({
		name,
		fn,
	});
};

const runSink = (currentSink) => {
	bFun = [];
	aFun = [];
	console.log("Module: " + currentSink.name);
	currentSink.fn(test, ok, before, after);
	runTest();
};

const runTest = () => {
	if (testList.length === 0) {
		start();
		return;
	}
	bFun.forEach((i) => i());

	const currentTest = testList.shift();
	console.log(currentTest.name + "....");
	currentTest.fn(() => {
		aFun.forEach((i) => i());
		runTest();
	});
};

const test = (name, fn) => {
	testList.push({ name, fn });
};

const ok = (equal, string) => {
	console.log(string + (equal ? "√" : "×"));
	if (!equal) allPass = false;
};

const before = (fn) => {
	bFun.push(fn);
};

const after = (fn) => {
	aFun.push(fn);
};

const start = () => {
	const currentSink = sinkList.shift();
	// console.log(currentSink, sinkList, 123);

	if (currentSink) {
		runSink(currentSink);
	} else {
		console.log(
			allPass
				? "Congratulations! All tests have passed!"
				: "There were some errors! The suite has failed."
		);
	}
};

export default {
	sink,
	start,
};
