 import React from 'react';
import PropTypes from 'prop-types';


function makeHintId(identifier){return `${identifier}-hint`};
function makeErrorId(identifier){return `${identifier}-error`};

export default function FormGroup({labelIsHeading=true, label, errorText, hintText, name, children}){

  const formGroupDivClasses = `govuk-form-group ${errorText?'govuk-form-group--error':""}`.trim();
  const labelClasses = `govuk-label ${labelIsHeading?"govuk-label--l":""}`.trim();

  // TODO Refactor if required elsewhere
  const ConditionalWrapper = ({ condition, wrapper, childrenToWrap }) => {
    return condition ? wrapper(childrenToWrap) : childrenToWrap;
  }

  return (
    <div className={formGroupDivClasses}>
      <ConditionalWrapper
        condition={labelIsHeading}
        wrapper={ child => {
                  return (
                  <h1 className="govuk-label-wrapper">
                    {child}
                  </h1>)}
                }
        childrenToWrap={
          <label className={labelClasses} htmlFor={name}>{label}</label>
        }
      />
      {hintText && <div id={makeHintId(name)} className="govuk-hint">{hintText}</div>}
      {errorText  && <p id={makeErrorId(name)} className="govuk-error-message"><span className="govuk-visually-hidden">Error:</span>{errorText}</p> }
      {children}
  </div>
  )
}

FormGroup.propTypes = {
  label: PropTypes.string,
  labelIsHeading: PropTypes.bool,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
  children: PropTypes.node,
}

export {makeErrorId, makeHintId};
