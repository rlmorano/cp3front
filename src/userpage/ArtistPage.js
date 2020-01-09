import React from 'react';
import ReactDatetime from 'react-datetime';

// reactstrap components
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Button,
  Row,
  Col
} from "reactstrap";

const ArtistPage = (props) => {
  return (
    <>
      <Container>
        <div className="text-center section">
          <Col md="12">
            <div className="title mb-3">
              <h3>Current Appointments</h3>
            </div>
            <Row>
              <Col sm="12">
                <table className="table">
                  <FormGroup>
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Tattoo Artist</th>
                        <th scope="col">Type of Services</th>
                        <th scope="col">Time</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <InputGroup className="date" id="datetimepicker">
                            <ReactDatetime
                              inputProps={{
                                placeholder: "Choose a Date"
                              }}
                            />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <span className="glyphicon glyphicon-calendar">
                                  <i aria-hidden={true} className="fa fa-calendar" />
                                </span>
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </td>
                        <td scope="row">
                          <Input type="select" name="tattooartist">
                            <option value="">Dado David</option>
                            <option value="">Anne Concepcion</option>
                            <option value="">Xavir Flintof</option>
                          </Input>
                        </td>
                        <td>
                          <Input type="select" name="services">
                            <option value="">Modern Tattoo</option>
                            <option value="">Old School Tattoo</option>
                            <option value="">Tribal Tattoo</option>
                            <option value="">Piercing</option>
                          </Input>
                        </td>
                        <td>
                          <Input type="select" name="booktime">
                            <option value="">Choose a Time</option>
                            <option value="">1:00-2:00PM</option>
                            <option value="">2:00-3:00PM</option>
                            <option value="">3:00-4:00PM</option>
                            <option value="">4:00-5:00PM</option>
                          </Input>
                        </td>
                        <td>
                          <Button className="btn-success mr-2">SESSION COMPLETED</Button>
                          <Button className="btn-danger mr-2">SESSION NOT COMPLETED</Button>
                        </td>
                      </tr>
                    </tbody>
                  </FormGroup>
                </table>
              </Col>

            </Row>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default ArtistPage;
