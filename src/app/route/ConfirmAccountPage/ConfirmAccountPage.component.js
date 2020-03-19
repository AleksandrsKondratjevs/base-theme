/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { PureComponent } from 'react';
import Form from 'Component/Form';
import Field from 'Component/Field';
import Loader from 'Component/Loader';
import ContentWrapper from 'Component/ContentWrapper';
import './ConfirmAccountPage.style';

export default class ConfirmAccountPage extends PureComponent {
    static propTypes = {
        redirect: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        isSignedIn: PropTypes.bool,
        onConfirmAttempt: PropTypes.func.isRequired,
        onConfirmSuccess: PropTypes.func.isRequired,
        onFormError: PropTypes.func.isRequired
    };

    static defaultProps = {
        isSignedIn: false
    };

    render() {
        const {
            redirect, isLoading, isSignedIn,
            onConfirmAttempt, onConfirmSuccess, onFormError
        } = this.props;

        if (redirect || isSignedIn) return <Redirect to="/my-account/dashboard" />;

        return (
            <main block="ConfirmAccountPage" aria-label={ __('Confirm Account Page') }>
                <ContentWrapper
                  wrapperMix={ { block: 'ConfirmAccountPage', elem: 'Wrapper' } }
                  label={ __('Confirm Account Action') }
                >
                    <Loader isLoading={ isLoading } />
                    <h1>Please, confirm your account</h1>
                    <Form
                      key="confirm-account"
                      onSubmit={ onConfirmAttempt }
                      onSubmitSuccess={ onConfirmSuccess }
                      onSubmitError={ onFormError }
                    >
                        { /*
                            Added email field with display:none to fix warning
                            `Password forms should have (optionally hidden) username fields for accessibility`
                        */ }
                        <Field
                          type="text"
                          label={ __('Email') }
                          id="uemail"
                          name="uemail"
                        />
                        <Field
                          type="password"
                          label={ __('Password') }
                          id="confirmPassword"
                          name="confirmPassword"
                          validation={ ['notEmpty', 'password'] }
                        />
                        <div block="ConfirmAccountPage" elem="Button">
                            <button block="Button">{ __('Confirm') }</button>
                        </div>

                    </Form>
                </ContentWrapper>
            </main>
        );
    }
}