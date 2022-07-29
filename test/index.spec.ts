import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Fabricators Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'fabricators');
});

export const { run } = test;
