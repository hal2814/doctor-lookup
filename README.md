Doctor Lookup
=============================

Author:
Nate McGregor

Description:
------------
An application that returns a list of doctors based on medical issue and/or doctor name. It displays their picture, name, practice, address, bio, and if they are accepting new patients or not.

Setup instructions:
-------------------
go to https://developer.betterdoctor.com/ to sign up for a free API key

on your command line run:
```
git clone https://github.com/hal2814/doctor-lookup
```
```
cd doctor-lookup
```
```
touch .env
```
inside the .env file add your api key:
```
exports.apiKey = (your api key)
```
then on your command line run:

```
npm install
```
```
bower install
```
```
gulp build
```
```
gulp serve
```
This should open the application in your browser and you can start searching for doctors!

Future Features:
-------------
-different area searches


![alt text](/img/screen.png)

copyright Nate McGregor © 2017
