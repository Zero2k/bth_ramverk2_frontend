import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReportText from '../components/ReportText';

configure({ adapter: new Adapter() });

describe('Check if component ReportText render text', () => {
  test('ReportText render text', () => {
    const report = {
      id: '1',
      title: 'Kmom01 - Express',
      description: 'Vi skall bygga grunden till en applikations/webbplats med hjälp av ramverket Express.',
      text: 'test',
    };
    const wrapper = mount(<ReportText report={report} />);
    const title = wrapper.find('h3');
    expect(title.text()).toBe('Kmom01 - Express');
  });
});
