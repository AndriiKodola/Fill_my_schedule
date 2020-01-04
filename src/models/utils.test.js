import { indentical } from 'ScheduleActions';

const testObject1suit = [
	{
		day: {
			name: "monday",
			date: '01'
		}
	}
];
const testObject2suit = [
	{
		day: {
			name: "monday",
			date: '02'
		}
	}
];

test(`Compares ${JSON.stringify(testObject1suit[0])} with ${JSON.stringify(testObject2suit[0])}`, () => {
		expect(indentical(testObject1suit[0], testObject2suit[0])).toBe(false);
	});