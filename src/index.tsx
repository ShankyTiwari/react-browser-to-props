import React from 'react';

import Helpers from './helpers';

export interface PropsIntf {
  browserToProps: {
    queryParams: any;
    getQueryParamsValueByKey: Function;
    localStorageValues: any;
    setLocalStorageValueByKey: Function;
    getLSValueByKey: Function;
    deleteLSValueByKey: Function;
    deleteAllLSValue: Function;
  };
}

const browserToProps = () => {
  return {
    queryParams: Helpers.getAllQueryParams(),
    getQueryParamsValueByKey: Helpers.getQueryParamsValueByKey,
    localStorageValues: Helpers.getAllLocalStorage(),
    setLocalStorageValueByKey: Helpers.setLocalStorageValueByKey,
    getLSValueByKey: Helpers.getLocalStorageValueByKey,
    deleteLSValueByKey: Helpers.deleteLocalStorageValueByKey,
    deleteAllLSValue: Helpers.deleteAllLocalStorageValue,
  };
};

const BrowserToProps = (
  WrappedComponent:
    | React.ClassType<any, any, any>
    | React.FunctionComponent<any>
) => (
  props: any
): React.ClassType<PropsIntf & any, any, any> | React.FunctionComponent<PropsIntf & any> => {
  const propsValues = browserToProps();
  return (
    <WrappedComponent
      {...{
        browserToProps: propsValues,
      }}
      {...props}
    />
  );
};


export default BrowserToProps;