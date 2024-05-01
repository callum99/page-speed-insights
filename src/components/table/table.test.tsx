import renderer from 'react-test-renderer';
import Table from "./table";
import {historicDataFive, historicDataFour, historicDataOne, historicDataThree, historicDataTwo} from "./table.const";

it('renders component with required props (showing max 5 rows)', () => {
    const tree = renderer.create(<Table data={historicDataFive} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders component with required props (showing 4 rows)', () => {
    const tree = renderer.create(<Table data={historicDataFour} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders component with required props (showing 3 rows)', () => {
    const tree = renderer.create(<Table data={historicDataThree} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders component with required props (showing 2 rows)', () => {
    const tree = renderer.create(<Table data={historicDataTwo} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders component with required props (showing 1 rows)', () => {
    const tree = renderer.create(<Table data={historicDataOne} />).toJSON();
    expect(tree).toMatchSnapshot();
});


it('does not render component, when no empty data object', () => {
   const tree = renderer.create(<Table  data={{}}/>).toJSON();
   expect(tree).toMatchSnapshot();
});