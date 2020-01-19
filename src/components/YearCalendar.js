import React from 'react';
import { Consumer } from './Context';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const YearCalendar = () => {
    return (
			<Consumer>
				{ ({state, actions}) => {
					return (
						<DropdownButton id="dropdown-basic-button" title={`${state.monthNum+1}/${state.yearNum}`}>
							<Container>
								<Row>
									<Col><Dropdown.Item onClick={() => actions.setProp('yearNum', state.yearNum-1)}>{'<'}</Dropdown.Item></Col>
									<Col><Dropdown.Item >{state.yearNum}</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('yearNum', state.yearNum+1)}>{'>'}</Dropdown.Item></Col>
								</Row>
								<Row>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 0)}>1</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 1)}>2</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 2)}>3</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 3)}>4</Dropdown.Item></Col>
								</Row>
								<Row>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 4)}>5</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 5)}>6</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 6)}>7</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 7)}>8</Dropdown.Item></Col>
								</Row>
								<Row>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 8)}>9</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 9)}>10</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 10)}>11</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.setProp('monthNum', 11)}>12</Dropdown.Item></Col>
								</Row>
							</Container>
						</DropdownButton>
					);
				}}
      </Consumer>
    );
}

export default YearCalendar;