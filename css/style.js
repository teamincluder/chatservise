import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100% !important",
        "height": "100%"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100% !important",
        "height": "100%"
    },
    "ul": {
        "listStyle": "none"
    },
    "center": {
        "textAlign": "center"
    },
    "title-html": {
        "backgroundImage": "url(\"../img/top2.jpg\")",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover"
    },
    "title-body": {
        "background": "rgba(20,20,20,0.5)"
    },
    "title-main": {
        "width": "100%",
        "marginTop": "20%",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "image-logo": {
        "width": "50%"
    },
    "tool-name": {
        "color": "#0d0",
        "fontSize": 48,
        "fontFamily": "unset"
    },
    "concept-text": {
        "color": "#fff"
    },
    "login-list": {
        "color": "rgba(255,255,255,0.7)"
    },
    "login-list p": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "background": "rgba(40,40,40,0.6)",
        "color": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    }
});