import React, { Component } from 'react';
import {
    View, StyleSheet, Dimensions
} from 'react-native';
import Modal from 'react-native-modal';
import GoogleReCaptcha from './GoogleReCaptcha';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

class ConfirmGoogleCaptcha extends Component {
    state = {
        show: false
    }
    show = () => {
        this.setState({ show: true });
    }
    hide = () => {
        this.setState({ show: false });
    }
    onMessage = event => {
        if (event && event.nativeEvent.data) {
            console.log(event.nativeEvent.data);
            if (event.nativeEvent.data === 'cancel') {
                this.hide();
                return;
            }
        }
        let timer = setTimeout(() => {
            this.hide();
            clearTimeout(timer);
        }, 1500);
    };
    render() {
        let { show } = this.state;
        let { siteKey, baseUrl, languageCode } = this.props;
        return (
            <Modal
                useNativeDriver
                hideModalContentWhileAnimating
                deviceHeight={height}
                deviceWidth={width}
                style={styles.modal}
                animationIn="fadeIn"
                animationOut='fadeOut'
                isVisible={show}>
                <View style={styles.wrapper}>
                    <GoogleReCaptcha
                        url={baseUrl}
                        siteKey={siteKey}
                        onMessage={this.onMessage}
                        languageCode={languageCode}
                    />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    text: { fontSize: 15, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginTop: 10 },
    modal: { margin: 0 },
    wrapper: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)', justifyContent: 'center', overflow: 'hidden' }
});
ConfirmGoogleCaptcha.propTypes = {
    siteKey: PropTypes.string.isRequired,
    baseUrl: PropTypes.string,
    languageCode: PropTypes.string
}
export default ConfirmGoogleCaptcha;
