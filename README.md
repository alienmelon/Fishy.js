# A modern open source port of Fish for websites and beyond!
![Fish logo](http://mackerelmediafish.com/getfish/fishylogo_sml.png)

----

[Click here for a live demo](http://mackerelmediafish.com/getfish/)

----

Thanks to the efforts of internet archeologists who have salvaged what remains of *THE* Fish (last seen on [Mackerelmediafish.com](http://mackerelmediafish.com/)), the open source community has assembled this port of the MackerelmediaFish Player.
This is an effort to preserve Fish's internet legacy by giving it a place on the modern web.

Fishy.js is easy to install, and may reside on any domain!

Fish is still desirable for the Fish enabled presence it brings to websites, therefore market demand necessitated a javascript port of Fish. The open source community behind this initiative understands the controversial nature of this port, and concerns have been met with the following features...

* Fishy.js lets you run Fish on your website easily and without the need of third party plugins.
* Fishy.js is built for the modern web and works on mobile as well as other devices.
* Users can optionally choose to enable Fish, or Fish can be set to run automatically.

----

Installation is simple and requires no prior technical know-how of Fish technology!
Simply unzip the "fishyjs" folder in the same directory as the page that you would like to run Fish on.

Once installed to your server, add the following code to your page...

Under the *head* tag, add:

```javascript
<script src="fishyjs/fishy.js"></script>
```

Then make a call to the following in the *body* tag...

```javascript
<body onload="fishlet_init()">
```

This will automatically run Fish on page load.
In some usability cases it is recommended to let users opt in if they want to enable Fish or not. If you wish to use Fish with the "click to enable" feature (where autorun is not desired) make a call to the following in the body tag...

```javascript
<body onload="fishlet_bootup('CLICK HERE TO ENABLE FISH')">
```

This will place a button in the bottom left of your page. Users can optionally choose to enable Fish by clicking on the button.
**Note: You can customize your Fish button's message by passing a custom string in the function call.**

Once Fish is running, users can disable Fish anytime by clicking on the DISABLE FISH button in the bottom left of the page.

----

Further requests for technical support should be forwarded to [http://mackerelmediafish.com/](mackerelmediafish.com)
