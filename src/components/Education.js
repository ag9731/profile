import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
//import moment from 'moment';
import profile from '../profile.json';

class Education extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.studies.map(function (study, i) {
            return <Media key={i}>
                {
                  [
                    {
                      "key": "College Name", 
                      "value": study.institute                    
                    },
                    {
                      "key": "Course Title", 
                      "value": study.title
                     
                    },
                     
                    {
                      "key": "% Of Marks",
                      "value": study['% Marks']
                    },

                    {
                      "key": "Graduation Year",
                      "value": study.graduationYear
                    },
  
                    {
                      "key": "Duration",
                      "value": study.durationInYears + " year(s)"
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

export default Education;