# Flat Startpage

Flat minimal start page made for elegant look and simple at same time.


[Figma](https://www.figma.com/file/pwdpYP5Mgg5CUtineWNqMJ/StartPage?node-id=0%3A3) for anyone who seeks interactive view.


![Flat startpage look!](/scrot.png)

## Pack as web-ext
1.  Clone the repo
```
git clone https://github.com/mahmoudk1000/flat-startpage.git
```

2.  You need to install web--ext tool by runing terminal<br>
```
sudo npm install -g web-ext
```

3.  Check Firefox [ext-packing guide](https://extensionworkshop.com/)<br>

4. Last step run in terminal in same dir where repo cloned
```
web-ext sign --api-key "YOUR_USER_KEY" --api-secret "YOUR_SECRET"
```

## Weather
For setting up the Weather widget you're going to need an API Key in: https://openweathermap.org/. Once you have your Key you'll need to set yourlatitude and longitude, you can use: https://www.latlong.net/ to get them. Then you just have to fill them in the weather.js in the js folder:
```js
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = "XXXXXXXXXXXXXXXXXXXXXXXXXXX";

setPosition();

function setPosition(position) {
  // Here you can change your position
  // You can use https://www.latlong.net/ to get it! (I use San Francisco as an example)
  let latitude = 37.774929;
  let longitude = -122.419418;

  getWeather(latitude, longitude);
}
```

## Update Pic photo
replace pic.png from images folder with the one you want.<br>
Note: The image could be square the rounded code from css. so i recommend to be square,
and also it would be good if it in 150px height and 150px wight too.

## Credits

[migueravila/Bento](https://github.com/migueravila/Bento) For time, date and weather script and weather guide.<br>
[MCotocel/startpage](https://github.com/MCotocel/startpage) For DuckDuckGo search script
