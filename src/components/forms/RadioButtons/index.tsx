import React  from 'react';
import GDSRadioButtons from '../../BaseComponents/RadioButtons/RadioButtons';
import useIsOnlyField from '../../../helpers/hooks/QuestionDisplayHooks'
import Utils from '../../../helpers/utils';
import ReadOnlyDisplay from '../../BaseComponents/ReadOnlyDisplay/ReadOnlyDisplay';

export default function RadioButtons(props) {
  const {
    getPConnect,
    label,
    validatemessage,
    helperText,
    readOnly,
    value,
    name
  } = props;

  const isOnlyField = useIsOnlyField();

  const thePConn = getPConnect();
  const theConfigProps = thePConn.getConfigProps();
  // theOptions will be an array of JSON objects that are literally key/value pairs.
  //  Ex: [ {key: "Basic", value: "Basic"} ]
  const theOptions = Utils.getOptionList(theConfigProps, thePConn.getDataObject());
  const selectedOption = theOptions.find(option => option.key === value);


  let displayValue = null;
  if(selectedOption && selectedOption.value){
    displayValue = selectedOption.value;
  }

  if(readOnly){
    return <ReadOnlyDisplay label={label} value={displayValue} />
  }

  return (
    <GDSRadioButtons
      {...props}
      name={name}
      label={label}
      legendIsHeading={isOnlyField}
      options={theOptions.map(option => {return {value:option.key, label:option.value}})}
      displayInline={theOptions.length === 2}
      hintText={helperText}
      errorText={validatemessage}
    />
  );
}
