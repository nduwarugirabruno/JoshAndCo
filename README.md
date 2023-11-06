# JoshAndCo

[![Be High - Jos&Co Logo](src/assets/images/logo.png)](https://github.com/nduwarugirabruno/JoshAndCo)

Mobile version of Josh&Co-SGBD

It can be previewed on my GitHub repository here: https://github.com/nduwarugirabruno/JoshAndCo

## Getting Started

To start building, clone this repository:

```bash
git clone https://github.com/nduwarugirabruno/JoshAndCo.git
```

Once cloned, run the following to install dependencies and run the app:

```bash
cd /path/to/the/cloned/repository/folder
npm i
ionic serve
```

## Production

To build for production, run:

```bash
ionic build
```

## Create apk

To build an apk package, run:

```bash
ionic cap add android
ionic cap sync
cd android
./gradlew assembleDebug 
```
Note: Gradle is necessary to use `./gradlew assembleDebug`. If it's asked, install it.


## Unit Tests

To run the unit tests once, run:

```bash
ionic test
```

To run the unit tests and watch for file changes during development, run:

```bash
ionic test --watch
```
