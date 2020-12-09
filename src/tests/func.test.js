import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const Foo = ({ width, height, onChange }) => (
  <div>
    <input name="width" value={width} onChange={onChange} />
    <input name="height" value={height} onChange={onChange} />
  </div>
);

describe('functional component testing', () => {
  const testState = { width: 10, height: 20 };
  const wrapper = mount((
    <Foo
      width={testState.width}
      height={testState.height}
      onChange={(e) => {
        testState[e.target.name] = e.target.value;
      }}
    />
  ));
  it('test value', () => {
    wrapper.find('input[name="width"]').simulate('change', { target: { name: 'width', value: 50 } });
    expect(testState.width).toEqual(50);
  })
})

// expect(wrapper.find('input').at(0).prop('value')).toEqual(10);
// expect(wrapper.find('input').at(1).prop('value')).toEqual(20);
// wrapper.find('input').at(0).simulate('change', { target: { name: 'width', value: 50 } });
// wrapper.find('input').at(1).simulate('change', { target: { name: 'height', value: 70 } });
// expect(testState.width).toEqual(50);
// expect(testState.height).toEqual(70);