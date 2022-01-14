import React from 'react';
import {Container, Row, Col,Media} from 'reactstrap';
//import moment from 'moment';
import profile from '../profile.json';

class PersonelProfile extends React.Component {
  render() {
    return <Container>
    <Row>
      <Col>
          {profile.PersonelProfile.map(function (personel, i) {
              return <Media key={i}>
                {
                  [
                    {
                      "key": "Name",
                      "value": personel.name
                    },
                    {
                      "key": "Date Of Birth",
                      "value": personel['Date of birth']
                    },
                    {
                      "key": "Nationality",
                      "value": personel.Nationality
                    },
                    {
                      "key": "Father Name",
                      "value": personel.FathersName
                    },
                    {
                      "key": "Mothers Name",
                      "value": personel.MothersName
                    },
                    {
                      "key": "Sex",
                      "value": personel.Sex
                    }, 
                    
                    {
                      "key": "Martial Status",
                      "value": personel['Martial Status']
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

export default PersonelProfile;