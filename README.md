
# OAuth React App

## Getting started

```shell
git clone https://github.com/Sugan-s/OAuth-ReactApp.git && 
cd react-facebook-login
npm install react react-dom react-facebook-login --save --force
npm start
```
- navigate to [localhost:8080](http://localhost:8080)

In `Fasebook.js` need to change the appID according to the created facebook app's clientID

``` shell
else {
            fbContent = ( < FacebookLogin
                appId="625422664652947"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}/>

            )
```

For more information visit below mentioned blog 
[https://suganyas18.blogspot.com/2019/09/usingoauth-2.html]
