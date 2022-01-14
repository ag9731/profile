import React from 'react';
import {Container, Row, Col,Media} from 'reactstrap';
//import moment from 'moment';
import profile from '../profile.json';

class projects extends React.Component {
  render() {
    return <Container>
    <Row>
      <Col>
          {profile.projects.map(function (project, i) {
              return <Media key={i}>
                {
                  [
                    {
                      "key": "Project Title",
                      "value": project.name
                    },
                    {
                      "key": "Used Frameworh",
                      "value": project.framework
                    },
                  ].map(function (object, i) {
                    return <div>
                      <Row>
                        <Col className="formLabel">{object.key}:</Col>
                      </Row>
                      <Row>
                        <Col>{object.value}</Col>
                      </Row>
                    </div>
                  })
                }
                </Media>
              })}
            </Col>
          </Row>
          </Container>
        }
      }

export default projects;