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
				{ ({month, actions}) => {
					return (
						<DropdownButton id="dropdown-basic-button" title={`${month.monthNum}/${month.yearNum}`}>
							<Container>
								<Row>
									<Col><Dropdown.Item onClick={() => actions.updateYear(-1)}>{'<'}</Dropdown.Item></Col>
									<Col><Dropdown.Item >{month.yearNum}</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateYear(1)}>{'>'}</Dropdown.Item></Col>
								</Row>
								<Row>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(1)}>1</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(2)}>2</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(3)}>3</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(4)}>4</Dropdown.Item></Col>
								</Row>
								<Row>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(5)}>5</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(6)}>6</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(7)}>7</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(8)}>8</Dropdown.Item></Col>
								</Row>
								<Row>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(9)}>9</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(10)}>10</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(11)}>11</Dropdown.Item></Col>
									<Col><Dropdown.Item onClick={() => actions.updateMonth(12)}>12</Dropdown.Item></Col>
								</Row>
							</Container>
						</DropdownButton>
					);
				}}
      </Consumer>
    );
}

export default YearCalendar;