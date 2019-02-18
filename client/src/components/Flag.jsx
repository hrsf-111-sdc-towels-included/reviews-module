import React from 'react';
import Modal, {closeStyle} from 'simple-react-modal';

class Flag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true }, () => {
      console.log("I Am clicking")
    });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="flag">
        <img className="flag" onClick={this.showModal} src="http://download.seaicons.com/icons/icons8/ios7/512/Very-Basic-Flag-icon.png" alt="" />
        <Modal
          className="test-class" //this will completely overwrite the default css completely
          style={{ background: 'rgba(0,0,0,0.5)' }} //overwrites the default background
          containerStyle={{ background: 'white', color: 'black' }} //changes styling on the inner content area
          containerClassName="test"
          closeOnOuterClick={true}
          show={this.state.show}
          onClose={this.hideModal}>
  
          <a style={closeStyle} onClick={this.hideModal}>X</a>
          <div>
            <section>
              <h1 className="modalHeader">Do you want to anonymously report this review?</h1>
              <div className="modalDescription">If so, please choose one of the following reasons.</div>
            </section>
            <section>
              <label className="container">
                <div className="inapproproateContent">
                  Inappropriate Content
                  <input type="radio" name="complaintOptions" />
                </div>
                <p className="complaint">this review contains violent, graphic, promotional, or otherwise offensive content.</p>
              </label>
              <hr Style="margin-top: 24px; margin-bottom: 24px" />
              <label className="container">
                <div className="dishonest">
                  Dishonest or hateful content
                  <input type="radio" name="complaintOptions" />
                </div>
                <p className="complaint">This review is purposefully malicious and assaulting.</p>
              </label>
              <hr Style="margin-top: 24px; margin-bottom: 24px" />
              <label className="container">
                <div className="fakeContent">
                  Fake content
                  <input type="radio" name="complaintOptions" />
                </div>
                <p className="complaint">This review contains false information or may be fake.</p>
              </label>
              <hr Style="margin-top: 24px; margin-bottom: 24px" />
            </section>
          </div>
  
        </Modal>
      </div>
    );
  }
}

export default Flag;
