import React from "react";
import PropTypes from "prop-types";
import Button from '../BaseComponents/Button/Button';

export default function ActionButtons(props) {
  const { arMainButtons, arSecondaryButtons, onButtonPress } = props;

  function _onButtonPress(sAction: string, sButtonType: string) {
    onButtonPress(sAction, sButtonType);
  }

  return (
    <div className='govuk-button-group govuk-!-padding-top-4'>
      {arMainButtons.map(mButton => (
        <Button
          varient='primary'
          onClick={() => {
            _onButtonPress(mButton.jsAction, 'primary');
          }}
        >
          {mButton.name}
        </Button>
      ))}
      {arSecondaryButtons.map(sButton => (
        <Button
          varient='secondary'
          onClick={() => {
            _onButtonPress(sButton.jsAction, 'secondary');
          }}
        >
          {sButton.name}
        </Button>
      ))}
    </div>
  );
}

ActionButtons.propTypes = {
  arMainButtons: PropTypes.array,
  arSecondaryButtons: PropTypes.array,
  onButtonPress: PropTypes.func
  // buildName: PropTypes.string
};

ActionButtons.defaultProps = {
  arMainButtons: [],
  arSecondaryButtons: []
  // buildName: null
};
