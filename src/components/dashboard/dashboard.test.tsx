import renderer from 'react-test-renderer';
import Dashboard from "./dashboard";
import {singlePageMock, historicPageMock} from "./dashboard.const";

it('renders component with required props', () => {
    const tree = renderer.create(<Dashboard title="performance insight" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders component with all props', () => {
    const tree = renderer.create(<Dashboard title="performance insight" hostName="google.com" currentPage={singlePageMock} historicPages={historicPageMock} />).toJSON();
    expect(tree).toMatchSnapshot();
})