run: node_modules web
	

node_modules:
	npm install --save  

web: prepare
	(cd app/www; cors-proxy-cli elmst localhost 80)

prepare:
	(cd app; cordova prepare)

android: platformAndroid arun
	
arun: 
	(cd app; cordova run android)

platformAndroid:
	(cd app; cordova platform add android)

ios: platformiOS
	(cd app; cordova run ios)

platformiOS:
	(cd app; cordova platform add ios)
