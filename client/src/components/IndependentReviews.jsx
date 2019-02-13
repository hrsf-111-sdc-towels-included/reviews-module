/* eslint-disable no-restricted-syntax */
import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const StarsOuter = styled.div`
    position: relative;
    display: inline-block;
    &:before {
      content: "\f005 \f005 \f005 \f005 \f005";
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      color: #ccc;
    }
`;

const Accuracy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #008080;
  }
`;

const Location = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #008080;
  }
`;

const Communication = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #008080;
  }
`;

const CheckIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #008080;
  }
`;

const Cleanliness = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #008080;
  }
`;

const Value = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #008080;
  }
`;
class IndependentReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Accuracy: 0,
      Location: 0,
      Communication: 0,
      CheckIn: 0,
      Cleanliness: 0,
      Value: 0,
    };
  }

  componentDidMount() {
    Axios.get('/api/reviews')
      .then((res) => {
        let independentAccuracy = 0;
        let independentLocation = 0;
        let independentCommunication = 0;
        let independentCheckin = 0;
        let independentCleanliness = 0;
        let independentValue = 0;
        for (let i = 0; i < res.data.length; i += 1) {
          independentAccuracy += res.data[i].accuracy;
          independentLocation += res.data[i].location;
          independentCommunication += res.data[i].communication;
          independentCheckin += res.data[i].check_in;
          independentCleanliness += res.data[i].cleanliness;
          independentValue += res.data[i].value;
        }
        independentAccuracy /= res.data.length;
        independentCommunication /= res.data.length;
        independentCleanliness /= res.data.length;
        independentLocation /= res.data.length;
        independentCheckin /= res.data.length;
        independentValue /= res.data.length;
        this.setState({
          Accuracy: independentAccuracy,
          Location: independentLocation,
          Communication: independentCommunication,
          CheckIn: independentCheckin,
          Cleanliness: independentCleanliness,
          Value: independentValue,
        });
        return res;
      })
      .then((res) => {
        for (const catagories in this.state) {
          console.log('what state am i stuck on?', catagories);
          const starPersentage = (this.state[catagories] / 5 ) * 100;
          const starPersentageRounded = (`${Math.round(starPersentage / 10) * 10}%`);
          console.log(Accuracy.componentStyle.rules);
          //document.querySelector(`.${catagories}`).style.width = starPersentageRounded;
        }
        return res;
      })
      .catch(console.log('there was an error'));
  }


  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <tbody>
            <tr className="rowOne">
              <td>Accuracy</td>
              <td>
                <StarsOuter>
                  <Accuracy />
                </StarsOuter>
                <span className="number-rating"></span>
              </td>
              <td>Location</td>
              <td>
                <StarsOuter>
                  <Location />
                </StarsOuter>
                <span className="number-rating"></span>
              </td>
            </tr>
            <tr className="rowTwo">
              <td>Communication</td>
              <td>
                <StarsOuter>
                  <Communication />
                </StarsOuter>
                <span className="number-rating"></span>
              </td>
              <td>Check-in</td>
              <td>
                <StarsOuter>
                  <CheckIn />
                </StarsOuter>
                <span className="number-rating"></span>
              </td>
            </tr>
            <tr className="rowThree">
              <td>Cleanliness</td>
              <td>
                <StarsOuter>
                  <Cleanliness />
                </StarsOuter>
                <span className="number-rating"></span>
              </td>
              <td>Value</td>
              <td>
                <StarsOuter>
                  <Value />
                </StarsOuter>
                <span className="number-rating"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default IndependentReviews;
