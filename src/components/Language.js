import React from 'react';
import {Container, Row, Col,Media} from 'reactstrap';
//import moment from 'moment';
import profile from '../profile.json';

class languages extends React.Component {
  render() {
    return <Container>
    <Row>
      <Col>
          {profile.languages.map(function (language, i) {
              return <Media key={i}>
                {
                  [
                    {
                      "key": "Language Name",
                      "value": language.name,
                    },
                    {
                     "key": "Read",
                      "value": language.read,
                    },
                    {
                        "key": "Write",
                         "value": language.write
                    },
                    {
                        "key": "Speak",
                         "value": language.speak,
                    }
                     
                    
                    
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

export default languages;