
## react-native-google-recaptcha-v2
## Implement Google recaptcha v2 in React Native (both Android an iOS)

 

Thanks to https://github.com/aaronisme/rn-recaptcha

## Add it to your project

1. Run `npm install react-native-google-recaptcha-v2` or `yarn add react-native-google-recaptcha-v2`
2. `import ConfirmGoogleCaptcha from 'react-native-google-recaptcha-v2';`

## Usage

```javascript
import React from 'react';
import ConfirmGoogleCaptcha from 'react-native-google-recaptcha-v2';
const siteKey = 'you_site_key';
const baseUrl = 'base_url';
class App extends React.Component  {
    onMessage = event => {
        if (event && event.nativeEvent.data) {
            console.log('Verified code from Google',event.nativeEvent.data);
            if (event.nativeEvent.data === 'cancel') {
                this.captchaForm.hide();
                return;
            }
        }
        let timer = setTimeout(() => {
            this.captchaForm.hide();
            clearTimeout(timer);
        }, 1500);
    };
    render() {
        return (
            <View style={styles.container}>
                <ConfirmGoogleCaptcha
                    ref={_ref => this.captchaForm = _ref}
                    siteKey={siteKey}
                    baseUrl={baseUrl}
                    languageCode='en'
                />
                <Button
                    onPress={() => {
                        this.captchaForm.show();
                    }}
                    title='Click'
                    style={{ width: 120, backgroundColor: 'darkviolet' }}
                    textColor='#fff'
                />
            </View>
        );
    }
}
```

```
DEMO
```
![iOS](http://www.giphy.com/gifs/McUy4MlCvQwVIUqOcN)
![Android](http://www.giphy.com/gifs/RgbiP3Bs9Ye60z1mXE)



## Props

- **`siteKey`** _(String)_ - The site key of the Google Recaptcha.
- **`baseUrl`** _(String)_ The url domain defined on your Google Recaptcha.
- **`onMessage`** _(Function)_ - The callback function  after received response, error of Google captcha or when user cancel
- **`languageCode`** _(String)_ - Language to be display of captcha form. Can be found at [this link](https://developers.google.com/recaptcha/docs/language)


**MIT Licensed**
