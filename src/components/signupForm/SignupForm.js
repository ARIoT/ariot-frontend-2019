import React, { Component, Fragment } from 'react';
import './SignupForm.scss';
// import SiteData from '../../data/site.json';

class SignupForm extends Component {

  constructor() {
      super();
      this.state = {        
        members: [],
        memberCount: 1,
        max: 7,
        numberOfMembers: 2,
        selectedButton: 2,
        buttonActive: false
      }
      this.renderInputField = this.renderInputField.bind(this);
      this.changeNumberOfMembers = this.changeNumberOfMembers.bind(this);
      this.sendForm = this.sendForm.bind(this);
      this.toggleActiveClassButton = this.toggleActiveClassButton.bind(this);
  }

  changeNumberOfMembers(newAwesomeNumber) {
    // toggle
    this.setState({
      numberOfMembers: newAwesomeNumber,
      selectedButton: newAwesomeNumber
    })
  }

  toggleActiveClassButton() {
    this.setState({
        doorsOpen: !this.state.doorsOpen
      });
  }



  renderInputField() {
    let inputs = [];
    for (var i = 1; i < this.state.numberOfMembers; i++) {
      inputs.push(
        <label className="c_input">
          <span className="c_input-label-text">Team member nr. {i + 1} name</span>
          <input type="text" id={`teamMember-${i}`} placeholder="Team member name" />
        </label>
      )
    }
    return inputs;
  }

  sendForm() {
    console.log('SEND FORM FFS');
  }

  render() {
  //   const {
  //     id,
  //     title,
  //     intro,
  //     image,
  //     points,
  //     criteria
  // } = this.props.item;
    
    return (
      <form className="c_signup-form">      
        {this.state.numberOfMembers} 
        <fieldset>
          <label className="c_input">
            <span className="c_input-label-text">Company name</span>
            <input type="text" id="company-name" placeholder="Company name" />
          </label>
          
          <label className="c_input">
            <span className="c_input-label-text">Company email (billing)</span>
            <input type="email" id="company-email" placeholder="Company email" />
          </label>
        </fieldset>

        <fieldset>
          
          <label className="c_input">
            <span className="c_input-label-text">Team name</span>
            <input type="text" id="team-name" placeholder="Team name"/>
          </label>
          
          <label className="c_input">
          <span className="c_input-label-text">Team leader's full name</span>
            <input type="text" id="team-leaders-full-name" placeholder="Team leader's full name" />
          </label>
          
          <label className="c_input">
            <span className="c_input-label-text">Team leader's email</span>
            <input type="text" id="team-leaders-email" placeholder="Team leader's email" />
          </label>

          </fieldset>

        <fieldset className="c_signup-form__more-members">
          <p className="c_signup-form__label-style">How many team members in total? (Including the team leader)</p>
          <div className={`c_signup-form__more-members__buttons chosen-number-${this.state.numberOfMembers}`}>
            <button 
              className="c_round-button c_round-button--members chosen-number" 
              onClick={() => this.changeNumberOfMembers(2)}
              type="button">
              2
            </button>
            <button 
              className="c_round-button c_round-button--members" 
              onClick={() => this.changeNumberOfMembers(3)}
              type="button">
              3
            </button>
            <button 
              className="c_round-button c_round-button--members" 
              onClick={() => this.changeNumberOfMembers(4)}
              type="button">
              4
            </button>
          </div>
          {this.renderInputField()}
          <p>Write the names you know, you can always add or edit it later. The most important thing for us to know is the total so we can book the hotel.</p>
        </fieldset>

        {/* <fieldset className="c_add-members">

            <label className="c_input">
              <span className="c_input-label-text">2nd team member name</span>
              <input 
                type="text" 
                id="team-member-2" 
                placeholder="2nd team member name"
                onBlur={this.addFirstMember} />
            </label>

            {this.renderExtraMembers}

            <button 
              className="c_add-team-member-button"
              type="button"
              onClick={this.addTeamMember}
              aria-label="Add another team member">
              <span>+</span>
            </button>

          </fieldset> */}

          {/* {this.state.members} */}
          <filedset>
            <h3>This includes</h3>
            <ul className="u_mega-bullet-list u_mega-bullet-list--dark">
              <li>
                <p>Entry to the challenge</p>
              </li>
              <li>
                <p>Tasty breakfast, lunch and dinner</p>
              </li>
              <li>
                <p>Comfy hotel room at <a href="http://voksenaasen.no" target="_blank" rel="noopener noreferrer" >Voksenaasen hotell</a> Thursday - Sunday</p>
              </li>
            </ul>

            <h3>You also get</h3>
            <ul className="u_mega-bullet-list u_mega-bullet-list--dark">
              <li>
                <p>New nerdy friends and great laughs</p>
              </li>
              <li>
                <p>Fun badges and great challenges</p>
              </li>
              <li>
                <p>Get aweseome talks about amazing IoT universe</p>
              </li>
            </ul>
            
            <h3>Some nitty-gritties</h3>
            <ul className="u_mega-bullet-list u_mega-bullet-list--dark">
              <li>
                <p>Get to know the badges in beforehand of the event. That way your teams meets prepared on how to include </p>
              </li>
              <li>
                <p>Your team needs to bring all your computers, keyboards, cables or other stuff you might need during your project (we will provide desks and Ethernet cables TODO hva mer her?).</p>
              </li>
            </ul>
            
            <h3>Any question?</h3>
            <ul className="u_mega-bullet-list u_mega-bullet-list--dark">
              <li>
              <p>Don't hesitate to contact us at <a href="mailto:signup@ariot.no" target="_blank" rel="noopener noreferrer" >signup@ariot.nol</a></p>
              </li>
            </ul>
          </filedset>
          
          <fieldset>
            <button 
              className="c_signup-form__submit"
              type="submit"
              onClick={this.sendForm}
              aria-label="Sign up to Ariot">
              <span>Sign up!</span>
            </button>
          </fieldset>
      </form>
    );
  }
}

export default SignupForm;